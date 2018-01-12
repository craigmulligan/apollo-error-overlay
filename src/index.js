const ID = '__APOLLO_ERROR_OVERLAY__'

export default ({ graphQLErrors, networkError }) => {
  if (typeof window != 'undefined') {
    //eslint-disable-next-line no-undef
    if (module && module.hot) {
      //eslint-disable-next-line no-undef
      module.hot.addStatusHandler(status => {
        // allows us to clear the message on hmr updates
        if (status === 'ready') {
          const el = document.getElementById(ID)
          el && el.remove()
        }
      })
    }

    const div = document.createElement('div')
    div.id = ID
    div.width = '100%'
    div.height = '100%'
    div.style.background = '#F865B0'
    div.style.color = 'white'
    div.style.position = 'fixed'
    div.style.top = 0
    div.style.left = 0
    div.style.width = '100%'
    div.style.height = '100%'
    div.style.padding = '20px'
    div.style.lineHeight = '22px'

    let msg
    if (graphQLErrors) {
      msg = graphQLErrors
        .map(
          ({ message, locations, path }) =>
            `[graphQL error]: message: ${message}, location: ${JSON.stringify(
              locations
            )}, path: ${path}`
        )
        .join('</br>')
    }

    if (networkError) {
      msg = msg + `</br>[Network error]: ${networkError}`
    }

    div.innerHTML = msg
    document.body.appendChild(div)
  }
}
