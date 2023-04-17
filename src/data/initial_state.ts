export const Pagliadzi = {
    title: 'Культурно-досуговая программа “Паглядзі, на  якой зямлі стаіш” ',
    text: 'Авторский проект исследовательских работ по краеведению Минченко Е.И.- экскурсионно- познавательный маршрут по «Золотому кольцу Верхнедвинщины». Разработан маршрут, по которому проводятся экскурсии и ознакомительные программы: «З гісторыі Сар’яншчыны», “Сар’янскі Свята-Успенскі храм. Гісторыя любові і вернасці”, “Росіцкі касцёл Святой Троіцы і яго трагічная гісторыя”.  '
}

export const Rezidentsia = {
    title: 'Театрализованная игровая программа «В резиденции Деда Мороза Трескуна Верхнедвинского» ',
    text: 'Резиденция Трескуна Верхнедвинского действует начиная с 2017 года в живописном загородном месте – Дендропарке Верхнедвинского лесхоза. Увлекательная театрализованная программа привлекает посетителей со всего района, а также близлежащих – Миорского и Брасловского районов. На территории дендропарка размещена сказочно декорированная изба Трескуна Верхнедвинского, которую посещают дети и имеют возможность общаться с главным героем резиденции. Для полноты ввпечатлений на площадке размещаются лучшие ремесленники района со своей сувенирной продукцией, проводятся мастер-классы, завлекая взрослых и детей. А посетителей, желающих отдохнуть от бесконечного потока впечатлений ждёт горячий чай и булочки в заснеженном лесу. '
}


