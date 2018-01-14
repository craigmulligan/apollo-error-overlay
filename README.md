# apollo-error-overlay

> Make apollo errors pretty and obvious

Apollo client passes network and graphql errors as props to you components, this is great for fine grained control, but when you are developing you often want a global error handler to catch errors quickly.
Works with all apollo-client bindings (react, vue etc)

## 👀 

![demo](./demo.gif)

# Usage
```
npm i apollo-error-overlay --save-dev
```

```javascript
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import errorOverlay from 'apollo-error-overlay'

// setup errorLink
const errorLink = onError((errors) => {
  errorOverlay(errors)
  // do what ever else you want with the errors 
})

// setup httpLink
const httpLink = new HttpLink({
  uri: `http://localhost:80/graphql` 
})

// add links to the client
return new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache()
})
```

## Caveats

* Hot reloads currently only work with webpacks hmr
