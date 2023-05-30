import React from "react";
import { RowContainer, StyledTextInput, Title } from "./styles"

export const CustomTextInput = ({ ...props }) => {
  const { label } = props;

  return (
    <RowContainer>
      <Title>{label || ""}</Title>
      <StyledTextInput {...props} />
    </RowContainer>
  )
}