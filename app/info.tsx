// learn about sales tax
import { Text, View, StyleSheet, Image }from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";

export default function InfoScreen() {
  return (
    <AppLayout>

      {/*title of page*/}
      <View style={styles.titleContainer}>
        <View>
          <View style={styles.centeredView}>
              <Text style={[Fonts.header, {color: Colors.whiteForFont }]}>
                General Sales Taxes
              </Text>
              <Text style={[Fonts.header, {color: Colors.whiteForFont }]}>
                101
              </Text>
          </View>
        </View>
      </View>
      
      {/*Sales vs. Income Tax*/}
      <View style ={{paddingTop: 15}}>
        <Row>
          <Text style={[Fonts.subheader, {fontWeight: 'bold'}]}>
            Sales vs. Income Tax
          </Text>
        </Row>
      </View>

      <Col>
          <View style={styles.text}>
            <Text style  = {[Fonts.body, {paddingBottom: 7}]}>
              Sales tax is calculated as the percentage of the price of the purchased 
              good and services. It varies by jurdiction and items, and it tends to 
              impact lower-income individual more.
            </Text>
            <Text style  = {Fonts.body}>
              Income tax is calculated as a percentage of income earned. It involves 
              filing an annual tax return, and the rates tends to increase with income.
            </Text>
          </View>
      </Col>

      {/*Sales Tax Deduction*/}
      <View style ={{paddingTop: 15}}>
        <Row>
          <Text style={[Fonts.subheader, {fontWeight: 'bold'}]}>
            Sales Tax Deduction
          </Text>
        </Row>
      </View>

      <Col>
        <View style={styles.text}>
          <Text style  = {[Fonts.body]}>
            General Rule: if the amount you paid in sales taxes is greater than
            your state and local income taxes, deduct sales tax instead of state 
            and local income taxes in your annual tax return (you CAN'T use both). 
            It is beneficial for those living in states with no state income or 
            for those who made significant purchases throughout the year.
            
          </Text>
        </View>
      </Col>

      {/*Items That Counts Towards Sales Tax*/}
      <View style ={{paddingTop: 15}}>
        <Row>
          <Text style={[Fonts.subheader, {fontWeight: 'bold'}]}>
            Items That Count toward Sales Tax
          </Text>
        </Row>
      </View>

      <Col>
        <View style={styles.text}>
          <Text style  = {[Fonts.body]}>
            Goods purchased for personal use, excluding groceries if it is 
            not subjected to sales tax. Large purchases such as vehicles and
            home renovation and building supplies. Services that were s
            ubjected to sales tax.
          </Text>
        </View>
      </Col>

      {/*Sales Tax on a Receipt*/}
      <View style ={{paddingTop: 15}}>
        <Row>
          <Text style={[Fonts.subheader, {fontWeight: 'bold'}]}>
            Sales Tax in a Receipt
          </Text>
        </Row>
      </View>

      <Col>
        <View style={styles.text}>
          <View style = {{paddingRight: "50%"}}>
            <Text style  = {Fonts.body}>
              Sales Tax can be found at the bottom of receipts. 
            </Text>
          </View>
          <View style = {{paddingLeft: "50%"}}>
            <Image
              source={{uri:''}} //image path
              style={styles.image}/>
          </View>

        </View>
      </Col>

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
  row: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  "2col": {
    flexDirection:"column",
    borderWidth: 3,
    borderColor: Colors.blueBackgroundForText,
    backgroundColor: Colors.blueBackgroundForText,
    paddingVertical: 14,
  },
  titleContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.inBetweenBlue,
    borderTopWidth: 7,
    borderTopColor: Colors.inBetweenBlue,
    padding: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 100,
    marginTop: 16,
  },
  text:{
    flex:2, 
    paddingHorizontal: 14
  }
});
