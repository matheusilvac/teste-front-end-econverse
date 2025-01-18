import { Categorias } from "@/components/Categorias";

export default function Home() {
  const items = [
    { label: "CELULAR", active: true },
    { label: "ACESSÓRIOS", active: false },
    { label: "TABLETS", active: false },
    { label: "NOTEBOOKS", active: false },
    { label: "TVS", active: false },
    { label: "VER TODOS", active: false },
  ];

  return (
    <main className="w-full flex h-full flex-col pt-52 sm:pt-[140px]">
      <div className="relative w-full h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/background.png"
            alt="Fundo promocional"
            className="w-full h-full object-cover"
          />
          <div className="w-1/2 absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-5 sm:px-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 w-2/3">
            Venha conhecer nossas promoções
          </h1>
          <p className="text-lg md:text-3xl font-semibold mb-6">
            <strong className="text-[#F7CA11]">50% Off</strong> nos produtos
          </p>
          <button className="w-48 flex justify-center items-center h-[50px] bg-[#F7CA11] text-black font-medium rounded hover:opacity-70 duration-300 transition-all">
            Ver produto
          </button>
        </div>
      </div>

      <div className="w-full h-auto flex flex-wrap justify-center items-center gap-8 mt-10 transition-all duration-500">
        <Categorias />
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-10">
        <div className="w-3/4 flex flex-col items-center my-4 px-5">
          <div className="w-full flex h-full items-center">
            <div className="flex-grow border-t border-[#f0f0f0] border-2"></div>
            <span className="mx-4 text-[#3442B5] font-bold text-lg sm:text-3xl">
              Produtos relacionados
            </span>
            <div className="flex-grow border-t border-[#f0f0f0] border-2"></div>
          </div>
          <div className="w-full h-auto flex border border-gray-300 divide-x divide-gray-300 mt-2">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex-1 text-md text-center p-2 cursor-pointer ${
                  item.active ? "text-[#3442B5] font-bold" : "text-gray-600"
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
