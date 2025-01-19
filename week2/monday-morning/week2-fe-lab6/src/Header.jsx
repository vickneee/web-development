// Header.jsx
import PropTypes from "prop-types";

function Header(props) {
  return <header>{props.title}</header>;
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
