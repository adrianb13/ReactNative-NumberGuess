import React from "react";
import {View, StyleSheet} from "react-native";

const Card = props => {
  return (
    <View style={{...styles.container, ...props.style}}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowOpacity: 0.3,
    elevation: 5,
    borderRadius: 10,
    padding: 15
  }
});

export default Card;