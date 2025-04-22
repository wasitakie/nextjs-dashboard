import Image from "next/image";
import clsx from "clsx";
export default function Home({ status }: { status: string }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <span
          className={clsx("inline-flex text-sm items-center", {
            "bg-green-700 text-white": status === "success",
            "bg-red-700 text-white": status === "error",
          })}
        >
          hello
        </span>
      </main>
    </div>
  );
}
