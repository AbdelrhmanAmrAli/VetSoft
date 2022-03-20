import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
// import { Feather as Icon } from "@expo/vector-icons";
import { Icon } from 'react-native-elements';
import { ColorThemes, Colors , IconType } from "../../enums/enums";

interface FloatingButtonProps {
  iconName: any;iconSize: number;iconType : any;OnPress:any
}

const styles = StyleSheet.create({
  floatingContainer: {
    backgroundColor: ColorThemes.SECONDARY_LIGHT,
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
    right: 10,
    bottom: 20,
  },
  iconBox: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});

// eslint-disable-next-line no-unused-vars
const FloatingButton = ({ iconName , iconSize, iconType,OnPress}: FloatingButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.floatingContainer} onPress={OnPress}>
        <View style={styles.iconBox}>
          <Icon name={iconName} size={iconSize} color={Colors.White} type={iconType}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};
FloatingButton.defaultProps = { iconSize: 30, iconType: IconType.Feather , OnPress : () => {}}
export {FloatingButton};