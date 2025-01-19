// Sidebar.jsx
import PropTypes from "prop-types";

function Sidebar(props) {
  return <aside>{props.content}</aside>;
}

Sidebar.propTypes = {
  content: PropTypes.string,
};

export default Sidebar;
