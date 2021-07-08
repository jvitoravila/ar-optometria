import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import shortId from 'shortid'
import Link from 'next/link'

const TableList = ({dataPatient}) => {
  return (
    <>
      { 
        dataPatient.length > 0 && (
          dataPatient.map((item, index) => {
            return ( 
              <Card key={shortId.generate()}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>{item.personalData.patient}</Card.Title>
                  <Card.Text>
                    Profissão: {item.personalData.occupation}
                  </Card.Text>
                  <Link
                    href={{
                      pathname: "/detail/detail",
                      query: { id: item.id },
                    }}
                  >
                    Entrar
                  </Link>
                </Card.Body>
              </Card>
            )
          }) 
        ) 
      } 
    </>
  )
} 

export default TableList