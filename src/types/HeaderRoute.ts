import { SvgIconProps } from '@mui/material';
import { headerRoutes } from '../components/pagelayout/Layout';

export type HeaderRouteType = {
    name: HeaderRoutesEnum;
    path: string;
    activeYAxis?: boolean;
    icon?: (props: SvgIconProps) => JSX.Element;
    isSecondaryLevel?: boolean;
    notVisible?: boolean;
};

export enum HeaderRoutesEnum {
    HOME = 'Home',
    BALANCED_LIFESTYLE = 'Balanced Lifestyle',
    ONLINE_COACHING = 'Online coaching',
    GROEPSTRAINING = 'Groepstraining',
    VOEDING = 'Voeding',
    SPECIALISATIES = 'Specialisaties',
    REVIEWS = 'Reviews',
    PACKAGES = 'Pakketten',
    PERSONAL_TRAINING = 'Personal training',
    BLOGS = 'Blogs',
    ABOUT_ME = 'Over ons',
    CONTACT = 'Contact',
    OVER_TIM = 'Over Tim',
    OVER_SEM = 'Over Sem',

}

export const getRouteUrl = (route: HeaderRoutesEnum): string => {
    return headerRoutes.find((headerRoute) => headerRoute.name === route)?.path || '#';
};
