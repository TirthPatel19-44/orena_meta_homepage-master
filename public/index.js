"use strict";

const firstName = $("#first-name");
const lastName = $("#last-name");
const email = $("#email-id");
const header = $("#header");
const home = $("#home");
const aboutUs = $("#about-us");
const mainSection = $("#main-section");
const footer = $("#footer");
const btn = $(".btn");
const errorMessage = $(".error-message");

const postUrl = "";

const websiteUrl = "https://www.youtube.com/";

//sticky navigation
const headerHeight = header[0].getBoundingClientRect().height;

$(window).scroll(function () {
	let scroll = 0;
	scroll = $(window).scrollTop();

	if (scroll >= headerHeight + 30) {
		header.addClass("sticky");
	} else {
		header.removeClass("sticky");
	}
});

//scroll to section

home.click((e) => {
	mainSection[0].scrollIntoView({
		behavior: "smooth",
	});
});

aboutUs.click((e) => {
	footer[0].scrollIntoView({
		behavior: "smooth",
	});
});

//form click

//function that post data

// const postRequest = async function (Url, data) {
// 	try {
// 		const response = await fetch(Url, {
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		});

// 		console.log(response.json());
// 		return response.json();
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

//event listener on join button

// btn.click((e) => {
// 	e.preventDefault();
// 	console.log(firstName[0].value);
// 	console.log(e);
// 	if (!firstName[0].value || !lastName[0].value || !email[0].value) {
// 		errorMessage.removeClass("hidden");
// 		return;
// 	}

// 	const data = {
// 		firstName: firstName[0].value,
// 		lastName: lastName[0].value,
// 		email: email[0].value,
// 	};

// 	firstName[0].value = lastName[0].value = email[0].value = "";

// 	postRequest(postUrl, data);

// 	//open webiste on click of button
// 	window.location.assign(websiteUrl);

// 	console.log(data);
// });

