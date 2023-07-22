import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import FacebookIcon from '@mui/icons-material/Facebook';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import TwitterIcon from '@mui/icons-material/Twitter';

const footerTop = ['Support', 'About', 'Contact Us', 'The Team']
const footerBottom = ['2023 Emotional First Aid Academy', 'Terms', 'Privacy', 'Send Feedback']
const footerIcons = [
    <FacebookIcon />,
    <TwitterIcon />,
    <CloudIcon />,
    <RssFeedIcon />
]

export default function Footer() {
    return (
        <>
            <Box display='flex' columnGap={3} alignItems='center' height='4rem'>
                <Box
                    component='img'
                    src='/EFA_REgistered Logo.png'
                    height='70%'
                />
                {footerTop.map((item) => (
                    <Typography variant='subtitle2'>{item}</Typography>
                ))}
            </Box>
            <Box sx={{ width: '90%', ml: 'auto' }}>
                <Divider />
                <Box display='flex' columnGap={3} alignItems='center' height='4rem'>
                    {footerBottom.map((item) => (
                        <Typography variant='subtitle2'>{item}</Typography>
                    ))}
                    <Box flex='1 1 0'></Box>
                    {footerIcons.map((icon) => (
                        <>{icon}</>
                    ))}
                </Box>
            </Box>
        </>
    )
}