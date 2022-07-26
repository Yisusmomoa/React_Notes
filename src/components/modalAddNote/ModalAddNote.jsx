import React from 'react'
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Note from '../../Note'
export default function ModalAddNote() {
    
  const [show, setShow]=useState(false);
  const handleClose=()=> setShow(false);
  const handleShow=()=> setShow(true);
  const [note, setNote]=useState("");
  const [arrayNotes, setArrayNotes]=useState([]);

  function handleChange(e) {
    e.preventDefault();
    const noteAux=e.target.value;
    setNote(noteAux);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const nota=new Note(note);

    arrayNotes.push(nota);
    //setArrayNotes(nota);
    
    localStorage.setItem("Notes",JSON.stringify(arrayNotes));
  }
  return (
    <div>
        <Button variant="success" onClick={handleShow}>Add</Button>{''}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Label htmlFor="basic-url">Title nota</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control onChange={handleChange} placeholder="Title note"/>
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}
