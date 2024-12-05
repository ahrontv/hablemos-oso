// JavaScript source code
// Make reusable navigation bar
// Contains some of its own css

/*
<nav>
    <ul>
        <li>
            <a></a>
        </li>
       <li>
            <a></a>
        </li>
        <li class='drop-down'>
            <div class = 'drop-btn'>
                <a></a>
                <i></i>
            </div>
            <div class='dropdown-content'>
                <a></a>
                <a></a>
                <a></a>
            </div>
        </li>
    </ul>
</nav>
*/

function checkIfLocal() {
    var isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if (isLocal) {
        console.log("The page is being hosted locally."); // Adjust your loading strategy for local development
        //var script = document.createElement("script");
        //script.type = "text/javascript";
        //script.src = url;
        // If a callback function is provided, set it to run once the script loads
        //if (callback) { script.onload = callback; } document.head.appendChild(script);
    } else {
        console.log("The page is not being hosted locally."); // Adjust your loading strategy for production
    }
    return isLocal;
}
if (!local) { var local = checkIfLocal();}


let fibEx = 1;
function buildFIBLink(n, l) {
    if (n < 100) l = "eng";
    if (n > 100 && n < 200) l = "heb";
    if (n > 200 && n < 300) l = "pt";
    if (n > 200 && n < 300) l = "span";
        n = n % 100;
    if (local) return `/games/fib/lang-fib-exs.html?lang=${l}&fibEx=${n}`
    return `/hablemos-oso/games/fib/lang-fib-exs.html?lang=${l}&fibEx=${n}`
}
function pgDropItem(n) {
    return { name: `Exercise ${n%100}`, href: buildFIBLink (n)}
}
let pgSets = {
    mainPages: {
        Home: { name: 'Home', href: 'index.html' },
        English: { name: 'English', href: 'languages/eng/' },
        Hebrew: { name: 'Hebrew', href: 'languages/heb/' },
        Portuguese: { name: 'Portuguese', href: 'languages/pt/' },
        Spanish: { name: 'Spanish', href: 'languages/span/' },
    },
    engPages: {
        Home: { name: 'Home', href: '../../' },
        FIB1: {
            name: 'Fill in the Blank 1-10', href: '#', 
            dropList: [pgDropItem(1), pgDropItem(2), pgDropItem(3), pgDropItem(4), pgDropItem(5),
            pgDropItem(6), pgDropItem(7), pgDropItem(8), pgDropItem(9), pgDropItem(10)]
        },
        FIB2: {
            name: 'Fill in the Blank 11-20', href: '#',
            dropList: [pgDropItem(11), pgDropItem(12), pgDropItem(13), pgDropItem(14), pgDropItem(15),
            pgDropItem(16), pgDropItem(17), pgDropItem(18), pgDropItem(19), pgDropItem(20)]
        }
    },
    hebPages: {
        Home: { name: 'Home', href: '/hablemos-oso/' },
        FIB1: {
            name: 'Fill in the Blank 1-10', href: '#', 
            dropList: [pgDropItem(101), pgDropItem(102), pgDropItem(103), pgDropItem(104), pgDropItem(105),
                pgDropItem(106), pgDropItem(107), pgDropItem(108), pgDropItem(109), pgDropItem(110)]
        },
        FIB2: {
            name: 'Fill in the Blank 11-20', href: '#',
            dropList: [pgDropItem(111), pgDropItem(112), pgDropItem(113), pgDropItem(114), pgDropItem(115),
            pgDropItem(116), pgDropItem(117), pgDropItem(118), pgDropItem(119), pgDropItem(120)]
        }
    },
    ptPages: {
        Home: { name: 'Home', href: '/hablemos-oso/' },
        FIB1: {
            name: 'Fill in the Blank 1-10', href: '#',
            dropList: [pgDropItem(201), pgDropItem(202), pgDropItem(203), pgDropItem(204), pgDropItem(205),
            pgDropItem(206), pgDropItem(207), pgDropItem(208), pgDropItem(209), pgDropItem(210)]
        },
        FIB2: {
            name: 'Fill in the Blank 11-20', href: '#',
            dropList: [pgDropItem(211), pgDropItem(212), pgDropItem(213), pgDropItem(214), pgDropItem(215),
            pgDropItem(216), pgDropItem(217), pgDropItem(218), pgDropItem(219), pgDropItem(220)]
        }
    },
    spanPages: {
        Home: { name: 'Home', href: '/hablemos-oso/' },
        FIB1: {
            name: 'Fill in the Blank 1-10', href: '#',
            dropList: [pgDropItem(301), pgDropItem(302), pgDropItem(303), pgDropItem(304), pgDropItem(305),
            pgDropItem(306), pgDropItem(307), pgDropItem(308), pgDropItem(309), pgDropItem(310)]
        },
        FIB2: {
            name: 'Fill in the Blank 11-20', href: '#',
            dropList: [pgDropItem(311), pgDropItem(312), pgDropItem(313), pgDropItem(314), pgDropItem(315),
            pgDropItem(316), pgDropItem(317), pgDropItem(318), pgDropItem(319), pgDropItem(320)]
        }
    },
};

