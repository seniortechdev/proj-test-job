import React from "react";
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


describe('<App>', () => {

    it('should render', () => {
        const component = render(
            <RecoilRoot>
                <BrowserRouter >
                    <App />
                </BrowserRouter>
            </RecoilRoot>
        )
        expect(component).toBeDefined();
    })
})