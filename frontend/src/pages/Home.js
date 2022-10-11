import React from 'react'
import SendNotificationForm from '../components/SendNotificationForm'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const handleHistoryClick = () => {
    navigate('/history')
  }
  
  return (
    <div className="h-screen text-white flex flex-col justify-center items-center">
      <SendNotificationForm />
      <div className="block mt-8 hover:text-gray-600">
        <button data-testid='historyBtn' onClick={handleHistoryClick} className="border-gray-600 px-4 py-1 rounded border">View history</button>
      </div>
    </div>
  )
}

export default Home
