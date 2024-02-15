import React, { useRef, useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { videoInterface } from '../interfaces/interfaces';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

interface Props {
  videoDetails: videoInterface
}

// ({ books: { name, nameEn, namePr, cover, description, url, urlEn, urlPr } }: Props) => {
export const VideoModule = ({ videoDetails: { videoUrl, text, title, titleEn, titlePr, textEn, textPr } }: Props) => {

  const { theme: { colors } } = useContext(ThemeContext)

  const language = useSelector((state: RootState) => state.language);

  const player = useRef<Video | null>(null);
  const [isBuffering, setIsBuffering] = useState(true);

  const videoError = (error: any) => {
    console.error('Error:', error);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsBuffering(false);
    }, 1000);
  }, [isBuffering]);



  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: videoUrl }}
          ref={player}
          controls={true}
          onLoadStart={() => setIsBuffering(true)}
          onError={videoError}
          style={styles.video}
        />
        {isBuffering && (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
      <View style={{ flex: 0.1 }}></View>
      <ScrollView style={styles.scrollView}>

        <Text style={{ ...styles.headerText, color: colors.titleText }}>
          {
            language === 'Spanish' ? title :
            language === 'English' ? titleEn :
            language === 'Portuguese' ? titlePr : title
          }
        </Text>

        <Text style={{ ...styles.paragraph, color: colors.globalText }}>
          {
            language === 'Spanish' ? text :
            language === 'English' ? textEn :
            language === 'Portuguese' ? textPr : text
          }
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    top: 15,
    position: 'relative',
    height: deviceHeight * 0.3, // Ajusta la altura según tus preferencias
  },
  video: {
    width: deviceWidth,
    height: deviceHeight * 0.3, // Ajusta la altura según tus preferencias y asegúrate de que coincida con la altura del contenedor
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  paragraph: {
    fontSize: 18,
    margin: 20,
  },
});
