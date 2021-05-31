//*homepage/
window.onload=function(){
var greet=new Date().getDay();
switch(greet)
{	case 0:
	alert("Today is Sunday,welcome to the website!");
	break;
	case 1:
	alert("Today is Monday,welcome to the website!");
	break;
	case 2:
	alert("Today is Tuesday,welcome to the website!");
	break;
	case 3:
	alert("Today is Wednesday,welcome to the website!");
	break;
	case 4:
	alert("Today is Thursday,welcome to the website!");
	break;
	case 5:
	alert("Today is Friday,welcome to the website!");
	break;
	case 6:
	alert("Today is Saturdat,welcome to the website!");
	break;
 }
}

function donate(){
 var donateQ1=prompt("What's your name?(You can choose to write)");
 var donateQ2=prompt("Which way do you choose to donate?(Credit card or Savings card)");
 var donateQ3=prompt("How much do you want to donate?")

 if (donateQ2=="") {alert("Please rechoose")}
 else if (donateQ2=="Credit card"||"credit card")
 {var CN=prompt("Please write down your card number(16 characters)");
 if (CN.length<16) {alert("Please reenter your card number")}
 else if(CN=="") {alert("Please reenter your card number")} 
console.log(CN)}
 else if(donateQ2=="Savings card"||"savings card") 
 {var SN=prompt("Please write down your card number");
 if (SN.length<18){alert("Please reenter your card number")}
 else if (SN=="") {alert("Please reenter your card number")}
console.log(SN)}
if (donateQ3=="") {alert("Please reenter")}
else if (donateQ3>0){alert("Thanks for your donation!")}
}

function normalimg1(NI){
	NI.style.height="70px";
	NI.style.width="70px";
}
function bigimg1(NI2){
	NI2.style.height="80px";
	NI2.style.width="80px";
}

function normalimg2(NII){
	NII.style.height="80px";
	NII.style.width="80px";
}

function bigimg2(NII2){
	NII2.style.height="90px";
	NII2.style.width="90px";
}

function normalimg3(NIII){
	NIII.style.height="80px";
	NIII.style.width="80px";
}

function bigimag3(NIII2){
	NIII2.style.height="90px";
	NIII2.style.width="90px";
}

function overpetbox1(box1){
   box1.style.color="rgb(247, 145, 20)";
}

function outpetbox1(box2){
	box2.style.color="black";
}

function overpetbox2(box3){
	box3.style.color="rgb(247, 145, 20)";
}
function outpetbox2(box4){
	box4.style.color="black";
}
function overpetbox3(box5){
	box5.style.color="rgb(247, 145, 20)";
}
function outpetbox3(box6){
	box6.style.color="black";
}
function overpetbox4(box7){
	box7.style.color="rgb(247, 145, 20)";
}
function outpetbox4(box8){
	box8.style.color="black";
}
function overpetbox5(box9){
	box9.style.color="rgb(247, 145, 20)";
}
function outpetbox5(box10){
	box10.style.color="black";
}
function overpetbox6(box11){
	box11.style.color="rgb(247, 145, 20)";
}
function outpetbox6(box12){
	box12.style.color="black";
}
function overpetbox7(box13){
	box13.style.color="rgb(247, 145, 20)";
}
function outpetbox7(box14){
	box14.style.color="black";
}
function overpetbox8(box15){
	box15.style.color="rgb(247, 145, 20)";
}
function outpetbox8(box16){
	box16.style.color="black";
}

function searchbutton(){
	alert("Searching for you now...")
}

//*page 2/
function submitb(){
	alert("Thanks for your join!");
}

function bigbutton(BB){
	BB.style.height="55px";
	BB.style.width="240px";
}
function smallbutton(Bb){
	Bb.style.height="50px";
	Bb.style.width="220px";
}
function ad(){
	var adtext=document.getElementById("adtext");
	var adimg=document.getElementById("adimg");
	adimg.style.display="none";
	adtext.style.display="block";
	console.log(adtext);
}
var LDimage=new Array();
LDimage[0]="prize1.jpg";
LDimage[1]="prize2.jpg";
LDimage[2]="prize3.jpg";
LDimage[3]="prize4.jpg";
LDimage[4]="prize5.jpg";
LDimage[5]="prize6.png";
function LD(){
	var LDnumber=Math.floor(Math.random()*6);
	document.getElementById("LDimg").src=LDimage[LDnumber];
}

function rate(){
	var star=prompt("Please write down your rate(1-5)");
	if(star>0&&star<5){alert("Thanks for your rate!")}
	else{alert("Please reenter")}
	var FB=prompt("Do you have any suggestion for us?");
	if (FB.length>0) {alert("Thanks for your suggestion!")}
	else{alert("Thanks for visiting!")}
}