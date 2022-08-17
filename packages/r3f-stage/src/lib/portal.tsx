import React, { ReactNode, useLayoutEffect } from "react"
import { makeStore, useStore } from "statery"

export default function portal() {
  const store = makeStore({
    version: 0 as number,
    children: new Array<ReactNode>()
  })

  /**
   * Render the accumulated children.
   */
  const View = () => {
    const { children } = useStore(store)
    return <>{children}</>
  }

  /**
   * Add children to the portal.
   */
  const Add = ({ children: reactChildren }: { children: ReactNode }) => {
    const { version } = useStore(store)

    useLayoutEffect(() => {
      store.set(({ children, version }) => ({
        version: version + 1,
        children: [...children, reactChildren]
      }))

      return () => {
        store.set(({ children, version }) => ({
          version: version + 1,
          children: children.filter((c) => c !== reactChildren)
        }))
      }
    }, [reactChildren, version])

    return null
  }

  return { View, Add }
}
