import React , {useState} from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native"

import SnackBar from "react-native-snackbar"


const currencyPerRupee = {
  DOLLAR : 0.013,
  EURO : 0.012,
  POUND : 0.010,
  AUSDOLLAR : 0.019,
  CANDOLLAR : 0.017,
  YEN : 1.50,
  DINAR : 0.0040,
  RIYAL : 0.050,
  RUBLE : 0.98,
}

const App = () => {

  const [inputValue,setInput] = useState(0);
  const [result,setResult] = useState(0);

  const buttonPressed = (currency) => {
    if(!inputValue){
      return SnackBar.show({
        text: 'Please enter a numeric value',
        backgroundColor : "#EA7773",
        textColor : "#FFFFFF",
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency]
    setResult(result.toFixed(4))
  }

  return(
    <>
    <ScrollView backgroundColor = "#1b262c"
    keyboardShouldPersistTaps="handled"
    contentInsetAdjustmentBehavior="automatic"
    >
      <SafeAreaView style={styles.container}>
        <View style = {styles.resultContainer}>
          <Text style = {styles.resultValue}>
            {result}
          </Text>
        </View>
        <View style = {styles.inputContainer} >
          <TextInput
          style = {styles.input}
          keyboardType="numeric"
          placeholder="Enter Value"
          placeholderTextColor="#c1c1c1"
          value = {inputValue}
          onChangeText={(inputValue) => setInput(inputValue)}
          ></TextInput>
        </View>
        <View style = {styles.convertButtonContainer}> 
          {Object.keys(currencyPerRupee).map((currency) => (
            <TouchableOpacity
            key = {currency}
            style = {styles.converterButton}
            onPress={() => buttonPressed(currency)}
            >
              <Text style = {styles.converterText}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
    </>
  )
}

export default App 


const styles = StyleSheet.create({

  container: {
    flex : 1 ,
    backgroundColor : "#1b262c"
  },

  resultContainer : {
    height : 70,
    marginTop : 80,
    justifyContent : "center",
    borderColor : "#bbe1fa",
    borderWidth : 2 ,
    alignItems : "center",
  },

  resultValue : {
    fontSize : 30 ,
    color : "#fff",
    fontWeight : "bold",
  },

  inputContainer: {
     height : 70,
     marginTop : 10 , 
     justifyContent : "center",
     alignItems : "center",
     borderWidth : 2 ,
     borderColor : "#bbe1fa",
  },

  input: {

    fontSize : 30 , 
    textAlign : "center",
    color : "white",
  },

  convertButtonContainer : {
    flexDirection : "row",
    flexWrap : "wrap",
    marginTop : 10 ,
  } , 

  converterButton : {
    marginTop: 10 ,
    alignItems : "center",
    justifyContent : "center",
    height : 100 ,
    width : "33.3%",
    borderColor : "#bbe1fa",
    borderWidth : 2 ,
    backgroundColor : "#0f4c75",
    borderRadius : 10 ,
  },

  converterText : {
    color : "#fff"
  }

})