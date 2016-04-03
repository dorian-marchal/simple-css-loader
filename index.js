module.exports = function(css) {
    this.cacheable && this.cacheable();

    return 'module.exports = (function() {\n\
        var head = window.document.getElementsByTagName(\'head\')[0];\n\
        if (head) {\n\
            var style = window.document.createElement(\'style\');\n\
            style.textContent = ' + JSON.stringify(css) + ';\n\
            style.type = \'text/css\';\n\
            head.appendChild(style);\n\
            return style;\n\
        }\n\
        return null;\n\
    })();\n';
};
module.exports.seperable = true;
