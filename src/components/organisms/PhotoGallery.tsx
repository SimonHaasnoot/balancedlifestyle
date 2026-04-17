import React from 'react';
import { Box } from '@mui/material';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import { OptimizedImage } from '../atoms/OptimizedImage';

export type GalleryPhoto = {
    src: string;
    width: number;
    height: number;
    alt: string;
};

type PhotoGalleryProps = {
    photos: GalleryPhoto[];
    columns?: number | ((containerWidth: number) => number);
    spacing?: number;
};

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
    photos,
    columns = (w: number) => (w < 600 ? 2 : 3),
    spacing = 10,
}) => {
    return (
        <MasonryPhotoAlbum
            photos={photos}
            columns={columns}
            spacing={spacing}
            render={{
                wrapper: ({ children, style, ...rest }) => (
                    <Box
                        {...rest}
                        style={style}
                        sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                            '& img, & picture': {
                                transition: 'transform 0.6s ease !important',
                            },
                            '&:hover img, &:hover picture': {
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        {children}
                    </Box>
                ),
                image: (props, { photo }) => (
                    <OptimizedImage
                        src={photo.src}
                        alt={photo.alt || ''}
                        style={{
                            ...props.style,
                            transition: 'transform 0.6s ease',
                        }}
                    />
                ),
            }}
        />
    );
};
