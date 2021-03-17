import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'UdaciFlashcards:notifications'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
  .then(Notifications.cancelAllScheduledNotificationsAsync())
}

// export function createNotification () {
//   return {
//     title: 'Time to study',
//     body: 'Don\'t forget your daily dose of practice',
//     ios: {
//       sound: true
//     },
//     android: {
//       sound: true,
//       priority: 'high',
//       sticky: false,
//       vibrate: true
//     }
//   }
// }

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data) => {
    if (data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status }) => {
        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync()

          Notifications.setNotificationHandler({
            handleNotification: async () => ({
              shouldShowAlert: true,
              shouldPlaySound: true,
              shouldSetBadge: false,
            }),
          });

          let schedule = new Date()
          schedule.setDate(schedule.getDate())
          schedule.setHour(20)
          schedule.setMinute(0)

          // tomorrow = tomorrow.getTime() + (1000 * 60 * 60 * 24)
          // let notificationDate = new Date(tomorrow)

          // Notifications.scheduleNotificationAsync(
          //   createNotification(),
          //   {
          //    time: tomorrow,
          //    repeat: 'day'
          //   }
          // )

          Notifications.scheduleNotificationAsync({
            content: {
              title: 'Time to study',
              body: 'Don\'t forget your daily dose of practice',
            },
            trigger: {
              schedule,
              repeats: true
            }
          })

          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
        }
      })
    }
  })
}


export function generateId() {
  return uuidv4()
}
