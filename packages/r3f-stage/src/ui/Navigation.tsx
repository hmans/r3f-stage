import React from "react"
import { Link } from "wouter"
import { Examples } from "../Example"

export function Navigation({ examples }: { examples: Examples }) {
  return (
    <div style={{ position: "fixed", top: 10, left: 10, zIndex: 1 }}>
      {Object.entries(examples).map(([slug, example]) => (
        <Link to={`/examples/${slug}`} key={slug}>
          {example.title ?? slug}
        </Link>
      ))}
    </div>
  )
}
