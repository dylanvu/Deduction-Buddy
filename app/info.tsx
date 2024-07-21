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
          <View style={[styles.titleContent, styles.centeredView]}>
              <Text style={[Fonts.header, {color: Colors.white }]}>
                General Sales Taxes
              </Text>
              <Text style={[Fonts.header, {color: Colors.white }]}>
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
        <Row>
          <Text style  = {[Fonts.body, {paddingBottom: 10}]}>
            idk
          </Text>
        </Row>

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
        <Row>
          <Text style  = {[Fonts.body, {paddingBottom: 10}]}>
            idkkjkljfkasjfkljdsa;j fkdsa dfakfwejfkajek; ajf dfaj ksdf we jfle;f dkjaf;wefjkjsflkdj fa iweohfcmx,andajfhfhuewh fiejf ewfk dsf
            fdsafkdshjfkhawehf j dksafj;
          </Text>
        </Row>
      </Col>

      {/*Items That Counts Towards Sales Tax*/}
      <View style ={{paddingTop: 15}}>
        <Row>
          <Text style={[Fonts.subheader, {fontWeight: 'bold'}]}>
            Accepted Items
          </Text>
        </Row>
      </View>

      <Col>
        <Row>
          <Text style  = {[Fonts.body, {paddingBottom: 10}]}>
            idk
          </Text>
        </Row>
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
        <Row>
          <Col>
            <Text style  = {[Fonts.body, {paddingBottom: 10}]}>
              idk
            </Text>
          </Col>
          <Col>
            <Image
              source={{uri:''}} //image path
              style={styles.image}
            />
          </Col>
        </Row>
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
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  "2col": {
    flexDirection:"column",
    borderWidth: 3,
    borderColor: Colors.blueBackgroundForText,
    backgroundColor: Colors.blueBackgroundForText
  },
  titleContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.inBetweenBlue,
    borderTopWidth: 7,
    borderTopColor: Colors.inBetweenBlue,
  },
  titleContent: {
    padding: 10,
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
  }
});
