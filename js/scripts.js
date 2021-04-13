/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


// function myFunction() {
//     document.getElementById("droppContent").classList.toggle("show");
// }

// Close the dropdown if the user clicks outside of it


// window.onclick = function(event) {
//   if (!event.target.matches('.select-dropp__ico')) {

//     var dropdowns = document.getElementsByClassName("dropp-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }


// jQuery(function($){
// 	$(document).mouseup(function (e){ // событие клика по веб-документу
// 		var div = $("#dpContent"); // тут указываем ID элемента
// 		if (!div.is(e.target) // если клик был не по нашему блоку
// 		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
// 			div.hide(); // скрываем его
// 		}
// 	});
// });

$(document).on('click', function (e) {
	// console.log(e.target);


	if (e.target.id) {							//проверяем есть ли у элемента атрибут id
		var idClick = e.target.id;

		if ($('#' + idClick).attr('item')) {				//проверяем есть ли у элемента атрибут Item
			var numItem = $('#' + idClick).attr('item');

			// console.log("Iten - " + numItem);
			var idIco = "#sdIco" + numItem;
			var idName = "#sdName" + numItem;
			var idBtm = "#srBtm" + numItem;
			var idContent = "#dpContent" + numItem;
			
			if ($(idContent).css('display') == 'none') {
				$(idIco).removeClass('sd__ico-noclick');
				$(idName).removeClass('sd__name-noclick');
				$(idBtm).removeClass('cr-btm__down');
				$(idIco).addClass('sd__ico-click');
				$(idName).addClass('sd__name-click');
				$(idBtm).addClass('cr-btm__up');

				$(idContent).slideToggle(300);
			}
			else {
				$(idIco).removeClass('sd__ico-click');
				$(idName).removeClass('sd__name-click');
				$(idBtm).removeClass('cr-btm__up');
				$(idIco).addClass('sd__ico-noclick');
				$(idName).addClass('sd__name-noclick');
				$(idBtm).addClass('cr-btm__down');

				$(idContent).slideToggle(300);
			}
		}else if (idClick == "idlanguage") {
			console.log('Попали в блок, id - ' +idClick)
			if ($('#idMenu').css('display') == 'none') {

				console.log('Попали в блок none');
				
				$('.angle').removeClass('angle-down');
				$('.angle').addClass('angle-up');				
				

				$('#idMenu').slideToggle(300);
			}
			else {
							
				$('.angle').removeClass('angle-up');
				$('.angle').addClass('angle-down');	

				console.log('Попали в блок  не none');
				$('#idMenu').slideToggle(300);
			}
		}
	}			
});