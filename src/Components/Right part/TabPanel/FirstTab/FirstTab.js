import React from 'react';
import SimpleSlider from '../../../Common/Slider/Slider';
import CheckBoxComp from '../../../Common/CheckBoxComp/CheckBoxComp'
import TextareaComp from '../../../Common/TextareaComp/TextareaComp'
import plan from '../../../../img/plan.png'
import { makeStyles } from '@material-ui/core/styles';
import InputPart from '../InputPart/InputPart';
import SelectPart from '../SelectPart/SelectPart'
import Label from '../../../Common/Label/Label';
import FirstInfo from '../FirstInfo/FirstInfo'

const useStyles = makeStyles((theme) => ({
    content: {
        width: '340px',
        margin: 'auto'
    },
    input: {
        width: '198px'
    },
    label: {
        margin: '10px 0 10px 0'
    },
    selectWithTextarea: {
        borderTop: '1px solid #E7EAEE',
    },
    textarea: {
        height: '138px',
        width: '340px',
        fontSize: '12px',

    },
    textareaWidth: {
        width: '340px',
        height: '48px',
        fontSize: '12px',
    },
    slider: {
        border: '1px solid #E7EAEE',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
        height: '100%',
    },
    check: {
        paddingTop: '10px',
        borderTop: '1px solid #E7EAEE',
        marginBottom: ' 10px',
        display: ' flex',
        alignItems: 'center',
    },
    labelCheck: {
        marginRight: '15px'
    }
}))


const FirstTab = () => {
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <FirstInfo />
            <InputPart text='מפתח החדר' value='L201 - רס"ן עם דיונים' indicator={true} />
            <SelectPart text='סוג החדר' options={[{ label: 'first', text: 'משרד' }, { label: 'second', text: 'משרד' }, { label: 'third', text: 'משרד' }]} />
            <InputPart text='דרגה \ מפתח ' value='סרן' />
            <div className={classes.selectWithTextarea}>
                <Label text='סיפור החדר' className={classes.label} />
                <TextareaComp className={classes.textarea} text='לוג תילא גניסיפידא ררוטקסנוק ,טמא טיס רולוד םוספיא םרול
                    טגעבשו ,ץיל קג רירעב ץונכל ,לוהי קצבש םרול טרבוס ררפנומ
                    ךנברת .שמגמ ימרוגב ,ףחנומ קרוצ תחלו טיארב .קגלוס םביל
                    גיתל ?קרוב םגרומ יכתל - המשה םשתס ונכל דעתסו
                    לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס..סעבשי
                    סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד
                    סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם
                    דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר'/>
            </div>
            <div className={classes.slider}>
                <SimpleSlider image1={plan} image2={plan} image3={plan} image4={plan} />
            </div>
            <SelectPart text='פנים \ חוץ' options={[{ label: 'first', text: 'פנים' }, { label: 'second', text: 'פנים' }, { label: 'third', text: 'פנים' }]} />
            <SelectPart text='סיווג החדר' options={[{ label: 'first', text: 'מידור' }, { label: 'second', text: 'מידור' }, { label: 'third', text: 'מידור' }]} />
            <InputPart text='תקן כ"א' value='2' />
            <InputPart text='כ"א קבוע' value='1' />
            <InputPart text=' כ"א ארעי' value='3' />
            <InputPart text=' כ"א ממוצע' value='3' />
            <SelectPart text='סוג רצפה' options={[{ label: 'first', text: 'רגילה' }, { label: 'second', text: 'רגילה' }, { label: 'third', text: 'רגילה' }]} />
            <TextareaComp className={classes.textareaWidth} text=' ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.' />
            <SelectPart text='סוג תקרה' options={[{ label: 'first', text: 'רגילה' }, { label: 'second', text: 'רגילה' }, { label: 'third', text: 'רגילה' }]} />
            <TextareaComp className={classes.textareaWidth} text=' ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.' />
            <div className={classes.check} >
                <CheckBoxComp />
                <Label text='חלונות' className={classes.labelCheck} />
            </div>
            <TextareaComp className={classes.textareaWidth} text='.סעבשי גיתל ?קרוב םגרומ יכתל - המשה םשתס ונכל דעתסו ךנברת .שמגמ ימרוגב ,ףחנומ קרוצ תחלו טיארב .קגלוס םביל ' />
            <InputPart text=' חשמל (KW 0.1)' value='' />
            <InputPart text='מיזוג אוויר' value='עפ"י החלטת מתכנן המיזוג' />
        </div>

    )
}

export default FirstTab
