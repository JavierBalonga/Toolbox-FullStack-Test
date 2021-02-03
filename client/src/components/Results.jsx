import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Result from './Result.jsx'

export default function Results ({ results = [], onDelete }) {
  return (
    <Container style={{ marginTop: '2%' }}>
      <Card style={{ minHeight: '85vh' }}>
        <Card.Body>
          <h1>Results:</h1>
          <Row className='justify-content-center'>
            <Col xl={4} lg={5} md={7} sm={9} xs={9}>
              {results.map((result) => (
                <Result
                  key={result.id}
                  onDelete={() => onDelete(result.id)}
                  {...result}
                />
              ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}
