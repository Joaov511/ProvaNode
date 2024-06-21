import { useState , useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllRestaurants } from "../../../../config/api"
import { GiBarbecue, GiFullPizza, GiChopsticks, GiCookingPot } from "react-icons/gi";
import { IoFastFood, IoFish, IoBeerOutline } from "react-icons/io5";


export default function CardArea({searchResults, noResults}){
    
    const [Restaurantes, setRestaurantes] = useState([])
    const [initialRequest, setinitialRequest] = useState([])
    useEffect(() => {
        getAllRestaurants().then(r => {
            setRestaurantes(r.data)
            setinitialRequest(r.data)
        })
    }, [])

    useEffect(() => {
        if(searchResults.length > 0){
            setRestaurantes(searchResults)
        }
        else {
            setRestaurantes(initialRequest);
        }
    }, [searchResults]) 
    
    return(
        <div className="CardArea flex flex-wrap justify-center">
            {Restaurantes && Restaurantes.map((Res , index)=>{
                if(Res.Dia_Atendimento == 'Segunda, Terça, Quarta, Quinta, Sexta, Sábado, Domingo') {
                    Res.Dia_Atendimento = 'Todos os dias';
                }
                let nome = Res.Nome
                let dia = Res.Dia_Atendimento  
                let id = Res.ID_Restaurante
                let url = Res.Url
                let icone = Res.icone;
                let iconComponent;
                
                function getIcon() {
                    switch(icone) {
                        case 1:
                            iconComponent = <GiBarbecue className="h-8 w-8" />
                            break;
                        case 2:
                            iconComponent = <IoFastFood className="h-8 w-8"/>
                            break;
                        case 3:
                            iconComponent = <IoFish className="h-8 w-8" />
                            break;
                        case 4:
                            iconComponent = <GiFullPizza className="h-8 w-8" />
                            break;
                        case 5:
                            iconComponent = <GiChopsticks className="h-8 w-8" />
                            break;
                        case 6:
                            iconComponent = <GiCookingPot className="h-8 w-8" />
                            break;
                        case 7:
                            iconComponent = <IoBeerOutline className="h-8 w-8" />
                            break;
                        default :
                            iconComponent = null;
                    }
                }
                getIcon();
                
                return(
                    <div key={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8 mx-4 sm:mx-2 lg:mx-4">
                        <a href="#">
                            <img className="rounded-t-lg h-60 w-full object-cover object-center" src={url} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nome}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{dia}</p>
                            <div className="flex justify-between">
                                <Link to={`/teste/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Saiba Mais
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                    
                                </Link>
                                <div id='Icon'>{iconComponent}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}