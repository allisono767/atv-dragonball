import style from './Card.module.css'

export const Card = ({name, image, ki, maxKi, race, gender, affiliation}) => {
    return(
        <>

          <div className={style.cardsEstilo}>
          <div className={style.imgCardApi}>
         <img src={image} alt={name} className={style.imgCard}/>
         </div >
         <div className={style.infoApi}>
         <h1 className={style.title}>{name}</h1>

         <h2 className={style.titleDesc}>ki</h2>
         <p className={style.desc}> {ki}</p>

         <h2 className={style.titleDesc}>Ki Maximo</h2>
         <p className={style.desc}>{maxKi}</p>

         <h2 className={style.titleDesc}>Raça</h2>
         <p className={style.desc}>{race}</p>

         <h2 className={style.titleDesc}>Genêro</h2>
         <p className={style.desc}>{gender}</p>


         <h2 className={style.titleDesc}>Afiliação</h2>
         <p className={style.desc}>{affiliation}</p>
         </div>
         
          </div>
         
         

        </>
    )
}