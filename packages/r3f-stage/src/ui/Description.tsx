import React from "react"
import { Example } from "../Example"

export const Description = ({ example }: { example: Example }) => (
  <div style={{ position: "fixed", bottom: 20, left: 20, zIndex: 1 }}>
    {example.Description && <example.Description />}
  </div>
)
