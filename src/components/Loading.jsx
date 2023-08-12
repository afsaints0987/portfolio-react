import loader from '/assets/loader.gif'
import loader2 from '/assets/loader-2.gif'

const Loading = ({title}) => {
    return (
        <div id="loading" className="text-center">
            <img src={loader} alt="loader" width="75px" className="rounded-circle"/>
            
            <p style={{fontFamily: "Courier, monospace", fontWeight: "bold", fontSize: "18px"}} className="mt-4">{title}</p>
            <img src={loader2} alt="loader2" width="50px"/>
        </div>
    )
}

export default Loading
