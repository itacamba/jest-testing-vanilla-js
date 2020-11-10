const { clone } = require("@babel/types")

function cloneArray(arr){
    return [...arr]
}

module.exports = cloneArray