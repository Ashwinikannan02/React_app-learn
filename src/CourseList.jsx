

//import Footer from './footer';
import Course from './Course';
import{useState,useEffect} from 'react';
// import butterfly from './assets/butterfly.jpg';
// import dragonfly from './assets/dragonfly.jpg';
import kurthi from './assets/kurthi.jpg';
import green_silk from './assets/green_silk.jpeg';
import kurthies from './assets/kurthies.jpg';
import long_sleeve from './assets/long_sleeve.jpg';
import royalred from './assets/royalred.jpg';
import silk_sarree from './assets/silk_saree.jpg';
import kanjivaram_silk_saree from './assets/kanjivaram_silk_saree.jpeg';
function CourseList(){
  //const courses=[
   const courses=[
     {
         id:1,
          name:  "light gold kurthi",
           type:" kurthi",
          rate:500,
          color:"light color",
            image : kurthi//"assets/kurthi.jpg" 
        },
        { id:2,
          name:"  Kurthies",
           type:" kurthi",
          rate:560,
          color:"dark blue",
           image: kurthies//"assets/kurthies.jpg"
        },
        { id:3,
         name:"  Maxi Long red Kurthi",
           type:" long Kurthi",
          rate:800,
          color:"red",
           image:royalred//"assets/royalred.jpg"
        },
        { id:4,
         name:" silk_saree",
           type:" saree",
          rate:980,
          color:"silk",
           image: silk_sarree//"assets/silk_saree.jpg"
        },
        { id:5,
         name:" kanjivaram silk saree",
           type:" saree",
          rate:1150,
          color:"brown",
           image: kanjivaram_silk_saree//"kanjivaram_silk_saree.jpeg"
        },
           { id:6,
            name:" Green silk saree",
           type:" saree",
         rate:1200,
          color:"Green",
           image: green_silk//"assets/green_silk.jpeg"
           },
            {id:7,
            name:"long_sleeve",
           type:"kurthi",
          rate:750,
          color:"Grey",
           image: long_sleeve//"assets/long_sleeve.jpg"
           }
        ];
   
          
    // function handleDelete(id){
    //   const newCourses=courses.filter((course)=>course.id!=id)
    //   setCourses(newCourses);


    // }
    const [dummy,setDummy]=useState("value");
    useEffect(()=>{
      console.log("effect");
      console.log(dummy);
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response =>{
        console.log(response);
        return response.json()
      }).then(data=>console.log(data))
    },)
    
    courses.sort((x,y)=>y.rate-x.rate) 
    const myCollection = courses.filter((course)=>course.rate>=100)
    const myList=courses.filter((course)=>course.rate>=150 && course.rate<=200)
    const CourseItems=myCollection.map( 
    (course)=>
        <Course
          key={course.id} 
          name={course.name}
          image={course.image}
          type={course.type}
          color={course.color}
          rate={course.rate}
         
        />
    )
    const ListOfItems = myList.map((course)=>
          <Course
          key={course.id} 
          name={course.name}
          image={course.image}
          type={course.type}
          color={course.color}
          rate={course.rate}
        />
    )
    // const DeleteItems=courses.map(
    //    (course)=>
    //     <Course
    //       key={course.id} 
    //       name={course.name}
    //       image={course.image}
    //       type={course.type}
    //       color={course.color}
    //       rate={course.rate}
    //       deleteItem={handleDelete}
    //       id={course.id}
    //     />
    
    
   
    return(
        <>
        {CourseItems}
       {ListOfItems}
        <button onClick={()=>{setDummy("dummy")}}>click </button> 
        </>
    )
};
export default CourseList
