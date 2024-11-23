export default function App() {
  return (
    <>
      <main className="flex flex-col items-center">
        <nav className="text-6xl p-4 max-w-[700px] w-full">Kako započeti s web developmentom</nav>
        <section>
          <p>
            Ova lekcija osmišljena je s ciljem pružanja temeljitog razumijevanja osnova web
            developmenta. Kroz seriju sekcija, polaznici će biti u mogućnosti ne samo naučiti
            osnovne tehnologije i koncepte web developmenta, već i steći vještine potrebne za
            samostalno istraživanje i daljnje usavršavanje u ovom području. Struktura lekcije
            slijedi logičan razvoj, počevši s osnovnim uvodom, a zatim se postepeno usmjerava na
            specifične tehnologije i alate koje će polaznicima omogućiti da nastave dalje u svojoj
            karijeri.
          </p>
        </section>
        <section>
          <h1>Cilj ove lekcije</h1>
          <p>
            Cilj ove lekcije je pružiti polaznicima solidno razumijevanje osnovnih tehnologija koje
            čine temelje web developmenta: HTML, CSS, JavaScript, Git, i GitHub. Također, cilj je
            potaknuti polaznike na samostalno učenje i istraživanje novih tehnologija, s naglaskom
            na praktičnu primjenu tih tehnologija u izgradnji web stranica i aplikacija. Ova lekcija
            također ima za cilj razviti osnovne vještine rješavanja problema, što je ključno za
            uspjeh u web developmentu.
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
        <section>
          <h1>Uvod u web development</h1>
          <p>
            Web development je proces kreiranja i odrzavanja web stranica. Radi se o kombinaciji
            tehnologija, programskih jezika i alata koji omogucavaju kreiranje sadrzaja koji
            korisnici mogu koristiti putem web preglednika. Biti web developer znači kombinirati
            tehničke vještine, kreativnost i sposobnost rješavanja problema kako biste kreirali
            rješenja koja su vizualno privlačna, funkcionalna i korisna.
          </p>
          <p>
            Svatko ima svoje razloge zasto je usao u web development. To je jedna od najtrazenijih
            vjestina u danasnjem svijetu. Upravo zato sto je toliko rasprestranjen i sveprisutan
            postoji i velika potreba za njim. Web developeri mogu imati stvarno sirok spektar
            projekata na kojima rade, pa tako mozete raditi na stvarima poput igre u pregledniku
            poput kamen, skare, papir, preko vlastitog bloga, pa sve do kompleksnih sustava koji
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
            generirati kod u sekundi i mozda se moze ciniti kao rjesenje za mnoge probleme, posebno
            na pocetku vase karijere. Treba naglasiti da bi ju ipak bilo najbolje izbjegavati ili
            minimizirati njeno koristenje u pocetku. Kao pocetnik iznimno je bitno shvatiti razliku
            izmedu programiranja i kodiranja. Iako umjetna inteligencija moze kodirati, ne moze jos
            programirati umjesto vas. Stoga kod koji generira cesto nece biti idealan ili razumljiv.
            Kljucni dio web developmenta nije samo stvaranje funkcionalnog koda vec i razumijevanje
            kako taj kod radi. Te je najbolje na pocetku razviti ovaj mentalitet da bi puno lakse
            rjesavali probleme.
          </p>
        </section>
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
            Procitaj{" "}
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
            Sad kad imas neku osnovnu predodzbu o tome sta je sta mozemo detaljnije razraditi sve
            tri komponente
          </p>

          <h2>HTML</h2>
          <p>
            Hypertext Markup Language ili HTML je relativno jednostavan jezik koji nam pruza
            mogucnost izrade strukture nase stranice. To nije programski jezik u tradicionalnom
            smislu jer se pomocu njega ne mogu provoditi logicki operacije. Sastoji se od tagova i
            atributa. Tagovi su osnovni gradivni blokovi HTML-a i koriste se za oznacavanje pocetka
            i kraja nekog elementa. Napisani su u uglatim zagradama <span>&lt;&gt;</span>
          </p>
          <p>U primjeru:</p>
          <div className="bg-gray-800 pl-2 py-2 rounded">&lt;p&gt;Ovo je paragraf&lt;/p&gt;</div>
          <ul className="list-disc pl-8">
            <li className="my-2">
              <span>&lt;p&gt;</span> je otvarajuci tag
            </li>
            <li className="my-2">
              <span>Ovo je paragraf</span> je proizvoljni tekst ili sadrzaj elementa
            </li>
            <li className="my-2">
              <span>&lt;/p&gt;</span> je zatvarajuci tag
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
            Osim elemenata koji moraju imati eksplicitno definirane zatvarajuce tagove, postoji i
            void elementi koji ne sadrze nikakav sadrzaj pa im ni nisu potrebni zatvarajucu tagovi.
            To su elementi poput <span>&lt;br&gt;</span> ili <span>&lt;img&gt;</span>
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
              <span>href="https://example.com"</span> odreduje na koju stranicu ce link voditi
            </li>
            <li className="my-2">
              <span>target="_blank"</span> odreduje da se poveznica otvori u novom prozoru
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
              <span>&lt;!DOCTYPE html&gt;</span> je deklaracija tipa dokumenta koja obavjestava
              preglednik o verziji HTML-a. U modernim HTML dokumentima (HTML5) je dovoljno napisati
              samo ovakav element.
            </li>
            <li className="my-2">
              <span>&lt;head&gt;</span> sadrzi metapodatke o dokumentu. To su podaci poput naslova
              stranice, poveznica na vanjske datoteke te druge podatke koji nisu direktno vidljivi
              na stranici.
            </li>
            <li className="my-2">
              <span>&lt;body&gt;</span> je sadrzi sav sadrzaj koji se moze prikazati korisniku na
              web stranici. Elementi poput prethodno objasnjenog <span>&lt;p&gt;</span> se stavljaju
              tu.
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
            i rijesite zadatak na kraju.
          </p>

          <h2>CSS</h2>
          <p>tekst</p>

          <h2>JavaScript</h2>
          <p>tekst</p>
        </section>
        <section>
          <h1>Frontend i Backend</h1>
          <p>TEKST</p>
        </section>
        <section>
          <h1>Git i GitHub</h1>
          <p>TEKST</p>
        </section>
        <section>
          <h1>JavaScript framework-ovi</h1>
          <p>TEKST</p>
        </section>
        <section>
          <h1>Kako nastaviti dalje</h1>
          <p>TEKST</p>
        </section>
      </main>
    </>
  );
}
