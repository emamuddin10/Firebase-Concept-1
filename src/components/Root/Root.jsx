import { createContext} from "react";
import { Outlet } from "react-router-dom";
export const authContext = createContext();

const Root = () => {

  return (
    <div>
      <h1>hey i am the main layout</h1>
      <authContext.Provider value={{name:'emam'}}>
        <Outlet></Outlet>
      </authContext.Provider>
    </div>
  );
};

export default Root;
