module.exports = function check(str, bracketsConfig) {
    const arr = str.split('');
    let openBracketStack = [];
    let result;
    for ( let i = 0; i < arr.length; i++ ) {
        bracketsConfig.forEach(bracket => {
            if ( arr[i] === bracket[0] ) {
                openBracketStack.push(arr[i]);
            }
            if ( arr[i] === bracket[1] && openBracketStack[openBracketStack.length - 1] === bracket[0]){
                openBracketStack.pop();
            }  
            if ( arr[i] === bracket[1] && openBracketStack[openBracketStack.length - 1] !== bracket[0]){
                return result = false;
            }    
        })
    }
    if (!openBracketStack.length) return result = true;
    return result;
}
