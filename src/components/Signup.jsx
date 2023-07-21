import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Divider, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';

const nameInputs = ['First Name', 'Last Name'];

const inputs = [
    {
        label: 'Username',
        type: 'text'
    },
    {
        label: 'Email',
        type: 'email'
    },
    {
        label: 'Password',
        type: 'password'
    }
];

const WrappedCheckbox = styled(FormControlLabel)(() => ({
    border: '0.08rem solid #E9ECEE',
    borderRadius: '0.1rem',
    margin: '1rem 2rem 1rem 0'
}));


const profile = ['Everyone', 'Only Friends', 'Invite only'];

const socialNetworks = [
    <>
        <FacebookIcon />
        <Typography>Facebook</Typography>
    </>,
    <>
        <TwitterIcon />
        <Typography>Twitter</Typography>
    </>,
];

const categories = [
    'Mental Health',
    'MH Tips',
    'Support',
    'Enabler',
    'Exchange',
    'Art',
    'Q&As',
    'Social',
    'Random',
    'Music',
    'Science',
    'Pets',
    'Education',
    'Video'
]

export default function Signup() {
    return (
        <Container sx={{ maxWidth: '50rem !important' }}>
            <Card sx={{ minWidth: 275 }} elevation={1}>
                <CardContent>
                    <Box display='flex' columnGap={4}>
                        {nameInputs.map((label) => (
                            <TextField
                                key={label}
                                label={label}
                                variant='standard'
                                fullWidth
                                margin='normal'
                            />
                        ))}
                    </Box>
                    {inputs.map((input) => (
                        <TextField
                            key={input.label}
                            label={input.label}
                            type={input.type}
                            variant='standard'
                            fullWidth
                            margin='normal'
                        />
                    ))}
                </CardContent>
                <Divider textAlign='left'>
                    <Typography variant='subtitle2' fontWeight='bold'>Privacy Settings (OPTIONAL)</Typography>
                </Divider>
                <CardContent>
                    <Typography variant='body2' sx={{ mb: 3 }}>Who can see my profile? </Typography>
                    <FormGroup sx={{ flexDirection: 'row' }}>
                        {profile.map((label) => (
                            <WrappedCheckbox control={<Checkbox />} label={label} />
                        ))}
                    </FormGroup>
                    <Typography variant='body2' sx={{ mt: 4, mb: 3 }}>Who can see my profile? </Typography>
                    <FormGroup sx={{ flexDirection: 'row' }}>
                        {socialNetworks.map((network) => (
                            <WrappedCheckbox
                                control={<Checkbox />}
                                label={<Box display='flex' columnGap={1}>{network}</Box>}
                            />
                        ))}
                    </FormGroup>
                </CardContent>
                <Divider textAlign='left'>
                    <Typography variant='subtitle2' fontWeight='bold'>Small Survey (OPTIONAL)</Typography>
                </Divider>
                <CardContent>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">who</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </CardContent>
                <Divider textAlign='left'>
                    <Typography variant='subtitle2' fontWeight='bold'>Link Social Networks (OPTIONAL)</Typography>
                </Divider>
                <CardContent>
                    <Box display='flex' columnGap={4}>
                        {socialNetworks.map((network) => (
                            <TextField
                                key={network}
                                label={<Box display='flex' columnGap={1}>{network}</Box>}
                                variant='standard'
                                fullWidth
                                margin='normal'
                            />
                        ))}
                    </Box>
                </CardContent>
                <Divider textAlign='left'>
                    <Typography variant='subtitle2' fontWeight='bold'>Interested Categories (OPTIONAL)</Typography>
                </Divider>
                <CardContent>
                    <Typography variant='body2' sx={{ mb: 3 }}>Categories I am interested in </Typography>
                    <FormGroup sx={{ flexDirection: 'row' }}>
                        {categories.map((category) => (
                            <WrappedCheckbox sx={{ width: '8rem' }} control={<Checkbox />} label={category} />
                        ))}
                    </FormGroup>
                </CardContent>
                <Divider />
                <CardContent sx={{ display: 'flex' }}>
                    <FormControlLabel sx={{ flex: '1 1 0' }} control={<Checkbox />} label='I agree to the Terms and Conditions' />
                    <FormControlLabel sx={{ flex: '1 1 0' }} control={<Checkbox />} label='Subscribe to newsletter' />
                </CardContent>
                <CardActions>
                    <Button fullWidth variant="contained" size='large'>
                      Create New Account
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
}