import { Application, Description, Example } from "r3f-stage"
import "r3f-stage/styles.css"

function App() {
  return (
    <Application>
      <Example path="simple">
        <Description>This is a simple example.</Description>
      </Example>

      <Example path="complex">
        <Description>This is a complex example.</Description>
      </Example>
    </Application>
  )
}

export default App
