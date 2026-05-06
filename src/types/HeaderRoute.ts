import type { SvgIconProps } from '@mui/material';

export type HeaderRouteType = {
    name: HeaderRoutesEnum;
    path: string;
    icon?: (props: SvgIconProps) => JSX.Element;
    isSecondaryLevel?: boolean;
    notVisible?: boolean;
};

export enum HeaderRoutesEnum {
    HOME = 'Home',
    ONLINE_COACHING = 'Online coaching',
    GROEPSTRAINING = 'Groepstraining',
    LEEFSTIJL = 'Leefstijl',
    SPECIALISATIES = 'Specialisaties',
    REVIEWS = 'Reviews',
    PERSONAL_TRAINING = 'Personal training',
    BLOGS = 'Blogs',
    ABOUT_ME = 'Over mij',
    CONTACT = 'Contact',
}

export const headerRoutes: HeaderRouteType[] = [
    { name: HeaderRoutesEnum.HOME, path: '/' },
    { name: HeaderRoutesEnum.PERSONAL_TRAINING, path: '/personal-training' },
    { name: 'Onze studio' as HeaderRoutesEnum, path: '/onze-studio' },
    { name: HeaderRoutesEnum.GROEPSTRAINING, path: '/groepstraining' },
    { name: HeaderRoutesEnum.LEEFSTIJL, path: '/leefstijl' },
    { name: HeaderRoutesEnum.SPECIALISATIES, path: '/specialisaties' },
    { name: HeaderRoutesEnum.ABOUT_ME, path: '/over-sem', isSecondaryLevel: true },
    { name: HeaderRoutesEnum.REVIEWS, path: '/reviews', isSecondaryLevel: true },
    { name: HeaderRoutesEnum.CONTACT, path: '/contact', isSecondaryLevel: true },
];

export const getRouteUrl = (route: HeaderRoutesEnum): string => {
    return headerRoutes.find((headerRoute) => headerRoute.name === route)?.path || '#';
};
