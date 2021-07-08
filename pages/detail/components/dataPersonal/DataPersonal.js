import 'bootstrap/dist/css/bootstrap.min.css'
import {
  DataPersonalStyl,
  Ul,
  Li,
} from './styled'


const DataPersonal = ({dataPerosnal}) => {
  return (
    <>
      <DataPersonalStyl>
        <Ul>
          <Li>Nome: { dataPerosnal.patient }</Li>
          <Li>Idade: { dataPerosnal.age }</Li>
          <Li>Telefone: { dataPerosnal.phone }</Li>
        </Ul>
      </DataPersonalStyl>
    </>
  )
} 

export default DataPersonal