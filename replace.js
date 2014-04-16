function replace(obj) {
	for (var property in obj) {
		if (obj.hasOwnProperty(property)) {
			if (typeof obj[property] == "object") {
				replace(obj[property]);
			} else {
				if (obj[property]) {
					if (property === "if_youd_like_to_edit_your_message" || property === "already_registered" || property === "delete_confirm" || property === "with_admin" || property === "message")
						continue;

					obj[property] = obj[property].replace("Unliked", "Too slow");
					obj[property] = obj[property].replace("unliked", "Too slow");
					obj[property] = obj[property].replace("Unlike", "Too slow");
					obj[property] = obj[property].replace("unlike", "Too slow");
					obj[property] = obj[property].replace("likes", "high fives");
					obj[property] = obj[property].replace("liked", "high fived");
					obj[property] = obj[property].replace("like", "high five");
					obj[property] = obj[property].replace("Like", "High five");
				}
			}
		}
	}
}

replace(I18n.translations.en);