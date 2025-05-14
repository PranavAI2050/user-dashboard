import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => prev + 1), 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return <p>Timer: {seconds}s</p>;
};

export default Timer;
