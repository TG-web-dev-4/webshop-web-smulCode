import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledProductSelect, Select, Option } from "./ProductSelect.styled";
import { useSelector, useDispatch } from "react-redux";
import { link, useParams } from "react-router-dom";


const ProductSelect = ({ color }) => {
  const [selected, setSelected] = useState("VARIETY PACK");
  const [product, setProduct] = useState([]);
  const products = useSelector((state) => state.productsReducer);
  const { id } = useParams();


  let navigate = useNavigate();

  const handleSelection = (e) => {
    const value = e.target.value;

    setSelected(value);
    navigate(`/Product/${value}`);
  };

  useEffect(() => {
    setSelected(id);
   
  }, [id]);

  useEffect(() => {
    const findSelected = products.find((product) => product.name === selected);
    setProduct(findSelected);
  }, [selected]);

  const option =
    products &&
    products.map((product) => {
      return <Option key={product.name}>{product.name}</Option>;
    });

  return (
    <StyledProductSelect>
      <Select color={color} name="name" value={id} onChange={handleSelection} >
      
        {option}
      </Select>
    </StyledProductSelect>
  );
};

export default ProductSelect;
