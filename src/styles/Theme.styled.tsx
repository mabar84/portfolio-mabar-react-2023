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
        mobile: 'screen and (max-width: 450px)'
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
        ]
    }
}
