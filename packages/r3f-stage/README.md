# r3f-stage

A pre-configured react-three-fiber environment for demos and examples.

## Features

- A fully pre-configured react-three-fiber environment for demos and examples, with camera, lights, environment, orbit controls and postprocessing already set up for you.
- If you have multiple examples, it'll provide a navigation UI and a loading indicator while examples are being lazy-loaded.
- Comes with [Leva](https://github.com/pmndrs/leva) for easy user controls.

## Usage

### Installing the library

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

### Hello World

Now you can import `Application` from `r3f-stage` and use it to quickly whip up a fully-working Three.js app:

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

### Enabling Performance Monitoring

`<Application>` optionally provides performance monitoring powered by [ref-perf](https://github.com/utsuboco/r3f-perf). You can enable it by passing the `performance` prop:

```tsx
<Application performance>
```

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
