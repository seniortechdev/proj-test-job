import History from "./History"
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

jest.mock("axios");

const mockLogs = [
    {
        "_id": "6343fbd4abc7325f453a9c07",
        "sendTo": [],
        "sentOn": "Phone",
        "message": "iyfjhvb,kn,",
        "category": {
            "_id": "6340406485a3065618c60270",
            "category": "Sports",
            "__v": 0
        },
        "sendBy": {
            "_id": "63406226ff3f77a1e2545031",
            "name": "test-2",
            "email": "test-2",
            "phone": "test-2",
            "password": "test-2",
            "Subscribed": [
                "6340406c85a3065618c60272"
            ],
            "Channels": [
                "63402aa9596859d75f37b786"
            ],
            "createdAt": "1665163752190",
            "__v": 0
        },
        "createdAt": "1665398767355",
        "__v": 0
    },
    {
        "_id": "6343f037adb83504bd602295",
        "sendTo": [
            {
                "_id": "63406226ff3f77a1e2545031",
                "name": "test-2",
                "email": "test-2",
                "phone": "test-2",
                "password": "test-2",
                "Subscribed": [
                    "6340406c85a3065618c60272"
                ],
                "Channels": [
                    {
                        "_id": "63402aa9596859d75f37b786",
                        "channel": "SMS",
                        "__v": 0
                    }
                ],
                "createdAt": "1665163752190",
                "__v": 0
            },
            {
                "_id": "63406230ff3f77a1e2545033",
                "name": "test-1",
                "email": "test-1",
                "phone": "test-1",
                "password": "test-1",
                "Subscribed": [
                    "6340406c85a3065618c60272"
                ],
                "Channels": [
                    {
                        "_id": "63402aa9596859d75f37b786",
                        "channel": "SMS",
                        "__v": 0
                    }
                ],
                "createdAt": "1665163752190",
                "__v": 0
            }
        ],
        "sentOn": "Email",
        "message": "TestMe3",
        "category": {
            "_id": "6340406c85a3065618c60272",
            "category": "Finance",
            "__v": 0
        },
        "sendBy": null,
        "createdAt": "1665396735956",
        "__v": 0
    }
]

describe('<history>', () => {

    beforeEach(() => {
        axios.get.mockImplementation(() => Promise.resolve({ data: { notifications: mockLogs } }));
    })

    it('should render', () => {
        const component = render(
            <RecoilRoot>
                <BrowserRouter >
                    <History />
                </BrowserRouter>
            </RecoilRoot>
        )
        expect(component).toBeDefined();
    })

    it('should navigate on click', () => {
        const component = render(
            <RecoilRoot>
                <BrowserRouter >
                    <History />
                </BrowserRouter>
            </RecoilRoot>
        )
        const btn = component.getByTestId('back');
        fireEvent.click(btn)
        expect(jest.fn()).toHaveBeenCalled;
    })
})