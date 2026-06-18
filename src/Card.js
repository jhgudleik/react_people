import './Card.css';
import gender from './icons/female.png';
function Card(props) {
    return (
        <div className="card" >
            <img src={props.person.photo} alt= "Photo"/>
            <div className="name">{props.person.name} </div>

            <div className="age">{props.person.age} </div>

        </div>
    );
}
export default Card;