import wall_1 from '../assets/wall1.png'
import bookshelf from '../assets/bookshelf clue.PNG'
import triangle from '../assets/triangle.png'
export const story1 = [
    {
        prompt: "As you enter the room, you notice a large bookcase occupying one wall, filled with dusty old tomes and leather-bound volumes. As you move towards the opposite wall, you notice a beautiful painting hanging on the wall. It depicts a brilliant scientist, but something about it seems off. Underneath the painting you find a treasure chest, secured shut with a lock. Explore the room to find various clues to unlock the treasure chest to move on to the next phase.",
        question: "What do you want to investigate first (bookcase, painting, chest)?",
        hint:null,
        answer: null,
        image: wall_1
        
    },
    {
        prompt: "You have decided to investigate the bookcase. As you start to look closer, you notice that some of the books are horizontal and appear to be out of order. You quickly realize that the titles on the spine of the books are clues, and you must arrange them in a particular order to unlock the secret of the bookcase. Here is a list of the following titles: \"Of Mice and Men\" by John Steinbeck, \"Pachinko\" by Min Jin Lee, \"East of Eden\" by John Steinbeck, \"Notes from Underground\" by Fyodor Dostoevsky",
        question:"What is the secret clue of the bookcase?",
        hint:"The first letter of each title is important",
        answer:"open",
        image: bookshelf
    },
    {
        prompt:"Congratulations! You have obtained the clue \"OPEN\" from the bookcase",
        question: "Would you like to investigate the painting or chest?",
        hint:null,
        answer:null,
        image: bookshelf
    },
    {
        prompt: "As you explore the room, you notice a large painting hanging on one of the walls. The painting depicts a brilliant scientist. As you admire the painting, you notice a small slip of paper tucked into the frame. You carefully remove the slip of paper and see that it's a handwritten note, with the following message scrawled across it: \"To unlock the secret behind this art, solve this puzzle with all your heart.\” The message reads a brain teaser which has a numerical answer",
        question: "How many triangles do you see?",
        hint: "Pay attention to how each smaller triangle is also part of a larger triangle, and how that larger triangle is part of an even larger one, and so on.",
        answer: "24",
        image: triangle
    },
    {
        prompt:"Congratulations! You have obtained the clue \"1234\" from the painting",
        question: "Would you like to investigate the bookcase or chest?",
        hint:null,
        answer:null,
        image: triangle
    },
    {
        prompt: "As you approach the chest you see it closed with a lock that requires a word and a number to unlock",
        question:"What word and number should it be?",
        hint:null,
        answer:null,
        image: wall_1
    },
    {
        prompt: "Congratulations! You have successfully unlocked the chest. As you open the chest you find a key that will unlock the next room. You are one step closer to escaping!",
        question: null,
        hint:null,
        answer:null,
        image: wall_1
    }
]
