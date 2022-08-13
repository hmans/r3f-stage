import React from "react"
import { Example } from "../Example"

export const Description = ({ example }: { example: Example }) => (
  <div className="panel" style={{ bottom: 20, left: 20 }}>
    {example.Description && <example.Description />}
  </div>
)