if (local) pgSets.hebPages.Home.href = 'index.html';
function markCurrPg(pg, currPg,listItem) {
    if (pg.includes(currPg)) listItem.classList.add('currPg');
    // apply to first child only?
}

function createNav(setPages) {
    let nav = document.createElement('nav');
    let currPg = window.location.pathname.split('/').pop() || 'home.html';
    const sectList = document.createElement('ul');
    Object.entries(setPages).forEach(([key, value]) => {
        let newLi = document.createElement('li');
        let newA = document.createElement('a'); // main
        newA.textContent = value.name;
        if (newA.href === '#') newA.onclick = (e) => e.preventDefault();
        newA.href = value.href;
        if (value.dropList) {
            let caretIcon = document.createElement('i');
            caretIcon.classList.add("fa", "fa-caret-down");
            let newDivBtn = document.createElement('div');
            newDivBtn.classList.add("drop-btn");
            newDivBtn.appendChild(newA); // append anchor Main
            newDivBtn.appendChild(caretIcon); // append caret icon
            // Prepare dropdown-content
            let drpCnt = document.createElement('div');
            drpCnt.classList.add("dropdown-content");
            value.dropList.forEach((drp_link) => {
                let drpA = document.createElement('a');
                drpA.textContent = drp_link.name;
                drpA.href = drp_link.href;
                drpCnt.appendChild(drpA);
            });
            newLi.classList.add("drop-down");
            newLi.appendChild(newDivBtn);
            newLi.appendChild(drpCnt);
        } else {
            newLi.appendChild(newA);
        }
        markCurrPg(newA.href.toLowerCase(), currPg.toLowerCase(), newLi); //only first level but need to adapt for
        sectList.appendChild(newLi);
    })
    nav.appendChild(sectList);
    return nav
}

function includeNavStlying() {
    const head = document.querySelector('head');
    let styleEle = document.createElement('style');
    styleEle.innerHTML = `
        header{
            position:relative;
        }

        /* Navigation bar container */
        nav {
            overflow-y: visible;
            background-color: #333;   
        }

        nav{
            position:relative;
        }

        nav ul{
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }

            /* Navigation bar links (Sections) */
            /*nav ul li a, nav ul li div a {*/
            nav ul li {
                float: left;
                font-size: 16px;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }
            nav ul li a, nav ul li div a {
                padding: 14px 16px;
                color: white;
                text-decoration: none;
                margin-right: 5px;
            }

        /* Dropdown container */
        nav ul li.drop-down {
            float: left;
            position: relative; /* CP Ensure the parent is positioned */
            overflow-y: visible;
        }

            /* Dropdown button */
            nav ul li.drop-down .drop-btn {
                display:inline-block;
                font-size: 16px;
                border: none;
                outline: none;
                color: white;
                background-color: inherit;
                font-family: inherit;
                margin: 0;
            }

            /* Add a background color on dropdown button hover */
            nav ul li:hover, nav ul li.drop-down:hover {
                background-color: red;
            }

        /* Dropdown content (hidden by default) */
        .dropdown-content {
            display: none;
            position: absolute;
            top: 100%; /* Positions dropdown right below the parent */
            left:0;
            right: 0;
            background-color: #f9f9f9;
            /*min-width: 160px;*/
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 5;
        }

            /* Links inside the dropdown */
            .dropdown-content a {
                float: none;
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
                text-align: left;
                width: 100%; /* Ensure the anchor takes full width */
                box-sizing: border-box; /* Include padding in width calculation */
            }

                /* Add a grey background color to dropdown links on hover */
                .dropdown-content a:hover {
                    background-color: #ddd;
                    width: 100%; /* Ensure the hover effect takes full width */
                }

        /* Show the dropdown menu on hover */
        .drop-down:hover .dropdown-content {
            display: block;
        }

        .drop-down:hover {
            overflow-y:visible;
        }

        /* Caret control */
        nav ul li.drop-down .drop-btn i {
            display: inline-block;
            transform: rotate(90deg);
            color: white;
            text-align: center;
            transition: transform 0.5s ease;
        }
            nav ul li.drop-down:hover .drop-btn i {
                transform: rotate(0deg);
            }
    `;
    head.insertBefore(styleEle, head.children[0]); // so its overwrittable in the page I use it or with an external stylesheet
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';
    head.appendChild(iconLink);
}

function addNav(pgs) {
    try {
        // Is there a header already? If not make one and add to it
        const header = document.querySelector('header') || document.createElement('header');
        if (header.parentNode === null) document.body.prepend(header);
        if (!pgs) {
            pgs = pgSets.mainPages
        } else {
            pgs = pgSets[pgs];
        }
        const nav = createNav(pgs);
        header.prepend(nav);
        includeNavStlying();
    }
    catch (err) {
        console.error('Error in addNav:', err);
    }
}