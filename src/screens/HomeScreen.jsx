import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../config/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container_inner}
      >
        <Text>Bem vindo, por favor não repare na bagunça.</Text>
      </ScrollView>
    </View>
  );
}