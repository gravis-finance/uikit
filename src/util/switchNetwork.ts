const switchNetwork = (value: string, withReload: boolean, history: { push: any, location: any }): void => {
  const searchParams = new URLSearchParams(history.location.search)
  searchParams.set('network', value)
  history.push({
    pathname: history.location.pathname,
    search: searchParams.toString(),
  })
  if (withReload) window.location.reload()
}

export default switchNetwork
