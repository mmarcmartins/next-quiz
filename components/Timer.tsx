import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Timer.module.css";

interface TimerProps {
  duration: number;
  onComplete: () => void;
}

const Timer = ({ duration, onComplete }: TimerProps) => {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        size={100}
        isPlaying={true}
        duration={duration}
        onComplete={onComplete}
        colors={[
          ["#BCE596", 0.33],
          ["#F7B801", 0.33],
          ["#ED827A", 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
