const produtcs = [
  {
    id: 1,
    title: 'کیک اسفنجی و کرم',
    img: '/assets/img/products/marble-cake-thumb.jpg',
    category: 'کیک ها',
    createDate: '2 تیر 1400',
    status: 'درانتظار',
    statusColor: 'primary',
    description: 'کیک عروسی با گل ماکارون و زغال اخته',
    sales: 1647,
    stock: 62,
  },
  {
    id: 2,
    title: 'کیک گیلاس',
    category: 'کاپ کیک',
    img: '/assets/img/products/fat-rascal-thumb.jpg',
    createDate: '1 تیر 1397',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک پنیری با کلوچه های شکلاتی و بیسکویت خامه ای',
    sales: 1240,
    stock: 48,
  },
  {
    id: 3,
    title: 'کیک شکلات',
    img: '/assets/img/products/chocolate-cake-thumb.jpg',
    category: 'کیک ها',
    createDate: '25 خرداد 1400',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'چیزکیک خانگی با توت تازه و نعناع',
    sales: 1080,
    stock: 57,
  },
  {
    id: 4,
    title: 'فت راسکل',
    img: '/assets/img/products/goose-breast-thumb.jpg',
    category: 'کیک ها',
    createDate: '21 خرداد 1400',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک شکلاتی با توت',
    sales: 1014,
    stock: 41,
  },
  {
    id: 5,
    title: 'کیک پرتغالی',
    category: 'کاپ کیک',
    img: '/assets/img/products/petit-gateau-thumb.jpg',
    createDate: '2 شهریور 1400',
    status: 'درانتظار',
    statusColor: 'primary',
    description: 'کیک شکلاتی با ماسکارپونه',
    sales: 985,
    stock: 23,
  },
  {
    id: 6,
    title: 'سالزبورگی',
    img: '/assets/img/products/salzburger-nockerl-thumb.jpg',
    category: 'دسر',
    createDate: '14 مهر 1400',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک عروسی تزئین شده با دونات و توت وحشی',
    sales: 962,
    stock: 34,
  },
  {
    id: 7,
    title: 'تیرامیسو',
    img: '/assets/img/products/napoleonshat-thumb.jpg',
    category: 'دسر',
    createDate: '5 اردیبهشت 1400',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک پنیری با توت تازه و نعناع برای دسر',
    sales: 921,
    stock: 31,
  },
  {
    id: 8,
    title: 'چیز کیک',
    img: '/assets/img/products/cheesecake-thumb.jpg',
    category: 'کیک ها',
    createDate: '18 آبان 1400',
    status: 'درانتظار',
    statusColor: 'primary',
    description: 'کیک شکلاتی وگان خوشمزه',
    sales: 887,
    stock: 21,
  },
  {
    id: 9,
    title: 'کیک فنجانی',
    img: '/assets/img/products/financier-thumb.jpg',
    category: 'کیک ها',
    createDate: '15 خرداد 1400',
    status: 'درانتظار',
    statusColor: 'primary',
    description:
      'کیک ماست توت فرنگی شکلات سفید تزئین شده با میوه های تازه و شکلات',
    sales: 865,
    stock: 53,
  },
  {
    id: 10,
    title: 'کیک هویج',
    img: '/assets/img/products/genoise-thumb.jpg',
    category: 'کاپ کیک',
    createDate: '11 شهریور 1400',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک میوه ای کریسمس ، پودینگ در بالا',
    sales: 824,
    stock: 55,
  },
  {
    id: 11,
    title: 'کیک قهوه',
    img: '/assets/img/products/gingerbread-thumb.jpg',
    category: 'کیک ها',
    createDate: '10 فروردین 1400',
    status: 'درانتظار',
    statusColor: 'primary',
    description: 'کیک عروسی تزئین شده با دونات و توت وحشی',
    sales: 714,
    stock: 12,
  },
  {
    id: 12,
    title: 'بوچلاتو',
    img: '/assets/img/products/magdalena-thumb.jpg',
    category: 'کیک ها',
    createDate: '22 مهر 1400',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک میوه ای کریسمس ، پودینگ در بالا',
    sales: 702,
    stock: 14,
  },
  {
    id: 13,
    title: 'پارکین',
    img: '/assets/img/products/parkin-thumb.jpg',
    category: 'کیک ها',
    createDate: '22 بهمن 1400',
    status: 'درانتظار',
    statusColor: 'primary',
    description:
      'کیک ماست توت فرنگی شکلات سفید تزئین شده با میوه های تازه و شکلات',
    sales: 689,
    stock: 78,
  },
  {
    id: 14,
    title: 'تارت',
    img: '/assets/img/products/streuselkuchen-thumb.jpg',
    category: 'کیک ها',
    createDate: '22 مهر 1400',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک شکلاتی وگان خوشمزه',
    sales: 645,
    stock: 55,
  },
  {
    id: 15,
    title: 'کیک چای',
    img: '/assets/img/products/tea-loaf-thumb.jpg',
    category: 'کیک ها',
    createDate: '10 دی 1400',
    status: 'درانتظار',
    statusColor: 'primary',
    description: 'کیک پنیری با توت تازه و نعناع برای دسر',
    sales: 632,
    stock: 20,
  },
  {
    id: 16,
    title: 'ناپلئونی',
    img: '/assets/img/products/merveilleux-thumb.jpg',
    category: 'کیک ها',
    createDate: '18 اردیبهشت 1400',
    status: 'درانتظار',
    statusColor: 'primary',
    description: 'کیک شکلاتی با ماسکارپونه',
    sales: 621,
    stock: 6,
  },
  {
    id: 17,
    title: 'کیک سیب',
    img: '/assets/img/products/fruitcake-thumb.jpg',
    category: 'کیک ها',
    createDate: '12 فروردین 1400',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'کیک شکلاتی با توت',
    sales: 595,
    stock: 17,
  },
  {
    id: 18,
    title: 'کیک میوه ای',
    img: '/assets/img/products/bebinca-thumb.jpg',
    category: 'کیک ها',
    createDate: '4 اردیبهشت 1400',
    status: 'پردازش',
    statusColor: 'secondary',
    description: 'چیزکیک خانگی با توت تازه و نعناع',
    sales: 574,
    stock: 16,
  },
  {
    id: 19,
    title: 'کیک کره ای',
    img: '/assets/img/products/cremeschnitte-thumb.jpg',
    category: 'دسر',
    createDate: '4 خرداد 1400',
    status: 'درانتظار',
    statusColor: 'primary',
    description: 'کیک پنیری با کلوچه های شکلاتی و بیسکویت خامه ای',
    sales: 562,
    stock: 9,
  },
  {
    id: 20,
    title: 'سوفله',
    img: '/assets/img/products/souffle-thumb.jpg',
    category: 'کاپ کیک',
    createDate: '16 فروردین 1400',
    status: 'درانتظار',
    statusColor: 'primary',
    description: 'کیک عروسی با گل ماکارون و زغال اخته',
    sales: 524,
    stock: 14,
  },
];

export default produtcs;
