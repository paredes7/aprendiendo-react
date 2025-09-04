
import React, { useState } from 'react';

import './App.css' //importamos aqui a nivel de "COMPONENTE"
import { TwitterFollowCard } from './TwitterFollowCard'


//renderizado de listas
    const users = [
    {
        userName: 'jhoel',
        name: 'jhoel paredes pava',
        isFollowing: true
    },
    {
        userName: 'anabel',
        name: 'anabel paredes pava',
        isFollowing: false
    },
    {
        userName: 'jhasef',
        name: 'jhaseft rene',
        isFollowing: true
    },
    {
        userName: 'ale',
        name: 'ale zerna',
        isFollowing: false
    }
    ]
    

//export exporta nuesto componente y en main lo importamos
export function App(){
    //formato del userName que llama a FormatUserName de TwitterFollowCard.jsx
    //const format = (userName) => `@${userName}`;


    //<react.fragment><react.fragment/>  ==  <></>

    /*const [isFollowing, setIsFollowing] = useState(false)

    console.log("[app] render con isFollowing: ", isFollowing)*/


    return(
        //clasname=App   es la separacion que lo tendremos a nivel de "'CONTENEDOR'"
        //'isFollowing' pasamos de la siguiente manera --->  isFollowing={true} ==isFollowing
       //formatUserName={format} --> pasamos una funcion
       <section className='App'>
            {
                users.map(user=> {
                    const{userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard
                            key={userName}
                            userName = {userName}
                            initialIsFollowing={isFollowing}
                            >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
        
}