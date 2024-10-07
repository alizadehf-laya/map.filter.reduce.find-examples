const Filter=()=>{
    const numbers=[20,15,17,19.5,10,8]
    const highnumbers=numbers.filter(myfunction2)
    function myfunction2(num){
        return num>15  +"    " ;
    }
    return(
        <>
        {numbers.filter(myfunction2)}
        </>
    )
}
export default Filter;