const Index= ()=>{
    const nums=[12.29,38,47,56]
    const findindex=nums.findIndex(checknum)
    function checknum(num){
        return num<40
    }
    return(
        <>
        {nums.findIndex(checknum)};
        </>
    )
}
export default Index;