const day_info = {
    "1" : [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 81, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6],
    "2" : [31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 1, 2, 3, 4, 5, 6],
    "3" : [28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3],
    "4" : [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1],
    "5" : [25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5],
    "6" : [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3],
    "7" : [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    "8" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4],
    "9" : [29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2],
    "10" : [26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6],
    "11" : [31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
    "12" : [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1]
}

const month_info = {
    "1" : "January",
    "2" : "February",
    "3" : "March",
    "4" : "April",
    "5" : "May",
    "6" : "June",
    "7" : "July",
    "8" : "August",
    "9" : "September",
    "10" : "October",
    "11" : "November",
    "12" : "December"
}

const color_map = {
    'work' : '#fffdc6',
    'family' : '#c8f7f4',
    'private' : '#ffdcfb',
    'other' : 'lightgray'
}

const category_map = {
    "0": 'all',
    "1": 'work',
    '2': 'family',
    '3': 'private',
    '4': 'other',
    '5': 'none'
}

const initial_schedule = [
    {
        title: 'Child Spring Camp',
        category: 2,
        start: '2021/04/21/',
        end: '2021/04/24/',
        desc: 'child spring camp',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    },
    {
        title: 'Meeting A',
        category: 1,
        start: '2021/04/12/',
        end: '2021/04/13/',
        desc: 'child spring camp',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    },
    {
        title: 'Going to Yang Yang',
        category: 2,
        start: '2021/04/05/',
        end: '2021/04/07/',
        desc: 'going to yang yang',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    },
    {
        title: 'Visiting parents-in-law',
        category: 2,
        start: '2021/04/01/',
        end: '2021/04/02/',
        desc: 'visiting parents-in-law',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    },
    {
        title: 'Presentation',
        category: 1,
        start: '2021/04/08/13:00',
        end: '',
        desc: 'presentation',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    },
    {
        title: 'Meeting A',
        category: 1,
        start: '2021/05/03/13:00',
        end: '',
        desc: 'meeting A',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    },
    {
        title: 'Going out to eat',
        category: 2,
        start: '2021/05/07/20:00',
        end: '',
        desc: 'going to yang yang',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    },
    {
        title: 'Going to museum',
        category: 2,
        start: '2021/05/08/17:00',
        end: '',
        desc: 'going to museum',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    },
    {
        title: 'School Sports Day',
        category: 2,
        start: '2021/05/20/',
        end: '2021/05/20/',
        desc: 'school sports day',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    },
    {
        title: 'Spring-clean',
        category: 2,
        start: '2021/05/22/13:00',
        end: '',
        desc: 'clean-up house!',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    },
    {
        title: 'Parent participation day',
        category: 2,
        start: '2021/05/26/13:00',
        end: '',
        desc: 'parent participation day',
        memo: '',
        sat: 0,
        owner: '',
        pinned: false
    }
    
]

const initial_schedule_task3 = [
  {
      start_month: '4',
      start_date: '21',
      id: 'schedule0426',
      class: 'length-4',
      title: 'Child Spring Camp',
      category: 2
  },
  {
      start_month: '4',
      start_date: '12',
      id: 'schedule0412',
      class: 'length-2',
      title: 'Meeting A',
      category: 1
  },
  {
      start_month: '4',
      start_date: '5',
      id: 'schedule0412',
      class: 'length-3',
      title: 'Going to Yang Yang',
      category: 2
  },
  {
      start_month: '4',
      start_date: '1',
      id: 'schedule0401',
      class: 'length-2',
      title: 'Visiting parents-in-law',
      category: 2
  },
  {
      start_month: '4',
      start_date: '8',
      id: 'schedule0413',
      title: 'Presentation',
      category: 1
  },
  {
      start_month: '5',
      start_date: '3',
      id: 'schedule0503',
      title: 'Meeting A',
      category: 1
  },
  {
      start_month: '5',
      start_date: '7',
      id: 'schedule0507',
      title: 'Going out to eat!',
      category: 2
  },
  {
      start_month: '5',
      start_date: '8',
      id: 'schedule0508',
      title: 'Go to museum',
      category: 2
  },
  {
      start_month: '5',
      start_date: '20',
      id: 'schedule0520',
      title: 'School Sports Day',
      category: 2
  },
  {
      start_month: '5',
      start_date: '22',
      id: 'schedule0522',
      title: 'Spring-clean',
      category: 2
  },
  {
      start_month: '5',
      start_date: '26',
      id: 'schedule0526',
      title: 'Parent Participation Day',
      category: 2
  },
  {
      start_month: '5',
      start_date: '12',
      id: 'schedule0512',
      title: 'Meeting B',
      category: 1
  },
  {
      start_month: '5',
      start_date: '14',
      id: 'schedule0514',
      title: 'Bring son from academy',
      category: 2
  }
  
]


export {day_info, month_info, color_map, category_map, initial_schedule, initial_schedule_task3} 