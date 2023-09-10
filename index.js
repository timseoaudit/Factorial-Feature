const Calculate = { // create a Calculate object
    factorial: (number) => { // create a factorial method
        if(number === 0) { 
            return 1
        }
        let result = 1; // initialize result to 1
        for(let i = 1; i <= number; i++) { // loop through the numbers from 1 to number
            result *= i; // multiply result by i
        }
        return result; // return result
     }
};


module.exports = Calculate; // export the Calculate object


