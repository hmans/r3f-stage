import React from "react"
import { Link } from "wouter"
import { Examples } from "../Example"

export function Navigation({ examples }: { examples: Examples }) {
  return (
    <div className="panel" style={{ top: 0, left: 0 }}>
      {Object.entries(examples).map(([slug, example]) => (
        <Link to={`/examples/${slug}`} key={slug}>
          {example.title ?? slug}
        </Link>
      ))}
    </div>
  )
}
