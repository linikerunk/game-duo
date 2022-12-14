import { StatusBar } from 'expo-status-bar';
import { ButtonProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native!</Text>
      <Button title="send 1"/>
      <Button title="send 2"/>
      <Button title="send 3"/>
      <StatusBar style="auto" backgroundColor='blue'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545353',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fafafa',
    fontSize: 18,
  },

});
