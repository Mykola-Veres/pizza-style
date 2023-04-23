import { useState } from 'react';
import {
  ButtonMinusStyled,
  ButtonPlusMinusStyled,
  ButtonStyled,
} from './ButtonStyle';

export default function Button(props) {
  const [color, setColor] = useState(false);
  const [clickOnBtn, setClickOnBtn] = useState(false);

  const handleClick = () => {
    setColor(!color);
    setClickOnBtn(!clickOnBtn);
  };

  return (
    <>
      {clickOnBtn ? (
        <>
          <ButtonPlusMinusStyled>+</ButtonPlusMinusStyled>
          <ButtonMinusStyled>-</ButtonMinusStyled>
        </>
      ) : (
        <ButtonStyled color={color ? props.color : null} onClick={handleClick}>
          {props.children}
        </ButtonStyled>
      )}
    </>
  );
}
