module.exports = function repeater(str, options) {
   let arr = [];
   let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
   if(typeof str !== "string")
    str = String(str);
   if(typeof addition !== "string" && addition !== undefined && addition !== null)
    addition = addition.toString();
    /*addition = String(addition);*/
   if(separator === undefined)
    separator = "+";
   if(additionSeparator === undefined)
    additionSeparator = "|";
   let string = "";
   if(addition === undefined)
    addition= "";
   string += str + addition;
   for(let i=0; i < additionRepeatTimes-1; i++) {
            string += additionSeparator + addition;
   }
   if(repeatTimes !== undefined) {
        for(let i=0; i < repeatTimes; i++) {
                arr.push(string);
        } 
    }
    else arr.push(string);
   return arr.join(separator);
};
  