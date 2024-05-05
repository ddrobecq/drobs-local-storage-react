This package proposes a react hook to read and set value from/to local storage

--- Install ---
npm install drobs-local-storage-react

--- Use ---
Import package in your react app
import useLocalStorage from 'drobs-local-storage-react';

add a state in your component with useLocalStorage
const [name, setName] = useLocalStorage('key', 'John Doe');

--- example ---
'use client';

import Image from "next/image";
import styles from "./page.module.css";
import useLocalStorage from 'drobs-local-storage-react';

export default function Home() {
  const [name, setName] = useLocalStorage('key', 'John Doe');
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
