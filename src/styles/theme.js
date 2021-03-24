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
            root: {
                height: '40px'
            },

            flexContainer: {
                justifyContent: 'space-between'
            }
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: 'transparent'
            }
        },
        MuiTab: {
            root: {
                backgroundColor: '#DEE4EB',
                width: "183px",
                borderRadius: '5px 5px 0 0',
                '&.Mui-selected': {
                    backgroundColor: '#FFF',
                    color: '#54585E'
                },
                '@media (min-width: 600px)': {
                    minWidth: '138px'
                }

            },
            textColorInherit: {
                color: '#939CAA',
                opacity: 1
            },
            wrapper: {
                display: 'flex',
                flexDirection: 'row'
            },
            labelIcon: {
                minHeight: 'none'
            }
        },
        MuiPaper: {
            elevation1: {
                boxShadow: 'none'
            },
            root: {
                backgroundColor: 'transparent',
            }
        },
        MuiAccordionSummary: {
            content: {
                flexGrow: 0,
                flexDirection: 'column',
                width:"100%",
                '&.Mui-expanded': {
                    margin: '12px 0px',
                    width:"100%"
                }
            },
            root: {
                justifyContent: 'flex-end',
                flexDirection: 'row-reverse',
                '&.Mui-expanded': {
                    minHeight: '40px'
                },
            }
        },
        MuiAccordionDetails: {
            root: {
                padding: 0
            }
        },
        MuiAccordion:{
            root:{
                '&::before':{
                    backgroundColor: 'transparent',
                    
                },
                '&.Mui-expanded': {
                    margin: '5px 0'
                },
            }
        }

    }
})
