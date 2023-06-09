"use strict";

const videoElement = $(".video-container");

// const fetchVideoUrl = "";

let videoUrl =
	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

// const getVideoUrl = async function (Url) {
// 	const fetchData = await fetch(Url);
// 	const data = await fetchData.json();
// 	return data;
// };

$(document).ready(function () {
	videoElement.attr("src", videoUrl);
	videoElement.autoplay = true;
	videoElement[0].load();
	videoElement[0].play();
});
