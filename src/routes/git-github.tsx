import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/git-github")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <h1>Git i GitHub</h1>
        <p>
          U svijetu razvoja softvera,{" "}
          <a
            href="https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Git</strong> i <strong>GitHub</strong>
          </a>{" "}
          su ključni alati koji omogućavaju timovima i pojedincima učinkovito upravljanje kodom,
          suradnju i praćenje promjena u projektu. Razumijevanje kako ih koristiti je osnovna
          vještina svakog programera.
        </p>

        <h2>Što je Git?</h2>
        <p>
          <strong>Git</strong> je sustav za kontrolu verzija (eng. <em>Version Control System</em>)
          koji omogućava praćenje svih promjena u projektu. S njim možete:
        </p>
        <ul className="list-disc pl-8">
          <li>
            Kreirati različite verzije koda i sigurno eksperimentirati na novim funkcionalnostima
            bez utjecaja na glavnu verziju.
          </li>
          <li>Jednostavno se vratiti na prethodnu verziju ako nešto pođe po zlu.</li>
          <li>
            Raditi paralelno na više dijelova projekta koristeći grane (<em>branches</em>).
          </li>
        </ul>
        <p>
          Git se koristi putem naredbenog retka ili integriran u razne IDE-ove, poput Visual Studio
          Code-a. Pogledajte{" "}
          <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
            službenu dokumentaciju za Git
          </a>
          .
        </p>

        <h2>Što je GitHub?</h2>
        <p>
          <strong>GitHub</strong> je platforma koja omogućava čuvanje i dijeljenje Git repozitorija.
          Osim što je popularna za suradnju, ona također pruža dodatne značajke poput:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Kolaboracije u timu</strong> – Više programera može raditi na istom projektu
            koristeći "pull requestove" i recenzije koda.
          </li>
          <li>
            <strong>Praćenje problema</strong> – Koristeći "issues" možete organizirati i pratiti
            zadatke te prijaviti greške.
          </li>
          <li>
            <strong>Hostanje projekata</strong> – Možete javno objaviti svoj kod ili ga držati
            privatnim. GitHub je izvrstan za otvorene projekte (<em>open-source</em>).
          </li>
        </ul>
        <p>
          GitHub također omogućava integraciju s raznim CI/CD alatima i drugim uslugama kako bi se
          procesi razvoja automatizirali. Istražite{" "}
          <a href="https://docs.github.com/en" target="_blank" rel="noopener noreferrer">
            službenu GitHub dokumentaciju
          </a>
          .
        </p>

        <h2>Osnovne naredbe Gita</h2>
        <p>Ako tek započinjete s Gitom, evo nekoliko ključnih naredbi koje će vam biti korisne:</p>
        <ul className="list-disc pl-8">
          <li>
            <code>git init</code> – Inicijalizira novi Git repozitorij u trenutnoj mapi.
          </li>
          <li>
            <code>git clone [URL]</code> – Preuzima postojeći repozitorij s GitHub-a.
          </li>
          <li>
            <code>git add [ime datoteke]</code> – Dodaje datoteku na popis za praćenje promjena.
          </li>
          <li>
            <code>git commit -m "Opis promjene"</code> – Sprema promjene u repozitorij s porukom.
          </li>
          <li>
            <code>git push</code> – Prenosi lokalne promjene na udaljeni repozitorij (npr. GitHub).
          </li>
          <li>
            <code>git pull</code> – Preuzima i spaja promjene s udaljenog repozitorija.
          </li>
        </ul>
        <p>
          Za bolje upoznavanje s naredbama isprobajte{" "}
          <a href="https://learngitbranching.js.org/" target="_blank" rel="noopener noreferrer">
            Learn Git Branching igru
          </a>
          .
        </p>

        <p>Git i GitHub su neprocjenjivi alati zbog:</p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Kolaboracije</strong> – Omogućuju timovima da zajedno rade na istom projektu,
            bez straha od prepisivanja promjena.
          </li>
          <li>
            <strong>Praćenja povijesti</strong> – Svaka promjena u projektu je dokumentirana, što
            olakšava pregled razvoja.
          </li>
          <li>
            <strong>Sigurnosti</strong> – S Gitom je vaš kod siguran, a GitHub osigurava dodatne
            mehanizme za privatnost i autentifikaciju.
          </li>
          <li>
            <strong>Automatizacije</strong> – GitHub Actions omogućava stvaranje CI/CD procesa za
            testiranje i implementaciju aplikacija.
          </li>
        </ul>
        <p>
          Uz to, GitHub ima veliku zajednicu gdje možete istražiti tisuće open-source projekata ili
          objaviti vlastite. Posjetite{" "}
          <a href="https://github.com/explore" target="_blank" rel="noopener noreferrer">
            GitHub Explore
          </a>{" "}
          kako biste otkrili inspirativne projekte.
        </p>

        <p>
          Bez obzira radite li na malom osobnom projektu ili velikoj aplikaciji s timom, Git i
          GitHub su alati koji olakšavaju suradnju, upravljanje kodom i sigurno eksperimentiranje s
          novim funkcionalnostima. Naučiti ih koristiti je prvi korak prema učinkovitijem i
          profesionalnijem razvoju softvera.
        </p>
      </section>
      <div className="flex gap-4 m-4">
        <Link
          to="/frontend-backend"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Natrag
        </Link>
        <Link
          to="/javascript-frameworkovi"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Naprijed
        </Link>
      </div>
    </>
  );
}
