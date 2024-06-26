'use client';

import { notFound, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useEffect } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";

interface SearchParamProps{
    searchParams : { token:string, userId:string };
}

const Verify:React.FC<SearchParamProps> = ({searchParams}) => {
  const { token, userId } = searchParams;
  const router = useRouter();
  const LoginModalHook = useLoginModal();

  useEffect(() => {
    fetch("/api/users/verify", {
        method: "POST",
        body: JSON.stringify({token, userId})
    }).then(async (res) => {
        const apiRes = await res.json();
        const { error, message } = apiRes as { message: string; error: string };

        if (res.ok) {
            toast.success(message);
            LoginModalHook.onOpen();
        }
        if (!res.ok && error) {
          toast.error(error);
        }
        router.replace("/");
    });
  }, []);

  if (!token || !userId) {
    return notFound();
  }

  return (
    <div className="text-3xl opacity-70 text-center p-5 animate-pulse">
      Please wait...
      <p>We are verifying your email</p>
    </div>
  );
}

export default Verify;