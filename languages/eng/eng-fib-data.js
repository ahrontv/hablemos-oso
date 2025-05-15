// data.js
// double newline charcters are used to make a new paragraph tag
// console.log('data Scr running');
// The missing phrases were not being made into buttons 9.12.24
const pageData = {
    directions: {
        pgTitle:"English Fill in the Blank Exercises",
        instructions:"Complete the following text by clicking on words from the word bank to insert them.",
        undoButton: "Undo",
        checkButton: "Check Answers",
        answersCorrect:"Well done! All the answers are correct.",
        answersRetry: "There are ${correct} correct answers out of ${correctAnswers.length}. Try again!",
        answersChecking: 'Checking answers...',
    },

    eng_ex_1: {
        title: "Tea Time: The Ritual That Shaped British Social Life",

        content: `
        Tea is more than just a {beverage:drink} in Britain; it has become an essential part of the nation's cultural {identity:sense of self}. The British {consume:drink} approximately 100 million cups of tea every day, making it the most popular drink in the country. This {tradition:custom} dates back to the 17th century when tea was first introduced to Britain from China.

        When tea first arrived in Britain, it was an expensive {luxury:something very special} that only the wealthy could afford. However, by the 19th century, tea had become {accessible:available} to people from all social classes. Tea rooms began to {appear:emerge} across the country, providing spaces where people could meet and socialize. These establishments played a significant role in women's {emancipation:freedom}, as they offered respectable places where women could gather outside their homes without male {companions:people who accompany you}.

        The concept of "afternoon tea" was reportedly {created:invented} by Anna, the Duchess of Bedford, in the 1840s. She complained of having a "sinking feeling" during the late afternoon and began enjoying tea with small {snacks:light foods} between lunch and dinner. Soon, this {habit:regular behavior} became fashionable among the upper classes, and the ritual of afternoon tea was born, featuring sandwiches, scones, and cakes served on fine china.

        During the Industrial Revolution, tea breaks became an important part of factory workers' {routines:regular schedules}. The brief pause for a cup of tea provided workers with much-needed {energy:power to continue} and a moment of {respite:rest} during long working hours. This practice helped cement tea's position as a {staple:essential item} in British daily life, crossing all social boundaries.

        Today, offering tea remains a symbol of {hospitality:welcoming others} in British homes. When someone visits, the typical first question is often "Would you like a cup of tea?" The way someone takes their tea – with milk, sugar, lemon, or plain – is considered a personal {preference:choice} that hosts try to remember. Despite the rise of coffee culture and other beverages, tea continues to hold a special place in British hearts, {connecting:linking} the nation to its past while remaining relevant in modern {society:community of people}.
        `
    },
    eng_ex_2: {
        title: "The American Bison: From Near-Extinction to Conservation Success Story",

        content: `        
        The American bison, often incorrectly called a buffalo, is a magnificent {symbol:representation} of North America's wildlife heritage. These impressive {mammals:animals that feed their babies milk} once roamed the plains in vast {herds:groups of animals} numbering in the millions. With their massive heads, distinctive {humps:raised areas} on their shoulders, and thick brown fur, bison are easily recognizable and hold significant cultural importance for many Native American {tribes:groups of indigenous people}.

        By the late 1800s, the American bison faced a terrible {crisis:serious situation}. European {settlers:people who move to a new place} hunted these animals almost to extinction, reducing their population from over 30 million to fewer than 1,000 individuals. This mass {slaughter:killing} happened for several reasons: to acquire their valuable hides, to {clear:remove} the land for farming and railroads, and sadly, as part of a deliberate strategy to destroy Native American {resources:supplies needed to live}.

        The {recovery:return to better condition} of the American bison began in the early 20th century through the dedicated efforts of {conservationists:people who protect nature}. A small number of ranchers and nature enthusiasts began to {protect:keep safe} the remaining bison. In 1905, the American Bison Society was formed to {preserve:maintain} these magnificent animals. Their work led to the establishment of several {refuges:protected areas} where bison could live and multiply safely.

        Today, the American bison {population:total number} has increased to approximately 500,000 individuals. Most of these animals live on private ranches, but about 30,000 are managed as wild bison in {national parks:government-protected natural areas} and reserves. Yellowstone National Park is home to the largest and oldest public bison herd in the United States, {descended:coming from ancestors} from just 23 wild bison that remained in the park in 1902.

        Despite this {success:achievement}, challenges remain. Modern bison face issues including limited {habitat:natural environment}, genetic concerns due to crossbreeding with cattle, and ongoing debates about land {management:control and care}. However, the story of the American bison represents one of the first and most successful wildlife conservation efforts in history. The journey from near-extinction to recovery demonstrates how human {awareness:understanding} and action can help save a species and restore an important part of our natural heritage.
        `
    },

    eng_ex_3: {
        title: "",

        content: ``
    },

    eng_ex_4: {
        title: "",

        content: ``
    },

    eng_ex_5: {
        title: "",

        content: ``
    },

    eng_ex_6: {
        title: "",

        content: ``
    },

    eng_ex_7: {
        title: "",

        content: ``
    },

    eng_ex_8: {
        title: "",

        content: ``
    },

    eng_ex_9: {
        title: "",

        content: ``
    },

    eng_ex_10: {
        title: "",

        content: ``
    },

    eng_ex_11: {
        title: "",

        content: ``
    },

    eng_ex_12: {
        title: "",

        content: ``
    },

    eng_ex_13: {
        title: "",

        content: ``
    },

    eng_ex_14: {
        title: "",

        content: ``
    },

    eng_ex_15: {
        title: "",

        content: ``
    },

    eng_ex_16: {
        title: "",

        content: ``
    },

    eng_ex_17: {
        title: "",

        content: ``
    },

    eng_ex_18: {
        title: "",

        content: ``
    },

    eng_ex_19: {
        title: "",

        content: ``
    },

    eng_ex_20: {
        title: "",

        content: ``
    },
};

