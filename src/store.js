let allchannels = [
  {
    channelId: "UCsT0YIqwnpJCM-mx7-gSA4Q",
    title: "TEDx Talks",
  },
];

export const getAllChannel = () => {
  return allchannels;
};
export const setAllChannel = (array) => {
  allchannels = [];
  for (let i = 0; i < array.length; i++) {
    allchannels.push(array[i]);
  }
};

export const pushNewChannel = (channel) => {
  allchannels.push(channel);
};

export const testBoard = [
  {
    channelId: "test1",
    title: "Nghệ thuật",
    channels: [
      {
        channelId: "UCTF0ldaORTbCfx2ahvFfYWg",
        title: "Phê Game",
      },
      {
        channelId: "UCAJ9i1NhhlnosAGu7QcBEtw",
        title: "Phê Phim",
      },
      {
        channelId: "UCOUIsSGwrFY52YctxX0gmEg",
        title: "The Reviewer",
      },
    ],
  },
  {
    channelId: "test2",
    title: "Khoa học",
    channels: [
      {
        channelId: "UCf6gW1swSLhhsSQaOGNcM5w",
        title: "Vfacts",
      },
      {
        channelId: "UCUuXPlozzyzcC0PHjLh6YaA",
        title: "Duy Thanh Nguyen",
      },
      {
        channelId: "UCvYj0iVCfL7by8F58e2wvpQ",
        title: "Bổ não",
      },
    ],
  },
  {
    channelId: "test3",
    title: "Tâm lý",
    channels: [
      {
        channelId: "UCmeACgf1NkWm7NQ3RJGRyGw",
        title: "Nguyễn Hữu Trí",
      },
      {
        channelId: "UComQ5oE9MzuGrjfA0DAdmBg",
        title: "Minh Niệm",
      },
    ],
  },
];
