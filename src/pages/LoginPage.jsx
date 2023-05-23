import { useContext } from "react";
import { LoginAuth } from "../contexts/LoginAuth";
import { useNavigate } from "react-router-dom";
import { UsersData } from "../data/UsersData";
import { useDispatch, useSelector } from "react-redux";
import { addEv } from "../features/userData/userSlice";
import "./LoginPage.css";

const LoginPage = () => {
  const { isLogin, setIsLogin, user, setUser } = useContext(LoginAuth);
  const { apartList } = useSelector((state) => state.apart);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setIsLogin(true);
    setUser(UsersData[4]);

    const accountHomes = apartList.filter(
      (apart) => apart.userId === UsersData[4].id
    );
    accountHomes.map((apart) => {
      dispatch(addEv(apart));
    });

    Navigate("/account");
  };
  return (
    <div className="login-page-container">
      <h1>Welcome Back</h1>

      <button className="btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
