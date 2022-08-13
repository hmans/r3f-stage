import React, { createContext, FC, useContext } from "react"
import { useRoute } from "wouter"
import "../styles.css"
import { Example, Examples } from "./Example"
import { ThreeApplication, ThreeApplicationProps } from "./ThreeApplication"
import { UI } from "./ui/UI"

export const ApplicationContext = createContext<{
  examples?: Examples
  currentExample?: Example
}>({})

export const useApplicationContext = () => useContext(ApplicationContext)

// export const useCurrentExample = () => {
//   const { examples } = useApplicationContext()
//   const [match, params] = useRoute("/examples/:slug");
//   if (!match) return null

// }

export type ApplicationProps = {
  examples?: Examples
} & ThreeApplicationProps

export const Application: FC<ApplicationProps> = ({ examples, ...props }) => {
  const [match, params] = useRoute("/examples/:slug")
  const currentExample = match ? examples?.[params.slug] : undefined

  return (
    <ApplicationContext.Provider value={{ examples, currentExample }}>
      <UI />
      <ThreeApplication {...props} />
    </ApplicationContext.Provider>
  )
}
