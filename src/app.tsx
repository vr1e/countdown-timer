import { FunctionComponent } from 'preact';
import { useEffect, useState, useRef } from 'preact/hooks';
import TimeEnter from './components/time-enter/time-enter';
import Timeout from './components/timout/timeout';
import Play from './components/buttons/play';
import Pause from './components/buttons/pause';
import Stop from './components/buttons/stop';
import ValidationMessage from './components/validation-message/validation-message';

const App: FunctionComponent = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<null | boolean>(null);
  const timeElapsed = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  const [enteredTime, setEnteredTime] = useState('');

  /* updates entered time value to 1/10 of a second on play */
  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isRunning) {
      if (time === 0) {
        setTime(parseInt(enteredTime) * 10);
      }

      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  /* updates visual elapsed time on time change and stops at time expired */
  useEffect(() => {
    const percentage = Math.round((time / parseInt(enteredTime)) * 100) / 10;
    timeElapsed.current?.style.setProperty('height', `${percentage}%`);

    if (time === 0 && isRunning) {
      stop();
      setMessage('Your time expired!');
    }
  }, [time]);

  function play() {
    if (enteredTime && parseInt(enteredTime) > 0) {
      setIsRunning(true);
      setMessage('');
    } else {
      setTime(0);
      setMessage('Please enter time using only positive numbers');
    }
  }

  function pause() {
    setIsRunning(false);
  }

  function stop() {
    setIsRunning(null);
    setEnteredTime('');
    setTime(0);
    timeElapsed.current?.style.setProperty('height', `0%`);
  }

  function enterTimeValue(e: any) {
    setEnteredTime(e.currentTarget.value);
  }

  return (
    <>
      <div>
        <main>
          <div className='content-wrapper'>
            <header>
              <h1>Countdown app</h1>
            </header>
            <div className='countdown-timer'>
              {isRunning !== null && (
                <div className='display-time'>
                  <div className='time-elapsed' ref={timeElapsed}></div>
                </div>
              )}

              <div className='counter'>
                {isRunning === null && (
                  <TimeEnter
                    enterTimeValue={enterTimeValue}
                    enteredTime={enteredTime}
                    play={play}
                  />
                )}
                {isRunning !== null && <Timeout displayTime={time} />}
              </div>
              <div className='controls'>
                {!isRunning && <Play play={play} />}
                {isRunning && <Pause pause={pause} />}
                <Stop isRunning={isRunning} stop={stop} />
              </div>
              <ValidationMessage message={message} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
