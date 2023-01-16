// complete the given function

function palindrome(str){
	let len = str.length;
	let str_uppername = str.toUpperCase();
    var j=len-1;
    for(var i=0; i<len/2; i++){
        if(str_uppername[i] === str_uppername[j]){
            j--;
        }
        else{
            return false;
        }
    }
    return true;
}
module.exports = palindrome
