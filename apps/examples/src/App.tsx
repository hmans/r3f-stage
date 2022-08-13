import { Application } from "r3f-stage"
import { Examples } from "r3f-stage/src/Example"

const examples: Examples = {
  Dodecahedron: {
    Description: () => (
      <>
        In geometry, a <strong>dodecahedron</strong> or duodecahedron is any polyhedron
        with twelve flat faces. The most familiar dodecahedron is the regular dodecahedron
        with regular pentagons as faces, which is a Platonic solid. There are also three
        regular star dodecahedra, which are constructed as stellations of the convex form.
        All of these have icosahedral symmetry, order 120.
      </>
    ),
    Example: () => (
      <mesh>
        <dodecahedronGeometry />
        <meshStandardMaterial />
      </mesh>
    )
  },

  Icosahedron: {
    Description: () => (
      <>
        In geometry, an <strong>icosahedron</strong> is a polyhedron with 20 faces. The
        name comes from Ancient Greek εἴκοσι (eíkosi) 'twenty' and from Ancient Greek ἕδρα
        (hédra) 'seat'. The plural can be either "icosahedra" (/-drə/) or "icosahedrons".
      </>
    ),
    Example: () => (
      <mesh>
        <icosahedronGeometry />
        <meshStandardMaterial />
      </mesh>
    )
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
