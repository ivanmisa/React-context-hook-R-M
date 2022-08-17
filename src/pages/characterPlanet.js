import { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { caractersContext } from '../context/userContext';

function CharacterPlanet(){
    let location = useLocation();
    let {caracters} = useContext(caractersContext);
    const [loc, setLocation ] = useState('');


    useEffect(()=> { 
        async function setData(){
            console.log("asd")
            if(location.state){  
                setLocation(location.state.location);
            }
        }

        setData();
       
    }, [location]);
    

    return (     
        <div>
            <h2 className="name-planet">Planeta:  { loc}</h2>
            <div className="d-flex flex-wrap">  
            {
                caracters.map((character, index) => {
                    return (         
                        <div  key={index} className="d-flex flex-wrap"> 
                            {loc == character.origin.name && 
                                <div className="container-product m-3">
                                    <div className="container-image">
                                        {character.image 
                                            ?<img src={ character.image }/>
                                            :<img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" />
                                        }                           
                                    </div>
                                    <div className="data-product">
                                        <div className="name-character">{character.name}</div>
                                        <div className="species">Especie: {character.species}</div>
                                    </div>
                                </div>
                            }       
                        </div>                    
                    )
                })
            }
            </div>
        </div>
    )
}


export default CharacterPlanet