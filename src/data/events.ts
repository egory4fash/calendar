import {Pagliadzi, Rezidentsia} from "./initial_state";

const events:EventsType = [
    {
        name:Pagliadzi.title ,
        date:1676098750000 ,
        allDay: true,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name: 'Масленица в Центре Европы',
        date:1677913150000 ,
        allDay:true ,
        extra:{
            text:'Глубокский р-н,д.Шо'
        }
    },
    {
        name: Pagliadzi.title,
        date: 1679727550000,
        allDay:true ,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name:Pagliadzi.title ,
        date:1682233150000 ,
        allDay:true ,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name:'Дударскі рэй' ,
        date:1683269950000 ,
        allDay:true ,
        extra:{
            text:'Глубокский р-н'
        }
    },
    {
        name:Pagliadzi.title ,
        date:1685432285000 ,
        allDay: true,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name:'Праздник города Миоры' ,
        date: 1685948350000,
        allDay: true,
        extra:{
            text:'Миоры'
        }
    },
    {
        name: 'Под сенью Петра и Февроньи',
        date:1686207550000 ,
        allDay: true,
        extra:{
            text:'Верхнедвинский р-н,д. Сарья'
        }
    },
    {
        name:'Прыдзісненскія крыніцы' ,
        date:1686380350000 ,
        allDay: true,
        extra:{
            text:'Шарковщина'
        }
    },
    {
        name: 'Открытый туристический слёт',
        date:1686898750000 ,
        allDay: true,
        extra:{
            text:'Шарковщина'
        }
    },
    {
        name: Pagliadzi.title,
        date:1687071550000 ,
        allDay:true ,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name:'Праздник Святого Яна' ,
        date: 1687503550000,
        allDay: true,
        extra:{
            text:'Глубокский р-н, д. Мосар'
        }
    },
    {
        name: 'Купалье',
        date:1688626750000 ,
        allDay:true ,
        extra:{
            text:'(несколько городов)'
        }
    },
    {
        name:`Международный праздник ”Вишнёвый фестиваль“ , ${Pagliadzi.title}` ,
        date:1690009150000 ,
        allDay:true ,
        extra:{
            text:'(несколько городов)'
        }
    },
    {
        name:'Районный праздник ”Яблочный Спас“' ,
        date: 1692428350000,
        allDay:true ,
        extra:{
            text:'Шарковщинский р-н, д. Алашки'
        }
    },
    {
        name: Pagliadzi.title,
        date:1692514750000 ,
        allDay:true ,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name: 'Районный экологический фестиваль «Освейские росы»',
        date:1693033150000 ,
        allDay:true ,
        extra:{
            text:'Верхнедвинский р-н, гп. Освея'
        }
    },
    {
        name:'Праздник цветов' ,
        date:1693119550000 ,
        allDay:true ,
        extra:{
            text:'Глубокое'
        }
    },
    {
        name: Pagliadzi.title,
        date:1694933950000 ,
        allDay:true ,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name:'І ў клёцак ёсць душа' ,
        date:1695452350000 ,
        allDay:true ,
        extra:{
            text:'Шарковщинский р-н,аг.Радюки'
        }
    },
    {
        name: 'Фестиваль ”Медведь“, экологический праздник ”Жураўлі і журавіны Міёрскага краю“',
        date:1695538750000 ,
        allDay:true ,
        extra:{
            text:'(несколько городов)'
        }
    },
    {
        name:'Неделя туризма, посвященная Международному Дню туризма' ,
        date:1695625150000 ,
        allDay:true ,
        extra:{
            text:'Глубокое'
        }
    },
    {
        name:'Осенний фестиваль дайверов ”DiveFest“' ,
        date: 1696661950000,
        allDay:true ,
        extra:{
            text:'Глубокский р-н, д.Шо,Агроэкоусадьба ”Заповедный остров“'
        }
    },
    {
        name:Pagliadzi.title ,
        date: 1697957950000,
        allDay: true,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name:Rezidentsia.title ,
        date:1703487550000 ,
        allDay:true ,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name:Rezidentsia.title ,
        date: 1703660350000,
        allDay:true ,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name:Rezidentsia.title ,
        date: 1703833150000,
        allDay:true ,
        extra:{
            text:'Верхнедвинск'
        }
    },
    {
        name:Rezidentsia.title ,
        date:1703919550000 ,
        allDay:true ,
        extra:{
            text:'Верхнедвинск'
        }
    }
];

export type EventsType = Array<
    {
        name:string ,
        date:number ,
        allDay:boolean ,
        extra:{
            text:string
        }
    }
    >

export default events