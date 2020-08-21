import React from 'react'
import {NavLink} from 'react-router-dom'
import cssClasses from './Page.module.css';


const page = (props)=>
{   
    
    return <section className={cssClasses.Page}>
    <h1>{props.heading}</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorum dolorem modi cupiditate quia doloribus impedit facere odio neque adipisci, nobis voluptate vero fugiat deleniti voluptas, est voluptates dignissimos tempora.</p>
    <div>
         {props.btnArr.map((ele,i)=><NavLink key={i} to={ele.link} className={cssClasses.btn}>
             {ele.name}
        </NavLink>)}
    </div>
   </section>
}

export default page