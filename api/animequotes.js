
module.exports = (req, res) => {
  const { anime } = req.query;
  const data = {
    "attack-on-titan": [
      "Dunia ini penuh dengan rasa sakit dan penderitaan, tetapi di sinilah kita hidup. - Eren Yeager",
      "Kita tidak bisa menghentikan dunia ini, kita hanya bisa bertahan. - Mikasa Ackerman"
    ],
    "death-note": [
      "Saya adalah Tuhan dunia ini. - Light Yagami",
      "Kebohongan adalah hal yang sangat mengerikan. - L Lawliet"
    ],
    random: [
      "Kadang, kita harus kehilangan sesuatu yang berharga untuk menemukan sesuatu yang lebih baik. - Naruto Uzumaki",
      "Kekuatan bukan tentang berapa banyak yang bisa kamu hancurkan, tetapi tentang berapa banyak yang bisa kamu lindungi. - Ichigo"
    ]
  };
  res.status(200).json({ result: data[anime] || data["random"] });
};
