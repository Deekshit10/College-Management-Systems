import { useState } from "react";
import { useGlobalContext } from "./context";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import Deletestudent from "./Deletestudent";

const Studentmodal = ({ viewData }) => {
  const { studVal } = useGlobalContext();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  // console.log(stud);

  // const view = () => {
  //   viewData(stud.Id);
  // };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Student List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.keys(studVal).map((e) => (
            <div key={studVal[e].Id}>
              {/* <div key={stud[e].Id}></div> */}
              <Row>
                <a
                  style={{ onhover: "blue" }}
                  onClick={() => {
                    viewData(studVal[e].Id);
                  }}
                  // key={stud[e].Id}
                >
                  {studVal[e].Name}
                </a>

                <Deletestudent
                  size={"sm"}
                  id={studVal[e].Id}
                  // key={stud[e].Id}
                />
              </Row>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Studentmodal;
// import Card from "react-bootstrap/Card";

// import Deletestudent from "./Deletestudent";

// const Studentcard = ({ stud, viewData }) => {
//   console.log(stud);
//   const view = () => {
//     viewData(stud.Id);
//   };
//   return (
//     <Card border="dark" text="dark" style={{ width: "15rem" }}>
//       <Card.Body>
//         <Card.Title>
//           <a style={{ onhover: "red" }} onClick={view}>
//             {stud.Name}
//           </a>
//         </Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{stud.Class}</Card.Subtitle>
//         <Deletestudent size={"md"} id={stud.Id} />
//       </Card.Body>
//     </Card>
//   );
// };

// export default Studentcard;
