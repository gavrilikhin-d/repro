"use client"

import { lazy, Suspense, useState } from "react";

const DynamicComponent = lazy(() => import(/* webpackChunkName: "DynamicComponent", webpackPrefetch: true */ "@/Component"));

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Load Dynamic Component</button>
      {show && <Suspense><DynamicComponent /></Suspense>}
    </div>
  );
}
