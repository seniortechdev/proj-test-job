import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

describe('<Home>', () => {
    it('should render', () => {
        const component = render(
            <RecoilRoot>
                <BrowserRouter >
                    <Home />
                </BrowserRouter>
            </RecoilRoot>
        )
        expect(component).toBeDefined();
    })

    it('should navigate on click', () => {
        const component = render(
            <RecoilRoot>
                <BrowserRouter >
                    <Home />
                </BrowserRouter>
            </RecoilRoot>
        )
        const btn = component.getByTestId('historyBtn');
        fireEvent.click(btn)
        expect(jest.fn()).toHaveBeenCalled;
    })
})