const questions = [
    {
      name: `Получение удовольствий «Самый большой секрет – мы пришли сюда, наслаждаться собой»`,
      questions: [{
        name: "Время, проводимое с друзьями-единомышленниками",
        mark: 90,
        state: "ОВ"
      }, {
        name: "Страстное хобби",
        mark: 120,
        state: "В"
      }, {
        name: " Поднимающие звуки/музыка слушание",
        mark: 40,
        state: "ОВ"
      }, {
        name: "Поднимающие звуки/музыка участие",
        mark: 150,
        state: "А"
      }, {
        name: "Поднимающие звуки/музыка пение и надлежащая работа с голосом",
        mark: 140,
        state: "Ж"
      }]
    },
    {
      name: "Диета и навыки питания: «Вы – то, что вы едите»",
      questions: [
        { name: "Питание полностью натуральными продуктами", mark: 52, state: "Ж" },
        { name: "Надлежащие витаминные добавки", mark: 100, state: "Ж" },
        { name: "Регулярный пост, 1 день в неделю", mark: 20, state: "ОВ" },
        { name: "Регулярный пост, 2 дня в неделю", mark: 80, state: "ОВ" },
        { name: "Очистка/детоксикация/внутренняя чистка тела", mark: 140, state: "Ж" },
        { name: "Вегетарианство, полезные овощи", mark: 10, state: "А" },
        { name: "Естественно выращенные овощи", mark: 90, state: "А" },
        { name: "Строгое вегетарианство", mark: 70, state: "А" },
      ]
    },
    {
      name: "Физические упражнения: «Поддержание жизни вашего «скафандра»",
      questions: [
        { name: "Регулярные прогулки", mark: 15, state: "В" },
        { name: "Занятия спортом", mark: 60, state: "В" },
        { name: "Танцы", mark: 70, state: "А" },
        { name: "Занятия в гимнастическом зале", mark: 50, state: "А" },
        { name: "Боевые искусства", mark: 110, state: "А" },
        { name: "Йога", mark: 120, state: "В" },
      ]
    },
    {
      name: "Взаимоотношения: «Испытательный полигон для наших верований»",
      questions: [
        { name: "Гармония в личных взаимоотношениях", mark: 60, state: "Ж" },
        { name: "Гармония в профессиональных/рабочих взаимоотношениях", mark: 110, state: "ОВ" },
        { name: "Позволение уйти внутри личностным договорам и проблемам", mark: 80, state: "Ж" },
        { name: "Регулярное качество близости и любовных отношений", mark: 60, state: "В" },
        { name: "Занятия любовью, основанные на святости", mark: 190, state: "А" },
      ]
    }
    ,
    {
      name: "Настройка/выравнивание/восстановление энергий: «Горючее жизни»",
      questions: [
        { name: "Регулярная гармонизация энергий тела", mark: 160, state: "ОВ" },
        { name: "Управляемая медитация на восстановление вибрационного состояния", mark: 150, state: "В" },
        { name: "Надлежащая психическая хирургия", mark: 180, state: "Ж" },
        { name: "Установление/поддержание связей с источниками более высокой вибрации", mark: 180, state: "ОВ" },
        { name: "Отрицательная ионизация тела для сбалансирования с положительной ионизацией, вызванной загрязнением, химикатами, электрическими полями и т. д.", mark: 160, state: "ОВ" },
        { name: "Высвобождение напряжений/памяти тела", mark: 220, state: "ОВ" },
        { name: "Гармонизация чакр и аурических энергий", mark: 240, state: "Ж" },
      ]
    }
    ,
    {
      name: "Действующая философия пути и жизни: «Личное видение жизни»",
      questions: [
        { name: "Непричинение вреда в мире", mark: 180, state: "Ж" },
        { name: "Заниматься любимым делом жизни", mark: 170, state: "Ж" },
        { name: "Избегание разрушительных сопернических практик", mark: 180, state: "Ж" },
        { name: "Избавление от долга", mark: 160, state: "ЖВ" },
        { name: "Регулярное проведение времени наедине с собой", mark: 90, state: "Ж" },
        { name: "Проведение времени в одиночестве на природе", mark: 220, state: "ОВ" },
        { name: "Проведение времени в священных местах (с высокой энергетикой)", mark: 180, state: "А" },
      ]
    }
    ,
    {
      name: "Условия на работе: «Как мы проводит большую часть времени»",
      questions: [
        { name: "Отказ от мышиной возни вынужденного поиска способа заработать на жизнь", mark: 170, state: "ОВ" },
        { name: "Творческий подход к проблемам и результатам", mark: 110, state: "Ж" },
        { name: "Избегание нетворческого стресса", mark: 100, state: "Ж" },
        { name: "Наличие движения вперед", mark: 80, state: "В" },
        { name: "Не быть трудоголиком", mark: 120, state: "ОВ" },
        { name: "Работа в условиях, соответствующих жизненным стандартам", mark: 90, state: "ОВ" },
        { name: "Работа на себя", mark: 105, state: "А" },
      ]
    }
    ,
    {
      name: "Жизненные условия: «Поддержка своего бытия»",
      questions: [
        { name: "Переезд из города", mark: 60, state: "ОВ" },
        { name: "Создание оптимальных условий для физической жизни", mark: 140, state: "В" },
        { name: "Освобождение от привязки к местам и ситуациям, понижающим частоту", mark: 80, state: "Ж)" },
        { name: "Освобождение от привязки к людям с низкой энергией, понижающим частоту", mark: 160, state: "Ж)" },
        { name: "Освобождение от привязки к негативным или «бессмысленным» средствам массовой информации", mark: 200, state: "Ж" },
        { name: "Жизнь в оптимально поддерживающем сообществе", mark: 320, state: "В" },
        { name: "Устранение электромагнитного загрязнения", mark: 180, state: "Ж" },
      ]
    },
    {
      name: "Духовные практики: «Балансирование духовного и физического»",
      questions: [
        { name: "Выход из догматических верований, практикуемых механически", mark: 150, state: "Ж" },
        { name: "Выбор хороших общих духовных практик", mark: 130, state: "Ж" },
        { name: "Молитва", mark: 60, state: "В" },
        { name: "Призывание", mark: 90, state: "ОВ" },
        { name: "Решение", mark: 110, state: "Ж" },
        { name: "Регулярная медитация", mark: 160, state: "А" },
        { name: "Посещение надлежащих групп/участие в деятельности групп, сфокусированных на духовности", mark: 330, state: "Ж" },
        { name: "Использование кристаллов для сохранения энергетических паттернов, мыслеформ", mark: 280, state: "Ж" },
      ]
    }
    ,
    {
      name: "Активация более высоких способностей: «К полностью сознательному человеку»",
      questions: [
        { name: "Полностью/относительно развитая интуиция", mark: 140, state: "Ж" },
        { name: "Служение человечеству", mark: 210, state: "ОВ" },
        { name: "Ченнелинг (в самом широком смысле)", mark: 440, state: "ОВ" },
        { name: "Использование линз (вид видения на расстоянии)", mark: 300, state: "Ж" },
        { name: "Практика целительской работы, основанной на энергии", mark: 380, state: "Ж" },
        { name: "Практика техник проявления", mark: 240, state: "Ж" },
      ]
    }
  ];

  export default (req, res)=>{
    res.json(questions)
  }

  