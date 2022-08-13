import React, { FC } from "react"
import { useRoute } from "wouter"

export type Example = {
  name: string
  description?: string
  render: React.FunctionComponent
}

export type Examples = Record<string, Example>

export function Example({ examples }: { examples: Examples }) {
  const [match, params] = useRoute("/examples/:name")
  const name = match ? params.name : Object.entries(examples)[0][0]

  const example = examples[name as keyof typeof examples]
  const Component = example.render

  return <Component />
}
