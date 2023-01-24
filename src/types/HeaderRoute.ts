import { SvgIconProps } from '@mui/material';
import { headerRoutes } from '../components/pagelayout/Layout';

export type HeaderRouteType = {
    name: HeaderRoutesEnum;
    path: string;
    activeYAxis?: boolean;
    icon?: (props: SvgIconProps) => JSX.Element;
};

export enum HeaderRoutesEnum {
    HOME = 'Home',
    BALANCED_LIFESTYLE = 'Balanced Lifestyle',
    ONLINE_COACHING = 'Online coaching',
    PACKAGES = 'Pakketten',
    PERSONAL_TRAINING = 'Personal training',
    BLOGS = 'Blogs',
    GOOD_MEAT = 'Goed vlees',
    ABOUT_ME = 'Over mij',
    CONTACT = 'Contact',
}

export const getRouteUrl = (route: HeaderRoutesEnum): string => {
    return headerRoutes.find((headerRoute) => headerRoute.name === route)?.path || route ? route : '#';
};
