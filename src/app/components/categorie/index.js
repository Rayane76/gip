export default function Categorie(props){


   return( 
  <>
    <div sm style={{textAlign:"left",marginRight:"0px",paddingBottom:"20px",width:"fit-content"}}>
      <a href={"/" + props.kind} style={{color:"white",textDecoration:"none"}}>
      <div style={{position:"relative"}}>
        <img src={props.image} alt="" style={{paddingTop:"10px",paddingBottom:"10px"}}></img>
        <p style={{width:"auto",position:"absolute",bottom:"8px",left:"16px"}}>{props.kind}</p>
      </div>
      <p style={{color:"black"}}>{props.sectionName}</p>
      </a>
    </div>
  </>
   )
}