import { Application } from "r3f-stage"

const examples = {
  Dodecahedron: () => (
    <mesh>
      <dodecahedronGeometry />
      <meshStandardMaterial />
    </mesh>
  ),

  Icosahedron: () => (
    <mesh>
      <icosahedronGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

function App() {
  return <Application examples={examples}></Application>
}

export default App
