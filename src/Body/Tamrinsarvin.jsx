const Sarvinexe=()=>{

    const classes=[
        {name:"html",finished: true},
        {name:"javascript",finished:false},
        {name:"css",finished:true},
        {name:"bootstrap",finished:false},
        {name:"react",finished:true},
        {name:"python",finished:false},
        ]
    return(
        <>
        {classes.map((c,index) =>{
            return  c.finished && <h2 key={index}>{c.name}</h2>
        })}
        </>
    )
}
export default Sarvinexe;