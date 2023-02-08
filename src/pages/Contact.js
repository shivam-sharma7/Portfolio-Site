import React from 'react'
import { Form, FormGroup, FormLabel, FormControl, Button, Row, Col } from 'react-bootstrap'

const Contact = ()=> {
  
  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <Row>
        <Col>
         <div className='Contact-form'>
          <Form >

            <FormGroup className='mb-3' controlId='validationCustom01'>
              <FormLabel>Name</FormLabel>
              <FormControl require type = "text" placeholder="Enter your name"></FormControl>
            </FormGroup>

            <FormGroup className='mb-3' controlId='validationCustom01'>
              <FormLabel>Email</FormLabel>
              <FormControl require type = "email" placeholder="Enter your email"></FormControl>
            </FormGroup>

            <FormGroup className='mb-3' controlId='validationCustom01'>
              <FormLabel>Message</FormLabel>
              <FormControl require as="textarea" placeholder="Enter your message"></FormControl>
            </FormGroup>

            <Button className='mt-2' type="submit">Submit</Button>

          </Form>

         </div>

        </Col>
        <Col>
        </Col>
      </Row>
     
    </div>
  )
}

export default Contact
