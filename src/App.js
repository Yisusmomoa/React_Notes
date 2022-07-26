import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import {useState,useEffect} from 'react'

import ModalAddNote from './components/modalAddNote/ModalAddNote'

function App() {
  function loadNotes() {
    const arr=JSON.parse(localStorage.getItem("Notes"));
    setNotes(arr);
  }

  const [notes, setNotes]=useState([]);
  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(()=>{
    loadNotes();
  },[notes]);
  
  return (
    <Container>
      <Row className="justify-content-md-center mx-auto align-items-center">
        <Col><h1>Notas</h1></Col>
        <Col><ModalAddNote></ModalAddNote></Col>
      </Row>

      <Row>
        <Col xs={6}>
        {
          notes!=null ?
          <ListGroup>
            {notes.map(element=>(
              <ListGroup.Item key={element.id}>{element.title}</ListGroup.Item>
            ))}
          </ListGroup>
          :
          <ListGroup>NO hay notas</ListGroup>
        }
          
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
