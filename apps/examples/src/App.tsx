import { Application, Description, Example, FlatStage } from "r3f-stage"
import "r3f-stage/styles.css"
import { lazy } from "react"

const IcosahedronExample = lazy(() => import("./examples/IcosahedronExample"))

function App() {
  return (
    <Application>
      <FlatStage />

      <Example path="dodecahedron" title="Dodecahedron" makeDefault>
        <Description>
          <p>
            In geometry, a <strong>dodecahedron</strong> or duodecahedron is any
            polyhedron with twelve flat faces. The most familiar dodecahedron is the
            regular dodecahedron with regular pentagons as faces, which is a Platonic
            solid. There are also three regular star dodecahedra, which are constructed as
            stellations of the convex form. All of these have icosahedral symmetry, order
            120.
          </p>
        </Description>

        <mesh castShadow>
          <dodecahedronGeometry />
          <meshStandardMaterial metalness={0.3} roughness={0.5} color="#e9c46a" />
        </mesh>
      </Example>

      <Example path="icosahedron" title="Icosahedron">
        <Description>
          <p>
            In geometry, an <strong>icosahedron</strong> is a polyhedron with 20 faces.
            The name comes from Ancient Greek εἴκοσι (eíkosi) 'twenty' and from Ancient
            Greek ἕδρα (hédra) 'seat'. The plural can be either "icosahedra" (/-drə/) or
            "icosahedrons".
          </p>
        </Description>
        <IcosahedronExample />
      </Example>

      <Example path="sphere" title="Sphere">
        <Description>Look, it's just like any other ball, okay?</Description>

        <mesh castShadow>
          <sphereGeometry />
          <meshStandardMaterial metalness={0.3} roughness={0.5} color="#ff595e" />
        </mesh>
      </Example>
    </Application>
  )
}

export default App
