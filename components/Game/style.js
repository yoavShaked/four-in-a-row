import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  board: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    padding: "0 24px",
    height: "80%",
    justifyContent: "space-around",
    backgroundColor: "#1990ff",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    height: "50px",
  },
  text: {
    fontSize: "20px",
  },
  button: {
    height: "38px",
    backgroundColor: "green",
    color: "green",
    width: "60%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  mainContainer: {
    height: "100%",
    width: "100%",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    textAlign: 'center'
  },
});
