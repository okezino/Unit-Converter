
import React, { useState, useEffect } from 'react';
import {Text, View, TextInput, StyleSheet } from 'react-native';
import convert from "convert-units"
import {Picker} from "@react-native-community/picker"
import {styles} from "./style"


const MeasureView = ({measure, value, setValue}) => {
    const units = convert().possibilities(measure)
    const [fromUnit, setFromUnit] = useState(units[0])
    const [toUnit, setToUnit] = useState(units[1])
    const [valueConverted, setValueConverted] = useState("0")
  
    useEffect(()=>{
      // toFixed() this is use to remove all the decimal 
     setValueConverted(convert(+value).from(fromUnit).to(toUnit).toFixed(2))
    },[fromUnit,value,toUnit])
  
    return (
  
      <View style={styles.container}>
        <View style={styles.pickerView}>
          <Picker style = {{marginRight:20, marginLeft:20, flex: 1}}
            selectedValue = {fromUnit}
            onValueChange  = {setFromUnit}
          >
  
            {units.map((unit, index) => (
              <Picker.Item  label = {unit} value={unit} key={index} />
            ))}
  
          </Picker>
  
          <View style = {{marginRight:20, marginLeft:20, flex: 1}}>
            <TextInput value={value} onChangeText={setValue} keyboardType ={"numeric"}
            style={styles.textInputView}/>
  
          </View>
  
        </View>
        <View style={styles.pickerView}>
          <Picker style = {styles.picker}
            selectedValue = {toUnit}
            onValueChange  = {setToUnit}
          >
  
            {units.map((unit, index) => (
              <Picker.Item  label = {unit} value={unit} key={index} />
            ))}
  
          </Picker>
  
          <View style = {styles.picker}>
            <Text style={styles.textInputView}>
              {valueConverted}
  
            </Text>
  
          </View>
  
        </View>
      </View>
  
    )
  
  }
  export default MeasureView