/**
 * English Fill-in-the-Blank Exercise Titles
Entertainment and Popular Culture

Hollywood's Golden Age: The Studio System That Defined American Cinema
The Evolution of Sherlock Holmes: From Victorian Detective to Modern Icon
Superhero Cinema: How Comic Book Adaptations Conquered Hollywood
The British Invasion: When UK Music Transformed American Pop Culture
Reality Television: The Genre That Changed Entertainment Forever

British Traditions and History

The English Monarchy: From Divine Right to Constitutional Figurehead
The British Empire: Rise, Rule, and Legacy Across Six Continents
London Through the Centuries: From Roman Settlement to Global Metropolis
British Parliamentary Democracy: Evolution of a Political System

American Identity and Ideals

The American Dream: Origins, Evolution, and Contradictions of a National Ethos
Manifest Destiny: The Ideology That Expanded a Nation
The Gold Rush: How the Quest for Fortune Shaped California and the West
From Melting Pot to Mosaic: Changing Conceptions of American Identity
The Western Frontier: Myth and Reality in American History

North American Wildlife and Natural Wonders

The Majestic Moose: North America's Gentle Giant of the Forest
The Redwoods of California: Ancient Giants Under Threat
Alaska's Wilderness: America's Last Great Frontier
The Great Lakes: Freshwater Seas That Shaped a Continent

Engineering and Architectural Achievements

Skyscrapers: The Race to Touch the Clouds
The Golden Gate Bridge: Engineering Marvel of the Depression Era
The Development of Airplanes: From Kitty Hawk to Supersonic Flight
American Highways: How the Interstate System Transformed a Nation
The Empire State Building: Symbol of American Ambition and Resilience

Political and Social Movements

The Timeline of Democracy: From Ancient Athens to Modern Pluralism
The Civil Rights Movement: America's Ongoing Journey Toward Equality
Religious Movements in America: From the Great Awakening to Modern Evangelicalism
Suffragettes and Beyond: The Long Struggle for Women's Political Rights
Labor Movements: How Workers Organized and Changed American Industry

Geographical and Regional Studies

The American Southwest: Where Cultures Converge and Transform
New England: Cradle of American Education and Literature
The Mississippi River: Lifeline of a Continental Economy
The Appalachian Mountains: America's Ancient Backbone
The Great Plains: From "Great American Desert" to Breadbasket of the World

Scientific and Technological Innovations

Silicon Valley: How a California Farmland Became Technology's Epicenter
The Space Race: Competition That Launched a Technological Revolution
The Automobile Age: How Cars Reshaped American Life
Telecommunications: From Telegraph to Smartphone
The Manhattan Project: Science, Ethics, and the Atomic Age

Literary and Intellectual Traditions

The Detective Genre: From Sherlock Holmes to Modern Crime Fiction
The Great American Novel: Literary Ambition and National Identity
Transcendentalism: America's Philosophical Awakening
Gothic Literature: Exploring Darkness in British and American Tradition
The Harlem Renaissance: Literary Flowering of African American Culture

Environmental Challenges and Conservation

The Dust Bowl: Environmental Disaster That Changed American Agriculture
Conservation Movements: From John Muir to Modern Environmentalism
The National Park System: America's Best Idea
Climate Change in Alaska: Frontline of Global Warming
Preserving the Redwoods: Century-Long Battle to Save Ancient Forests

 */