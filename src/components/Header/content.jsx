export const headerContent = {
  logo: {
    image: "/assets/image/logo.png",
    alt: "Logo SMK Karya Guna Bhakti 2 Kota Bekasi",
    title: "SMK Karya Guna Bhakti 2 Kota Bekasi",
  },

  contactInfo: [
    {
      icon: "BsTelephonePlus",
      title: "Hotline",
      description: "+62 824 2384 23",
    },
    {
      icon: "TfiEmail",
      title: "Email",
      description: "informasi@smkkgb2.sch.id",
    },
  ],

  navigation: [
    {
      title: "Beranda",
      to: "https://smkkgb2.sch.id",
      type: "link",
    },
    {
      title: "Profile Sekolah",
      to: "https://smkkgb2.sch.id/profile-sekolah",
      type: "link",
    },
    {
      title: "PPDB",
      to: "https://app-v3.smkkgb2.sch.id/auth/register",
      type: "link",
    },
    {
      title: "Artikel",
      to: "https://smkkgb2.sch.id/artikel",
      type: "link",
    },
    {
      title: "Jurusan",
      type: "dropdown",
      subnav: [
        {
          title: "Teknik Komputer & Jaringan",
          to: "/",
        },
        {
          title: "Akutansi & Keuangan Lembaga",
          to: "/",
        },
        {
          title: "Otomatisasi & Tata Kelola Perkantoran",
          to: "/",
        },
      ],
    },
    {
      title: "BKK",
      type: "dropdown",
      subnav: [
        {
          title: "Lowongan Pekerjaan",
          to: "/",
        },
        {
          title: "Mitra Industri",
          to: "https://smkkgb2.sch.id/mitra-industri",
        },
      ],
    },
    {
      title: "Lainnya",
      type: "dropdown",
      subnav: [
        {
          title: "Foto LDKS",
          to: "/",
        },
        {
          title: "Hubungi Kami",
          to: "/",
        },
      ],
    },
    {
      title: "Mikrotik Academny",
      to: "https://mikrotik-academny.smkkgb2.sch.id",
      type: "link",
    },
  ],

  buttons: [
    {
      title: "Login",
      type: "link",
      bg: "secondary2",
      to: "https://app-v3.smkkgb2.sch.id/auth/login",
    },
    {
      title: "Daftar Sekarang",
      type: "link",
      bg: "outline-secondary",
      to: "https://app-v3.smkkgb2.sch.id/auth/register",
    },
  ],
};
