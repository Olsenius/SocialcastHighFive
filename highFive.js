function highFive() {
	$(document).find('a.like_toggle.unliked').each(function(index, el) {
		$(el).text('High five!');
	});

	$(document).find('a.like_toggle.liked').each(function(index, el) {
		$(el).text('Leave hanging');
	});


	$(document).find('li.suffix.decorator').each(function(index, el) {
		el.innerHTML = 'high fived this!';
	});


	$(document).find('span.like_preview')
		.each(function(index, el) {
			$(el).find('span').each(function(i, e) {
				if (e.innerHTML === ' likes this' || e.innerHTML === ' like this') {
					e.innerHTML = ' high fived this!';
				}
			})
		});

	$(document).find('div.list_modal').find('h2').each(function(index, el) {
		var element = $(el);
		if (element.text() === 'People who like this comment') {
			element.text('People who high fived this comment');
		}
		if (element.text() === 'People who like this message') {
			element.text('People who high fived this message');
		}
	});

	if (window.location.pathname === '/notifications') {
		$(document).find('a.unlike.sc-lightest-text').each(function(index, el) {
			$(el).text('Leave hanging');
		});

		$(document).find('span.you_like_this').each(function(index, el) {
			el.innerHTML = 'You high fived this!';
		});

		$(document).find('a.like.sc-action-link').each(function(index, el) {
			$(el).text('High five!');
		});
	};
}

function injectJs(link) {
        var scr = document.createElement("script");
        scr.type="text/javascript";
        scr.src=link;
        (document.head || document.body || document.documentElement).appendChild(scr);
}

injectJs(chrome.extension.getURL("replace.js"));

highFive();

setInterval(function(){highFive()}, 500);