const bingoCalls = {
  1: { nickname: "Kelly's Eye", description: "Possibly a reference to Ned Kelly, or military slang." },
  2: { nickname: "One Little Duck", description: "The number 2 resembles a duckling." },
  3: { nickname: "Cup of Tea", description: "Rhymes with 'tea,' a British favorite." },
  4: { nickname: "Knock at the Door", description: "Rhymes with the number 4." },
  5: { nickname: "Man Alive", description: "Classic rhyming bingo call." },
  6: { nickname: "Half a Dozen", description: "half a dozen is 6." },
  7: { nickname: "Lucky Seven", description: "Seven is considered lucky in many cultures." },
  8: { nickname: "Garden Gate", description: "Rhymes with 8; may reference a secret meeting place." },
  9: { nickname: "Doctor’s Orders", description: "Refers to a WWII laxative pill given by army doctors." },
  10: { nickname: "Prime Minister's Den", description: "References 10 Downing Street." },
  11: { nickname: "Legs Eleven", description: "The two 1s resemble a pair of legs." },
  12: { nickname: "One Dozen", description: "Refers to a dozen (12 items)." },
  13: { nickname: "Unlucky for Some", description: "13 is considered unlucky by many." },
  14: { nickname: "Valentine's Day", description: "Refers to February 14th, a day of romance." },
  15: { nickname: "Young and Keen", description: "Rhymes with 'keen.'" },
  16: { nickname: "Sweet 16", description: "Refers to turning 16, a special age." },
  17: { nickname: "Dancing Queen", description: "Inspired by ABBA's song 'Dancing Queen.'" },
  18: { nickname: "Coming of Age", description: "Refers to adulthood and voting age." },
  19: { nickname: "Goodbye Teens", description: "The last year of the teenage years." },
  20: { nickname: "One Score", description: "20 is a score" },
  21: { nickname: "Key of the Door", description: "Age to gain independence." },
  22: { nickname: "Two Little Ducks", description: "The numbers resemble two ducks." },
  23: { nickname: "The Lord is My Shepherd", description: "Based on Psalm 23 in the Bible." },
  24: { nickname: "Two Dozen", description: "Two dozens equal 24." },
  25: { nickname: "Duck and Dive", description: "Rhymes with 25; 2 is the 'duck.'" },
  26: { nickname: "Half a Crown", description: "Based on British predecimal currency." },
  27: { nickname: "Gateway to Heaven", description: "Refers to reaching heaven." },
  28: { nickname: "In a State", description: "Cockney rhyming slang for a poor state." },
  29: { nickname: "Rise and Shine", description: "Rhymes with 29." },
  30: { nickname: "Dirty Gertie", description: "Refers to a statue in London and a WWII song." },
  31: { nickname: "Get Up and Run", description: "Rhymes with 31." },
  32: { nickname: "Buckle My Shoe", description: "Rhymes with the number 32." },
  33: { nickname: "All the Threes", description: "Represents all 3s" },
  34: { nickname: "Ask for More", description: "Rhymes with 34." },
  35: { nickname: "Jump and Jive", description: "Refers to a lively dance." },
  36: { nickname: "Three Dozen", description: "Three lots of 12 make 36." },
  37: { nickname: "More than Eleven", description: "Rhymes with 37." },
  38: { nickname: "Christmas Cake", description: "Derived from Cockney rhyming slang." },
  39: { nickname: "39 Steps", description: "Reference to Hitchcock's movie '39 Steps.'" },
  40: { nickname: "Life Begins", description: "Life is said to begin at 40." },
  41: { nickname: "Time for Fun", description: "Life begins, so it's time for fun!" },
  42: { nickname: "Winnie the Pooh", description: "Based on A.A. Milne's famous bear." },
  43: { nickname: "Down on Your Knees", description: "Popular wartime phrase." },
  44: { nickname: "Droopy Drawers", description: "Resembles sagging trousers." },
  45: { nickname: "Halfway There", description: "Halfway through 90-ball bingo." },
  46: { nickname: "Up to Tricks", description: "Rhymes with 46." },
  47: { nickname: "Four and Seven", description: "Literal description of 47." },
  48: { nickname: "Four Dozen", description: "Four lots of 12 make 48." },
  49: { nickname: "PC", description: "Based on the TV show 'The Adventures of PC 49.'" },
  50: { nickname: "Half a Century", description: "50 is half of 100." },
  51: { nickname: "Tweak of the Thumb", description: "Rhymes with 51." },
  52: { nickname: "Danny La Rue", description: "Refers to the Irish entertainer Danny La Rue." },
  53: { nickname: "Here Comes Herbie", description: "Reference to Herbie the VW Beetle." },
  54: { nickname: "Clean the Floor", description: "Rhymes with 54." },
  55: { nickname: "Snakes Alive", description: "The two fives resemble snakes." },
  56: { nickname: "Shotts Bus/Was She Worth It?", description: "Reference to Shotts bus route and marriage license cost." },
  57: { nickname: "Heinz Varieties", description: "Refers to Heinz's '57 Varieties' slogan." },
  58: { nickname: "Make Them Wait", description: "Rhymes with 58." },
  59: { nickname: "Brighton Line", description: "May refer to Brighton train or area code." },
  60: { nickname: "Five Dozen/Grandma's Getting Frisky", description: "60 is five dozen; also rhymes with frisky." },
  61: { nickname: "Baker’s Bun", description: "Rhymes with 61." },
  62: { nickname: "Turn the Screw/Tickety Boo", description: "Rhymes with 62; 'tickety-boo' means 'all is well.'" },
  63: { nickname: "Tickle Me", description: "Rhymes with 63." },
  64: { nickname: "Red Raw", description: "Rhymes loosely with 64." },
  65: { nickname: "Old Age Pension", description: "Traditional retirement age for men in the UK." },
  66: { nickname: "Clickety Click", description: "Mimics the sound of a train on tracks." },
  67: { nickname: "Stairway to Heaven", description: "Rhymes with 67." },
  68: { nickname: "Pick a Mate", description: "Rhymes with 68." },
  69: { nickname: "Any Way Up", description: "The number looks the same upside down." },
  70: { nickname: "Three Score and Ten", description: "Traditional saying; 3 x 20 + 10 = 70." },
  71: { nickname: "Bang on the Drum", description: "Reference to a 2000s campaign to change the call to 'J.Lo's bum.'" },
  72: { nickname: "Six Dozen", description: "Six dozen makes 72." },
  73: { nickname: "Queen Bee", description: "Rhymes with 73." },
  74: { nickname: "Hit the Floor", description: "Rhymes with 74." },
  75: { nickname: "Strive and Strive", description: "Rhymes with 75." },
  76: { nickname: "Trombones", description: "From '76 Trombones' in *The Music Man*." },
  77: { nickname: "Sunset Strip", description: "Refers to the TV show '77 Sunset Strip.'" },
  78: { nickname: "39 More Steps", description: "Refers to '39 Steps' (39 + 39 = 78)." },
  79: { nickname: "One More Time", description: "Rhymes with 79." },
  80: { nickname: "Eight and Blank/Ghandi’s Breakfast", description: "Eight with zero as blank; also rhymes." },
  81: { nickname: "Stop and Run", description: "Rhymes with 81." },
  82: { nickname: "Straight On Through", description: "Rhymes with 82." },
  83: { nickname: "Time for Tea", description: "Rhymes with 83." },
  84: { nickname: "Seven Dozen", description: "Seven dozens make 84." },
  85: { nickname: "Staying Alive", description: "Rhymes with 85." },
  86: { nickname: "Between the Sticks", description: "Football term, referencing goalposts." },
  87: { nickname: "Torquay in Devon", description: "Rhymes with 87." },
  88: { nickname: "Two Fat Ladies", description: "The number resembles two 'fat' figures." },
  89: { nickname: "Nearly There", description: "One short of 90." },
  90: { nickname: "Top of the Shop", description: "The highest number in bingo." }
};

//referance
const container = document.getElementById('bingo-calls-container');

  Object.entries(bingoCalls).forEach(([number, call]) => {
      const bingoCallDiv = document.createElement('div');
      bingoCallDiv.classList.add('bingo-call');

      const numberDiv = document.createElement('div');
      numberDiv.classList.add('bingo-number');
      numberDiv.textContent = `${number}. ${call.nickname}`;

      const descriptionDiv = document.createElement('div');
      descriptionDiv.classList.add('bingo-description');
      descriptionDiv.textContent = call.description;

      bingoCallDiv.appendChild(numberDiv);
      bingoCallDiv.appendChild(descriptionDiv);

      container.appendChild(bingoCallDiv);
  });
