import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import RateSection from "../components/RateSection";

export const Route = createFileRoute("/html-css-javascript")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <h1>HTML, CSS i JavaScript</h1>
        <p>
          HTML, CSS i JavaScript su osnovne komponente svake web stranice. HTML je zapravo sve sto
          je potrebno da bi se napravila web stranica ali CSS i JavaScript nude mogucnosti koje su
          takorec obavezne u danasnjem svijetu. Ova tri elementa kad se spoje postaju mocan alat
          pomocu kojeg se moze izraditi skoro bilo kakva web stranica koju ste vec vidjeli negdje
          ili koju mozete zamisliti.
        </p>
        <p>
          Procitajte{" "}
          <a
            href="http://brytdesigns.com/html-css-javascript-whats-the-difference"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML vs CSS vs JavaScript
          </a>{" "}
          clanak koji pruza kratak i jasan pregled ovih triju komponenti.
        </p>
        <p>
          Sad kad imate neku osnovnu predodzbu o tome sta je sta mozemo detaljnije razraditi sve tri
          komponente
        </p>

        <h2>HTML</h2>
        <p>
          Hypertext Markup Language ili HTML je relativno jednostavan jezik koji nam pruza mogucnost
          izrade strukture nase stranice. To nije programski jezik u tradicionalnom smislu jer se
          pomocu njega ne mogu provoditi logicki operacije. Sastoji se od tagova i atributa. Tagovi
          su osnovni gradivni blokovi HTML-a i koriste se za oznacavanje pocetka i kraja nekog
          elementa. Napisani su u uglatim zagradama <code>&lt;&gt;</code>
        </p>
        <p>U primjeru:</p>
        <div className="bg-gray-800 pl-2 py-2 rounded">&lt;p&gt;Ovo je paragraf&lt;/p&gt;</div>
        <ul className="list-disc pl-8">
          <li className="my-2">
            <code>&lt;p&gt;</code> je otvarajuci tag
          </li>
          <li className="my-2">
            <code>Ovo je paragraf</code> je proizvoljni tekst ili sadrzaj elementa
          </li>
          <li className="my-2">
            <code>&lt;/p&gt;</code> je zatvarajuci tag
          </li>
        </ul>
        <p>
          Otvarajuci tag u kombinaciji s zatvarajucim se naziva element. HTML ima mnogo tagova a
          nekih 10-ak cete koristiti vrlo cesto.{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pogledajte koji sve tagovi postoje.
          </a>{" "}
          Ne morate ih zapamtiti ali je korisno dobiti predodzbu o njima
        </p>
        <p>
          Osim elemenata koji moraju imati eksplicitno definirane zatvarajuce tagove, postoji i void
          elementi koji ne sadrze nikakav sadrzaj pa im ni nisu potrebni zatvarajucu tagovi. To su
          elementi poput <code>&lt;br&gt;</code> ili <code>&lt;img&gt;</code>
        </p>
        <p>
          Atributi u HTML-u pruzaju dodatne informacije o elementima te se pisu unutar njih.
          Primjerice:
        </p>
        <div className="bg-gray-800 pl-2 py-2 rounded">
          &lt;a href="https://example.com" target="_blank"&gt;Ovo je link&lt;/a&gt;
        </div>
        <ul className="list-disc pl-8">
          <li className="my-2">
            <code>href="https://example.com"</code> odreduje na koju stranicu ce link voditi
          </li>
          <li className="my-2">
            <code>target="_blank"</code> odreduje da se poveznica otvori u novom prozoru
          </li>
        </ul>
        <p>Svi HTML dokumenti imaju istu osnovnu strukturu koja izgleda ovako:</p>
        <div className="bg-gray-800 pl-2 rounded py-2">
          <div>&lt;!DOCTYPE html&gt;</div>
          <div>&lt;html&gt;</div>
          <div className="pl-4">&lt;head&gt;</div>
          <div className="pl-8">&lt;title&gt;Osnovna HTML Struktura&lt;/title&gt;</div>
          <div className="pl-4">&lt;/head&gt;</div>
          <div className="pl-4">&lt;body&gt;</div>
          <div className="pl-8">&lt;p&gt;Osnovna HTML struktura.&lt;/p&gt;</div>
          <div className="pl-4">&lt;/body&gt;</div>
          <div>&lt;/html&gt;</div>
        </div>
        <ul className="list-disc pl-8">
          <li className="my-2">
            <code>&lt;!DOCTYPE html&gt;</code> je deklaracija tipa dokumenta koja obavjestava
            preglednik o verziji HTML-a. U modernim HTML dokumentima (HTML5) je dovoljno napisati
            samo ovakav element.
          </li>
          <li className="my-2">
            <code>&lt;head&gt;</code> sadrzi metapodatke o dokumentu. To su podaci poput naslova
            stranice, poveznica na vanjske datoteke te druge podatke koji nisu direktno vidljivi na
            stranici.
          </li>
          <li className="my-2">
            <code>&lt;body&gt;</code> sadrzi sav sadrzaj koji se moze prikazati korisniku na web
            stranici. Elementi poput prethodno objasnjenog <code>&lt;p&gt;</code> se stavljaju tu.
          </li>
        </ul>
        <p>
          Prodite kroz{" "}
          <a
            href="https://www.w3schools.com/html/html_intro.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uvod u HTML
          </a>{" "}
          i rijesite interaktivne zadatke.
        </p>

        <h2>CSS</h2>
        <p>
          Cascading Style Sheets ili CSS je jezik koji se koristi za stilizaciju HTML elemenata.
          Omogućuje kontrolu nad izgledom i pozicioniranjem elemenata na web stranici. S CSS-om
          možemo definirati boje, veličine fontova, margine, razmake, animacije i još mnogo toga.
        </p>
        <p>CSS se može primijeniti na tri načina:</p>
        <ul className="list-disc pl-8">
          <li className="my-2">
            Inline - stil se definira unutar HTML elementa pomoću atributa <code>style</code>.
          </li>
          <li className="my-2">
            Internal - stilovi se pišu unutar <code>&lt;style&gt;</code> taga unutar{" "}
            <code>&lt;head&gt;</code>.
          </li>
          <li className="my-2">
            External - stilovi se pišu u vanjskoj datoteci s ekstenzijom <code>.css</code>.
          </li>
        </ul>
        <p>Primjer inline stilizacije:</p>
        <div className="bg-gray-800 pl-2 py-2 rounded">
          &lt;p style="color: blue; font-size: 20px;"&gt;Ovo je stilizirani paragraf.&lt;/p&gt;
        </div>
        <p>Primjer internal stilizacije:</p>
        <div className="bg-gray-800 pl-2 py-2 rounded">
          &lt;style&gt;
          <br />
          &nbsp;&nbsp;p {"{ color: red; font-size: 18px; }"}
          <br />
          &lt;/style&gt;
        </div>
        <p>Primjer external stilizacije:</p>
        <div className="bg-gray-800 pl-2 py-2 rounded">
          &lt;link rel="stylesheet" href="styles.css"&gt;
        </div>
        <p>CSS pravilo sastoji se od selektora, svojstva i vrijednosti:</p>
        <div className="bg-gray-800 pl-2 py-2 rounded">
          <div>p {"{"}</div>
          <div className="pl-4">color: green;</div>
          <div className="pl-4">font-size: 16px;</div>
          <div>{"}"}</div>
        </div>
        <ul className="list-disc pl-8">
          <li className="my-2">
            <code>p</code> je selektor koji odabire sve <code>&lt;p&gt;</code> elemente.
          </li>
          <li className="my-2">
            <code>color</code> i <code>font-size</code> su svojstva koja određuju stil.
          </li>
          <li className="my-2">
            <code>green</code> i <code>16px</code> su vrijednosti tih svojstava.
          </li>
        </ul>
        <p>Kako bi CSS bio efektivniji, koristi se hijerarhija specifičnosti:</p>
        <ul className="list-disc pl-8">
          <li className="my-2">Inline stilovi imaju najveću specifičnost.</li>
          <li className="my-2">
            ID selektori (<code>#id</code>) su jači od klasa i elemenata.
          </li>
          <li className="my-2">
            Klase (<code>.class</code>) imaju veću specifičnost od tagova.
          </li>
        </ul>
        <p>
          Pogledajte više o{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS selektorima i svojstvima.
          </a>
        </p>
        <p>
          Prodite kroz{" "}
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
            Uvod u CSS
          </a>{" "}
          i isprobajte primjere.
        </p>

        <h2>JavaScript</h2>
        <p>
          JavaScript je programski jezik koji se koristi za dinamičko upravljanje web stranicom. To
          znači da pomoću JavaScript-a možete dodati interakciju, upravljati sadržajem, reagirati na
          korisničke događaje i mnogo više.
        </p>
        <p>Osnovni elementi JavaScript jezika uključuju:</p>
        <ul className="list-disc pl-8">
          <li className="my-2">
            <strong>Varijable:</strong> Koriste se za pohranu podataka. Mogu se definirati pomoću{" "}
            <code>let</code>, <code>const</code>, ili zastarjelog <code>var</code>.
          </li>
          <li className="my-2">
            <strong>Funkcije:</strong> Blokovi koda koji se izvršavaju kada ih pozovete.
          </li>
          <li className="my-2">
            <strong>Uvjetne naredbe:</strong> Omogućuju izvršavanje različitog koda ovisno o
            uvjetima.
          </li>
          <li className="my-2">
            <strong>Petlje:</strong> Koriste se za ponavljanje koda.
          </li>
        </ul>
        <p>Primjer definiranja i korištenja varijabli:</p>
        <div className="bg-gray-800 pl-2 py-2 rounded">
          <code>
            const ime = "Marko"; <br />
            const godina = 2024; <br />
            console.log(`Zdravo, moje ime je {"${ime}"} i godina je {"${godina}"}.`);
          </code>
        </div>
        <ul className="list-disc pl-8">
          <li>
            <code>const ime = "Marko";</code> - Varijabla <code>ime</code> ima fiksnu vrijednost
            "Marko" koja se ne može mijenjati.
          </li>
          <li>
            <code>console.log</code> - Funkcija koja ispisuje tekst ili podatke u konzolu
            preglednika.
          </li>
          <li>
            <code>{"${ime}"}</code> i <code>{"${godina}"}</code> - Interpolacija stringova u
            template literalima za dinamičko spajanje teksta.
          </li>
        </ul>

        <p>Primjer jednostavne funkcije:</p>
        <div className="bg-gray-800 pl-2 py-2 rounded">
          <code>
            function pozdrav(ime) &#123; <br />
            &nbsp;&nbsp;return `Zdravo, {"${ime}"}!`; <br />
            &#125; <br />
            console.log(pozdrav("Marko"));
          </code>
        </div>
        <ul className="list-disc pl-8">
          <li>
            <code>function pozdrav(ime)</code> - Definicija funkcije <code>pozdrav</code> koja prima
            argument <code>ime</code>.
          </li>
          <li>
            <code>return</code> - Vraća rezultat funkcije kao string sa interpoliranim tekstom.
          </li>
          <li>
            <code>pozdrav("Marko")</code> - Poziva funkciju s argumentom "Marko" i ispisuje
            rezultat.
          </li>
        </ul>

        <p>Primjer uvjetne naredbe:</p>
        <div className="bg-gray-800 pl-2 py-2 rounded">
          <code>
            const broj = 10; <br />
            if (broj &gt; 5) &#123; <br />
            &nbsp;&nbsp;console.log("Broj je veći od 5."); <br />
            &#125; else &#123; <br />
            &nbsp;&nbsp;console.log("Broj nije veći od 5."); <br />
            &#125;
          </code>
        </div>
        <ul className="list-disc pl-8">
          <li>
            <code>if (broj &gt; 5)</code> - Provjerava uvjet je li broj veći od 5.
          </li>
          <li>
            <code>console.log("Broj je veći od 5.")</code> - Izvršava se ako je uvjet točan.
          </li>
          <li>
            <code>else</code> - Blok koda koji se izvršava ako uvjet nije ispunjen.
          </li>
        </ul>

        <p>Primjer petlje:</p>
        <div className="bg-gray-800 pl-2 py-2 rounded">
          <code>
            for (let i = 0; i &lt; 5; i++) &#123; <br />
            &nbsp;&nbsp;console.log(`Broj: {"${i}"}`); <br />
            &#125;
          </code>
        </div>
        <ul className="list-disc pl-8">
          <li>
            <code>for</code> - Petlja koja ponavlja blok koda određeni broj puta.
          </li>
          <li>
            <code>let i = 0</code> - Inicijalizira brojač <code>i</code> na vrijednost 0.
          </li>
          <li>
            <code>i &lt; 5</code> - Uvjet koji određuje kada se petlja završava.
          </li>
          <li>
            <code>i++</code> - Povećava vrijednost brojača <code>i</code> za 1 nakon svake
            iteracije.
          </li>
          <li>
            <code>console.log(`Broj: {"${i}"}`)</code> - Ispisuje trenutnu vrijednost <code>i</code>{" "}
            u svakoj iteraciji.
          </li>
        </ul>
        <p>
          JavaScript je izuzetno moćan i fleksibilan jezik. Prodite prve korake na stranici{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Developer Network (MDN)
          </a>{" "}
          Nakon toga isprobajte interaktivne primjere na{" "}
          <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">
            W3Schools.
          </a>
        </p>
      </section>
      <div className="flex gap-4 m-4">
        <Link
          to="/uvod-u-web-development"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Natrag
        </Link>
        <Link
          to="/frontend-backend"
          className="no-underline bg-cyan-600 hover:bg-cyan-800 px-8 py-4 text-white hover:text-white rounded"
        >
          Naprijed
        </Link>
      </div>
      <RateSection />
    </>
  );
}
