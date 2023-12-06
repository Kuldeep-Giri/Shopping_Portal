import Form from 'react-bootstrap/Form';
import { useProduct } from '../context/ProductContext';

const Sort = () => {
  const  {sorting} = useProduct();
  return (
   <form action="">
     <Form.Select aria-label="Default select example" name='sort' id='sort' onClick={sorting}>
    <option value="lowest">Price(low to high)</option>
    <option value="highest">Price( high to low)</option>
    <option value="a-z">Price(a-z)</option>
    <option value="z-a">Price(z-a)</option>
  </Form.Select>
   </form>
  )
}

export default Sort