import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Toofpick",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11227",
      color: ["#BC7BA4", "#B1A8DB"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Day One",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11231",
      color: ["#BC7BA4", "#B1A8DB"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Home Court",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11233",
      color: ["#BC7BA4", "#B1A8DB"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Canary Forest",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#E5B06C", "#42D8CB"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cruisin'",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/8404541e3b694d16fd79433b142ed910f36764dd-1024x1024.jpg",
      artist: "Cloudchord, G Mills",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8200",
      color: ["#FF9653", "#42B3B3"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
