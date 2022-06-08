import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const PageCard = ({ number, title, text }) => {
  return (
    <Card
      bg="dark"
      text="white"
      style={{ width: "100%", minWidth: 300, margin: "0.5rem" }}
      className="mb-2"
    >
      <Card.Header>Post-id: {number}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

PageCard.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PageCard;
