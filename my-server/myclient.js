window.onload = function () {
	var url, i, jqxhr;

	url = document.URL + 'data';
	console.log(url);
	jqxhr = $.get(url, function(data) {
		console.log('API response received');
		$('body').append(data);
	});
};
