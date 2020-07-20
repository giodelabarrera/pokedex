import React, {useContext} from 'react'

const DomainContext = React.createContext()

function DomainProvider({domain, ...restProps}) {
  return <DomainContext.Provider value={domain} {...restProps} />
}

function useDomain() {
  const context = useContext(DomainContext)
  if (context === undefined) {
    throw new Error('useDomain must be used within a DomainProvider')
  }
  return context
}

export {DomainProvider, useDomain}
