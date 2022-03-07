import StyledButton from "./Button.styled"

const Button = ({text,color,bgColor,shadowColor,width,onClick,padding}) => {
  return <StyledButton onClick={onClick} color={color} bgColor={bgColor} shadowColor={shadowColor} width={width} padding={padding}>{text}</StyledButton>;
};



Button.defaultProps = {
padding:"1rem 0",

}
export default Button;
