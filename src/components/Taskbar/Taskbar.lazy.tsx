import React, { lazy, Suspense } from 'react';

const LazyTaskbar = lazy(() => import('./Taskbar'));

const Taskbar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTaskbar {...props} />
  </Suspense>
);

export default Taskbar;
