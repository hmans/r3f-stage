import React from "react"
import { useRoute } from "wouter"

export type Examples = Record<string, any>

export function Example({ examples }: { examples: Examples }) {
  const [match, params] = useRoute("/examples/:name")
  const name = match ? params.name : Object.entries(examples)[0][0]
  const Component = examples[name as keyof typeof examples]

  return <Component />
}
