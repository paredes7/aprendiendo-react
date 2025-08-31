
import React from 'react';

import './App.css' //importamos aqui a nivel de "COMPONENTE"
import { TwitterFollowCard } from './TwitterFollowCard'

//export exporta nuesto componente y en main lo importamos
export function App(){
    /*clasname para que nuestro componente sea reutilizable
    swit = es un tipo de prefijo
    swit = 'tw-followCard'  ---> es el nombre que esta en App.css

    className='tw-followCard-header' ---> lo podemos estilar en header
    className='tw-followCard-avatar' ---> para estilar imagen

    */

    //<react.fragment><react.fragment/>  ==  <></>
    return(
        <>
            <TwitterFollowCard userName="jhoel" name="jhoel paredes pava"/>
            <TwitterFollowCard userName="jhoel" name="jhoel paredes pava"/>
        </>
    )
        
}