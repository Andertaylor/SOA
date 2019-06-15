import { StyleSheet } from "react-native";

//------ Constant colors import
import colors from '../../src/constants/colors.js'

//------ Styles to give format to the views
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  },
  buttonContainer: {
    backgroundColor: colors.bluelight,
    paddingVertical: 15,
    height: 40,
    marginBottom: 10,
    padding: 10,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "700"
  },
  container: {
    flex: 1
  },
  containerLog: {
    flex: 1,
    backgroundColor: colors.backgroundblue,
    width: 320,
    padding: 50,
    margin: 20,
  },
  card: {
    marginHorizontal: 2,
    marginVertical: 2,
    flexBasis: "48%"
  },
  cardHeader: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 26
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: "center"
  },
  description: {
    marginBottom: 15,
    marginTop:15,
    fontSize: 18,
    color: colors.white,
    textAlign: "center"
  },
  description2: {
    marginBottom: 25,
    marginTop:25,
    fontSize: 14,
    color: colors.white,
    textAlign: "center"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
    marginBottom: 20
  },

  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  helpContainer: {
		marginTop: 15,
		alignItems: "center"
  },
  icon: {
    height: 20,
    width: 20
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    borderColor: colors.white
  },
  imageLog: {
    width: "50%",
    height: "50%",
    resizeMode: "contain"
  },
  input: {
    height: 40,
    backgroundColor: colors.opacityDarkGray,
    marginBottom: 10,
    padding: 10,
    color: colors.white
  },
  listContainer: {
    alignItems: "center"
  },
  loginContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    position: "absolute",
    width: 300,
    height: 100
  },
  menuItem: {
    width: "50%",
    height: "50%",
    padding: 20,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 3
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: colors.white,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: colors.white
  },
  view1: {
    marginTop: 20,
    width: 250,
    borderRadius: 3,
    elevation: 2
  },
  view2: {
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 5,
    overflow: "hidden"
  }
});

export default styles;
