import React, { lazy, Suspense } from 'react';

const LazyStartMenu = lazy(() => import('./StartMenu'));

const StartMenu = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyStartMenu {...props} />
  </Suspense>
);

export default StartMenu;
