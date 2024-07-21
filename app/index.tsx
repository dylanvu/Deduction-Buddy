import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import AppLayout from "@/components/AppLayout";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";

export default function Index() {
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
                  <Text style={Fonts.subheader}>$1,000</Text>
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
                  <Ionicons
                    name="information-circle-outline"
                    size={88}
                    color={Colors.darkBlue}
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
                  <Feather name="upload" size={88} color={Colors.darkBlue} />
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
                  <MaterialCommunityIcons
                    name="clipboard-text-outline"
                    size={88}
                    color={Colors.darkBlue}
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
  },
});
