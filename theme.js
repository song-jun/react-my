/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-22 09:55:48
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-22 15:12:37
 */
const path = require('path');
const { generateTheme } = require('antd-theme-generator');
const options = {
    antDir: path.join(__dirname, './node_modules/antd'),
    stylesDir: path.join(__dirname, './src/style/antd'),
    varFile: path.join(__dirname, './src/style/antd/variables.less'),
    mainLessFile: path.join(__dirname, './src/style/antd/index.less'),
    indexFileName: 'index.html',
    outputFilePath: path.join(__dirname, './public/theme.less'),
}

generateTheme(options).then(less => {
    console.log('Theme generated successfully');
}).catch(error => {
    console.log('Error', error);
});