const Score = (props) => {


    return (
      <div className="score-wrap">
          <span className='present-score'>Score: {props.score}</span>
          <span className='best-score'>Best score: {props.bestScore}</span>
      </div>
    );
  }
  
  export default Score;