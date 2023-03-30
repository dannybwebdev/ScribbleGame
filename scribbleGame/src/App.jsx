import './App.css'
import BrushSize from './components/BrushSize'
import ClearButton from './components/ClearButton'
import ColorSelector from './components/ColorSelector'
import DrawSpace from './components/DrawSpace'


function App() {
  
  return (
    <div className="App">
      <DrawSpace />
      <ClearButton />
      <ColorSelector />
      <BrushSize />
    </div>
  )
}

export default App
