import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion';
import ClinicalDataForm from '../../../../components/create/clinicalData'
import CommentsDataForm from '../../../../components/create/CommentsData'
import {
  DataClinicalStyl,
  Ul,
  Li,
  Strong,
} from './styled'


const DataClinical = ({dataClinical}) => {

  const updatePayloadClinicalData = (field, value) => {
    setPayload({
      ...payload,
      clinicalData: {
        ...payload.clinicalData,
        [field]: value,
      }
    })
  }

  const updatePayloadCommentsData = (field, value) => {
    console.log(field, value)
    setPayload({
      ...payload,
      comments: {
        ...payload.comments,
        [field]: value,
      }
    })
  }
  
  return (
    <>
      <DataClinicalStyl>
        <h5>
          Dados clínicos <Badge variant="secondary"></Badge>
        </h5>
        <Ul>
          <Li>
            uso de óculos: 
            <Strong>{ dataClinical.glasses || 'sem dado'}</Strong>
          </Li>
          <Li>
            Antecedentes pessoais:
            <Strong>{ dataClinical.personalBackground || 'sem dado'}</Strong>
          </Li>
          <Li>
            Motivo da consulta:
            <Strong>{ dataClinical.reason || 'sem dado'}</Strong>
          </Li>
        </Ul>
        <hr />
        <h5>
          Nova consulta <Badge variant="secondary"></Badge>
        </h5>
        <Accordion defaultActiveKey="0">
          <ClinicalDataForm updatePayloadClinicalData={updatePayloadClinicalData}/>
          <CommentsDataForm updatePayloadCommentsData={updatePayloadCommentsData}/>
        </Accordion>

      </DataClinicalStyl>
    </>
  )
} 

export default DataClinical