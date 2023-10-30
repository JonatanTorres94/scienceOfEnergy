import React, { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';

const PushNotificationHandler = () => {
  useEffect(() => {
    PushNotification.configure({
      onNotification: (notification: { userInteraction: any; }) => {
        if (notification.userInteraction) {
          // Aquí puedes manejar la acción cuando el usuario toca la notificación
          // Por ejemplo, abrir el archivo PDF
        }
      },
    });
  }, []);

  return null;
};

export default PushNotificationHandler;


