---
title: "Using Recoil to manage state"
metaTitle: "Using Recoil to manage state"
metaDesc: "Recoil simplifies  a lot of state management in react. Here's how to design an atom"
socialImage: images/22-09-2021.jpg
date: "2022-05-31"
tags:
  - React
---

### Desired Global State

```json
{
    "name": "Rocket",
    "emoji": "🚀"
  },
  {
    "name": "House",
    "emoji": "🏠"
  },
  { "name": "Tree", "emoji": "🌳" },
```

### types

```typescript
declare global {
  interface ObjectProps {
    name: string;
    emoji: string;
  }
}
```

# Recoil

Add recoil root to the `app.tsx` file:

```typescript
//_app.tsx
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
```

Create a folder at the root level called `atoms`. Each individual piece of state will be held in this atom

```typescript
// atoms/ObjectAtom.ts
import { atom } from "recoil";

const ObjectAtomState = atom({
  key: "ObjectAtom",
  default: [{}] as Array<ObjectProps>,
});

export default ObjectAtomState;
```
