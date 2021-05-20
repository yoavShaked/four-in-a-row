import React from "react";
import { TouchableOpacity, View } from "react-native";
import { containerStyle, cellStyle } from "./style";

const Cell = ({ color, onPress, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={containerStyle.container}
      onPress={onPress}
    >
      <View style={cellStyle(color).cell} />
    </TouchableOpacity>
  );
};

export default Cell;