export const initialState: InitialStateType = {
    data: [
        {
            index: 0,
            date: 11,
            month: 2,
            name: Pagliadzi.title,
            description: Pagliadzi.text,
            town: 'Верхнедвинск'
        },
        {
            index: 1,
            date: 4,
            month: 5,
            name: 'Масленица в Центре Европы',
            description: 'Праздник Масленица в народном календаре занимает отдельное место. Широко, весело и звонко встречают народный праздник “Масленица” на агроэкоусадьбе ”Заповедный остров“. В программе праздника: масленичные песни, танцы, хороводы, катание на лошадях, качелях, игры, концерт фольклорной группы ”Варган“ из г. Полоцка, блины со сметанкой, с маслом, с вареньем, с медом... и поесть досыта, и повеселиться от души: зиму-матушку провести, весну-красну встретить ',
            town: 'Глубокский р-н,д.Шо'
        },
        {
            index: 2,
            date: 25,
            month: 3,
            name: Pagliadzi.title,
            description: Pagliadzi.text,
            town: 'Верхнедвинск'
        },
        {
            index: 3,
            date: 23,
            month: 4,
            name: Pagliadzi.title,
            description: Pagliadzi.text,
            town: 'Верхнедвинск'
        },
        {
            index: 4,
            date: 5,
            month: 5,
            name: 'Дударскі рэй',
            description: '«Дударскі рэй» – международный фестиваль дударских регионов Беларуси и стран Западной Европы, который проходит в Глубокском районе 5мая один раз в два года. В эти дни на улицах города можно услышать звуки дуды, а также увидеть красочное шествие участников фестиваля в национальных костюмах. Чарующие звуки дуды не оставят никого равнодушным и познакомят с фольклором разных народов.',
            town: 'Глубокский р-н'
        },
        {
            index: 5,
            date: 21,
            month: 5,
            name: Pagliadzi.title,
            description: Pagliadzi.text,
            town: 'Верхнедвинск'
        },
        {
            index: 6,
            date: 5,
            month: 6,
            name: 'Праздник города Миоры',
            description: 'На концертной площадке проводится концерт лучших коллективов художественной самодеятельности и исполнителей Миорского района. Гости и жители Миор могут приобрести изделия народных мастеров, попробовать национальные блюда, поучаствовать в различных конкурсах, игровых программах, мероприятиях.',
            town: 'Миоры'
        },
        {
            index: 7,
            date: 8,
            month: 6,
            name: 'Под сенью Петра и Февроньи',
            description: 'Семейный молодёжный православный фестиваль ко Дню семьи, любви и верности “Под сенью Петра и Февроньи”.В агрогородкеСарья ежегодно отмечается День семьи, любви и верности. Праздник напоминает о главных жизненных ценностях, важности поддержки и заботы родных и близких людей. Приход Сарьянского Свято-Успенского храма встречает гостей на Богослужении, Крёстном ходе. У храма установлен памятник святым Петру и Февроньи, прикосновение к которому по поверьям приносит счастье и лад в семью. Общение с православными служителями церкви и душевной песней в этот день привлекает большое количество людей из разных городов Беларуси.',
            town: 'Верхнедвинский р-н,д. Сарья'
        },
        {
            index: 8,
            date: 10,
            month: 6,
            name: 'Прыдзісненскія крыніцы',
            description: 'В г.п.Шарковщине проходит районный праздник «Прыдзісненскія крыніцы», который направлен на развитие песенной культуры придвинского края. Во время мероприятия также происходит чествование тружеников села. ',
            town: 'Шарковщина'
        },
        {
            index: 9,
            date: 16,
            month: 6,
            name: 'Открытый туристический слёт',
            description: 'В Шарковщинском районе развитие получает и такой вид туризма, как спортивный. На протяжении шести лет с 2014 г., в д. Барсуки на берегу р. Мнюта возле леса, проводится открытый туристический слет с приглашением стран – партнеров: России, Латвии и Литвы. Это возможность иностранным гостям (такого вида деятельности у них нет) пожить три дня в условиях туристического лагеря, т.е. как настоящим туристам, а заодно поучаствовать в спортивных и культурно-развлекательных мероприятиях наравне с объединенными командами организаций, учреждений и предприятий района. Это своеобразный обмен опытом и обоюдная мотивация на качество участия в соревнованиях.Делегации высоко оценивают гостеприимство и уровень проведения турслета.',
            town: 'Шарковщина'
        },
        {
            index: 10,
            date: 18,
            month: 6,
            name: Pagliadzi.title,
            description: Pagliadzi.text,
            town: 'Верхнедвинск'
        },
        {
            index: 11,
            date: 23,
            month: 6,
            name: 'Праздник Святого Яна',
            description: 'В культурно-дендрологическом комплексе в д. Мосар проходит католический праздник Святого Яна. Он начинается с вечерней службы в костеле, освещения часовни с Благодатным огнем от Гроба Господня. В этот вечер девушки пускают венки на воду, ищут «папараць-кветку», водят хороводы, до утра звучат купальские песни.',
            town: 'Глубокский р-н, д. Мосар'
        },
        {
            index: 12,
            date: 6,
            month: 7,
            name: 'Купалье',
            description: 'Праздник «Купалье» проводится на источнике Иоанна Крестителя (Черневичский родник), который бьет из-под земли уже более 100 лет! Вода эта считается целебной и святой! На праздник Иоанна Крестителя от Черневичского храма великомученицы Параскевы Пятницы до родника совершается крестный ход. На месте проводится торжественная служба, освящается вода, каждый желающий может окунуться в купели. Вечером с песнями и хороводами, зажжением костра проходят купальские гуляния.',
            town: 'Глубокое'
        },
        {
            index: 12,
            date: 6,
            month: 7,
            name: 'Купалье в Центре Европы',
            description: 'Традиционные купальские обряды: плетение венков, танцы, хороводы, концерт фольклорной группы ”Варган“ из г. Полоцка.«Купальский венок»– сочетает в себе комплекс ярких и содержательных мероприятий с элементами национальной культуры и религиозных традиций.',
            town: 'Глубокский р-н,Потребительский кооператив по развитию агроэкотуризма ”Велесов путь“ '
        },
        {
            index: 12,
            date: 6,
            month: 7,
            name: 'Купалье',
            description: '6-7 июля на агроусадьбе «Заповедный остров» проводится фольклорный праздник «Купалье» в старинных народных традициях – с хороводами у купальского костра, сбором лекарственных трав, поисками клада, гаданиями на венках, дегустацией волшебной «купальской каши».',
            town: 'Глубокский р-н,агроусадьба «Заповедный остров»'
        },
        {
            index: 13,
            date: 22,
            month: 7,
            name: 'Международный праздник ”Вишнёвый фестиваль“',
            description: 'Праздник проводится с 2013 года с целью возрождения и популяризации лучших традиций, достижений национальной культуры и искусства, поддержки белорусских диаспор за рубежом, организации культурного досуга населения.Фестиваль имеет свой логотип, представленный в виде ”вишни-нотки“ с двумя лепестками, внизу которого расположена надпись ”Вишнёвый фестиваль“. ”Вишни-нотки“ логотипа символизируют веселье, торжество и музыкальность данного фестиваля. ',
            town: 'Глубокое'
        },
        {
            index: 13,
            date: 22,
            month: 7,
            name: Pagliadzi.title,
            description: Pagliadzi.text,
            town: 'Верхнедвинск'
        },
        {
            index: 14,
            date: 19,
            month: 8,
            name: 'Районный праздник ”Яблочный Спас“',
            description: 'История данного праздника началась 19 августа 1999 года, когда торжественно открыл свои двери музей садовода-селекционера Ивана Павловича Сикоры. Каждый год мероприятие проходит в новом формате. С 2015 года раз в два года в рамках праздника проходит областной праздник-конкурс любительских объединений ”Яблычны фэст“.',
            town: 'Шарковщинский р-н, д. Алашки'
        },
        {
            index: 15,
            date: 20,
            month: 8,
            name: Pagliadzi.title,
            description: Pagliadzi.text,
            town: 'Верхнедвинск'
        },
        {
            index: 16,
            date: 26,
            month: 8,
            name: 'Районный экологический фестиваль «Освейские росы»',
            description: 'Районный фестиваль проходит в «северной жемчужине» Верхнедвинского района – городском посёлке Освея, на территории которого расположены исторические архитектурные объекты и второе по величине в Беларуси озеро Освейское. Идея проведения фестиваля принадлежит республиканскому ландшафтному заказнику «Освейский». Научная конференция, уроки экологии, экологический десант по прибрежной полосе озера, экскурсии на лодках на остров «Ду», конкурс рыбаков «На утренней зорьке», катание на лошадях, спортивные соревнования, выставки ремесленников и любителей декоративно-прикладного творчества из вторичного сырья, горячая уха и конечно же концертно-развлекательная программа. И всё это под голубым освейским небом, на территории исторического парка.',
            town: 'Верхнедвинский р-н, гп. Освея'
        },
        {
            index: 17,
            date: 27,
            month: 8,
            name: 'Праздник цветов',
            description: '«Праздник цветов»– яркая цветочная феерия, знаменующая собой проводы Лета. Креативные композиции из цветов выставляются всеми участниками на центральной площади города, где найдется место для любого формата – от шуточной инсталляции до макета сада. Работает ярмарка, на которой можно купить семена и саженцы плодовых деревьев, кустов и цветов.',
            town: 'Глубокое'
        },
        {
            index: 18,
            date: 17,
            month: 9,
            name: Pagliadzi.title,
            description: Pagliadzi.text,
            town: 'Верхнедвинск'
        },
        {
            index: 19,
            date: 23,
            month: 9,
            name: 'І ў клёцак ёсць душа',
            description: 'Интерактивный праздник, посвященный клецкам. Народным клубом национальной кухни ”Груца“ будут проводится мастер-классы по приготовлению и дегустацией блюд белорусской кухни',
            town: 'Шарковщинский р-н,аг.Радюки'
        },
        {
            index: 20,
            date: 24,
            month: 9,
            name: 'Фестиваль ”Медведь“',
            description: 'Соревнования рыбаков, охотников и грибников, ознакомительная экскурсия по усадьбе; квест ”Найди клад“; дегустация ухи и блюд с грибами; концертная программа, конкурсы мастер-классы, ярмарка-продажа экопродукции и ремесленных изделий.',
            town: 'Глубокский р-н,д.Бобруйщина,Агроэкоусадьба ”Медвежий угол“'
        },
        {
            index: 20,
            date: 24,
            month: 9,
            name: 'Экологический праздник ”Жураўлі і журавіны Міёрскага краю“',
            description: 'С 2012 года на Миорщине проходит экологический праздник, в рамках которого проводятся: экологическая неделя, межрайонный турнир по интеллектуальной игре ”Что? Где? Когда?“, конкурс ансамблей песни и музыки ”Журавлиный звон“, конкурс сельских подворьев, интерактивные выставки, экскурсии по экологичесской тропе. Основные мероприятия проходят в третье воскресенье сентября в городском парке ”Полуостров“.',
            town: 'Миоры'
        },
        {
            index: 21,
            date: 25,
            month: 9,
            name: 'Неделя туризма, посвященная Международному Дню туризма',
            description: 'Неделя разнообразных туристических мероприятий: ”День открытых дверей“ ТИЦ Глубокского района, соревнования по спортивному ориентированию, экологические соревнования, пресс-тур по агроусадьбам района, кулинарный конкурс и многое другое ',
            town: 'Глубокое'
        },
        {
            index: 22,
            date: 7,
            month: 10,
            name: 'Осенний фестиваль дайверов ”DiveFest“',
            description: 'Дайвинг (рекреационные и технические погружения на озере Долгое), презентации нового снаряжения для дайвинга и многое другое.',
            town: 'Глубокский р-н, д.Шо,Агроэкоусадьба ”Заповедный остров“'
        },
        {
            index: 23,
            date: 22,
            month: 10,
            name: Pagliadzi.title,
            description: Pagliadzi.text,
            town: 'Верхнедвинск'
        },
        {
            index: 24,
            date: 25,
            month: 12,
            name: Rezidentsia.title,
            description: Rezidentsia.text,
            town: 'Верхнедвинск'
        },
        {
            index: 25,
            date: 27,
            month: 12,
            name: Rezidentsia.title,
            description: Rezidentsia.text,
            town: 'Верхнедвинск'
        },
        {
            index: 26,
            date: 29,
            month: 12,
            name: Rezidentsia.title,
            description: Rezidentsia.text,
            town: 'Верхнедвинск'
        },
        {
            index: 27,
            date: 30,
            month: 12,
            name: Rezidentsia.title,
            description: Rezidentsia.text,
            town: 'Верхнедвинск'
        }
    ],
    currentEvent:[ {
        index: 0,
        date: '',
        month: '',
        name: '',
        description: '',
        town: ''
    }]
}

export const monthsInRussian = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
]



export type InitialStateType = {
    data: Array<CalendarType>,
    currentEvent: Array<CalendarType>
}

export type CalendarType = {
    index: number,
    date: number | string,
    month: number | string
    name: string,
    description: string,
    town: string
}

