import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { notificationApi } from '../apis'
import { notificationsAtom } from '../atom/NotificationsAtom'
import axios from 'axios'



const useNotificationProvider = (id) => {
  const [notifications, setNotifications] = useRecoilState(notificationsAtom)
  useEffect(() => {
    if (!notifications[0]) {
      axios
        .get(notificationApi)
        .then((res) => {
          setNotifications(res.data.notifications)
        })
        .catch((err) => {
          console.log(err)
          setNotifications([])
          
        })
    }
  }, [])
  return notifications
}

export default useNotificationProvider
