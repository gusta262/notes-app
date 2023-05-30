import styled from 'styled-components/native'
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme.plusButton.background};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
  bottom: 20px;
  right: 20px;

  align-items: center;
  justify-content: center;
`

export const Plus = styled(AntDesign).attrs({
  name: "plus",
  size: 40,
})`
  color: ${({ theme }) => theme.plusButton.plus};
`