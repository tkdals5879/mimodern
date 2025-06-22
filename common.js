document.addEventListener("DOMContentLoaded", () => {
	const body = document.querySelector("body")
	let main = document.querySelector("main .full_mainbg")
	let h2 = document.querySelector(".maintext h2");
	let p = document.querySelector(".maintext p");
	main.style.transform = "scale(1)"
	h2.style.transform = "translateY(0)"
	h2.style.opacity = "1"
	p.style.transform = "translateY(0)"
	p.style.opacity = "1"

	// ▲ homepage loading effect **************************************************

	let ham = document.querySelector(".header_i .top_right .ham")
	let line = document.querySelectorAll(".header_i .top_right .ham .line")
	let dropdown = document.querySelector("header .header_dropdown_menu")
	let xbtn = document.querySelector(".header_dropdown_menu .header .header_r .xbtn img")

	ham.addEventListener('click', () => {
		dropdown.classList.add("active")
	});
	xbtn.addEventListener("click", () => {
		dropdown.classList.remove("active")
	});

	// ▲ header dropdown effect **************************************************

	let logo = document.querySelector(".logo img")
	let addr = document.querySelector(".top_right p")
	let addr_logo = document.querySelector(".top_right p img")
	let call = document.querySelector("header .header_i .call_icon img")

	window.addEventListener("scroll", () => {
		if (window.scrollY >= 1230) {
			logo.setAttribute("src", "./img/top_logo2.png")
			addr_logo.setAttribute("src", "./img/top_addr_icon2.png")
			call.setAttribute("src", "./img/call_icon_bk.png")
			lineup.style.color = "#000"
			addr.style.color = "#000"
			line.forEach(lines => {
				lines.style.backgroundColor = "#000"
				lines.style.transition = ".3s"
			});

		} else {
			logo.setAttribute("src", "./img/top_logo.png")
			addr_logo.setAttribute("src", "./img/top_addr_icon.png")
			call.setAttribute("src", "./img/call_icon_w.png")
			lineup.style.color = "#fff"
			addr.style.color = "#fff"
			line.forEach(lines => {
				lines.style.backgroundColor = "#fff"
				lines.style.transition = ".3s"
			});
		};
	});


	// ▲ header color change effect **************************************************

	let lineup = document.getElementById("lineup")
	let lineupwrap = document.querySelector(".lineup_box")
	let subitem = document.querySelectorAll(".lineup_box .main_menu .sub_menu li")
	lineup.addEventListener("mouseenter", () => {
		let submenu = lineupwrap.querySelector(".sub_menu");
		submenu.style.maxHeight = "500px"
		submenu.style.opacity = "1"
	});
	lineupwrap.addEventListener("mouseleave", () => {
		let submenu = lineupwrap.querySelector(".sub_menu");
		submenu.style.maxHeight = "0"
		submenu.style.opacity = "0"
	});
	subitem.forEach((item) => {
		item.addEventListener("mouseenter", () => {
			item.style.color = "bisque"
		});
		item.addEventListener("mouseleave", () => {
			item.style.color = "#fff"
		});
	});

	// ▲ line-up mouseenter effect **************************************************

	const arrow = document.querySelectorAll(".arrowbtn")
	arrow.forEach(arrows => {
		arrows.addEventListener("mouseenter", () => {
			arrows.style.backgroundColor = "#f0f0f0"
		});
		arrows.addEventListener("mouseleave", () => {
			arrows.style.backgroundColor = "transparent"
		});
	});

	// ▲ arrow mouseenter effect **************************************************

	const scroll_item_top_to_bottom = document.querySelectorAll(".scroll_item_top_to_bottom")
	const scroll_item_bottom_to_top = document.querySelectorAll(".scroll_item_bottom_to_top")

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.classList.contains("scroll_item_top_to_bottom")) {
					entry.target.classList.add("scroll_to_top");
				} else if (entry.target.classList.contains("scroll_item_bottom_to_top")) {
					entry.target.classList.add("scroll_to_bottom")
				};
			} else {
				entry.target.classList.remove("scroll_to_top", "scroll_to_bottom")
			};
		});
	});
	scroll_item_bottom_to_top.forEach((item) => observer.observe(item));
	scroll_item_top_to_bottom.forEach((item) => observer.observe(item));

	// // ▲ scrollevent **************************************************



	// // ▲ section01 hover event **************************************************

	const stickyWrapper = document.querySelector(".section_sticky");
	const stickyHeight = stickyWrapper.offsetHeight;

	gsap.to(".ab_title", {
		scrollTrigger: {
			trigger: ".ab_title",
			start: "top center",
			endTrigger: ".section_sticky",
			end: `+=${stickyHeight - 100}px`,
			pin: true,
			pinSpacing: false,
			anticipatePin: 1,
			pinType: "transform",
		}
	});

	const sections = document.querySelectorAll(".section02, .section03, .section04, .section05");
	sections.forEach((section, index) => {
		const number = (index + 1).toString().padStart(2, "0");

		ScrollTrigger.create({
			trigger: section,
			start: "top center",
			end: "bottom center",
			onEnter: () => {
				document.querySelector(".ab_title p").textContent = number;
			},
			onEnterBack: () => {
				document.querySelector(".ab_title p").textContent = number;
			}
		});
	});

	// // ▲ sticky number change event **************************************************

	var img_swiper = new Swiper(".img_mySwiper", {
		centeredSlides: true,
		loop: true,
		simulateTouch: false,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});


	// // ▲ section auto slide **************************************************

	const b_a = document.querySelector(".af_ss01 .textbox p")
	const explain = document.querySelector(".af_ss01 .textbox>span")
	const notice = document.querySelector(".af_ss01 .textbox .notice")

	const af_ss01_con_wrap = document.querySelector(".af_ss01 .contents")
	const af_ss01_con_inner = document.querySelector(".af_ss01 .contents .contents_i")
	const af_ss01_leftbtn = document.querySelector(".af_ss01 .contents .left_btn")
	const af_ss01_rightbtn = document.querySelector(".af_ss01 .contents .right_btn")
	const af_ss01_con = document.querySelectorAll(".af_ss01 .contents .contents_i .con")
	const af_ss01_con_img = document.querySelectorAll(".af_ss01 .contents .contents_i .con img")

	window.addEventListener("scroll", () => {
		if (window.scrollY >= 8700 && window.scrollY <= 9700) {
			b_a.classList.add("top_to_bottom")
			explain.classList.add("top_to_bottom")
			notice.classList.add("top_to_bottom")
		} else {
			b_a.classList.remove("top_to_bottom")
			explain.classList.remove("top_to_bottom")
			notice.classList.remove("top_to_bottom")
		}
	});


	af_ss01_con.forEach((con, index) => {
		con.addEventListener("mouseenter", () => {
			af_ss01_con_img[index].style.scale = "1.2"
		});
		con.addEventListener("mouseleave", () => {
			af_ss01_con_img[index].style.scale = "1"
		});
	});

	af_ss01_leftbtn.addEventListener("click", () => {
		af_ss01_con_inner.style.transform = "translateX(-300px)"
	})

	// // ▲ af_ss01 slide event **************************************************

	const click_to_move = 150;
	let set_slide = 0;

	const totalSlides = document.querySelectorAll(".af_ss01 .contents .contents_i .con").length;

	function updateSlidePosition() {
		af_ss01_con_inner.style.transition = "transform 0.5s ease";
		af_ss01_con_inner.style.transform = `translateX(-${set_slide * click_to_move}px)`;
		updateButtonState();
	}

	af_ss01_leftbtn.addEventListener("click", () => {
		if (set_slide > 0) {
			set_slide--;
			updateSlidePosition();
		}
	});

	af_ss01_rightbtn.addEventListener("click", () => {
		if (set_slide < totalSlides - 1) {
			set_slide++;
			updateSlidePosition();
		}
	});

	function updateButtonState() {
		if (set_slide === 0) {
			af_ss01_leftbtn.disabled = true;
		} else {
			af_ss01_leftbtn.disabled = false;
		}

		if (set_slide === totalSlides - 1) {
			af_ss01_rightbtn.disabled = true;
		} else {
			af_ss01_rightbtn.disabled = false;
		}
	}

	// 초기 버튼 상태 업데이트
	updateButtonState();

	// // ▲ af_ss01 slide btn event **************************************************

	const real_review = document.querySelector(".af_ss02 .textbox p")
	const after_rr = document.querySelector(".af_ss02 .textbox span")

	window.addEventListener("scroll", () => {
		if (window.scrollY >= 9700 && window.scrollY <= 10700) {
			real_review.classList.add("top_to_bottom")
			after_rr.classList.add("top_to_bottom")
		} else {
			real_review.classList.remove("top_to_bottom")
			after_rr.classList.remove("top_to_bottom")
		}
	});

	const slide_con = document.querySelector(".af_ss02 .scroll_list .bottom_sl ul")
	slide_con.addEventListener("mouseenter", () => {

	})

	// // ▲ af_ss02 **************************************************

	const af_ss03_main = document.querySelector(".af_ss03 .left .left_i .addr .main")
	const af_ss03_de_addr = document.querySelector(".af_ss03 .left .left_i .addr .de_addr")
	const af_ss03_information = document.querySelector(".af_ss03 .left .left_i .addr .information")
	const af_ss03_number = document.querySelector(".af_ss03 .left .left_i .addr .number")

	const af_ss03_time = document.querySelector(".af_ss03 .left .left_i .time .main")
	const af_ss03_otc = document.querySelector(".af_ss03 .left .left_i .time .open_to_close")
	const af_ss03_notice = document.querySelector(".af_ss03 .left .left_i .time .notice")

	window.addEventListener("scroll", () => {
		// console.log(scrollY)
		if (window.scrollY >= 10000) {
			af_ss03_main.classList.add("bottom_to_top")
			af_ss03_de_addr.classList.add("bottom_to_top")
			af_ss03_information.classList.add("bottom_to_top")
			af_ss03_number.classList.add("top_to_bottom")

			af_ss03_time.classList.add("top_to_bottom")
			af_ss03_otc.classList.add("top_to_bottom")
			af_ss03_notice.classList.add("top_to_bottom")
		} else {
			af_ss03_main.classList.remove("bottom_to_top")
			af_ss03_de_addr.classList.remove("bottom_to_top")
			af_ss03_information.classList.remove("bottom_to_top")
			af_ss03_number.classList.remove("top_to_bottom")

			af_ss03_time.classList.remove("top_to_bottom")
			af_ss03_otc.classList.remove("top_to_bottom")
			af_ss03_notice.classList.remove("top_to_bottom")
		}
	})


	// // ▲ af_ss03 **************************************************

	gsap.registerPlugin(ScrollTrigger);

	const scrollslide = document.querySelector(".scrollslide")
	const ss_i = document.querySelectorAll(".scrollslide .ss_i")
	if (window.innerWidth > 1200) {
		gsap.to(ss_i, {
			xPercent: -50,
			ease: "none",
			scrollTrigger: {
				trigger: scrollslide,
				start: "top",
				end: () => "+=" + (scrollslide.offsetWidth),
				pin: true,
				scrub: 1,
				invalidateOnRefresh: true,
				anticipatePin: 1,
			},

		});
	}

	// // ▲ gsap = scrollslide **************************************************

	const fixed_notice = document.querySelector(".fixed_notice");
	const f_icon = document.querySelector(".fixed_notice .icon");
	const f_text = document.querySelector(".fixed_notice span");
	const f_img = document.querySelector(".fixed_notice .icon img")
	const hidden = document.querySelector(".fixed_notice .hidden")

	fixed_notice.addEventListener("click", () => {
		fixed_notice.classList.toggle("on");
		if (fixed_notice.classList.contains("on")) {
			f_text.style.animation = "flow 10s linear infinite"
			f_img.setAttribute("src", "./img/id_notice_close.svg")
			hidden.style.opacity = "1"
		} else {
			f_text.style.animation = "none"
			f_img.setAttribute("src", "./img/id_notice.png")
			hidden.style.opacity = "0"
		}
	});

	// notice

	const reserve = document.querySelector(".reserve")
	const first_div = document.querySelector(".reserve div:nth-child(1)")
	const second_div = document.querySelector(".reserve div:nth-child(2)")

	function handleMouseOver() {
		first_div.style.opacity = "0";
		first_div.style.transform = "translateY(-100%)";
		second_div.style.opacity = "1";
	}

	function handleMouseLeave() {
		first_div.style.opacity = "1";
		first_div.style.transform = "translateY(0%)";
		second_div.style.opacity = "0";
	}

	reserve.addEventListener("mouseover", handleMouseOver);
	reserve.addEventListener("mouseleave", handleMouseLeave);

	if (window.innerWidth > 1200) {
		window.addEventListener("scroll", () => {
			if (scrollY >= 580) {
				first_div.style.opacity = "0";
				first_div.style.transform = "translateY(-100%)";
				second_div.style.opacity = "1";

				reserve.removeEventListener("mouseover", handleMouseOver);
				reserve.removeEventListener("mouseleave", handleMouseLeave);
			} else {
				first_div.style.opacity = "1";
				first_div.style.transform = "translateY(0%)";
				second_div.style.opacity = "0";

				reserve.addEventListener("mouseover", handleMouseOver);
				reserve.addEventListener("mouseleave", handleMouseLeave);
			}
		});
	}

	// reserve

	const quickwrap = document.querySelector(".quick_wrap")
	const quick_openbtn = document.querySelector(".quick_wrap .open_btn")
	const bounce01 = document.querySelector(".quick_wrap .open_btn .bounce01")
	const bounce02 = document.querySelector(".quick_wrap .open_btn .bounce02")
	const quick_list = document.querySelectorAll(".quick_wrap .quick_menu_wrap .quick_menu>li")
	const quick_target = document.querySelector(".quick_wrap .quick_menu_wrap .quick_menu .quick_menu_li_targetmove")
	const quick_p = document.querySelectorAll(".quick_wrap .quick_menu_wrap .quick_menu .quick_menu_list .normal")
	const q_img = document.querySelectorAll(".quick_wrap .quick_menu_wrap .quick_menu .quick_menu_list a img")

	quick_openbtn.addEventListener("click", () => {
		quick_list.forEach(list => {
			list.classList.toggle("open")
			quick_openbtn.classList.toggle("on")
		});
	})

	const targetmove = document.querySelectorAll(".quick_wrap .quick_menu_wrap .quick_menu .quick_menu_li_targetmove .quick_targetmove li")
	const targetmove_in = document.querySelector(".quick_wrap .quick_menu_wrap .quick_menu .quick_menu_li_targetmove .quick_targetmove")

	quick_target.addEventListener("mouseenter", () => {
		targetmove.forEach(move => {
			move.classList.add("open")
		});
	});
	quick_target.addEventListener("mouseleave", () => {
		targetmove.forEach(move => {
			move.classList.remove("open")
		});
	});

	targetmove_in.addEventListener("mouseenter", () => {
		targetmove.forEach(move => {
			move.classList.add("open")
		});
	})
	targetmove_in.addEventListener("mouseleave", () => {
		targetmove.forEach(move => {
			move.classList.remove("open")
		});
	})


	const normalText = document.querySelectorAll(".normal"); // 현재 li 내부의 p.normal만 선택

	const q_a = document.querySelectorAll(".quick_wrap .quick_menu_wrap .quick_menu .quick_menu_list a")
	q_a.forEach((a, index) => {
		a.addEventListener("mouseenter", () => {
			normalText[index].classList.add("hover")
		});
		a.addEventListener("mouseleave", () => {
			normalText[index].classList.remove("hover")
		});
	});



	// rigth fixed btn



	// // ▲ fixed **************************************************

	const plusbtn = document.querySelector("section .section05 .right .textbox .plus .plusbtn")
	const lazer_closebtn = document.querySelector(".lazer_wrap .layout_wrapper .closebtn")
	const lazer_wrap = document.querySelector(".lazer_wrap")
	const lazer_bg = document.querySelector(".lazer_wrap .background")

	plusbtn.addEventListener("click", () => {
		lazer_wrap.style.visibility = "visible"
		body.style.overflowY = "hidden"
	});

	lazer_closebtn.addEventListener("click", () => {
		lazer_wrap.style.visibility = "hidden"
		body.style.overflowY = "visible"
	});
	lazer_bg.addEventListener("click", () => {
		lazer_wrap.style.visibility = "hidden"
		body.style.overflowY = "visible"
	});



	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 3.5,
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	// ▲ lazer popup

	const ad_popup = document.querySelector(".ad_popup")
	const ad_popup_closebtn1 = document.querySelector(".ad_popup .close p")
	const ad_popup_closebtn2 = document.querySelector(".ad_popup .close span")


	var ad_swiper = new Swiper(".ad_mySwiper", {
		spaceBetween: 10,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var ad_swiper2 = new Swiper(".ad_mySwiper2", {
		spaceBetween: 10,
		thumbs: {
			swiper: ad_swiper,
		},
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
	});

	ad_popup_closebtn1.addEventListener("click", () => {
		ad_popup.style.visibility = "hidden"
		body.style.overflowY = "visible"
	});
	ad_popup_closebtn2.addEventListener("click", () => {
		ad_popup.style.visibility = "hidden"
		body.style.overflowY = "visible"
	});

	// 

	const ad_popup_mob = document.querySelector(".ad_popup_mob")
	const ad_popup_mob_closebtn1 = document.querySelector(".ad_popup_mob .close p")
	const ad_popup_mob_closebtn2 = document.querySelector(".ad_popup_mob .close span")

	ad_popup_mob_closebtn1.addEventListener("click", () => {
		ad_popup_mob.style.visibility = "hidden"
		body.style.overflowY = "visible"
	});
	ad_popup_mob_closebtn2.addEventListener("click", () => {
		ad_popup_mob.style.visibility = "hidden"
		body.style.overflowY = "visible"
	});

	// ▲ ad popup

	// *******************END LINE***********************************************************
});