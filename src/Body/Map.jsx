const Map=()=>{
//   const Names=["laya","rosy","orkideh","helia"]
const users=[
            {name:"laya" ,age:36},
            {name:"rossy" ,age:12},
            {name:"orkideh" ,age:3},
            {name:"yasser" ,age:42}
            ]
    return(
        <>
        {users.map((user,index)=>{
            return  <h4 key={index}>{user.name}:{user.age}</h4>
           
        })}
  {/* {Names.map((name,index)=>{
    return(
        <h4 key={index}>{name}</h4>
    )
  })} */}
        </>
    )
}
export default Map;