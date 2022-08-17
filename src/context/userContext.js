import { useState, createContext} from 'react';
export const caractersContext = createContext();

export const CaractersProvider = ({children}) => {
    const [caracters, setCaracters] = useState([])

    return (
        <caractersContext.Provider value={{
            caracters,
            setCaracters
            
        }}>
            {children}
        </caractersContext.Provider>
    )
}