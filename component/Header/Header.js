import React from "react";
import { View, Text, StyleSheet} from "react-native";

import Colors from "../../constants/colors";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30
  },
  headerTitle: {
    color: "yellow",
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic"
  }
});

export default Header;