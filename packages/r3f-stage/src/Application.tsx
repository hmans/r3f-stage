import React, { createContext, FC, useContext } from "react"
import { Redirect, useRoute } from "wouter"
import { Example, Examples } from "./Example"
import { ThreeApplication, ThreeApplicationProps } from "./ThreeApplication"
import { UI } from "./ui/UI"

export const ApplicationContext = createContext<{
  examples?: Examples
  currentExample?: Example
}>({})

export const useApplicationContext = () => useContext(ApplicationContext)

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
      <RedirectToDefaultExample />
    </ApplicationContext.Provider>
  )
}

const RedirectToDefaultExample = () => {
  const { examples, currentExample } = useApplicationContext()

  return currentExample ? null : (
    <Redirect to={examples ? `/examples/${Object.entries(examples)[0][0]}` : "/"} />
  )
}
