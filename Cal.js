import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import React from 'react'

import {incNumber} from "./actions";
import {decNumber} from "./actions";

import { useSelector, useDispatch } from "react-redux";

const Cal = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <View>
    <Button title='+' onPress={()=> dispatch(incNumber(8))} />
    <Button title='-' onPress={()=> dispatch(decNumber(6))} />
    <Text>{changeTheNumber}</Text></View>
  )
}

export default Cal