import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 30px;
    background-color: #f6ad94;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14 px;
    font-weight: 500;
    cursor: pointer;
    
`;
const Dashboard = styled.div`
  text-decoration: inherit;
`

const Announcement = () => {
  return (
    <Container>
      <Link style={{ textDecoration: 'none', color: 'white' }} to="https://yummycakes-admin.vercel.app/">
        <Dashboard>
            Admin Dashboard 
        </Dashboard>        
      </ Link>
        
    </Container>
   
  )
}

export default Announcement
