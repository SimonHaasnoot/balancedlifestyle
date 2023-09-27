import { Box, Container, SxProps, Theme } from '@mui/material';
import * as React from 'react';
import useIsMobile from '../../hooks/useMobile';

export type DefaultContainerProps = {
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    doublePadding?: boolean;
    background?: string;
    children: React.ReactNode;
    disableGutters?: boolean;
    sx?: SxProps<Theme>;
} & DefaultContainerProps;

export const DefaultContainer: React.FC<DefaultContainerProps> = (props) => {
    const { isMobile } = useIsMobile();
    let background = props.background || 'transparent';
    let padding = props.doublePadding ? 20 : 10;

    if (isMobile) {
        padding = padding / 2;
    }

    return (
        <Container disableGutters={props.disableGutters} maxWidth={props.maxWidth} sx={{ background, position: 'relative', ...props.sx }} {...props}>
            <Box py={padding} flex={1}>
                {props.children}
            </Box>
        </Container>
    );
};
