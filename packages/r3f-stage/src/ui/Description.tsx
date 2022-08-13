import React from "react"
import { Example } from "../Example"

export const Description = ({ example }: { example: Example }) => (
  <div className="panel" style={{ bottom: 0, left: 0 }}>
    {example.Description && <example.Description />}
  </div>
)
