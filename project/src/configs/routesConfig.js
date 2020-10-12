import * as paths from './paths';
import LoginPage from '../page/LoginPage/LoginPage';
import LicenseCodePage from '../page/LicenseCodePage/LicenseCodePage';
import HomePage from '../page/HomePage/HomePage';
import WelcomePage from '../page/WelcomePage/WelcomePage';
import CustomerPage from '../page/CustomerPage/CustomerPage';
import MeasurementsPage from '../page/MeasurementsPage/MeasurementsPage';
import ImportExportPage from '../page/ImportExportPage/ImportExportPage';
import ReportsPage from '../page/ReportsPage/ReportsPage';
import TextblockPageContainer from '../container/textblockContainer/TextblockPageContainer';
import PrivacyPage from '../page/PrivacyPage/PrivacyPage';
import TermsOfUsePage from '../page/TermsOfUsePage/TermsOfUsePage';
import ImprintPage from '../page/ImprintPage/ImprintPage';
import ReportEditorPage from '../page/ReportEditorPage/ReportEditorPage';

export const openRoutes = [
    {
        path: paths.LOGIN,
        component: LoginPage,
        exact: true
    },
    {
        path: paths.ROOT,
        component: HomePage,
        exact: true
    },
    {
        path: paths.PRIVACY,
        component: PrivacyPage,
        exact: true
    },
    {
        path: paths.IMPRINT,
        component: ImprintPage,
        exact: true
    },
    {
        path: paths.TERMS_OF_USE,
        component: TermsOfUsePage,
        exact: true
    },
    {
        path: paths.TINY_EDITOR,
        component: ReportEditorPage,
        exact: true
    }
];

export const protectedRoutes = [
    {
        path: paths.WELCOME,
        component: WelcomePage,
        exact: true
    },
    {
        path: paths.LICENSECODE,
        component: LicenseCodePage,
        exact: true
    },
    {
        path: paths.CUSTOMERS,
        component: CustomerPage,
        exact: true
    },
    {
        path: paths.MEASUREMENTS,
        component: MeasurementsPage,
        exact: true
    },
    {
        path: paths.REPORTINGS,
        component: ReportsPage,
        exact: true
    },
    {
        path: paths.IMPORT_EXPORT,
        component: ImportExportPage,
        exact: true
    },
    {
        path: paths.TEXTBLOCKS,
        component: TextblockPageContainer,
        exact: true
    }
];
