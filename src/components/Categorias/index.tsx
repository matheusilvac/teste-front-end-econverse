const categorias = [
  { id: 1, name: "Tecnologia", img: "/Tech.png" },
  { id: 2, name: "Supermercado", img: "/supermercado.png" },
  { id: 3, name: "Bebidas", img: "/whiskey.png" },
  { id: 4, name: "Ferramentas", img: "/ferramentas.png" },
  { id: 5, name: "Saúde", img: "/health.png" },
  { id: 6, name: "Esportes e Fitness", img: "/corrida.png" },
  { id: 7, name: "Moda", img: "/moda.png" },
];

export const Categorias = () => {
  return (
    <>
      {categorias.map((categoria) => (
        <div className="flex flex-col justify-center items-center gap-4 cursor-pointer" key={categoria.id}>
          <div className="w-32 h-32 rounded-lg bg-[#F4F4F4] flex items-center justify-center shadow-lg shadow-black/10">
            <img src={categoria.img} alt="" className=""/>
          </div>
          <div>
            <p className={`${categoria.name === "Tecnologia" ? "text-[#3019B2] font-bold " : "text-[#4E4E4E]"}  flex text-center text-sm`}>{categoria.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};
