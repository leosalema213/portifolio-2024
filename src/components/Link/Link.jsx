/* eslint-disable react/prop-types */
import "./Link.css";
const Link = ({ children, href }) => {
  return (
    <a href={href} target="_blank" className="link">
      {children}
    </a>
  );
};

export default Link;
