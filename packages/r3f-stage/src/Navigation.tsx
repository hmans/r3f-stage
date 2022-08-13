import React from "react"
import { Link } from "wouter"
import { Examples } from "./Application"

export function Navigation({ examples }: { examples: Examples }) {
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
