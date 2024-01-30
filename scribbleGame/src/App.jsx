import BrushSize from './components/BrushSize'
import ClearButton from './components/ClearButton'
import ColorSelector from './components/ColorSelector'
import DrawSpace from './components/DrawSpace'

import { useState } from 'react'


function App() {

  const [color, setColor] = useState('black')
  const [brushSize, setBrushSize] = useState(10)

  
  
  return (
    <div className="App">
      <DrawSpace color={color} size={brushSize}/>
      <ClearButton />
      <ColorSelector changeColor={color => setColor(color)}/>
      <BrushSize changeBrushSize={brush => setBrushSize(brush)}/>
    </div>
  )
}

export default App
