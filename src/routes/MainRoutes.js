import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

//render - inisialisasi
const UploadFileLapbul = Loadable(lazy(() => import('pages/inisialisasi/UploadFileLapbul')));
const Perusahaan = Loadable(lazy(() => import('pages/inisialisasi/Perusahaan')));
const Kantor = Loadable(lazy(() => import('pages/inisialisasi/Kantor')));
const Tabungan = Loadable(lazy(() => import('pages/inisialisasi/Tabungan')));
const Deposito = Loadable(lazy(() => import('pages/inisialisasi/Deposito')));
const Kredit = Loadable(lazy(() => import('pages/inisialisasi/Kredit')));

//render - asumsi keuangan
const TabunganKe = Loadable(lazy(() => import('pages/asumsi-keuangan/TabunganKe')));
const DepositoKe = Loadable(lazy(() => import('pages/asumsi-keuangan/DepositoKe')));
const KreditKe = Loadable(lazy(() => import('pages/asumsi-keuangan/KreditKe')));
const PblDeposito = Loadable(lazy(() => import('pages/asumsi-keuangan/PblDeposito')));
const Abp = Loadable(lazy(() => import('pages/asumsi-keuangan/Abp')));
const Inventaris = Loadable(lazy(() => import('pages/asumsi-keuangan/Inventaris')));
const Ayda = Loadable(lazy(() => import('pages/asumsi-keuangan/Ayda')));
const Pyd = Loadable(lazy(() => import('pages/asumsi-keuangan/Pyd')));

//render - proyeksi keuangan
const Neraca = Loadable(lazy(() => import('pages/proyeksi-keuangan/Neraca')));
const LabaRugi = Loadable(lazy(() => import('pages/proyeksi-keuangan/LabaRugi')));
const RekeningAdministratif = Loadable(lazy(() => import('pages/proyeksi-keuangan/RekeningAdministratif')));
const RasioKeuangan = Loadable(lazy(() => import('pages/proyeksi-keuangan/RasioKeuangan')));

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'inisialisasi',
            children: [
                {
                    path: 'upload-file-lapdul',
                    element: <UploadFileLapbul />
                },
                {
                    path: 'perusahaan',
                    element: <Perusahaan />
                },
                {
                    path: 'kantor',
                    element: <Kantor />
                },
                {
                    path: 'tabungan',
                    element: <Tabungan />
                },
                {
                    path: 'deposito',
                    element: <Deposito />
                },
                {
                    path: 'kredit',
                    element: <Kredit />
                }
            ]
        },
        {
            path: 'asumsi-keuangan',
            children: [
                {
                    path: 'tabunganke',
                    element: <TabunganKe />
                },
                {
                    path: 'depositoke',
                    element: <DepositoKe />
                },
                {
                    path: 'kreditke',
                    element: <KreditKe />
                },
                {
                    path: 'pbl-deposito',
                    element: <PblDeposito />
                },
                {
                    path: 'abp',
                    element: <Abp />
                },
                {
                    path: 'inventaris',
                    element: <Inventaris />
                },
                {
                    path: 'ayda',
                    element: <Ayda />
                },
                {
                    path: 'pyd',
                    element: <Pyd />
                }
            ]
        },
        {
            path: 'proyeksi-keuangan',
            children: [
                {
                    path: 'neraca',
                    element: <Neraca />
                },
                {
                    path: 'laba-rugi',
                    element: <LabaRugi />
                },
                {
                    path: 'rekening-administratif',
                    element: <RekeningAdministratif />
                },
                {
                    path: 'rasio-keuangan',
                    element: <RasioKeuangan />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
