import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { db } from '../../api/firebase'
import Loader from '../../components/loader';
import NavBarMenu from '../../components/navBarMenu';

import DataPersonal from './components/dataPersonal/DataPersonal'
import DataClinical from './components/dataClinical/DataClinical'
import { isEmpty } from 'ramda'
import Header from '../../components/Header'
import {
    ContainerDataPatient,
  } from './styled'
const Detail = () => {
    const router = useRouter()
    const [ dataPatient, setDataPatient ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const {
        query: { id },
    } = router

    useEffect(() => {
        listDataPatient() 
    },[])
    
    useEffect(() => {  
        if (!isEmpty(dataPatient))
            setIsLoading(false)
    },[dataPatient])

    const listDataPatient = () => {
        setIsLoading(true)
        const resDB = db.collection('controle-pacientes').doc(id)
        
        resDB.get().then((doc) => {
            setDataPatient(doc.data())
        })  
        
    }

    return (
        <div>
            <Header/>
            <NavBarMenu />
            {   
                isLoading ? (
                    <Loader />
                ) : (
                    !isEmpty(dataPatient) > 0 && (
                        <ContainerDataPatient>
                            <DataPersonal dataPerosnal={dataPatient.personalData}/>
                            <DataClinical dataClinical={dataPatient.appointment.clinicalData}/>
                        </ContainerDataPatient>
                    )
                )
            }
        </div>
    )
}

export default Detail
