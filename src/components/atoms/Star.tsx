import React from 'react';

export type StarProps = {
    size?: number;
    color?: string;
    outline?: boolean;
};

export const Star: React.FC<StarProps> = (props: StarProps) => {
    let size = props.size ? props.size : 20;
    let color = props.color ? props.color : '#FFC107';
    let outline = props.outline ? props.outline : false;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={outline ? 'none' : color}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.31 7.38 22 8.59 17.66 13.25 18.83 19.97 12 17.27 5.17 19.97 6.34 13.25 2 8.59 8.69 7.38 12 2" />
        </svg>
    );
};
