import { useState } from 'react'
import Cards from './components/Cards'
import Score from './components/Score'

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setclickedCards] = useState([]);

  const clickCard = (id) => {
    const wasClicked = clickedCards.includes(id);

    if(wasClicked) {
      setclickedCards([]);
      setScore(0);
    }
    else {
      setclickedCards([...clickedCards, id])
      if(score + 1 > bestScore){
        setBestScore(score + 1);
      }
      setScore(score + 1);
    }
  }
  
  return (
    <div className="container">
      <Score
            score = {score}
            bestScore = {bestScore}
        />
      <Cards 
        onClick = {clickCard}
      />
    </div>
  );
}

export default App;
