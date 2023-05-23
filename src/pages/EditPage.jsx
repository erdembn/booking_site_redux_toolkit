import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/card/Card";
import "./EditPage.css";
import { editRandevu } from "../features/userData/userSlice";

const EditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { randevular } = useSelector((state) => state.user);
  const Navigate = useNavigate();

  console.log(randevular);
  console.log(id);
  const apart = randevular.filter((randevu) => randevu.randevuId == id);
  const [randevu, setRandevu] = useState(apart.randevu);
  const [message, setMessage] = useState(apart.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editRandevu({ ...apart[0], randevu, message }));
    Navigate("/account/randevu");
  };
  return (
    <div className="edit-page-container">
      <h1>Düzenle</h1>
      {apart.length && <Card apart={apart[0].apart} />}

      <div className="apartment-page-form-container">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="message">Mesajınız</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label htmlFor="randevu">Randevu Tarihi</label>
          <input
            type="datetime-local"
            name="randevu"
            id="randevu"
            required
            value={randevu}
            onChange={(e) => setRandevu(e.target.value)}
          />
          <button className="btn btn-randevu">Tarihi Değiştir</button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
