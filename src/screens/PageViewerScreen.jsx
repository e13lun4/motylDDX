import React from "react"
import { Text, View, Dimensions, StyleSheet, Image, Platform } from "react-native"
import SliderIntro from 'react-native-slider-intro'

import chattingImage from '../assets/images/chattingImage.png'
import planImage from '../assets/images/planImage.png'
import progressImage from '../assets/images/progressImage.png'

const deviceMaxHeight = Dimensions.get('screen').height;
const { width, height } = Dimensions.get('window');

const PageViewerScreen = ({ navigation }) => {
  const error = console.error; console.error = (...args) => { if (/defaultProps/.test(args[0])) return; error(...args); };

  const slides = [
    {
      index: 1,
      title: `Общайтесь с тренером${'\n'} в чате`,
      text: `Вы можете поддерживать${'\n'} коммуникацию в${'\n'} личном чате с тренером`,
      image: chattingImage,
      backgroundColor: 'rgba(23, 24, 33, 1)',
      imageWidth: 154,
      imageHeight: 88
    },
    {
      index: 2,
      title: `Просматривайте свой${'\n'} план тренировок`,
      text: `Тренировки, составленные${'\n'} тренером, отображаются${'\n'} во вкладке "план"`,
      image: planImage,
      backgroundColor: 'rgba(23, 24, 33, 1)',
      imageWidth: 100,
      imageHeight: 88
    },
    {
      index: 3,
      title: `Смотрите каталог${'\n'} упражнений`,
      text: `По мере выполнения своего${'\n'} плана,${'\n'} добавляйте новые упражнения`,
      image: progressImage,
      backgroundColor: 'rgba(23, 24, 33, 1)',
      imageWidth: 100,
      imageHeight: 100
    }
  ]

  return(
    <View style={{flex: 1}}>
      {/* <ShadowedView style={{flex: 1, position: 'absolute', top: 0, backgroundColor: 'rgba(23, 24, 33, 1)', width: '100%', height: 65, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 3, shadowColor: 'rgba(57, 58, 69, 1)', zIndex: 999}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.headerTitle}>Moove</Text>
        </View>
      </ShadowedView> */}
      <View style={{flex: 1, paddingTop: 0}}>
        <SliderIntro
          navContainerMaxSizePercent={0.12}
          numberOfSlides={slides.length}
          dotWidth={8}
          fixDotBackgroundColor={'rgba(57, 58, 69, 1)'}
          animatedDotBackgroundColor={'rgba(0, 194, 255, 1)'}
          onDone={() => navigation.navigate('Auth')}
          renderSkipButton={() => null}
          renderNextButton={() => (
            <View style={styles.buttonContainer}>
              <View>
                <Text style={styles.buttonText}>Далее</Text>
              </View>
            </View>
          )}
          renderDoneButton={() => (
            <View style={styles.buttonContainer}>
              <View>
                <Text style={styles.buttonText}>Начать</Text>
              </View>
            </View>
          )}
          navigationBarBottom={60}
          columnButtonStyle
        >
        {slides.map(
          (
            {
              backgroundColor,
              title,
              text,
              link,
              image,
              slideMaxHeightPercent,
              imageWidth,
              imageHeight
            },
            index
          ) => {
            const slideHeight = deviceMaxHeight * (slideMaxHeightPercent || 0.78);
            return (
              <View style={{ width: width }} key={index}>
                <View style={[styles.slide, { backgroundColor }]}>
                  <View
                    style={[
                      styles.container,
                      {
                        height: slideHeight,
                        maxHeight: slideHeight,
                      },
                    ]}
                  >
                    <View style={{paddingBottom: 30}}>
                      <Text style={styles.title}>
                        {title}
                      </Text>
                    </View>
                    <View style={{paddingBottom: 50}}>
                      <Text style={styles.language}>
                        {text}
                      </Text>
                    </View>
                    <View>
                      {image && <Image style={{width: imageWidth, height: imageHeight}} source={image} />}
                    </View>
                  </View>
                </View>
              </View>
            );
          }
        )}
        </SliderIntro>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: height * 0.85,
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontWeight: '300',
    lineHeight: 20
  },
  image: {
    maxWidth: width,
    maxHeight: width,
  },
  link: {
    marginLeft: 12,
    marginRight: 12,
    fontSize: 15,
    color: '#2F39FF',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  language: {
    lineHeight: 18,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    color: 'rgba(142, 142, 142, 1)'
  },
  buttonContainer: {
    backgroundColor: 'rgba(0, 194, 255, 1)',
    width: 300,
    height: 60,
    marginTop: 40,
    borderRadius: 12,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Ruda',
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    fontSize: 22
  }
})

export default PageViewerScreen