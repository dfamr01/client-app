import { View, StyleSheet } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  spinner: {},
});

const Spinner = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.spinner}
        animating={true}
        color={MD2Colors.red800}
      />
    </View>
  );
};

export default Spinner;
