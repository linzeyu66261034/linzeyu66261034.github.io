export interface LifeRecord {
  id: number;
  title: string;
  date: string;
  description: string;
  detail: string;
  location?: string;
}

export interface Book {
  title: string;
  author: string;
  quote: string;
  thoughts: string;
}

export interface Music {
  title: string;
  artist: string;
  album?: string;
  thoughts: string;
}

export interface Thought {
  content: string;
  source?: string;
}

export const lifeRecords: LifeRecord[] = [
  {
    id: 1,
    title: "黄昏的图书馆",
    date: "2026年春",
    description: "阳光透过落地窗洒在书架上，尘埃在光线中缓缓飘浮。",
    detail: "下午四点半，靠窗的座位总是最抢手的。今天运气不错，找到了那个能看到银杏树的位置。翻开《百年孤独》，马尔克斯的文字在金色的光线里仿佛有了生命。偶尔抬头，看见对面的人也在读同一本书，相视一笑，又各自沉入自己的世界。",
    location: "大学图书馆·三楼"
  },
  {
    id: 2,
    title: "雨天的咖啡馆",
    date: "2026年夏",
    description: "窗外细雨绵绵，杯中的拿铁冒着热气。",
    detail: "这家藏在巷子深处的咖啡馆，老板是个话不多的中年人。墙上挂着他自己拍的照片，全是黑白胶片。今天下雨，店里只有我一个客人。放的是Bill Evans的爵士钢琴曲，雨声和琴声交织在一起，时间仿佛变慢了。",
    location: "旧城南巷·拾光咖啡"
  },
  {
    id: 3,
    title: "山顶的日出",
    date: "2025年秋",
    description: "凌晨四点出发，只为看那一抹破晓的光。",
    detail: "和三个朋友半夜出发，打着手电筒爬山。山路比想象中难走，但一路上说说笑笑也不觉得累。到达山顶时天还没亮，能看见城市的灯火在脚下闪烁。当第一缕阳光穿透云层的时候，所有人都安静了。那一刻觉得，人间值得。",
    location: "城郊·望云山"
  },
  {
    id: 4,
    title: "旧书店的下午",
    date: "2025年冬",
    description: "在泛黄的书页间，寻找时间的痕迹。",
    detail: "这家旧书店开了二十年了，老板说再过两年就关门退休。店里有一股独特的味道——旧纸张、灰尘和时光混合的气息。淘到了一本1987年版的《瓦尔登湖》，扉页上还有前主人的签名和日期。突然觉得，每一本旧书都有自己的故事。",
    location: "文化街·博雅旧书店"
  },
  {
    id: 5,
    title: "海边的黄昏",
    date: "2025年夏",
    description: "潮水退去，沙滩上留下一串脚印。",
    detail: "一个人坐了两个小时的大巴来到海边。不是旅游旺季，沙滩上只有几个本地人在散步。脱了鞋踩在沙滩上，海水凉凉的。看着太阳一点点沉入海平面，天空从橙红变成深蓝。想起了海子的诗：『面朝大海，春暖花开。』",
    location: "东海·渔人码头"
  },
  {
    id: 6,
    title: "深夜的录音室",
    date: "2024年冬",
    description: "为了一个和弦，反复录了二十遍。",
    detail: "朋友的乐队借了个小录音室，叫我去帮忙听效果。小小的房间里堆满了各种乐器，隔音棉把外面的世界隔绝了。他们为了一段吉他solo反复争论，最后决定保留第一次录的那版——最粗糙，也最有温度。",
    location: "创意园区·B2录音室"
  }
];

