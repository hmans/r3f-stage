import { OrbitControls, PerspectiveCamera, useContextBridge } from "@react-three/drei"
import { useControls } from "leva"
import { Perf } from "r3f-perf"
import React, { FC, ReactNode, Suspense } from "react"
import { Example } from "./Example"
import { Layers } from "./Layers"
import { RenderComposer } from "./render-composer"
import { Spinner } from "./Spinner"
import { ApplicationContext, useApplicationContext } from "./Application"

export type ThreeApplicationProps = {
  children?: ReactNode
  performance?: boolean
  effects?: boolean
  dpr?: number
}
export const ThreeApplication: FC<ThreeApplicationProps> = ({
  children,
  performance = false,
  effects = true,
  dpr = 1
}) => {
  /* Let the user control some aspects of the application. */
  const opts = useControls("Rendering", {
    dpr: { value: dpr, min: 0.125, max: 2 },
    effects,
    performance
  })

  const ContextBridge = useContextBridge(ApplicationContext)

  const { examples } = useApplicationContext()

  return (
    <RenderComposer
      dpr={opts.dpr}
      bloom={opts.effects}
      vignette={opts.effects}
      antiAliasing={opts.effects}
    >
      <ContextBridge>
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

          <Suspense fallback={<Spinner />}>{examples && <Example />}</Suspense>

          {children}
        </Suspense>
      </ContextBridge>
    </RenderComposer>
  )
}
