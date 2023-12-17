import { UserButton } from "@clerk/nextjs";
import "../styles/global.css"

export default function Uploads(){
    return(
        <>
            <UserButton afterSignOutUrl="/"/>
           <div className="fl">
            <h1>Uploads</h1>
            </div>
        </>
    )
}