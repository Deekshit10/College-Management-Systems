import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState, useEffect } from "react";

let url = "http://192.168.49.2:30336";

const Studentdetail = ({ studid, backfn }) => {
  const [stud, setstud] = useState("");
  console.log(studid);
  console.log(stud);
  useEffect(() => {
    let abortController = new AbortController();
    axios.get(`${url}/api/students/${studid}`).then((res) => {
      if (res.data) {
        setstud(res.data);
        console.log(stud);
      }
    });
    return () => {
      abortController.abort();
    };
  }, [studid]);

  return (
    <Container>
      <Row>
        <Col style={{ height: "150px" }}>
          <h1>{stud.Name}</h1>
        </Col>
      </Row>

      <Row>
        <h3>ID: {stud.Id}</h3>
        <h3>Name: {stud.Name}</h3>

        <h3>Class: {stud.Class}</h3>
        <h3>Mark: {stud.Marks}</h3>
      </Row>

      <Button
        variant="success"
        size="md"
        style={{ margin: "30px" }}
        onClick={backfn}
      >
        back
      </Button>
    </Container>
  );
};

export default Studentdetail;
