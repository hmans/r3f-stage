import { Application, Description, Example } from "r3f-stage"
import "r3f-stage/styles.css"
import React from "react"

const IcosahedronExample = React.lazy(() => import("./examples/IcosahedronExample"))

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
        <IcosahedronExample />
      </Example>
    </Application>
  )
}

export default App
