export const Checkout = () => {
  return (
    <div className="w-full h-[450px] px-[2rem] my-[4rem]">
      <div className="w-full h-full flex flex-col justify-between items-center text-accent rounded-md">
        <header className="w-full h-[3rem] flex flex-col items-center justify-center gap-4">
          <h2 className="text-xl font-bold uppercase tracking-widest">
            Checkout
          </h2>
          <div className="w-full h-px bg-accent" />
        </header>
        <footer className="w-full ">
          <button className="w-full h-[3rem] p-6 bg-accent text-main flex items-center justify-center rounded uppercase font-bold">
            <a href="">Book Now</a>
          </button>
        </footer>
      </div>
    </div>
  );
};
