import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { updateBooking } from "../../services/apiBookings";

function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: checkin,
    isLoading: isCheckingIn,
    error,
  } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-in", isPaid: true }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("There was an error while checking in");
    },
  });

  return { checkin, isCheckingIn, error };
}

export default useCheckin;
