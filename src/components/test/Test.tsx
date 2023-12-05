import {useState} from "react";
import {ShowCV} from "../ShowCV/ShowCV";
import {ToTalk} from "../ToTalk/ToTalk";


export const Test = () => {

    const [cv, setCv] = useState('');

    const showCv = (id: string): any => {

        setCv(cv => id)

    }


    return <>


        {(cv === '') ? <ToTalk/> : <ShowCV/>}


    </>
        }
