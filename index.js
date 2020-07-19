module.exports = function ({ addComponents, e, theme }) {
    switch (theme('designSystem')) {
        case 'bootstrap': addComponents(require("./components/bootstrap")); break;
        case 'material': addComponents(require("./components/material")); break;
        case 'ios': addComponents(require("./components/ios")); break;
        case 'macos': addComponents(require("./components/macos")); break;
        default: break;
    }
}