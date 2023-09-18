import Card from '../UI/Card/Card';
import './Concept.css';


const Concept = (props) => {
  return (
    <div>
      <li className="concept">
        <Card>
            <img src={props.concept.image} alt={props.concept.description} />
            <h2>{props.concept.title}</h2>
            <p>{props.concept.description}</p>
        </Card>
      </li>
    </div>
  );
};

export default Concept;
