const YAML = require('yamljs');
const fs = require('fs');
const path = require('path');

module.exports = {
    getConfig: function(filename) {
        filename = filename||path.resolve(__dirname, './config.yml')
        return YAML.parse(fs.readFileSync(filename).toString());
    }
};