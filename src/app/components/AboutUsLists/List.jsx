import React from 'react'
import style from './List.module.css'

export const List = () => {
  
const List =[{
    title:"Consulting",
    description:"Our tailored solutions harness the power of cutting-edge technology to optimize customer relationships and streamline operations.",
    link :"consultation@Bulwark.com"
},

{
    title:"Individual",
    description:"Our tailored solutions harness the power of cutting-edge technology to optimize customer relationships and streamline operations. ",
    link: "support@Bulwark.com"

},

{
    title:"Retail",
    description:"Our tailored solutions harness the power of cutting-edge technology to optimize customer relationships and streamline operations. ",
    link: "retail@Bulwark.com"

}

] 
 
return <section className={style.List}>
   
<div className={style.list}>
{List.map((list) => (
    <div className={style.item}>
     <div className={style.cardContainer}>

         <div>
    <h5 className={style.title}>{list.title}</h5>
    <p className={style.description}>{list.description}</p>
    

         </div>

    </div>

    </div>

))}

     
</div>

</section>







};

