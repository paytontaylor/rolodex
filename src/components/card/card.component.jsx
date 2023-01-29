import "./card.styles.css"

const Card = ({ monster }) => {
    const { id, name, email } = monster;
    return (
        <div>
            <div className="card-container">
                <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

// class Card extends Component {
//     render() {
//         const { id, name, email } = this.props.monster;
//         return (
//             <div>
//                 <div className="card-container">
//                     <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
//                     <h2>{name}</h2>
//                     <p>{email}</p>
//                 </div>
//             </div>
//         )
//     }
// }

export default Card;