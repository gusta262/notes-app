import styled from 'styled-components/native'
import { FontAwesome } from "react-native-vector-icons";

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    background-color: whitesmoke;
    border-radius: 20px;
    margin: 10px 0;
    padding: 8px;
    align-items: center;
    shadow-color: #000;
    shadow-offset: 5px 10px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
    width: 90%;
`
export const ButtonIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border-radius: 20px;
  margin: 10px 0;
  padding: 8px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 5px 10px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  width: 90%;
`

export const Text = styled.Text`
    color: ${({ theme }) => theme.primary};
    font-size: 18px;
    font-weight: bold;
`

export const AwesomeIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.secondary};
  align-self: center;
`