# r3f-stage

## 0.3.0-next.2

### Minor Changes

- 70fe69d: I have no idea what I'm doing.
- 9c4fa15: Playing with peerDeps is fun!

## 0.3.0-next.1

### Minor Changes

- b935faf: **Breaking Change:** move the most important dependencies (three, etc.) back into peer dependencies.

## 0.3.0-next.0

### Minor Changes

- b7fb75e: **Breaking Change:** Once more, the way examples are declared has been changed. We now use plain old JSX and some React components for this. Example:

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

## 0.2.6

### Patch Changes

- fca82cd: Move peer dependencies into dependencies to simplify usage.

## 0.2.5

### Patch Changes

- 0a357ed: Increase maximum distance of OrbitControls to 30.

## 0.2.4

### Patch Changes

- 9649aeb: Fix redirect on reload.

## 0.2.3

### Patch Changes

- b5a3fd3: Fixed Leva sizing issues.

## 0.2.2

### Patch Changes

- 867045d: Export `Layers` and `useRenderPipeline`.

## 0.2.1

### Patch Changes

- d54b840: Fixed a faulty import in `FlatStage`.

## 0.2.0

### Minor Changes

- 19fc8b3: Complete rework of the library, with the new code extracted from the shader-composer project.
