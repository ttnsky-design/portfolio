export type ProjectCaseSection = {
  image: string;
  width: number;
  height: number;
  alt: string;
};

export type ProjectCaseContent = {
  badge?: string;
  descriptionLeft: string;
  descriptionRight?: string;
  caseUrl?: string;
  sections: ProjectCaseSection[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  cardImage: string;
  cardWidth: number;
  cardHeight: number;
  caseContent?: ProjectCaseContent;
};

export const PROJECTS: Project[] = [
  {
    slug: "rostovskiy-kreml",
    title: "Ростовский Кремль",
    category: "айдентика",
    cardImage: "/images/home/rostovskiy-kreml.png",
    cardWidth: 374,
    cardHeight: 271,
    caseContent: {
      badge: "× narrators",
      descriptionLeft:
        "Ростовский кремль — один из важнейших памятников древнерусского зодчества, задуманный митрополитом Ионией Сысоевичем как земное отражение Небесного града.\n\nПроект был направлен на переосмысление исторического наследия кремля и его воплощение в современной, гибкой визуальной системе.",
      descriptionRight:
        "Вместо того чтобы буквально воспроизводить архитектуру, мы искали визуальные коды в самом пространстве. Центральным мотивом стала птица — символ, встречающийся на гербах и печатях Ростова, в декоративных деталях кремля и в окружающей природе.\n\nИдентичность строится на идее отражения: кремль отражается в воде, история — в настоящем, а символ — в самом себе. Четыре зеркально отражённые птицы образуют орнамент, а тот же принцип формирует графический язык, вдохновлённый фресками кремлёвских церквей.",
      caseUrl: "https://dprofile.ru/case/194879/rostovskii-kreml-aidentika",
      sections: [
        { image: "/images/projects/rostovskiy-kreml/logotip-tisnenie.png", width: 1158, height: 651, alt: "Логотип, тиснение" },
        { image: "/images/projects/rostovskiy-kreml/surguchnaya-pechat.png", width: 1158, height: 651, alt: "Сургучная печать" },
        { image: "/images/projects/rostovskiy-kreml/afishi-na-ulitse.png", width: 1158, height: 651, alt: "Афиши на улице" },
        { image: "/images/projects/rostovskiy-kreml/vse-postery.png", width: 1158, height: 651, alt: "Все постеры" },
        { image: "/images/projects/rostovskiy-kreml/sotsseti.png", width: 1158, height: 651, alt: "Оформление соцсетей" },
        { image: "/images/projects/rostovskiy-kreml/platok.png", width: 1158, height: 651, alt: "Платок" },
        { image: "/images/projects/rostovskiy-kreml/buklet.png", width: 1154, height: 649, alt: "Буклет" },
        { image: "/images/projects/rostovskiy-kreml/ikonki.png", width: 1156, height: 650, alt: "Иконки" },
        { image: "/images/projects/rostovskiy-kreml/slide-679.png", width: 1156, height: 650, alt: "Фотографии кремля" },
        { image: "/images/projects/rostovskiy-kreml/slide-841.png", width: 1160, height: 652, alt: "Свеча" },
        { image: "/images/projects/rostovskiy-kreml/slide-850.png", width: 1160, height: 644, alt: "Худи с вышивкой" },
      ],
    },
  },
  {
    slug: "yandex-agency-friends",
    title: "Yandex Agency Friends",
    category: "event",
    cardImage: "/images/home/yandex-agency-friends.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "capaco",
    title: "Capaco",
    category: "айдентика",
    cardImage: "/images/home/capaco.png",
    cardWidth: 374,
    cardHeight: 271,
    caseContent: {
      badge: "× narrators",
      descriptionLeft:
        "С нуля упаковали бренд производителя пластиковых крышек.\n\nНовый завод в ОАЭ получил лаконичный нейм CAPACO: CAps PAckaging COmpany. Доступно носителям любого языка.\n\nМинимализм, модульность и промышленная эстетика — основа визуала нового бренда. Приземистый гротеск, строгая сетка и геометрия символа отражают производственную экспертизу компании. Продумали все точки контакта — от самой упаковки до транспорта, который её развозит и цифровых интерфейсов.",
      caseUrl: "https://dprofile.ru/case/149869/capaco",
      sections: [
        { image: "/images/projects/capaco/zagolovok.png", width: 1160, height: 653, alt: "Заголовок проекта" },
        { image: "/images/projects/capaco/brendbuk.png", width: 1188, height: 668, alt: "Брендбук" },
        { image: "/images/projects/capaco/buklet-i-identika.png", width: 1156, height: 657, alt: "Буклет и айдентика" },
        { image: "/images/projects/capaco/sayt.png", width: 1156, height: 650, alt: "Сайт и цифровые интерфейсы" },
        { image: "/images/projects/capaco/upakovka.png", width: 1152, height: 833, alt: "Упаковка" },
        { image: "/images/projects/capaco/brendirovanie-furgona.png", width: 1156, height: 650, alt: "Брендирование фургона" },
        { image: "/images/projects/capaco/spetsodezhda.png", width: 1156, height: 569, alt: "Спецодежда" },
        { image: "/images/projects/capaco/naruzhnaya-reklama.png", width: 1156, height: 677, alt: "Наружная реклама" },
        { image: "/images/projects/capaco/merch.png", width: 1156, height: 667, alt: "Мерч" },
      ],
    },
  },
  {
    slug: "diksi-brat",
    title: "Дикси × Брат",
    category: "коллаборация",
    cardImage: "/images/home/diksi-brat.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "rox",
    title: "Rox",
    category: "key visual",
    cardImage: "/images/home/rox.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "alfa-human",
    title: "Alfa Human",
    category: "айдентика",
    cardImage: "/images/home/alfa-human.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "sovkombank",
    title: "Совкомбанк",
    category: "рекламная кампания",
    cardImage: "/images/home/sovkombank.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "pik",
    title: "Пик",
    category: "спецпроекты",
    cardImage: "/images/home/pik.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "vk-strimmur",
    title: "VK Стриммур",
    category: "",
    cardImage: "/images/home/vk-strimmur.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "maccoffee",
    title: "MacCoffee",
    category: "креативная концепция",
    cardImage: "/images/home/maccoffee.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "youtravel-me",
    title: "Youtravel.me",
    category: "рекламная кампания",
    cardImage: "/images/home/youtravel-me.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "yango",
    title: "Yango",
    category: "event",
    cardImage: "/images/home/yango.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "grafit",
    title: "Графит",
    category: "айдентика",
    cardImage: "/images/home/grafit.png",
    cardWidth: 374,
    cardHeight: 271,
  },
  {
    slug: "svet-vnutri-menya",
    title: "Свет внутри меня",
    category: "мерч",
    cardImage: "/images/home/svet-vnutri-menya.png",
    cardWidth: 374,
    cardHeight: 271,
    caseContent: {
      descriptionLeft:
        "Создали коллекцию мерча для жителей мурманской области.\n\nСообщение-манифест личной устойчивости: когда солнце уходит за горизонт, единственным настоящим маяком остается внутренний ресурс человека. Этот концепт про то, что темнота вокруг не способна поглотить то сияние, которое мы несем в себе.",
      sections: [
        { image: "/images/projects/svet-vnutri-menya/severnoe-siyanie-referensy.png", width: 1153, height: 761, alt: "Референсы северного сияния" },
        { image: "/images/projects/svet-vnutri-menya/hudi.png", width: 1163, height: 665, alt: "Худи со светящимся принтом" },
        { image: "/images/projects/svet-vnutri-menya/hudi-v-temnote.png", width: 1162, height: 933, alt: "Флуоресцентный принт в темноте" },
        { image: "/images/projects/svet-vnutri-menya/svitshot.png", width: 1160, height: 663, alt: "Свитшот со светящимся принтом" },
        { image: "/images/projects/svet-vnutri-menya/svecha.png", width: 1160, height: 653, alt: "Свеча «Свет внутри меня»" },
        { image: "/images/projects/svet-vnutri-menya/chay.png", width: 1160, height: 663, alt: "Чай «Завари и тепло внутри»" },
        { image: "/images/projects/svet-vnutri-menya/spichki.png", width: 1160, height: 653, alt: "Спички «Свет внутри меня»" },
        { image: "/images/projects/svet-vnutri-menya/termos.png", width: 1160, height: 653, alt: "Термос «Тепло внутри меня»" },
        { image: "/images/projects/svet-vnutri-menya/gazovaya-lampa.png", width: 1160, height: 667, alt: "Газовая лампа" },
        { image: "/images/projects/svet-vnutri-menya/zazhigalka.png", width: 1159, height: 694, alt: "Зажигалка «Свет внутри меня»" },
        { image: "/images/projects/svet-vnutri-menya/fonarik.png", width: 1172, height: 647, alt: "Фонарик" },
      ],
    },
  },
  {
    slug: "random-projects",
    title: "Random Projects",
    category: "",
    cardImage: "/images/home/random-projects.png",
    cardWidth: 374,
    cardHeight: 271,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
