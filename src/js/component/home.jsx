import React, { useState, useEffect } from "react";

const colors = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
};

export default function TrafficLight() {
  const [activeColor, setActiveColor] = useState(colors.red);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (isActive) {
      const timer = setInterval(() => {
        switch (activeColor) {
          case colors.red:
            setActiveColor(colors.green);
            break;
          case colors.yellow:
            setActiveColor(colors.red);
            break;
          case colors.green:
            setActiveColor(colors.yellow);
            break;
          default:
            setActiveColor(colors.red);
        }
      }, 2000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [activeColor, isActive]);

  const toggleTrafficLight = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        style={{
          background: '#2A2B2A',
          borderRadius: '10px',
          padding: '15px',
          position: 'absolute',
          top: '15%',
          left: '50%'
        }}
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            background: colors.red,
            borderRadius: '50%',
            margin: '10px',
            opacity: isActive && activeColor === colors.red ? '1' : '0.5',
            boxShadow: activeColor === colors.red ? '0 0 20px red' : 'none',
          }}
        ></div>
        <div
          style={{
            width: '100px',
            height: '100px',
            background: colors.yellow,
            borderRadius: '50%',
            margin: '10px',
            opacity: isActive && activeColor === colors.yellow ? '1' : '0.5',
            boxShadow:
              activeColor === colors.yellow ? '0 0 20px yellow' : 'none',
          }}
        ></div>
        <div
          style={{
            width: '100px',
            height: '100px',
            background: colors.green,
            borderRadius: '50%',
            margin: '10px',
            opacity: isActive && activeColor === colors.green ? '1' : '0.5',
            boxShadow: activeColor === colors.green ? '0 0 20px green' : 'none',
          }}
        ></div>
        <button onClick={toggleTrafficLight}>
          {isActive ? 'Turn Off' : 'Turn On'}
        </button>
      </div>
    </>
  );
}
