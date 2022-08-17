import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { caractersContext } from '../context/userContext';
import Planet1 from '../files/p-1.png';
import Planet2 from '../files/p-2.png';
import Planet3 from '../files/p-3.png';
import Planet4 from '../files/p-4.png';
import Planet5 from '../files/p-5.png';
import Planet6 from '../files/p-6.png';
import Planet7 from '../files/p-7.png';
import Planet8 from '../files/p-8.png';

function CharacterList(){
    const [worlds, setPlanets ] = useState([]);
    const {setCaracters} = useContext(caractersContext);
    const navigate = useNavigate();

    let array = [];
    let allCaracters = [];
    let planets = [];

    useEffect(()=> {
        async function getData(){
            for (let p = 1; p < 17; p++){
                const response = await fetch('https://rickandmortyapi.com/api/character/?page=' + p)
                const data = await response.json();

                for (let q = 1; q < 20; q++){
                    allCaracters.push(data.results[q])
                
                    if(data.results[q].origin){
                        let searchLocation = array.findIndex(({location}) => location == data.results[q].origin.name)

                        if(searchLocation == -1){
                            array.push({location: data.results[q].origin.name, number: 1});
                        }

                        if(searchLocation != -1){
                            array[searchLocation].number = array[searchLocation].number + 1;
                        }                
                    }       
                }        
            }   
 
            array.sort((a, b) => b.number - a.number);
            setCaracters(allCaracters);
           
            for(let e = 0; e < 8; e++){
                planets[e] = array[e]
            }
        
            setPlanets(planets);
        }
        getData();

    }, []);


    function generateQuestions(e, index, location){
        e.preventDefault();
        navigate(`planet/${index}`, { state: { questions: index, location: location } });
    }


    return (
        <div className="d-flex flex-wrap">           
                <img className="universe" src={'https://sitiorandom.com/wp-content/uploads/2019/05/Fondo.png'}/>            
                {
                    worlds.map((world, index) => {
                        return (
                            <div  key={index} className="containerplanets d-flex flex-wrap">
                                <Link to={`planet/${index}`} onClick={(e) => generateQuestions(e, index, world.location)}>
                                    <div className="all-planets  justify-content-center d-flex">
                                        {index == 0 && world &&
                                            <img className="imageplanet" id="float3" src={Planet1} data-bs-toggle="tooltip" data-bs-placement="top" title={world.location}/> 
                                        }
                                        {index == 1 && world &&
                                            <img className="imageplanet" id="float1" src={Planet2} data-bs-toggle="tooltip" data-bs-placement="top" title={world.location}/> 
                                        }
                                        {index == 2 && world &&
                                            <img className="imageplanet" id="float2" src={Planet3} data-bs-toggle="tooltip" data-bs-placement="top" title={world.location}/> 
                                        }
                                        {index == 3 && world &&
                                            <img className="imageplanet" id="float3" src={Planet4} data-bs-toggle="tooltip" data-bs-placement="top" title={world.location}/> 
                                        }
                                        {index == 4 && world &&
                                            <img className="imageplanet" id="float1" src={Planet5} data-bs-toggle="tooltip" data-bs-placement="top" title={world.location}/> 
                                        }
                                        {index == 5 && world &&
                                            <img className="imageplanet" id="float2" src={Planet6} data-bs-toggle="tooltip" data-bs-placement="top" title={world.location}/> 
                                        }
                                        {index == 6 && world &&
                                            <img className="imageplanet" id="float3" src={Planet7} data-bs-toggle="tooltip" data-bs-placement="top" title={world.location}/> 
                                        }
                                        {index == 7 && world &&
                                            <img className="imageplanet" id="float1" src={Planet8} data-bs-toggle="tooltip" data-bs-placement="top" title={world.location}/> 
                                        }
                                    </div>
                                </Link>                 
                            </div> 
                        )
                    })
                }
        </div>
    )
}




export default CharacterList