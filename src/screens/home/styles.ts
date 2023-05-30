import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`

export const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
`

export const ModalView = styled.View`
    width: 80%;
    margin: 20px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 20px;
    padding:  15px 20px 5px 20px;
    align-items: center;
    shadow-color: #000;
    shadow-offset: 5px 10px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 5;
`