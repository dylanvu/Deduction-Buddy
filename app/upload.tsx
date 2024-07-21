// view records
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { SelectList } from 'react-native-dropdown-select-list';

export default function UploadScreen() {
  const [info, setInfo] = useState({
    description: '',
    amount: '',
    month: '',
    day: '',
    year: '',
    tax: '',
    state: ''
  });

  const data = [
    {key: 'California', value: 'CA'},
  ]

  const handleInputChange = (field : string, value : string) => {
    setInfo({
      ...info,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log(info);
  }

  

  return (
    <AppLayout>

      {/*title*/} 
     {/*title of page*/}
     <View style={[styles.titleContainer, styles.shadow]}>
        <View>
          <View style={[styles.titleContent, styles.centeredView]}>
              <Text style={Fonts.header}>
                Upload your sales tax info!
              </Text>
          </View>
        </View>
      </View>

      <View style = {{paddingTop: 20, paddingHorizontal: 20}}>

        {/* Item Bought Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5}]}>
          Description:
        </Text>
        <Row>
          <TextInput 
          style={styles.textBox}
          value={info.description}
          onChangeText={(newText) => handleInputChange("description", newText)} />
        </Row>

        {/* Amount Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5}]}>
          Amount:
        </Text>
        <Row>
          <TextInput 
          style={styles.textBox}
          value={info.amount}
          onChangeText={(newText) => handleInputChange("amount", newText)} />
        </Row>

        {/* Date Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5}]}>
          Date of Purchase:
        </Text>
        <Row>
          <TextInput 
          style={styles.textBox}
          placeholder="Month"
          value={info.month}
          onChangeText={(newText) => handleInputChange("month", newText)} />

          <TextInput 
          style={styles.textBox}
          placeholder="Day"
          value={info.day}
          onChangeText={(newText) => handleInputChange("day", newText)} />

          <TextInput 
          style={styles.textBox}
          placeholder="Year"
          value={info.year}
          onChangeText={(newText) => handleInputChange("year", newText)} />
        </Row>

        {/* Tax Amount Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5}]}>
          Sales Tax Amount:
        </Text>
        <Row>
          <TextInput
          style={styles.textBox}
          placeholder="0"
          value={info.tax}
          onChangeText={(newText) => handleInputChange("tax", newText)} />
        </Row>


        {/* State of Purchase Field */}
        <Text style={styles.fieldTitle}>State of residence:</Text>
        <Row>
          {/* <TextInput
          style={styles.textBox}
          placeholder="Enter State"
          value={info.state}
          onChangeText={(newText) => handleInputChange("state", newText)} /> */}
          <SelectList
            setSelected={(val : string) => handleInputChange("state", val)}
            data={data}
            save="value"
          />
        </Row>

      </View>
      <Button title='Submit' onPress={handleSubmit}/>
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
    borderWidth: 1,
    flex: 2,
    padding: 10,
    margin: 10,
  },
  deductionContainer: {
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  textBoxContainer: {
    marginBottom: 20,
  },
  textBox: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderColor: Colors.darkBlue,
    borderWidth: 2,
    paddingLeft: 8,
    margin: 4
  },
  displayText: {
    fontSize: 20,
  },
  titleContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
  }
});
