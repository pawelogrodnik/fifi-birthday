import * as React from "react";
import "./card.scss";
import dinus from "./dinusv2.jpg";

const TYPES = {
  DZIADKI_OG: "?vo",
  DZIADKI_SZ: "?vs",
  K: "?vk",
  J: "?vj",
};

const Card = ({ type }) => (
  <div className="card">
    <div className="imgBox">
      <div className="bark"></div>
      <img src={dinus} alt="Urodzinowy dinuś" />
      <h4 className="color1 imgBox__title">Zaproszenie!</h4>
    </div>

    <div className="details">
      <h4 className="color1">Urodzinki</h4>
      <h4 className="color2 margin">
        Cześć {type === TYPES.K && "Ciociu"}
        {type === TYPES.J && "Karolku"}!
      </h4>
      <p>Z tej strony Fifi</p>
      <p>Niedługo będę obchodził swoje drugie</p>
      {type === TYPES.DZIADKI_OG && (
        <>
          <p>urodziny, na które chciałbym Was</p>
          <p>serdecznie zaprosić.</p>
          <p>Impreza odbędzie się 29 stycznia.</p>
          <p>Zapraszam nawet jak będę jeszcze spał</p>
          <p>PS. w tym roku obchodzę urodziny</p>
          <p>razem z Babcią Paulinką</p>
          <p className="text-right">Czekam na Was!</p>
        </>
      )}
      {type === TYPES.DZIADKI_SZ && (
        <>
          <p>urodziny, na które chciałbym Was</p>
          <p>serdecznie zaprosić.</p>
          <p>Impreza odbędzie się 5 lutego.</p>
          <p>Zapraszam nawet jak będę jeszcze spał</p>
          <p>PS. w tym roku obchodzę urodziny</p>
          <p>razem z Wujkiem Fafałem</p>
          <p className="text-right">Czekam na Was!</p>
        </>
      )}
      {type === TYPES.K && (
        <>
          <p>urodziny, na które chciałbym Cię</p>
          <p>serdecznie zaprosić.</p>
          <p>Impreza odbędzie się 1 lutego.</p>
          <p>Zapraszam nawet jak będę jeszcze spał</p>
          <p className="text-right">Czekam na Ciebie!</p>
        </>
      )}
      {type === TYPES.J && (
        <>
          <p>urodziny, na które chciałbym Cię</p>
          <p>serdecznie zaprosić.</p>
          <p>Impreza odbędzie się 1 lutego.</p>
          <p>Wpadnij z Rodzicami!</p>
          <p className="text-right">Czekam na Ciebie!</p>
        </>
      )}
      <p className="text-right">♥Fifi</p>
    </div>
  </div>
);

export default Card;
