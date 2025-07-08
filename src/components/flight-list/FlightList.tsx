import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDebounce } from "../../hooks/useDebounce";
import type { IFlight } from "../../types/IFlight";
import { SkeletonFlightsLoader } from "../loader/skeleton/SkeletonFlightsLoader";
import { FlightModal } from "../modal/flight-detail/FlightModal";
import FlightCard from "./FlightCard";
import { FLIGHTS } from "./flights.data";

export function FlightList() {
  const { flightNumber } = useParams();
  const [searchFromValueTo, setFromSearchTo] = useState("");
  const [searchFromValueFrom, setFromSearchToFrom] = useState("");

  const [flights, setFlights] = useState<IFlight[]>(FLIGHTS);
  const debounceFromSearchValueTo = useDebounce(searchFromValueTo, 300);
  const debounceFromSearchValueFrom = useDebounce(searchFromValueFrom, 300);
  useEffect(() => {
    const handle = setTimeout(() => {
      let result = FLIGHTS.filter((flight) =>
        flight.flightInfo.from
          .toLowerCase()
          .includes(debounceFromSearchValueFrom.toLowerCase()),
      );

      if (debounceFromSearchValueTo !== "") {
        result = result.filter((flight) =>
          flight.flightInfo.to
            .toLowerCase()
            .includes(debounceFromSearchValueTo.toLowerCase()),
        );
      }
      console.log(result);
      setFlights(result);
    }, 1000);

    return () => {
      clearTimeout(handle);
    };
  }, [debounceFromSearchValueTo, debounceFromSearchValueFrom]);
  return (
    <div className="w-[50%] flex justify-start max-md:w-full max-md:justify-center">
      {flightNumber && <FlightModal flightNumber={flightNumber} />}
      <div className="flex flex-col items-start gap-5 my-5 max-md:items-center">
        <div className="flex gap-2 w-[80%] max-sm:w-[100%] justify-center">
          <div className="w-[100%] max-md:flex max-md:justify-center">
            <input
              type="search"
              placeholder="From..."
              value={searchFromValueFrom}
              onChange={(e) => {
                setFromSearchToFrom(e.target.value);
              }}
              className="dark:bg-neutral-800 dark:text-white p-2 w-[90%] rounded-full bg-white text-black"
            />
          </div>

          <div className="w-[100%] max-md:flex max-md:justify-center">
            <input
              type="search"
              placeholder="To..."
              value={searchFromValueTo}
              onChange={(e) => {
                setFromSearchTo(e.target.value);
              }}
              className="dark:bg-neutral-800 dark:text-white p-2 w-[90%] rounded-full bg-white text-black"
            />
          </div>
        </div>

        {flights.length !== 0 ? (
          <div className="flex flex-col gap-2 items-start m_overflow-y-scroll m_overflow-x-visible no-scrollbar h-[76vh] animation-out-in max-md:items-center">
            {flights.length !== 0 ? (
              flights.map((flight) => (
                <FlightCard
                  key={flight.flightInfo.flightNumber}
                  flight={flight}
                  isList={true}
                />
              ))
            ) : (
              <p className="text-white">Flight Not Found</p>
            )}
          </div>
        ) : (
          <SkeletonFlightsLoader />
        )}
      </div>
    </div>
  );
}
