import React, {useState, useRef, useEffect} from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

import Colors from "../../constants/colors";
import NumberContainer from "../NumberContainer/NumberContainer";
import Card from "../Card/Card";

const randomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max-min)) + min;
  if(random === exclude) {
    return randomNumber(min, max, exclude);
  } else {
    return random;
  }
} 


const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(randomNumber(1, 100, props.userNumber));
  const [rounds ,setRounds] =useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userNumber, gameOver } = props;

  useEffect(() => {
    if (currentGuess === userNumber){
      gameOver(rounds)
    }
  }, [currentGuess, userNumber, gameOver]);

  const guessHandler = direction => {
    if(
      (direction === "lower" && currentGuess < props.userNumber) || 
      (direction === "higher" && currentGuess > props.userNumber)
    ){
      Alert.alert("Don't lie!", "You know that is the wrong hint...", [{text: "Sorry!", style: "cancel"}])
      return;
    }
    if(direction === "lower"){
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const next = randomNumber(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(next);
    setRounds(curRounds => curRounds + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Computer's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnCont}>
        <View style={styles.btn}>
          <Button title="LOWER" onPress={guessHandler.bind(this, "lower")} color={Colors.lower}></Button>
        </View>
        <View style={styles.btn}>
          <Button title="HIGHER" onPress={guessHandler.bind(this, "higher")} color={Colors.higher}></Button>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10
  },
  btnCont: {
    width: 300,
    maxWidth: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },
  btn: {
    width: 100
  }
});

export default GameScreen;