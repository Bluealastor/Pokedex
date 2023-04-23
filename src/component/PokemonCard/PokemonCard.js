import "./pokemonCard.css"
import {useState} from "react"
import pokeball from "../img/pokeball.png"
import {Modal} from "../Modal/Modal"

export const PokemonCard = ({id,name,image,type,weight,height,stats,statsName}) =>{
    const [isShow, setIsShow] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const modalHandler = () => {
        setModalIsOpen(true)
    }
    const closeModalHandler = () => {
        setModalIsOpen(false)
    }

    return(
        <ul className="container">
            {isShow && (
            <li className="show">
                <div className="stat-container-title">
                    <img src={image} alt={name} className="image-title"/>
                    <p style={{width:"180px", color:"black"}}>No. {id}</p>
                    <p>{name}</p>
                    <img src={pokeball} alt="pokeball" className="pokeball-title" style={{width:"20px"}}/>
                </div>
                <img src={image} alt={name} />
                <div style={{display:"flex", width:"100%"}}>
                    <div style={{background:"#dbdbd9", textAlign:"center"}} className="stats-left">
                        <p>Type</p>
                        <p>Height</p>
                        <p>Weight</p>
                    </div>
                    <div className="stats-right" style={{background:"#ffffff"}}>
                    <p>{type}</p>
                    <p>{height}0 cm</p>
                    <p>{weight} lbs</p>                       
                    </div>
                </div>
                <div className="base-stats">
                    <div>
                        {statsName?.map((stats, index) => (
                            <p className="stats" key={index}>{stats}</p>
                        ))}
                    </div>
                    <div>
                        {stats?.map((stats, index) => (
                            <p className="stats" key={index}>{stats}</p>
                        ))}
                    </div>
                </div>
            </li>
            )}
            <div className="right" onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)} onClick={modalHandler}>

                <img src={image} alt={name} style={{mazHeight:"50px", marginRight:"10px", width:"50px"}}/>
                <p style={{widht:"720px", margin:"5px"}}>No. {id}</p>
                <p>{name}</p>
                <img src={pokeball} alt="pokeball" style={{marginLeft:"auto", width:"40px"}}/>
            </div>
            {modalIsOpen &&(
                <Modal id={id} name={name} image={image} height={height} weight={weight} stats={stats} statsName={statsName} type={type} onClick={closeModalHandler}/>
            )}

        </ul>
    )
}