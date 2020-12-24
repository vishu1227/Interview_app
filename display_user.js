console.log('I am connected!')

var k = 5;
indexes = [20 * k, 20 * k, 20 * k, 20 * k, 20 * k, 20 * k, 20 * k, 20 * k]

graph(indexes)

// $(window).load(function () {
// 	$(".carousel .item").each(function () {
// 		var i = $(this).next();
// 		i.length|| (i = $(this).siblings(":first"));
// 			i.children(":first-child").clone().appendTo($(this));

// 		for (var n = 0; n < 4; n++)(i = i.next()).length ||
// 			(i = $(this).siblings(":first")),
// 			i.children(":first-child").clone().appendTo($(this))
// 	})
// });


let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');

showValue.innerHTML = "<i>Not rated</i>"

let ratings=0;

for (let i = 0; i < star.length; i++) {
	star[i].addEventListener('click', function () {
		i = this.value;

		showValue.innerHTML = i + " out of 5";
		ratings=i;

		index2 = [20 * i, 20 * i, 20 * i, 20 * i, 20 * i, 20 * i, 20 * i, 20 * i]
		graph(index2)
	});
}

function graph(indexes) {

	var myConfig = {
		"type": "radar",
		"plot": {
			"aspect": "area"
		},
		"scale-v": {
			"values": "0:100:25",
			"labels": ["", "", "", "", ""],
			"ref-line": {
				"line-color": "none"
			},
			"guide": {
				"line-style": "solid"

			}
		},
		"scale-k": {
			"values": "0:300:60",
			"format": "%v°",
			"aspect": "circle", //To set the chart shape to circular.
			"guide": {
				"line-style": "solid"
			}
		},
		"series": [{
			"values": indexes
		}]
	};

	zingchart.render({
		id: 'myChart',
		data: myConfig,
		height: '260px',
		width: '260px'
	});
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let active_que='ques1';
let db=[];

let videos=['https://www.youtube.com/embed/lsJBGvyiAHI?list=PLQpF--VlgguQR9WEbd9ymew9u_sb_2MU5','https://www.youtube.com/embed/xuMAMh6MJVA?list=PLQpF--VlgguQR9WEbd9ymew9u_sb_2MU5',
'https://www.youtube.com/embed/hnDaisrMeWc?list=PLQpF--VlgguQR9WEbd9ymew9u_sb_2MU5'];


function activeQues(ques_no)
{
	active_que=ques_no;

	// alert(ques_no);

	let video=document.getElementById('video');
	// alert(video.src)
	
	if(active_que=='ques1'){
		video.src=videos[0];

		// alert(videos.src)
	}
	else if(active_que=='ques2'){
		video.src=videos[1];
	}
	else{
		video.src=videos[2];
	}

	if(active_que=='ques3'){
		document.getElementById('save_btn').innerHTML='Save and next';
		// document.getElementById('save_next')..display='block';
		// document.getElementById('save_btn').display='none';
	}
	else{
		document.getElementById('save_btn').innerHTML='Save'
	}
}
function Save_fun(set)
{
	console.log(set);
	let comments=document.getElementById('cmnt_section').value;
	star.length=0;
	obj={
		'ques':document.getElementById(active_que).innerHTML,
		'rating':ratings,
		'comment':comments
	}
	db.push(obj);
	console.log(db);

	alert('Rating and Comments are saved for '+active_que);
	document.getElementsByName('comments').value='';

	if(active_que=='ques3')
	{
		console.log('Yes in set=1')
		document.getElementById('question_and_video').style.display='none';
		document.getElementById('comm_review').style.display='none';
		document.getElementById('sec2').style.display='block';
		// document.getElementById('mychart').style.height='100px';
		// document.getElementById('mychart').style.width='100px';
		let len=1;
		for(let i=db.length-1;i>=0;i--)
		{
			let table=document.getElementById('mytable');

			let row=table.insertRow(len);
			let cell1=row.insertCell(0);
			let cell2=row.insertCell(1);
			let cell3=row.insertCell(2);
			cell1.innerHTML=db[i]['ques'];
			cell2.innerHTML=db[i]['rating'];
			cell3.innerHTML=db[i]['comment'];

			indexes = [100, 100, 100, 100, 100, 100, 100, 100]
			graph(indexes);
		}
	}

}
