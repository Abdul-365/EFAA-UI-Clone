import CheckIcon from '@mui/icons-material/Check';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignUp from './components/Signup';

const theme = createTheme({
    palette: {
        primary: {
            main: '#AD0922',
        },
        secondary: {
            main: '#1A1718',
        },
        tertiary: {
            main: '#B2AFAA',
        },
    },
    typography: {
        subtitle1: {
            fontSize: '1rem',
            color: grey[700],
        },
        subtitle2: {
            fontSize: '0.8rem',
            color: grey[700],
        },
        body1: {
            color: grey[700],
        },
        body2: {
            color: grey[500],
        }
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontWeight: 600,
                    fontSize: '0.9rem',
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
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    paddingRight: '0.9rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '2rem 3.5rem',
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '3.5rem',
                    paddingTop: 0
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    textTransform: 'none !important'
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
                        <Outlet />
                        <Footer />
                    </>
                }>
                    <Route index element={<Home />} />
                </Route>
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </ThemeProvider>
    );
}