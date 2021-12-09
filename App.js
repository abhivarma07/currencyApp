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

const currencyPerRupee = {
  DOLLAR : 0.013,
  EURO : 0.012,
  POUND : 0.010,
  AUSDOLLAR : 0.019,
  CANDOLLAR : 0.017,
  YEN : 1.50,
  DINAR : 0.0040,
  RIYAL : 0.050,
}

const App = () => {

  const [inputValue,setInput] = useState(0);
  const [result,setResult] = useState(0);

  return(
    <>
    <ScrollView >
      <SafeAreaView style={styles.container}>
        <View style = {styles.resultContainer}>
          <Text style = {styles.resultValue}>12.23</Text>
        </View>
        <View style = {styles.inputContainer} >
          <TextInput
          style = {styles.input}
          keyboardType="numeric"
          placeholder="Enter Value"
          placeholderTextColor="#c1c1c1"
          ></TextInput>
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
  }

})