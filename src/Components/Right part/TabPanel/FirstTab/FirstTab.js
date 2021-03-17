import React from 'react';
import style from './FirstTab.module.css';
import SimpleSlider from './Slider/Slider';
import SelectComp from './SelectComp/SelectComp';
import InputComp from './InputComp/InputComp';
import CheckBoxComp from './CheckBoxComp/CheckBoxComp'
import TextareaComp from './TextareaComp/TextareaComp'


const FirstTab = () => {
    return (
        <div className={style.content}>
            <div className={style.firstInfo}>
                <div className={style.textNumber}>
                    <div className={style.text}> רדחה לדוג<br />ר"מב (וטנ)</div>
                    <div className={style.number}>9</div>
                </div>
                <div className={style.textNumber}>
                    <div className={style.text}> רדחה ךרוא<br />(םומינימ)</div>
                    <div className={style.number}>3.5</div>
                </div>
                <div className={style.textNumber}>
                    <div className={style.text}> רדחה בחור<br />(םומינימ)</div>
                    <div className={style.number}>3.5</div>
                </div>
                <div className={style.textNumberLast}>
                    <div className={style.text}> רדחה הבוג<br />(םומינימ)</div>
                    <div className={style.number}>2.8</div>
                </div>
            </div>
            <div className={style.secondInfo}>
                <div className={style.text}> רדחה חתפמ</div>
                <div> <input defaultValue='םינויד םע ן"סר - L201'></input></div>
            </div>
            <SelectComp mainLabel='רדחה גוס' firstText='דרשמ' secondText='דרשמ' thirdText='דרשמ' />

            <div className={style.forthInfo}>
                <div className={style.text}> חתפמ \ הגרד</div>
                <div> <input defaultValue='ןרס'></input></div>
            </div>
            <div className={style.fivethInfo}>
                <div className={style.text}> רדחה רופיס </div>
                <TextareaComp className={style.information} text='לוג תילא גניסיפידא ררוטקסנוק ,טמא טיס רולוד םוספיא םרול
                    טגעבשו ,ץיל קג רירעב ץונכל ,לוהי קצבש םרול טרבוס ררפנומ
                    ךנברת .שמגמ ימרוגב ,ףחנומ קרוצ תחלו טיארב .קגלוס םביל
                    גיתל ?קרוב םגרומ יכתל - המשה םשתס ונכל דעתסו
                    לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס..סעבשי
                    סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד
                    סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם
                    דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר'/>
            </div>
            <SimpleSlider />

            <SelectComp mainLabel='ץוח \ םינפ' firstText='םינפ' secondText='םינפ' thirdText='םינפ' />
            <SelectComp mainLabel='רדחה גוויס' firstText='רודימ' secondText='רודימ' thirdText='רודימ' />
            <InputComp mainLabel='א"כ ןקת' value='2' />
            <InputComp mainLabel='עובק א"כ' value='1' />
            <InputComp mainLabel='יערא א"כ ' value='3' />
            <InputComp mainLabel='עצוממ א"כ  ' value='3' />
            <SelectComp mainLabel='הפצר גוס' firstText='הליגר' secondText='הליגר' thirdText='הליגר' />
            <TextareaComp text='.סעבשי גיתל ?קרוב םגרומ יכתל - המשה םשתס ונכל דעתסו ךנברת .שמגמ ימרוגב ,ףחנומ קרוצ תחלו טיארב .קגלוס םביל ' />
            <SelectComp mainLabel='הרקת גוס' firstText='הליגר' secondText='הליגר' thirdText='הליגר' />
            <TextareaComp text='.סעבשי גיתל ?קרוב םגרומ יכתל - המשה םשתס ונכל דעתסו ךנברת .שמגמ ימרוגב ,ףחנומ קרוצ תחלו טיארב .קגלוס םביל ' />
            <div className={style.check} >
                <CheckBoxComp />
                <div className={style.text}>תונולח</div>
            </div>
            <TextareaComp text='.סעבשי גיתל ?קרוב םגרומ יכתל - המשה םשתס ונכל דעתסו ךנברת .שמגמ ימרוגב ,ףחנומ קרוצ תחלו טיארב .קגלוס םביל '/>
            <InputComp mainLabel='(KW 0.1) למשח' value='' />
            <InputComp mainLabel='ריווא גוזימ' value='גוזימה ןנכתמ תטלחה י"פע' />

        </div>

    )
}

export default FirstTab
