import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { db } from '../../api/firebase'
import Loader from './../loader';
import PersonalDataForm from './personalData'
import ClinicalDataForm from './clinicalData'
import CommentsDataForm from './commentsData'

const Create = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [validated, setValidated] = useState(false)
  const [payload, setPayload] = useState({
    personalData: {
      patient: '',
      date: '',
      occupation: '',
      age: '',
      phone: '',
      gender: '',
    },
    clinicalData: {
      glasses: false,
      reason: '',
      personalBackground: ''
    },
    comments: {
      conduct: '',
      note: '',
    }
  })

  const updatePayloadPersonalData = (field, value) => {
    setPayload({
      ...payload,
      personalData: {
        ...payload.personalData,
        [field]: value,
      }
    })
  }

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

  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {    
      event.stopPropagation()
      setValidated(true)
    } else {
      setValidated(false)
      postPayload()
    }
  }

  const postPayload = async (e) => {
    setIsLoading(true)
    
    try {
			
      let insert = await db.collection('controle-pacientes').add({
        personalData: {
          patient: payload.personalData.patient,
          date: payload.personalData.date,
          occupation: payload.personalData.occupation,
          age: payload.personalData.age,
          phone: payload.personalData.phone,
          gender: payload.personalData.gender,
        },
        appointment: {
          clinicalData: {
            glasses: payload.clinicalData.glasses,
            reason: payload.clinicalData.reason,
            personalBackground: payload.clinicalData.personalBackground,
          },
          comments: {
            conduct: payload.comments.conduct,
            note: payload.comments.note,
          }
        }
      })
      setIsLoading(false)

    } catch (error) {
      console.log(error)
    }
    // console.log(payload)
  }
  return (
    <>
      { isLoading ? (
          <Loader />
      ) : (    
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Accordion defaultActiveKey="0">
            <PersonalDataForm updatePayloadPersonalData={updatePayloadPersonalData} />
            <ClinicalDataForm updatePayloadClinicalData={updatePayloadClinicalData}/>
            <CommentsDataForm updatePayloadCommentsData={updatePayloadCommentsData}/>
          </Accordion>
          <Button variant="primary" type="submit">
              Cadastrar
          </Button>
        </Form>
      )}
    </>
  )
}

export default Create
