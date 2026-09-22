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
    caseContent: {
      badge: "× narrators",
      descriptionLeft:
        "Вечеринка для агентств, которые работают с Яндекс.Рекламой.\n\nДизайн носителей в фирменном стиле, визуализация, предпечатная подготовка.",
      sections: [
        { image: "/images/projects/yandex-agency-friends/kv-banner.png", width: 1158, height: 651, alt: "Ключевой визуал «Agency Friends»" },
        { image: "/images/projects/yandex-agency-friends/fotografii-s-meropriyatiya.png", width: 1158, height: 565, alt: "Фотографии с мероприятия" },
        { image: "/images/projects/yandex-agency-friends/kv-retro-avto.png", width: 1160, height: 653, alt: "Ключевой визуал — ретро-автомобиль" },
        { image: "/images/projects/yandex-agency-friends/beydzhi-uchastnikov.png", width: 1155, height: 650, alt: "Бейджи участников" },
        { image: "/images/projects/yandex-agency-friends/afishi-na-ulitse.png", width: 1160, height: 653, alt: "Афиши на улице" },
        { image: "/images/projects/yandex-agency-friends/foto-s-vecherinki.png", width: 1160, height: 778, alt: "Фотографии с вечеринки" },
      ],
    },
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
    caseContent: {
      badge: "× narrators",
      descriptionLeft:
        "Запустили коллаборацию Дикси × Брат: сделали кей вижуал, рассказывающий о конкурсе и мерче, разработали оформление флагманского магазина.\n\nВыбрали VHS-эстетику для визуалов и создали несколько интересных локаций.",
      sections: [
        { image: "/images/projects/diksi-brat/afishi-na-ulitse.png", width: 1160, height: 653, alt: "Афиши «Дикси × Брат» на улице" },
        { image: "/images/projects/diksi-brat/vhs-i-pos-v-magazine.png", width: 1158, height: 778, alt: "VHS-инсталляция и POS-материалы в магазине" },
        { image: "/images/projects/diksi-brat/instalyatsiya-vhs.png", width: 1162, height: 774, alt: "Инсталляция в стиле VHS с креслом режиссёра" },
        { image: "/images/projects/diksi-brat/vizualizatsiya-lokatsii.png", width: 1128, height: 921, alt: "Визуализация фирменной локации в магазине" },
        { image: "/images/projects/diksi-brat/detali-aktivatsii.png", width: 1164, height: 673, alt: "Детали активации — экраны, стаканчики, вывеска" },
      ],
    },
  },
  {
    slug: "rox",
    title: "Rox",
    category: "key visual",
    cardImage: "/images/home/rox.png",
    cardWidth: 374,
    cardHeight: 271,
    caseContent: {
      badge: "× narrators",
      descriptionLeft:
        "Создали образ бренда, который считывает целевая аудитория. Сформировали рамку слоганов на основе «дико», сделали KV и ресайзы.",
      sections: [
        { image: "/images/projects/rox/kv-diko-krutoy.png", width: 1158, height: 651, alt: "Ключевой визуал «Дико крутой»" },
        { image: "/images/projects/rox/bannery-diko.png", width: 1157, height: 656, alt: "Баннеры «Дико крутой», «выгодное», «красивый», «комфортный»" },
        { image: "/images/projects/rox/storis-adaptatsii.png", width: 1157, height: 567, alt: "Сторис-адаптации баннеров" },
        { image: "/images/projects/rox/banner-diko-krasivyy.png", width: 1162, height: 654, alt: "Баннер «Дико красивый»" },
        { image: "/images/projects/rox/banner-diko-komfortnyy.png", width: 1162, height: 654, alt: "Баннер «Дико комфортный»" },
        { image: "/images/projects/rox/banner-diko-vygodnyy.png", width: 1162, height: 654, alt: "Баннер «Дико выгодный в апреле»" },
        { image: "/images/projects/rox/banner-s-tsenoy.png", width: 1162, height: 654, alt: "Баннер с ценой" },
      ],
    },
  },
  {
    slug: "alfa-human",
    title: "Alfa Human",
    category: "айдентика",
    cardImage: "/images/home/alfa-human.png",
    cardWidth: 374,
    cardHeight: 271,
    caseContent: {
      badge: "× narrators",
      descriptionLeft:
        "Разработали айдентику для международного фестиваля искусств с акцентом на классическую музыку. Фестиваль организовывается при поддержке Альфа-Банка и Правительства Нижегородской области.\n\nЗабрендировали десятки поверхностей фестиваля, а на всех городских экранах выводились индивидуальные афиши событий.",
      sections: [
        { image: "/images/projects/alfa-human/kv-festivalya.png", width: 1160, height: 652, alt: "Ключевой визуал фестиваля" },
        { image: "/images/projects/alfa-human/afishi-sobytiy.png", width: 1158, height: 588, alt: "Афиши событий фестиваля" },
        { image: "/images/projects/alfa-human/buklet-i-afisha-tango.png", width: 1161, height: 531, alt: "Буклет и афиша «Миры танго»" },
        { image: "/images/projects/alfa-human/vizualizatsiya-instalyatsii.png", width: 1162, height: 654, alt: "Визуализация сценической инсталляции" },
        { image: "/images/projects/alfa-human/afishi-na-fasade.png", width: 1159, height: 748, alt: "Афиши на фасаде здания" },
      ],
    },
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
    caseContent: {
      badge: "× narrators",
      descriptionLeft:
        "СтриММур — онлайн-стрим из котодома фонда «Ника» на площадках VK Видео и VK Play Live, объединивший заботу о животных, развлечения и выступления популярных артистов.",
      sections: [
        { image: "/images/projects/vk-strimmur/strimmur-programma-efirov.png", width: 1222, height: 2717, alt: "СтриММур — афиша и программа эфиров" },
        { image: "/images/projects/vk-strimmur/mamin-layk-serdtse.png", width: 1160, height: 3027, alt: "Мамин лайк — активация «Сердце»" },
      ],
    },
  },
  {
    slug: "maccoffee",
    title: "MacCoffee",
    category: "креативная концепция",
    cardImage: "/images/home/maccoffee.png",
    cardWidth: 374,
    cardHeight: 271,
    caseContent: {
      badge: "× narrators",
      descriptionLeft:
        "Креативная концепция для продукта MacCoffee Cappuccino di Torino\n\nТвоё время — это время, которое ты можешь посвятить только себе, своему удовольствию, настроению и перезарядке. В каждом дне можно найти время, чтобы позаниматься тем, что любишь и насладиться вкусным кофе, которое идеально дополнит этот момент наедине с собой.\n\nНаши герои занимаются любимыми делами и проводят me-time с чашечкой ароматного Сappuccino di torino.\n\nВ визуалах используем теплую пленочную стилистику, передаем атмосферу спокойствия и уюта.",
      sections: [
        { image: "/images/projects/maccoffee/kv-koritsa.png", width: 1160, height: 653, alt: "KV «Твоё время» — ароматная корица" },
        { image: "/images/projects/maccoffee/kv-tyomniy-shokolad-uyut.png", width: 1160, height: 653, alt: "KV «Твоё время» — тёмный шоколад, уют" },
        { image: "/images/projects/maccoffee/kv-tyomniy-shokolad-muzyka.png", width: 1160, height: 653, alt: "KV «Твоё время» — тёмный шоколад, музыка" },
        { image: "/images/projects/maccoffee/kv-italyanskoe-udovolstvie-rim.png", width: 1160, height: 653, alt: "KV «Чашечка итальянского удовольствия» — Рим" },
        { image: "/images/projects/maccoffee/kv-italyanskoe-udovolstvie-italiya.png", width: 1160, height: 653, alt: "KV «Чашечка итальянского удовольствия» — Италия" },
        { image: "/images/projects/maccoffee/kv-vse-dorogi.png", width: 1160, height: 653, alt: "KV «Все дороги ведут к нему»" },
        { image: "/images/projects/maccoffee/kv-italiya-v-chashke.png", width: 1160, height: 653, alt: "KV «Италия в каждой чашке»" },
      ],
    },
  },
  {
    slug: "youtravel-me",
    title: "Youtravel.me",
    category: "рекламная кампания",
    cardImage: "/images/home/youtravel-me.png",
    cardWidth: 374,
    cardHeight: 271,
    caseContent: {
      badge: "× narrators",
      descriptionLeft:
        "Запустили новую рекламную кампанию, которая выделила бренд авторских туров на фоне конкурентов и оставила эмоциональный отклик.\n\nГлавный образ кампании — лицо человека, его эмоция: он разделяет момент, растворяется в нём. Весь контент был сделан с помощью нейросетей.",
      sections: [
        { image: "/images/projects/youtravel-me/kv-menyaet-navsegda.png", width: 1156, height: 650, alt: "KV «Тот самый момент… когда отпуск меняет навсегда»" },
        { image: "/images/projects/youtravel-me/kv-nastoyashchiy.png", width: 1158, height: 482, alt: "KV «Тот самый момент… когда отпуск настоящий»" },
        { image: "/images/projects/youtravel-me/kv-stoil.png", width: 1158, height: 482, alt: "KV «Тот самый момент… который точно того стоил»" },
        { image: "/images/projects/youtravel-me/kv-znakomstva.png", width: 1158, height: 482, alt: "KV «Тот самый момент… когда привозишь из отпуска знакомства»" },
        { image: "/images/projects/youtravel-me/kv-otpustit.png", width: 1158, height: 482, alt: "KV «Тот самый момент… когда можно всё отпустить»" },
        { image: "/images/projects/youtravel-me/kv-voobrazhenie.png", width: 1158, height: 482, alt: "KV «Тот самый момент… когда отпуск пробуждает воображение»" },
        { image: "/images/projects/youtravel-me/kv-vasha-istoriya.png", width: 1158, height: 483, alt: "KV «Тот самый момент… который станет вашей историей»" },
        { image: "/images/projects/youtravel-me/storis-adaptatsii.png", width: 1148, height: 534, alt: "Сторис-адаптации баннеров" },
      ],
    },
  },
  {
    slug: "yango",
    title: "Yango",
    category: "event",
    cardImage: "/images/home/yango.png",
    cardWidth: 374,
    cardHeight: 271,
    caseContent: {
      descriptionLeft:
        "Концепция брендированного мероприятия / запуска Yango Super App\n\nОсновная идея — соединить историческое наследие Омана и современные технологии.",
      sections: [
        { image: "/images/projects/yango/kv-launch.png", width: 1160, height: 653, alt: "Ключевой визуал «The Launch of a New Era»" },
        { image: "/images/projects/yango/ekran-na-ploshchadke.png", width: 1160, height: 772, alt: "Диджитал-экран на площадке" },
        { image: "/images/projects/yango/konvert-priglashenie.png", width: 1160, height: 464, alt: "Конверт-приглашение" },
        { image: "/images/projects/yango/tekst-priglasheniya.png", width: 1149, height: 779, alt: "Текст приглашения на арабском" },
        { image: "/images/projects/yango/vizualizatsiya-zala.png", width: 1155, height: 650, alt: "Визуализация зала мероприятия" },
        { image: "/images/projects/yango/pattern-i-siluety.png", width: 1160, height: 492, alt: "Фирменный паттерн и силуэты" },
        { image: "/images/projects/yango/immersivniy-performans.png", width: 1158, height: 652, alt: "Иммерсивный перформанс на мероприятии" },
        { image: "/images/projects/yango/menyu-i-priglashenie.png", width: 1160, height: 620, alt: "Меню и текст приглашения" },
      ],
    },
  },
  {
    slug: "grafit",
    title: "Графит",
    category: "айдентика",
    cardImage: "/images/home/grafit.png",
    cardWidth: 374,
    cardHeight: 271,
    caseContent: {
      badge: "× narrators",
      descriptionLeft:
        "Фирменный стиль для нового жилого комплекса\n\nСуть бренда: это новый формат городского жителя — новая техническая интеллигенция, выбирающая центр не ради статуса, а ради точности, качества и спокойной, защищённой жизни. Центр, собранный как проект. Центр, созданный для будущего.",
      sections: [
        { image: "/images/projects/grafit/logotip-tisnenie.png", width: 1160, height: 653, alt: "Логотип, тиснение" },
        { image: "/images/projects/grafit/billboard-start-prodazh.png", width: 1160, height: 653, alt: "Билборд «Старт продаж»" },
        { image: "/images/projects/grafit/buklet.png", width: 1161, height: 653, alt: "Буклет" },
        { image: "/images/projects/grafit/tsvetovye-varianty.png", width: 1161, height: 613, alt: "Цветовые варианты айдентики" },
        { image: "/images/projects/grafit/vizitka.png", width: 1160, height: 652, alt: "Визитка" },
        { image: "/images/projects/grafit/merch-i-navigatsiya.png", width: 1166, height: 656, alt: "Мерч и навигация" },
        { image: "/images/projects/grafit/buklet-s-interyerami.png", width: 1166, height: 656, alt: "Буклет с интерьерами" },
        { image: "/images/projects/grafit/termostakan-i-birka.png", width: 1166, height: 656, alt: "Мерч — термостакан и табличка на дверь" },
      ],
    },
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
    caseContent: {
      descriptionLeft: "Key Visuals, не вошедшие в проекты.",
      sections: [
        { image: "/images/projects/random-projects/yandex-27-big-birthday-mashup.png", width: 1160, height: 653, alt: "Yandex 27 — Big Birthday Mashup KV" },
        { image: "/images/projects/random-projects/sberdevices-na-svyazi.png", width: 1160, height: 653, alt: "SberDevices — «На связи» KV" },
        { image: "/images/projects/random-projects/sberdevices-trendorium.png", width: 1159, height: 652, alt: "SberDevices — «Трендориум» KV" },
        { image: "/images/projects/random-projects/sberdevices-flows.png", width: 1161, height: 653, alt: "SberDevices — «Flows» KV" },
        { image: "/images/projects/random-projects/belaya-dacha-v-poryadke-ovoshchey.png", width: 1158, height: 651, alt: "Белая Дача — «В порядке овощей»" },
        { image: "/images/projects/random-projects/tatneft-kv-prilozheniya.png", width: 1159, height: 652, alt: "Татнефть — KV мобильного приложения" },
        { image: "/images/projects/random-projects/prezentatsiya-mediastrategiya.png", width: 1156, height: 496, alt: "Презентация — медиастратегия" },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
