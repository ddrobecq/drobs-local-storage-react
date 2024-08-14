# Drobs Local Storage React
This package proposes a react hook to read and set value from/to local storage
# Installation
```bash
npm install @drobs/local-storage-react
```
# Use
Import package in your react app
Import useLocalStorage from 'drobs-local-storage-react';
Add a hook in your component with useLocalStorage (keyName, defaultValue)
const [name, setName] = useLocalStorage('name', 'John Doe');

--- example ---
```js
'use client';

import Image from "next/image";
import styles from "./page.module.css";
import useLocalStorage from 'drobs-local-storage-react';

export default function Home() {
  const [name, setName] = useLocalStorage('name', 'John Doe');
  return (
    <div className={styles.container}>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
    </div>
  );
}
```

# Contribute
## GitHub Repository
<a href="https://github.com/ddrobecq/drobs-local-storage-react" target="_blank">GitHub</a>

## Compile
```bash
npm run build
```

