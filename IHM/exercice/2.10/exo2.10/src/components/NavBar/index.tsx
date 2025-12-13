import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}>Cinema</button>
      <button onClick={() => navigate("/movie-list")}> Movie List</button>
    </nav>
  );
};