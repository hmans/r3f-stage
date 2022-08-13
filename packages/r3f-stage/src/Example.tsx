import React from "react"
import { useRoute } from "wouter"

export type Examples = Record<string, any>

export function Example({ examples }: { examples: Examples }) {
  const [match, params] = useRoute("/examples/:name")
  const name = match ? params.name : "HelloWorld"
  const Component = examples[name as keyof typeof examples]

  return <Component />
}
