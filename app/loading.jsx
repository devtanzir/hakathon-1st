const Loading = () => {
  return (
    <>
      <div className="w-screen h-screen flex gap-1 items-center justify-center">
        <div className="w-2 h-2 animate-[bounce_.6s_linear_.2s_infinite] bg-black rounded-full"></div>
        <div className="w-2 h-2 animate-[bounce_.6s_linear_.3s_infinite] bg-black rounded-full"></div>
        <div className="w-2 h-2 animate-[bounce_.6s_linear_.4s_infinite] bg-black rounded-full"></div>
      </div>
    </>
  );
};

export default Loading;
