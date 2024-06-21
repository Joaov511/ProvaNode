import "./TextAside.sass";
import Local from "../../../../../public/label.json"
import { LuPartyPopper } from "react-icons/lu";
import { IoRestaurant } from "react-icons/io5";
import DetailBar from "../../../../standard/LoginComponents/detailBar";
import ButtonLogin from "../../../../standard/LoginComponents/button";
import { IoIosStarOutline , IoIosStarHalf , IoIosStar  } from "react-icons/io";
import { useState , useEffect } from "react";


export default function TextAside(){
    
    function IconsChange(){
        switch(Local.Login[0].type){
            case "party":
                return <LuPartyPopper/>
            break;
            case "food":
                return <IoRestaurant/>
                break;
            
        }
    }

    

    
    
    const [timeInterval , settimeInterval] = useState(3000)
    const [currentDot, setcurrentDot] = useState(1)
    function ChangeText(){
        
        
        
        useEffect(()=>{
            let AllDots = document.querySelectorAll(".dotSelected")
            
            const intervalo = setInterval(()=>{
                setcurrentDot(currentDot+1)
                
                AllDots.forEach(dot=>{dot.classList.remove('selected')})
                AllDots[currentDot % AllDots.length].classList.add("selected");
                
                if(currentDot >= AllDots.length -1){
                    setcurrentDot(0)
                }
            },timeInterval)
            
            return () => clearInterval(intervalo);
        },)
        
        
        
    }
    
    
    function Stars(){
        let nota = Local.Login[currentDot].rate 
        nota > 5 ? nota = 5 : nota = nota
        let notacontrol = nota
        let Nota0 = [
            <IoIosStarOutline key="1"/>,<IoIosStarOutline key="2"/>,<IoIosStarOutline key="3"/>,<IoIosStarOutline key="4"/>,<IoIosStarOutline key="5"/>
        ]
        for(let i = 0 ; i < nota ; i++){

            notacontrol -= 1
            if(notacontrol < 0){
                Nota0.splice(i,1,<IoIosStarHalf key={i}/>)
            }
            else{
                Nota0.splice(i,1,<IoIosStar key={i}/>)
            }
            
        }
        return Nota0
    }
    ChangeText()



    let RestArea = document.getElementById('ChangeLocationsMargin')
    function Slide(){
        RestArea.style.display = "none"
    }
    



    return(
        <article id="TextAside" className="hidden lg:flex " >
            <div id="TitleTextAside">
                <h1>Indaia<span>Spots</span></h1>
            </div>
            
            <div id="ChangeLocations">
                <div id="ChangeLocationsMargin">
                    <div id="changeName">

                        <h1>{Local.Login[currentDot].name}</h1>
                        <DetailBar
                        wid = "45%"
                        />
                        <h1>{
                            IconsChange()
                            }</h1>

                    </div>
                    <div id="changeDesc">

                        <p>{Local.Login[currentDot].desc}</p>

                    </div>
                    <div id="changeRate" className="text-4xl flex">
                        {Stars()}
                    </div>
                    <div id="ButtonChange" onMouseEnter={()=>{settimeInterval(99999999999999)}} onMouseLeave={()=>{settimeInterval(3000)}}>
                            <a href={Local.Login[currentDot].link}><ButtonLogin text="Saiba Mais"/></a>
                    </div>

                </div>
            </div>
            <article id="dotSelectedArea">
                <div className="dotSelected"></div>
                <div className="dotSelected"></div>
                <div className="dotSelected"></div>
            </article>
        </article>
    )
    
}