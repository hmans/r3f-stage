import React, { ReactNode } from "react"
import { navigationPortal } from "./UI"

export type HeadingProps = {
  children: ReactNode
}

export const Heading = ({ children }: HeadingProps) => (
  <navigationPortal.In>
    <h1>{children}</h1>
  </navigationPortal.In>
)
