
import { Routes, Route } from "react-router-dom";
import App from "../App";

const appRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <App /> } />
    </Routes>
  )
}

export default appRouter