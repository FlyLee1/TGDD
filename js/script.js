const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

adressbtn.addEventListener("click", function() {
	document.querySelector('.adress-form').style.display = "flex"
})

adressclose.addEventListener("click", function() {
	document.querySelector('.adress-form').style.display = "none"
}) 

// slider-------------------------------------------
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
// ta khai báo bằng biến let tại vì const là biến cố định, nên dùng let thoải mái hơn đối vs trg hợp này
let index = 0  

rightbtn.addEventListener("click", function(){
	index = index + 1
	// nếu index > số phần tử, ở đây là imgNumber.length-1 tại vì số phần tử là 5 nhưng stt từng phần tư lại bắt đầu từ 0 nên phải -1
	// ở dưới là nếu index > 4
	if(index > imgNumber.length-1){   
		index = 0
	}
	document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
})
leftbtn.addEventListener("click", function(){
	index = index - 1
	if(index <= 0){
		index = imgNumber.length-1
	}
	document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
})

// slider 1-------------------------------------------------------------
const liNumber = document.querySelectorAll('.slider-content-left-bottom li')
// index như kiểu là số thứ tự của phần tử và function ở dưới gọi tên và stt
liNumber.forEach(function(image,index){
	image.addEventListener("click", function(){
		removeactive()
		document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
		image.classList.add("active") // khi click vào cái image nào thì sẽ thêm 1 cái active vào
	})
})
// khi chúng ta click vào từng li thì cái thanh vàng phải biến mất ở cái đầu tiên và đi theo từng cái li ta click vào
// thì ta sẽ dùng hàm remove và ta sẽ tạo ở function riêng 
function removeactive(){
	let imgactive = document.querySelector('.active')
	imgactive.classList.remove("active") //lúc này ta sẽ cho removeactive lên ở trog function trên(dòng 39) chỗ click vào sẽ thực thi remove cái active trc
} 

//slider 2-------------------------------------------------------------------------
function imgAuto(){
	index = index + 1
	if(index > imgNumber.length-1){
		index = 0
	}
	removeactive() // ta phải remove cái active trc để nó về lại 0 rồi ms chạy tiếp dòng lệnh document ở dưới
	document.querySelector('.slider-content-left-top').style.right = index * 100+"%"
	liNumber[index].classList.add("active")
	// console.log(index)
}
setInterval(imgAuto,3000)

//slider-product---------------------------------
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items')
// console.log(rightbtntwo)
// console.log(leftbtntwo)
rightbtntwo.addEventListener("click", function(){
	index = index + 1
	// nếu index > số phần tử, ở đây là imgNumber.length-1 tại vì số phần tử là 5 nhưng stt từng phần tư lại bắt đầu từ 0 nên phải -1
	// ở dưới là nếu index > 4
	if(index > imgNumbertwo.length-1){   
		index = 0
	}
	document.querySelector('.slider-product-one-content-items-content').style.right = index * 100+"%"
})
leftbtntwo.addEventListener("click", function(){
	index = index - 1
	if(index <= 0){
		index = imgNumbertwo.length-1
	}
	document.querySelector('.slider-product-one-content-items-content').style.right = index * 100+"%"
})