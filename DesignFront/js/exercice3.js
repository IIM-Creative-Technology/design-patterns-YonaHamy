let movieMovie =(function(){

    let title
    let year

    function setTitle(titleParam){
        title=titleParam
    }

    function getTitle(){
        return title
    }

    function getTitleWithLike(){
        return 'Jaime' + title
    }
    return {
        setTitle: setTitle,
        getTitle: getTitle,
        like: getTitleWithLike
    }
})()

moduleMovie.setTitle('Titanic')
console.log(movieMovie.getTitle())
console.log(moduleMovie.like())
