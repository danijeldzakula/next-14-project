'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Fragment, ReactNode } from 'react';

type ProviedrsProps = {
    children?: ReactNode
}

export default function Providers({ children }: ProviedrsProps) {
  return (
    <Fragment>
      <ProgressBar height="2px" color='white' options={{ showSpinner: false }} shallowRouting />
      {children}
    </Fragment>
  );
};