import CloudIcon from '@mui/icons-material/Cloud';
import FacebookIcon from '@mui/icons-material/Facebook';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
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
    margin: '0'
}));

const profile = ['Everyone', 'Only Friends', 'Invite only'];

const surveyQues = [
    {
        id: '1',
        question: 'How old are you?',
        options: Array.from({ length: 83 }, (_, i) => i + 18)
    },
    {
        id: '2',
        question: 'Who are you?',
        options: ['Male', 'Female']
    },
    {
        id: '3',
        question: 'Will you be friendly here?',
        options: ['Yes', 'No']
    },
    {
        id: '4',
        question: 'Where do you heard about us?',
        options: ['By Search Engine', 'By Advertisement', 'By Friend']
    },
]

const socialNetworks = [
    <>
        <FacebookIcon />
        <Typography>Facebook</Typography>
    </>,
    <>
        <TwitterIcon />
        <Typography>Twitter</Typography>
    </>
];

const socialLinks = [
    <>
        <FacebookIcon />
        <Typography>Facebook URL</Typography>
    </>,
    <>
        <TwitterIcon />
        <Typography>Twitter Username</Typography>
    </>,
    <>
        <YouTubeIcon />
        <Typography>Youtube Channel URL</Typography>
    </>
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

const footerText = ['Terms', 'Privacy', 'Send Feedback']

const footerIcons = [
    <FacebookIcon />,
    <TwitterIcon />,
    <CloudIcon />,
    <RssFeedIcon />
]

export default function Signup() {
    return (
        <>
            <Box display='flex' alignItems='center' mt={3} mr={20}>
                <Typography sx={{ ml: 'auto', mr: 3 }} variant="subtitle1">Already have an account?</Typography>
                <Button variant="contained" color="secondary">
                    Sign In
                </Button>
            </Box>
            <Container sx={{ maxWidth: '50rem !important' }}>
                <Box position='relative'>
                    <Box component='img' src='/SignUpIntro.png' alt='logo' width='100%' />
                    <Box
                        display='flex'
                        width='70%'
                        margin='auto'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        position='absolute'
                        top='3rem'
                        left='0'
                        right='0'
                        bottom='0'
                    >
                        <Box
                            component='img'
                            src='/EFA_Registered Logo.png'
                            alt='logo'
                            width='50%'
                            marginBottom={4}
                        />
                        <Divider />
                        <Typography textAlign='center' variant="h5" marginBottom={2}>
                            Create a Emotional First Aid - Enabler Account
                        </Typography>
                        <Typography textAlign='center' variant="subtitle1">
                            By signin up you can start posting, replaying topics, earn badges, favourite, vote topics and many more
                        </Typography>
                    </Box>
                </Box>
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
                                    color='tertiary'
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
                                color='tertiary'
                            />
                        ))}
                    </CardContent>
                    <Divider textAlign='left'>
                        <Typography variant='subtitle2' fontWeight='bold'>Privacy Settings (OPTIONAL)</Typography>
                    </Divider>
                    <CardContent>
                        <Typography variant='body2' sx={{ mb: 3 }}>Who can see my profile? </Typography>
                        <FormGroup sx={{ flexDirection: 'row', columnGap: 4 }} >
                            {profile.map((label) => (
                                <WrappedCheckbox key={label} control={<Checkbox />} label={label} />
                            ))}
                        </FormGroup>
                        <Typography variant='body2' sx={{ mt: 4, mb: 3 }}>
                            Automatically share my posts and replies on Social Networks
                        </Typography>
                        <FormGroup sx={{ flexDirection: 'row', columnGap: 4 }}>
                            {socialNetworks.map((network) => (
                                <WrappedCheckbox
                                    key={network}
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
                        <Grid container spacing={3}>
                            {surveyQues.map((item) => (
                                <Grid item xs={6} key={item.id}>
                                    <FormControl
                                        color='tertiary'
                                        variant="standard"
                                        sx={{ m: 1, minWidth: 120, width: '100%' }}
                                    >
                                        <InputLabel id={item.id}>{item.question}</InputLabel>
                                        <Select labelId={item.id}>
                                            {item.options.map((option) => (
                                                <MenuItem key={option} value={10}>{option}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                    <Divider textAlign='left'>
                        <Typography variant='subtitle2' fontWeight='bold'>Link Social Networks (OPTIONAL)</Typography>
                    </Divider>
                    <CardContent>
                        <Grid container spacing={3}>
                            {socialLinks.map((network) => (
                                <Grid item xs={6}>
                                    <TextField
                                        key={network}
                                        label={<Box display='flex' columnGap={1}>{network}</Box>}
                                        variant='standard'
                                        fullWidth
                                        margin='normal'
                                        color='tertiary'
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                    <Divider textAlign='left'>
                        <Typography variant='subtitle2' fontWeight='bold'>Interested Categories (OPTIONAL)</Typography>
                    </Divider>
                    <CardContent>
                        <Typography variant='body2' sx={{ mb: 3 }}>Categories I am interested in </Typography>
                        <Grid container spacing={3}>
                            {categories.map((category) => (
                                <Grid item xs={3}>
                                    <WrappedCheckbox sx={{ width: '100%' }} control={<Checkbox />} label={category} />
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardContent sx={{ display: 'flex' }}>
                        <FormControlLabel
                            sx={{ flex: '1 1 0' }}
                            control={<Checkbox />}
                            label='I agree to the Terms and Conditions'
                        />
                        <FormControlLabel
                            sx={{ flex: '1 1 0' }}
                            control={<Checkbox />}
                            label='Subscribe to newsletter'
                        />
                    </CardContent>
                    <CardActions>
                        <Button fullWidth variant="contained" color='tertiary' size='large'>
                            Create New Account
                        </Button>
                    </CardActions>
                </Card>
                <Box display='flex' justifyContent='center' alignItems='center' my={8}>
                    {footerText.map((text) => (
                        <Typography variant="subtitle2" mx={2}>{text}</Typography>
                    ))}
                    {footerIcons.map((icon) => (
                        <Box mx={1}>{icon}</Box>
                    ))}
                </Box>
            </Container>
        </>
    )
}