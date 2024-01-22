'use client'

// for react-query and wagmi sh
// this component is client side rendered
// wagmi version2 

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import { WagmiProvider } from 'wagmi'
import { config } from '../scripts/metamaskConfig'


export default function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
