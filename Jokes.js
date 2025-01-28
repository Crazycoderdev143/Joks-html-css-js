let myJokes = [
    "What do sea monsters eat? Fish and ships!",
    "What do a tick and the Eif fel tower have in common?They’re both Paris sites.What did the ocean say to the shore?Nothing,it just waved.",
    "When does a joke become a dad joke? When it’s apparent.Step 5 What did summer say to spring?",
    "What did summer say to spring? I’m going to fall!",
    "What did one snowman say to another? Wait,do you smell carrots?",
    "What did the hungry clock do? It went back  seconds.",
    "What’s the tallest building in the world? A library,of course. It has so many stories!",
    "Don’t take life too seriously. Remember,you will never get out of it alive! Step 0 I always take life with a grain of salt. And a slice of lemon. And a shot of tequila!",
    "I always take life with a grain of salt. And a slice of lemon. And a shot of tequila!",
    "I know they say that money talks… ...But all mine says is “Goodbye!”",
    "I used to have a handle on life… ...But then it broke.",
    "I tried to catch fog the other day. But I mist.",
    "Let’s start telling people their brain is an app. Maybe then they’ll want to use it! Step 5 I’m reading a book about anti-gravity.",
    "I’m reading a book about anti-gravity. It’s literally impossible to put down!",
    "What do you call a one-eyed dinosaur? Thesaurus.",
    "Why can’t you trust a burrito? They tend to spill the beans.",
    "What’s a plant’s favorite drink? Root beer!",
    "I threw a boomerang a few years ago… ...And now I live in constant fear. Step What did one hat say to another?",
    "What did one hat say to another? You wait here; I’ll go on ahead.",
    "I get enough exercise just pushing my luck!",
    "Blunt pencils are really pointless.",
    "6:0 is the best time on a clock,hands down.",
    "Just burned ,000 calories! That’s the last time I leave brownies in the oven while I nap.Step 5 You and I will be friends forever!",
    "You and I will be friends forever! Because at this point,you know too much.",
    "Thanks for being my best friend. And for always going along with my worst ideas,of course!",
    "This may be cheesy… ...But you’re legen-dairy!",
    "What concert only costs 5 cents 50 Cent and Nickelback.",
    "There are  kinds of people in this world. Those who can count and those who can’t. Step 0 What kind of button doesn’t button or unbutton?",
    "What kind of button doesn’t button or unbutton? A belly button!",
    "I know someone who does a great impression of an owl…",
    "I’m a nobody and nobody is perfect… ...Therefore,I must be perfect!",
    "Knock knock. Who’s there? Muffin. Muffin who? Muffin in this world can stop us!",
    "Knock knock. Who’s there? Ben. Ben who? Ben thinking about you all day!",
    "Knock knock. Who’s there? Spell. Spell who? Okay,fine…W-H-O.",
    "Is your name Google? Because you’ve got everything I’m searching for.",
    "Are you a keyboard? Because you’re my type!",
    "On a scale of  to 0,you’re a 9… ...And I’m the  you need!",
    "Roses are red,the world is a mess… ...And worst of all,you’re not answering my texts.",
    "Step 0 Do you know what my favorite thing in the world is?",
    "Do you know what my favorite thing in the world is? The second word of this text!",
    "We’ll we’ll we’ll… If it isn’t autocorrect.Autocorrect has become my worst enema.",
    "What do you call a bear with no teeth? A gummy bear.",
    "The rotation of the Earth really makes my day.",
    "The past,present,and future walk into a bar. It got a little tense."
]

let next = document.getElementById("next")
let index = Math.floor((Math.random() * myJokes.length - 1) + 1)
document.getElementById("sr.no").innerText = ("(" + (index + 1) + ")   ")
document.getElementById("joke").innerText = myJokes[index]

next.addEventListener("click", (btn) => {
    index = Math.floor((Math.random() * myJokes.length - 1) + 1)
    document.getElementById("sr.no").innerText = (index + 1)
    document.getElementById("joke").innerText = myJokes[index]
});