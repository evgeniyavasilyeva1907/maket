import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import AddIcon from '@material-ui/icons/Add';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '8px',
        borderBottom: '1px solid #B9C1CC',
        justifyContent: 'space-between'
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '15px'
    },
    buttonGroup: {
        display: 'flex',
        width: '161px',
        justifyContent: 'space-between'
    },
    restore: {
        width: '30px',
        height: '30px',
        border: 'none',
        outline: 'none',
        backgroundColor: '#DEE4EB',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    restoreIcon: {
        color: '#939CAA',
        width: '21px',
        height: '18px',
        margin: 'auto'
    },
    button: {
        border: 'none',
        borderRadius: '5px',
        width: '126px',
        height: '30px',
        backgroundColor: '#DEE4EB',
        cursor: 'pointer',
        color: '#939CAA',
        fontFamily: '"Arimo", sans-serif',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        outline: 'none',
    },
    version: {
        fontWeight: 'bold'
    },
    vertivalLine: {
        height: '20px',
        width: '1px',
        backgroundColor: '#CAD2DB'
    },
    buttonAdd: {
        width: '141px',
        height: '30px',
        backgroundColor: '#2F4971',
        color: '#fff',
        fontFamily: '"Arimo", sans-serif',
        fontSize: '14px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        outline: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    bookmark: {
        color: '#1BA5F3'
    },
    text: {
        color: '#3E4A56',
        fontFamily: '"Arimo", sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    folders: {
        width: '475px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: '"Arimo", sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#2F4971',
    },
    activeFolder:{
        color:'#B6B7BB'
    },
    dash:{
        color:'#323232',
        margin: '0 15px'
    }
});

function Heading() {
    const classes = useStyles();
    const folders = ['מפקד תחנה', 'פיקוד מבצעי', 'מבנה תחנה', 'ש"ב תנחת']
    return (
        <div className={classes.root}>
            <div className={classes.line}>
                <div className={classes.folders}>
                    {folders.map((folder, index) => {
                        return (
                            <div key={index} className={index === folders.length - 1 ? classes.activeFolder : ''}>{folder} {index !== folders.length - 1 && (<span className={classes.dash}>/</span>)} </div>
                        )
                    })}
                </div>
                <div className={classes.buttonGroup}>
                    <button className={classes.button}> טיוטה <div className={classes.vertivalLine} /> <span className={classes.version}>v.1.2</span></button>
                    <button className={classes.restore}><RestoreIcon className={classes.restoreIcon} /></button>
                </div>

            </div>
            <div className={classes.line}>
                <div className={classes.text}> <BookmarkIcon className={classes.bookmark} /> ESB2-2-06 - מפקד תחנה</div>
                <button className={classes.buttonAdd}><AddIcon />הוספת עמדה </button>
            </div>
        </div>
    )
}
export default Heading