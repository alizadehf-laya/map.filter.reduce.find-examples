const Reduce =()=>{
    const numbers = [175, 50, 25];
    const numbers2 = [15.5, 2.3, 1.1, 4.7]; 

    const Reducenum= numbers.reduce(myFunc)
    const num2=numbers.reduce(getSum, 0)

    function myFunc(total, num) {
        return total - num +"    ";
      }

      function getSum(total, num) {
        return total + Math.round(num);
      }

    return(
        <>
        { numbers.map(myFunc)} <br/>
        {numbers.reduce(getSum)}
        </>
    )
}
export default Reduce;