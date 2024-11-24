import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/javascript-frameworkovi")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <h1>JavaScript Frameworkovi</h1>
        <p>
          JavaScript frameworkovi su unaprijed definirane biblioteke i strukture koje olakšavaju
          razvoj aplikacija pružajući gotove funkcionalnosti i alate za brži rad. Oni omogućuju
          organiziraniji i modularniji kod, smanjujući vrijeme potrebno za razvoj složenih
          projekata. Evo nekoliko najpopularnijih frameworkova:
        </p>

        <h2>React</h2>
        <p>
          <strong>React</strong> je biblioteka otvorenog koda koju je razvio Facebook za izgradnju
          korisničkih sučelja. Iako se često naziva "frameworkom", tehnički je biblioteka za
          izgradnju komponenti. Neke značajke uključuju:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Komponentni pristup</strong>: Aplikacije se grade pomoću malih, ponovno
            upotrebljivih komponenti.
          </li>
          <li>
            <strong>Virtual DOM</strong>: Poboljšava performanse ažuriranjem samo promijenjenih
            dijelova DOM-a.
          </li>
          <li>
            <strong>Velika zajednica</strong>: Bogata dokumentacija i mnogo dodataka za proširenje
            funkcionalnosti.
          </li>
        </ul>
        <p>
          React ima odlicnu{" "}
          <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
            dokumentaciju
          </a>{" "}
          sa primjerima i stvarno je najbolji nacin za nauciti React kroz njihovu dokumentaciju .
        </p>

        <h2>Vue.js</h2>
        <p>
          <strong>Vue.js</strong> je progresivni JavaScript framework koji je jednostavan za učenje
          i korištenje. Njegov fokus je na fleksibilnosti i integraciji s postojećim projektima.
          Ključne značajke su:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Dvosmjerno povezivanje podataka</strong>: Automatski ažurira DOM kada se podaci
            promijene.
          </li>
          <li>
            <strong>Jednostavna sintaksa</strong>: Pristupačan za početnike, ali dovoljno moćan za
            složene projekte.
          </li>
          <li>
            <strong>Prilagodljivost</strong>: Možete ga koristiti za male dijelove stranica ili kao
            cjeloviti framework.
          </li>
        </ul>
        <p>
          Pogledajte uvod na{" "}
          <a
            href="https://vuejs.org/guide/introduction.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            službenoj stranici Vue.js
          </a>
          .
        </p>

        <h2>Angular</h2>
        <p>
          <strong>Angular</strong> je sveobuhvatan framework koji je razvio Google za izradu
          dinamičnih aplikacija. Koristi TypeScript kao osnovu i ima širok raspon ugrađenih
          značajki. Njegove glavne karakteristike uključuju:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Robusnost</strong>: Sveobuhvatan alat s ugrađenim rješenjima za rutiranje,
            validaciju i animacije.
          </li>
          <li>
            <strong>Modularna arhitektura</strong>: Dijeljenje aplikacija u module olakšava
            održavanje i skalabilnost.
          </li>
          <li>
            <strong>Podrška za velike aplikacije</strong>: Dizajniran za složene i velike
            aplikacije.
          </li>
        </ul>
        <p>
          Prođite kroz{" "}
          <a
            href="https://angular.dev/tutorials/learn-angular"
            target="_blank"
            rel="noopener noreferrer"
          >
            službenu stranicu Angulara
          </a>
          .
        </p>

        <h2>Svelte</h2>
        <p>
          <strong>Svelte</strong> je relativno nov framework koji preuzima drugačiji pristup razvoju
          aplikacija. Umjesto rada s Virtual DOM-om, Svelte generira optimizirani kod za ažuriranje
          DOM-a tijekom kompilacije. Njegove značajke uključuju:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Nema Virtual DOM-a</strong>: Poboljšava performanse direktnim ažuriranjem DOM-a.
          </li>
          <li>
            <strong>Jednostavnost</strong>: Svelte koristi čisti JavaScript i ima intuitivnu
            sintaksu.
          </li>
          <li>
            <strong>Kompilacija unaprijed</strong>: Kompajlira komponente u vrlo efikasan JavaScript
            kod.
          </li>
        </ul>
        <p>
          Pogledajte{" "}
          <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
            službenu stranicu Sveltea
          </a>
          .
        </p>

        <p>
          Svaki od ovih frameworkova ima svoje prednosti i specifičnosti. Izbor pravog ovisi o
          potrebama projekta, vašem iskustvu i tehnologijama koje koristite. Ako ste početnik, možda
          biste mogli započeti s Reactom ili Vue.js zbog njihove pristupačnosti i velike zajednice.
        </p>
      </section>
      <div className="flex gap-4 m-4">
        <Link
          to="/git-github"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Natrag
        </Link>
        <Link
          to="/kako-dalje"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Naprijed
        </Link>
      </div>
    </>
  );
}
