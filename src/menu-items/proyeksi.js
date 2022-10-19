// ==============================|| MENU ITEMS - INISIALISASI ||============================== //

const proyeksi = {
    id: 'proyeksi-keuangan',
    title: 'Proyeksi Keuangan',
    type: 'group',
    children: [
        {
            id: 'neraca',
            title: 'Neraca',
            type: 'item',
            url: '/proyeksi-keuangan/neraca',
            breadcrumbs: false
        },
        {
            id: 'laba-rugi',
            title: 'Laba Rugi',
            type: 'item',
            url: '/proyeksi-keuangan/laba-rugi',
            breadcrumbs: false
        },
        {
            id: 'rekening-administratif',
            title: 'Rekening Administratif',
            type: 'item',
            url: '/proyeksi-keuangan/rekening-administratif',
            breadcrumbs: false
        },
        {
            id: 'rasio-keuangan',
            title: 'Rasio Keuangan',
            type: 'item',
            url: '/proyeksi-keuangan/rasio-keuangan',
            breadcrumbs: false
        }
    ]
};

export default proyeksi;
