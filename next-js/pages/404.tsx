import Image from 'next/image'
import notImg from "/public/nothing.png"

export default function ErrPage(){
    return(
        <div id="flex-center" style={{height:"70vh"}}>
            <Image src={notImg} width="400px" height="300px"/>
        </div>
    )
}