$(function(){
			$('#frontPage').fullpage({
				autoScrolling: false,
				fitToSection: false
			});

			var locations = [
			['Lyon', 45.757934, 4.836149, 4],
			['Marcq-en-Barœul', 50.677548, 3.098176, 5],
			['Cysoing', 50.566136, 3.214326, 3],
			['Dardilly', 45.812004, 4.751704, 2]
			];

			var map = new google.maps.Map(document.getElementById('map'), {
				zoom:5,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});

			var infowindow = new google.maps.InfoWindow();

			var marker, i;

			for (i = 0; i < locations.length; i++) {  
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(locations[i][1], locations[i][2]),
					map: map
				});

				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function() {
						infowindow.setContent('ADRESSE : ' + locations[i][0]);
						infowindow.open(map, marker);
					}
				})(marker, i));
			}
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 'address': 'France'}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					map.setCenter(results[0].geometry.location);
				} else {
					alert("Geocode was not successful for the following reason: " + status);
				}
			});

		});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});