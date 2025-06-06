const horoscopeData = {
  horoscopes: {
    date: "2023-11-30",
    astroSigns: [
      {
        sign: "Aries",
        dateRange: "March 21 - April 19",
        dailyHoroscope:
          "Today is a day for bold actions. Trust your instincts and take the leap you've been considering.",
        luckyNumbers: [3, 17, 21],
        key: 0,
        icon: "https://openmoji.org/data/color/svg/2648.svg",
      },
      {
        sign: "Taurus",
        dateRange: "April 20 - May 20",
        dailyHoroscope:
          "Patience will be your ally today. Good things come to those who wait, so don't rush into decisions.",
        luckyNumbers: [5, 14, 29],
        key: 1,
        icon: "https://openmoji.org/data/color/svg/2649.svg",
      },
      {
        sign: "Gemini",
        dateRange: "May 21 - June 20",
        dailyHoroscope:
          "Communication is key today. Reach out to an old friend or a family member you haven't spoken to in a while.",
        luckyNumbers: [2, 16, 23],
        key: 2,
        icon: "https://openmoji.org/data/color/svg/264A.svg",
      },
      {
        sign: "Cancer",
        dateRange: "June 21 - July 22",
        dailyHoroscope:
          "Embrace your creative side. Today is a perfect day for starting a new artistic project.",
        luckyNumbers: [7, 19, 25],
        key: 3,
        icon: "https://openmoji.org/data/color/svg/264B.svg",
      },
      {
        sign: "Leo",
        dateRange: "July 23 - August 22",
        dailyHoroscope:
          "Your leadership skills will be in demand today. Take charge in a group situation and guide others to success.",
        luckyNumbers: [1, 8, 22],
        key: 4,
        icon: "https://openmoji.org/data/color/svg/264C.svg",
      },
      {
        sign: "Virgo",
        dateRange: "August 23 - September 22",
        dailyHoroscope:
          "Pay attention to the small details today. Your meticulousness will lead to a significant breakthrough.",
        luckyNumbers: [4, 11, 26],
        key: 5,
        icon: "https://openmoji.org/data/color/svg/264D.svg",
      },
      {
        sign: "Libra",
        dateRange: "September 23 - October 22",
        dailyHoroscope:
          "Seek balance in your life. Take time for yourself and focus on your personal well-being.",
        luckyNumbers: [6, 15, 24],
        key: 6,
        icon: "https://openmoji.org/data/color/svg/264E.svg",
      },
      {
        sign: "Scorpio",
        dateRange: "October 23 - November 21",
        dailyHoroscope:
          "A mystery may unfold today. Trust your intuition and follow where it leads.",
        luckyNumbers: [9, 18, 27],
        key: 7,
        icon: "https://openmoji.org/data/color/svg/264F.svg",
      },
      {
        sign: "Sagittarius",
        dateRange: "November 22 - December 21",
        dailyHoroscope:
          "Adventure calls to you. Embrace new experiences and open yourself to learning.",
        luckyNumbers: [3, 12, 21],
        key: 8,
        icon: "https://openmoji.org/data/color/svg/2650.svg",
      },
      {
        sign: "Capricorn",
        dateRange: "December 22 - January 19",
        dailyHoroscope:
          "Discipline and hard work will be fruitful. Focus on your goals and you'll achieve great things.",
        luckyNumbers: [8, 16, 23],
        key: 9,
        icon: "https://openmoji.org/data/color/svg/2651.svg",
      },
      {
        sign: "Aquarius",
        dateRange: "January 20 - February 18",
        dailyHoroscope:
          "Innovation is your theme today. Think outside the box and explore new ideas.",
        luckyNumbers: [5, 13, 20],
        key: 10,
        icon: "https://openmoji.org/data/color/svg/2652.svg",
      },
      {
        sign: "Pisces",
        dateRange: "February 19 - March 20",
        dailyHoroscope:
          "Your empathy will be a blessing to someone in need. Listen and offer your support.",
        luckyNumbers: [2, 10, 22],
        key: 11,
        icon: "https://openmoji.org/data/color/svg/2653.svg",
      },
    ],
  },
};
// get the form element by its ID
let form = document.querySelector("#horoscopeForm");

// get the reset button by its ID
let resetButton = document.querySelector("#reset");

//this is for when the form is submitted and run onFormSubmit
form.addEventListener("submit", onFormSubmit);

// this is for when the reset button is clicked and run clearForm
resetButton.addEventListener("click", clearForm);
// this function will run when the form is submitted
function onFormSubmit(event) {
  event.preventDefault();
  // rrevent the page from refreshing

  // get the form data and turn it into an object
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  // get which zodiac sign the user picked
  let picked = dataObject.zodiac;

  // try to find the result box on the page
  let box = document.querySelector("#result");

  /* this code is checking if the result box already exists
 if it isnt there make a new empty box div gives it the name result
puts it inside the form area so the user can see it.*/
  if (!box) {
    box = document.createElement("div");
    box.id = "result";
    document.querySelector(".form-container").appendChild(box);
  }

  // if the user has not picked a zodiac sign show a message and stop
  if (!picked) {
    box.innerHTML = "Please pick your zodiac sign.";
    return;
  }

  // loop through each sign in the horoscope data
  for (let sign of horoscopeData.horoscopes.astroSigns) {
    // if the sign matches what the user picked
    if (sign.sign === picked) {
      // show the signs info in the result box
      // now using .join(", ") for lucky numbers
      // i had to copy this from the stack overflow and still dont understand it but it worked https://www.w3schools.com/jsref/jsref_join.asp

      box.innerHTML = `
				<h2>${sign.sign}</h2>
				<img src="${sign.icon}" width="60">
				<p><b>Date:</b> ${sign.dateRange}</p>
				<p><b>Horoscope:</b> ${sign.dailyHoroscope}</p>
				<p><b>Lucky #'s:</b> ${sign.luckyNumbers.join(", ")}</p>
			`;

      // after submit  make the reset button visible
      resetButton.style.display = "inline-block";
      form.reset();
    }
  }
}

// this function clears the form and the result box
function clearForm() {
  // reset the form but when i had it i couldnt get my reset button to work so i comment it out still struggling with this in all my assignments

  // go find the result box again
  let box = document.querySelector("#result");
  let zodiac = document.querySelector("#zodiac");
  zodiac.selectedIndex = 0;
  //aj helped me with this this is built in method for js and it goes back to the beginging
  // im gonna go try it in my other projects for sure
  // if the result box is there clear its content
  if (box) {
    box.innerHTML = "";
  }

  // after resett hide the reset button again
  resetButton.style.display = "none";
  form.reset();
}
