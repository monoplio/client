/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useCreateGameMutation } from '../../data'
import { Redirect } from 'react-router-dom'
import { FunctionButton } from '../../components'

const JoinPage = props => {
  const [formStatus, setFormStatus] = useState('initial')
  const [username, setUsername] = useState()
  const [redirect, setRedirect] = useState(null)
  const [loading, setLoading] = useState(false)

  const redirectLocation = data => {
    setLoading(false)
    props.setUser(data.createGame.owner)
    setRedirect(data.createGame.id)
  }

  const [createGame] = useCreateGameMutation({
    onCompleted: redirectLocation
  })

  const handleCreate = () => {
    if ((username !== '' && username.length > 0)) {
      setLoading(true)
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
              <div className="menu-title"><img src="https://i.imgur.com/1XwqRQP.png" width="300px"></img></div>
              {/* <div className="menu-subtitle">~100 players online</div>
              <input className="menu-button" type="button" value="Find Game"/> */}
              <input className="menu-button" type="button" value="Create Lobby" onClick={() => setFormStatus('creating')}/>
              <a className="menu-button" href="https://github.com/monoplio">Github</a>
              <p style={ { fontSize: '10px', marginTop: '3em' } }>© Justin Chang & Matthew MacRae-Bovell</p>
            </>
          }

          { formStatus === 'creating' &&
            <>
              <input className="menu-input" type="text" placeholder="Nickname (optional)" name="username" value={username} onChange={handleInputChange}/>
              {/* <button className="menu-button" onClick={handleCreate}>{!loading ? <span>Go</span> : <ClipLoader color={'white'} size={15}/>}</button> */}
              <FunctionButton func={handleCreate} loading={loading} value={'Go'}/>
              <input className="menu-button" type="button" value="Back" onClick={() => setFormStatus('initial')}/>
            </>
          }
        </div>
      </div>
  )
}

export { JoinPage }
