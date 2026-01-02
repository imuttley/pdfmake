var fs = require('fs');

var fontContainer = {
	vfs: {
		'TitilliumWeb-Regular.woff': { data: fs.readFileSync(__dirname + '/../../../fonts/TitilliumWeb/titillium-web-latin-400-normal.woff', 'base64'), encoding: 'base64' },
		'TitilliumWeb-Bold.woff': { data: fs.readFileSync(__dirname + '/../../../fonts/TitilliumWeb/titillium-web-latin-700-normal.woff', 'base64'), encoding: 'base64' },
		'TitilliumWeb-Italic.woff': { data: fs.readFileSync(__dirname + '/../../../fonts/TitilliumWeb/titillium-web-latin-400-italic.woff', 'base64'), encoding: 'base64' },
		'TitilliumWeb-BoldItalic.woff': { data: fs.readFileSync(__dirname + '/../../../fonts/TitilliumWeb/titillium-web-latin-700-italic.woff', 'base64'), encoding: 'base64' }
	},
	fonts: {
		TitilliumWeb: {
			normal: 'TitilliumWeb-Regular.woff',
			bold: 'TitilliumWeb-Bold.woff',
			italics: 'TitilliumWeb-Italic.woff',
			bolditalics: 'TitilliumWeb-BoldItalic.woff'
		}
	}
};

var _global = typeof window === 'object' ? window : typeof global === 'object' ? global : typeof self === 'object' ? self : this;
if (typeof _global.pdfMake !== 'undefined' && typeof _global.pdfMake.addFontContainer !== 'undefined') {
	_global.pdfMake.addFontContainer(fontContainer);
}

if (typeof module !== 'undefined') {
	module.exports = fontContainer;
}
