import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  const {
    isLoading,
    error,
    data: bookings,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter, sortBy: null }),
  });

  return { isLoading, error, bookings };
}
