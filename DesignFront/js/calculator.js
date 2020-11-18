let moduleCalculator = (function (){

    let total = 0

    function add(number){
        validateNumber(number)
        total += number
    }

    function remove(number){
        validateNumber(number)
        total -= number
    }

    function multiply(number){
        validateNumber(number)
        total *= number
    }

    function division(number){
        validateNumber(number)
        total /= number
    }

    function getTotal(){
        return total
    }

    function validateNumber(number){
        if(typeof number !== 'number'){
            throw new Error('La valeur ' + number + ' n\'est pas un nombre !')
        }
    }

    return{
        add: add,
        remove: remove,
        multiply: multiply,
        division: division,
        getResult: getTotal,
    }
})()

moduleCalculator.add(2)
moduleCalculator.add(3)
moduleCalculator.remove(10)

console.log(moduleCalculator.getResult())