import{View, Text, StyleSheet, Alert} from 'react-native';
import { useState } from 'react';
import {Button} from '@/components/button';
import { Input } from '@/components/input';

export default function Index() {

  const [name, setName] = useState<String>("")

  function handleMessage(){
    console.log("Clicado")
    window.alert(`Óla, ${name}. \nO App esta em desenvolvimento`)
  }

  function onChangeText(text: string){
    setName(text)
  }

  return (
    <View style={styles.container}> 
        <Text style={styles.title}>REVISÃO</Text>
        
        <Input placeholder='Nome' onChangeText={setName}/>
        <Input placeholder='Senha' onChangeText={(text) => onChangeText(text)}/>

        <Button title="Entrar" onPress={handleMessage}/>
        <Button title="Informações" onPress={handleMessage}/>
        
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
    justifyContent: "center",
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