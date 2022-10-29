import { SvgIconProps } from '@mui/material';

export type HeaderRouteType = {
    name: HeaderRoutesEnum;
    path: string;
    activeYAxis?: boolean;
    icon?: (props: SvgIconProps) => JSX.Element;
};

export enum HeaderRoutesEnum {
    HOME = 'Home',
    BALANCED_LIFESTYLE = 'Balanced Lifestyle',
    PACKAGES = 'Pakketten',
    PERSONAL_TRAINING = 'Personal training',
    BLOGS = 'Blogs',
    GOOD_MEAT = 'Goed vlees',
    ABOUT_ME = 'Over mij',
    CONTACT = 'Contact',
}
