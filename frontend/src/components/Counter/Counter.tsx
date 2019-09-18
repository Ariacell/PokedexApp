import * as React from 'react';

interface ICounterProps {
}

const Counter: React.FC<ICounterProps> = (props) => {
    return (
      <div data-testid="counter-value">
        0
      </div>
    );
}
export default Counter;
