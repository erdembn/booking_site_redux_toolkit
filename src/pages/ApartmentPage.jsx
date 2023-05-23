import { useState } from "react";
import Card from "../components/card/Card";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addRandevu } from "../features/userData/userSlice";
import "./ApartmentPage.css";

const ApartmentPage = () => {
  const { id } = useParams();

  const { apartList } = useSelector((state) => state.apart);
  const dispatch = useDispatch();

  const apart = apartList.find((apart) => apart.apartId == id);

  const [randevu, setRandevu] = useState("");
  const [message, setMessage] = useState("");
  const [randevuId, setRandevuId] = useState(
    Math.floor(Math.random() * 100000)
  );
  const [singleRandevu, setSingleRandevu] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setRandevuId(Math.floor(Math.random() * 100000));

    setSingleRandevu({
      randevuId,
      randevu,
      message,
      apartId: apart.apartId,
      apart: apart,
    });

    if (Object.keys(singleRandevu).length === 0) {
      alert("Lütfen randevu vaktini seçiniz");
    } else {
      dispatch(addRandevu(singleRandevu));
      setMessage("");
      setRandevu("");
      setRandevu({});
    }
  };

  const updateDate = (e) => {
    setRandevu(e.target.value);
    setSingleRandevu({
      randevuId,
      randevu,
      message,
      apartId: apart.apartId,
      apart: apart,
    });
  };

  return (
    <div className="apartment-page-container">
      {apart && (
        <>
          <Card apart={apart} />

          <div className="apartment-page-form-container">
            <form action="" onSubmit={handleSubmit}>
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
                onChange={(e) => updateDate(e)}
                onBlur={(e) => updateDate(e)}
                onSelect={(e) => updateDate(e)}
              />
              <button type="submit" className="btn btn-randevu">
                Randevu Al
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ApartmentPage;
