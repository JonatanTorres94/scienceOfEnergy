import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { ToastAndroid } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform, Linking } from 'react-native';

interface Props {
  uri: string,
  name: string
}

async function DownloadFiles({uri, name}:Props) {
  const url = uri;
  const nombreArchivo = `${name}.pdf`;

  try {
    const response = await RNFetchBlob.config({
      path: `${RNFetchBlob.fs.dirs.DownloadDir}/${nombreArchivo}`,
      fileCache: true,
    }).fetch('GET', url);

    // Obtener la ruta completa del archivo descargado
    const rutaArchivo = response.path();

    // Solicitar permisos antes de abrir el archivo
    const permissionStatus = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    console.log('Estado de permiso:', permissionStatus);

    if (permissionStatus === RESULTS.GRANTED) {
      // El permiso está otorgado, abrir el archivo
      if (Platform.OS === 'android') {
        Linking.openURL(`file://${rutaArchivo}`);
      } else {
        Linking.openURL(`file://${rutaArchivo}`);
      }
    } else {
      // El permiso no está otorgado, solicitar permiso
      const permissionRequestResult = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      
      if (permissionRequestResult === RESULTS.GRANTED) {
        // Permiso otorgado, abrir el archivo
        if (Platform.OS === 'android') {
          Linking.openURL(`file://${rutaArchivo}`);
        } else {
          Linking.openURL(`file://${rutaArchivo}`);
        }
      } else {
        // Permiso denegado, manejar de acuerdo a tus necesidades
        console.warn('Permiso denegado para acceder al almacenamiento externo.');
      }
    }

    // Notificar al usuario que la descarga se ha completado utilizando ToastAndroid
    ToastAndroid.showWithGravityAndOffset(
      `Archivo ${nombreArchivo} se ha descargado con éxito.`,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );
  } catch (error) {
    console.error('Error al descargar el archivo:', error);
  }
}


export default DownloadFiles;
