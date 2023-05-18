import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `AutoSport-${title}`
    },[title])
}

export default useTitle