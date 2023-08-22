import { useContext, createContext } from 'react'
import { Domain } from '../domain';

const DomainContext = createContext<Domain>(undefined!)

type DomainProviderProps = {
  domain: Domain,
  children?: React.ReactNode;
}

function DomainProvider({ domain, ...restProps }: DomainProviderProps) {
  return <DomainContext.Provider value={domain} {...restProps} />
}

function useDomain() {
  const context = useContext(DomainContext)
  if (context === undefined) {
    throw new Error('useDomain must be used within a DomainProvider')
  }
  return context
}

export { DomainProvider, useDomain }