export const books: Book[] = [
  {
    title: "《百年孤独》",
    author: "加西亚·马尔克斯",
    quote: "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。",
    thoughts: "每次重读都有不同的感受。第一次着迷于魔幻现实主义的叙事，第二次看到了家族的孤独宿命，第三次开始理解重复命名背后的深意——历史总是在重复自己。"
  },
  {
    title: "《瓦尔登湖》",
    author: "亨利·梭罗",
    quote: "我步入丛林，因为我希望活得从容，只面对生活的基本事实，看看我是否能学到它要教给我的东西。",
    thoughts: "在焦虑的时候翻几页，心就会静下来。梭罗在瓦尔登湖畔的两年，教会了我什么是真正的富足——不是拥有更多，而是需要更少。"
  },
  {
    title: "《挪威的森林》",
    author: "村上春树",
    quote: "死并非生的对立面，而是作为生的一部分永存。",
    thoughts: "大学时期读的第一本村上。那时候不太理解为什么直子最终选择了死亡，后来慢慢明白，有些人注定活在自己的世界里，旁人进不去，他们也出不来。"
  },
  {
    title: "《小王子》",
    author: "安托万·德·圣-埃克苏佩里",
    quote: "真正重要的东西，用眼睛是看不见的，要用心去感受。",
    thoughts: "小时候以为是童话，长大后才看懂是哲学。玫瑰、狐狸、沙漠、星星——每一个意象都在提醒我们，成人的世界太复杂，而真理往往简单。"
  }
];

export const musicList: Music[] = [
  {
    title: "Gymnopédies No.1",
    artist: "Erik Satie",
    thoughts: "深夜写作时的背景音。萨蒂的音乐有一种奇特的疏离感，像是在人群之外静静观察。简单重复的旋律里，藏着一种温柔的孤独。"
  },
  {
    title: "Kind of Blue",
    artist: "Miles Davis",
    album: "Kind of Blue",
    thoughts: "爵士乐的入门专辑，也是永远无法超越的经典。Miles Davis的小号声像在讲述一个故事，每个音符都恰到好处。阴天的下午，泡一杯茶，让这张专辑流淌一整个下午。"
  },
  {
    title: "Goldberg Variations",
    artist: "J.S. Bach / Glenn Gould",
    thoughts: "Glenn Gould 1981年的录音版本。他弹奏时的哼唱声隐约可闻，这种『不完美』反而让音乐有了温度。变奏曲的形式像极了生活——同一个主题，千变万化的演绎。"
  },
  {
    title: "Riverside",
    artist: "Agnes Obel",
    album: "Philharmonics",
    thoughts: "北欧的冷冽感，钢琴的每一个音符都像水滴落在湖面上。适合在雨天听，也适合在失眠的夜晚。她的音乐里有种安静的张力，像在等待什么发生。"
  }
];

export const thoughts: Thought[] = [
  {
    content: "我们读诗，不是为了成为诗人，而是为了在平凡的生活中，看见不平凡的光。",
    source: "阅读笔记"
  },
  {
    content: "物理学的尽头是哲学，哲学的尽头是诗。而诗，可能就是宇宙写给自己的情书。",
    source: "深夜思考"
  },
  {
    content: "所谓成长，不是变得世故，而是学会在复杂的世界里，保持简单的勇气。",
    source: "日记"
  },
  {
    content: "音乐是时间的艺术，它让我们在流动的瞬间里，触摸永恒。",
    source: "听歌随想"
  },
  {
    content: "每一个不曾起舞的日子，都是对生命的辜负。——但舞蹈不一定是跳跃，也可以是安静地站在风里。",
    source: "读尼采有感"
  },
  {
    content: "最好的关系，是彼此独立又相互照亮。像两颗星星，在各自的轨道上运行，却共享同一片夜空。",
    source: "生活感悟"
  }
];

export const backgroundImages = [
  "/backgrounds/1b36635fd57b9b0a2d77fa82b932bb79.jpeg",
  "/backgrounds/964818733a2b519b0a07d9b7a457891e.jpeg",
  "/backgrounds/dfe9969ebcbaec7b0eddb831c8c628b3.jpeg",
  "/backgrounds/e27cdc6811c9d9f0faec6ab5aa8b6922.jpeg",
  "/backgrounds/f492b97920591698b85f125eca066585.jpeg",
  "/backgrounds/fb52e479a15a668dd716f9be1f05ba51.jpeg"
];

export function getRandomBackground(): string {
  const index = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[index];
}
