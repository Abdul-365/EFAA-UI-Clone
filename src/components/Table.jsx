import { numify } from "numify";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Box } from '@mui/material';

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
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.secondary.light,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(topic, category, users, replies, views, activity) {
    return { topic, category, users, replies, views, activity };
}

const rows = [
    createData('Current News and Discussion',
        'Mental Health', ['A', 'G', 'P'], 31, 41500, '13m'),
    createData('Non-Urgent Emothional Help',
        'Video', ['L', 'T'], 252, 396, '30m'),
    createData('Other Ways of Getting Help',
        'Mind', ['E', 'I', 'R'], 207, 7500, '41m'),
    createData('How to help a person who self-harms!',
        'Q&A', ['F'], 2300, 2000, '1h'),
    createData('Feeling overwhelmed',
        'Hope', ['C', 'U', 'I'], 441, 3100, '6h'),
    createData('Should I tell',
        'Never Stop', ['K', 'N', 'Q'], 1300, 6000, '7h'),
    createData('If you need someone to talk to urgently and in confidence',
        'Emotional Help', ['C', 'W', 'Y'], 5700, 33600, '13h'),
    createData('Post the weirdest thing you own here',
        'Education', ['D', 'M', 'R'], 236, 2300, '10h'),
    createData('Show me your awesome photography',
        'Science', ['E', 'R', 'T'], 3, 519, '2d'),
    createData('Prevention Strategies',
        'Random', ['H', 'M', 'Y'], 60, 891, '1h'),
    createData('Live Music',
        'Music', ['L', 'A'], 587, 3800, '3d'),
    createData('Racing Thoughts',
        'Entertainment', ['I', 'O', 'S'], 628, 997, '1h'),
    createData('Post your artwork!',
        'Art', ['S', 'G'], 147, 397, '3h'),
    createData('How to feel normal?',
        'Upset', ['K', 'L', 'R'], 274, 2900, '1d'),
    createData('Tell me about your recent dream',
        'Dreams', ['N', 'H'], 0, 42, '1d'),
    createData('A thread in which you tell users to go to sleep',
        'Social', ['J', 'D', 'Q'], 129, 752, '19h'),
    createData('What\'s everyone listening?',
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
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.topic}
                            </StyledTableCell>
                            <StyledTableCell>{row.category}</StyledTableCell>
                            <StyledTableCell>
                                <Box display='flex' columnGap={1}>
                                    {row.users.map((user) => <Avatar sx={{ width: 30, height: 30 }}>{user}</Avatar>)}
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