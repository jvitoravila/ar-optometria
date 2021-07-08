import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from 'react-bootstrap/Spinner';
import {
    LoaderStyl,
} from './styled'

const Loader = () => {  
  return (
    <LoaderStyl>
      <Spinner animation="border" />
    </LoaderStyl>
  )
} 

export default Loader