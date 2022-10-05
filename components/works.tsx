import { WorksItem } from "./works-item"
// @ts-ignore
import Fade from "react-reveal/Fade"

/* eslint-disable-next-line */
export interface WorksProps {}

export function Works({}: WorksProps) {
  return (
    <div id="works" className="overflow-hidden max-w-7xl  mx-auto ">
      <p className="mx-auto  max-w-7xl pl-11 pb-4 text-xs font-normal italic tracking-widest text-gray-400 2xl:pl-0">
        {" "}
        {"< works >"}{" "}
      </p>
      <Fade left>
        <h1 className="mx-auto px-11 pb-5 font-Syne text-3xl font-extrabold tracking-widest text-red-300 sm:text-7xl">
          PORTFOLIO
        </h1>
      </Fade>
      <Fade right>
      <WorksItem
          title={"Valmis sivusto esim. kissakahvilalle"}
          text={
            "Valmis sivusto myyntiin esimerkiksi kissakahvilalle. Templatesta löytyy useampi visuaalisesti moderni sivu. Tämän templaten kanssa tuli vähän hassuteltua ja kokeiltua kaikenlaisia uusia pieniä juttuja tyylittelyssä. Koko frontend on yhden miehen sähläys. Lisäsin sivulle myös yhteydenottolomakkeen käyttäen sendgridin rajapintaa. Menu sivulla käytetty hyödyksi headlessui librarya. "
          }
          imgSrc={"/katti-cafe-screenshot.png"}
          imgWidth={1152}
          imgHeight={4642}
          tag1="NextJS / JavaScript / TailwindCSS / SendGrid API /"
          link={"https://templates-cat-cafe.netlify.app/"}
        />    
      </Fade>
      <Fade left>
      <WorksItem
          title={"Tunturiretki.fi verkkosivut"}
          text={
            "Jalkahoitola Tunturiretken verkkosivut asiakkaalle tilaustyönä alusta loppuun. Vastasin itse projektissa front-end puolesta, mutta pääsin myös toteuttamaan esimerkiksi asiakkaan valitseman ajanvarausjärjestelmän integraation sivulle. Tein ensin raakaversion asiakkaalle ulkoasusta oman inspiraation mukaan, jonka jälkeen sivua hiottiin asiakkaan mieltymyksien mukaiseksi blokki kerrallaan."
          }
          imgSrc={"/tunturiretki-screenshot-pienempi.png"}
          imgWidth={922}
          imgHeight={6164}
          tag1="NextJS / TypeScript / TailwindCSS / Nx / API / Intergration"
          link={"https://www.tunturiretki.fi/"}
        />    
      </Fade>
      <Fade right>
      <WorksItem
          title={"Valmis sivusto tatuointi-liikkeelle"}
          text={
            "Valmis sivusto myyntiin esim. tatuointiliikkeelle. Template on moderni ns. onepager ja mahdollisuus esimerkiksi lisätä oma instagram tai facebook feedi ajankohtaista osioon. Ota yhteyttä -kohdasta löytyy myös formi jonka kautta saa kätevästi lähetettyä viestin esim. tatuointiliikkeen sähköpostiin. Koko frontend on yhden miehen sähläys. Live preview linkki kuvan alla. "
          }
          imgSrc={"/tattoo-shop-screenshot.png"}
          imgWidth={1920}
          imgHeight={8186}
          tag1="React / NextJS / TypeScript / TailwindCSS / Nx monorepo "
          link={"https://tattoo-shop.demo.hiisi.digital/"}
        />
      </Fade>
      <Fade left>
      <WorksItem
          title={"Valmis sivusto esim. kampaamolle"}
          text={
            "Valmis sivusto myyntiin esim. kampaamolle. Templatesta löytyy useampi visuaalisesti moderni sivu, ja mahdollisuus esimerkiksi lisätä oma instagram tai facebook feedi ajankohtaista osioon. Ota yhteyttä -pagelta löytyy myös formi jonka kautta saa kätevästi lähetettyä viestin esim. kampaamon sähköpostiin. Koko frontend on yhden miehen sähläys. Live preview linkki kuvan alla. "
          }
          imgSrc={"/hius-site-screnshot.png"}
          imgWidth={1920}
          imgHeight={8428}
          tag1="React / NextJS / TypeScript / TailwindCSS / Nx monorepo "
          link={"https://kampaamo.demo.hiisi.digital/"}
        />
      </Fade>
      <Fade right>
      <WorksItem
          title={"hiisi.digital site"}
          text={
            "Hiisi Digital Oy:n verkkosivut. Sivut kasattu kahden henkilön voimin, käyttäen tuttua ja turvallista nextjs, typescript ja tailwindcss stackia. Tämän pohjalla on myös käytetty nx workspacea ja monorepoa, jonka pohjilta seuraavatkin projektit on tarkoitus toteuttaa."
          }
          imgSrc={"/hiisi-digital-site-screenshot.png"}
          imgWidth={1920}
          imgHeight={6291}
          tag1="React / NextJS / TypeScript / TailwindCSS / Nx / API"
          link={"https://hiisi.digital"}
        />
      </Fade>
      <Fade left>
      <WorksItem
          title={"personal portfolio"}
          text={
            "Oma personal website, joka on kasattu uudestaan entisen HTML/CSS-sivun tieltä. Sivusto on tehty stackilla, jonka olen löytänyt mieluisaksi käyttää ja jolla työskentely on sulavaa."
          }
          imgSrc={"/villetoimelacom-screenshot.png"}
          imgWidth={1920}
          imgHeight={7618}
          tag1="React / NextJS / TypeScript / TailwindCSS"
          link={"https://gitlab.com/villetoimela/villetoimela-site"}
        />
      </Fade>
      <Fade right>
      <WorksItem
          title={"ez-math-game"}
          text={
            "Ideana oli tehdä matematiikan harjoitteluun tarkoitettu pieni webbiappi tyttären käyttöön. Tässä projektissa sai käyttää react hookkeja ja kirjoittaa javascriptiä enemmän kuin alunperin ajattelin. Projektissa oli harvinaisen paljon käytössä Google ja Stack Overflow ja homma alkoikin nopeasti täyttyä eri sivustojen copypastella ja siitä tuli sekamelska, mutta loppujaan homman sai kasaan ja toimimaan."
          }
          imgSrc={"/ez-math-game-screenshot.png"}
          imgWidth={1920}
          imgHeight={947}
          tag1="React / JavaScript / TailwindCSS"
          link={"https://ez-math-game.netlify.app/"}
        />
      </Fade>
      <Fade left>
      <WorksItem
          title={"EliJuomapeli"}
          text={
            "Mielenkiinto heräsi testata PWA:n voimaa, mutta ideat oli vähän hukassa. Mietin mitä käytännöllistä sitä keksisi värkätä, ja festareiden ajan aloittelun innoittamana juomapelihän se sieltä tupsahti. Linkki peliin löytyy kuvan alta, repo löytyy gitlabista: villetoimela."
          }
          imgSrc={"/elijuomapeli-screenshot.png"}
          imgWidth={1920}
          imgHeight={947}
          tag1="React / JavaScript / TailwindCSS / PWA "
          link={"https://www.elijuomapeli.com/"}
        />
      </Fade>
      <Fade right>
      <WorksItem
          title={"Public API list appi"}
          text={
            "Pieni webbisovellus johon haetaan kokoelma julkisia rajapintoja, käyttäen api.publicapis.org rajapintaa. Sovelluksessa pystyy etsimään haluamaansa APIa nimen perusteella hakukentästä. Lisätty myös mahdollisuus filtteröidä haettavia rajapintoja kategorian perusteella."
          }
          imgSrc={"/Public-APIs-screenshot.png"}
          imgWidth={1920}
          imgHeight={2266}
          tag1="React / JavaScript / TailwindCSS / API / Axios"
          link={"https://gitlab.com/villetoimela/public-api-list"}
        />
      </Fade>
      <Fade left>
        <WorksItem
          title={"Crypto tracker app"}
          text={
            "Yksinkertainen webbiappi kryptovaluuttojen hintojen seurantaa varten. Sivu on tehty rajapintojen opiskelu edellä, eli sivun ulkoasuun ei ole panostettu. Käytetty CoinGecko.com:n julkista API:a datan hankintaan."
          }
          imgSrc={"/crypto-tracker-test.png"}
          imgWidth={1897}
          imgHeight={10709}
          tag1="React / NextJS / CSS / API"
          link={"https://gitlab.com/villetoimela/nextjs-crypto-app"}
        />
      </Fade>
      <p className="mx-auto max-w-7xl pl-11 pb-4 text-xs font-normal italic tracking-widest text-gray-400 2xl:pl-0">
        {" "}
        {"< /works >"}{" "}
      </p>
    </div>
  )
}
