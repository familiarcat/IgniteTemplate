import { ApplicationStyles, Colors, Fonts } from '../../../Themes/_Web'

export default {
    ...ApplicationStyles.screen,
    title: {
        position: "absolute",
        zIndex: 2,
        left: 50,
        top: 650,
        backgroundColor: Colors.transparent,
        color: "white",
        ...Fonts.style.h3
    }
    
    


}