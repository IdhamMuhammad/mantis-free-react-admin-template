// ==============================|| MENU ITEMS - INISIALISASI ||============================== //

const inisialisasi = {
    id: 'group-inisialisasi',
    title: 'Inisialisasi',
    type: 'group',
    children: [
        {
            id: 'upload-file-lapbul',
            title: 'Upload File Lapbul',
            type: 'item',
            url: '/inisialisasi/upload-file-lapdul',
            breadcrumbs: false
        },
        {
            id: 'perusahaan',
            title: 'Perusahaan',
            type: 'item',
            url: '/inisialisasi/perusahaan',
            breadcrumbs: false
        },
        {
            id: 'kantor',
            title: 'Kantor',
            type: 'item',
            url: '/inisialisasi/kantor',
            breadcrumbs: false
        },
        {
            id: 'tabungan',
            title: 'Tabungan',
            type: 'item',
            url: '/inisialisasi/tabungan',
            breadcrumbs: false
        },
        {
            id: 'deposito',
            title: 'Deposito',
            type: 'item',
            url: '/inisialisasi/deposito',
            breadcrumbs: false
        },
        {
            id: 'kredit',
            title: 'Kredit',
            type: 'item',
            url: '/inisialisasi/kredit',
            breadcrumbs: false
        }
    ]
};

export default inisialisasi;
