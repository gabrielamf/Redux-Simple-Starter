import React from 'react'

import Header from './Header'
// Ahora estará enlazado al HOC
import Hobbies from '../containers/Hobbies-container'

const App = () => ( 
  <div>
    <Header/>
    <Hobbies/>
  </div>
)

export default App