import htmlParser from 'htmlparser2'
import { traverseDom, applyStyles } from './util/HTMLParsingUtils'

class HTMLParsingService {
    constructor(options) {
        this.handler = new htmlParser.DomHandler();
        this.parser = new htmlParser.Parser(this.handler, options)
    }

    parse(html, styles) {
        let domTree = this.parseHtmlToTree(html)
        if (domTree && domTree.length !== 1) {
            throw new Error(
                'html-to-react currently only supports HTML with one single root element. ' +
                'The HTML provided contains ' + domTree.length +
                ' root elements. You can fix that by simply wrapping your HTML ' +
                'in a <div> element.');
        }
        //console.log("domTree[0]", domTree[0])

        return traverseDom(domTree[0], (node) => { return true }, 0, styles)
    }

    parseHtmlToTree(html) {
        this.parser.parseComplete(html);
        return this.handler.dom;
    };
}

export default HTMLParsingService