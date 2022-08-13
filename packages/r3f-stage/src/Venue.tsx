import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { Perf } from "r3f-perf"
import React, { FC, ReactNode, Suspense, useRef } from "react"
import { Mesh } from "three"
import { Link, useRoute } from "wouter"
import { Layers } from "./Layers"
import { RenderComposer } from "./render-composer"
import Stage from "./Stage"

function Navigation({ examples }: { examples: Examples }) {
  return (
    <div style={{ position: "fixed", top: 10, left: 10, zIndex: 1 }}>
      {Object.entries(examples).map(([name, _]) => (
        <Link to={`/examples/${name}`} key={name}>
          {name}
        </Link>
      ))}
    </div>
  )
}

function Example({ examples }: { examples: Examples }) {
  const [match, params] = useRoute("/examples/:name")
  const name = match ? params.name : "HelloWorld"
  const Component = examples[name as keyof typeof examples]

  return <Component />
}

export type Examples = Record<string, any>

const Spinner = () => {
  const mesh = useRef<Mesh>(null!)

  useFrame(({ clock }, dt) => {
    const a = Math.pow((Math.sin(clock.elapsedTime * 7) + 2) * 0.5, 3)
    mesh.current.rotation.y += (1 + a) * dt
  })

  return (
    <mesh ref={mesh} scale={0.2}>
      <dodecahedronGeometry />
      <meshStandardMaterial color="#666" />
    </mesh>
  )
}

export const Venue: FC<{
  children?: ReactNode
  examples?: Examples
  performance?: boolean
}> = ({ children, examples, performance = true }) => {
  const opts = useControls("Rendering", {
    dpr: { value: 1, min: 0.125, max: 2 },
    postProcessing: true
  })

  return (
    <>
      {examples && <Navigation examples={examples} />}
      <RenderComposer
        dpr={opts.dpr}
        bloom={opts.postProcessing}
        vignette={opts.postProcessing}
        antiAliasing={opts.postProcessing}
      >
        <Suspense>
          <Environment preset="city" />
          <fogExp2 args={["#000", 0.03]} attach="fog" />
          <ambientLight intensity={0.2} />
          <directionalLight
            color="white"
            intensity={0.7}
            position={[10, 10, 10]}
            castShadow
          />
          <directionalLight
            color="white"
            intensity={0.2}
            position={[-10, 5, 10]}
            castShadow
          />
          <PerspectiveCamera
            position={[0, 0, 5]}
            layers-mask={Layers.Default + Layers.TransparentFX}
            makeDefault
          />

          <OrbitControls
            makeDefault
            maxDistance={10}
            minDistance={3}
            minPolarAngle={Math.PI * 0.25}
            maxPolarAngle={Math.PI * 0.75}
          />

          {performance && <Perf position="bottom-right" />}

          <Stage />

          <Suspense fallback={<Spinner />}>
            {examples && <Example examples={examples} />}
          </Suspense>

          {children}
        </Suspense>
      </RenderComposer>
    </>
  )
}
