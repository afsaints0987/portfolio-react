import MotionContainer from '../components/MotionContainer'
import * as FaIcons from 'react-icons/fa'
import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import Spinner from 'react-bootstrap/Spinner'


const Contact = () => {
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [field, setField] = useState({
        name: '',
        email: '',
        message: ''
    })
    const form = useRef();
    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY

    const handleChange = e => {
        const {name, value} = e.target
        setField({
            ...field,
            [name]: value
        }) 
    }

    const sendEmail = e => {
        e.preventDefault();
        
        setLoading(true)

        if(!field.name && !field.email && !field.message){
            setError(true)
            setMessage('Please fill up the form')
            setLoading(false)
            setInterval(()=> {
                setError(false)
            }, 3000)
        } else {
            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then(result => {
                setMessage('Message Sent')
                setSuccess(true)
                setLoading(false)
                setInterval(() => {
                    setSuccess(false)
                }, 3000)
                setField('')
                form.current.reset();
            }, (error) => {
                setMessage(error.text)
            })
        }

    }
    return (
        <MotionContainer>
            <div className="container" id="contact">
            {error && <p className="text-danger">{message}</p>}
            {success && <p className="text-success">{message}</p>}
                <ul className="contact-icons p-0 mt-2">
                    <li className="contact-icon"><FaIcons.FaMapMarkerAlt className="mx-2"/> Marikina, PH</li>
                    <li className="contact-icon my-2"><FaIcons.FaEnvelope className="mx-2"/> saints0987@gmail.com</li>
                    <li className="contact-icon"><FaIcons.FaPhoneAlt className="mx-2"/> +63 9958613015</li>
                </ul>
                <p>Feel free to contact me or you can fill up the form for inquiries</p>
                <form ref={form} className="d-flex flex-column" id="contact-form" onSubmit={sendEmail}>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="fullName">Name</label>
                        <input name="fullName" type="text" className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input name="email" type="email" className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea name="message" type="text" className="form-control" cols="50" rows="4" onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">{loading ? <Spinner animation="border" variant="light" size="sm" /> : 'Submit'}</button>
                </form>
            </div>
        </MotionContainer>
    )
}

export default Contact
