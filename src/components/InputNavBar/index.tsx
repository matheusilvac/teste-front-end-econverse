export const InputNavBar = () => {
  return (
    <div className="relative flex items-center w-1/3 h-auto gap-2">
      <div className="relative w-full">
        <input
          type="text"
          name="search"
          placeholder="O que você está buscando?"
          className="w-full h-12 bg-[#F6F5F2] rounded-xl pl-5 pr-12 outline-none"
        />
        <img
          src="/SearchIcon.png"
          alt="Ícone de busca"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 w-7 h-7"
        />
      </div>
    </div>
  );
};
