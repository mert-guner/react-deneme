import React from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';





function FormElementi() {
    
    return(

        <>
   <Container className="App">
      <Row>
        <Col className="p-5">
          <h1>Form Elementi</h1>
        </Col>
      </Row>
      <Row className="p-5">
        <Col className="p-5">
          <Form.Label>E-mail :   <Form.Control type="email" placeholder="Lütfen E-posta adresinizi giriniz.."/></Form.Label>
        </Col>
        
        <Col className="p-5">
        <Form.Label>Şifre :  <Form.Control type="email" placeholder="Lütfen şifrenizi giriniz.."/></Form.Label>

        </Col>
        <Col>
        <Form.Label>Şifremi hatırla  <input type="checkbox" ></input> </Form.Label>
        {/* <input type="checkbox" ></input> */}
        </Col>
        <Col>
          <Button variant="info" type="submit" >
         
            Gönder
          </Button>
        </Col>
      </Row>
    </Container>
</>
    );
}









export default FormElementi;