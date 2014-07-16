"use strict";

var plugin = require("../lib/plugin.js");
var beforePlugin;

beforePlugin = plugin("peerigon/before-plugin", function (obj) {
    var self = this;

    this(obj).before("someMethod", function (number) {
        self.override.args = [++number];
    });
});

module.exports = beforePlugin;