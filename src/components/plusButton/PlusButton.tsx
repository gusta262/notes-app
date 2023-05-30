import React from "react";
import { Container, Plus } from "./styles";

export const PlusButton = ({...props}) => {
  return (
    <Container {...props}>
      <Plus />
    </Container>
  )
}