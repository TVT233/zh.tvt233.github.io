const ap = new APlayer({
  container: document.getElementById("aplayer"),
  fixed: true,
  autoplay: true,
  theme: "#000",
  mutex: true,
  lrcType: 1,
  audio: [
    {
      name: "奥寺先輩のテーマ",
      artist: "RADWIMPS",
      url: "http://music.163.com/song/media/outer/url?id=1480755230.mp3",
      cover:
        "http://p1.music.126.net/sSxbRt9RpC6s_MaewyDJfA==/18597139672292692.jpg?param=130y130",
      lrc: ""
    },
  ],
});