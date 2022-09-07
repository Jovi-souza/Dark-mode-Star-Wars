import { Switch } from "@mui/material";
import LightIcon from "../../images/Trooper-Helmet.svg";
import { Container, ImgContainer } from "./styles";
export function Light() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <Container>
      <ImgContainer>
        <img src={LightIcon} />
      </ImgContainer>
      <Switch {...label} color="warning" size="medium" />
      <h2>Juntar-se ao lado escuro!</h2>
    </Container>
  );
}
