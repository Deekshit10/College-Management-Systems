import { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
// import { useGlobalContext } from "./context";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Studentmodal from "./Studentmodal";
import Studentdetail from "./Studentdetail";

let url = "http://192.168.49.2:30336";

const StudentList = () => {
  const [active, setactive] = useState(true);
  const [stud, setstud] = useState("");
  // console.log(studVal);
  const back = () => {
    setactive(true);
  };

  const view = (Id) => {
    setactive(false);
    setstud(Id);
  };

  return (
    <Container fluid="md">
      <div className="text-center mt-5">
        <div>
          {active ? (
            <div>
              <Studentmodal viewData={view}>
                {/* <Row lg={3} xs={1} sm={2} className="gy-5"> */}

                {/* <Col xs={{ offset: 4 }} sm={{ offset: 1 }}> */}
                {/* <Studentmodal
                    key={studVal[e].Id}
                    stud={studVal}
                    viewData={view}
                  /> */}
                {/* </Col> */}

                {/* </Row> */}
              </Studentmodal>
            </div>
          ) : (
            <Studentdetail studid={stud} backfn={back} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default StudentList;
