import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "./component/Header/Header";
import StartScreen from './component/StartScreen/StartScreen';
import GameScreen from "./component/GameScreen/GameScreen";
import GameOver from "./component/GameOver/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartScreen startHandler={startHandler} />
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userNumber={userNumber} gameOver={gameOverHandler} />
  } else if(guessRounds > 0) {
    content = <GameOver userNumber={userNumber} guessRounds={guessRounds} newGameHandler={newGameHandler }/>
  }

  return (
    <View style={styles.container}>
      <Header
        title="~ Number Guessing Game ~"
      />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
