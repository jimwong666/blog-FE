const fs = require('fs');
const path = require('path');

/*
* client 目录解析
*
* */
const clientPathResolve = (relativePath) => {
	return path.resolve(__dirname, '../../', relativePath);
}

/**    
 * get package.json version（废弃，自建了配置文件，还是不要放在package.json里面）
 */    
// function getPackageConfig(){
//     const pkgPath = clientPathResolve('../package.json');
//     const pkgData = JSON.parse(fs.readFileSync(pkgPath));
//     return pkgData.webpackConfig;
// }


/**
 * get entry files
 * @param {String} entryDir：entry文件目录路径
*/
function getEntry(entryDir) {
    let entryMap = {};

    let getFile = function (pageDir) {
        fs.readdirSync(pageDir).forEach((pathname) => {
            let fullPathName = path.resolve(pageDir, pathname);
            let stat = fs.statSync(fullPathName);
            if (stat.isDirectory()) {
                getFile(fullPathName)
            }
            if (stat.isFile()) {
                let _arr = fullPathName.split('.');
                _arr.pop();
                let _tar = _arr.join('.');
                let _rel_tar = path.relative(entryDir, _tar)
                _rel_tar = _rel_tar.replace(/\\/g, '/');
                // entryMap[_rel_tar] = ['@babel/polyfill', fullPathName.replace(/\\/g, '/')];
                entryMap[_rel_tar] = fullPathName.replace(/\\/g, '/');
            }

        });
    }
    getFile(entryDir);
    return entryMap;
}

module.exports = {
    clientPathResolve,
    appConfig: require(clientPathResolve('../config')).getConfig(),
    getEntry
}