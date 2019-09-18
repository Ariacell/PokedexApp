import React, { Props } from "react";
import {render, fireEvent, waitForElement } from "@testing-library/react";

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

    let counterValue: any;

    beforeEach(() => {
        const {getByTestId} = renderCounter(mockProps);
        counterValue = getByTestId('counter-value');
    })    

    it('should display', () => {
        renderCounter(mockProps);
    });

    it('should start at 0', () => {
        expect(counterValue).toHaveTextContent('0');
    })
});