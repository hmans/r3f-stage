import React, { GroupProps } from "@react-three/fiber"
import { ColorRepresentation } from "three"

export type FlatStageProps = GroupProps & { color?: ColorRepresentation }

export const FlatStage = ({ children, color = "#555", ...props }: FlatStageProps) => (
  <group {...props}>
    <mesh rotation-x={-Math.PI / 2}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={color} />
    </mesh>

    {children}
  </group>
)
