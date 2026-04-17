import { SvgIconProps } from '@mui/material';
import { headerRoutes } from '../components/pagelayout/Layout';

export type HeaderRouteType = {
    name: HeaderRoutesEnum;
    path: string;
    icon?: (props: SvgIconProps) => JSX.Element;
    isSecondaryLevel?: boolean;
};

export enum HeaderRoutesEnum {
    HOME = 'Home',
    BALANCED_LIFESTYLE = 'Balanced Lifestyle',
    ONLINE_COACHING = 'Online coaching',
    GROEPSTRAINING = 'Groepstraining',
    LEEFSTIJL = 'Leefstijl',
    SPECIALISATIES = 'Specialisaties',
    REVIEWS = 'Reviews',
    PACKAGES = 'Pakketten',
    PERSONAL_TRAINING = 'Personal training',
    BLOGS = 'Blogs',
    ABOUT_ME = 'Over mij',
    CONTACT = 'Contact',
}

export const getRouteUrl = (route: HeaderRoutesEnum): string => {
    return headerRoutes.find((headerRoute) => headerRoute.name === route)?.path || '#';
};
