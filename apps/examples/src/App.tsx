import { Application } from "r3f-stage"
import { Examples } from "r3f-stage/src/Example"

const examples: Examples = {
  Dodecahedron: {
    description: "Lorem to the ipsum.",
    render: () => (
      <mesh>
        <dodecahedronGeometry />
        <meshStandardMaterial />
      </mesh>
    )
  },

  Icosahedron: {
    render: () => (
      <mesh>
        <icosahedronGeometry />
        <meshStandardMaterial />
      </mesh>
    )
  },

  Sphere: {
    render: () => (
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
    )
  }
}

function App() {
  return <Application examples={examples} performance />
}

export default App
