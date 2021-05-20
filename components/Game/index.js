import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useGame } from "./hooks";
import Cell from "../Cell";
import { styles } from "./style";

const Game = ({ row = 6, column = 6 }) => {
  const { state, onPresCell, reset } = useGame({ row, column });
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.board}>
        {state.board.map((_, i) => (
          <TouchableOpacity key={i} style={styles.row}>
            {state.board[i].map((_, j) => (
              <Cell
                disabled={state.gameOver}
                onPress={onPresCell(j)}
                color={state.board[i][j]}
                key={`${i}-${j}`}
              />
            ))}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text style={styles.text}>Reset Game</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{state.message}</Text>
      </View>
    </View>
  );
};
export default Game;
