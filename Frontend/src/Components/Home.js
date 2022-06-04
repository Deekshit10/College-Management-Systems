import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.goshen.edu/wp-content/uploads/2020/10/left1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/group-of-happy-students-looking-at-exam-results-while-standing-at-picture-id1307457287?b=1&k=20&m=1307457287&s=170667a&w=0&h=f5aEoHY2y-BWMwvJOmEXZYdomqS1IB4xRFomzUT3ZAY="
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://psmag.com/.image/t_share/MTUwMjg0NDIxMTE3NzgyMDEy/college-2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
