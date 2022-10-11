import { atom } from 'recoil'

// fake current user data

export const userAtom = atom({
    key: 'userState',
    default: {
        _id: "63406226ff3f77a1e2545031",
        name: "test-1",
        email: "test-1",
        phone: "test-1",
        password: "test-1",
        Subscribed: [
            {
                _id: "6340406c85a3065618c60272",
                category: "Finance",
            }
        ],
        Channels: [
            {
                _id: "63402aa9596859d75f37b786",
                channel: "SMS",
            }
        ],
        createdAt: "1665156087406",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJfaWQiOiI2MzQ0NTllMTdhZjk5MjkzZmE5YmMxZTEiLCJuYW1lIjoidGVzdGVyLTMiLCJlbWFpbCI6InRlczNAdGVzdGVyLmNvbSIsInBob25lIjoiOTgxMjM0NTY3IiwicGFzc3dvcmQiOiJ0ZXN0IiwiU3Vic2NyaWJlZCI6W3siX2lkIjoiNjM0NDU5MzM3YWY5OTI5M2ZhOWJjMWNlIiwiY2F0ZWdvcnkiOiJNb3ZpZXMiLCJfX3YiOjB9LHsiX2lkIjoiNjM0NDU5NGI3YWY5OTI5M2ZhOWJjMWQyIiwiY2F0ZWdvcnkiOiJGaW5hbmNlIiwiX192IjowfV0sIkNoYW5uZWxzIjpbeyJfaWQiOiI2MzQ0NTk2MTdhZjk5MjkzZmE5YmMxZDYiLCJjaGFubmVsIjoiRS1NYWlsIiwiX192IjowfV0sImNyZWF0ZWRBdCI6IjE2NjU0MjM0OTk4NTgiLCJfX3YiOjB9XSwiaWF0IjoxNjY1NDIzODkzLCJleHAiOjE2OTY1Mjc4OTN9.KsCSxbcFWbMO6VIYcavTmqBTnDvGkmnyAHL8nLJ3dC0",
    },
})
