import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
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
