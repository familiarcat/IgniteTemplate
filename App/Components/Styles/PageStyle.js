// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    ...Fonts.style,
    page: {
        flex: 1,
        flexDirection: 'row'
    },
    body: {
        position: "absolute",
        top: 40,
        left: 100,
        width: 275,
        backgroundColor: Colors.transparent,
    },
    h3: {
        backgroundColor: Colors.transparent,
        ...Fonts.style.h3,
        fontSize: 25,
        color: "#B4CF83"
    },
    h4: {
        backgroundColor: Colors.transparent,
        ...Fonts.style.h3,
        fontSize: 21,
        color: "#B4CF83"
    },
    p: {
        backgroundColor: Colors.transparent,
        color: 'white',
        ...Fonts.style.p
    },
    li: {
        color: "white",
        ...Fonts.style.p,
    },
    h5: {
        color: "gray",
        marginVertical: 40,
        ...Fonts.style.h5
    },
    span: {
        color: "gray",
        ...Fonts.style.p
    },
    b: {
        ...Fonts.style.b,
        color: "#B4CF83",
    },
    fullPageImage: {
        top: 100,
        left: 35   
    },
    fullPageImageContainer: {
        width:1024,
        height: 600,
        overflow: "hidden"
    },
    pageTitle: {
        ...ApplicationStyles.screen.pageTitle,
        color: "#B4CF83"
    },
    sideBarImageContainer: {
        position:"absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    sideBarImageFooter: {
        width:390,
        height: 40,
        left: 635,
        backgroundColor: "#f9f9f9",
        shadowColor: "#000000",
        shadowOpacity: 0.4,
        shadowRadius: 3,
        shadowOffset: {
            height: 4,
            width: 4
        }
    },
    
    pageTitleContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    timelineEntryContainer: {
        flex:1,
        flexDirection: "row",
        marginBottom: 5
    },
    timelineYear: {
        backgroundColor: Colors.transparent,
        ...Fonts.style.h3,
        fontSize: 22,
        color: "#B4CF83",
        width: 200
    },
    timelineEvent: {
        color: "gray",
        ...Fonts.style.p,
        marginLeft: 30,
        marginTop: 5,
        width: 450
    },
    timelineContainer: {
        ...ApplicationStyles.screen.sidebar,
        flex:1,
        flexDirection: 'row',
        paddingTop: 35,
        left: Metrics.screenWidth / 3 + Metrics.twoColumnMargin,
        width: 600,
        height: Metrics.screenHeight,
        paddingLeft: 30
    },
    columnTwo: {
        ...ApplicationStyles.screen.sidebar,
        paddingTop: 35,
        left: Metrics.screenWidth / 3 + Metrics.twoColumnMargin,
        width: 600,
        height: Metrics.screenHeight
    },
    columnTwoImage: {
        left:100
    },
    columnThree: {
        width: Metrics.screenWidth / 3,
        padding: 40,
        paddingTop: 55,
        borderRightWidth: 1,
        borderColor: "grey",
        backgroundColor: "white",
    },
    threeColumnContainer: {
        flexDirection: "row",
        flexWrap: "nowrap",
        width: Metrics.screenWidth,
        height: 416,
        top: Metrics.screenHeight / 3,
    },
    testimonialEntryContainer: {
        flex:1,
        flexDirection: "column",
        marginBottom: 10
    },
    testimonialEntry: {
        padding:5
    },
    testimonialEntryAlt: {
        padding:5,
        backgroundColor: "#f0f6e8"
    },
    quote: {
        color: "gray",
        ...Fonts.style.h5,
        fontSize: 13
    },
    source: {
        color: "gray",
        ...Fonts.style.h6,
        fontSize: 10
    }
})