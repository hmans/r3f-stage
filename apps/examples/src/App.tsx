import { Application } from "r3f-stage"

const examples = {
  Dodecahedron: {
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
