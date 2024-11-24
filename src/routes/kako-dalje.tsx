import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/kako-dalje")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <h1>Kako nastaviti dalje</h1>
        <p>
          Čestitamo! Došli ste do kraja ove lekcije i sada imate osnovno razumijevanje HTML-a,
          CSS-a, JavaScripta, te JavaScript frameworkova poput Reacta, Vue.js, Angulara i Sveltea.
          No, kao što znate, svijet web razvoja je širok i uvijek se razvija, pa je važno nastaviti
          učiti i nadograđivati svoje vještine. Evo nekoliko smjernica kako možete nastaviti dalje:
        </p>

        <h2>1. Uvijek se oslanjajte na službenu dokumentaciju</h2>
        <p>
          Kada se susretnete s novim frameworkom, bibliotekama ili tehnologijama, najbolje je da
          uvijek krenete od službene dokumentacije. Dokumentacija je najpouzdaniji izvor informacija
          jer je napisana od strane samih autora tehnologije i pruža vam najpreciznije i najnovije
          informacije. Ona će vam pomoći da naučite osnovne koncepte, razumijete najbolje prakse i
          implementirate funkcionalnosti u svom projektu.
        </p>
        <p>Službena dokumentacija obično uključuje:</p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Objašnjenje osnovnih koncepata</strong>: Razumijet ćete osnovne komponente,
            funkcionalnosti i kako sve to radi zajedno.
          </li>
          <li>
            <strong>Primjere koda</strong>: U mnogim slučajevima, dokumentacija uključuje praktične
            primjere kako koristiti različite alate i tehnike.
          </li>
          <li>
            <strong>Upute za instalaciju i postavljanje</strong>: Ako radite s novim alatima ili
            frameworkom, dokumentacija će vam pomoći da ih pravilno postavite.
          </li>
          <li>
            <strong>Reference API-ja</strong>: Ako koristite API-e, dokumentacija će biti vaš vodič
            za razumijevanje svih dostupnih metoda i funkcija.
          </li>
        </ul>
        <p>
          Na primjer, za React možete posjetiti{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            službenu React dokumentaciju
          </a>
          , a za Vue.js{" "}
          <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
            službenu Vue dokumentaciju
          </a>
          . Ove stranice sadrže sve informacije koje će vam pomoći da nastavite učiti i
          implementirati tehnologije u različitim projektima.
        </p>

        <h2>2. Zašto je bolje čitati dokumentaciju nego gledati YouTube videe?</h2>
        <p>
          Iako su YouTube videi popularan način za učenje novih vještina, postoji nekoliko razloga
          zašto je čitanje dokumentacije bolji pristup, posebno u kontekstu dugoročnog učenja i
          razvoja karijere u web razvoju:
        </p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Opća primjenjivost:</strong> YouTube tutorijali često se temelje na specifičnim
            projektima i problemima. Iako možete naučiti kako nešto implementirati u tom specifičnom
            slučaju, teško je prenijeti to znanje na druge projekte. Službena dokumentacija daje vam
            osnovne koncepte koji su primjenjivi u svim situacijama.
          </li>
          <li>
            <strong>Ažurnost:</strong> YouTube videi mogu biti zastarjeli i ne pokrivaju najnovije
            promjene u frameworkovima ili bibliotekama. Dokumentacija se redovito ažurira i
            osigurava da imate pristup najnovijim informacijama.
          </li>
          <li>
            <strong>Detalji i dubina:</strong> Dokumentacija često ide u dublje detalje i pokriva
            sve aspekte tehnologije, dok YouTube videi mogu preskočiti bitne informacije zbog
            vremena ili fokusa na jednostavniji sadržaj.
          </li>
          <li>
            <strong>Samostalno učenje:</strong> Čitanje dokumentacije razvija vašu sposobnost
            samostalnog rješavanja problema. Umjesto da se oslanjate na tutorijale, naučit ćete kako
            pronaći odgovore na vlastitu ruku.
          </li>
        </ul>

        <h2>3. Krenite s malim projektima</h2>
        <p>
          Kada se upoznate s osnovama, najbolje je početi raditi na malim projektima kako biste
          primijenili naučeno i stekli iskustvo. Možete početi s jednostavnim web stranicama ili
          aplikacijama, a zatim polako povećavati složenost projekata kako napredujete. Korištenje
          GitHub-a za pohranu i dijeljenje vaših projekata pomoći će vam da razvijate svoje vještine
          suradnje i upravljanja kodom.
        </p>

        <h2>Zaključak</h2>
        <p>
          Učenje novih tehnologija zahtijeva strpljenje i upornost, no s vremenom ćete postati
          vještiji u razvoju web aplikacija. Najvažniji korak je kontinuirano učenje i primjena
          onoga što ste naučili. Službena dokumentacija je vaš najbolji prijatelj na tom putu jer
          vam omogućava da razumijete tehnologiju na dubokom nivou i primijenite stečeno znanje u
          različitim kontekstima. Kada se naviknete na rad s dokumentacijom, bit ćete sposobni
          samostalno rješavati izazove i implementirati rješenja koja će trajati.
        </p>
      </section>
      <div className="flex gap-4 m-4">
        <Link
          to="/javascript-frameworkovi"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Natrag
        </Link>
      </div>
    </>
  );
}
