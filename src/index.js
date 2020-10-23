module.exports = function check(str, bracketsConfig) {
    let result = true;
    const tempString = str.split('');
    const stack = [];

    for ( i = 0; i < tempString.length; i++) {
        for (j = 0; j < bracketsConfig.length; j++) {
            const currentItem = tempString[i]
            const openBracket = bracketsConfig[j][0]
            const closeBracket = bracketsConfig[j][1]
            if (currentItem !== openBracket && currentItem !== closeBracket) continue
            if (currentItem === openBracket && openBracket === closeBracket) {
                if (stack[stack.length - 1] !== openBracket) {
                    stack.push(currentItem)
                    break
                } else if (stack[stack.length - 1] === openBracket) {
                    stack.pop()
                    continue    
                } else return result = false
            }
            if (currentItem === openBracket) {
                stack.push(currentItem)
                continue
            } else if (currentItem === closeBracket) {
                if(stack.length !== 0 && stack[stack.length - 1] === openBracket) {
                    stack.pop()
                    continue
                } else {                    
                    return result = false;                    
                }
            }
            if (!result) break
        }
    }
    if (stack.length > 0 ) result = false
   return result;
}
