import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  onLogoClick: (section:string) => void;
  onProfileClick: (section:string) => void;
}

export const Navbar = ({ onLogoClick, onProfileClick }:Props) => {

  return (
    <>
      <div className="navbar-container bg-light p-3">
        <div className="app-logo" onClick={ () => onLogoClick('home') }>
          <BsFillLightningChargeFill />
          three pics
        </div>
        <FaUserCircle onClick={ () => onProfileClick('profile') } />
      </div>
    </>
  )
}
