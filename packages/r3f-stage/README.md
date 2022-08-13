# R3F Stage

A pre-configured react-three-fiber environment for demos and examples.

## Features

- A fully pre-configured react-three-fiber environment for demos and examples, with camera, lights, environment, orbit controls, postprocessing and performance monitoring already set up for you.
- If you have multiple examples, it'll provide a navigation UI and a loading indicator while examples are being lazy-loaded.
- Allows the user to control the current resolution of the renderer, and toggle post-processing effects on and off.
- Comes with [Leva](https://github.com/pmndrs/leva) for easy user controls.
- No tracking, analytics, or other externally loaded dependencies.

## Usage

### Installing the Library

> **Note:** `r3f-stage` makes use of Three.js and React Three Fiber, but only lists them as peer dependencies, so you'll need to install them separately. (If we don't do it this way, they might end up being installed twice, running as two different versions of the same library, and that would be bad.)

In your freshly created Vite/CRA React app:

```sh
# Mandatory
yarn install three @react-three/fiber r3f-stage

# Types
yarn install -D @types/three

# Useful R3F utility components
yarn install @react-three/drei
```

Please be aware that `r3f-stage` will import its own global CSS. For best results, please make sure that your application doesn't define its own global CSS.

### Hello World

Now you can import `Application` from `r3f-stage` and use it to quickly whip up a fully-working Three.js app. Just place the usual react-three-fiber things into the component's children:

```tsx
import { Application } from "r3f-stage"

function App() {
  return (
    <Application>
      <mesh>
        <dodecahedronGeometry />
        <meshStandardMaterial />
      </mesh>
    </Application>
  )
}
```

### Multiple Examples

If you want to present multiple examples within the same application, you can pass an `examples` prop to `<Application>`. This prop is expected to be an object containing example definitions.

Each property's key will be the URL slug to the example.

The example's optional `title` property will be used as the title of the example in the navigation UI. (If omitted, the key will be used as the title.)

You can provide an optional `Description` React component that will be rendered as the example's description when it's being viewed by the user.

But most importantly, you must provide an `Example` React component. This component should render the actual example.

```tsx
const Dodecahedron = {
  Description: () => <p>This is a dodecahedron.</p>,
  Example: () => (
    <mesh>
      <dodecahedronGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

function App() {
  return <Application examples={{ Dodecahedron }} />
}
```

### Lazy-loading Examples

You can lazy-load individual examples using the `React.lazy` helper. The application is already configured to show a loading spinner while examples are being lazy-loaded.

```tsx
const Dodecahedron = {
  Example: React.lazy(() => import("./examples/DodecahedronExample"))
}
```

Please note that the modules you lazyload this way **must provide the component as their default export**.

### Stages

R3F Stage exports a collection of stage components you can embed your examples into:

```tsx
const Dodecahedron = {
  Example: () => (
    <FlatStage>
      <mesh>
        <dodecahedronGeometry />
        <meshStandardMaterial />
      </mesh>
    </FlatStage>
  )
}
```

_TODO_

## LICENSE

```
Copyright (c) 2022 Hendrik Mans

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
