import { StyleSheet } from "react-native";

export const containerStyle = StyleSheet.create({
  container: {
    backgroundColor: "#1990ff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
});

export const cellStyle = (selectedColor) =>
  StyleSheet.create({
    cell: {
      backgroundColor: selectedColor || "#fff",
      borderRadius: "50%",
      border: "1px solid black",
      width: "13vw",
      height: "100%",
      transition: "background-color 0.5s",
    },
  });
