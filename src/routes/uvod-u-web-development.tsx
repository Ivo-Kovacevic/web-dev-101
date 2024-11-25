import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import RateSection from "../components/RateSection";

export const Route = createFileRoute("/uvod-u-web-development")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <h1>Uvod u web development</h1>
        <p>
          Web development je proces kreiranja i odrzavanja web stranica. Radi se o kombinaciji
          tehnologija, programskih jezika i alata koji omogucavaju kreiranje sadrzaja koji korisnici
          mogu koristiti putem web preglednika. Biti web developer znači kombinirati tehničke
          vještine, kreativnost i sposobnost rješavanja problema kako biste kreirali rješenja koja
          su vizualno privlačna, funkcionalna i korisna.
        </p>
        <p>
          Svatko ima svoje razloge zasto je usao u web development. To je jedna od najtrazenijih
          vjestina u danasnjem svijetu. Upravo zato sto je toliko rasprestranjen i sveprisutan
          postoji i velika potreba za njim. Web developeri mogu imati stvarno sirok spektar
          projekata na kojima rade, pa tako mozete raditi na stvarima poput igre u pregledniku poput
          kamen, skare, papir, preko vlastitog bloga, pa sve do kompleksnih sustava koji
          komuniciraju s bazom podataka. Web development takoder pruza veliku slobodu kad je u
          pitanju izrazavanje kroz dizajn i funkcionalnost. Te na kraju, web development pruza
          mogucnost rada na daljinu, sto je mnogim ljudima jako bitna stavka. Ovo su samo neki od
          razloga, a vi cete takoder otkriti neki svoj koji ce te privuci u ovu sferu.
        </p>
        <p>Neki od alata koji web developeri cesto koriste ukljucuju:</p>
        <ul className="list-disc pl-8">
          <li>Racunalo</li>
          <li>Google</li>
          <li>Text Editor</li>
          <li>CLI</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
        <h2>Umjetna inteligencija</h2>
        <p>
          Umjetna inteligencija je takoder pronasla svoj put u ovom podrucju. Ima mogucnost
          generirati kod u sekundi i mozda se moze ciniti kao rjesenje za mnoge probleme, posebno na
          pocetku vase karijere. Treba naglasiti da bi ju ipak bilo najbolje izbjegavati ili
          minimizirati njeno koristenje u pocetku. Kao pocetnik iznimno je bitno shvatiti razliku
          izmedu programiranja i kodiranja. Iako umjetna inteligencija moze kodirati, ne moze jos
          programirati umjesto vas. Stoga kod koji generira cesto nece biti idealan ili razumljiv.
          Kljucni dio web developmenta nije samo stvaranje funkcionalnog koda vec i razumijevanje
          kako taj kod radi. Te je najbolje na pocetku razviti ovaj mentalitet da bi puno lakse
          rjesavali probleme.
        </p>
      </section>
      <div className="flex gap-4 m-4">
        <Link
          to="/uvod-u-lekciju"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Natrag
        </Link>
        <Link
          to="/html-css-javascript"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Naprijed
        </Link>
      </div>
      <RateSection />
    </>
  );
}
