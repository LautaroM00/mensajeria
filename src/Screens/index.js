import { ChatScreen } from "./ChatScreen/ChatScreen";
import messiFoto from '../../assets/messi.jpg'
import charlyFoto from '../../assets/charly.png'
import dukiFoto from '../../assets/duki.png'

const messiSticker = "../../../../assets/messiYsi.jpg"
const coscuSticker = "../../../../assets/polimardo.png"
const spidermanTriste = '../../../../assets/spidermanTriste.jpeg'



const fetchContactos = async () => {
    const response = await fetch('/data.json',{method: 'GET'})

    const data = await response.json()


    return data
}

export { ChatScreen, fetchContactos }