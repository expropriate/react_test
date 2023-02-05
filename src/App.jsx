/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import { Colorfulmessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("saisyo");
  const [num, setNum] = useState(0);
  const [faceFlg, setFaceFlg] = useState(true);

  const onclickCountUp = () => {
    setNum(num + 1);
  };
  const onclickSwitchFlg = () => {
    setFaceFlg(!faceFlg);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceFlg || setFaceFlg(true);
    } else {
      faceFlg && setFaceFlg(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello!</h1>
      <Colorfulmessage color="purple">YES</Colorfulmessage>
      <Colorfulmessage color="pink">NOO</Colorfulmessage>
      <button onClick={onclickCountUp}>カウントbutton</button>
      <br />
      <button onClick={onclickSwitchFlg}>on/off</button>
      <p>{num}</p>
      {faceFlg && <p>( *´艸｀)</p>}
    </>
  );
};

export default App;
