import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/uvod-u-lekciju")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section>
        <h1>Cilj ove lekcije</h1>
        <p>
          Cilj ove lekcije je pružiti polaznicima solidno razumijevanje osnovnih tehnologija koje
          čine temelje web developmenta: HTML, CSS, JavaScript, Git, i GitHub. Također, cilj je
          potaknuti polaznike na samostalno učenje i istraživanje novih tehnologija, s naglaskom na
          praktičnu primjenu tih tehnologija u izgradnji web stranica i aplikacija. Ova lekcija
          također ima za cilj razviti osnovne vještine rješavanja problema, što je ključno za uspjeh
          u web developmentu.
        </p>
      </section>
      <section>
        <h1>Kako ova lekcija funkcionira</h1>
        <p>
          Ova lekcija je strukturirana u nekoliko sekcija, svaka posvećena različitoj temi. Svaka
          sekcija uključuje teorijske i praktične komponente koje omogućuju polaznicima da se
          upoznaju s osnovama, a zatim ih primijene u praktičnim projektima.
        </p>
        <p>Svaka sekcija sadrži:</p>
        <ul className="list-disc pl-8">
          <li>Objašnjenje važnosti teme</li>
          <li>Kratak uvod u osnovne pojmove</li>
          <li>Tehničke upute i resurse za daljnje učenje</li>
          <li>Linkove na vanjske izvore, tutorijale</li>
        </ul>
        <p>
          Ova lekcija je dizajnirana tako da omogućuje samostalno učenje, a u isto vrijeme nudi
          podršku kroz vanjske izvore i resurse.
        </p>
      </section>
      <div className="flex gap-4 m-4">
        <Link
          to="/"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Natrag
        </Link>
        <Link
          to="/uvod-u-web-development"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Naprijed
        </Link>
      </div>
    </>
  );
}
