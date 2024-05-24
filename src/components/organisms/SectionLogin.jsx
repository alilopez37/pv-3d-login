import { useState } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css'

function SectionLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handlerClick = (event) => {
        Swal.fire({
            title: "Alta de productos",
            text: `${username} : ${password}`,
            imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            imageHeight: 100,
          });
    }


    return (
        <div id="login_section">
            <Field type="text" placeholder="p.e. alilopez" text="Username" val={username} fnVal={setUsername}/>
            <Field type="password" placeholder="Password" text="Password" val={password} fnVal={setPassword}/>
            <Button title="Iniciar sesión" onclick={handlerClick}/>
        </div> 
     );
}

export default SectionLogin;