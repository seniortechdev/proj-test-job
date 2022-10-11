import React from 'react'
import { useNavigate } from 'react-router'
import useNotificationProvider from '../hooks/useNotificationProvider'

const History = () => {
  const navigate = useNavigate()
  const logs = useNotificationProvider()
  const back = () => {
    navigate('/')
  }
  return (
    <div>
      <h2 className='px-8 pt-8 cursor-pointer' data-testid='back' onClick={back}>Home</h2>
      <div className='flex flex-col items-center gap-4 px-20 pt-8'>
        <h1 className='text-center w-full font-extrabold text-xl'>logs</h1>
        {logs?.map((i, index) => (
          <div key={i._id} className='border px-4 py-2 w-[400px] max-w-[600px]'>
            <h2 className='border-b py-2 my-2'>Notification - {index + 1}</h2>
            <p>Send to : {i?.sendTo?.name}</p>
            <p>SendOn : {i?.sentOn}</p>
            <p>Send category : {i?.category?.category}</p>
            <p>Send channel : {i?.channel?.channel}</p>
            <p className='w-full break-words'>send message : {i?.message}</p>
            <p>Send Date : {new Date(parseInt(i.createdAt)).toLocaleDateString()}</p>
            <p>Send By : {i?.sendBy?.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History