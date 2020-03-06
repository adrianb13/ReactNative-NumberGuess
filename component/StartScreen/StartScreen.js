import React, { useState } from "react";
import { View, Text, Button, TouchableWithoutFeedback, StyleSheet, Keyboard, Alert} from "react-native";

import Colors from "../../constants/colors";
import Card from "../Card/Card";
import NumberContainer from "../NumberContainer/NumberContainer";
import Input from "../TextInput/TextInput";

const StartScreen = props => {

  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  
  const inputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  const confirmInput = () => {
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!", 
        "Number has to be a number between 1 and 99", 
        [{text: "Okay", style: "destructive", onPress: resetInput}]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
    Keyboard.dismiss();
  }

  const resetInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  let confirmedOutput;
  if (confirmed){
    confirmedOutput = (
      <Card style={styles.alert}>
        <Text style={styles.cardTitle}>Chosen Number</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.startHandler(selectedNumber)}/>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Start A New Game!</Text>
        <Card style={styles.inputCont}>
          <Text style={styles.cardTitle}>Enter A Number</Text>
          <Input 
            style={styles.input} 
            blurOnSubmit 
            autoCapitalize="none" 
            autoCorrect={false} 
            keyboardType="number-pad" 
            maxLength={2} 
            onChangeText={inputHandler}
            value={enteredValue}
          />
          <View style={styles.btnCont}>
            <View style={styles.btn}>
              <Button title="Confirm" color={Colors.primary} onPress={confirmInput}/>
            </View>
            <View style={styles.btn}>
              <Button title="Reset" color={Colors.accent} onPress={resetInput} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 25
  },
  cardTitle: {
    fontSize: 20
  },
  inputCont: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  btnCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    paddingHorizontal: 15
  },
  btn: {
    width: 100
  }
  ,
  alert: {
    alignItems: "center",
    marginTop: 30
  }
});

export default StartScreen;