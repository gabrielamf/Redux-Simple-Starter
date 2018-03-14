import React from 'react';

const Section = ({hobbies,img,text}) => (
  <div>
    <img src={img}/>
    <p>{text}</p>
    <ul>
      { hobbies.map(hobbie =>{
          return <li>{hobbie}</li>
        })
      }
    </ul>
  </div>
)

export default Section