export const nav = [
  {
    text: "基础",
    activeMatch: "^/base/",
    items: [{ text: "css", link: "/base/css/1.选择器" }, { text: "Docker", link: "/docker/1.desktop" }],
  },
  {
    text: "分类",
    activeMatch: "^/leetcode/",
    items: [
      { text: "leetcode", link: "/leetcode/easy/1.两数之和" },
      { text: "typescript", link: "/typescript/1.ts环境搭建" },
      { text: "前端工程化", link: "/sort/project/1.modules" },
    ],
  },
  {
    text: "框架",
    activeMatch: "^/frame/",
    items: [
      { text: "nestjs", link: "/nest/1.nest基础" },
    ],
  },
];
