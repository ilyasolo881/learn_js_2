function Counter(btn, spn){
	const button = document.querySelector(btn)
	const span = document.querySelector(spn)
	let count = 0

	button.addEventListener('click', () =>{
		count ++
		span.textContent = count;
	})
}
Counter('.btn1','.spn1')
Counter('.btn2','.spn2')
Counter('.btn3','.spn3')
Counter('.btn4','.spn4')
Counter('.btn5','.spn5')

// let count = [0,0,0,0,0,0]

// for (let i = 1; i<=5; i++) {
//   document.querySelector(".btn"+ String(i)).addEventListener('click', () =>{
//     count[i] ++
//     document.querySelector(".spn"+ String(i)).textContent = count[i];
//   })
// };