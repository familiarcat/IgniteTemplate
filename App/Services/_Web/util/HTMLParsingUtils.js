import React from "react"
import reject from 'ramda/src/reject'
import find from 'ramda/src/find'
import addIndex from 'ramda/src/addIndex'
import map from 'ramda/src/map'
import ent from 'ent'
import reduce from 'ramda/src/reduce'
import toPairs from 'ramda/src/toPairs'
import camelize from 'underscore.string.fp/camelize'


// These are all sourced from https://facebook.github.io/react/docs/tags-and-attributes.html -
// all attributes regardless of whether they have a different case to their HTML equivalents are
// listed to reduce the chance of human error and make it easier to just copy-paste the new list if
// it changes.
const HTML_ATTRIBUTES = [
    'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency',
    'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding',
    'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className',
    'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords',
    'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download',
    'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate',
    'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang',
    'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType',
    'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth',
    'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted',
    'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster',
    'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role',
    'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected',
    'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start',
    'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width',
    'wmode', 'wrap',
]

const NON_STANDARD_ATTRIBUTES = [
    'autoCapitalize', 'autoCorrect', 'color', 'itemProp', 'itemScope', 'itemType', 'itemRef',
    'itemID', 'security', 'unselectable', 'results', 'autoSave',
]

const SVG_ATTRIBUTES = [
    'accentHeight', 'accumulate', 'additive', 'alignmentBaseline', 'allowReorder', 'alphabetic',
    'amplitude', 'arabicForm', 'ascent', 'attributeName', 'attributeType', 'autoReverse',
    'azimuth', 'baseFrequency', 'baseProfile', 'baselineShift', 'bbox', 'begin', 'bias', 'by',
    'calcMode', 'capHeight', 'clip', 'clipPath', 'clipPathUnits', 'clipRule', 'colorInterpolation',
    'colorInterpolationFilters', 'colorProfile', 'colorRendering', 'contentScriptType',
    'contentStyleType', 'cursor', 'cx', 'cy', 'd', 'decelerate', 'descent', 'diffuseConstant',
    'direction', 'display', 'divisor', 'dominantBaseline', 'dur', 'dx', 'dy', 'edgeMode',
    'elevation', 'enableBackground', 'end', 'exponent', 'externalResourcesRequired', 'fill',
    'fillOpacity', 'fillRule', 'filter', 'filterRes', 'filterUnits', 'floodColor', 'floodOpacity',
    'focusable', 'fontFamily', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle',
    'fontVariant', 'fontWeight', 'format', 'from', 'fx', 'fy', 'g1', 'g2', 'glyphName',
    'glyphOrientationHorizontal', 'glyphOrientationVertical', 'glyphRef', 'gradientTransform',
    'gradientUnits', 'hanging', 'horizAdvX', 'horizOriginX', 'ideographic', 'imageRendering',
    'in', 'in2', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kernelMatrix', 'kernelUnitLength',
    'kerning', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust', 'letterSpacing',
    'lightingColor', 'limitingConeAngle', 'local', 'markerEnd', 'markerHeight', 'markerMid',
    'markerStart', 'markerUnits', 'markerWidth', 'mask', 'maskContentUnits', 'maskUnits',
    'mathematical', 'mode', 'numOctaves', 'offset', 'opacity', 'operator', 'order',
    'orient', 'orientation', 'origin', 'overflow', 'overlinePosition', 'overlineThickness',
    'paintOrder', 'panose1', 'pathLength', 'patternContentUnits', 'patternTransform',
    'patternUnits', 'pointerEvents', 'points', 'pointsAtX', 'pointsAtY', 'pointsAtZ',
    'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits', 'r', 'radius', 'refX', 'refY',
    'renderingIntent', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures',
    'restart', 'result', 'rotate', 'rx', 'ry', 'scale', 'seed', 'shapeRendering', 'slope',
    'spacing', 'specularConstant', 'specularExponent', 'speed', 'spreadMethod', 'startOffset',
    'stdDeviation', 'stemh', 'stemv', 'stitchTiles', 'stopColor', 'stopOpacity',
    'strikethroughPosition', 'strikethroughThickness', 'string', 'stroke', 'strokeDasharray',
    'strokeDashoffset', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit',
    'strokeOpacity', 'strokeWidth', 'surfaceScale', 'systemLanguage', 'tableValues', 'targetX',
    'targetY', 'textAnchor', 'textDecoration', 'textLength', 'textRendering', 'to', 'transform',
    'u1', 'u2', 'underlinePosition', 'underlineThickness', 'unicode', 'unicodeBidi',
    'unicodeRange', 'unitsPerEm', 'vAlphabetic', 'vHanging', 'vIdeographic', 'vMathematical',
    'values', 'vectorEffect', 'version', 'vertAdvY', 'vertOriginX', 'vertOriginY', 'viewBox',
    'viewTarget', 'visibility', 'widths', 'wordSpacing', 'writingMode', 'x', 'x1', 'x2',
    'xChannelSelector', 'xHeight', 'xlinkActuate', 'xlinkArcrole', 'xlinkHref', 'xlinkRole',
    'xlinkShow', 'xlinkTitle', 'xlinkType', 'xmlBase', 'xmlLang', 'xmlSpace', 'y', 'y1', 'y2',
    'yChannelSelector', 'z', 'zoomAndPan',
]

