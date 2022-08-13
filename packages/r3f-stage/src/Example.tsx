import React from "react"
import { useRoute } from "wouter"

export type Example = {
  title?: string
  description?: string
  render: React.FunctionComponent
}

export type Examples = Record<string, Example>

export function Example({ examples }: { examples: Examples }) {
  const [match, params] = useRoute("/examples/:slug")
  const slug = match ? params.slug : Object.entries(examples)[0][0]

  const example = examples[slug]
  const Component = example.render

  return <Component />
}
