"use client";

import { User, Listing, PausedDates, Review } from "@prisma/client";

import { categories } from "@/app/components/navbar/Categories";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import ListingReservation from "@/app/components/listings/ListingReservation";
import ReviewClient from "@/app/components/Review/ReviewClient";

import axios from "axios";
import { toast } from "react-hot-toast";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";

interface ReviewIncludesUserProps extends Review{
    user: User
}


interface ListingClientProps {
  currentUser: User | null;
  listing: Listing & { user: User };
  pausedDates: PausedDates[];
  reviews: ReviewIncludesUserProps[];
  data: any;
  payloadMain: string;
  checksum: string;
}

const ListingClient: React.FC<ListingClientProps> = ({
  currentUser,
  listing,
  pausedDates,
  reviews,
  data,
  payloadMain,
  checksum,
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  useEffect(() => {
    if (!listing.user?.isTakingReservation) {
      toast.error("The adventure is currently not taking reservations!");
    }
  }, []);

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    pausedDates.forEach((pausedDate) => {
      if (pausedDate.paused == true) {
        dates = [...dates, pausedDate.startDate];
      }
    });
    return dates;
  }, [pausedDates]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateValue, setDateValue] = useState<Date>(new Date());

  const onCreateEnquiry = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    axios.post("/api/conversations", { userId: listing.userId }).then(() => {
      router.push("/inbox");
    });
  }, []);

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    setIsLoading(true);
    axios
      .post("/api/reservations", {
        totalPrice,
        startDate: dateValue,
        endDate: dateValue,
        listingId: listing?.id,
      })
      .then(() => {
        return axios.post("/api/conversations", { userId: listing.userId });
      })
      .then(() => {
        const options = {
          method: "POST",
          url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-VERIFY": checksum,
          },
          data: {
            request: payloadMain,
          },
        };

        axios
          .request(options)
          .then((response) => {
            console.log(response.data);
            router.replace(
              response.data.data.instrumentResponse.redirectInfo.url
            );
          })
          .catch((error) => {
            toast.error(
              "Something went wrong in processing the payment. Please try again."
            );
            console.error(error);
          });
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [
    totalPrice,
    dateValue,
    listing?.id,
    router,
    currentUser,
    loginModal,
    data,
    payloadMain,
    checksum,
  ]);

  useEffect(() => {
    if (dateValue) {
      const dayCount = 1;
      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateValue, listing.price]);

  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);
  
  const averageRating = reviews?.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  const totalRatings = reviews?.length ?? 0;

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            listing={listing}
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              listing={listing}
              user={listing.user}
              category={category}
              description={listing.description}
              guestCount={listing.guestCount}
              locationValue={listing.locationValue}
              onSubmit={onCreateEnquiry}
            />
            <div className="order-first mb-10 md:order-last md:col-span-3">
              <ListingReservation
                host={listing.user}
                user={currentUser}
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateValue(value)}
                dateValue={dateValue}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-3xl font-bold text-gray-800">
              {averageRating.toFixed(1)}{" "}
              <span className="text-gray-500">/ 5.0</span>
            </p>
            <p className="text-gray-600 text-sm">Average Rating</p>
            <p className="text-gray-600 text-sm mt-2">
              Based on {totalRatings} reviews
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10 mt-6">
            <ReviewClient reviews={reviews ?? []} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
