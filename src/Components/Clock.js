import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const ClockFace = styled.p`
    font-size: 64px;
    font-weight: 500;
`;

export default function Clock(){

  const [time, setTime] = useState(() => new Date())

  const intervalId = useRef(null)

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return() => {
      stop()
    }
  }, [])

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <Container>
      <ClockFace>
        Поточний час: {time.toLocaleTimeString()}
      </ClockFace>
      <button type="button" onClick={stop}>
        Зупитини
      </button>
    </Container>
  );
}