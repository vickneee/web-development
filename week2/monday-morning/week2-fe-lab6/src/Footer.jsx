// Footer.jsx
import PropTypes from "prop-types";

function Footer(props) {
  return <footer>{props.text}</footer>;
}
Footer.propTypes = {
  text: PropTypes.string,
};

export default Footer;
