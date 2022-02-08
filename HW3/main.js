function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;

    //walk to town
    if (choice == 1 && answer1 == "Head into town") {
        document.getElementById("story").innerHTML = "Heading into town, Frog exchanges pleasantries with a few of the towns folk as they pass by. Frog has a couple of things on his grocery list he would like to grab, but he also finds himself feeling a bit famished.";
        document.getElementById("choice1").innerHTML = "Run some errands";
        document.getElementById("choice2").innerHTML = "Grab some lunch at the Inn";
    } else if (choice == 1 && answer1 == "Run some errands") {
        document.getElementById("story").innerHTML = "At the top of the list, Jam and Honey. Frog knows that Badger makes some of the best homemade jam in the forest, and Salamander's bees make the richest honey he's ever tasted. Who to visit first?";
        document.getElementById("choice1").innerHTML = "Visit Badger";
        document.getElementById("choice2").innerHTML = "Visit Salamander";
    } else if (choice == 2 && answer2 == "Grab some lunch at the Inn") {
        document.getElementById("story").innerHTML = "Stopping by the Inn, Frog is promptly greeted by Mole, who owns the place. Frog sits at the bar and orders two fresh biscuits with honey and jam, his favorite. Mole regretfully informs him that they are out of both, and the best he can do is butter. Slightly disappointed, Frog then remembers that Badger makes some of the best Jam in the forest, and he heard Salamander's bees make the richest honey. Maybe he should pay one of them a visit?";
        document.getElementById("choice1").innerHTML = "Visit Badger";
        document.getElementById("choice2").innerHTML = "Visit Salamander";
    } else if (choice == 1 && answer1 == "Visit Badger") {
        document.getElementById("story").innerHTML = "Waltzing up to Badger's house, Frog gives a hearty knock on the door. After a moment, it opens and reveals Badger's larger frame. Badger gives Frog a smile as two engage in idle chatter. As they talk, Badger grabs some of their homemade jam already jarred and tied with a bow. As they hand them off to Frog, they inform him that they are having some dinner guests that night and would love for Frog to attend. Frog ponders this request. He could change his plans for Badger or take some time for himself. What should he do?";
        document.getElementById("choice1").innerHTML = "Have dinner with Badger";
        document.getElementById("choice2").innerHTML = "Go for a walk around the pond";
    } else if (choice == 2 && answer2 == "Visit Salamander") {
        document.getElementById("story").innerHTML = "Venturing out to Salamanders farm, Frog finds him carefully tending his bees. Salamander sees him approach and waves him over, a large smile on his face. Frog greets him warmly, fighting the urge to snack on one of the bees as it flies near his head. The two start catching up as Salamander grabs a jar of honey and hands it to Frog. Frog thanks him, but before he leaves Salamander informs him that he's having company over for poker night, and if Frog was interested they could save him a seat. Frog considers the invitation for a moment. He could change his plans for Salamander or take some time for himself. What should he do?";
        document.getElementById("choice1").innerHTML = "Play poker with Salamander";
        document.getElementById("choice2").innerHTML = "Go for a walk around the pond";
    //town endings
    } else if (choice == 1 && answer1 == "Have dinner with Badger") {
        document.getElementById("story").innerHTML = "Frog graciously accepts the invitation. Badger excitedly pulls out another chair for Frog at the table. Frog and Badger continue to chat away the day until Badger's guests, Mouse and Mole, show up. The four of them enjoy a lovely meal, and for dessert, ice cream topped with jam! Eventually, everyone says their goodbyes and they all head home. As Frog opens his front door, he smiles to himself. What a good day! ";
        document.getElementById("choice1").innerHTML = null;
        document.getElementById("choice2").innerHTML = null;
        document.getElementById("image").src = "images/dinner party.jpg";
    } else if (choice == 1 && answer1 == "Play poker with Salamander") {
        document.getElementById("story").innerHTML = "After considering the offer for a moment, Frog turns to Salamander and tells him he would be delighted to join. Salamander claps his hands together with excitement. They make their way back to Salamanders place, where they talk away until Salamanders guests, Toad and Chameleon, arrive. Together, the four of them have an intense night of cards. Salamander comes out on top by the end of the night, but gives back everything he won as just the sense of winning is enough for him. Everyone then heads their separate ways. As Frog waves goodbye to Salamander he can't help but think to himself, 'What a fun day!'.";
        document.getElementById("choice1").innerHTML = null;
        document.getElementById("choice2").innerHTML = null;
        document.getElementById("image").src = "images/Poker night.jpg";
    } 

    //walk around pond
    else if (choice == 2 && answer2 == "Go for a walk around the pond") {
        document.getElementById("story").innerHTML = "Frog begins his leisurely stroll around the pond just outside of town. The sun shines warmly on the land and a slight breeze brushes past Frogs smooth skin. As he takes in the lovely weather, Frog approaches a fork in the road. To his left, he notices a tree seems to have some apples hanging from its branches. To his right, he could see the old well that some of the townsfolk said granted wishes. Where should Frog go?";
        document.getElementById("choice1").innerHTML = "Walk over to the apple tree";
        document.getElementById("choice2").innerHTML = "Check out the wishing well";
    } else if (choice == 1 && answer1 == "Walk over to the apple tree") {
        document.getElementById("story").innerHTML = "Approaching the apple tree, Frog sees that it does indeed bare a number of ripe red apples. Frog walks to the base of the tree and starts to climb his way up to them. A particularly red one catches his eye. Frog reaches out and plucks it from the branch. As he digs in, he notices that the branch he is sitting on is quite comfortable. Frog settles in, and remembers he brought his favorite book with him. But he's also so comfy he feels he could fall asleep right now. What to do?";
        document.getElementById("choice1").innerHTML = "Take a nap";
        document.getElementById("choice2").innerHTML = "Read the book";
    } else if (choice == 2 && answer2 == "Check out the wishing well") {
        document.getElementById("story").innerHTML = "Frog makes his way to the old stone well. Frog leans over and takes a look inside. Though the well is old, the water inside is still crystal clear. Frog pulls out a coin and gets ready to toss it in. But what should he wish for?";
        document.getElementById("choice1").innerHTML = "Wish for someone to talk to";
        document.getElementById("choice2").innerHTML = "Wish for something to eat";
    } else if (choice == 1 && answer1 == "Take a nap") {
        document.getElementById("story").innerHTML = "Frog lets himself drift away into dreamland. He has dreams about talking apples wearing funny hats. A while later Frog comes to. Feeling refreshed, Frog finds himself a bit hungry again. Frog figures he should save some apples for later, and decides to head to town to grab some lunch at the local Inn.";
        document.getElementById("choice1").innerHTML = null;
        document.getElementById("choice2").innerHTML = "Grab some lunch at the Inn";
    } else if (choice == 2 && answer2 == "Wish for something to eat") {
        document.getElementById("story").innerHTML = "Frog tosses in a coin and wishes for something to eat. After a moment, he hears a dull 'thud'. He looks in the direction the sound came from, and sees that apple tree! It must have dropped an apple just then. What a coincidence! ";
        document.getElementById("choice1").innerHTML = "Walk over to the apple tree";
        document.getElementById("choice2").innerHTML = null;
        
    //pond endings
    } else if (choice == 2 && answer2 == "Read the book") {
        document.getElementById("story").innerHTML = "Frog pulls out his book from his pocket. It's his favorite book 'The Princess and the Frog'. Frog leans back and starts to take in the story. There is magic and mystery, friendship and romance, heartbreak and tragedy! Even though Frog had read this story a hundred times, he couldn't tear his eyes away from the pages. He read and read until the sun began to set. Seeing this, Frog closed the book and made his way home. What a refreshing day!";
        document.getElementById("choice1").innerHTML = null;
        document.getElementById("choice2").innerHTML = null;
        document.getElementById("image").src = "images/frog reading.jpg";
    } else if (choice == 1 && answer1 == "Wish for someone to talk to") {
        document.getElementById("story").innerHTML = "Frog tosses in his coin and wishes for someone to talk to. Frog waits for a moment, then chuckles at how silly the whole idea is. As he starts to leave, he notices another figure approaching the wishing well. After a moment, he realizes It's his good friend Squirrel! Looks like they both had the same idea, what are the odds? Squirrel approaches Frog with a warm smile, and the two start chatting as they continue their stroll together. They walk all the way back to squirrels house, where Squirrel invites Frog to stay for tea. Frog happily obliges. Frog and squirrel chat and laugh late into the afternoon. It was a great day!";
        document.getElementById("choice1").innerHTML = null;
        document.getElementById("choice2").innerHTML = null;
        document.getElementById("image").src = "images/squirrel-and-frog.jpg";
    }
}