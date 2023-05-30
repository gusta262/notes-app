import React from "react";
import { AwesomeIcon, Button, ButtonIcon, Text } from "./styles"

export const SimpleButton = ({ ...props }) => {
  const { label } = props
  return (
    <Button {...props}>
      <Text>{label || ""}</Text>
    </Button>
  )
};

export const ButtonWithIcon = ({ ...props }) => {
  const { label, iconName } = props

  return (
    <ButtonIcon {...props}>
      <Text style={{ textAlign: "center", width: "85%" }}>{label || ""}</Text>
      <AwesomeIcon name={iconName || ""} size={22} />
    </ButtonIcon>
  )
}