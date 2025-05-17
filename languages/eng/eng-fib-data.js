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
        Tea is more than just a {beverage:drink (noun)} in Britain; it has become an essential part of the nation's cultural {identity:sense of self}. The British {consume:drink (verb)} approximately 100 million cups of tea every day, making it the most popular drink in the country. This {tradition:custom} dates back to the 17th century when tea was first introduced to Britain from China.

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
        title: "The Gold Rush: How the Quest for Fortune Shaped California and the West",

        content: `
        The California Gold Rush began in 1848 when gold was {discovered:found} at Sutter's Mill in Coloma, California. News of the {discovery:finding} spread quickly, and by 1849, thousands of people from across America and around the world rushed to California with dreams of finding {fortune:wealth}. These gold-seekers were nicknamed "forty-niners" after the year they arrived. This event dramatically changed the {landscape:appearance} of California and the American West forever.

        Before the Gold Rush, California was a {sparsely:not densely} populated territory with only about 1,000 non-Native American residents. Within just two years, the {population:number of people} had swelled to over 100,000. San Francisco transformed from a small {settlement:place where people live} of 200 residents into a booming city of 36,000 by 1852. People traveled by ship around South America or {crossed:went over} the dangerous American {frontier:wilderness} in covered wagons to reach the goldfields.

        Life for the miners was extremely {difficult:hard}. They lived in makeshift {camps:temporary places to stay} and worked long hours in harsh conditions. Most miners used simple tools like pans and shovels to {extract:take out} gold from streams. Despite the stories of overnight riches, the reality was that few miners actually struck it rich. Many ended up working for larger mining {operations:businesses} or taking other jobs to survive. Disease, {violence:fighting}, and lawlessness were common in many mining communities.

        The Gold Rush had profound {effects:results} on Native Americans living in California. Their {populations:groups} declined dramatically due to disease, {displacement:forced removal}, and violence. The natural environment also suffered as forests were cut down for lumber, hills were washed away by hydraulic mining, and rivers were {polluted:made dirty} with debris and chemicals used in mining operations.
        
        Despite its negative aspects, the Gold Rush helped California develop rapidly. It became a state in 1850, and its economy {diversified:became varied} beyond mining to include agriculture, shipping, and manufacturing. The Gold Rush also {contributed:added} to America's westward expansion and created lasting myths about opportunity and striking it rich in the American West. The {legacy:lasting impact} of this period can still be seen today in California's diverse population, entrepreneurial spirit, and the remaining historic Gold Rush towns that attract tourists from around the world.
        `
    },

    eng_ex_4: {
        title: "Skyscrapers: The Race to Touch the Clouds",

        content: `
        Skyscrapers are tall buildings that have changed how cities look around the world. These impressive {structures:buildings} began to appear in the late 19th century when new building materials and technologies made it possible to {erect:build upward} much taller buildings than ever before. The first skyscrapers were built in Chicago and New York, where valuable land and growing {populations:groups of people} created the need to build upward rather than outward.

        The early 1900s saw fierce {competition:rivalry} between construction companies to build the tallest building in the world. Each new {tower:tall structure} that was completed would hold the record for just a short time before another, taller building would take its place. This "race to the sky" was not just about {pride:feeling of achievement}, but also about business and publicity. Having the tallest building was a powerful way for a company to show its {success:achievement}.

        One of the most famous images in American history shows workers eating lunch on an iron {beam:metal bar} high above New York City during the construction of the Rockefeller Center in 1932. The photograph, called "Lunch Atop a Skyscraper," shows eleven men sitting casually on a narrow beam, hundreds of meters above the ground, with no safety equipment. This image has become a {symbol:representation} of the bravery of the workers who built America's tallest buildings during a difficult economic time.

        Building skyscrapers requires many special skills and techniques. Workers use {welding:joining metals with heat} to connect steel beams that form the building's skeleton. Modern skyscraper construction also involves complex {engineering:scientific design} to ensure buildings can withstand strong winds and even earthquakes. The {foundations:base structures} of these buildings must be incredibly strong, often extending deep into the ground to support the enormous weight above.
        
        Today, building the tallest skyscraper in the world is still seen as an important {enterprise:business venture} for cities and countries. The Burj Khalifa in Dubai, completed in 2010, currently holds the record at 828 meters tall. However, other countries are planning even taller buildings. Skyscrapers are no longer just office buildings but now include {apartments:living spaces}, hotels, and shopping centers. They have become {attractions:interesting places to visit} in themselves, with observation decks that offer spectacular {views:things you can see} of the surrounding cities. Despite all the changes in design and technology, skyscrapers continue to {fascinate:strongly interest} people around the world as impressive examples of human {ambition:desire to achieve}.
        `
    },

    eng_ex_5: {
        title: "Skyscrapers: The Race to Touch the Clouds",

        content: `
        Skyscrapers are tall buildings that have become {symbols:representations} of modern cities around the world. These impressive {structures:buildings} began to appear in the late 19th century when new building materials and techniques made it possible to {erect:build upward} structures taller than ever before. The first skyscraper was built in Chicago in 1885, and since then, humans have been competing to build higher and higher.

        The construction of skyscrapers requires careful {planning:preparation} and specialized skills. Workers use techniques like {welding:joining metal with heat} to connect steel beams that form the building's skeleton. One of the most {famous:well-known} images in skyscraper history shows construction workers eating lunch on a steel beam high above New York City during the building of the Rockefeller Center in 1932. This photograph captures both the {danger:risk} and the everyday nature of constructing these massive buildings.

        Building a skyscraper is a massive {enterprise:business project} that involves thousands of workers, architects, engineers, and other professionals. The {foundations:base structures} must be extremely strong to support the enormous weight of the building. Modern skyscrapers often go more than 50 meters underground to ensure they have proper {support:reinforcement} to stay upright during strong winds and even earthquakes.

        Each new {tower:tall structure} tries to overcome the challenges of the previous generation. The Burj Khalifa in Dubai, currently the tallest building in the world, stands at an amazing 828 meters high. Its design was inspired by a desert flower, showing how {architects:building designers} combine art and engineering in their work. The {materials:substances} used in modern skyscrapers include special types of glass that can withstand extreme temperatures and high winds.

        Many cities now have {skylines:outlines of buildings against the sky} dominated by these tall structures. For many countries, building the tallest skyscraper has become a matter of national {pride:feeling of satisfaction}. While some people worry about the {environmental:related to nature} impact of these massive buildings, others see them as necessary in crowded urban areas where {space:room} is limited. As technology continues to advance, engineers are already {planning:designing} even taller buildings that may one day reach a kilometer in height.
        `
    },

    eng_ex_6: {
        title: "The Dust Bowl: Environmental Disaster That Changed American Agriculture",

        content: `
        The Dust Bowl was a terrible {period:time frame} of severe dust storms that {damaged:hurt} the Great Plains of North America during the 1930s. It {occurred:happened} after years of inappropriate farming {techniques:methods} combined with a severe drought. Farmers had removed the native grasses, which had deep roots that {held:kept} the soil in place. Without these grasses, the topsoil {became:turned} loose and dry.

        When strong winds {swept:moved quickly} across the land, they {lifted:raised up} enormous clouds of dust that sometimes {traveled:moved} hundreds of miles. These dust storms {destroyed:ruined completely} crops, {buried:covered} homes and machinery, and made it difficult for people to {breathe:take in air}. Many farmers lost their land and {livelihoods:ways to make a living} as a result of this environmental {disaster:catastrophe}.

        President Franklin D. Roosevelt made a special {trip:journey} to the disaster zone to see the {damage:harm} for himself. After witnessing the suffering of the people, he returned to Washington to {announce:make public} new programs to help the affected regions. The government {introduced:brought in} soil conservation methods and {provided:gave} financial assistance to struggling farmers. Experts worked to {predict:forecast} future droughts and develop more sustainable farming practices.

        Farmers had to {battle:fight against} both natural forces and economic hardship during this time. Many families {packed:gathered} their belongings and {migrated:moved} to California and other western states in search of work. This mass migration {changed:altered} the population distribution of the United States and was later {depicted:shown} in John Steinbeck's famous novel "The Grapes of Wrath."

        {All in all:Overall}, the Dust Bowl was one of the worst ecological disasters in American history, but it led to important changes in agricultural practices. The experience taught farmers about the importance of soil conservation and crop rotation. It also highlighted how human activities can affect the {climate:weather patterns over time} and environment. The lessons learned from the Dust Bowl continue to {influence:affect} farming methods and environmental policies in the United States to this day.
        `
    },

    eng_ex_7: {
        title: "The Space Race: Competition That Launched a Technological Revolution",

        content: `
        The Space Race of the 1950s and 1960s was not merely a scientific {endeavor:effort}, but a fierce ideological battle during the {Cold War:conflict between East and West}. When the Soviet Union successfully launched Sputnik in 1957, it {sparked:initiated} widespread concern in the United States. The American public feared that Soviet {dominance:control} in space might {herald:signal} military superiority on Earth as well. This {rivalry:competition between opponents} between superpowers ultimately transformed how humans explore the cosmos.

        President Kennedy's famous 1961 {declaration:formal announcement} committed the United States to landing a man on the moon before the decade's end. His words "We choose to go to the moon... not because it is easy, but because it is {hard:difficult}" {galvanized:energized} the American spirit. The speech {framed:presented} space exploration not as an option but as humanity's {destiny:predetermined future}. Following this presidential address, NASA received unprecedented funding and support to {achieve:accomplish} this ambitious goal.

        The {lunar:relating to the moon} missions faced enormous technical challenges. Engineers had to design spacecraft capable of {withstanding:enduring} extreme temperatures and radiation in space. The {reentry:return to Earth's atmosphere} process was particularly dangerous, as spacecraft needed to hit a precise angle to avoid either burning up or bouncing off the atmosphere. Each {breakthrough:significant advance} in rocket propulsion, materials science, and computing {contributed:added} to a technological revolution that extended far beyond space exploration.

        When Apollo 11 landed on the moon in July 1969, with Neil Armstrong taking "one small step for man, one giant leap for mankind," it {represented:symbolized} the culmination of an extraordinary scientific and engineering {feat:accomplishment}. The Soviet Union had {pursued:followed} its own lunar program but {encountered:faced} several rocket failures. This American success effectively {concluded:ended} the most intense phase of the Space Race, though space {exploration:investigation} continued on both sides.

        Interestingly, some {conspiracy:secret plot} theories claim that the moon landings were {fabricated:made up} by the U.S. government. These theories persist {regardless:without consideration} of the overwhelming evidence including moon rocks, independent {verification:confirmation} from other countries, and the technical impossibility of faking such an event with 1960s technology. The Space Race legacy lives on in thousands of {innovations:new inventions} we use daily, from satellite communications to medical imaging, proving that this political competition {propelled:pushed forward} humanity into a new technological age.
        `
    },

    eng_ex_8: {
        title: "The Great Lakes: Freshwater Seas That Shaped a Continent",

        content: `
        The Great Lakes system represents one of the most {vast:extremely large} freshwater resources on the planet, containing about 20% of Earth's surface freshwater. Formed by {glacial:relating to ice sheets} activity approximately 14,000 years ago, these five interconnected lakes – Superior, Michigan, Huron, Erie, and Ontario – function as inland seas with their own {ecosystems:biological communities and environments}. The entire {watershed:area of land draining into water bodies} spans over 295,000 square miles and influences the climate and environment of a significant portion of North America.

        Indigenous peoples inhabited the Great Lakes region for thousands of years before European explorers arrived. The lakes provided {navigable:deep enough for ships} routes that facilitated exploration and {commerce:large-scale trade} throughout the continent. During the 19th century, the construction of canals and locks connected the Great Lakes to the Atlantic Ocean, transforming them into critical arteries of transportation. This connectivity fueled the {industrialization:development of industries} of the region, leading to the growth of major metropolitan areas like Chicago, Detroit, Toronto, and Cleveland.

        The economic importance of the Great Lakes cannot be overstated. The {maritime:connected with shipping} industry transports millions of tons of cargo annually, including iron ore, coal, grain, and manufactured goods. Commercial fishing once {flourished:prospered greatly} in these waters, though today it faces significant challenges. Tourism and recreation have become increasingly important economic drivers, with boating, fishing, and coastal activities generating billions in revenue. The lakes also provide drinking water to over 40 million people and support vital {infrastructure:basic physical structures} for communities throughout the region.

        Despite their importance, the Great Lakes have faced serious environmental challenges. Industrial pollution caused water quality to {deteriorate:become progressively worse} significantly during the 20th century. Various {pollutants:contaminating substances} from factories, farms, and urban areas threatened both wildlife and human health. The lakes have also been plagued by {invasive:aggressively spreading} species like zebra mussels and Asian carp, which disrupt native {biodiversity:variety of plant and animal life}. Climate change presents additional threats, altering {precipitation:rainfall and snowfall} patterns and contributing to fluctuating water levels.

        Fortunately, significant conservation efforts have been implemented in recent decades. International {collaboration:working together} between the United States and Canada has resulted in agreements to protect and restore the Great Lakes. Cleanup projects have removed tons of contaminants from polluted harbors and {tributaries:streams flowing into larger bodies}. Environmental regulations have reduced industrial discharges, and public awareness campaigns have promoted more {sustainable:able to be maintained long-term} practices. While challenges remain, these efforts demonstrate a growing commitment to preserving these magnificent freshwater seas for future generations.
        `
    },

    eng_ex_9: {
        title: "Silicon Valley: How a California Farmland Became Technology's Epicenter",

        content: `        
        Silicon Valley was once known as the "Valley of Heart's Delight," a fertile region {renowned:famous} for its orchards and farmland. The {transformation:complete change} began in the 1940s and 1950s when Stanford University started {encouraging:promoting} technology companies to develop on its land. William Shockley, a Nobel Prize winner who co-invented the transistor, established Shockley Semiconductor in 1956, which became the {catalyst:something that causes change} for the region's technological future.

        Former employees of Shockley's company left to form Fairchild Semiconductor, creating a {phenomenon:remarkable development} known as "Fairchildren" - a series of spin-off companies that would {revolutionize:completely change} the technology industry. By the 1970s, the area had developed a unique {ecosystem:interconnected network} of startups, research institutions, and investors. Venture capital firms emerged as crucial financial {backers:supporters} for risky new endeavors, willing to fund ideas that traditional banks would not touch. This created an {unprecedented:never seen before} environment where failure was not only accepted but often viewed as a valuable learning experience.

        The 1980s and 1990s saw the {proliferation:rapid increase} of personal computer companies, followed by the internet boom. Companies like Apple, HP, Oracle, and later Google and Facebook, turned from small {startups:new companies} into global tech {conglomerates:large corporations}. The region cultivated a distinctive work culture characterized by {innovation:creation of new ideas}, long hours, and casual dress codes - a stark contrast to the formal business environments of the East Coast. Open office layouts were designed to {foster:encourage} collaboration and the free exchange of ideas.

        Silicon Valley's success has created significant {challenges:difficult situations} as well. Housing costs have {skyrocketed:risen extremely high}, creating severe inequality between tech workers and those in other industries. Traffic {congestion:overcrowding} has become unbearable in many areas, and the {infrastructure:basic physical structures} struggles to keep pace with rapid growth. Additionally, the tech industry has faced criticism for its lack of diversity and sometimes questionable {impact:effect} on society, from privacy concerns to addiction to digital devices.

        Despite these issues, Silicon Valley remains the world's preeminent technology hub, continuing to attract {visionaries:people with original ideas} and entrepreneurs from around the globe. Its {legacy:lasting influence} extends far beyond California, as its model of innovation has been {replicated:copied} in tech hubs from Tel Aviv to Bangalore. The region has demonstrated how universities, private enterprise, and investment can combine to create economic {dynamism:energy and momentum} that transforms not just a local economy but the entire world. As technology continues to advance, Silicon Valley's influence on how we live, work, and communicate remains {profound:deep and significant}.
        `
    },

    eng_ex_10: {
        title: "The English Monarchy: From Divine Right to Constitutional Figurehead",

        content: `
        Throughout history, the English monarchy has undergone a remarkable transformation. Once wielding absolute {sovereignty:control of a country}, English monarchs claimed to rule by divine right, answering to God alone. This {authority:power to give orders} allowed them to govern with minimal opposition, as challenging the monarch was considered equivalent to challenging God's will. However, this unchecked power would not last forever, as various forces began to {curtail:reduce or restrict} royal privileges.

        The Magna Carta of 1215 represented an early attempt to limit royal power, but the most dramatic challenge came during the English Civil War when Parliament made the unprecedented decision to {execute:put to death} King Charles I in 1649. This shocking act temporarily allowed Oliver Cromwell to {abolish:completely remove} the monarchy altogether. Although the {monarchy:system of government with a king/queen} was later restored, the concept of absolute royal power had been irreversibly damaged. The Glorious Revolution of 1688 further cemented Parliament's growing control, establishing a system where monarchs would {reign:rule as monarch} but increasingly not govern.

        The 18th and 19th centuries saw the monarchy transform into a truly {constitutional:relating to the basic laws of a country} institution. The monarch retained certain {prerogatives:exclusive rights}, but Parliament gained primary control over {legislation:laws being made} and governance. Queen Victoria's long {reign:period as ruler} coincided with the expansion of the British Empire, requiring the monarchy to adapt to its role as a symbol of imperial unity. During this period, the rules of {succession:the process of following in order} were clarified, ensuring the {hereditary:passed down through family} nature of the crown would continue in an orderly fashion.

        The 20th century brought unprecedented challenges, including two world wars and the {reformation:improvement by changing form} of the Empire into the {Commonwealth:group of countries with shared ties}. The monarchy faced existential questions when King Edward VIII chose to {abdicate:give up the throne} in 1936, creating a constitutional crisis. Throughout these challenges, the institution adapted by embracing more {ceremonial:symbolic rather than practical} and {diplomatic:relating to managing international relations} functions while surrendering political power.

        Today's British monarchy exists under constant public {scrutiny:careful examination} and occasional {controversy:public disagreement}, with debates about its cost and {relevance:importance to current situation} in modern society. Nevertheless, it continues to embody the nation's {heritage:traditions passed down from previous generations} while performing subtle but important constitutional duties. The transformation from all-powerful rulers to beloved cultural figureheads represents one of history's most remarkable institutional evolutions – a monarchy that survived precisely because it was willing to change with the times rather than resist them.
        `
    },

    eng_ex_11: {
        title: "Suffragettes and Beyond: The Long Struggle for Women's Political Rights",
        content: `
        The movement for women's {enfranchisement:right to vote} began in the late 19th century when women across the world realized their voices were systematically silenced in political discourse. While more moderate groups preferred peaceful methods, the suffragettes adopted {militant:confrontational} tactics to draw attention to their cause. Led by figures like Emmeline Pankhurst in Britain, these women engaged in civil disobedience, hunger strikes, and public demonstrations, often facing harsh {persecution:mistreatment based on beliefs} for their actions.

        The suffragettes {disrupted:interrupted} political meetings and chained themselves to railings, refusing to be ignored by the establishment. Their {unprecedented:never seen before} tactics shocked society but effectively highlighted the injustice of women's political exclusion. During World War I, women's vital contributions to the war effort became a powerful {catalyst:something that precipitates change} for advancing their cause. Governments could no longer justify denying voting rights to women who had demonstrated such patriotism and capability during the national crisis.

        After the {ratification:formal approval} of voting rights in countries like Britain (1918/1928), the United States (1920), and elsewhere, the struggle for true political equality continued. Having the vote was an important {milestone:significant achievement}, but women remained largely excluded from positions of power. Female {advocates:supporters} continued to push for representation in government, though progress was painfully slow. Throughout the 20th century, women worked through {lobbying:influencing politicians} and grassroots organizing to advance {legislation:laws} promoting gender equality.

        The fight extended beyond simply being allowed to vote to addressing the numerous {disparities:noticeable differences} in how society valued women's contributions. Feminist movements built on the suffragettes' foundation, recognizing that true political equality required economic and social {emancipation:freedom from restriction} as well. In many countries, women showed {solidarity:unity based on shared interests} across class and racial lines, though tensions sometimes arose when movements failed to address the unique challenges faced by {marginalized:treated as insignificant} women.

        Today, women have made remarkable progress toward political {parity:equality in status}, with female prime ministers and presidents in countries around the world. However, women remain underrepresented in most national parliaments and face ongoing challenges to their political participation. The tactics may have changed from those of the suffragettes, but their spirit of {resistance:opposition} lives on as women continue to fight for equal representation and influence. The struggle reminds us that {enfranchisement:voting rights} was just the beginning of a much longer journey toward true equality in political life.
        `
    },

    eng_ex_12: {
        title: "The Automobile Age: How Cars Reshaped American Life",

        content: `
        The introduction of automobiles in the early 20th century sparked a {revolution:complete change} in American society that continues to this day. When Henry Ford perfected the {assembly line:manufacturing process} in 1913, cars transformed from luxury items into mass-produced necessities. This manufacturing innovation made automobiles {accessible:able to be obtained} to the middle class, granting Americans an {unprecedented:never before experienced} level of personal {mobility:ability to move freely} that would forever alter the national landscape.

        As car ownership became {ubiquitous:present everywhere}, the very shape of American cities {transformed:changed dramatically}. Urban planners redesigned cities to accommodate automobiles, and the resulting suburban {sprawl:uncontrolled expansion} extended the boundaries of metropolitan areas. Families could now live miles from where they worked, creating the daily {commute:regular travel to work} that has become a defining feature of American life. This geographic expansion required massive investment in {infrastructure:basic physical structures}, leading to the interstate highway system that President Eisenhower championed as essential for national defense and economic growth.

        The cultural {ramifications:complex consequences} of the automobile age were equally profound. Cars became symbols of American {autonomy:freedom from control} and status, fundamentally changing social interactions. Dating culture evolved as young people gained private spaces away from parental supervision. The family road trip became an American tradition, and drive-in movies, restaurants, and shopping centers emerged to serve a newly mobile population. The car culture permeated American music, film, and literature, becoming a {pivotal:crucially important} element of national identity.

        This new mobility contributed to post-war economic {prosperity:state of success} as automobile manufacturing became a cornerstone of American industry. Cities like Detroit became manufacturing powerhouses, providing stable, well-paying jobs for millions. The highway system connected previously isolated regions, facilitating trade and tourism. However, this economic boom had a hidden cost, as the {dependency:state of relying on} on cars led to the {diminished:reduced} importance of public transportation systems and increased social stratification between those who could and couldn't afford vehicles.

        Today, America faces the consequences of its century-long love affair with automobiles. Traffic {congestion:overcrowding} plagues urban areas, air quality has suffered, and fossil fuel consumption raises environmental concerns. The challenge now is creating more {sustainable:able to be maintained} transportation systems without sacrificing the mobility that Americans value deeply. As electric and autonomous vehicles emerge, the country stands at another {paradigm shift:fundamental change} in transportation, suggesting that the relationship between Americans and their cars will continue to evolve, reflecting changing values while maintaining the desire for personal freedom that cars have always represented.
        `
    },

    eng_ex_13: {
        title: "The Redwoods of California: Ancient Giants Under Threat",

        content: `
        California's coast redwoods and giant sequoias stand as some of the most {majestic:having impressive beauty} trees on Earth. These {ancient:belonging to the very distant past} giants have thrived for millennia, with some specimens exceeding 2,000 years in age. {Towering:Very tall and imposing} up to 380 feet—taller than the Statue of Liberty—coast redwoods form the backbone of a complex {ecosystem:biological community} that supports countless plant and animal species. The "Hyperion," discovered in 2006, holds the {record:highest achievement} as the world's tallest living tree, measuring an astonishing 379.7 feet in height, while the "General Sherman" sequoia claims the title of the largest tree by volume, containing enough wood to build 120 houses.

        The biology of redwoods features fascinating {adaptations:changes to suit conditions} that enable their survival. Their thick, fibrous bark contains tannins that resist fire and pests, while their shallow root systems spread outward rather than downward, intertwining with neighboring trees for stability. High in their {canopy:uppermost branches}, a rarely seen world exists, hosting unique organisms found nowhere else. Scientists have discovered ferns, lichens, and even small crustaceans living hundreds of feet above the forest floor, contributing to the rich {biodiversity:variety of life} of these forests.

        Redwoods have evolved a remarkable {relationship:connection} with fire over millions of years. Rather than being destroyed by flames, these giants have developed mechanisms to {withstand:resist without damage} and even benefit from periodic burns. Their thick bark acts as {insulation:protective layer}, shielding the living tissue beneath from heat damage. Giant sequoias actually depend on fire to {propagate:reproduce and spread}, as the heat causes their cones to open and release seeds onto the newly cleared, nutrient-rich soil below. Fire also clears competing vegetation, reduces disease, and creates space for new redwood seedlings to establish themselves, demonstrating nature's complex {symbiosis:mutually beneficial relationship}.

        Despite protection efforts, redwoods face numerous contemporary threats. Climate change poses perhaps the most significant {impact:strong effect}, as rising temperatures and changing precipitation patterns affect the coastal fog that redwoods rely on. Increased tourism brings millions of visitors annually, creating pressure on these delicate environments. Urban development continues to encroach on forest edges, and even protected areas are not immune to the {diminishing:becoming gradually less} availability of suitable habitat corridors that allow wildlife to move freely between forest stands.

        The future of California's redwoods depends on thoughtful {conservation:preservation} strategies that balance human needs with ecosystem protection. Scientists, government agencies, and non-profit organizations work together to implement {sustainable:able to be maintained} management practices, restore damaged areas, and expand protected zones. These efforts recognize that humans and redwoods are {interdependent:dependent on each other}—we rely on forests for clean air, water filtration, and carbon sequestration, while these {vulnerable:exposed to harm} giants increasingly need our protection to survive. Their exceptional {longevity:long duration of life} means that some living redwoods were already ancient when European settlers first arrived in America, making them living witnesses to centuries of human history and {reminders:things that cause to remember} of our responsibility to preserve Earth's most remarkable treasures for future generations.
        `
    },

    eng_ex_14: {
        title: "The Appalachian Mountains: America's Ancient Backbone",

        content: `
        The Appalachian Mountains stand as one of the oldest mountain ranges on Earth, a {formidable:impressively powerful} geological feature that has shaped American history and culture. These mountains began forming nearly 480 million years ago, making them significantly older than the Rockies or the Alps. Over millennia, they have been {eroded:gradually worn away} by wind, water, and ice, softening what were once towering peaks comparable to the Himalayas. Today, this {ancient:belonging to the very distant past} mountain chain {stretches:extends over a distance} for nearly 2,000 miles from Newfoundland, Canada, to central Alabama in the United States.

        The region {encompasses:includes comprehensively} an extraordinary range of {diverse:showing great variety} ecosystems. The mountains are heavily {forested:covered with trees} and contain some of the richest {biodiversity:variety of plant and animal life} in North America. Scientists have documented over 10,000 species, including many {indigenous:naturally occurring} plants and animals found nowhere else on Earth. The Appalachian {terrain:land with particular features} varies dramatically from rugged peaks to gentle slopes, creating microclimates that support this remarkable biological diversity. The region's {abundant:available in large quantities} rainfall nurtures ancient forests, cascading waterfalls, and countless streams that form the headwaters of major Eastern rivers.

        Human presence in the Appalachians dates back thousands of years, with Native American {settlements:places where people establish communities} predating European arrival. When European colonists encountered these mountains, they found a {formidable:inspiring respect through being impressive} barrier to westward expansion. Eventually, natural gaps became crucial {corridors:passages connecting different areas} for migration and trade. The Appalachian culture that developed in these isolated valleys is deeply {embedded:fixed firmly} in American identity. This region gave birth to distinctive musical traditions, crafts, storytelling, and a unique dialect that preserves elements of Old English that have disappeared elsewhere.

        The mountains' natural resources have both blessed and cursed the region. Coal mining, timber {extraction:action of taking out something}, and agriculture have provided livelihoods for generations of Appalachian families. Communities {thrived:grew vigorously} during industrial booms but often suffered during economic downturns. This cycle has created a complex relationship between the people, the land, and industries that exploit its resources. Despite economic challenges, Appalachian communities have proven remarkably {resilient:able to recover from difficulties}, maintaining their cultural identity while adapting to changing circumstances.

        Today, the Appalachians face numerous challenges, including environmental issues from past and present resource extraction, economic transitions as traditional industries decline, and the need for {sustainable:able to be maintained} development. Conservation efforts focus on {preservation:maintenance in original state} of {pristine:unspoiled} areas and restoration of damaged ecosystems. The Appalachian Trail, a 2,200-mile hiking path running along the mountain spine, symbolizes a renewed appreciation for this remarkable landscape. As America continues to evolve, the Appalachian Mountains remain a defining feature of the eastern landscape—a living testament to both geological processes and human history that continue to shape the nation's character.
        `
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

The British Empire: Rise, Rule, and Legacy Across Six Continents
London Through the Centuries: From Roman Settlement to Global Metropolis
British Parliamentary Democracy: Evolution of a Political System

American Identity and Ideals

The American Dream: Origins, Evolution, and Contradictions of a National Ethos
Manifest Destiny: The Ideology That Expanded a Nation
From Melting Pot to Mosaic: Changing Conceptions of American Identity
The Western Frontier: Myth and Reality in American History

North American Wildlife and Natural Wonders

The Majestic Moose: North America's Gentle Giant of the Forest
Alaska's Wilderness: America's Last Great Frontier
The Great Lakes: Freshwater Seas That Shaped a Continent

Engineering and Architectural Achievements

The Golden Gate Bridge: Engineering Marvel of the Depression Era
The Development of Airplanes: From Kitty Hawk to Supersonic Flight
American Highways: How the Interstate System Transformed a Nation
The Empire State Building: Symbol of American Ambition and Resilience

Political and Social Movements

The Timeline of Democracy: From Ancient Athens to Modern Pluralism
The Civil Rights Movement: America's Ongoing Journey Toward Equality
Religious Movements in America: From the Great Awakening to Modern Evangelicalism
Labor Movements: How Workers Organized and Changed American Industry

Geographical and Regional Studies

The American Southwest: Where Cultures Converge and Transform
New England: Cradle of American Education and Literature
The Mississippi River: Lifeline of a Continental Economy
The Appalachian Mountains: America's Ancient Backbone
The Great Plains: From "Great American Desert" to Breadbasket of the World

Scientific and Technological Innovations


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

Conservation Movements: From John Muir to Modern Environmentalism
The National Park System: America's Best Idea
Climate Change in Alaska: Frontline of Global Warming
Preserving the Redwoods: Century-Long Battle to Save Ancient Forests

 */