import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material';
import { Box, Button, Container, Icon, Link, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import useMobile from '../../hooks/useMobile';
import { projectVariables } from '../../project';

export const Hero: React.FC = () => {
    const { isMobile } = useMobile();

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '95vh',
                backgroundColor: '#1C1D1F',
            }}
        >
            <Box sx={{ position: 'absolute', inset: '0 0 0 0' }}>
                <StaticImage
                    src="../../images/hero.png"
                    alt="Random image"
                    placeholder="blurred"
                    loading="eager"
                    style={{ height: '100%', width: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative' }}>
                    <Box sx={{ color: 'white' }}>
                        <Typography variant="h1" component="h1" sx={{ mb: 3, pt: 10 }}>
                            Balanced <br /> Lifestyle
                        </Typography>
                        <Typography variant="subtitle2" sx={{ mb: 3, maxWidth: isMobile ? '100%' : '60%' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet, nisl vitae tincidunt luctus, nisl nisl aliquam
                            lorem, vitae ultricies nisl lorem quis nunc. Sed euismod, nisl sit amet aliquam luctus, nisl nisl aliquam lorem, vitae
                        </Typography>
                        <Button variant="outlined" sx={{ mb: 10 }}>
                            Get started
                        </Button>

                        <Box sx={{ display: 'flex', gap: 5 }}>
                            <Link color="#ffffff" href={projectVariables.COMPANY_TWITTER}>
                                <Icon component={Twitter} sx={{ fontSize: '30px' }} />
                            </Link>
                            <Link color="#ffffff" href={projectVariables.COMPANY_INSTAGRAM}>
                                <Icon component={Instagram} sx={{ fontSize: '30px' }} />
                            </Link>
                            <Link color="#ffffff" href={projectVariables.COMPANY_INSTAGRAM}>
                                <Icon component={FacebookOutlined} sx={{ fontSize: '30px' }} />
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};
