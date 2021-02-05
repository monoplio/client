/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useCreateGameMutation } from '../../data'
import { Redirect } from 'react-router-dom'

const JoinPage = props => {
  const [formStatus, setFormStatus] = useState('initial')
  const [username, setUsername] = useState()
  const [redirect, setRedirect] = useState(null)

  const redirectLocation = data => {
    props.setUser(data.createGame.owner)
    console.log(data)
    setRedirect(data.createGame.id)
  }

  const [createGame] = useCreateGameMutation({
    onCompleted: redirectLocation
  })

  const handleCreate = () => {
    if ((username !== '' && username.length > 0)) {
      createGame({
        variables: {
          username: username
        }
      })
    } else {
      if (username === '') {
        alert('Please enter a title.')
      }
    }
  }

  const handleInputChange = function (e) {
    switch (e.target.name) {
      case 'username':
        console.log(username)
        setUsername(e.target.value)
        break
    }
  }

  return (
      <div className="join-page">
        { redirect && <Redirect to={'/game/' + redirect}/> }
        <div className="menu">
          { formStatus === 'initial' &&
            <>
              <div className="menu-title">Monopl.io</div>
              <div className="menu-subtitle">~100 players online</div>
              <input className="menu-button" type="button" value="Find Game"/>
              <input className="menu-button" type="button" value="Create Lobby" onClick={() => setFormStatus('creating')}/>
            </>
          }

          { formStatus === 'creating' &&
            <>
              <input className="menu-input" type="text" placeholder="Nickname (optional)" name="username" value={username} onChange={handleInputChange}/>
              <input className="menu-button" type="button" value="Go" onClick={handleCreate}/>
              <input className="menu-button" type="button" value="Back" onClick={() => setFormStatus('initial')}/>
            </>
          }
        </div>
      </div>
  )
}

export { JoinPage }
