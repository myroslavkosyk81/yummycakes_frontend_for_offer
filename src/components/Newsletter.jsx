import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
    height: 15vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 10px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 30px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 10px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Get updates from your best shop</Desc>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
