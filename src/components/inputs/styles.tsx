import styled from 'styled-components/native'

export const RowContainer = styled.View`
  background-color: ${({ theme }) => theme.background};
  padding: 10px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`

export const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: 'gray',
  placeholderFontWeight: 'bold',
  color: `${theme.inputText}`,
}))`
  padding-left: 10px;
  width: 90%;
`