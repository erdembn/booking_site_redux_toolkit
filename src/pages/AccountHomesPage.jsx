import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEv, editEv } from "../features/userData/userSlice";
import Card from "../components/card/Card";
import "./AccountHomesPage.css";

const AccountHomesPage = () => {
  const { evler } = useSelector((state) => state.user);
  const [isEdit, setIsEdit] = useState(false);
  const [newPrice, setNewPrice] = useState(0);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEv(id));
  };

  const handleEdit = (apart) => {
    if (isNaN(newPrice) || newPrice === "" || newPrice === '0') {
      alert("Lütfen geçerli bir fiyat giriniz");
      return;
    } else {
      setIsEdit(false);
      dispatch(editEv({ ...apart, price: newPrice }));
    }
  };
  return (
    <div className="account-homes-container">
      <h1>Evleriniz</h1>
      {evler.length > 0 &&
        evler.map((apart) => (
          <div key={apart.apartId} className="homes-cards-container">
            <Card apart={apart} />
            <div className="account-homes-btn-container">
              <button onClick={() => setIsEdit(true)} className="btn">
                Fiyatı Güncelle
              </button>

              <button
                onClick={() => handleDelete(apart.apartId)}
                className="btn"
              >
                Evi Kaldır
              </button>
            </div>
            {isEdit && (
              <div className="account-homes-edit-container">
                <input
                  type="text"
                  placeholder="Yeni Fiyat"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
                <button onClick={() => handleEdit(apart)} className="btn">
                  Kaydet
                </button>
                <button onClick={() => setIsEdit(false)} className="btn">
                  İptal
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default AccountHomesPage;
