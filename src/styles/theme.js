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
            root:{
                color: '#fff',
                
            }

        },
        PrivateSwitchBase:{
            root:{
                padding: 0
            }
        },
        MuiIconButton:{
            root:{
                borderRadius: 'none',
                color: 'none'
            },
            colorSecondary:{
                color: 'none',
                '&:hover':{
                    backgroundColor: '#fff'
                }
            }
        },
        

        MuiLink: {
            underlineHover: {
                '&:hover': {
                    textDecoration: 'none'
                }
            }
        }
    }
})
