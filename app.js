const mondai = document.getElementById("mondai");


var kaitou = 0;

var h = 0;
var blow = 0;

//–â‘è•¶ì‚é‚Æ‚±

var min = 0, max = 9;

var a = Math.floor( Math.random() * (max - min + 1)) + min;
var b = Math.floor( Math.random() * (max - min + 1)) + min;
var c = Math.floor( Math.random() * (max - min + 1)) + min;


while(a == b){
b = Math.floor( Math.random() * (max - min + 1)) + min;
}

while(a == c || b == c){
c = Math.floor( Math.random() * (max - min + 1)) + min;
}


let suuji = [a,b,c];

//mondai.textContent = a+" "+b+ " "+c;
mondai.textContent = "? ? ?";
console.log(a+""+b+""+c)

//‰ñ“š‚µ‚½‚Æ‚«

function submit(){

h = 0;
blow = 0;
	//‰ñ“š‚ğ3‚Â‚É•ª‚¯‚é
	kaitou = document.getElementById("text1").value
	kaitouF = document.getElementById("text1").value
	document.getElementById("text1").value = "";
	kaitou.toString();
	kaitou.split('');

	//¸¸‚·‚é‚æ
	if(kaitou[0] == a || kaitou[0] == b || kaitou[0] == c){
		if(kaitou[0] == a){
			blow++
		}else{
			h++
		};
	};
	if(kaitou[1] == a || kaitou[1] == b || kaitou[1] == c){
		if(kaitou[1] == b){
			blow++
		}else{
			h++
		};
	};
	if(kaitou[2] == a || kaitou[2] == b || kaitou[2] == c){
		if(kaitou[2] == c){
			blow++
		}else{
			h++
		};
	};

	console.log("H"+h+"B"+blow)

	var new_element = document.createElement('h2');
	new_element.textContent = kaitouF + " hit " + blow + " away "+ h;
	
	document.getElementById('HandA').appendChild(new_element);
	
	if(blow == 3){
		mondai.textContent = a+" "+b+ " "+c;
		mondai.style.color = "red";
		document.getElementById('HandA').color = "purple";
	};
	
	


	

}