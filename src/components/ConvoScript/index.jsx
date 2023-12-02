import './style.css';
import { ResponseOption } from '../ResponseOption';

export const ConvoScript = () => {
  return (
    <>
      <div className="convo-script">
        <div className="convo__bubble child">
          Kubův táta se dnes hodně rozzlobil a křičel, protože jsme byli
          svlečení.
        </div>
        <div className="convo__bubble adult incorrect">
          Tak to se mu vůbec nedivím!
        </div>
        <div className="convo__feedback false">
          Dítě za vámi přišlo, protože potřebuje pomoci porozumět situaci, ve
          které se ocitlo. Zkuste se vyvarovat unáhlené reakce, která může v
          dítěti vyvolat pocit zahanbení, a zjistěte od dítěte více informací.
        </div>
        <div className="convo__bubble adult correct">
          Vy jste si s Kubou hráli nazí?
        </div>
        <div className="convo__feedback true">
          Dobrá práce! Vždy se ujistěte, že rozumíte tomu, co vám dítě říká, a
          pokud je to potřeba, zjistěte si více informací.
        </div>
        <div className="convo__bubble child">
          Jo, hráli jsme si na doktory a poslouchali si srdíčka. Jeho táta pak
          přišel do pokojíku a začal křičet, ať se oblíkneme.
        </div>
        <ResponseOption
          order="A"
          response="Víš, když jsi u někoho doma na návštěvě, musíš poslouchat jejich pravidla."
        />
        <ResponseOption
          order="B"
          response="Jeho táta se asi bál, že vám bude zima a nastydnete."
        />
        <ResponseOption
          order="C"
          response="Proč si myslíš, že se jeho táta tak zlobil?"
        />
      </div>

      <img
        className="how-to__figure left"
        src="./../pages/HowToPage/img/woman.png"
        alt="Žena"
      />
      <img
        className="how-to__figure right"
        src="./../pages/HowToPage/img/boy.png"
        alt="Chlapec"
      />
    </>
  );
};
