import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { useEffect, useState } from "react";
import { getItem } from '@/utils/AsyncStorage';

export default function Index() {
  const [salesTaxTotal, setSalesTaxTotal] = useState(0);
  async function getSalesTotal() {
    try {
      const value = await getItem("total-tax");
      if (value !== null) {
        // value previously stored
        // parse the value to a number
        const salesTotal = parseFloat(value);
        if (!isNaN(salesTotal)) {
          setSalesTaxTotal(salesTotal);
        } else {
          // not a number
          console.log("storage not a float");
        }
      }
    } catch (e) {
      // error reading value
      console.error("error reading value");
    }
  }
  useEffect(() => {
    // get the sales total from persistent storage
    getSalesTotal();
  });

  // parse the sales tax total to a nicely formatted money string
  const formattedSalesTaxTotal = salesTaxTotal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <AppLayout>
      <View style={[styles.deductionContainer, styles.shadow]}>
        <View>
          <View style={[styles.deductionContent, { padding: 10 }]}>
            <Row>
              <Col>
                <View style={[styles.deductionCol]}>
                  <Text style={Fonts.subheader}>Tax deduction amount:</Text>
                </View>
              </Col>
              <Col>
                <View style={[styles.deductionCol]}>
                  <Text style={Fonts.subheader}>
                    Total sales tax for the year:
                  </Text>
                </View>
              </Col>
            </Row>
            <Row minHeight={70}>
              <Col>
                <View
                  style={[
                    styles.deductionCol,
                    { flex: 1, justifyContent: "center" },
                  ]}
                >
                  <Text style={Fonts.bigNumber}>$2,000</Text>
                </View>
              </Col>
              <Col>
                <View
                  style={[
                    styles.deductionCol,
                    { flex: 1, justifyContent: "center" },
                  ]}
                >
                  <Text style={Fonts.subheader}>{formattedSalesTaxTotal}</Text>
                </View>
              </Col>
            </Row>
          </View>
        </View>
      </View>
      {/* the individual cards/buttons for navigation */}
      <View style={styles.buttonsContainer}>
        <Row>
          <Col>
            <View style={styles.buttonCard}>
              <Link href="/info" asChild>
                <Pressable style={styles.buttonText}>
                  <Image
                    source={require("../assets/images/info.png")}
                    style={{ width: 88, height: 88 }}
                  />
                  <Text
                    style={[
                      {
                        textAlign: "center",
                        marginLeft: 12,
                        marginRight: 12,
                      },
                      Fonts.body,
                    ]}
                  >
                    Learn about sales tax
                  </Text>
                </Pressable>
              </Link>
            </View>
          </Col>
          <Col>
            <View style={styles.buttonCard}>
              <Link href="/upload" asChild>
                <Pressable style={styles.buttonText}>
                  <Image
                    source={require("../assets/images/upload.png")}
                    style={{ width: 88, height: 88 }}
                  />
                  <Text
                    style={[
                      {
                        textAlign: "center",
                        marginLeft: 12,
                        marginRight: 12,
                      },
                      Fonts.body,
                    ]}
                  >
                    Upload your receipt
                  </Text>
                </Pressable>
              </Link>
            </View>
          </Col>
        </Row>
        <Row>
          <Col>
            <View style={styles.buttonCard}>
              <Link href="/view" asChild>
                <Pressable style={styles.buttonText}>
                  <Image
                    source={require("../assets/images/record.png")}
                    style={{ width: 88, height: 88 }}
                  />
                  <Text
                    style={[
                      {
                        textAlign: "center",
                        marginLeft: 12,
                        marginRight: 12,
                      },
                      Fonts.body,
                    ]}
                  >
                    View past receipts
                  </Text>
                </Pressable>
              </Link>
            </View>
          </Col>
        </Row>
      </View>
    </AppLayout>
  );
}

// generic row component wrapper
function Row({
  minHeight,
  children,
}: {
  minHeight?: number;
  children: React.ReactNode;
}) {
  return (
    <View style={[styles.row, minHeight ? { minHeight: minHeight } : null]}>
      {children}
    </View>
  );
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
    flex: 2,
  },
  deductionContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.lightBlue,
    borderTopWidth: 7,
    borderTopColor: Colors.darkBlue,
  },
  deductionCol: {
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
  deductionContent: {
    padding: 20,
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 40,
  },
  buttonCard: {
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 15,
    borderColor: Colors.darkBlue,
    // maxWidth: 159,
  },
});
