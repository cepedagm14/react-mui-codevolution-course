import { useState } from 'react'
import './App.css'
import MUIBox from './components/MUIBox'
import { Muibutton } from './components/Muibutton'
import MuiGrid from './components/MuiGrid'
import MuiPaper from './components/MuiPaper'
import MuiSelect from './components/MuiSelect'
import MuiStack from './components/MuiStack'
import { MuiTextfield } from './components/MuiTextfield'
import MuiTypography from './components/MuiTypography'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <Muibutton /> */}
      {/* <MuiTextfield /> */}
      {/* <MuiSelect /> */}
      {/* <MUIBox /> */}
      {/* <MuiStack /> */}
      {/* <MuiGrid /> */}
      <MuiPaper />
    </div>
  )
}

export default App
