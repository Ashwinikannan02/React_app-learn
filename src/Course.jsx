//import butterfly from './assets/butterfly.jpg'
import PropTypes from 'prop-types'
import{useState} from 'react'

const course1="Html"
function Course(props){
    // let purchased=false;
     
     const[purchased,setPurchased]=useState(false)
    function Buy(discount){
    console.log(props.name,"Purchased with",discount,"% discount");
    setPurchased(true);

} 
    

const [discount,setDiscount]=useState(false)
function applyDiscount(amt){
    console.log(props.name,"Purchased with",discount, "offer");
    setDiscount(amt-discount)
}

    // const styles={
    //     backgroundColor:"red"
    // }
   // if (props.show==true){
    return(
       props.name && <div className="card">
        <img src={props.image} alt=""/>
        <h2>{props.name}</h2>
        
        <h3>{props.color}</h3>
        <h2>{props.type}</h2>
        <h5>{props.rate}</h5>
        <h5>{props.discount}</h5>
       
          {/* Always visible Buy Now button */}
         <button onClick={()=>{Buy(40)}}>Buy Now</button>
         <p>{purchased?"added to cart":"buy it"}</p>
         <p>{discount }</p>
        
         {/* Conditionally show discount button */}
         
         {
          props.rate>=1000 &&
         
          ( 
         <button onClick={()=>{applyDiscount(props.rate-30 )}}>Discount</button>

       
        
        
        )
        
      
    }
      
    
</div>
 
    );
   
}
     

// else if(props.login==true){
//     return(
//    <div className="card">
//         <img src={props.image} alt=""/>
//         <h2>{props.name}</h2>
//         <h3>{props.look}</h3>
//         <h2>{props.imageType}</h2>
//         <p>Looks ......</p>
// </div>
//     );
// }
 
//  else {

//   return(
//     <div className="card">image is not there</div>

// )
// }
//}

Course.propTypes={
    name: PropTypes.string,
    type:PropTypes.string,
    show:PropTypes.bool,
    login :PropTypes.bool,
    rate:PropTypes.number


};
// Course.defaultProps={
//     name :"Fly",
//     look: "wow",
//     image: butterfly
// }
export default Course;
