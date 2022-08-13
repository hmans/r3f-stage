import { Box, Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { R3FStage } from "r3f-stage"
import "r3f-stage/styles.css"

function App() {
  return (
    <Canvas>
      <Environment preset="sunset" />
      <Box>
        <meshStandardMaterial />
      </Box>
      <OrbitControls />
    </Canvas>
  )
}

export default App
