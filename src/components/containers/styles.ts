import styled from 'styled-components/native'

export const SimpleContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`

export const RowLine = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.primary};
`