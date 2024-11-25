import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import RateSection from "../components/RateSection";

export const Route = createFileRoute("/frontend-backend")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <h1>Frontend i Backend</h1>
        <p>
          U razvoju web aplikacija, ključna podjela je između <strong>frontenda</strong> i{" "}
          <strong>backenda</strong>. Ovi dijelovi zajedno surađuju kako bi stvorili funkcionalnu,
          skalabilnu i korisnički orijentiranu aplikaciju. Da bi dobili osnovnu predozbu pročitajte
          kraći članak{" "}
          <a
            href="https://www.pluralsight.com/resources/blog/software-development/front-end-vs-back-end"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend vs Backend vs FullStack
          </a>
        </p>

        <h2>Frontend</h2>
        <p>
          Frontend je "vidljivi" dio aplikacije. To je sve što korisnik vidi i s čime izravno
          komunicira putem preglednika. Njegova svrha je pružiti vizualno privlačno i intuitivno
          korisničko sučelje (UI).
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Frontend tehnologije</strong> uključuju <strong>HTML</strong>,{" "}
            <strong>CSS</strong> i<strong>JavaScript</strong>, koje definiraju strukturu, stil i
            interaktivnost stranice.
          </li>
          <li>
            <strong>Biblioteke i frameworkovi</strong> poput <strong>React</strong>,
            <strong>Vue.js</strong> i <strong>Angular</strong> omogućuju dinamičnost i stvaranje
            kompleksnih web aplikacija.
          </li>
          <li>
            Frontend često uključuje <strong>responzivni dizajn</strong> kako bi aplikacija
            izgledala dobro na različitim uređajima poput mobitela, tableta i računala.
          </li>
        </ul>
        <p>
          Cilj frontenda je pružiti najbolje moguće korisničko iskustvo. Pročitajte Cloudinary-jev
          članak o{" "}
          <a
            href="https://cloudinary.com/guides/front-end-development/front-end-development-the-complete-guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            vodiču za frontend
          </a>
          .
        </p>

        <h2>Backend</h2>
        <p>
          Backend je "nevidljivi" dio aplikacije koji radi u pozadini i upravlja podacima, poslovnom
          logikom i komunikacijom s bazama podataka. Sve funkcionalnosti koje frontend koristi
          osigurava backend.
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Jezici za razvoj backenda</strong> uključuju <strong>Node.js</strong>,
            <strong>Python</strong>, <strong>Java</strong>, <strong>Ruby</strong> i
            <strong>PHP</strong>.
          </li>
          <li>
            <strong>Baze podataka</strong> poput <strong>PostgreSQL</strong>, <strong>MySQL</strong>{" "}
            ili
            <strong>MongoDB</strong> koriste se za čuvanje i upravljanje podacima.
          </li>
          <li>
            Backend osigurava sigurnost aplikacije, autentifikaciju korisnika i izvršavanje složenih
            poslovnih pravila.
          </li>
        </ul>
        <p>
          Pročitajte{" "}
          <a
            href="https://www.coursera.org/articles/back-end-developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            vodič za backend razvoj
          </a>
          .
        </p>

        <h2>Komunikacija između frontenda i backenda</h2>
        <p>
          Frontend i backend međusobno komuniciraju putem API-ja (Application Programming
          Interface), što omogućava razmjenu podataka i izvršavanje funkcija.
        </p>
        <ul className="list-disc pl-8">
          <li>
            Najčešće se koristi <strong>REST API</strong>, gdje se podaci razmjenjuju putem HTTP
            zahtjeva (GET, POST, PUT, DELETE).
          </li>
          <li>
            Alternativno, koristi se <strong>GraphQL</strong>, koji omogućava klijentu precizno
            definiranje podataka koje želi.
          </li>
          <li>
            Podaci se obično šalju u formatu <strong>JSON</strong> (JavaScript Object Notation),
            koji je lagan i jednostavan za rad.
          </li>
        </ul>
        <p>
          Za detaljnije razumijevanje API-ja, pročitajte{" "}
          <a href="https://www.postman.com/api-platform/" target="_blank" rel="noopener noreferrer">
            Postman vodič za API-je
          </a>
          .
        </p>

        <h2>Zašto su frontend i backend važni?</h2>
        <p>Ova podjela omogućava razvoj skalabilnih i modularnih aplikacija:</p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Frontend</strong> omogućava korisnicima da interaktivno koriste aplikaciju putem
            preglednika.
          </li>
          <li>
            <strong>Backend</strong> obrađuje zahtjeve, upravlja podacima i osigurava stabilnost i
            sigurnost aplikacije.
          </li>
        </ul>
        <p>
          Zajedno, frontend i backend omogućavaju razvoj potpunih aplikacija koje su funkcionalne,
          sigurne i jednostavne za korištenje.
        </p>
      </section>
      <div className="flex gap-4 m-4">
        <Link
          to="/html-css-javascript"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Natrag
        </Link>
        <Link
          to="/git-github"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Naprijed
        </Link>
      </div>
      <RateSection />
    </>
  );
}
