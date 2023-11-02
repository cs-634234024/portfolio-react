import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import skincancer from '../../assets/images/skincancer.png'
import calWater from '../../assets/images/calwater.png'
import poke from '../../assets/images/poke.png'
import ceasar from '../../assets/images/cesar.png'
import viginere from '../../assets/images/vigenere.jpg'


export const data = [
    {
        id: 'data1',
        date: "2021-2022 ",
        title: "A Mobile Application for Binary Image Classification of Skin Moles",
        link: [{
            type: faGithub,
            link: 'https://github.com/cs-634234024/Skincancer_image_classification_final_project',
        },
        {
            type: faFacebook,
            link: '#'
        }

        ],


        descriptions: [
            "· Developed a bot for web scraping to extract various statistics and real-time odds.",
            "· Developed a real-time statistical analysis system for football betting and investing, which conducted extensive data analysis over four years, showing consistent positive returns on selected matches that were placed by selected conditions.",
            "· Designed and implemented a customizable condition system to identify betting opportunities that are capable of generating 3,000% of the average annual profit.",
            "· Designed and implemented an automated betting system.",
            "· Designed and Implemented a responsive web application for displaying real-time statistics and configuring the automated betting system.",
            "· Utilized load balancing and reverse proxy to ensure smooth system performance and handle increased user traffic.",
            "· Developed a notification system to send alerts to the Line application when there are matches that meet the specified conditions.",
        ],
        skills: [
            ["Flutter", "Dart",],
            ["Python", "Tensorflow"]
        ],
        picture: skincancer,
    },

    {
        id: 'data2',
        date: "2022-2023",
        title: " CalculateWater Website ",
        link: [
            {
                type: faGithub,
                link: 'https://github.com/cs-634234024/CalculateWater-React-type',
            },
            {
                type: faFacebook,
                link: '#'
            }
        ],
        descriptions: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecatifugiat commodi iure deserunt debitis itaque at soluta dolore error.Expedita distinctio magni doloribus'], 
        skills:  [
            ["React", "Typescript",],
        ],
        picture: calWater,
    },

    {
        id: 'data3',
        date: "2023",
        title: "Website Pokemon Responsive",
        link: [{
            type: faGithub,
            link: 'https://github.com/hrsdfordev/Pokemon-responsive-React-tailwind-',
        },{
            type : faLink , 
            link : 'https://pokemonbyarray.netlify.app/'
        }
    ],
        descriptions: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecatifugiat commodi iure deserunt debitis itaque at soluta dolore error.Expedita distinctio magni doloribus'], 
        skills: [
            ["React", "Javascript"],
            ['Free API']
        ],
        picture: poke,
    },

    {
        id: 'data4',
        date: "2023",
        title: " Vigenere Algorithm  ",
        link: [
            {
                type: faGithub,
                link: 'https://github.com/cs-634234024/Vigenere_Algorithm',
            },
        ],
        descriptions: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecatifugiat commodi iure deserunt debitis itaque at soluta dolore error.Expedita distinctio magni doloribus'], 
        skills:  [
            ["Python"],
        ],
        picture: viginere,
    },
   
    {
        id: 'data5',
        date: "2023",
        title: "  Ceasar Algorithm  ",
        link: [
            {
                type: faGithub,
                link: 'https://github.com/cs-634234024/Ceasar_Algorithm',
            },
        ],
        descriptions: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecatifugiat commodi iure deserunt debitis itaque at soluta dolore error.Expedita distinctio magni doloribus'], 
        skills:  [
            ["Python"],
        ],
        picture: ceasar,
    },
   
];