import React from 'react';
import Slider from '../../Common/Slider/Slider';
import { makeStyles } from '@material-ui/core/styles';
import item from '../../../img/item.png';
import Label from '../../Common/Label/Label';
import SelectComp from '../../Common/SelectComp/SelectComp';
import InputComp from '../../Common/InputComp/InputComp';
import TextareaComp from '../../Common/TextareaComp/TextareaComp'

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: '30px 25px 20px 25px',
        justifyContent: 'space-between'
    },
    slider: {
        width: '223px',
        height: '423px',
        border: '1px solid #E7EAEE',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '5px',
        padding: '0 10px'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        width: '682px'
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '15px'
    },
    lineShot: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '15px',
        width: '488px'
    },
    select: {
        width: '234px'
    },
    label: {
        marginBottom: '10px'
    },
    select2: {
        width: '362px'
    },
    input: {
        width: '107px'
    },
    textarea: {
        width: '100%',
        fontSize: '14px',
        height: '76px'
    },
    textareaLast: {
        width: '100%',
        fontSize: '14px',
        height: '76px',
        marginBottom:0,
        marginTop: '2px'
    },
    lineWithTextarea: {
        display: 'flex',
        flexDirection: 'column'
    }
}))

function InfoContent() {
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <div className={classes.info}>
                <div className={classes.line}>
                    <div>
                        <Label text='תגית ראשית' className={classes.label} />
                        <SelectComp
                            options={[{ label: 'first', text: 'חשמל' }, { label: 'second', text: 'חשמל' }, { label: 'third', text: 'חשמל' }]}
                            className={classes.select} />
                    </div>
                    <div>
                        <Label text='תגית ראשית' className={classes.label} />
                        <SelectComp
                            options={[{ label: 'first', text: 'חשמל' }, { label: 'second', text: 'חשמל' }, { label: 'third', text: 'חשמל' }]}
                            className={classes.select} />
                    </div>
                </div>
                <div className={classes.lineShot}>
                    <div>
                        <Label text='אורך(ס"מ)' className={classes.label} />
                        <InputComp value='200' className={classes.input} />
                    </div>
                    <div>
                        <Label text='רוחב (ס"מ)' className={classes.label} />
                        <InputComp value='180' className={classes.input} />
                    </div>
                    <div>
                        <Label text='גובה(ס"מ)' className={classes.label} />
                        <InputComp value='110' className={classes.input} />
                    </div>
                    <div>
                        <Label text='עומק (ס"מ)' className={classes.label} />
                        <InputComp value='' className={classes.input} />
                    </div>
                </div>
                <div className={classes.lineShot}>
                    <div>
                        <Label text='אחריות אספקה' className={classes.label} />
                        <SelectComp className={classes.select2} options={[{ label: 'first', text: 'אספקה והתקנה ע"י הקבלן' }, { label: 'second', text: 'אספקה והתקנה ע"י הקבלן' }, { label: 'third', text: 'אספקה והתקנה ע"י הקבלן' }]} />
                    </div>
                    <div>
                        <Label className={classes.label} text='משקל(ק"ג)' />
                        <InputComp className={classes.input} value='110' />
                    </div>
                </div>
                <div className={classes.lineWithTextarea}>
                    <Label className={classes.label} text='תיאור הפריט' />
                    <TextareaComp className={classes.textarea} text=' גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.' />
                </div>
                <div className={classes.lineWithTextarea}>
                    <Label className={classes.label} text='הערות לפרויקט' />
                    <TextareaComp className={classes.textareaLast} text=' גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.' />
                </div>
            </div>
            <div className={classes.slider}>
                <Slider image1={item} image2={item} image3={item} image4={item} />
            </div>

        </div>

    )
}
export default InfoContent