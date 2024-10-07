const Find =()=>{
    const ages = [3, 10,40, 18, 20];
    const check=ages.find(checkAge)
    function checkAge(age) {
      return age > 18;
    }
 
    return(
        <>
       {ages.find(checkAge)}
        </>
    )
}
export default Find;