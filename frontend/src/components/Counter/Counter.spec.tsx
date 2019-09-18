import React, { Props } from "react";
import {render, fireEvent, waitForElement, RenderResult, cleanup } from "@testing-library/react";

import Counter from "./Counter";
import { ICounterProps } from "./models";


const mockIncrement = jest.fn();
const mockDecrement = jest.fn();

const mockProps: ICounterProps = {
    onIncrement: mockIncrement,
    onDecrement: mockDecrement
}

//Props deprecated? need to figure out how to do this override with typescript correctly.
function renderCounter(props: Partial<ICounterProps> = {}) {
    return render(<Counter {...mockProps}/>)
}


describe("Counter component ", () => {

    let helpers: RenderResult;

    beforeEach(() => {
        helpers = renderCounter(mockProps); 
    })

    it('should display', () => {
        renderCounter(mockProps);
    });

    it('should display 0 at page load', () => {
        const counterValue = helpers.getByTestId('counter-value');
        expect(counterValue).toHaveTextContent('0');
    });

    it('should display an increment and decrement button', () => {
        const incrementButtonEl = helpers.getByTestId('counter-increment');
        expect(incrementButtonEl).toHaveTextContent('More');
        const decrementButtonEl = helpers.getByTestId('counter-decrement');
        expect(decrementButtonEl).toHaveTextContent('Less');
    });

    it('should call the increment and decrement callbacks when the respective buttons are clicked', () => {
        const incrementButtonEl = helpers.getByTestId('counter-increment');
        fireEvent.click(incrementButtonEl);
        expect(mockIncrement).toHaveBeenCalled();
        const decrementButtonEl = helpers.getByTestId('counter-decrement');
        fireEvent.click(decrementButtonEl);
        expect(mockDecrement).toHaveBeenCalled();
    });


    
    afterEach(cleanup)
});