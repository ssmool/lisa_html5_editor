function share(platform,addr,dir='false') {
	const url = encodeURIComponent(window.location.href);
	let shareURL = "";
	switch (platform) {
		case "facebook":
			shareURL = 'https://www.facebook.com/sharer/sharer.php?u=${addr}';
			break;
		case "linkedin":
			shareURL = 'https://www.linkedin.com/shareArticle?mini=true&url=${addr}';
			break;
		case "github":
			window.open("https://github.com/addr/dir", "_blank");
			return;
		case "instagram":
			alert("O Instagram não permite compartilhamento direto via web.");
			return;
	}
  	window.open(shareURL, "_blank");
}