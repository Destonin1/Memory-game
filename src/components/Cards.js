import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import Card from './Card'
import uniqid from 'uniqid'

const Cards = (props) => {

  const texts   = ['red','blue','green','yellow','black','orange','brown','pink','purple','gray'];
  const colors  = ['#ff2400','#6600ff','#00ff00','#eeff00','#000','#ff8500','#ab6b5b','#ffaaaa','#650065','#8d847f'];

  const cardsRef = useRef();

  const [arrShuffle, setArrShuffle] = useState([]);

  const Shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const createArr = () => {
    let newArr = [];
    let copyTexts = texts;

    for(let i = copyTexts.length; i > 0; i--){
        let randomIndex = Math.floor(Math.random() * (i+1));
        newArr.push([copyTexts.splice(randomIndex - 1, 1), colors[i-1],[uniqid()]])
    }
    setArrShuffle(newArr);
  };

  useEffect(() => {
    if(arrShuffle.length === 0){
      createArr()
    }
    Shuffle(arrShuffle);
    gsap.from(cardsRef.current, { y: 50 });
  });

  return (
    <div className="cards-wrap" ref={cardsRef}>
        {
          arrShuffle.map(cardItem => (
              <Card 
                  key= {uniqid()}
                  text = {cardItem[0]}
                  color = {cardItem[1]}
                  id = {cardItem[2]}
                  onClick = {props.onClick}
              />
          ))
        }
    </div>
  );
}

export default Cards;