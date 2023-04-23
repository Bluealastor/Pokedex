import './topBar.css';
import pokeballColor from '../img/pokeballColor.png'
import pokeball from '../img/pokeball.png'

export const TopBar = () => {

    return(
        <div className='title'>
            <div className='title_left'>
                <p>Pokedex</p>
                <div className='caught-seen'>
                    <div className='caught'>
                        <img src={pokeballColor} alt='pokemoncolor' style={{width: '25.5px', marginRight:'10px'}}/>
                        <p>649</p>

                    </div>
                    <div className='seen'>
                        <img src={pokeball} alt='pokeball' style={{width: '30px', marginRight:'10px'}}/>
                        <p>649</p>
                    </div>
                </div>
            </div>
            <p style={{color:"white"}}>Christian Pokedex</p>
        </div>
    )

}
