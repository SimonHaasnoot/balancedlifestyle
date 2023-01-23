import Tippy from '@tippyjs/react';
import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import 'tippy.js/dist/tippy.css'; // optional
import useMobile from '../../hooks/useMobile';

export type TooltipProps = {
    text: string | string[];
    style?: {};
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
    const {isMobile} = useMobile();

    return (
        <Tippy
            content={
                <div>
                    {typeof props.text === 'string' ? (
                        <p>{props.text}</p>
                    ) : (
                        <ul>
                            {props.text.map((text, key) => (
                                <li key={key}>{text}</li>
                            ))}
                        </ul>
                    )}
                </div>
            }
        >
            <HelpOutlineIcon sx={{marginLeft: '10px', position: 'absolute', top: isMobile ? '50%' : 'inherit'}} />
        </Tippy>
    );
};
