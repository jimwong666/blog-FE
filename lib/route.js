/**
 * Automatic Routing Module
 *
 * This module reads routing configuration from filesystem and register endpoint to Express app.
 *
 * @author qiumingsheng
 */

const walk = require('walk');
const fs = require('fs');
const logger = require('./logger');
// const isDevMode = process.env.NODE_ENV === 'development';

/**
 * Register routing group
 *
 * @param app
 * @param routes
 * @param key
 */

function readFileProcessor(app,root,fileStats){        
    console.log("root："+root);

    var endpointGroup = fileStats.name.match(/(.+)\.js$/);
    var parentGroup = root.match(new RegExp("routes" + '(.*)'));
    if (endpointGroup && endpointGroup.length > 0 && parentGroup.length > 0) {

        var filePath = root.replace(/\\/gi, '/');
        // var filePath = isDevMode ? root.replace(/\\/gi, '/') : root;
        filePath = filePath + "/" + fileStats.name;
        var data = "";

             
        console.log("filePath："+filePath);

        try{
            data = fs.readFileSync(filePath, 'utf8');
        }catch (e) {
            logger.getLogger().error("readFileSync error:"+e);
        }
        if(data!==""){
            var endpoint = endpointGroup[1] === 'index' ? '' : endpointGroup[1];
            var parent = parentGroup[1]+(endpoint?'/':'');
            var key = (parent + endpoint).replace(/\\/gi, '/');
            // var key = isDevMode ? (parent + endpoint).replace(/\\/gi, '/') : (parent + endpoint);
            key = key||'/';
            var router = require("../" + filePath);
            console.log("filePath2："+filePath);
            if (router) {
                console.log("filePath3："+filePath);
                app.use(key, router);
            }
            else {
                logger.getLogger().warn('No routes found in "' + key + '".');
            }
        }
    }
}

/**
 * @param app
 */
exports.route = function(app) {
    // Walker options
    var options = {
        listeners: {
            file: function(root, fileStats, next) {
                readFileProcessor(app,root,fileStats);
                next();
            },
            errors: function(root, nodeStatsArray, next) {
                if(nodeStatsArray.error){
                    logger.getLogger().error("register failure:" + JSON.stringify(nodeStatsArray));
                }
                next();
            }
        }
    };
    walk.walkSync("routes", options);
};