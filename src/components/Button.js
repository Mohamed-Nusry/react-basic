import ButtonComponent from "@mui/material/Button";
import { useState } from "react";

function Button(props) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const onClickButton = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div>
      <ButtonComponent onClick={onClickButton} variant={props.type}>
        {props.text}
      </ButtonComponent>
      <p>{buttonClicked ? "clicked" : "default"}</p>
    </div>
  );
}

export default Button;
