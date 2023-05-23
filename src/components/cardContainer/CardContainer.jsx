import { useSelector } from "react-redux";
import Card from "../card/Card";
import "./CardContainer.css";

import React from "react";

const CardContainer = () => {
  const { apartList } = useSelector((state) => state.apart);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <span class="loader"></span>;
  }

  return (
    <div className="cards-container">
      {apartList.map((apart) => (
        <Card key={apart.apartId} apart={apart} />
      ))}
    </div>
  );
};

export default CardContainer;
