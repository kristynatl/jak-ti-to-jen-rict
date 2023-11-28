import './style.css';
import { MobileNavigation } from '../../components/MobileNavigation';
import { DesktopNavigation } from '../../components/DesktopNavigation';
import { Link } from 'react-router-dom';
import { MobileTopPanel } from '../../components/MobileTopPanel';
import { ActionButton } from '../../components/ActionButton';
import { BookAnimation } from '../../components/BookAnimation';

export const HowToPage = () => {
  return (
    <>
      <MobileTopPanel title="JAK NA TO" />
      <DesktopNavigation />
      <div className="how-to">
        <div className="how-to__section introduction">
          <p>
            Děti se rodí s hlubokou touhou porozumět světu kolem a s přirozeným
            nadšením pro objevování. A je na nás –⁠ jejich rodičích a dalších
            pečujících –⁠ abychom tuto zvědavost rozvíjeli.
          </p>
          <p>
            Jejich zvídavé otázky ohledně sexuálního zdraví (do kterého spadají
            témata jako respektující vztahy, soukromí, hygiena, intimita,
            sexualita, konsent a další) nám však dokážou mnohdy zavařit. Můžeme
            se při odpovědích na ně cítit nejistě a trapně.
          </p>
          <p>
            Takové pocity jsou v pořádku. Slova týkající se intimity nejsou
            těmi, která používáme každý den. Čím více však budeme o podobných
            tématech hovořit, tím získáme větší jistotu a sebevědomí!
          </p>
        </div>
        <span className="how-to__underline" />
        <div className="how-to__section tips">
          <p>
            Ať už je vaše situace jakákoliv, dítě vás vnímá jako vzor a
            důvěryhodný zdroj informací. A přestože si uvědomujete, jak je
            podpora sexuálního zdraví dětí důležitá, možná nevíte, jak na to.
            Zde najdete několik univerzálních tipů na to, jak vést rozhovor s
            dítětem:
          </p>
          <ul className="how-to__tips">
            <li className="how-to__tip">
              <h2>1. Buďte otevření a nehodnoťte.</h2>
              <p>
                Buďte otevřeni otázkám a poskytněte na ně promyšlené odpovědi.
                To znamená aktivně naslouchat a nikdy neodpovídat odsuzováním či
                moralizováním.
              </p>
            </li>
            <li className="how-to__tip">
              <h2>2. Nepředpokládejte a ptejte se.</h2>
              <p>
                Nepředpokládejte automaticky, že víte, co dítě potřebuje a co
                chce slyšet. Ptejte se a nechte dítě vysvětlit, co ho trápí a co
                ho zajímá. Je v pořádku nejprve zjistit, co už dítě o tématu ví,
                abychom věděli, jaké detaily dítěti poskytnout.
              </p>
            </li>
            <li className="how-to__tip">
              <h2>
                3. Přiznejte, že něco nevíte, a k tématu se později vraťte.
              </h2>
              <p>
                Nemusíte mít odpovědi na všechno. Dejte dítěti najevo, že o
                tématu budete přemýšlet nebo si ještě něco zjistíte, a později
                se k němu sami vraťte. K tématu se můžete vrátit i tehdy, když
                chcete zjistit, jak proběhlý rozhovor dítě zpracovalo nebo
                jestli má další otázky.
              </p>
            </li>
            <li className="how-to__tip">
              <h2>
                4. Odpovídejte jasně a pravdivě, informace dávkujte průběžně.
              </h2>
              <p>
                Držte se faktů a používejte správnou terminologii pro lidskou
                anatomii, nikoliv přezdívky. Taktéž se nesnažte uspokojit
                zvědavost vašeho dítěte lží. Řekněte dítěti pravdu, jednoduše a
                v přiměřeném rozsahu. Až bude starší, můžete dítěti poskytnout
                podrobnější informace. Nesnažte se o vyčerpání tématu jedním
                rozhovorem “na první dobrou”.
              </p>
            </li>
          </ul>
        </div>
        <span className="how-to__underline" />
        <div className="how-to__section practice">
          <p>
            Chcete si vyzkoušet teorii v praxi a na rozhovor s dítětem se ještě
            necítíte? Pak si můžete nanečisto vyzkoušet některou z připravených
            modelových situací. Scénář vás rozhovorem provede a poskytne vám
            zpětnou vazbu a další tipy při komunikaci s dítětem.
          </p>

          <Link to="/nacvik-rozhovoru" className="link">
            <ActionButton label="NÁCVIK ROZHOVORŮ" />
          </Link>
        </div>
        <span className="how-to__underline" />
        <div className="how-to__section book">
          <p>
            Pokud si stále nejste jistí v kramflecích, nezoufejte. Otázky
            týkající se sexuální výchovy dětí by vydaly na nejednu knihu.
          </p>
          <p>
            Jednou takovou je i kniha <em>Děti to chtěj vědět taky</em> od
            autorek Dagmar Krišové a Marcely Poláčkové, vydané organizací
            Konsent v roce 2022 –⁠ je plná rad, inspirace, odborných a ověřených
            informací, osobních výpovědí a ukázek konverzací. Kniha bojuje s
            přetrvávajícími mýty a předsudky a povzbuzuje všechny dospěláky, aby
            se nebáli s dětmi otevřeně mluvit o intimních tématech.
          </p>
          <BookAnimation />
          <a
            className="link"
            href="https://e-shop.konsent.cz/deti-to-chtej-vedet-taky/"
          >
            <ActionButton label="VÍCE O KNIZE" />
          </a>
        </div>
      </div>
      <img
        className="how-to__figure left"
        src="./pages/HowToPage/img/woman.png"
        alt="Žena"
      />
      <img
        className="how-to__figure right"
        src="./pages/HowToPage/img/boy.png"
        alt="Chlapec"
      />
      <MobileNavigation />
    </>
  );
};
