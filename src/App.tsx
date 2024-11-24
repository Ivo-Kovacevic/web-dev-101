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
            Sad kad imate neku osnovnu predodzbu o tome sta je sta mozemo detaljnije razraditi sve
            tri komponente
          </p>

          <h2>HTML</h2>
          <p>
            Hypertext Markup Language ili HTML je relativno jednostavan jezik koji nam pruza
            mogucnost izrade strukture nase stranice. To nije programski jezik u tradicionalnom
            smislu jer se pomocu njega ne mogu provoditi logicki operacije. Sastoji se od tagova i
            atributa. Tagovi su osnovni gradivni blokovi HTML-a i koriste se za oznacavanje pocetka
            i kraja nekog elementa. Napisani su u uglatim zagradama <code>&lt;&gt;</code>
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
            Osim elemenata koji moraju imati eksplicitno definirane zatvarajuce tagove, postoji i
            void elementi koji ne sadrze nikakav sadrzaj pa im ni nisu potrebni zatvarajucu tagovi.
            To su elementi poput <code>&lt;br&gt;</code> ili <code>&lt;img&gt;</code>
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
              stranice, poveznica na vanjske datoteke te druge podatke koji nisu direktno vidljivi
              na stranici.
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
            JavaScript je programski jezik koji se koristi za dinamičko upravljanje web stranicom.
            To znači da pomoću JavaScript-a možete dodati interakciju, upravljati sadržajem,
            reagirati na korisničke događaje i mnogo više.
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
              <code>function pozdrav(ime)</code> - Definicija funkcije <code>pozdrav</code> koja
              prima argument <code>ime</code>.
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
              <code>console.log(`Broj: {"${i}"}`)</code> - Ispisuje trenutnu vrijednost{" "}
              <code>i</code> u svakoj iteraciji.
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
        <section>
          <h1>Frontend i Backend</h1>
          <p>
            U razvoju web aplikacija, ključna podjela je između <strong>frontenda</strong> i{" "}
            <strong>backenda</strong>. Ovi dijelovi zajedno surađuju kako bi stvorili funkcionalnu,
            skalabilnu i korisnički orijentiranu aplikaciju. Da bi dobili osnovnu predozbu
            pročitajte kraći članak{" "}
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
            Backend je "nevidljivi" dio aplikacije koji radi u pozadini i upravlja podacima,
            poslovnom logikom i komunikacijom s bazama podataka. Sve funkcionalnosti koje frontend
            koristi osigurava backend.
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Jezici za razvoj backenda</strong> uključuju <strong>Node.js</strong>,
              <strong>Python</strong>, <strong>Java</strong>, <strong>Ruby</strong> i
              <strong>PHP</strong>.
            </li>
            <li>
              <strong>Baze podataka</strong> poput <strong>PostgreSQL</strong>,{" "}
              <strong>MySQL</strong> ili
              <strong>MongoDB</strong> koriste se za čuvanje i upravljanje podacima.
            </li>
            <li>
              Backend osigurava sigurnost aplikacije, autentifikaciju korisnika i izvršavanje
              složenih poslovnih pravila.
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
            Za detaljnije razumijevanje API-ja, pročitajte
            <a
              href="https://www.postman.com/api-platform/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Postman vodič za API-je
            </a>
            .
          </p>

          <h2>Zašto su frontend i backend važni?</h2>
          <p>Ova podjela omogućava razvoj skalabilnih i modularnih aplikacija:</p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Frontend</strong> omogućava korisnicima da interaktivno koriste aplikaciju
              putem preglednika.
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
            <strong>Git</strong> je sustav za kontrolu verzija (eng. <em>Version Control System</em>
            ) koji omogućava praćenje svih promjena u projektu. S njim možete:
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
            Git se koristi putem naredbenog retka ili integriran u razne IDE-ove, poput Visual
            Studio Code-a. Pogledajte{" "}
            <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
              službenu dokumentaciju za Git
            </a>
            .
          </p>

          <h2>Što je GitHub?</h2>
          <p>
            <strong>GitHub</strong> je platforma koja omogućava čuvanje i dijeljenje Git
            repozitorija. Osim što je popularna za suradnju, ona također pruža dodatne značajke
            poput:
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
          <p>
            Ako tek započinjete s Gitom, evo nekoliko ključnih naredbi koje će vam biti korisne:
          </p>
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
              <code>git push</code> – Prenosi lokalne promjene na udaljeni repozitorij (npr.
              GitHub).
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
            Uz to, GitHub ima veliku zajednicu gdje možete istražiti tisuće open-source projekata
            ili objaviti vlastite. Posjetite{" "}
            <a href="https://github.com/explore" target="_blank" rel="noopener noreferrer">
              GitHub Explore
            </a>{" "}
            kako biste otkrili inspirativne projekte.
          </p>

          <p>
            Bez obzira radite li na malom osobnom projektu ili velikoj aplikaciji s timom, Git i
            GitHub su alati koji olakšavaju suradnju, upravljanje kodom i sigurno eksperimentiranje
            s novim funkcionalnostima. Naučiti ih koristiti je prvi korak prema učinkovitijem i
            profesionalnijem razvoju softvera.
          </p>
        </section>
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
            <strong>Vue.js</strong> je progresivni JavaScript framework koji je jednostavan za
            učenje i korištenje. Njegov fokus je na fleksibilnosti i integraciji s postojećim
            projektima. Ključne značajke su:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Dvosmjerno povezivanje podataka</strong>: Automatski ažurira DOM kada se
              podaci promijene.
            </li>
            <li>
              <strong>Jednostavna sintaksa</strong>: Pristupačan za početnike, ali dovoljno moćan za
              složene projekte.
            </li>
            <li>
              <strong>Prilagodljivost</strong>: Možete ga koristiti za male dijelove stranica ili
              kao cjeloviti framework.
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
            <strong>Svelte</strong> je relativno nov framework koji preuzima drugačiji pristup
            razvoju aplikacija. Umjesto rada s Virtual DOM-om, Svelte generira optimizirani kod za
            ažuriranje DOM-a tijekom kompilacije. Njegove značajke uključuju:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Nema Virtual DOM-a</strong>: Poboljšava performanse direktnim ažuriranjem
              DOM-a.
            </li>
            <li>
              <strong>Jednostavnost</strong>: Svelte koristi čisti JavaScript i ima intuitivnu
              sintaksu.
            </li>
            <li>
              <strong>Kompilacija unaprijed</strong>: Kompajlira komponente u vrlo efikasan
              JavaScript kod.
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
            potrebama projekta, vašem iskustvu i tehnologijama koje koristite. Ako ste početnik,
            možda biste mogli započeti s Reactom ili Vue.js zbog njihove pristupačnosti i velike
            zajednice.
          </p>
        </section>
        <section>
          <h1>Kako nastaviti dalje</h1>
          <p>
            Čestitamo! Došli ste do kraja ove lekcije i sada imate osnovno razumijevanje HTML-a,
            CSS-a, JavaScripta, te JavaScript frameworkova poput Reacta, Vue.js, Angulara i Sveltea.
            No, kao što znate, svijet web razvoja je širok i uvijek se razvija, pa je važno
            nastaviti učiti i nadograđivati svoje vještine. Evo nekoliko smjernica kako možete
            nastaviti dalje:
          </p>

          <h2>1. Uvijek se oslanjajte na službenu dokumentaciju</h2>
          <p>
            Kada se susretnete s novim frameworkom, bibliotekama ili tehnologijama, najbolje je da
            uvijek krenete od službene dokumentacije. Dokumentacija je najpouzdaniji izvor
            informacija jer je napisana od strane samih autora tehnologije i pruža vam najpreciznije
            i najnovije informacije. Ona će vam pomoći da naučite osnovne koncepte, razumijete
            najbolje prakse i implementirate funkcionalnosti u svom projektu.
          </p>
          <p>Službena dokumentacija obično uključuje:</p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Objašnjenje osnovnih koncepata</strong>: Razumijet ćete osnovne komponente,
              funkcionalnosti i kako sve to radi zajedno.
            </li>
            <li>
              <strong>Primjere koda</strong>: U mnogim slučajevima, dokumentacija uključuje
              praktične primjere kako koristiti različite alate i tehnike.
            </li>
            <li>
              <strong>Upute za instalaciju i postavljanje</strong>: Ako radite s novim alatima ili
              frameworkom, dokumentacija će vam pomoći da ih pravilno postavite.
            </li>
            <li>
              <strong>Reference API-ja</strong>: Ako koristite API-e, dokumentacija će biti vaš
              vodič za razumijevanje svih dostupnih metoda i funkcija.
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
              <strong>Opća primjenjivost:</strong> YouTube tutorijali često se temelje na
              specifičnim projektima i problemima. Iako možete naučiti kako nešto implementirati u
              tom specifičnom slučaju, teško je prenijeti to znanje na druge projekte. Službena
              dokumentacija daje vam osnovne koncepte koji su primjenjivi u svim situacijama.
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
              samostalnog rješavanja problema. Umjesto da se oslanjate na tutorijale, naučit ćete
              kako pronaći odgovore na vlastitu ruku.
            </li>
          </ul>

          <h2>3. Krenite s malim projektima</h2>
          <p>
            Kada se upoznate s osnovama, najbolje je početi raditi na malim projektima kako biste
            primijenili naučeno i stekli iskustvo. Možete početi s jednostavnim web stranicama ili
            aplikacijama, a zatim polako povećavati složenost projekata kako napredujete. Korištenje
            GitHub-a za pohranu i dijeljenje vaših projekata pomoći će vam da razvijate svoje
            vještine suradnje i upravljanja kodom.
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
      </main>
    </>
  );
}
