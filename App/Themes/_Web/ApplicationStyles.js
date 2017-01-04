import Fonts from '../Fonts'
import Metrics from './Metrics'
import Colors from '../Colors'

const ApplicationStyles = {
  screen: {
    mainContainer: {
      width: Metrics.width,
      height: Metrics.height,
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: Colors.transparent,
      overflow: "hidden"
    },
    backgroundImage: {
      zIndex: -10,
      float:"left",
      width: 1024,
      height: 768
    },
    sidebar: {
      position: "absolute",
      zIndex: 3,
      top: 250,
      padding: 20,
      paddingBottom: 60,
      left: ((Metrics.width / 3) * 1.5),
      width: 250,
      height: 525,
      backgroundColor: Colors.snow,
      boxShadow: "4px 4px 5px 1px rgba(0,0,0,0.4)"
    },
    container: {
      paddingTop: Metrics.baseMargin
    },
    sideBarImage: {
        position: "absolute",
        left:640,
        zIndex: 4
    },
    backgroundImageContainer: {
        width: 690,
        height: 768,
        overflow: "hidden",
        float: "left",
        zIndex: 1
    },
    pageTitle: {
      position:"absolute",
      float:"left",
      left: 50,
      top: 50,
      ...Fonts.style.h3
    },
    fullPageImageContainer: {
        position:"absolute",
        top:100,
        width:1024,
        overflow: "hidden"
    },
    fullPageImage: {
      display:"block",
      marginLeft:"auto",
      marginRight:"auto"
    },
    footerImageContainer: {
        bottom:0,
        height:768,
        overflow:"hidden"
    },
    footerImage: {
      position:"fixed",
      bottom: 0
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