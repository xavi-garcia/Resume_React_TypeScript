import {Button, Form, Container} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useState } from 'react';

const FormDataType = {
  name: "",
  email:"",
  comment: "",
};

type FormElement = React.FormEvent<HTMLFormElement>;

type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export function ContactForm() {

  const [formData, setFormData] = useState(FormDataType);
  const { name, email, comment } = formData;

  const handleChange = (e: ChangeEvent) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };


  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    console.log(formData);
    setFormData(FormDataType);
    setTimeout(()=>{
      Swal.fire('Thanks for reaching out! I will get back to you asap!')
    },2000)
    
  };

  return (
    <Container id="contactForm">
    <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Label id="formlabel">Name</Form.Label>
        <Form.Control id="name" type="name"  value={name} onChange={handleChange} placeholder="Enter name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control id="email" type="email" value={email} onChange={handleChange} placeholder="Enter email" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control id="comment" type="text" value={comment} onChange={handleChange} placeholder="Write Comment" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}