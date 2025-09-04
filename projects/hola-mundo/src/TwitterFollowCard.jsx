//esto es un "COMPONENTE" reuzable = si
/* la base de la reutilizacion de los componentes en react son los "PARAMETROS/PROPIEDADES"
ejemplo: export function TwitterFollowCard({userName, name, ...PARAMETROS}){
**/

/*clasname para que nuestro componente sea reutilizable
    swit = es un tipo de prefijo
    swit = 'tw-followCard'  ---> es el nombre que esta en App.css
    className='tw-followCard-header' ---> lo podemos estilar en header
    className='tw-followCard-avatar' ---> para estilar imagen
    */

//src={'https://unavatar.io/${userName}'}/> ---> la exprecion se evalua con llaves
//isFollowing es booleano como psamos a App.jsx

//importamos {useState para dar funcionalidad al componente (Host)}
import { useState } from "react"

export function TwitterFollowCard({children, userName, initialIsFollowing}){
    //para useState
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)//valor de estado inicial

    //Renderizado condicional
    const text = isFollowing ? 'siguiendo' : 'Seguir'
    //para estilos de estar siguiendo o no
    const buttonClasName = isFollowing ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)//cambia de false a true o viseversa
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="El avatar de midudev" 
                src={'https://unavatar.io/${userName}'}/>
                <div className='tw-followCard-info'>
                    <strong>
                        {children}
                    </strong>
                    <span className="tw-followCard-infoUserName">
                        @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClasName} onClick={handleClick}>
                    {text}
                    <span className="tw-followCar-stopFollow">
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    )
}