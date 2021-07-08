import { useState, useEffect } from 'react'
import { db } from '../../api/firebase'
import Card from '../../components/card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarMenu from '../../components/navBarMenu/NavBarMenu';
import Loader from '../../components/loader';
import Header from '../../components/Header'
import {
    ContainerCards,
} from './styled'

const List = () => {
    const [ patient, setPatient ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    
  useEffect(async () => {
    listPatients()    
  },[])


  useEffect(async () => {   
    if (patient.length > 0)
        setIsLoading(false)     
  },[patient])


  
  const listPatients = async () => {
    const arrayObjt = []
    
    try {
        setIsLoading(true)
        
        const resDB = await db.collection('controle-pacientes').get()
        
        resDB.forEach(res => {
            arrayObjt.push({
                id: res.id,
                personalData: {
                    patient: res.data().personalData.patient,
                    age: res.data().personalData.age,
                    date: res.data().personalData.date,
                    occupation: res.data().personalData.occupation,
                    gender: res.data().personalData.gender,
                    phone: res.data().personalData.phone,
                },
                appointment: {                    
                    clinicalData: {
                        glasses: res.data().appointment.clinicalData.glasses,
                        personalBackground: res.data().appointment.clinicalData.personalBackground,
                        reason: res.data().appointment.clinicalData.reason,
                    },
                    comments: {
                        conduct: res.data().appointment.comments.conduct,
                        note: res.data().appointment.comments.note,
                    },
                }
            })
        })

        // setIsLoading(false)
        setPatient(arrayObjt)
        
       
      
    } catch (error) {
      //console.log(error)
      console.log('teste erro', error)
    }
    
  }
    return (
        <>
            <Header />
            <NavBarMenu />
            { isLoading ? (
                <Loader />
            ) : (
                <Container>
                    <Row>
                        <Col md={{ span: 12}}>
                            <ContainerCards>
                                <Card dataPatient={patient}/>
                            </ContainerCards>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    )
}

export default List