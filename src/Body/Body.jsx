const Methods =()=>{
    var numbers=[2,46,1,38,4]
    const newnum= numbers.map(myfunction1)
   function  myfunction1(numbers){
        return(numbers*100 +"       ")
    }
    return(
        <>
        { numbers.map(myfunction1)}
        </>
    )
}
export default Methods