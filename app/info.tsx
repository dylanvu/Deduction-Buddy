// learn about sales tax
import { Text, View, StyleSheet, Image }from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";

export default function InfoScreen() {
  return (
    <AppLayout>
      <View style={styles.centeredView}>
        <Text style={styles.header}>General Sales Taxes 101</Text>
      </View>

      {/*Sales vs Income Tax*/}
      <Text style={styles.title}>Sales vs. Income Tax</Text>
      <Row>
        <Text style  = {styles.paragraph}>
          idk
        </Text>
      </Row>

      {/*Sales Tax Deduction*/}
      <Text style={styles.title}>Sales Tax Deduction</Text>
      <Row>
        <Text style  = {styles.paragraph}>
          idk
        </Text>
      </Row>

      {/*Items That Counts Towards Sales Tax*/}
      <Text style = {styles.title}>Accepted Items</Text>
      <Row>
        <Text style  = {styles.paragraph}>
          idk
        </Text>
      </Row>

      {/*Sales Tax on a Receipt*/}
      <Text style = {styles.title}>Sales Tax on a Receipt</Text>
      <Row>
        <Col>
          <Text style  = {styles.paragraph}>
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
  },
  "2col": {
    borderWidth: 1,
    flex: 2,
    padding: 10,
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  col: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 16,
  }
});
