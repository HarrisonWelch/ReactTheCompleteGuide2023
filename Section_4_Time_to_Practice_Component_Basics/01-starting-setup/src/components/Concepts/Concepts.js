import Concept from '../Concept/Concept.js';
import './Concepts.css';

const Concepts = (props) => {
  return (
    <ul id="concepts">
      <Concept concept={props.concepts[0]} />
      <Concept concept={props.concepts[1]} />
      <Concept concept={props.concepts[2]} />
    </ul>
  );
};

export default Concepts;
