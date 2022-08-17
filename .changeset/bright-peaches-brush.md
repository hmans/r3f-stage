---
"r3f-stage": minor
---

**Breaking Change:** Once more, the way examples are declared has been changed. We now use plain old JSX and some React components for this. Example:

```jsx
const IcosahedronExample = React.lazy(() => import("./examples/IcosahedronExample"))

function App() {
  return (
    <Application>
      <Example path="simple" title="Simple" makeDefault>
        <Description>This is a simple example.</Description>

        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="yellow" />
        </mesh>
      </Example>

      <Example path="complex" title="Complex">
        <Description>
          This is a complex example that is being lazy-loaded, yay!
        </Description>

        <IcosahedronExample />
      </Example>
    </Application>
  )
}
```
