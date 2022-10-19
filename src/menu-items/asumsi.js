// ==============================|| MENU ITEMS - INISIALISASI ||============================== //

const asumsi = {
    id: 'asumsi-keuangan',
    title: 'Asumsi Keuangan',
    type: 'group',
    children: [
        {
            id: 'tabunganke',
            title: 'Tabungan',
            type: 'item',
            url: '/asumsi-keuangan/tabunganke',
            breadcrumbs: false
        },
        {
            id: 'depositoke',
            title: 'Deposito',
            type: 'item',
            url: '/asumsi-keuangan/depositoke',
            breadcrumbs: false
        },
        {
            id: 'kreditke',
            title: 'Kredit',
            type: 'item',
            url: '/asumsi-keuangan/kreditke',
            breadcrumbs: false
        },
        {
            id: 'pbl-deposito',
            title: 'PBL Deposito',
            type: 'item',
            url: '/asumsi-keuangan/pbl-deposito',
            breadcrumbs: false
        },
        {
            id: 'abp',
            title: 'ABP',
            type: 'item',
            url: '/asumsi-keuangan/abp',
            breadcrumbs: false
        },
        {
            id: 'inventaris',
            title: 'Inventaris',
            type: 'item',
            url: '/asumsi-keuangan/inventaris',
            breadcrumbs: false
        },
        {
            id: 'ayda',
            title: 'AYDA',
            type: 'item',
            url: '/asumsi-keuangan/ayda',
            breadcrumbs: false
        },
        {
            id: 'pyd',
            title: 'PYD',
            type: 'item',
            url: '/asumsi-keuangan/pyd',
            breadcrumbs: false
        }
    ]
};

export default asumsi;
