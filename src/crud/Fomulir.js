import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';

const Fomulir = ({ nama, telepon, alamat, handleChange, handleSubmit, id }) => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h3>{id ? "Edit Data" : "Tambah Data"}</h3>
          <hr></hr>
        </Col>
      </Row>
      <Col>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="nama">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              name="nama"
              value={nama} onChange={(event) => handleChange(event)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="alamat">
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              as="textarea"
              name="alamat"
              rows="4"
              value={alamat} onChange={(event) => handleChange(event)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telepon">
            <Form.Label>Telepon</Form.Label>
            <Form.Control
              type="number"
              name="telepon"
              placeholder="+62"
              value={telepon} onChange={(event) => handleChange(event)} />
          </Form.Group>



          <br></br>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </div>
  )
}

export default Fomulir
