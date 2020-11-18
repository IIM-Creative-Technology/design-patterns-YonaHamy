let person =(function(){

    let name
    let age

    function setName(titleParam){
        name=titleParam
    }

    function getName(){
        return name
    }

    function setAge(ageParam){
        age=ageParam
    }

    function getAge(){
        return age
    }

    function getTitleWithAge(){
        return 'Bonjour je m\'appelle ' + name + ' et j\'ai ' + age 
    }
    return {
        setName: setName,
        getName: getName,
        setAge: setAge,
        getAge: getAge,
        final: getTitleWithAge
    }
})()

person.setName('Yona Hamy')
person.setAge('20 ans')
console.log(person.getName())
console.log(person.final())
