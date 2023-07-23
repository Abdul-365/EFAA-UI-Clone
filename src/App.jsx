import CheckIcon from '@mui/icons-material/Check';
import Container from '@mui/material/Container';
import { blueGrey, grey, yellow } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignUp from './components/Signup';
import Popup from './components/Popup';
const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
            dark: grey[100],
        },
        secondary: {
            main: blueGrey[50],
            contrastText: grey[900]
        },
        tertiary: {
            main: '#AD0922',
            contrastText: grey[50]
        },
        quaternary: {
            main: grey[600],
        }
    },
    typography: {
        fontFamily: '\'Work Sans\', sans-serif !important',
        subtitle1: {
            fontSize: '1rem',
        },
        subtitle2: {
            fontSize: '1rem',
            color: grey[600],
        },
        body1: {
            fontWeight: '500 !important',
            fontSize: '0.9rem !important'
        },
        body2: {
            fontSize: '0.9rem !important',
            color: grey[600],
        }
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    paddingBottom: '1rem',
                },
            },
        },
        MuiCheckbox: {
            defaultProps: {
                disableRipple: true,
                checkedIcon: <CheckIcon sx={{ fontSize: '1rem' }} />,
                icon: <CheckIcon sx={{ visibility: 'hidden', fontSize: '1rem' }} />
            },
            styleOverrides: {
                root: {
                    margin: '0.9rem',
                    marginRight: '1.2rem',
                    padding: '0.1rem',
                    background: '#E9ECEE',
                    borderRadius: '20%',
                    '&.Mui-checked': {
                        color: 'black',
                    },
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginLeft: '-0.9rem',
                },
                label: {
                    paddingRight: '0.9rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '3rem',
                    paddingTop: '2rem',
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '3rem',
                    paddingTop: 0
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: '0%'
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    textTransform: 'none !important',
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    height: '100%'
                },
                indicator: {
                    backgroundColor: yellow[700]
                }
            }
        },
        MuiChip: {
            defaultProps: {
                size: 'small',
            },
            styleOverrides: {
                root: {
                    borderRadius: '10%'
                },
                label: {
                    color: '#fff',
                }
            }
        }
    },
});

export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path='/' element={
                    <>
                        <Navbar />
                        <Container sx={{ mt: 10, pt: 2, mb: 8 }}>
                            <Outlet />
                        </Container>
                        <Footer />
                    </>
                }>
                    <Route index element={<Home />} />
                </Route>
                <Route path='/signup' element={<SignUp />} />
                <Route path='/popup' element={<Popup />} />
            </Routes>
        </ThemeProvider>
    );
}