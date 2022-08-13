import { Box, Environment, OrbitControls } from "@react-three/drei"
import { R3FStage } from "r3f-stage"
import "r3f-stage/styles.css"

function App() {
  return (
    <R3FStage>
      <Environment preset="sunset" />
      <Box>
        <meshStandardMaterial />
      </Box>
      <OrbitControls />
    </R3FStage>
  )
}

export default App
