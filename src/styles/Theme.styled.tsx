export const myTheme = {
    colors: {
        title: '#D9D9D9',
        text: '#A7A7A7',
        description: '#CCC',
        background: '#191919',
        gradientFrom: '#00C0FD',
        gradientTo: '#E70FAA',
    },
    media: {
        less1360: '@media (max-width: 1360px)',
        less1080: '@media (max-width: 1080px)',
        less640: '@media (max-width: 640px)',
    },

    state: {
        navItems: [
            ['Home', 'home'],
            ['About', 'about'],
            ['Tech Stack', 'skills'],
            ['Projects', 'projects'],
            ['Contacts', 'contacts'],
        ],
        socialMediaItems: [
            {
                iconId: 'soc-git',
                href: "https://github.com/mabar84"
            },
            {
                iconId: 'soc-telegram',
                href: "https://tele.click/@mabartutby"
            },
            {
                iconId: 'soc-linkedin',
                href: "https://www.linkedin.com/in/%D0%BC%D0%B8%D1%85%D0%B0%D0%B8%D0%BB-%D0%B1%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-8121ab287/"
            },
        ],
        experienceCards: [
            {
                title: 'Web developer',
                organisation: 'Local Internet',
                date: 'Apr 2023 - Jul 2023',
                label: 'Project employment',
                place: '',
                showPlace: true
            },
            {
                title: 'Layout designer',
                organisation: 'Design laboratory',
                date: 'Dec 2021 - Jan 2023',
                label: 'Project employment',
                place: '',
                showPlace: true
            },
            {
                title: 'Web developer',
                organisation: 'Freelance',
                date: 'Jun 2023 - present',
                label: '',
                place: 'Everywhere',
                showPlace: true
            },
        ],
        educationCards: [
            {
                title: 'Manager-economist',
                organisation: 'Belarusian State University',
                date: '2004 - 2008',
                label: 'In absentia',
                place: '',
                showPlace: false
            },
            {
                title: 'Teacher of mathematics and computer science',
                organisation: 'Mozyr State Pedagogical University',
                date: '2001 - 2006',
                label: '',
                place: '',
                showPlace: false
            }
        ],
        skills: [
            'HTML', 'CSS', 'SASS', 'Bootstrap', 'JavaScript', 'JQuery', 'React', 'Redux', 'Storybook'
        ],
        tools: [
            'VSCode', 'WebStorm', 'Git', 'Github', 'bibucket', 'Figma', 'Photoshop', 'yarn', 'FileZilla'
        ],
        projectsCards: [
            {
                name: 'schooltask',
                title: 'Homework done!',
                text: 'Full layout of the currently working site',
                link: 'https://schooltask.ru/'
            },
            {
                name: 'yusar',
                title: 'Let\'s check your health!',
                text: 'Scroll effects, JQuery, HTML, CSS',
                link: 'https://mabar.ru/box/yusar/'
            },
            {
                name: 'track-global',
                title: 'Find your parcel!',
                text: 'Accurate tracking of postal items',
                link: 'https://track.global/ru'
            },
            {
                name: 'universal',
                title: 'Let\'s read IT news!',
                text: 'Layout, sliders, tabs, forms',
                link: 'https://mabar.ru/box/universal/'
            },
            {
                name: 'a200',
                title: 'Let\'s choose a car!',
                text: 'About mercedes-benz a200',
                link: 'https://mabar.ru/box/a200/'
            },
            {
                name: 'rb-courses',
                title: 'Choose the best IT courses!',
                text: 'Layout of several pages of a currently working website',
                link: 'https://rb.ru/kursy/school/skillbox/'
            },
            {
                name: 'cars',
                title: 'Need for JS!',
                text: 'Racing toy on CSS, HTML, JS',
                link: 'https://mabar.ru/box/cars/'
            },
            {
                name: 'tourplan',
                title: 'Let\'s have a good rest!',
                text: 'About booking, HTML, CSS, JS, some PHP for feedback form',
                link: 'https://mabar.ru/box/tourplan/'
            },
            {
                name: 'babor',
                title: 'Let\'s choose cosmetics!',
                text: 'Small page with video',
                link: 'https://mabar.ru/box/babor/'
            },
            {
                name: 'bookstore',
                title: 'Let\'s read along the way!',
                text: 'Bookstore website',
                link: 'https://mabar.ru/box/bookstore/'
            },
            {
                name: 'urok-pw',
                title: 'Test your knowledge!',
                text: 'Transferring the layout of an existing website to a new engine',
                link: 'https://mabar.ru/box/urok-pw/'
            },
            {
                name: 'sarabi',
                title: 'Let\'s book a ticket',
                text: 'Making a calendar and calculator for the main page of the finished project',
                link: 'https://mabar.ru/box/sarabi/'
            },
        ]
    }
}
