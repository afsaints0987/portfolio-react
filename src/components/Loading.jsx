import loader from '../assets/loader.gif'
import loader2 from '../assets/loader-2.gif'

const Loading = ({title}) => {
    return (
        // <Canvas>
        //         <ambientLight intensity={0.3}/>
        //         <pointLight position={[10, 10, 10]}/>
        //         <Loader/>
        //     </Canvas>
        <div id="loading" className="text-center">
            <img src={loader} alt="loader" width="75px" className="rounded-circle"/>
            
            <p>{title}</p>
            <img src={loader2} alt="loader2" width="50px"/>
        </div>
    )
}

export default Loading
