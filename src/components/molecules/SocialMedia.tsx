import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material';
import { Box, Icon, Link } from '@mui/material';
import React from 'react';
import useIsMobile from '../../hooks/useMobile';
import { projectVariables } from '../../project';

export type SocialMediaProps = {
    fontSize?: number;
    color?: string;
    gap?: number;
    sx?: {};
};

export const SocialMedia: React.FC<SocialMediaProps> = (props) => {
    const { isMobile } = useIsMobile();
    let gap = props.gap ? props.gap : 5;
    const color = props.color ? props.color : '#ffffff';

    if (isMobile) {
        gap = gap / 2;
    }

    return (
        <Box sx={{ display: 'flex', gap: gap, justifyContent: isMobile ? 'center' : 'left', ...props.sx }}>
            <Link color={color} href={projectVariables.COMPANY_TWITTER}>
                <Icon component={Twitter} sx={{ fontSize: '30px' }} />
            </Link>
            <Link color={color} href={projectVariables.COMPANY_INSTAGRAM}>
                <Icon component={Instagram} sx={{ fontSize: '30px' }} />
            </Link>
            <Link color={color} href={projectVariables.COMPANY_INSTAGRAM}>
                <Icon component={FacebookOutlined} sx={{ fontSize: '30px' }} />
            </Link>
        </Box>
    );
};
