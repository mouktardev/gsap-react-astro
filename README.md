# Gsap React Astro

This Project is inspired by this artical form [Gsap](https://greensock.com/react), which outlined a method for integrating their animation framework into React. I set out to create a React component that could take animation states as parameters, making it effortless to animate any children within the component. With this approach, the animation process becomes simplified and more efficient. 


## animation folder


```
├── animation/
│   └── store.ts
│   └── Animate.tsx

```

In store you manage animation state and create your animation types, here am using [Nano Stores](https://github.com/nanostores/nanostores)

```typescript
import { atom } from 'nanostores';

export type animationStateValues = undefined | 'FadeIn' | 'FadeOut'

export const animationState = atom<animationStateValues>()

export function animationStateUpdate(animation: animationStateValues) {
    animationState.set(animation);
}
```


Here an example using `Animate.tsx` component:

```typescript
import { animationState, animationStateValues } from "@animation/store";
import { useStore } from '@nanostores/react';

const animationTypes: animationStateValues="FadeIn"

export default function Example() {
    const animationValueHolder = useStore(animationState)
    <Animate anim={animationValueHolder}>
        <Card />
    </Animate>
}
``` 
you can use `animationStateUpdate` from `store.ts` to update the animation

```typescript
import { animationState, animationStateValues } from "@animation/store";
import { useStore } from '@nanostores/react';

const animationTypes: animationStateValues[] = ["FadeIn", "FadeOut"]

export default function Example() {
    const animationValueHolder = useStore(animationState)
    <button type="button" onClick={animationStateUpdate(animationTypes[1])}/>
    <Animate anim={animationValueHolder}>
        <Card />
    </Animate>
}
``` 

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run format`       | prettier format files            |
| `npm run check`        | prettier check formated files            |
