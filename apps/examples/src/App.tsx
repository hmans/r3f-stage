import { Box, Environment, OrbitControls } from "@react-three/drei"
import { Application } from "r3f-stage"
import "r3f-stage/styles.css"

function App() {
  return (
    <Application>
      <Environment preset="sunset" />
      <Box>
        <meshStandardMaterial />
      </Box>
      <OrbitControls />
    </Application>
  )
}

export default App
