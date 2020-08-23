var number = 100;
// Makeing a Number.
let  factorial =  Factorial(number);
/**
 * Invocation of the factorial function.
 */
console.log(factorial);
//Print a Factorial in Ineger form.
function Factorial (number)
{ 
    /**
     * Makeing a factorial fuction.
     */ 
    let array = [];          
    let factorial=100;
    for(var counter = number-1; counter>0  ;counter--)
    {
        /**
         * Makeing a "for" Becuse Start with the number to reach zero.
         */
        array = numberOfDigits(factorial);
        /**
         * Invocation of the numberOfDigits Becuse To provide a report of the figures.  
         */ 
        for(var counterOne = 0 ; counterOne<array.length ; counterOne++)
        {
            //Makeing a "for" Becuse To multiply each digit by the next number;
            array[counterOne] *= counter ; 
        }
        factorial = Computing(array);
        /**
         * Invocation of the Computing Becuse multiplication of two numbers.
         */
    }
    return factorial ;
    function numberOfDigits(factorial)
    {
        let array = [] ;
        while(factorial>=1)
        {
            array.push(factorial%10);
            factorial = factorial/10 ;
        }
        // Pour numbers into the array.
        for(let counter = 0 ; counter <array.length ; counter++)
        {
            array[counter] =  Math.floor(array[counter]);
        }
        /**
         * Because the division of numbers into 10 is between zero and one and is decimal.
         * So round the number down.
         */
        array.reverse();
        return array ;
    }
    function Computing( array )
    {
        let counterOne = array.length-1 ;
        //
        let arrayThree = [] ;
        for(let counter = 0 ; counter<array.length ; counter++ )
        {
            let arrayTwo = [];
            while(array[counter]>=1)
            {
               array[counter]= Math.floor(array[counter]);
                arrayTwo.push(array[counter]%10)
                array[counter] = array[counter]/10 ;
                array[counter]= Math.floor(array[counter]);
            }
            /**
             *Putting array digits in array two
             */
            arrayTwo.reverse();
            //Because when we put the numbers in the array, they are from last to first.
            let counterTwo = counterOne ;
            while(counterTwo>0)
            {
                arrayTwo.push(0);
                counterTwo-- ;
            }
            /**
             * Add zero to size counter two.
             */
            counterOne-- ; 
            if(counter==0)
            {
                for(let counter = 0 ; counter<arrayTwo.length;counter++)
                {
                    arrayThree.push(arrayTwo[counter]);
                }
                continue ;
            }
            while(true)
            {
                if(arrayTwo.length==arrayThree.length)
                {
                    break ;
                }
                arrayTwo.splice(0,0,0);
            }
            /**
             * To find the number of digits in each member and add zeros to match twyso array.
             */
            for(let counter = arrayTwo.length-1  ;counter>=0 ; counter-- )
            {
                arrayThree[counter] += arrayTwo[counter]; 
            }
        }
        arrayThree.reverse();
        for(let counter =0 ; counter<arrayThree.length;counter++)
        {
            if (arrayThree[counter]>=10)
            {
                arrayThree[counter]= arrayThree[counter]-10;
                if(counter == arrayThree.length-1)
                {
                    arrayThree.push(1);
                }
                else
                {
                    arrayThree[counter+1] += 1 ;
                }
                
            }
        }
        /**
         * Break the members that are bigger than 10 and add to the previous digit.
         */
        arrayThree.reverse(); 
        for(let counter = 0 ; counter<arrayThree.length ; counter++)
        {
            arrayThree[counter] = arrayThree[counter].toString();
        }
        //Convert all array members to strings.
        var sum = "" ;
        for(let counter = 0 ; counter<arrayThree.length ; counter++)
        {
            sum += arrayThree[counter]; 
        }
        //Gather all members array three.
        return sum ;
    } 
} 