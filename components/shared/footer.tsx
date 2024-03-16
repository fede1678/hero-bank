import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-gray-200 flex flex-col  xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-4">
      <div>
        <p className="text-gray-500 text-center md:text-left flex items-center gap-2">
          &copy; 2024
          <span className="text-gray-900 dark:text-white font-bold">
            =$
          </span>{" "}
          Todos los derechos reservados.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-2">
        <Link
          href="#"
          className="text-gray-700 dark:text-gray-400 dark:hover:text-white hover:text-gray-900 transition-colors duration-300"
        >
          Terminos y condiciones
        </Link>
        <span className="hidden xl:flex">|</span>
        <Link
          href="#"
          className="text-gray-700 dark:text-gray-400 dark:hover:text-white hover:text-gray-900 transition-colors duration-300"
        >
          Política de privacidad
        </Link>
      </div>
    </div>
  );
};
