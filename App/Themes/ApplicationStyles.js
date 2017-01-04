import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      marginTop: 0,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      resizeMode: 'cover'
    },
    sideBarImage: {
      left: 660,
    },
    footerImage: {
      position: 'absolute',
      bottom: 0,
      resizeMode: 'cover'
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin
    },
    sidebar: {
      position: "absolute",
      zIndex: 3,
      bottom: 0,
      left: ((Metrics.screenWidth / 3) * 1.5),
      width: 250,
      padding: 20,
      paddingBottom: 60,
      backgroundColor: Colors.snow,
      shadowColor: "#000000",
      shadowOpacity: 0.4,
      shadowRadius: 3,
      shadowOffset: {
        height: 4,
        width: 4
      }
    },
    imageSidebar: {
      position: "absolute",
      zIndex: 3,
      top: 0,
      left: 40,
      width: 250,
      padding: 20,
      paddingBottom: 60,
      backgroundColor: Colors.snow,
      shadowColor: "#000000",
      shadowOpacity: 0.4,
      shadowRadius: 3,
      shadowOffset: {
        height: 4,
        width: 4
      }
    },
    pageTitle: {
      left: 50,
      top: 50,
      ...Fonts.style.h3
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
      borderTopColor: Colors.frost,
      borderTopWidth: 0.5,
      borderBottomColor: Colors.frost,
      borderBottomWidth: 1
    },
    sectionText: {
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    }
  },
  darkLabelContainer: {
    backgroundColor: Colors.cloud,
    padding: Metrics.smallMargin
  },
  darkLabel: {
    fontFamily: Fonts.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
