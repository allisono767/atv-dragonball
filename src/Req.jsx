import { useEffect, useState } from "react"
import { api } from "./api/api"


import { Card } from "./components/card"


import style from './Req.module.css'


export default function Req(){
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [erro, setErro] = useState(false)




    useEffect(() => {
        api.get(`/characters?page=${page}`).then((res) => {
            setErro(false)
            setData(res.data.items)
            console.log(res.data.item)
        }).catch((error) => {
            if(error.response.status === 404){
                setErro(true)
            }
            console.error(error)
        })
    }, [page])
   
    return(
        <>
        <h5><a href={"/"} className={style.backBtn}>voltar</a></h5><br /><br /><br />
        <section className={style.inicio}>
        <h1 style={{fontSize: "60px"}}>Dragon Ball API</h1>
        <br />
        <input style={{ width: "330px", marginRight: "1px", padding: "10px", borderRadius: "999px"}} type="text" placeholder="Digite uma pagina 1 até 10" value={page} onChange={(event) => setPage(event.target.value)}/>
        {erro &&  <p style={{ color: "red" }}>Essa Página não existe, é de 1 até 10</p> }
        <br />
        <br />
        {data.map((item, index) => (
                    <div className={style.wrapAll1} key={index}>
                        <Card img={item.image} text={item.name} />
                    </div>
                ))}
        </section>
        </>
    )
}
