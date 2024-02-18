import React, { useState } from 'react';

const Counter = () => {
  const [ticker, setTicker] = useState(0);

  const handleIncrement = () => {
    if (ticker < 10) setTicker(ticker + 1);
  };

  const handleDecrement = () => {
    if (ticker > 0) setTicker(ticker - 1);
  };
  return (
    <div>
      <h2>Counter | Testing Click & State update with condition</h2>

      <p data-testid="counterValue">{ticker}</p>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-testid="incrementBtn"
        onClick={handleIncrement}>
        Increment
      </button>
      <button
        type="button"
        className="btn btn-success btn-sm"
        data-testid="decrementBtn"
        onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;