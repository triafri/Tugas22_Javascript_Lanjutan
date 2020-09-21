function panggilForReach(){
	var kal = "Saya ingin belajar bersama"
	pisah = kal.split(" ")

	pisah.forEach(function(item, index, array){
		console.log("Item : ", item, "Index ke : ", index)
	})
}

panggilForReach();