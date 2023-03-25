import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-container bg-light p-3">
        <div className="app-logo">
          <BsFillLightningChargeFill />
          three pics
        </div>
        <FaUserCircle />
      </div>
    </>
  )
}
