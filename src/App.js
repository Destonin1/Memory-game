import { useState } from 'react'
import Cards from './components/Cards'
import Score from './components/Score'

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setclickedCards] = useState([]);

  let canClick = true;

  const clickCard = (e,id) => {
    const wasClicked = clickedCards.includes(id);

    if(wasClicked && canClick) {
      e.currentTarget.style.boxShadow = '0 0 40px red';
      canClick = false;
      setTimeout(() => clickedWrong(id), 200)
    }
    else if(canClick) {
      e.currentTarget.style.boxShadow = '0 0 40px green';
      canClick = false;
      setTimeout(() => clickedRight(id), 200)
    }
  }

  const clickedRight = (id) => {
    setclickedCards([...clickedCards, id])
      if(score + 1 > bestScore){
        setBestScore(score + 1);
      }
      setScore(score + 1);
  }

  const clickedWrong = () => {
    setclickedCards([]);
    setScore(0);
  }
  
  return (
    <div className="container">
      <div className='header'>
        <div className='game-title'>Memory game</div>
        <div className='tip'>Do not click twice on the same card to get score.</div>
        <Score
              score = {score}
              bestScore = {bestScore}
          />
      </div>
      <Cards 
        onClick = {clickCard}
      />
    </div>
  );
}

export default App;
