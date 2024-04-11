import React, { useState } from 'react';
import axios from 'axios';

import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    images: [], // Assuming an array of images for each project
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleImageChange = (event) => {
    // Assuming multiple files can be selected
    const files = event.target.files;
    setNewProject({ ...newProject, images: Array.from(files) });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if all required fields are filled
    if (
      newProject.title &&
      newProject.description &&
      newProject.startDate &&
      newProject.endDate &&
      Array.isArray(newProject.images) && // Add this condition to ensure images is an array
      newProject.images.length > 0
    ) {
      try {
        // Create a FormData object to send multipart/form-data
        const formData = new FormData();
        formData.append('title', newProject.title);
        formData.append('description', newProject.description);
        formData.append('startDate', newProject.startDate);
        formData.append('endDate', newProject.endDate);

        // Append each image file to the FormData
        newProject.images.forEach((image) => {
          formData.append('images', image);
        });

        // Send POST request to the backend
        const response = await axios.post(
          'http://localhost:5001/api/admin/projects',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        // Log the response from the backend
        console.log(response.data);

        // Reset form fields after successful submission
        setNewProject({
          title: '',
          description: '',
          startDate: '',
          endDate: '',
          images: [],
        });
      } catch (error) {
        // Handle errors from the backend
        console.error('Error submitting form:', error);
        // You may want to display an error message to the user here
      }
    } else {
      // If any required field is missing, display an error message
      alert('Please fill in all required fields.');
    }
  };

  return (
    <Container style={{ marginTop: '130px' }}>
      <h1>Add New Project</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Title</FormLabel>
          <FormControl
            type='text'
            name='title'
            value={newProject.title}
            onChange={handleInputChange}
            placeholder='Enter title'
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Description</FormLabel>
          <FormControl
            as='textarea'
            name='description'
            value={newProject.description}
            onChange={handleInputChange}
            placeholder='Enter description'
            rows={4}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Start Date</FormLabel>
          <FormControl
            type='date'
            name='startDate'
            value={newProject.startDate}
            onChange={handleDateChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>End Date</FormLabel>
          <FormControl
            type='date'
            name='endDate'
            value={newProject.endDate}
            onChange={handleDateChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Images</FormLabel>
          <FormControl
            type='file'
            name='images'
            onChange={handleImageChange}
            multiple
            required
          />
        </FormGroup>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Admin;
