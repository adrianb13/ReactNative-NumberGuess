import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const GameOver = props => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.over]}>Game Over!</Text>
      <Text style={styles.text}>Number of Rounds: {props.guessRounds}</Text>
      <Text style={styles.text}>Your Number Was: {props.userNumber}</Text>
      <View style={styles.btn}>
        <Button title="NEW GAME" onPress={props.newGameHandler} color="green"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  over: {
    color: "red",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5
  },
  text:  {
    fontSize: 20
  },
  btn: {
    width: 100,
    marginVertical: 20
  }
});

export default GameOver;