import React, { Props } from "react";
import {render, fireEvent, waitForElement, RenderResult, cleanup } from "@testing-library/react";

import Counter from "./Counter";
import { ICounterProps } from "./models";


const mockProps: ICounterProps = {

}

//Props deprecated? need to figure out how to do this override with typescript correctly.
function renderCounter(props: Partial<ICounterProps> = {}) {
    const defaultProps: ICounterProps = {

    }
    return render(<Counter {...defaultProps}/>)
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

    afterEach(cleanup)
});