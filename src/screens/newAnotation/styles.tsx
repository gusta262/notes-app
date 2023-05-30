import styled from 'styled-components/native'

export const SubmitButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primary};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
`

export const SubmitText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
  text-align: center;
`