/**
 * @param {number} num
 * @return {number}
 */


var numberOfSteps  = function(num) {
    
    var stepCount = 0;
    
    if ( num >= 0 && num <= 1000000 ){
        
        while ( num !== 0 ){
            
            stepCount = stepCount + 1;
            num = countSteps(num);
        }
    }      
    return stepCount;
};

var countSteps = function(num) {
    if ( num%2 == 0 )
        return num/2;
    
    else 
        return num - 1;
    
}

console.log("No of steps is: ", numberOfSteps(529));