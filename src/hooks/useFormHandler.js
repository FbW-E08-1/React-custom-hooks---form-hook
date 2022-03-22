import {useState} from 'react'

const useFormHandler = (form) => {
    const [formData, setFormData] = useState(form)

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return {formData, changeHandler}
}

 export default useFormHandler