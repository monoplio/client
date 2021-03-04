/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useSubscription } from '@apollo/client'
import { useEndBidMutation, useIncreaseBidMutation, useCreateAuctionMutation, useBuyHouseMutation, useBuyPropertyMutation, useEndTurnMutation, useJoinGameMutation, useSellHouseMutation, useStartGameMutation, useRejoinGameMutation, useRollDiceMutation, useMortgagePropertyMutation, useUnmortgagePropertyMutation, GAME, TEST, TILE } from '../../data'
import { Board, PropertyDetailed, BuyAuctionModal, AuctionModal } from '../../components'

const GamePage = props => {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [username, setUsername] = useState()
  const [selectedTile, setSelectedTile] = useState(null)
  const [bidAmount, setBidAmount] = useState(0)

  const handleReceivedData = ({ subscriptionData: { data } }) => {
    setGame(data.gameEvents.data)
  }

  const { loading, data } = useQuery(GAME, {
    variables: {
      id: id
    }
  })

  const { data: subscriptionData } = useSubscription(TEST, // data: testData, loading: testLoading
    {
      variables: {
        gameId: id
      },
      onSubscriptionData: handleReceivedData
    }
  )

  const setUser = data => {
    props.setUser(data.joinGame)
  }

  const setUserAfterRejoin = data => {
    props.setUser(data.rejoinGame)
  }

  const clearProperty = data => {
    setSelectedTile(null)
  }

  const resetSelectedTile = data => {
    setSelectedTile(selectedTile)
  }

  const { loading: tileQueryLoading, data: tileQueryData } = useQuery(TILE, {
    skip: selectedTile === null,
    variables: {
      id: selectedTile
    }
  })

  const [increaseBid] = useIncreaseBidMutation({
    variables: {
      playerId: props.user ? props.user.id : -1,
      auctionId: game && game.auctions && game.auctions[0] ? game.auctions[0].id : -1,
      bidAmount: parseInt(bidAmount)
    }
  })

  const [endBid] = useEndBidMutation({
    variables: {
      playerId: props.user ? props.user.id : -1,
      auctionId: game && game.auctions && game.auctions[0] ? game.auctions[0].id : -1
    }
  })

  const [auctionProperty] = useCreateAuctionMutation({
    variables: {
      propertyId: (game && game.currentPlayer) ? game.currentPlayer.tile.boardTile.id : -1
    }
  })

  const [buyProperty] = useBuyPropertyMutation({
    variables: {
      playerId: props.user ? props.user.id : -1,
      propertyId: (game && game.currentPlayer) ? game.currentPlayer.tile.boardTile.id : -1
    }
  })

  const [buyHouse] = useBuyHouseMutation({
    onCompleted: resetSelectedTile,
    variables: {
      playerId: props.user ? props.user.id : -1,
      propertyId: (!tileQueryLoading && tileQueryData && tileQueryData.tile) ? tileQueryData.tile.boardTile.id : -1
    }
  })

  const [sellHouse] = useSellHouseMutation({
    onCompleted: resetSelectedTile,
    variables: {
      playerId: props.user ? props.user.id : -1,
      propertyId: (!tileQueryLoading && tileQueryData && tileQueryData.tile) ? tileQueryData.tile.boardTile.id : -1
    }
  })

  const [joinGame] = useJoinGameMutation({
    onCompleted: setUser
  })

  const [rejoinGame] = useRejoinGameMutation({
    onCompleted: setUserAfterRejoin
  })

  const [startGame] = useStartGameMutation({
    variables: {
      gameId: id
    }
  })

  const [rollDice] = useRollDiceMutation({
    variables: {
      playerId: props.user ? props.user.id : -1
    }
  })

  const [endTurn] = useEndTurnMutation({
    onCompleted: clearProperty,
    variables: {
      playerId: props.user ? props.user.id : -1
    }
  })

  const [mortgageProperty] = useMortgagePropertyMutation({
    variables: {
      propertyId: tileQueryData ? parseInt(tileQueryData.tile.boardTile.id) : -1
    }
  })

  const [unmortgageProperty] = useUnmortgagePropertyMutation({
    variables: {
      propertyId: tileQueryData ? parseInt(tileQueryData.tile.boardTile.id) : -1
    }
  })

  const handleJoin = () => {
    if (username && (username !== '' && username.length > 0)) {
      joinGame({
        variables: {
          username: username,
          gameId: id
        }
      })
    } else {
      alert('Please enter a username.')
    }
  }

  const handleInputChange = function (e) {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value)
        break
    }
  }

  useEffect(() => {
    if (!loading) {
      if (game === null) {
        setGame(data.game)
      }
    }
  }, [data])

  return (
      <div className="game-page">
        { (!loading && game && game.state === 'pending') &&
          <div className="menu">
              <div className="menu-title">Game {id}</div>
              <div className="menu-subtitle">~ Awaiting players...</div>
              <div className="menu-players">
                { game.players.map(player => (
                  <>
                    { props.user && (player.id === props.user.id)
                      ? <div key={player.id}> * {player.username}</div>
                      : <div key={player.id}> {player.username}</div>
                    }
                  </>
                ))
                }
              </div>
              { !props.user &&
                <>
                  <input className="menu-input" type="text" placeholder="Nickname (optional)" name="username" value={username} onChange={handleInputChange}/>
                  <input className="menu-button" type="button" value="Join" onClick={handleJoin}/>
                </>
              }
              { props.user && (game.owner.id === props.user.id) && (game.players.length >= 2) &&
                  <input className="menu-button" type="button" value="Start Game" onClick={startGame}/>
              }
            </div>
        }
        { (!loading && game && game.state !== 'pending') &&
          <div className="game-display">
            <div className="options">
              { game.players.map(player => (
                <>
                  <div className="player-card" style={{ backgroundColor: player.color }} onClick={() => rejoinGame({ variables: { username: player.username, gameId: game.id } })}>
                    <div>{player.id === game.currentPlayer.id ? '->' : ''} {player.username} { props.user && (player.id === props.user.id) ? '(you)' : ''}</div>
                    <div>${player.balance} </div>
                  </div>
                </>
              ))
              }
            </div>
            <Board game={game} message={ subscriptionData ? subscriptionData.gameEvents.message : null} setSelectedTile={setSelectedTile}/>
            {
              (game.state === 'auction')
                ? <AuctionModal game={game} user={props.user} bids={game.auctions[0].bids} bal={props.user.balance} highest={Math.max.apply(Math, game.auctions[0].bids.map((o) => { return o.amount }))} setBid={setBidAmount} increase={increaseBid} end={endBid}/>
                : null
            }
            <div className="options">
              {(selectedTile !== null && !tileQueryLoading) &&
              <>
                <PropertyDetailed tile={tileQueryData.tile} />
              </>
              }
              { props.user && game && game.currentPlayer.id === props.user.id &&
                <>
                { (selectedTile !== null && !tileQueryLoading && tileQueryData && tileQueryData.tile.boardTileType === 'Property' && tileQueryData.tile.boardTile.player !== null && game.currentPlayer.id === tileQueryData.tile.boardTile.player.id) &&
                  <>
                    {
                      (tileQueryData.tile.boardTile.canBuyHouse === true && tileQueryData.tile.boardTile.stage < 5 && game.currentPlayer.balance >= tileQueryData.tile.boardTile.housePrice) &&
                        <input className="menu-button" type="button" value="Buy House" onClick={buyHouse}/>
                    }
                    {
                      (tileQueryData.tile.boardTile.canSellHouse === true && tileQueryData.tile.boardTile.stage > 0) &&
                        <input className="menu-button" type="button" value="Sell House" onClick={sellHouse}/>
                    }
                    {
                      tileQueryData.tile.boardTile.state !== 'mortgaged'
                        ? <input className="menu-button" type="button" value="Mortgage" onClick={mortgageProperty}/>
                        : <input className="menu-button" type="button" value="Un Mortgage" onClick={unmortgageProperty}/>
                    }
                  </>
                }
                { game.currentPlayer.tile.boardTileType === 'Property' && game.currentPlayer.tile.boardTile.player === null &&
                  <BuyAuctionModal buy={buyProperty} auction={auctionProperty}/>
                }
                { game.currentPlayer.canRoll
                  ? <input className="menu-button" type="button" value="Roll" onClick={rollDice}/>
                  : <input className="menu-button" type="button" value="End" onClick={endTurn}/>
                }
                </>
              }
            </div>
          </div>
        }
      </div>
  )
}

export { GamePage }
