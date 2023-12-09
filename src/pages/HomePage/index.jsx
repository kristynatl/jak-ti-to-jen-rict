import './style.css';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { IntroIllustration } from '../../components/IntroIllustration';
import { ActionButton } from '../../components/ActionButton';
import { BookAnimation } from '../../components/BookAnimation';

export const HomePage = () => {
  const scrollRef = useRef(null);

  const scrollOnClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/nacvik-rozhovoru');
  };

  return (
    <>
      <div className="intro">
        <IntroIllustration />
      </div>
      <div className="intro">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 1 }}
          className="intro__info"
        >
          <h1 className="intro__heading">Jak ti to jen říct?</h1>
          <span className="intro__underline"></span>
          <p className="intro__description">
            online nástroj, který pomáhá rodičům a pečujícím osobám připravit se
            na rozhovor s dětmi o intimitě a respektování osobních hranic
          </p>
          <div className="intro-buttons">
            <ActionButton label="ZKUSIT SI ROZHOVOR" onClick={handleNavigate} />
            <ActionButton
              label="PŘEČÍST SI JAK NA TO"
              onClick={scrollOnClick}
            />
          </div>
        </motion.div>
      </div>
      <div className="container" ref={scrollRef}>
        <div className="content-section">
          <p className="content-section__text">
            Děti se rodí s hlubokou touhou porozumět světu kolem a s přirozeným
            nadšením pro objevování. A je na nás –⁠ jejich rodičích a dalších
            pečujících –⁠ abychom tuto zvědavost rozvíjeli.
          </p>
          <p className="content-section__text">
            Jejich zvídavé otázky ohledně sexuálního zdraví (do kterého spadají
            témata jako respektující vztahy, soukromí, hygiena, intimita,
            sexualita, konsent a další) nám však dokážou mnohdy zavařit. Můžeme
            se při odpovědích na ně cítit nejistě a trapně.
          </p>
          <p className="content-section__text">
            Takové pocity jsou v pořádku. Slova týkající se intimity nejsou
            těmi, která používáme každý den. Čím více však budeme o podobných
            tématech hovořit, tím získáme větší jistotu a sebevědomí!
          </p>
        </div>
        <span className="content-section__underline" />
        <div className="content-section">
          <p className="content-section__text">
            Ať už je vaše situace jakákoliv, dítě vás vnímá jako vzor a
            důvěryhodný zdroj informací. A přestože si uvědomujete, jak je
            podpora sexuálního zdraví dětí důležitá, možná nevíte, jak na to.
            Zde najdete několik univerzálních tipů na to, jak vést rozhovor s
            dítětem:
          </p>
          <ul className="tips-list">
            <li className="tips-list__tip">
              <h2 className="tips-list__heading">
                1. Buďte otevření a nehodnoťte.
              </h2>
              <p className="content-section__text">
                Buďte otevřeni otázkám a poskytněte na ně promyšlené odpovědi.
                To znamená aktivně naslouchat a nikdy neodpovídat odsuzováním či
                moralizováním.
              </p>
            </li>
            <li className="tips-list__tip">
              <h2 className="tips-list__heading">
                2. Nepředpokládejte a ptejte se.
              </h2>
              <p className="content-section__text">
                Nepředpokládejte automaticky, že víte, co dítě potřebuje a co
                chce slyšet. Ptejte se a nechte dítě vysvětlit, co ho trápí a co
                ho zajímá. Je v pořádku nejprve zjistit, co už dítě o tématu ví,
                abychom věděli, jaké detaily dítěti poskytnout.
              </p>
            </li>
            <li className="tips-list__tip">
              <h2 className="tips-list__heading">
                3. Přiznejte, že něco nevíte, a k tématu se později vraťte.
              </h2>
              <p className="content-section__text">
                Nemusíte mít odpovědi na všechno. Dejte dítěti najevo, že o
                tématu budete přemýšlet nebo si ještě něco zjistíte, a později
                se k němu sami vraťte. K tématu se můžete vrátit i tehdy, když
                chcete zjistit, jak proběhlý rozhovor dítě zpracovalo nebo
                jestli má další otázky.
              </p>
            </li>
            <li className="tips-list__tip">
              <h2 className="tips-list__heading">
                4. Odpovídejte jasně a pravdivě, informace dávkujte průběžně.
              </h2>
              <p className="content-section__text">
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
        <span className="content-section__underline" />
        <div className="content-section">
          <p className="content-section__text">
            Chcete si vyzkoušet teorii v praxi a na rozhovor s dítětem se ještě
            necítíte? Pak si můžete nanečisto vyzkoušet některou z připravených
            modelových situací. Scénář vás rozhovorem provede a poskytne vám
            zpětnou vazbu a další tipy při komunikaci s dítětem.
          </p>

          <ActionButton label="NÁCVIK ROZHOVORŮ" onClick={handleNavigate} />
        </div>
        <span className="content-section__underline" />
        <div className="content-section">
          <p className="content-section__text">
            Pokud si stále nejste jistí v kramflecích, nezoufejte. Otázky
            týkající se sexuální výchovy dětí by vydaly na nejednu knihu.
          </p>
          <p className="content-section__text">
            Jednou takovou je i kniha <em>Děti to chtěj vědět taky</em> od
            autorek Dagmar Krišové a Marcely Poláčkové, vydaná organizací
            Konsent v roce 2022 –⁠ je plná rad, inspirace, odborných a ověřených
            informací, osobních výpovědí a ukázek konverzací. Kniha bojuje s
            přetrvávajícími mýty a předsudky a povzbuzuje všechny dospěláky, aby
            se nebáli s dětmi otevřeně mluvit o intimních tématech.
          </p>
          <BookAnimation />
          <a
            href="https://e-shop.konsent.cz/deti-to-chtej-vedet-taky/"
            className="link"
          >
            <ActionButton label="VÍCE O KNIZE" />
          </a>
        </div>
      </div>
    </>
  );
};
