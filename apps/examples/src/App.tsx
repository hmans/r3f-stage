import { Application, Description, Example } from "r3f-stage"
import "r3f-stage/styles.css"

function App() {
  return (
    <Application>
      <Example path="simple" title="Simple">
        <Description>This is a simple example.</Description>

        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="yellow" />
        </mesh>
      </Example>

      <Example path="complex" title="Complex">
        <Description>This is a complex example.</Description>

        <mesh>
          <icosahedronGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Example>
    </Application>
  )
}

export default App
