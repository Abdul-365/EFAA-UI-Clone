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