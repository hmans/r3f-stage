import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Leva, useControls } from "leva"
import { Perf } from "r3f-perf"
import React, { FC, ReactNode, Suspense } from "react"
import "../styles.css"
import { Example, Examples } from "./Example"
import { Layers } from "./Layers"
import { Navigation } from "./ui/Navigation"
import { RenderComposer } from "./render-composer"
import { Spinner } from "./Spinner"
import { UI } from "./ui/UI"

export const Application: FC<{
  children?: ReactNode
  examples?: Examples
  performance?: boolean
  effects?: boolean
  dpr?: number
}> = ({ children, examples, effects = true, performance = false, dpr = 1 }) => {
  /* Let the user control some aspects of the application. */
  const opts = useControls("Rendering", {
    dpr: { value: dpr, min: 0.125, max: 2 },
    effects,
    performance
  })

  return (
    <>
      <Leva />
      <UI examples={examples} />

      {/* Render the actual scene */}
      <RenderComposer
        dpr={opts.dpr}
        bloom={opts.effects}
        vignette={opts.effects}
        antiAliasing={opts.effects}
      >
        {opts.performance && <Perf position="bottom-right" />}

        <color args={["#333"]} attach="background" />
        <Suspense>
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

          <Suspense fallback={<Spinner />}>
            {examples && <Example examples={examples} />}
          </Suspense>

          {children}
        </Suspense>
      </RenderComposer>
    </>
  )
}
