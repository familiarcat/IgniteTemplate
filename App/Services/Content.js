
export function getContent(platform) {
    const content = require("../../data/executive_recruiting")
    //const content = {}
    return {
        ok: true,
        data: content
    }
}

// export default {
//     create
// }