import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import SendNotificationForm from "./SendNotificationForm";
import axios from "axios";

jest.mock("axios");

const mockCategories = [
    {
        "_id": "6340406485a3065618c60270",
        "category": "Sports",
    },
    {
        "_id": "6340406c85a3065618c60272",
        "category": "Finance",
    },
    {
        "_id": "6340407385a3065618c60274",
        "category": "Movies",
    }
]

describe('<Home>', () => {

    beforeEach(() => {
        axios.get.mockImplementation(() => Promise.resolve({ data: { categories: mockCategories } }));
    })

    it('should render', () => {
        const component = render(
            <RecoilRoot>
                <BrowserRouter >
                    <SendNotificationForm />
                </BrowserRouter>
            </RecoilRoot>
        )
        expect(component).toBeDefined();
    })

    it('should call onChange event', () => {
        const component = render(
            <RecoilRoot>
                <BrowserRouter >
                    <SendNotificationForm />
                </BrowserRouter>
            </RecoilRoot>
        )
        fireEvent.select(component.getByTestId('category'), {
            target: { value: '123' }
        });
        fireEvent.change(component.getByTestId('text-txt-area'), {
            target: { value: '456' }
        });
        const btn = component.getByTestId('submit');
        fireEvent.click(btn)
        // expect(jest.fn()).toHaveBeenCalled();
    })
})