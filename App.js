import { StatusBar } from 'expo-status-bar'; //statusbar komponentti, joka mahdollistaa tilapalkin ulkoasun hallinnan
import React, { useState } from 'react'; //tätä käytetään tilan hallintaan 
import {SafeAreaView, StyleSheet, TextInput, Button, View,Alert,Text} from 'react-native'; //tuo komponentit joita käytetään käyttöliittymän rakentamiseen


export default function App() { //pääkomponentti
  const [result, setResult] = useState('tähän tulee tulos');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const addTogether = () => { // laskee kaksi lukua yhteen
    const num1 = parseInt(number1) || 0; //muutetaan kokonaisluvuksi
    const num2 = parseInt(number2) || 0;  
    const lisays = num1 + num2;
    setResult(lisays.toString()); // muutetaan tulos merkkijonoksi
  };

  const minusTogether = () => { // laskee erotuksen
    const num1 = parseInt(number1) || 0;  
    const num2 = parseInt(number2) || 0; 
    const erotus = num1 - num2;
    setResult(erotus.toString());
  };

  return ( //tämä osio luo jo näyttää käyttöliittymän sen hetkiset elementit puhelimen näytöllä. Puhutaan "renderöinnistä"
    //SafeAreaView pitää sisällön näytön "sisällä" eikä anna sen mennä ulos näytöstä
    // <Text> ja </Text> näyttää tuloksen käyttäjälle. 
    //TextInput käyttäjä syöttää numeroita
    <SafeAreaView style={styles.container}>   
      <Text style={styles.title}> 
        Result: {result}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber1(text)} 
        value={number1}
        placeholder="Anna numero"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber2(text)}
        value={number2}
        placeholder="Anna Toinen numero"
        keyboardType="numeric"
      />

      <View>
        <View style={styles.fixToText}> 
          <Button
            title="+"
            onPress={addTogether} // kutsuu painaessa addTogether funktiota
          />
          <Button
            title="-"
            onPress={minusTogether} // kutsuu painaessa minusTogether funktiota
          /> 
        </View>
      </View>
    </SafeAreaView>
  ); // <View style={styles.fixToText}> ja </View>: Vkäytetään nappien sijoitteluun vierekkäin.
}

const styles = StyleSheet.create({ // määrittelee käyttöliittymän tyylit
  container: { // tämä määrittelee ulkoasun
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  input: { // määrittelee tekstikentän ulkoasun
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  },
  button: { // määrittelee painikkeen ulkoasun
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    textAlign: "left",
  },
  title: { // keskittää kentän
    textAlign: 'center',
    marginVertical: 0,
  },
  fixToText: { // asettaa painikkeet vastakkain ja tasaa ne tasaisesti
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
});