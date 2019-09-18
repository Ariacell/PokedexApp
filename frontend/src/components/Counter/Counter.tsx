import * as React from 'react';

interface ICounterProps {
}

const Counter: React.FC<ICounterProps> = (props) => {
    return (
        <>
            <div data-testid="counter-value">
                0
      </div>
            <button data-testid="counter-increment">More</button>
            <button data-testid="counter-decrement">Less</button>
        </>
    );
}
export default Counter;
