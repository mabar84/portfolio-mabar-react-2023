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
            ['Home', ''],
            ['About', 'about'],
            ['Tech Stack', 'skills'],
            ['Projects', 'projects'],
            ['Contact', 'contact'],
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
                href: "#"
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
            'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'SASS', 'Bootstrap', 'JQuery', 'Storybook'
        ],
        tools: [
            'VSCode', 'bibucket', 'Git', 'Github', 'Figma', 'npm', 'Photoshop', 'yarn', 'WebStorm', 'FileZilla'
        ]
    }
}
