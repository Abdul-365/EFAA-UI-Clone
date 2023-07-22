import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import { alpha, styled } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {

    return (
        <AppBar position="fixed" color='navbar' elevation={1}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ height: '5rem' }}>
                    <Box
                        component="img"
                        src='/EFA_Registered Logo.png'
                        alt='Logo'
                        height="70%"
                        mr={4}
                    />
                    <Divider orientation="vertical" flexItem />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search all forums"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button variant='text' endIcon={<KeyboardArrowDownIcon />} sx={{ mr: 3 }}>
                        Topics
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button variant='text' endIcon={<MenuIcon />} sx={{ mr: 3 }}>
                            Latest Topics
                        </Button>
                        <IconButton aria-label="delete">
                            <NotificationsNoneIcon />
                        </IconButton>
                        <Avatar alt="Remy Sharp" >A</Avatar>
                    </Box>
                    <Button variant='text' endIcon={<KeyboardArrowDownIcon />} sx={{ mr: 3 }}>
                        azyrusmax
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}