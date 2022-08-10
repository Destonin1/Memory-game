import { useEffect ,useRef } from 'react'
import { gsap } from "gsap";

const Score = (props) => {

  const scoreRef = useRef();
  const bestScoreRef = useRef();

  useEffect(() => {
    gsap.from(scoreRef.current, { opacity: 0 });
  },[props.score]);

  useEffect(() => {
    gsap.from(bestScoreRef.current, { opacity: 0 });
  },[props.bestScore]);

    return (
      <div className="score-wrap">
          <span className='present-score'>Score: <span className='number' ref={scoreRef}>{props.score}</span></span>
          <span className='best-score'>Best score: <span className='number' ref={bestScoreRef}>{props.bestScore}</span></span>
      </div>
    );
  }
  
  export default Score;