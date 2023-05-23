import React from "react";
import { useContext } from "react";
import { LoginAuth } from "../contexts/LoginAuth";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { user } = useContext(LoginAuth);

  return (
    <div className="profile-page-container">
      <h1>Tekrar Hoşgeldin </h1>

      <h2>{user && user.fullName}</h2>
      <p>
        Randevularını ve sana ait evleri ilgili sayfalardan artık kolaylıkla
        düzenleyebilirsin!
      </p>
    </div>
  );
};

export default ProfilePage;
