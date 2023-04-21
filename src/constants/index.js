export * from "./queryKey";
export * from "./Router";
export const API_ROOT = "";
export const TIMEOUT = 30000;
export const DEBUG = process.env.NODE_ENV !== "production";
export const VIDEO_INFO_URL = "https://www.youtube.com/oembed?url=:link";

export const VOTE = {
  LIKE: "like",
  DISLIKE: "dislike",
};

export const DUMMY_VIDEO = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=5yjrKvSYCo8&ab_channel=FORESTSTUDIO",
    share: "FOREST STUDIO",
    description: `Xuân Hạ Thu Đông, rồi lại Xuân là một chương trình thực tế về âm nhạc. Xuất phát từ mong muốn "mang âm nhạc chữa lành tâm hồn", mùa 1 (2021) đã nhận được nhiều sự yêu thương và đón nhận nồng nhiệt của khán giả.`,
    like: 12,
    dislike: 1,
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=Rr5bP7uLnfk&ab_channel=FORESTSTUDIO",
    share: "FOREST STUDIO",
    description: `Chương trình lên sóng vào 20:00 tối thứ 6 hàng tuần trên YouTube FOREST STUDIO, từ ngày 23/09/2022.`,
    like: 92,
    dislike: 32,
  },
  {
    id: 3,
    link: "https://www.youtube.com/watch?v=KSYFDA6yUxc&ab_channel=CARA",
    share: "CARA",
    description: `Nội dung được khai thác và bảo vệ bản quyền bởi VIVA Network và SANDBOX`,
    like: 254,
    dislike: 23,
  },
  {
    id: 4,
    link: "https://www.youtube.com/watch?v=W4P8gl4dnrg&ab_channel=MyTam",
    share: "MyTam",
    description: `VERSE 1: Mình không tìm nhau mà vô tình vương vấn sau tiếng ca chiều mưa.
    Thân thương trong từng đong đưa mắt môi về em,… mùa xuân ấy có nụ cười lấp lánh.`,
    like: 54,
    dislike: 34,
  },
  {
    id: 5,
    link: "https://www.youtube.com/watch?v=UqKVL56IJB8&ab_channel=T%C4%82NGPH%C3%9ACOFFICIAL",
    share: "TĂNGPHÚCOFFICIAL",
    description: `Chiều hôm ấy có mưa rơi nhẹ vương mi ai
    Con đường ngỡ bước chung đôi bây giờ chia hai
    Ai nói ra lời gian dối làm tan nát con tim ai.`,
    like: 345,
    dislike: 21,
  },
];
