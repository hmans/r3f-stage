import { Application, FlatStage } from "r3f-stage"
import { Examples } from "r3f-stage/src/Example"
import { lazy } from "react"
import "r3f-stage/styles.css"

const examples: Examples = {
  Dodecahedron: {
    Description: () => (
      <p>
        In geometry, a <strong>dodecahedron</strong> or duodecahedron is any polyhedron
        with twelve flat faces. The most familiar dodecahedron is the regular dodecahedron
        with regular pentagons as faces, which is a Platonic solid. There are also three
        regular star dodecahedra, which are constructed as stellations of the convex form.
        All of these have icosahedral symmetry, order 120.
      </p>
    ),
    Example: () => (
      <FlatStage>
        <mesh position-y={1.5} castShadow>
          <dodecahedronGeometry />
          <meshStandardMaterial metalness={0.3} roughness={0.5} color="#e9c46a" />
        </mesh>
      </FlatStage>
    )
  },

  Icosahedron: {
    Description: () => (
      <p>
        In geometry, an <strong>icosahedron</strong> is a polyhedron with 20 faces. The
        name comes from Ancient Greek εἴκοσι (eíkosi) 'twenty' and from Ancient Greek ἕδρα
        (hédra) 'seat'. The plural can be either "icosahedra" (/-drə/) or "icosahedrons".
      </p>
    ),
    Example: lazy(() => import("./examples/IcosahedronExample"))
  },

  Sphere: {
    Description: () => <>Look, it's just like any other ball, okay?</>,
    Example: () => (
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial metalness={0.3} roughness={0.5} color="#ff595e" />
      </mesh>
    )
  }
}

function App() {
  return <Application examples={examples} />
}

export default App
