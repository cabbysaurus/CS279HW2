// every group of 4 are related
const wordList =  //16 for now, but we will need 48
	["Merlot", "Shiraz", "Chardonnay", "Cabernet", 
	"Saturn", "Venus", "Jupiter", "Mercury", 
	"France", "England", "Spain", "Germany", 
	"Pecan", "Walnut", "Almond", "Pistachio", 
	"Sapphire", "Topaz", "Pearl", "Emerald", 
	"Minotaur", "Sasquatch", "Ogopogo", "Bigfoot", 
	"Blimp", "Helicopter", "Airplane", "Balloon", 
	"Safflower", "Canola", "Olive", "Sesame", 
	"Baseball", "Basketball", "Football", "Soccer", 
	"Pants", "Shirt", "Socks", "Dress", 
	"Red", "Blue", "Green", "Yellow", 
	"Jazz", "Classical", "Reggae", "Rock", 
	"Breakfast", "Lunch", "Dinner", "Brunch", 
	"Lake", "Sea", "Pond", "Ocean", 
	"Harvard", "Yale", "Princeton", "Columbia", 
	"Pine", "Maple", "Oak", "Elm"];

const wordGroups = [];


for (let i = 0; i < wordList.length - 3; i += 4) {
	wordGroups.push(wordList.slice(i, i+4));
}

function randint(upperOpenBound) {
  return Math.floor(Math.random() * upperOpenBound);
}


function getSubmenuWords() {
  const submenus = [];

  const usedGroups = new Set();
  const getRandomGroup = () => {
    let groupIdx;
    do {
      groupIdx = randint(wordGroups.length);
    } while (usedGroups.has(groupIdx));
    return wordGroups[groupIdx];
  };

  for (let m = 0; m < 3; m += 1) {
    const submenu = {
      title: `Menu ${m}`,
      items: [],
    };

    const r = randint(16); // randomly pick predicted items

    for (let g = 0; g < 4; g += 1) {
      const group = getRandomGroup();
      group.forEach((word, w) => {
        const item = {
          name: word,
        };
        item.predicted = (r + (g * 4) + w) % 5 === 0;
        submenu.items.push(item);
      });
    }
    submenus.push(submenu);
  }
  return submenus;
}