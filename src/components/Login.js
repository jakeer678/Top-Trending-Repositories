import "./Login.css";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { login, isPending } = useLogin();

  return (
    <div>
      <div class="container">
        <h1>GitHub Login</h1>
        <div class="login-container">
          <button type="button" className="btn btn-primary" onClick={login}>
            <svg
              height="32"
              class="github-icon"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.582 0 0 3.582 0 8c0 3.535 2.29 6.533 5.47 7.59.4.074.547-.174.547-.387 0-.19-.007-.693-.01-1.36-2.226.482-2.693-1.07-2.693-1.07-.364-.926-.888-1.172-.888-1.172-.725-.496.055-.486.055-.486.803.056 1.226.82 1.226.82.714 1.226 1.872.873 2.324.665.072-.517.28-.872.507-1.072-1.774-.2-3.635-.887-3.635-3.943 0-.87.31-1.58.82-2.14-.088-.202-.36-1.013.07-2.11 0 0 .67-.214 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.034 2.19-.82 2.19-.82.43 1.097.16 1.908.08 2.11.51.56.82 1.27.82 2.14 0 3.064-1.87 3.74-3.65 3.93.29.25.54.73.54 1.48 0 1.067-.01 1.927-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8z"
              />
            </svg>
            {isPending ? "Loading..." : "Login With Github"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
