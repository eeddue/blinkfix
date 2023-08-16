import TransactionDetails from "@/components/modals/TransactionDetails";

import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="flex justify-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 p-5 gap-5 w-[1200px] justify-center">
        <Link
          href="/transactions/refunds"
          className="flex items-center justify-center h-[250px] w-full max-w-[600px] bg-tp shadow-lg rounded-xl hover:shadow-sm mx-auto"
        >
          <p className="text-2xl text-white">Refunds</p>
        </Link>
        <Link
          href="/transactions/withdrawals"
          className="flex items-center justify-center h-[250px] w-full max-w-[600px]  bg-tp shadow-lg rounded-xl hover:shadow-sm mx-auto"
        >
          <p className="text-2xl text-white">Withdrawals</p>
        </Link>
        <Link
          href="/transactions/earnings"
          className="flex items-center justify-center h-[250px] w-full max-w-[600px]  bg-tp shadow-lg rounded-xl hover:shadow-sm mx-auto"
        >
          <p className="text-2xl text-white">Earnings</p>
        </Link>
        <Link
          href="/transactions/deposits"
          className="flex items-center justify-center h-[250px] w-full max-w-[600px]  bg-tp shadow-lg rounded-xl hover:shadow-sm mx-auto"
        >
          <p className="text-2xl text-white">Deposits</p>
        </Link>
      </div>
    </section>
  );
}

export default page;
