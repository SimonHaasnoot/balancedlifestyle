import { Box, Container, SxProps, Theme } from '@mui/material';
import * as React from 'react';
import useIsMobile from '../../hooks/useMobile';

export type DefaultContainerProps = {
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    background?: string;
    children: React.ReactNode;
    disableGutters?: boolean;
    sx?: SxProps<Theme>;
};

export const DefaultContainer: React.FC<DefaultContainerProps> = (props) => {
    const { isMobile } = useIsMobile();
    let background = props.background || 'transparent';

    return (
        <Container disableGutters={props.disableGutters} maxWidth={props.maxWidth} sx={{ background, position: 'relative', ...props.sx }}>
            <Box py={isMobile ? 5 : 10}>{props.children}</Box>
        </Container>
    );
};
