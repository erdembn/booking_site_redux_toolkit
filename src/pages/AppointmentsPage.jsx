import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/card/Card";
import { deleteRandevu } from "../features/userData/userSlice";
import { useNavigate } from "react-router-dom";
import "./AppointmentsPage.css";

const AppointmentsPage = () => {
  const { randevular } = useSelector((state) => state.user);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (randevuId) => {
    dispatch(deleteRandevu(randevuId));
  };

  const handleEdit = (apartId) => {
    Navigate(`/edit/${apartId}`);
  };
  return (
    <div className="appointments-page-container">
      <h1>Randevular</h1>

      {randevular.length ? (
        randevular.map((randevu) => (
          <div className="randevu-cards-container" key={randevu.randevuId}>
            <Card apart={randevu.apart} />
            <div className="randevu-information-container">
              <h3>
                Randevu Tarihi: {new Date(randevu.randevu).toLocaleDateString()}
              </h3>
              <h3>
                Randevu Saati: {new Date(randevu.randevu).toLocaleTimeString()}{" "}
              </h3>
              {randevu.message && <h3>Mesaj: {randevu.message}</h3>}
            <div className="appointments-page-btn-container">
            <button
                onClick={() => handleEdit(randevu.randevuId)}
                className="btn"
              >
                Düzenle
              </button>
              <button
                onClick={() => handleDelete(randevu.randevuId)}
                className="btn"
              >
                Sil
              </button>
            </div>
            </div>
          </div>
        ))
      ) : (
        <div>Henüz bir randevu yok</div>
      )}
    </div>
  );
};

export default AppointmentsPage;
