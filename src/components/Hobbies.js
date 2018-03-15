import React from 'react'

const Hobbies = ({data}) => (
  <div>
    <img src={data.img}/>
    <p>{data.text}</p>
    <ul>
      {data.hobbies.map(hobbie => {
        return <li key={hobbie}>{hobbie}</li>
      })}
    </ul>
  </div>
)

export default Hobbies