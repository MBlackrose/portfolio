/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const translations = {
    de: {
        introHeader: "Hallo",
        introText: "In der Welt der IT, wie im Wunderland, gibt es unzählige Türen zu entdecken, und als Frau habe ich den Mut, jede davon zu öffnen.",
        whoAmIHeader: "Wer bin ich",
        whoAmIText: "Hallo, ich bin Meral Karagül, zweifache Mutter und leidenschaftliche Entwicklerin, die mit 40 Jahren den Schritt in die IT-Branche gewagt hat.",
        whatIDo: "Mit einer positiven Einstellung und dem Mut, mich immer wieder neuen Herausforderungen zu stellen, verfolge ich meine Ziele mit Entschlossenheit und Kreativität. Ich freue mich darauf, mein Wissen und meine Fähigkeiten in spannende Projekte einzubringen und stetig zu wachsen.",
		experienceInIt:"Die Welt der Anwendungsentwicklung hat mich von Anfang an fasziniert, und seither habe ich mich auf verschiedene Programmiersprachen wie Java, Python, C++, PHP, HTML, CSS und JavaScript spezialisiert. Ich bin stets motiviert, Neues zu lernen und mich weiterzuentwickeln, um moderne und innovative Lösungen zu gestalten.",
		menuIntro:"Intro",
		menuWhoAmI: "Wer bin ich",
        menuWhatIDo: "Was mache ich",
        menuExperience: "Erfahrung im IT",
        menuContact: "Kontakt",
		
	
	
	
	},
    en: {
        introHeader: "Hello",
        introText: "In the world of IT, like in Wonderland, there are countless doors to discover, and as a woman, I have the courage to open each one of them.",
        whoAmIHeader: "Who am I",
        whoAmIText: "Hello, I am Meral Karagül, a mother of two and a passionate developer who took the step into the IT industry at the age of 40.",
        whatIDo: "With a positive attitude and the courage to constantly face new challenges, I pursue my goals with determination and creativity. I look forward to contributing my knowledge and skills to exciting projects and continuously growing.",
		experienceInIt:"The world of application development has fascinated me from the very beginning, and since then, I have specialized in various programming languages such as Java, Python, C++, PHP, HTML, CSS, and JavaScript. I am always motivated to learn new things and continue to develop myself in order to create modern and innovative solutions.",
		menuIntro: "Intro",
        menuWhoAmI: "Who am I",
        menuWhatIDo: "What I do",
        menuExperience: "Experience in IT",
        menuContact: "Contact",
	
	
	},
    tr: {
        introHeader: "Merhaba",
        introText: "Bilişim dünyasında, tıpkı Harikalar Diyarı'ndaki gibi, keşfedilecek sayısız kapı var ve bir kadın olarak her birini açma cesaretine sahibim.",
        whoAmIHeader: "Ben kimim",
        whoAmIText: "Merhaba, ben Meral Karagül, iki çocuk annesi ve 40 yaşında bilişim sektörüne adım atan tutkulu bir geliştiriciyim.",
        whatIDo: "Pozitif bir tutum ve sürekli yeni zorluklarla yüzleşme cesaretiyle, hedeflerimi kararlılık ve yaratıcılıkla takip ediyorum. Bilgimi ve yeteneklerimi heyecan verici projelere dahil etmeyi ve sürekli olarak büyümeyi dört gözle bekliyorum.",
		experienceInIt:"Uygulama geliştirme dünyası beni en başından beri büyülemiştir ve o zamandan beri Java, Python, C++, PHP, HTML, CSS ve JavaScript gibi çeşitli programlama dillerinde uzmanlaştım. Modern ve yenilikçi çözümler oluşturmak için her zaman yeni şeyler öğrenmeye ve kendimi geliştirmeye motiveyim.",
		menuIntro: "Giriş",
        menuWhoAmI: "Ben Kimim",
        menuWhatIDo: "Ne Yapıyorum",
        menuExperience: "BT'de Deneyim",
        menuContact: "İletişim",
	}
};


function switchLanguage() {
    const selectedLanguage = document.getElementById("languageSwitcher").value;
    const content = translations[selectedLanguage];

    // Aktualisiere die Inhalte
    document.querySelector("#intro h2").textContent = content.introHeader;
    document.querySelector("#intro p").textContent = content.introText;
    document.querySelector("#one h2").textContent = content.whoAmIHeader;
    document.querySelector("#one p").textContent = content.whoAmIText;
	document.querySelector("#two h2").textContent = content.whatIDo;
	document.querySelector("#work p").textContent = content.experienceInIt;


	// Aktualisiere die Button-Texte
    document.querySelector('a[href="#intro"]').textContent = content.menuIntro;
    document.querySelector('a[href="#one"]').textContent = content.menuWhoAmI;
    document.querySelector('a[href="#two"]').textContent = content.menuWhatIDo;
    document.querySelector('a[href="#work"]').textContent = content.menuExperience;
    document.querySelector('a[href="#contact"]').textContent = content.menuContact;
}

document.addEventListener("DOMContentLoaded", () => {
    switchLanguage();
});


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Gallery.
		$window.on('load', function() {

			var $gallery = $('.gallery');

			$gallery.poptrox({
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 50,
				usePopupNav: true
			});

			// Hack: Adjust margins when 'small' activates.
				breakpoints.on('>small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 50;
					});
				});

				breakpoints.on('<=small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 5;
					});
				});

		});

	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Generic sections.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 1500,
							offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});

})(jQuery);