module.exports = {
    getCompliments: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);

      },

      getFortune: (req, res) => {
          const fortunes = ["To truly find yourself you should play hide and seek alone.", "Chance favors those in motion.", "Dedicate yourself with a calm mind to the task at hand.", "Failure is the chance to do better next time.", "Everyday in your life is a special occasion."];

          let randomIdx = Math.floor(Math.random() * fortunes.length);
          let randomFortune = fortunes[randomIdx];

          res.status(200).send(randomFortune)
      },
}

