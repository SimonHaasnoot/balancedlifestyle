import { Box, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import * as React from 'react';
import useIsMobile from '../../hooks/useMobile';

export type DefaultContainerProps = {
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    doublePadding?: boolean;
    background?: string;
    children: React.ReactNode;
    disableGutters?: boolean;
    sx?: SxProps<Theme>;
    id?: string;
    component?: React.ElementType;
};

export const DefaultContainer: React.FC<DefaultContainerProps> = (props) => {
    const { isMobile } = useIsMobile();
    const background = props.background || 'transparent';
    let padding = props.doublePadding ? 20 : 10;

    if (isMobile) {
        padding = padding / 2;
    }

    return (
        <Container
            component={props.component ?? 'div'}
            disableGutters={props.disableGutters}
            maxWidth={props.maxWidth}
            sx={{ background, position: 'relative', ...props.sx }}
        >
            <Box py={padding} flex={1}>
                <div id={props.id}>{props.children}</div>
            </Box>
        </Container>
    );
};
