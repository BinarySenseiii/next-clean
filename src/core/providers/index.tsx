'use client';

import type React from 'react';
import { type ReactNode } from 'react';

import ReactQueryProvider from './react-query';
import SoonerToaster from './sooner-toaster';

interface AppProvidersProps {
    children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <ReactQueryProvider>
            {children}
            <SoonerToaster />
        </ReactQueryProvider>
    );
};
export default AppProviders;
