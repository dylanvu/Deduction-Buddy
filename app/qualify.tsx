// view records
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { SelectList } from 'react-native-dropdown-select-list';
import { setItem, getItem } from '@/utils/AsyncStorage';

export default function UploadScreen_qualify() {
  
  const handleFinish = async () => {
  
  };

  return (
    <AppLayout>

     {/*title of page*/}
      <View style={[styles.titleContainer, styles.shadow]}>
        <View>
          <View style={[styles.titleContent, styles.centeredView]}>
              <Text style={Fonts.header}>
                Look at possible deductions
              </Text>
          </View>
        </View>
      </View>


      {/*Continue Button*/}   
      <TouchableOpacity onPress={handleFinish} style={styles.buttonContainer}>
            <View style={styles.centeredView}>
              <Text style={[Fonts.header, {color: Colors.whiteForFont}]}>
                Done
              </Text>
            </View>
          </TouchableOpacity>


    </AppLayout>
  );
}

// generic row component wrapper
function Row({ children }: { children: React.ReactNode }) {
  return <View style={styles.row}>{children}</View>;
}

// generic two column component
const Col = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles[`2col`]}>{children}</View>;
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: "row",
  },
  "2col": {
    flex:1,

  },
  buttonContainer:{
    marginLeft: "70%",
    marginTop: 40,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: Colors.darkBlue,
    borderColor: Colors.darkBlue,
    height: 45
  },

  titleContainer: {

    backgroundColor: Colors.lightBlue,
    borderTopWidth: 7,
    borderTopColor: Colors.darkBlue,
  },
  titleCol: {
    padding: 1,
    paddingLeft: 7,
    paddingRight: 7,
  },
  shadow: {
    shadowColor: Colors.darkBlue,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  titleContent: {
    padding: 20,
  },
});
