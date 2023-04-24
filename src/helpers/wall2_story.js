import wall2 from '../assets/wall2.png'
import clockmove from '../assets/clock moves.png'
import clockhands from '../assets/clock closeup.png'
import opensafe from '../assets/open safe.png'

export const story2 = [
    {
        prompt: "As you enter the second room, you find yourself standing in the middle of an old and dusty room. The room is dimly lit, and you can hear the sound of a grandfather clock ticking away in the background. As you look around, you notice a hole in the wall. It's about the size of a small book, and it's located just behind the grandfather clock. You also spot a locked safe in the corner of the room, with a combination lock that requires a 3 number combination to open.",
        question: "What do you want to investigate first (clock or safe)?",
        hint:null,
        answer: null,
        image:wall2
    },
    {
        prompt: "As you approach the clock, you notice that it looks a little out of place. There are some scratches on the wooden frame, and you can see that it has been moved recently, as there are marks on the floor where the clock used to stand. It's as if someone was trying to hide something behind or underneath it.",
        question: "Would you like to move the clock or continue to investigate? (move or investigate)",
        hint:null,
        answer: null,
        image: clockmove
    },
    {
        prompt: "As you approach the clock, you move it out of the way and see that on the wall behind there is a hole just big enough to fit your hand. You decide to reach in and find a newspaper. ",
        question: "Would you like to investigate the clock further or go to the safe? (investigate or safe) ",
        hint:null,
        answer: null,
        image:null
    },
    {
        prompt: "As you examine the clock hands, you notice that they are slightly loose and can be moved. You try turning the hands, and to your surprise, you hear a soft clicking sound. You realize that inputting a correct time will open a secret compartment within the clock",
        question: "What should the time be?",
        hint:"Pay close attention to the timestamp on the newspaper. It might hold a clue that will help you unlock the next puzzle.",
        answer: null,
        image: clockhands
    },
    {
        prompt: "As you turn the hour and minute hand to the correct places you hear a loud click and two small double doors on the clock suddenly swing open. You look inside and find what appears to be a serial number etched into the wood of the clock: 30-16-45",
        question: "Would you like to move to the safe or home?",
        hint:null,
        answer: null,
        image:clockhands
    },
    {
        prompt: "As you approach the safe you see it is locked tight with a 3 number combination",
        question: "Do you know the combination? (xx-xx-xx format)",
        hint:null,
        answer: "30-16-45",
        image:wall2
    },
    {
        prompt: "Congratulations! You enter the code and manage to unlock the safe. Inside the safe, you find a key to unlock the door and move on to the next room. ",
        question: null,
        hint:null,
        answer:null,
        image:opensafe
    }
]