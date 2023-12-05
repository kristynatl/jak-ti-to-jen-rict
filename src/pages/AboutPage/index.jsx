import './style.css';

export const AboutPage = () => {
  return (
    <>
      <div className="about">
        <div className="about__section">
          <p>
            Rodiče a další pečující osoby si dnes již uvědomují, jak je důležité
            osvětlit dětem přiměřeně jejich věku témata související se sexuálním
            zdravím, nicméně často nevědí jak. Bohužel, zdrojů a praktických
            nástrojů, které by jim to usnadnily, je málo.
          </p>
          <p>
            <em>Jak ti to jen říct?</em> je webová aplikace, která dospělým
            pomáhá vyzkoušet si podobný rozhovor nanečisto, a to interaktivní
            formou pomocí nácviků modelových konverzací. Scénáře pro rozhovory
            vznikly ve spolupráci s Marcelou Poláčkovou, odbornicí na sexuální
            výchovu, jednou z autorek knihy <em>Děti to chtěj vědět taky</em>.
          </p>
          <p>
            Web vznikl jako závěrečný projekt v rámci kurzu Digitální akademie -
            Web (podzim 2023) od neziskové organizace Czechitas. Autorkou
            projektu je Kristýna Tlapáková, která si dala za cíl vytvořit web,
            který bude užitečný, má společenský přesah a potenciál růst a žít
            dlouho po skončení akademie. Protože děti to vědět chtějí. A dospělí
            chtějí vědět, <em>jak jim to jen říct</em>.
          </p>
        </div>
      </div>
      <img className="about__figure left" src="/img/woman.webp" alt="Žena" />
      <img className="about__figure right" src="/img/boy.webp" alt="Chlapec" />
    </>
  );
};
