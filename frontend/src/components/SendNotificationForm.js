import React, { useState } from 'react'
import { userAtom } from '../atom/UserAtom';
import useCategoryProvider from '../hooks/useCategoryProvider';
import { useRecoilState, useRecoilValue } from 'recoil'
import { notificationApi } from '../apis';
import axios from 'axios'
import toast from 'react-hot-toast';
import { notificationsAtom } from '../atom/NotificationsAtom';


const SendNotificationForm = () => {
    const [message, setMessage] = useState('')
    // const [selectedNotificationsType, setSelectedNotificationsType] = useState('SMS')
    const categories = useCategoryProvider();
    const user = useRecoilValue(userAtom)
    const [, setNotification] = useRecoilState(notificationsAtom)


    const submitNotification = (e) => {
        e.preventDefault();
        console.log(user);
        const tostId = toast.loading("loading...");
        if (user?.token) {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(Array.from(formData.keys()).map(key => [key, formData.getAll(key).length > 1 ? formData.getAll(key) : formData.get(key)]))
            axios.post(notificationApi, { ...data }, {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            }).then(res => {
                toast.success('Notification Successfully created!', { id: tostId });
                setNotification([])
            }).catch(err => {
                toast.error('Error on Creating Notification', { id: tostId });
            });
        } else {
            toast.error('Wait For user , try again.', { id: tostId });
        }
    }

    // const setSendOnValue = (id) => {
    //    const channel = channels?.find(i => i._id === id);
    //    setSelectedNotificationsType(channel.channel);
    // }

    return (
        <div className='bg-white/40 rounded-xl p-8 w-[400px]'>
            <form onSubmit={submitNotification}>
                <h2 className='text-center pb-2 text-lg'>Send Notification</h2>
                {/* <div className='my-3'>
                    <p className='pb-1'>Select a notifications type</p>
                    <select className='outline-none text-black w-1/2 h-7 rounded' name="channel" id="category" onClick={e => setSendOnValue(e.target.value)}>
                        {channels?.map(i => (<option key={i._id} value={i._id}>{i.channel}</option>))}
                    </select>
                </div> */}
                <div className='my-3'>
                    <p className='pb-1'>Select a category</p>
                    <select data-testid='category' className='outline-none text-black w-1/2 h-7 rounded' name="category" id="category">
                        {categories?.map(i => (<option key={i._id} value={i._id}>{i.category}</option>))}
                    </select>
                </div>
                <div className='text-white'>
                    <p className='pb-1'>Write a message</p>
                    <textarea data-testid='text-txt-area' className='pl-2 pt-1 text-black w-full h-20 rounded outline-none' name='message' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required type="text" />
                </div>
                {/* <input readOnly value={selectedNotificationsType === 'SMS' ? 'Phone' : selectedNotificationsType === 'E-Mail' ? 'Mail' : 'Notification'} type="text" name='sentOn' hidden /> */}
                <div className='flex justify-center'>
                    <button data-testid={'submit'} className='rounded bg-gray-300 hover:bg-slate-50 px-8 py-1 mt-6 text-black' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SendNotificationForm