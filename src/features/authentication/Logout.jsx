import { HiArrowRightOnRectangle } from "react-icons/hi2";

import Spinner from "../../ui/Spinner";
import ButtonIcon from "../../ui/ButtonIcon";

import { useLogout } from "./useLogout";

function Logout() {
  const { isLoading, logout } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <Spinner />}
    </ButtonIcon>
  );
}

export default Logout;
