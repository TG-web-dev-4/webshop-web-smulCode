import styled from 'styled-components'

const Container = styled.div`
  height:30px;
  background: ${({ theme }) => theme.primaryLight};
  color:${({ theme }) => theme.primaryDark};
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  margin:0.6em;
  font-size:14px;
  font-weight: 500;
  padding:0 4em;
  line-height:1em;
  
  
`

const Announcement = () => {
  return( <Container>
    USE CODE VDAY20 FOR 20% OFF SITEWIDE! • FREE SHIPPING ON EU ORDERS €30+
  </Container>);
};

export default Announcement;
