import { Box, Environment, OrbitControls } from "@react-three/drei"
import { Venue } from "r3f-stage"
import "r3f-stage/styles.css"

function App() {
  return (
    <Venue>
      <Environment preset="sunset" />
      <Box>
        <meshStandardMaterial />
      </Box>
      <OrbitControls />
    </Venue>
  )
}

export default App
