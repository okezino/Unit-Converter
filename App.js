import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import {TabView, TabBar} from "react-native-tab-view"
import convert from "convert-units"
import Constants from "expo-constants" 
import MeasureView from "./components/measure/index"
import {camelcase} from "./utils/index"
import Header from "./components/header/index"

const measures = convert().measures()


export default function App() {

  const [value, setValue] = useState("0")
  const [index, setIndex] = useState(0);
  const [routes] = useState(measures.map(m => ({key : m , title : camelcase(m)})))


  const renderScence = ({route})=>{
    return (
      <MeasureView measure = {route.key} value = {value} setValue= {setValue}/>
    )
  }

 

  return (
    <View style={[styles.container,{marginTop : Constants.statusBarHeight}]}>
      <Header />
      <TabView 
          navigationState={{index, routes}}
          renderScene = {renderScence}
          onIndexChange = {setIndex}
          initialLayout = {{width: Dimensions.get('window').width}} 
          renderTabBar = {(props) => <TabBar {...props} scrollEnabled tabStyle={{width:"auto"}}
          indicatorStyle={{backgroundColor:"white"}} 
          style = {{backgroundColor:"#12340d"}}/>}
       
          />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1  
  },
});
