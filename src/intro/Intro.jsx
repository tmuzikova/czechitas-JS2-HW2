import "./Intro.css";

export const Intro = ({ heading, text }) => {
  return (
    <div className="intro">
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};
