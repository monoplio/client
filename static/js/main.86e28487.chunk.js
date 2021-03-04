(this.webpackJsonpconstruction=this.webpackJsonpconstruction||[]).push([[0],{213:function(e,n,t){},228:function(e,n){},230:function(e,n){},244:function(e,n){},246:function(e,n){},279:function(e,n){},280:function(e,n){},285:function(e,n){},287:function(e,n){},294:function(e,n){},313:function(e,n){},338:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=338},355:function(e,n,t){},356:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t(7),i=t(203),l=t.n(i),c=(t(213),t(26)),s=t(17),o=t(11);function u(){var e=Object(s.a)(["\n    mutation($playerId: ID!, $propertyId: ID!){\n        buyHouse(playerId: $playerId, propertyId: $propertyId){\n            id\n        }\n    }\n"]);return u=function(){return e},e}var d=Object(o.gql)(u());function b(){var e=Object(s.a)(["\n    mutation($playerId: ID!, $propertyId: ID!){\n        buyProperty(playerId: $playerId, propertyId: $propertyId){\n            id\n        }\n    }\n"]);return b=function(){return e},e}var j=Object(o.gql)(b());function p(){var e=Object(s.a)(["\n  mutation createGame ($username: String!) {\n    createGame(username: $username) {\n        id\n        owner {\n            id\n            username\n            color\n            game {\n                id\n            }\n        }\n    }\n  }\n"]);return p=function(){return e},e}var m=Object(o.gql)(p());function O(){var e=Object(s.a)(["\n  mutation($playerId: ID!){\n    endTurn(playerId: $playerId){\n      id\n    }\n  }\n"]);return O=function(){return e},e}var y=Object(o.gql)(O());function g(){var e=Object(s.a)(["\n  mutation($username: String!, $gameId: ID!){\n    joinGame(username: $username, gameId: $gameId){\n      balance\n      id\n      isPlaying\n      lastRoll1\n      lastRoll2\n      color\n      username\n      x\n      y\n    }\n  }\n"]);return g=function(){return e},e}var v=Object(o.gql)(g());function h(){var e=Object(s.a)(["\n  mutation($propertyId: ID!){\n    mortgageProperty(propertyId: $propertyId){\n      id\n    }\n  }\n"]);return h=function(){return e},e}var x=Object(o.gql)(h());function f(){var e=Object(s.a)(["\n  mutation($username: String!, $gameId: ID!){\n    rejoinGame(username: $username, gameId: $gameId){\n      balance\n      id\n      isPlaying\n      lastRoll1\n      lastRoll2\n      color\n      username\n      x\n      y\n    }\n  }\n"]);return f=function(){return e},e}var T=Object(o.gql)(f());function I(){var e=Object(s.a)(["\n  mutation($playerId: ID!){\n    rollDice(playerId: $playerId){\n      id\n    }\n  }\n"]);return I=function(){return e},e}var N=Object(o.gql)(I());function P(){var e=Object(s.a)(["\n    mutation($playerId: ID!, $propertyId: ID!){\n        sellHouse(playerId: $playerId, propertyId: $propertyId){\n            id\n        }\n    }\n"]);return P=function(){return e},e}var $=Object(o.gql)(P());function k(){var e=Object(s.a)(["\n  mutation($gameId: ID!){\n    startGame(gameId: $gameId){\n      id\n    }\n  }\n"]);return k=function(){return e},e}var C=Object(o.gql)(k());function S(){var e=Object(s.a)(["\n  mutation($propertyId: ID!){\n    unmortgageProperty(propertyId: $propertyId){\n      id\n    }\n  }\n"]);return S=function(){return e},e}var D=Object(o.gql)(S());function w(){var e=Object(s.a)(["   \n    query($id: ID!){\n        game(id: $id){\n            height\n            hotelAvailable\n            houseAvailable\n            id\n            players {\n                id\n                username\n                color\n                balance\n            }\n            owner {\n                id\n                username\n            }\n            currentPlayer{\n                id\n                username\n                canRoll\n                lastRoll1\n                lastRoll2\n                balance\n                tile {\n                    id\n                    boardTile{\n                        ... on ActionTile {\n                            id\n                            name\n                        }\n                        ... on Property {\n                            id\n                            name\n                            price\n                            mortgage\n                            stage\n                            state\n                            housePrice\n                            propertySet{\n                                color\n                            }\n                            player{\n                                id\n                            }\n                        }\n                        ... on Deck {\n                            id\n                            name\n                        }\n                        ... on Utility {\n                            id\n                            name\n                            price\n                        }\n                    }\n                    boardTileType\n                }\n            }\n            state\n            tiles {\n            id\n            boardTile{\n                ... on ActionTile {\n                    id\n                    name\n                }\n                ... on Property {\n                    id\n                    name\n                    price\n                    mortgage\n                    stage\n                    state\n                    housePrice\n                    propertySet{\n                        color\n                    }\n                    player{\n                        color\n                    }\n                }\n                ... on Deck {\n                    id\n                    name\n                }\n                ... on Utility {\n                    id\n                    name\n                    price\n                }\n            }\n            boardTileType\n            currentPlayers{\n                id\n                color\n            }\n            x\n            y\n            }\n            width\n        }\n    }  \n"]);return w=function(){return e},e}var R=Object(o.gql)(w());function q(){var e=Object(s.a)(["   \n    query{\n        games{\n            id\n            height\n            hotelAvailable\n            houseAvailable\n        }\n    }  \n"]);return q=function(){return e},e}Object(o.gql)(q());function F(){var e=Object(s.a)(["   \n    query($id: ID!) {\n        tile(id: $id) {\n            boardTile{\n                ... on ActionTile {\n                    id\n                    name\n                }\n                ... on Property {\n                    id\n                    name\n                    price\n                    mortgage\n                    stage\n                    state\n                    housePrice\n                    canBuyHouse\n                    canSellHouse\n                    propertyRents{\n                        stage\n                        rent\n                    }\n                    propertySet{\n                        color\n                    }\n                    player{\n                        id\n                    }\n                }\n                ... on Deck {\n                    id\n                    name\n                }\n                ... on Utility {\n                    id\n                    name\n                    price\n                }\n            }\n            boardTileType\n        }\n    }\n"]);return F=function(){return e},e}var M=Object(o.gql)(F());function A(){var e=Object(s.a)(["\n    subscription{\n        gameEvents{\n            data{\n                height\n                hotelAvailable\n                houseAvailable\n                id\n                players {\n                    id\n                    username\n                    color\n                    balance\n                }\n                owner {\n                    id\n                    username\n                }\n                currentPlayer{\n                    id\n                    username\n                    canRoll\n                    lastRoll1\n                    lastRoll2\n                    balance\n                    tile {\n                        id\n                        boardTile{\n                            ... on ActionTile {\n                                id\n                                name\n                            }\n                            ... on Property {\n                                id\n                                name\n                                price\n                                mortgage\n                                stage\n                                state\n                                housePrice\n                                propertySet{\n                                    color\n                                }\n                                player{\n                                    id\n                                }\n                            }\n                            ... on Deck {\n                                id\n                                name\n                            }\n                            ... on Utility {\n                                id\n                                name\n                                price\n                            }\n                        }\n                        boardTileType\n                    }\n                }\n                state\n                tiles {\n                id\n                boardTile{\n                    ... on ActionTile {\n                        id\n                        name\n                    }\n                    ... on Property {\n                        id\n                        name\n                        price\n                        mortgage\n                        stage\n                        state\n                        housePrice\n                        propertySet{\n                            color\n                        }\n                        player{\n                            color\n                        }\n                    }\n                    ... on Deck {\n                        id\n                        name\n                    }\n                    ... on Utility {\n                        id\n                        name\n                        price\n                    }\n                }\n                boardTileType\n                currentPlayers{\n                    id\n                    color\n                }\n                x\n                y\n                }\n                width\n            }\n            message\n        }\n    }\n"]);return A=function(){return e},e}var U=Object(o.gql)(A()),G=t(25),H=function(e){var n,t=Object(a.useState)("initial"),i=Object(c.a)(t,2),l=i[0],s=i[1],u=Object(a.useState)(),d=Object(c.a)(u,2),b=d[0],j=d[1],p=Object(a.useState)(null),O=Object(c.a)(p,2),y=O[0],g=O[1],v=(n={onCompleted:function(n){e.setUser(n.createGame.owner),g(n.createGame.id)}},Object(o.useMutation)(m,n)),h=Object(c.a)(v,1)[0];return Object(r.jsxs)("div",{className:"join-page",children:[y&&Object(r.jsx)(G.a,{to:"/game/"+y}),Object(r.jsxs)("div",{className:"menu",children:["initial"===l&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"menu-title",children:"Monopl.io"}),Object(r.jsx)("div",{className:"menu-subtitle",children:"~100 players online"}),Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Find Game"}),Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Create Lobby",onClick:function(){return s("creating")}})]}),"creating"===l&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{className:"menu-input",type:"text",placeholder:"Nickname (optional)",name:"username",value:b,onChange:function(e){switch(e.target.name){case"username":j(e.target.value)}}}),Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Go",onClick:function(){""!==b&&b.length>0?h({variables:{username:b}}):""===b&&alert("Please enter a title.")}}),Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Back",onClick:function(){return s("initial")}})]})]})]})},E=function(e){return Object(r.jsxs)("div",{className:"board",children:[Object(r.jsxs)("div",{className:"horizontal-row",children:[Object(r.jsx)(B,{tile:e.game.tiles[20]}),Object(r.jsx)(_,{style:{transform:"rotate(180deg)"},tiles:e.game.tiles.slice(21,30).reverse(),setSelectedTile:e.setSelectedTile}),Object(r.jsx)(B,{tile:e.game.tiles[30]})]}),Object(r.jsxs)("div",{className:"middle-row",children:[Object(r.jsx)("div",{className:"column",children:Object(r.jsx)(_,{style:{transform:"rotate(90deg)"},tiles:e.game.tiles.slice(11,20).reverse(),setSelectedTile:e.setSelectedTile})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Monopl.io"}),e.message&&"RollDice"===e.message&&Object(r.jsx)(L,{dice:e.game.currentPlayer})]}),Object(r.jsx)("div",{className:"column",children:Object(r.jsx)(_,{style:{transform:"rotate(270deg)"},tiles:e.game.tiles.slice(31,40).reverse(),setSelectedTile:e.setSelectedTile})})]}),Object(r.jsxs)("div",{className:"horizontal-row",children:[Object(r.jsx)(B,{tile:e.game.tiles[10]}),Object(r.jsx)(_,{tiles:e.game.tiles.slice(1,10).reverse(),setSelectedTile:e.setSelectedTile}),Object(r.jsx)(B,{tile:e.game.tiles[0]})]})]})},B=function(e){return Object(r.jsxs)("div",{className:"corner",children:[Object(r.jsx)("div",{className:"corner-tile-players",children:e.tile.currentPlayers.map((function(e){return Object(r.jsx)("div",{className:"horizontal-tile-player",style:{backgroundColor:e.color},onClick:function(){return console.log(e)}},"player-"+e.id)}))}),Object(r.jsx)("div",{children:e.tile.boardTile.name})]})},L=function(e){return Object(r.jsxs)("div",{className:"dice-wrap",children:[Object(r.jsx)("span",{className:"dice dice-"+e.dice.lastRoll1,title:"Dice "+e.dice.lastRoll1}),Object(r.jsx)("span",{className:"dice dice-"+e.dice.lastRoll2,title:"Dice "+e.dice.lastRoll2})]})},z=function(e){return Object(r.jsx)(r.Fragment,{children:"Property"===e.tile.boardTileType&&Object(r.jsxs)("div",{className:"property-detailed",children:[Object(r.jsx)("div",{className:"property-detailed-header",style:{backgroundColor:e.tile.boardTile.propertySet.color},children:e.tile.boardTile.name}),Object(r.jsxs)("div",{className:"property-detailed-rent",children:["RENT $",e.tile.boardTile.propertyRents[0].rent]}),Object(r.jsx)("hr",{}),Object(r.jsx)(r.Fragment,{children:e.tile.boardTile.propertyRents.map((function(e){return Object(r.jsx)(r.Fragment,{children:0!==e.stage&&Object(r.jsxs)("div",{className:"property-detailed-row",children:[Object(r.jsxs)("div",{children:["With ",e.stage<5?e.stage:""," ",1!==e.stage?5!==e.stage?"Houses":"HOTEL":"House"]}),Object(r.jsxs)("div",{children:["$",e.rent]})]},e.stage)})}))}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"property-detailed-row",children:[Object(r.jsx)("div",{children:"House Cost"}),Object(r.jsxs)("div",{children:["$",e.tile.boardTile.housePrice]})]}),Object(r.jsxs)("div",{className:"property-detailed-row",children:[Object(r.jsx)("div",{children:"Mortgage Value"}),Object(r.jsxs)("div",{children:["$",e.tile.boardTile.mortgage]})]})]})})},J=function(e){return Object(r.jsxs)("div",{className:"property-header",style:{backgroundColor:e.color},children:[e.stage<5&&Object(r.jsxs)(r.Fragment,{children:[e.stage>=1&&Object(r.jsx)("div",{className:"property-house"}),e.stage>=2&&Object(r.jsx)("div",{className:"property-house"}),e.stage>=3&&Object(r.jsx)("div",{className:"property-house"}),e.stage>=4&&Object(r.jsx)("div",{className:"property-house"})]}),e.stage>=5&&Object(r.jsx)("div",{className:"property-hotel"})]})},Q=function(e){return Object(r.jsxs)("div",{className:"horizontal-tile",onClick:function(){return e.setSelectedTile(e.tile.id)},style:{backgroundColor:"Property"===e.tile.boardTileType?"mortgaged"===e.tile.boardTile.state?"gray":"white":" white"},children:[Object(r.jsx)("div",{className:"horizontal-tile-players",children:e.tile.currentPlayers.map((function(e){return Object(r.jsx)("div",{className:"horizontal-tile-player",style:{backgroundColor:e.color}},"player-"+e.id)}))}),"ActionTile"===e.tile.boardTileType&&Object(r.jsx)("div",{children:e.tile.boardTile.name}),"Property"===e.tile.boardTileType&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(J,{color:e.tile.boardTile.propertySet.color,stage:e.tile.boardTile.stage}),Object(r.jsx)("div",{children:e.tile.boardTile.name}),Object(r.jsxs)("div",{children:["$",e.tile.boardTile.price]}),null!==e.tile.boardTile.player&&Object(r.jsx)("div",{style:{backgroundColor:e.tile.boardTile.player.color,height:"5px"}})]}),"Deck"===e.tile.boardTileType&&Object(r.jsx)("div",{children:e.tile.boardTile.name}),"Utility"===e.tile.boardTileType&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:e.tile.boardTile.name}),Object(r.jsxs)("div",{children:["$",e.tile.boardTile.price]})]})]},e.key)},_=function(e){return Object(r.jsx)("div",{className:"row",style:e.style,children:e.tiles.map((function(n){return Object(r.jsx)(Q,{tile:n,setSelectedTile:e.setSelectedTile},n.id)}))})},V=function(e){var n,t=Object(G.g)().id,i=Object(a.useState)(null),l=Object(c.a)(i,2),s=l[0],u=l[1],b=Object(a.useState)(),p=Object(c.a)(b,2),m=p[0],O=p[1],g=Object(a.useState)(null),h=Object(c.a)(g,2),f=h[0],I=h[1],P=Object(o.useQuery)(R,{variables:{id:t}}),k=P.loading,S=P.data,w=Object(o.useSubscription)(U,{variables:{gameId:t},onSubscriptionData:function(e){var n=e.subscriptionData.data;u(n.gameEvents.data)}}).data,q=function(e){I(f)},F=Object(o.useQuery)(M,{skip:null===f,variables:{id:f}}),A=F.loading,H=F.data,B=(n={variables:{playerId:e.user?e.user.id:-1,propertyId:s&&s.currentPlayer?s.currentPlayer.tile.boardTile.id:-1}},Object(o.useMutation)(j,n)),L=Object(c.a)(B,1)[0],J=function(e){return Object(o.useMutation)(d,e)}({onCompleted:q,variables:{playerId:e.user?e.user.id:-1,propertyId:!A&&H&&H.tile?H.tile.boardTile.id:-1}}),Q=Object(c.a)(J,1)[0],_=function(e){return Object(o.useMutation)($,e)}({onCompleted:q,variables:{playerId:e.user?e.user.id:-1,propertyId:!A&&H&&H.tile?H.tile.boardTile.id:-1}}),V=Object(c.a)(_,1)[0],W=function(e){return Object(o.useMutation)(v,e)}({onCompleted:function(n){e.setUser(n.joinGame)}}),K=Object(c.a)(W,1)[0],X=function(e){return Object(o.useMutation)(T,e)}({onCompleted:function(n){e.setUser(n.rejoinGame)}}),Y=Object(c.a)(X,1)[0],Z=function(e){return Object(o.useMutation)(C,e)}({variables:{gameId:t}}),ee=Object(c.a)(Z,1)[0],ne=function(e){return Object(o.useMutation)(N,e)}({variables:{playerId:e.user?e.user.id:-1}}),te=Object(c.a)(ne,1)[0],re=function(e){return Object(o.useMutation)(y,e)}({onCompleted:function(e){I(null)},variables:{playerId:e.user?e.user.id:-1}}),ae=Object(c.a)(re,1)[0],ie=function(e){return Object(o.useMutation)(x,e)}({variables:{propertyId:H?parseInt(H.tile.boardTile.id):-1}}),le=Object(c.a)(ie,1)[0],ce=function(e){return Object(o.useMutation)(D,e)}({variables:{propertyId:H?parseInt(H.tile.boardTile.id):-1}}),se=Object(c.a)(ce,1)[0];return Object(a.useEffect)((function(){k||null===s&&u(S.game)}),[S]),Object(r.jsxs)("div",{className:"game-page",children:[!k&&s&&"pending"===s.state&&Object(r.jsxs)("div",{className:"menu",children:[Object(r.jsxs)("div",{className:"menu-title",children:["Game ",t]}),Object(r.jsx)("div",{className:"menu-subtitle",children:"~ Awaiting players..."}),Object(r.jsx)("div",{className:"menu-players",children:s.players.map((function(n){return Object(r.jsx)(r.Fragment,{children:e.user&&n.id===e.user.id?Object(r.jsxs)("div",{children:[" * ",n.username]},n.id):Object(r.jsxs)("div",{children:[" ",n.username]},n.id)})}))}),!e.user&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{className:"menu-input",type:"text",placeholder:"Nickname (optional)",name:"username",value:m,onChange:function(e){switch(e.target.name){case"username":O(e.target.value)}}}),Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Join",onClick:function(){m&&""!==m&&m.length>0?K({variables:{username:m,gameId:t}}):alert("Please enter a username.")}})]}),e.user&&s.owner.id===e.user.id&&s.players.length>=2&&Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Start Game",onClick:ee})]}),!k&&s&&"pending"!==s.state&&Object(r.jsxs)("div",{className:"game-display",children:[Object(r.jsx)("div",{className:"options",children:s.players.map((function(n){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"player-card",style:{backgroundColor:n.color},onClick:function(){return Y({variables:{username:n.username,gameId:s.id}})},children:[Object(r.jsxs)("div",{children:[n.id===s.currentPlayer.id?"->":""," ",n.username," ",e.user&&n.id===e.user.id?"(you)":""]}),Object(r.jsxs)("div",{children:["$",n.balance," "]})]})})}))}),Object(r.jsx)(E,{game:s,message:w?w.gameEvents.message:null,setSelectedTile:I}),Object(r.jsxs)("div",{className:"options",children:[null!==f&&!A&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(z,{tile:H.tile})}),e.user&&s&&s.currentPlayer.id===e.user.id&&Object(r.jsxs)(r.Fragment,{children:[null!==f&&!A&&H&&"Property"===H.tile.boardTileType&&null!==H.tile.boardTile.player&&s.currentPlayer.id===H.tile.boardTile.player.id&&Object(r.jsxs)(r.Fragment,{children:[!0===H.tile.boardTile.canBuyHouse&&H.tile.boardTile.stage<5&&s.currentPlayer.balance>=H.tile.boardTile.housePrice&&Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Buy House",onClick:Q}),!0===H.tile.boardTile.canSellHouse&&H.tile.boardTile.stage>0&&Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Sell House",onClick:V}),"mortgaged"!==H.tile.boardTile.state?Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Mortgage",onClick:le}):Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Un Mortgage",onClick:se})]}),"Property"===s.currentPlayer.tile.boardTileType&&null===s.currentPlayer.tile.boardTile.player&&Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Buy Property",onClick:L}),s.currentPlayer.canRoll?Object(r.jsx)("input",{className:"menu-button",type:"button",value:"Roll",onClick:te}):Object(r.jsx)("input",{className:"menu-button",type:"button",value:"End",onClick:ae})]})]})]})]})},W=t(90),K=t(206),X=t(2),Y=t(207),Z=t.n(Y),ee=(t(355),new o.HttpLink({uri:"http://localhost:3000/graphql"})),ne=Z.a.createConsumer("ws://localhost:3000/cable"),te=Object(o.split)((function(e){var n=e.query,t=Object(X.p)(n);return"OperationDefinition"===t.kind&&"subscription"===t.operation}),new K.ActionCableLink({cable:ne}),ee),re=new o.ApolloClient({link:te,cache:new o.InMemoryCache});var ae=function(){var e=Object(a.useState)(null),n=Object(c.a)(e,2),t=n[0],i=n[1];return Object(r.jsx)(o.ApolloProvider,{client:re,children:Object(r.jsx)(W.a,{children:Object(r.jsxs)(G.d,{children:[Object(r.jsx)(G.b,{path:"/game/:id",children:Object(r.jsx)(V,{user:t,setUser:i})}),Object(r.jsx)(G.b,{exact:!0,path:"/",children:Object(r.jsx)(H,{setUser:i})})]})})})},ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,364)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,l=n.getTTFB;t(e),r(e),a(e),i(e),l(e)}))};l.a.render(Object(r.jsx)(ae,{}),document.getElementById("root")),ie()}},[[356,1,2]]]);
//# sourceMappingURL=main.86e28487.chunk.js.map