import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import type { IFlight } from "../../../types/IFlight";
import { FLIGHTS } from "../../flight-list/flights.data";
import { SkeletonDetailLoader } from "../../loader/skeleton/SkeletonDetailLoader";
import { FlightAction } from "./FlightActions";
import { FlightInfo } from "./FlightInfo";
import { MultiFlightInfo } from "./MultiFlightInfo";
import { PlaneInfo } from "./PlaneInfo";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  addFavorite,
  removeFavorite,
} from "../../../store/favorite/favorite.slice";
interface Props {
  flightNumber: string;
}

export function FlightModal({ flightNumber }: Props) {
  const dispatch = useDispatch();
  const favorites = useAppSelector((state) => state.favorites);
  const isFavorite = favorites.includes(flightNumber);

  const [flight, setFlight] = useState<IFlight | undefined>(undefined);
  useEffect(() => {
    setTimeout(() => {
      setFlight(
        FLIGHTS.find(
          (flight) => flight.flightInfo.flightNumber === flightNumber,
        )!,
      );
    }, 1000);
  }, [flightNumber]);

  const onFollow = useCallback(() => {
    if (!isFavorite) {
      dispatch(addFavorite(flightNumber));
    } else {
      dispatch(removeFavorite(flightNumber));
    }
  }, [flightNumber, dispatch, isFavorite]);

  return createPortal(
    <div className="absolute right-10 top-25 bg-white dark:bg-black md:overflow-y-auto rounded-2xl h-[82%] w-[45%] md:no-scrollbar text-black dark:text-white transition-all duration-300 pb-2 max-md:w-full max-md:top-[2%] max-md:right-0 max-md:h-[800px] max-md:animation_down_up">
      {flight ? (
        <>
          <PlaneInfo flight={flight!} />
          <div className="flex flex-col items-center gap-2 pt-5">
            <FlightInfo flight={flight!} />

            <MultiFlightInfo flight={flight!} />

            <FlightAction
              onRoute={() => {}}
              onFollow={onFollow}
              onMore={() => {}}
              onShare={() => {}}
              isFollow={isFavorite}
            />
          </div>
        </>
      ) : (
        <SkeletonDetailLoader />
      )}
    </div>,
    document.body,
  );
}
