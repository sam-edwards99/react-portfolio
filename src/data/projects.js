import proj1 from '../assets/gerry.png';
import proj2 from '../assets/shell.png';
import proj3 from '../assets/popcorn.png';
import proj4 from '../assets/chess.png';

const PROJECTS = [
    {
        id: 1,
        title: 'gerrymander',
        description: 'A local application written in Python that ranks visually displays the different levels of gerrymandering in Congressional districts',
        link: 'https://github.com/sam-edwards99/gerrymander',
        image: proj1

    },
    {
        id: 2,
        title: 'simple_shell',
        description: 'A very simple shell written in C for linux cmd line',
        link: 'https://github.com/sam-edwards99/simple_shell',
        image: proj2

    },
    {
        id: 3,
        title: 'popcorn-high-filter',
        description: 'C code to filter out microwave noise from audio of popcorn popping in microwave',
        link: 'https://github.com/sam-edwards99/popcorn-high-filter',
        image: proj3

    },
    {
        id: 4,
        title: 'Chess MiniMax AI',
        description: 'Python AI for Chess',
        link: 'https://github.com/sam-edwards99/chess-minimax',
        image: proj4

    }
];

export default PROJECTS;