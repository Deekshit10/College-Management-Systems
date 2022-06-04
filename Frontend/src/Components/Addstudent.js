import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Addstudent = ({ onAdd }) => {
  const [Id, setid] = useState("");
  const [Name, setname] = useState("");
  const [Class, setsclass] = useState("");
  const [Marks, setmarks] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!Id || !Name || !Class || !Marks) {
      alert("Please enter correct values");
      return;
    }

    onAdd({ Id, Name, Class, Marks });

    setid("");
    setname("");
    setsclass("");
    setmarks("");
  };

  return (
    <div className="container">
      <Form className="mt-5" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Student ID"
            value={Id}
            onChange={(e) => setid(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={Name}
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>SClass</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter class"
            value={Class}
            onChange={(e) => setsclass(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mark</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Mark"
            value={Marks}
            onChange={(e) => setmarks(e.target.value)}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Addstudent;
