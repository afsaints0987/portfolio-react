
import loader from '../assets/loader.gif'

const Loading = ({title}) => {
    return (
        <div id="loading" className="text-center">
            <img src={loader} alt="loader" width="75px" className="rounded-circle"/>
            <p>{title}</p>
        </div>
    )
}

export default Loading
