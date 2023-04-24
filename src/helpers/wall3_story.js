import wall3 from '../assets/wall3.png'
export const story3 = [
    {
        prompt: "As you enter the final room you take a look around - there is a door, a mirror, a table, and a phone. Each of these items holds a clue that will help you unlock the door and escape to freedom.",
        question: "What would you like to investigate first (table, phone, mirror, or door)?",
        hint:null,
        answer: null,
        image:wall3
    },
    {
        prompt: "You come across a small table with a note sitting on it. The note reads:\n \n\"I'm something you may need,\nWhen you are stuck indeed.\nIf you are lost and cannot cope,\nI'm what you cry out, but with hope.\nWhat am I?\"",
        question: "What is the answer to the riddle?",
        hint:"The answer to this riddle is a four-letter word that refers to something you might ask for when you need assistance. It's a common word that most people use on a regular basis.",
        answer: "help",
        image:wall3
    },
    {
        prompt: "Correct, the answer was help. Keep this in mind when using the phone.",
        question: "What would you like to investigate now (phone, mirror, or door)?",
        hint:null,
        answer: null,
        image:wall3
    },
    {
        prompt: "The rotary phone is a vintage telephone with a classic design. It has a circular dial that rotates when you turn it to select a number, rather than a touchpad or a keyboard. The phone is made of sturdy plastic and metal, and has a long cord that connects it to the wall. Despite its age, the phone appears to be in good condition, and it seems like it might still be functional.",
        question: "What number would you like to call?",
        hint: "The table gives a clue on which number would be beneficial to call",
        answer: "911",
        image:wall3
    },
    {
        prompt: "The call results in the following message:\n\n \"I am the key to the hidden code,\nA sequence of colors in the right mode.\nIn the correct order, the message will come through.\n\nMy first is hot, my second is fresh,\nMy third is cool, my fourth is the best.\nArrange me right, and you'll see the light,\nA message revealed, and your escape in sight.\"",
        question:"What would you like to explore now (mirror or door)?",
        hint:null,
        answer:null,
        image:wall3
    },
    {
        prompt: "In the corner of the room you spot a vintage mirror, upon closer inspection you notice that there are four colored stones in each corner: blue, red, yellow, and green. Inscribed on the mirror is the following message, \"Find the right color sequence to reveal the hidden message\".",
        question:"What is the color sequence?",
        hint:null,
        answer:"rgby",
        image:wall3
    },
    {
        prompt: "Correct, the sequence of colors was red, green, blue, yellow. The sequence of colors holds the key to your escape",
        question:"Would you like to move on to the (door or home)",
        hint:null,
        answer:null,
        image:wall3
    },
    {
        prompt: "The door is made of heavy metal and is the only apparent exit from the room. It has a numeric keypad with letters of the alphabet printed on each button, indicating that a code consisting of letters must be entered to unlock the door.",
        question:"What is the 4-letter key that will allow you to escape?",
        hint:null,
        answer:"rgby",
        image:wall3
    },
    {
        prompt: "Congratulations, you have escaped!",
        question:null,
        hint:null,
        answer:null,
        image:wall3
    }
]