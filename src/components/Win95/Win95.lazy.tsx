import React, { lazy, Suspense } from 'react';

const LazyWin95 = lazy(() => import('./Win95'));

const Win95 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWin95 {...props} />
  </Suspense>
);

export default Win95;
