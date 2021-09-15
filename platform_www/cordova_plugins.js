cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-keyboard.keyboard",
        "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
        "pluginId": "cordova-plugin-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-crosswalk-webview": "2.1.0",
    "cordova-plugin-keyboard": "1.1.4"
};
// BOTTOM OF METADATA
});