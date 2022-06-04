import axios from "axios";
import { useContext } from "react";
import { useGlobalContext } from "./context";
import Button from "react-bootstrap/Button";

let url = "http://192.168.49.2:30336";

const Deletestudent = ({ size, id }) => {
  const { studVal, setstud } = useGlobalContext();
  // console.log(stud);
  // const { setstud } = useContext(StudentContext);
  const deletestud = () => {
    axios.delete(url + "/api/students/" + id);
    let newStudentList = studVal.filter((e) => e.Id !== id);
    setstud(newStudentList);
  };
  return (
    <div>
      <Button
        className="float-end"
        variant="danger"
        size={size}
        onClick={deletestud}
      >
        Delete
      </Button>
    </div>
  );
};
export default Deletestudent;
