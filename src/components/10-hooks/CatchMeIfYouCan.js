import React, { useState } from "react";

const CatchMeIfYouCan = () => {
  const [posY, setPosY] = useState(20);

  const handleClick = () => setPosY(posY + 65);

  const style = {
    position: "absolute",
    left: 500,
    top: posY,
  };
  return (
    <div style={style} onMouseEnter={handleClick} className="btn-warning btn">
      {"ClickME!"}
    </div>
  );
};

export default CatchMeIfYouCan;
