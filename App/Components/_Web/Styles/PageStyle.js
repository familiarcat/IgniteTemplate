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
    }
}