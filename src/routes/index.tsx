import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex items-center">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6V12"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.24 16.24L12 12"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2 className="p-0 text-base">90min</h2>
      </div>
      <section>
        <p>
          Ova lekcija osmišljena je s ciljem pružanja temeljitog razumijevanja osnova web
          developmenta. Kroz seriju sekcija, polaznici će biti u mogućnosti ne samo naučiti osnovne
          tehnologije i koncepte web developmenta, već i steći vještine potrebne za samostalno
          istraživanje i daljnje usavršavanje u ovom području. Struktura lekcije slijedi logičan
          razvoj, počevši s osnovnim uvodom, a zatim se postepeno usmjerava na specifične
          tehnologije i alate koje će polaznicima omogućiti da nastave dalje u svojoj karijeri.
        </p>
      </section>
      <Link
        to="/uvod-u-lekciju"
        className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 m-8 text-white hover:text-white rounded"
      >
        Početak
      </Link>
    </>
  );
}
