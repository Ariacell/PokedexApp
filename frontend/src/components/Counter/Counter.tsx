import * as React from 'react';
import { ICounterProps } from './models';


const Counter: React.FC<ICounterProps> = (props) => {
    return (
        <>
            <div data-testid="counter-value">
                0
      </div>
            <button data-testid="counter-increment" onClick={props.onIncrement}>More</button>
            <button data-testid="counter-decrement" onClick={props.onDecrement}>Less</button>
        </>
    );
}
export default Counter;
