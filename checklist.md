'use client' import React, {JSXElementConstructor, type ReactNode} from 'react' import
ReactQueryProvider from './react-query' import SoonerToaster from './sooner-toaster'

interface ProviderConfig<P extends Record<string, unknown> = {}> { provider:
JSXElementConstructor<P>; props?: P; nodes?: ReactNode; }

interface ComposeProps { providers: Array<ProviderConfig<any>>; children: React.ReactNode; }

type AppProvidersProps = { children: ReactNode; }

const Compose: React.FC<ComposeProps> = ({ providers = [], children }) => ( <>
{providers.reduceRight((acc, { provider: Provider, props, nodes }) => ( <Provider {...props}>
{nodes} {acc} </Provider> ), children)} </> );

const providersArray: Array<ProviderConfig<any>> = [ { provider: ReactQueryProvider, nodes:
<SoonerToaster />, }, ];

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => { return (
<Compose providers={providersArray}> {children} </Compose> ); };

export default AppProviders;
