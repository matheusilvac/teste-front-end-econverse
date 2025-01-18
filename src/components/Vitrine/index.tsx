export const Vitrine = () => {
    return(
        <div className="w-full flex flex-col justify-center items-center mt-10">
        <div className="w-3/4 flex flex-col items-center my-4 px-5">
          <div className="w-full flex h-full items-center">
            <div className="flex-grow border-t border-[#f0f0f0] border-2"></div>
            <span className="mx-4 text-[#3442B5] font-bold text-lg sm:text-3xl">
              Produtos relacionados
            </span>
            <div className="flex-grow border-t border-[#f0f0f0] border-2"></div>
          </div>
          <p className="text-center flex justify-center text-[#3F3F40] text-sm mt-2">Ver todos</p>
        </div>
      </div>
    )
}