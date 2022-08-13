import { Application } from "r3f-stage"
import { Examples } from "r3f-stage/src/Example"

const examples: Examples = {
  Dodecahedron: {
    title: "Mwhahahahedron",
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
  }
}

function App() {
  return <Application examples={examples}></Application>
}

export default App
