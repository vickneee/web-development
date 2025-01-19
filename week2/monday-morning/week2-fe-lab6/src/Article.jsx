// Article.jsx
import PropTypes from "prop-types";

function Article(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
