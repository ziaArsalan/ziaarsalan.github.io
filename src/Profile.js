// Hexagon Icon
import speedometerIcon from '@iconify/icons-mdi/speedometer';
import cellphoneLink from '@iconify/icons-mdi/cellphone-link';
import lightBulbOutline from '@iconify/icons-mdi/lightbulb-outline';
import rocket from '@iconify/icons-mdi/rocket';

// Technologies Icon
import firebaseIcon from '@iconify/icons-mdi/firebase';
import languageHtml5 from '@iconify/icons-mdi/language-html5';
import languageCss3 from '@iconify/icons-mdi/language-css3';
import sassIcon from '@iconify/icons-mdi/sass';
import languageJavascript from '@iconify/icons-mdi/language-javascript';
import angularIcon from '@iconify/icons-mdi/angular';
import reactIcon from '@iconify/icons-mdi/react';
import nodejsIcon from '@iconify/icons-mdi/nodejs';
import awsIcon from '@iconify/icons-mdi/aws';
import jenkinsIcon from '@iconify/icons-simple-icons/jenkins';
import ubuntuIcon from '@iconify/icons-mdi/ubuntu';
import mongodbIcon from '@iconify/icons-simple-icons/mongodb';
import nginxIcon from '@iconify/icons-simple-icons/nginx';
import dockerIcon from '@iconify/icons-mdi/docker';
import npmIcon from '@iconify/icons-mdi/npm';
import gitIcon from '@iconify/icons-mdi/git';
import bitbucketIcon from '@iconify/icons-mdi/bitbucket';
import robotIcon from '@iconify/icons-mdi/robot';

// Social Icon
import githubIcon from '@iconify/icons-mdi/github';
import facebookIcon from '@iconify/icons-mdi/facebook';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import emailEdit from '@iconify/icons-mdi/email-edit';

// Reviews Images
const Reviews = []
for(let i=1; i<8; i++){
    Reviews.push(require(`./assets/img/reviews/Artboard${i}.png`))
}

const loader = require('./assets/img/loader.gif')

const profile = {
    name: 'Zia Arsalan',
    education: 'Electronic Engineer',
    career: 'Full Stack Developer',
    email: 'ziaarsalan94@yahoo.com',
    contactEmail: ['zia20isys@gmail.com', 'ziaarsalan94@yahoo.com'],
    phone: '+923475214748',
    peoplePerHour: 'https://pph.me/ziaarssalan'
}

const welcome = {
    greet: 'Hello World',
    intro: 'I\'m Zia Arsalan',
    detailIntro: 'Full Stack Developer | Designer | Career Counsler | Tech Student & Teacher'
}

const hexDetail = [
    {
        heading: 'Fast',
        description: 'Fast load times and lag free interaction, my highest priority.',
        icon: speedometerIcon
    },
    {
        heading: 'Responsive',
        description: 'My layouts will work on any device, big or small.',
        icon: cellphoneLink
    },
    {
        heading: 'Intuitive',
        description: 'Strong preference for easy to use, intuitive UX/UI.',
        icon: lightBulbOutline
    },
    {
        heading: 'Dynamic',
        description: 'Websites don\'t have to be static, I love making pages come to life.',
        icon: rocket
    }
]

const social = [
    {
        name: 'github',
        link: 'https://github.com/ziaarsalan',
        icon: githubIcon
    },
    {
        name: 'email',
        link: 'mailto:ziaarsalan94@yahoo.com',
        icon: emailEdit
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/ziaarsalan/',
        icon: linkedinIcon
    },
    {
        name: 'facebook',
        link: 'https://www.facebook.com/zia.arsalan',
        icon: facebookIcon
    }
]

const skills = {
    tagLine: 'what i am best at',
    points: [
        'Develop highly interactive Front end / User Interfaces for your web applications',
        'Creates application backend in Node, Express & Firebase Database',
        'Integration of third party services such as Firebase / AWS / Mailchimp / ActiveCampaign / Chatbots'
    ]
}

const projects = {
    walletly: {
        name: 'Walletly',
        description: 'Wallelty is a software that you can connect to your chat bot. It makes possible for you to deliver a large array of campaigns such as coupons, loyalty cards and event tickets. The cards are delivered via the chatbot into the wallet app of your customer.',
        link: 'https://walletly.ai',
        imageUrl: 'img/Walletly.png'
    },
    walletscan: {
        name: 'Wallet Scan',
        description: 'The store owner has the wallet scan app on their phone and redeems the card for the customer. The wallet scan app also has the capability to act as a beacon, letting your customers know when they walk past your store they are close by and that you have a deal on.',
        link: 'https://scan.walletly.ai',
        imageUrl: 'img/walletscan.png'
    },
    minti: {
        name: 'Minti',
        description: 'A better way to do business meaningful engagement institute long-lasting customer loyalty network with no limits tailored marketing campaigns impactful business relationships',
        link: 'https://minti.ai',
        imageUrl: 'img/minti.png'
    },
    monsterhub: {
        name: 'Monsterhub',
        description: 'MonsterHub builds habit-forming into your app. MonsterHub applies Consumer Psychology, Behavioral Economics, and Neuroscience to embed habit forming into your app. Along with the latest Tech.',
        link: 'https://monsterhub.io',
        imageUrl: 'img/monsterhub.png'
    }
}

const technologies = {
    tagLine: 'keeps my hands dirty with these technology',
    forntend: {
        heading: 'Frontend',
        technologies: [
            {
                name: 'html5',
                icon: languageHtml5
            },
            {
                name: 'css3',
                icon: languageCss3
            },
            {
                name: 'sass',
                icon: sassIcon
            },
            {
                name: 'javascript',
                icon: languageJavascript
            },
            {
                name: 'angular',
                icon: angularIcon
            },
            {
                name: 'react',
                icon: reactIcon
            }
        ],
    },
    backend: {
        heading: 'Backend',
        technologies: [
            {
                name: 'node',
                icon: nodejsIcon
            }
        ]
    },
    database: {
        heading: 'Database',
        technologies: [
            {
                name: 'firebase',
                icon: firebaseIcon
            },
            {
                name: 'mongodb',
                icon: mongodbIcon
            }
        ]
    },
    server: {
        heading: 'Server/Cloud Computing',
        technologies: [
            {
                name: 'amazon',
                icon: awsIcon
            },
            {
                name: 'ubuntu',
                icon: ubuntuIcon
            },
            {
                name: 'nginx',
                icon: nginxIcon
            },
            {
                name: 'docker',
                icon: dockerIcon
            },
            {
                name: 'jenkins',
                icon: jenkinsIcon
            }
        ]
    },
    other: {
        heading: 'Other',
        technologies: [
            {
                name: 'package manager',
                icon: npmIcon
            },
            {
                name: 'git',
                icon: gitIcon
            },
            {
                name: 'bitbucket',
                icon: bitbucketIcon
            },
            {
                name: 'chatbots',
                icon: robotIcon
            }
        ]
    }
}

const reviews = {
    images: Reviews
}

const contact = {
    tagLine: 'Have a question or want to work together?',
    form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Your Message'
    },
    url: 'http://contact-us-api.herokuapp.com/api/contact_email'
    // url = 'http://localhost:8080/api/contact_email'
}

const footer = {
    tagLine: 'Made By Zia Arsalan'
}

export {
    profile,
    welcome,
    social,
    hexDetail,
    skills,
    projects,
    technologies,
    reviews,
    contact,
    footer,
    loader
}