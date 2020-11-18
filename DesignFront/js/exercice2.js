let movieMovie =(function(){

    let title
    let year

    return{
        setTitle(titleParam){
            title=titleParam
        },
        getTitle(){
            return title
        }
    }
})()

moduleMovie.setTitle('Titanic')
console.log(movieMovie.getTitle())
