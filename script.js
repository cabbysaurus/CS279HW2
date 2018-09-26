/**
 * 
 */


const wordList =  // Each group of 4 is related
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
	"Pine", "Maple", "Oak", "Elm",
	"Sofa", "Chair", "Table", "Desk",
	"Rose", "Tulip", "Daffodil", "Lily",
	"Sight", "Touch", "Smell", "Taste",
	"Book", "Magazine", "Newspaper", "Journal",
	"Math", "Science", "History", "English",
	"Shakespeare", "Hemmingway", "Tolstoy", "Dickens",
	"Facebook", "Instagram", "Snapchat", "Twitter",
	"Jalapeno", "Habanero", "Poblano", "Serrano"];

//const sequence = [24,43,17,43,17,27,42,17,6,42,20,17,16,35,34,6,46,
//	6,46,34,16,0,42,42,42,0,16,33,10,42,20,46,44,42,16,35,20,3,46,
//	6,0,35,40,24,15,19,8,35,16,31,19,16,19,42,24,31,6,15,6,35,42,15,10,
//	16,42,6,40,33,16,3,35,16,17,40,21,5,44,3,42,15,34,43,6,15,16,42,6,5,
//	42,31,17,10,20,27,35,42,16,6,15,7,21,19,16,6,16,10,8,6,34,6,6,7,10,20,
//	35,17,46,6,7,0,16,15,42,16,17,15];



$(document).ready(function(){
//		for (var i = 0; i < dataset.length; i++) {
//			dataset[i] = shuffle(dataset[i]);
//		}
//		dataset = shuffle(dataset);
        $(".fade").hide();
        $(".show").hide();
        $(".menubox1").hide();
/*         $("#menu2").hide();
        $("#menu3").hide(); */
	
    $("#menu1").click(function(){
		//makeList(dataset[0]);
		$(".show2").hide();
    	//$(".menubox2").hide();
        $(".fade2").hide();
        $(".show3").hide();
    	//$(".menubox3").hide();
        $(".fade3").hide();
    	$(".show1").show();
    	$(".menubox1").show();
        $(".fade1").fadeTo(500, 1);
        //setTimeout(showSecondMenu, 2000);
        
    });
    
    $("#menu2").click(function(){
    	$(".show1").hide();
    	$(".menubox1").hide();
        $(".fade1").hide();
        $(".show3").hide();
    	//$(".menubox3").hide();
        $(".fade3").hide();
    	$(".show2").show();
        $(".fade2").fadeTo(500, 1);
        //setTimeout(showThirdMenu, 2000);
        //$("#menu3").delay(2000).show();
    });
    
    $("#menu3").click(function(){
    	$(".show2").hide();
    	//$(".menubox2").hide();
        $(".fade2").hide();
        $(".show1").hide();
    	$(".menubox1").hide();
        $(".fade1").hide();
    	$(".show3").show();
        $(".fade3").fadeTo(500, 1);
    });
    
});

var counter = 0;
var sequence = [0, 0, 2, 1];
var tar = sequence[0];

var clicks = 0;
var target = 3;
var freq = [0, 0, 0, 0];
var recent = 5;
var freq1 = 0;
var freq2 = 1;
var freq3 = 2;
var menuNum = 1;


function clickFunction(x) {
	if(x==tar)
    {
    	counter++;
        tar = sequence[counter];
        menuNum = parseInt(tar / 16) + 1;
        document.getElementById("fieldx").value = "Menu: " + menuNum + " Item:" + wordList[tar];
//        document.getElementById(x).classList.add('fade1');
    }

	freq[x] = freq[x] + 1;
    recent = x;
    //document.getElementById("field3").value = recent.toString();
//    if(x==target) {
//    	checkCorrect();
//    }
    updateClicks();
    
    var temp = freq;
    getThreeFreq(temp);
    
    // first unfade then add fade to items that need it
    // not working
    document.getElementsByClassName("fade1").classList.remove("fade1");
    document.getElementById(recent).classList.add('fade1');
    if (freq1 != recent) {
    	document.getElementById(freq1).classList.add('fade1');
    	if (freq2 != recent) {
    		document.getElementById(freq2).classList.add('fade1');
    	}
    	else {
    		document.getElementById(freq3).classList.add('fade1');
    	}
    }
    else {
    	document.getElementById(freq2).classList.add('fade1');
    	document.getElementById(freq3).classList.add('fade1');
    }
    
    
    //document.getElementById("field6").value = freq[x].toString();
    // need to close the menu that is open
  	}

function updateClicks()	{
	clicks++;
	//document.getElementById("field1").value = clicks.toString();
    }
    
function checkCorrect()	{
	document.getElementById("field2").value = "Correct";
    }

function getThreeFreq(x) {

	var a = x.slice(0);
	
    var index = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    freq1 = index;
    //document.getElementById(index).classList.add('fade1');
    a[index] = -1;
    
    var index = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    freq2 = index;
    //document.getElementById(index).classList.add('fade1');
    a[index] = -1;
    
    var index = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    freq3 = index;
    //document.getElementById(index).classList.add('fade1');
    a[index] = -1;


	}
	