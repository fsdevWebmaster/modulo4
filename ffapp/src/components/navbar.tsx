import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  onLogoClick: () => void;
  onProfileClick: () => void;
}

export const Navbar = ({ onLogoClick, onProfileClick }: Props) => {
  return (
    <>
      <div className="navbar-container bg-light p-3">
        <div onClick={ onLogoClick } className="app-logo navbar-btn">
          <BsFillLightningChargeFill />
          three pics
        </div>
        <FaUserCircle onClick={ onProfileClick } className="navbar-btn"/>
      </div>
    </>
  )
}
