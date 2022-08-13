import { Application, FlatStage } from "r3f-stage"
import { Examples } from "r3f-stage/src/Example"
import { lazy } from "react"

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
      <FlatStage position-y={-1.5}>
        <mesh position-y={1.5} castShadow>
          <dodecahedronGeometry />
          <meshStandardMaterial />
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
        <meshStandardMaterial />
      </mesh>
    )
  }
}

function App() {
  return <Application examples={examples} />
}

export default App
