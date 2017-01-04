import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes/_Web'

export default {
    ...ApplicationStyles.screen,
    ...Fonts.style,
    body: {
        position: "absolute",
        top: 40,
        left: 100,
        width: 275,
        backgroundColor: Colors.transparent,
    },
    p: {
        backgroundColor: Colors.transparent,
        color: 'white',
        ...Fonts.style.p
    },
    h3: {
        backgroundColor: Colors.transparent,
        ...Fonts.style.h3,
        marginTop:0,
        fontSize: 25,
        color: "#B4CF83"
    },
    h4: {
        backgroundColor: Colors.transparent,
        ...Fonts.style.h3,
        fontSize: 21,
        color: "#B4CF83"
    },
    h5: {
        ...Fonts.style.h5,
        lineHeight: 2
    },
    span: {
        color: "gray",
        ...Fonts.style.p
    },
    b: {
        ...Fonts.style.b,
        color: "#B4CF83",
    },
    pageTitle: {
        ...ApplicationStyles.screen.pageTitle,
        color: "#B4CF83"
    },
    sideBarImageFooter: {
        display:"inline-block",
        position:"absolute",
        width:420,
        height: 40,
        left: 615,
        top: 235,
        backgroundColor: "#f9f9f9",
        boxShadow: "4px 4px 5px 1px rgba(0,0,0,0.4)",
        zIndex: 5
    },
    columnThree: {
        float:"left",
        display:"inline-block",
        width: Metrics.width / 3,
        height: "100%",
        padding: 40,
        paddingTop: 55,
        borderRightWidth: 1,
        borderRightStyle: "solid",
        borderColor: "grey",
    },
    threeColumnContainer: {
        display:"inline-block",
        position:"absolute",
        width: 1024,
        height: 416,
        top:Metrics.height / 3,
        left:0,
        zIndex: 3,
        backgroundColor: "white",
    },
}