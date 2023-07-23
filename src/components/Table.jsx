import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import * as colors from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { numify } from "numify";

const allColors = Object.values(colors).map(color => color[700]);
function getRandomColor() {
    return allColors[Math.floor(Math.random() * allColors.length)];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    // [`&.${tableCellClasses.head}`]: {
    //     background: 'transparent !important',
    //     // color: theme.palette.common.white,
    // },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.secondary.light,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(topic, chips, category, users, replies, views, activity) {
    return { topic, chips, category, users, replies, views, activity };
}

const rows = [
    createData('Current News and Discussion', null,
        'Mental Health', ['A', 'G', 'P'], 31, 41500, '13m'),
    createData('Non-Urgent Emothional Help', ['mentalhealth', 'enabler'],
        'Video', ['L', 'T'], 252, 396, '30m'),
    createData('Other Ways of Getting Help', null,
        'Mind', ['E', 'I', 'R'], 207, 7500, '41m'),
    createData('How to help a person who self-harms!', null,
        'Q&A', ['F'], 2300, 2000, '1h'),
    createData('Feeling overwhelmed', ['hope', 'help'],
        'Hope', ['C', 'U', 'I'], 441, 3100, '6h'),
    createData('Should I tell', ['neverstop', 'doubt'],
        'Never Stop', ['K', 'N', 'Q'], 1300, 6000, '7h'),
    createData('If you need someone to talk to urgently and in confidence', null,
        'Emotional Help', ['C', 'W', 'Y'], 5700, 33600, '13h'),
    createData('Post the weirdest thing you own here', null,
        'Education', ['D', 'M', 'R'], 236, 2300, '10h'),
    createData('Show me your awesome photography',
        ['photography'], 'Science', ['E', 'R', 'T'], 3, 519, '2d'),
    createData('Prevention Strategies', null,
        'Random', ['H', 'M', 'Y'], 60, 891, '1h'),
    createData('Live Music', null,
        'Music', ['L', 'A'], 587, 3800, '3d'),
    createData('Racing Thoughts', ['climbing', 'funny', 'adventure'],
        'Entertainment', ['I', 'O', 'S'], 628, 997, '1h'),
    createData('Post your artwork!', null,
        'Art', ['S', 'G'], 147, 397, '3h'),
    createData('How to feel normal?', null,
        'Upset', ['K', 'L', 'R'], 274, 2900, '1d'),
    createData('Tell me about your recent dream', null,
        'Dreams', ['N', 'H'], 0, 42, '1d'),
    createData('A thread in which you tell users to go to sleep', ['dreams', 'life', 'reason', 'social'],
        'Social', ['J', 'D', 'Q'], 129, 752, '19h'),
    createData('What\'s everyone listening?', null,
        'Random', ['B', 'M', 'Z'], 305, 2100, '6h'),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Topic</StyledTableCell>
                        <StyledTableCell>Category</StyledTableCell>
                        <StyledTableCell>Users</StyledTableCell>
                        <StyledTableCell>Replies</StyledTableCell>
                        <StyledTableCell>Views</StyledTableCell>
                        <StyledTableCell>Activity</StyledTableCell>
                    </TableRow>
                    <TableRow sx={{ backgroundColor: (theme) => theme.palette.info.light }}>
                        <StyledTableCell>
                            <Typography variant='subtitle1'>
                                Welcome Enabler! Please read this before posting!
                            </Typography>
                            <Typography variant='body2'>
                                Before you make a new topic or post, please read the community guidelines.<br /> We aim to be the friendliest community for online mental health support.
                            </Typography>
                        </StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                <>
                                    <Typography variant='subtitle2'>{row.topic}</Typography>
                                    {row.chips &&
                                        <Stack mt={2} direction="row" spacing={1}>
                                            {row.chips.map((chip) => (
                                                <Chip sx={{ bgcolor: getRandomColor }} label={chip} />
                                            ))}
                                        </Stack>
                                    }
                                </>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography
                                    sx={{
                                        '&:before': {
                                            content: '""',
                                            display: 'inline-block',
                                            width: '0.6rem',
                                            height: '0.6rem',
                                            borderRadius: '50%',
                                            backgroundColor: getRandomColor(),
                                            marginRight: '0.8rem',
                                        },
                                    }}
                                >
                                    {row.category}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Box display='flex' columnGap={1}>
                                    {row.users.map((user) =>
                                        <Avatar sx={{ bgcolor: getRandomColor, width: 30, height: 30 }}>
                                            {user}
                                        </Avatar>)
                                    }
                                </Box>
                            </StyledTableCell>
                            <StyledTableCell>{numify(row.replies)}</StyledTableCell>
                            <StyledTableCell>{numify(row.views)}</StyledTableCell>
                            <StyledTableCell>{row.activity}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}