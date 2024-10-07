const Map=()=>{

  const Names=["laya","rosy","orkideh","helia"]
    return(
        <>
  {Names.map((name,index)=>{
    return(
        <h4 key={index}>{name}</h4>
    )
  })}
        </>
    )
}
export default Map;