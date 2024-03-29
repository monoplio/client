import React, { useState } from 'react'
import { JoinPage, GamePage } from './pages'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client'
import { ActionCableLink } from 'graphql-ruby-client'
import { getMainDefinition } from '@apollo/client/utilities'
import ActionCable from 'actioncable'

import './App.css'

const httpLink = new HttpLink({
  uri: 'https://api.justinchang.dev:3000/graphql' // https://floating-reef-26790.herokuapp.com/graphql https://floating-reef-26790.herokuapp.com/graphql
})

const cable = ActionCable.createConsumer('wss://api.justinchang.dev:3000/cable') // wss://floating-reef-26790.herokuapp.com:/cable

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  new ActionCableLink({ cable }),
  httpLink
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
})

function App () {
  const [user, setUser] = useState(null)

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/game/:id" >
            <GamePage user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/">
            <JoinPage setUser={setUser}/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
