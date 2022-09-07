import { Switch } from "@mui/material";
import DarkIcon from "../../images/darth-vader.svg";
import { Container, ImgContainer } from "./styles";
export function Dark() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <Container>
      <ImgContainer>
        <img src={DarkIcon} />
      </ImgContainer>
      <Switch {...label} color="warning" size="medium" />
      <h1>Juntar-se ao lado escuro!</h1>
    </Container>
  );
}