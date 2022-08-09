const Card = (props) => {

  return (
    <div className="cards__item" onClick={(e) => {props.onClick(e,props.id)}}>
        <span style={{color:props.color}} className='cards__text'>{props.text}</span>
    </div>
  );
}

export default Card;