import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./AccountPage.css";
import { LoginAuth } from "../contexts/LoginAuth";
import AppointmentsPage from "../pages/AppointmentsPage";
import ProfilePage from "../pages/ProfilePage";
import AccountHomesPage from "./AccountHomesPage";

const AccountPage = () => {
  const { user } = useContext(LoginAuth);
  const { subpage } = useParams();
  return (
    <div>
      <div className="account-nav">
        <Link to="/account/randevu">Randevularım</Link>
        <Link to="/account/evler">Evlerim</Link>
        <Link to="/account/profile">Profilim</Link>
      </div>

      {subpage && subpage === "randevu" ? (
        <AppointmentsPage />
      ) : subpage && subpage === "evler" ? (
        <AccountHomesPage />
      ) : (
        <ProfilePage />
      )}
    </div>
  );
};

export default AccountPage;
