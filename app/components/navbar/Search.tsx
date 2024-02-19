'use client';

import {BiSearch} from "react-icons/bi";
import { format } from "date-fns";


import useCountries from "@/app/hooks/useCountries";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import SearchComponent from "./SearchComponent";

const Search = () => {
    const params = useSearchParams();
    const { getByValue } = useCountries();

    const locationValue = params?.get('locationValue');
    const stateValue = params?.get('stateValue');
    const cityValue = params?.get('cityValue');
    const startDate = params?.get('startDate');
    const endDate = params?.get('endDate');
    const guestCount = params?.get('guestCount');

    const locationLabel = useMemo(() => {
        if(cityValue) {
            return cityValue;
        }
        if(locationValue) {
            return getByValue(locationValue as string)?.label;
        }
        return "Anywhere";
    }, [getByValue, cityValue, stateValue, locationValue]);

    const dateLabel = useMemo(() => {
        if(startDate) {
            const start = new Date(startDate);
            return `${format(start, "d")} ${format(start, "MMM")}`;
        }
        return "Any Day";
    }, [startDate]);

    const guestLabel = useMemo(() => {
        if(guestCount) {
            return `${guestCount} Persons`;
        }
        return "Add People";
    }, [guestCount]);

    const [coordinates, setCoordinates] = useState(null);

    const fetchCoordinates = async (searchText:string) => {
        const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
        const endpoint = 'mapbox.places';
        const url = `https://api.mapbox.com/geocoding/v5/${endpoint}/${encodeURIComponent(searchText)}.json?access_token=${accessToken}`;
    
        try {
          const response = await fetch(url);
          const data = await response.json();
          const { features } = data;
          if (features && features.length > 0) {
            const { center } = features[0];
            setCoordinates(center); // center contains [longitude, latitude]
          } else {
            setCoordinates(null);
            alert('No results found');
          }
        } catch (error) {
          console.error("Failed to fetch coordinates", error);
          setCoordinates(null);
        }
      };
    

    return (
        <>
        <SearchComponent onSearch={fetchCoordinates} />
     
        </>
    );
}

export default Search;