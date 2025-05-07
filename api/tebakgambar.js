
module.exports = (req, res) => {
  const data = [
    {
      question: "Siapakah nama karakter ini?",
      image: "https://example.com/quiz/naruto.png",
      options: ["Naruto", "Sasuke", "Itachi"],
      answer: "Naruto"
    },
    {
      question: "Karakter ini berasal dari anime?",
      image: "https://example.com/quiz/luffy.png",
      options: ["Bleach", "One Piece", "Naruto"],
      answer: "One Piece"
    }
  ];
  res.status(200).json({ result: data });
};
