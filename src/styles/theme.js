import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({

    palette: {
    },
    overrides: {
        MuiCheckbox: {
            colorSecondary: {
                '&.Mui-checked': {
                    color: '#fff',
                },
                '&.Mui-checked:hover': {
                    backgroundColor: '#fff !important',
                }
            },
            root: {
                color: '#fff',
            }
        },
        PrivateSwitchBase: {
            root: {
                padding: 0
            }
        },
        MuiIconButton: {
            root: {
                borderRadius: 'none',
                color: 'none'
            },
            colorSecondary: {
                color: 'none',
                '&:hover': {
                    backgroundColor: '#fff'
                }
            }
        },
        MuiTabs: {
            root:{
                height: '40px'
            },

            flexContainer: {
                justifyContent: 'space-between'
            }
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: '#F0F4F9'
            }
        },
        MuiTab:{
            root:{
                backgroundColor: '#DEE4EB',
                width:"183px",
                borderRadius:'5px 5px 0 0',
                '&.Mui-selected':{
                    backgroundColor: '#FFF',
                    color:'#54585E'
                }
            },
            textColorInherit:{
                color: '#939CAA',
                opacity: 1
            },
            wrapper:{
                display: 'flex',
                flexDirection: 'row'
            },
            labelIcon:{
                minHeight: 'none'
            }
        }
    }
})
