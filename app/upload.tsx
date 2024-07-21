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
    { key: 'Alabama', value: 'AL' },
    { key: 'Alaska', value: 'AK' },
    { key: 'Arizona', value: 'AZ' },
    { key: 'Arkansas', value: 'AR' },
    { key: 'California', value: 'CA' },
    { key: 'Colorado', value: 'CO' },
    { key: 'Connecticut', value: 'CT' },
    { key: 'Delaware', value: 'DE' },
    { key: 'Florida', value: 'FL' },
    { key: 'Georgia', value: 'GA' },
    { key: 'Hawaii', value: 'HI' },
    { key: 'Idaho', value: 'ID' },
    { key: 'Illinois', value: 'IL' },
    { key: 'Indiana', value: 'IN' },
    { key: 'Iowa', value: 'IA' },
    { key: 'Kansas', value: 'KS' },
    { key: 'Kentucky', value: 'KY' },
    { key: 'Louisiana', value: 'LA' },
    { key: 'Maine', value: 'ME' },
    { key: 'Maryland', value: 'MD' },
    { key: 'Massachusetts', value: 'MA' },
    { key: 'Michigan', value: 'MI' },
    { key: 'Minnesota', value: 'MN' },
    { key: 'Mississippi', value: 'MS' },
    { key: 'Missouri', value: 'MO' },
    { key: 'Montana', value: 'MT' },
    { key: 'Nebraska', value: 'NE' },
    { key: 'Nevada', value: 'NV' },
    { key: 'New Hampshire', value: 'NH' },
    { key: 'New Jersey', value: 'NJ' },
    { key: 'New Mexico', value: 'NM' },
    { key: 'New York', value: 'NY' },
    { key: 'North Carolina', value: 'NC' },
    { key: 'North Dakota', value: 'ND' },
    { key: 'Ohio', value: 'OH' },
    { key: 'Oklahoma', value: 'OK' },
    { key: 'Oregon', value: 'OR' },
    { key: 'Pennsylvania', value: 'PA' },
    { key: 'Rhode Island', value: 'RI' },
    { key: 'South Carolina', value: 'SC' },
    { key: 'South Dakota', value: 'SD' },
    { key: 'Tennessee', value: 'TN' },
    { key: 'Texas', value: 'TX' },
    { key: 'Utah', value: 'UT' },
    { key: 'Vermont', value: 'VT' },
    { key: 'Virginia', value: 'VA' },
    { key: 'Washington', value: 'WA' },
    { key: 'West Virginia', value: 'WV' },
    { key: 'Wisconsin', value: 'WI' },
    { key: 'Wyoming', value: 'WY' },
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

      <View style = {{paddingTop: 30, paddingHorizontal: 5}}>

        {/* Item Bought Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5}]}>
          Description:
        </Text>
        <Row>
          <TextInput 
          style={styles.textBox}
          placeholder='Enter Text'
          value={info.description}
          onChangeText={(newText) => handleInputChange("description", newText)} />
        </Row>

        {/* Amount Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5, paddingTop: 30}]}>
          Amount:
        </Text>
        <Row>
          <TextInput 
          style={styles.textBox}
          placeholder='0'
          value={info.amount}
          onChangeText={(newText) => handleInputChange("amount", newText)} />
        </Row>

        {/* Date Field */}
        <Text style={[Fonts.subheader, {paddingHorizontal: 5, paddingTop: 30}]}>
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
        <Text style={[Fonts.subheader, {paddingHorizontal: 5, paddingTop: 30}]}>
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
        <Text style={[Fonts.subheader, {paddingHorizontal: 5, paddingTop: 30}]}>
          State of residence:
          </Text>
        <Row>
          <SelectList
            setSelected={(val : string) => handleInputChange("state", val)}
            data={data}
            save="value"
            boxStyles={styles.textBox}
          />
        </Row>

      {/*Continue Button*/}
      </View >
      <Row>
        
        <View style={styles.buttonContainer}>
          <Button title='Continue' onPress={handleSubmit}/>
        </View>

      </Row>
      
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

  buttonContainer:{
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: 4
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
    margin: 4,
    borderRadius: 15,
    width: "100%"
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
  },
});
