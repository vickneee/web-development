// Section.jsx
import PropTypes from "prop-types";

function Section(props) {
  return (
    <section>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </section>
  );
}

Section.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
};

export default Section;