const camelCaseMap = HTML_ATTRIBUTES
    .concat(NON_STANDARD_ATTRIBUTES)
    .concat(SVG_ATTRIBUTES)
    .reduce(function (soFar, attr) {
        var lower = attr.toLowerCase();
        if (lower !== attr) {
            soFar[lower] = attr;
        }
        return soFar;
    }, {});

const voidElementTags = [
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param',
    'source', 'track', 'wbr', 'menuitem', 'textarea',
];


function traverseDom(node, isValidNode, index, styles, processingInstructions) {
    processingInstructions = processingInstructions || defaultProcessingInstructions
    if (styles) {
        //console.debug("Styles provided:", styles)
    }
    styles = styles || {}

    if (isValidNode(node)) {
        let processingInstruction = find(function (processingInstruction) {
            return processingInstruction.shouldProcessNode(node);
        }, processingInstructions);
        if (processingInstruction != null) {
            let children = reject(function (x) { return x == null || x === false; },
                addIndex(map)(function (child, i) {
                    return traverseDom(child, isValidNode, i, styles, processingInstructions);
                }, node.children || []));
            if (processingInstruction.replaceChildren) {
                return createElement(node, index, node.data, [
                    processingInstruction.processNode(node, children, index),
                ]);
            }
            Object.keys(styles).map((s) => {
                if (node.attribs) {
                    //node.attribs.style = {}
                    switch (true) {
                        case node.name == s:
                            node.attribs.style = Object.assign({}, styles[s])
                    }
                }

            })
            //console.debug(node)
            return processingInstruction.processNode(node, children, index);
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const defaultProcessingInstructions = [{
    shouldProcessNode: (node) => {
        return true
    },
    processNode: (node, children, index) => {
        return processDefaultNode(node, children, index)
    }
}]

function processDefaultNode(node, children, index) {
    if (node.type === 'text') {
        return ent.decode(node.data);
    } else if (node.type === 'comment') {
        // FIXME: The following doesn't work as the generated HTML results in
        // "&lt;!--  This is a comment  --&gt;"
        // return '<!-- ' + node.data + ' -->';
        return false;
    }
    if (voidElementTags.indexOf(node.name) > -1) {
        return createElement(node, index);
    } else {
        return createElement(node, index, node.data, children);
    }
}

function createElement(node, index, data, children) {
    let elementProps = {
        key: index,
    };
    if (node.attribs) {
        elementProps = reduce(function (result, keyAndValue) {
            let key = keyAndValue[0];
            let value = keyAndValue[1];
            key = camelCaseMap[key.replace(/[-:]/, '')] || key;
            if (key === 'style' && typeof value === "Object") {
                console.log("should apply style to key and value", keyAndValue)
                value = value
            } else if (key === 'class') {
                key = 'className';
            }
            result[key] = value || key;
            return result;
        }, elementProps, toPairs(node.attribs));
    }

    children = children || [];
    let allChildren = data != null ? [data,].concat(children) : children
    let element = React.createElement.apply(
        null, [node.name, elementProps,].concat(allChildren))
    return element

}

function createStyleJsonFromString(styleString) {
    if (!styleString) {
        return {};
    }
    var styles = styleString.split(';');
    var singleStyle, key, value, jsonStyles = {};
    console.debug("creating style from string:", styleString)
    for (var i = 0; i < styles.length; i++) {
        singleStyle = styles[i].split(':');
        key = camelize(singleStyle[0]);
        value = singleStyle[1];
        if (key.length > 0 && value.length > 0) {
            jsonStyles[key] = value;
        }
    }
    console.log('created style from json string', jsonStyles);
    return jsonStyles;
}

export {
    createElement,
    traverseDom,
    camelCaseMap,
    voidElementTags,
    processDefaultNode,
    defaultProcessingInstructions
}