const GetStarted = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/image/getstarted.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "414px",
        height: "896.35px",
      }}
    >
        <img className="fixed bottom-0" src="/image/green.png" alt="" />
        <div className="flex flex-col items-center">
        <h1  style={{fontFamily:"Sacramento"}} className="text-5xl text-white text-center w-80 font-thin fixed bottom-44">Welcome to Healthy Store</h1>
        <button onClick={()=>{
            location.assign("/auth/register")
        }} className="text-white w-80 rounded-2xl bg-red-500 text-lg fixed bottom-20 py-4 ">Gat Started</button>
        </div>
    </div>
  );
};
export default GetStarted;
