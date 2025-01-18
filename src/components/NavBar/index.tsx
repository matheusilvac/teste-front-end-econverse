import Link from "next/link";
import { InputNavBar } from "../InputNavBar";

export const NavBar = () => {
  return (
    <nav className="w-full flex h-auto flex-col items-center justify-center fixed top-0 z-50 bg-white ">
      <div className="w-full flex flex-col sm:flex-row justify-center items-center h-auto border-b border-[#f0f0f0] gap-5 sm:gap-20 py-1">
        <div className="w-auto h-full flex justify-center items-center gap-2">
          <img src="/ShieldCheck.png" alt="" />
          <p className="text-xs text-[#9f9f9f]">
            Compra <strong className="text-[#3019B2]">100% segura</strong>
          </p>
        </div>
        <div className="w-auto h-full flex justify-center items-center gap-2">
          <img src="/Truck.png" alt="" />
          <p className="text-xs text-[#9f9f9f]">
            <strong className="text-[#3019B2]">Frete grátis </strong>acima de R$
            200{" "}
          </p>
        </div>
        <div className="w-auto h-full flex justify-center items-center gap-2">
          <img src="/CreditCard.png" alt="" />
          <p className="text-xs text-[#9f9f9f]">
            <strong className="text-[#3019B2]">Parcelea</strong> suas compras
          </p>
        </div>
      </div>
      <div className="w-full flex justify-around items-center h-[72px] border-b border-[#f0f0f0]">
        <Link href="/">
          <img
            src="/Logo.png"
            alt=""
            className="w-36 h-auto flex object-cover"
          />{" "}
        </Link>
        <InputNavBar />
        <div className="h-full flex justify-center items-center gap-2 sm:gap-5">
          <Link href="/">
            <img src="/Group.png" alt="" />
          </Link>
          <Link href="/">
            <img src="/Heart.png" alt="" />
          </Link>
          <Link href="/">
            <img src="/UserCircle.png" alt="" />
          </Link>
          <Link href="/">
            <img src="/Cart.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-around items-center h-10 border-b border-[#f0f0f0] gap-10 text-xs text-[#9f9f9f] font-bold">
        <Link href="/">Todas Categorias</Link>
        <Link href="/">Supermercado</Link>
        <Link href="/">Livros</Link>
        <Link href="/">Moda</Link>
        <Link href="/">Lançamentos</Link>
        <Link href="/" className="text-[#3019B2]">
          Ofertas do dia
        </Link>
        <Link href="/" className="flex justify-center items-center gap-2">
          <img src="/CrownSimple.png" alt="" /> Assinatura
        </Link>
      </div>
    </nav>
  );
};
