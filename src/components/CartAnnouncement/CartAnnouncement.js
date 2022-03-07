import { StyledCartAnnouncement,Title,SubTitle } from "./CartAnnouncement.styled";
import PropTypes from "prop-types";


const CartAnnouncement = ({ title, subTitle }) => {
  

  return (
    <StyledCartAnnouncement>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>

  
      </StyledCartAnnouncement>
  );
};


CartAnnouncement.defaultProps = {
  title: "FREE SHIPPING ON ORDERS OVER €30.00",
  subTitle: "(Total must be €30+ after discounts to receive free shipping.)"
};

CartAnnouncement.propTypes = { title: PropTypes.string.isRequired };
export default CartAnnouncement;
