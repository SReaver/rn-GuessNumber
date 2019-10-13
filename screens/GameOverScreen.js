import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={300}
          source={require('../assets/success.png')}
          //source={{ uri: 'https://previews.123rf.com/images/zhaojiankangphoto/zhaojiankangphoto1801/zhaojiankangphoto180100428/93452664-silhouette-of-man-standing-on-the-mountain-success-concept-scene.jpg' }}
          style={styles.image}
          resizeMode='cover' />

      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.roundsNumber}
          </Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>
        NEW GAME
      </MainButton>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  }
});
export default GameOverScreen
