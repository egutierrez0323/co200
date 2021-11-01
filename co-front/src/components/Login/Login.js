import "../Login/Login.css";
import GoogleLogin from "react-google-login";

function Login() {
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileObj);
  };

  return (
    <div>
      <div class="bg-img">
        <div class="contenido">
          <header>Login Aqua200</header>

          <GoogleLogin
            clientId="429513669075-ht7ane4fnotjik9nsb4slp01h0qhegbv.apps.googleusercontent.com"
            buttonText="Iniciar Sesión con Google"
            onSuccess={respuestaGoogle}
            onFailure={respuestaGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
