import { useState } from "react";
import { Switch } from "@mui/material";

import DarkIcon from "../images/darth-vader.svg";
import LightIcon from "../images/Trooper-Helmet.svg";

import { Light } from "../styles/Theme/Light";
import { Dark } from "../styles/Theme/Dark";
import { Container, ImgContainer } from "./styles";

export function DefaultLayout() {
  const [theme, setTheme] = useState(Light);
  const [icon, setIcon] = useState(LightIcon);
  const [text, setText] = useState('Juntar-se ao lado escuro!');

  function HandleSwitchTheme() {
    setTheme ( 
      theme === Light ? 
      Dark : 
      Light
    )
    setIcon(
      icon === LightIcon ? 
      DarkIcon : 
      LightIcon
    )

    setText( 
      text === 'Juntar-se ao lado escuro!' ? 
      'Volte para as tropas!' : 
      'Juntar-se ao lado escuro!'
    )
  }

  return (
    <Container className={theme}>
      <ImgContainer>
        <img src={icon} />
      </ImgContainer>
      <Switch 
        color="warning" 
        size="medium" 
        onClick={HandleSwitchTheme}
      />
      <h1>{text}</h1>
    </Container>
  );
}
