import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const style = {
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "1046px",
  };
  return (
    <>
      <div style={style}>
        <div className="flex flex-col items-center justify-center p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
};
