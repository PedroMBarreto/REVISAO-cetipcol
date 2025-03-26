import{View, Text, StyleSheet, Alert} from 'react-native';
import {Button} from '../components/button';

export default function Index() {

  function handleMessage(){
    console.log("Clicado")
    Alert.alert("O App esta sendo desenvolvido")
  }

  return (
    <View style={styles.container}> 
        <Text style={styles.title}>REVISÃO</Text>
        
        <Button title="Entrar"/>
        <Button/>
        <Button/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,  
    padding: 20,
    backgroundColor: "#e3c8aa",
    alignItems: "center",
    gap: 16,
  },

  title: {
    
    fontSize: 35,
    fontWeight: "bold",
    width: "100%",
    height: "8%",
    textAlign: "center",
    textAlignVertical: "center",
  },
})