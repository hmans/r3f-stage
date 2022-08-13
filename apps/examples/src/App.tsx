import { Environment, OrbitControls } from "@react-three/drei"
import { Application } from "r3f-stage"

function App() {
  return (
    <Application>
      <Environment preset="sunset" />
      <OrbitControls />

      <mesh>
        <dodecahedronGeometry />
        <meshStandardMaterial />
      </mesh>
    </Application>
  )
}

export default App
