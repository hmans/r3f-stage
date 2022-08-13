import { Application } from "r3f-stage"

function App() {
  return (
    <Application>
      <mesh>
        <dodecahedronGeometry />
        <meshStandardMaterial />
      </mesh>
    </Application>
  )
}

export default App
