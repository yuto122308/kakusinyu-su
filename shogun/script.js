// 将軍ラッシュ ～歴代将軍をぶっ倒せ～
// ------------------------------------------------------------
// 時代順に現れる歴代の「征夷大将軍」と戦い、歴史クイズで打ち倒す。
// 正解＝相手にダメージ＋豆知識／不正解＝反撃を食らう。
// 将軍を倒すと「歴史メモ」でその時代の要点を学べる。
// ------------------------------------------------------------

const PLAYER_MAX_HP = 100;
const WRONG_DAMAGE = 18; // 不正解で食らうダメージ

// 歴代将軍データ（時代順）
const SHOGUNS = [
  {
    name: "源頼朝",
    yomi: "みなもとの よりとも",
    era: "鎌倉時代",
    eraShort: "鎌倉",
    title: "鎌倉幕府 初代将軍（1192年〜）",
    face: "🏹",
    intro:
      "われこそは源頼朝。平氏を破り、武士による初めての政権をこの鎌倉に開いた。仮の将軍を名乗る者よ、歴史を知らねば前へは進めぬぞ！",
    quizzes: [
      {
        q: "頼朝が武士のトップとして朝廷から任命された役職は？",
        choices: ["征夷大将軍", "関白", "太政大臣"],
        answer: 0,
        explain:
          "頼朝は1192年に『征夷大将軍』に任命され、これが鎌倉幕府の成立とされる。以後『将軍』が武士の頂点となった。",
      },
      {
        q: "幕府を開いた場所「鎌倉」は今のどの都道府県？",
        choices: ["神奈川県", "京都府", "奈良県"],
        answer: 0,
        explain:
          "鎌倉は現在の神奈川県。三方を山、一方を海に囲まれた、守りやすい地形だったため武士の本拠地に選ばれた。",
      },
      {
        q: "将軍が御家人に領地を保障し、御家人が忠誠を尽くす――この関係を何と呼ぶ？",
        choices: ["御恩と奉公", "参勤交代", "楽市楽座"],
        answer: 0,
        explain:
          "『御恩と奉公』。将軍と御家人の主従関係が鎌倉幕府の土台。これが日本の武家社会の基本のしくみになった。",
      },
    ],
    memo:
      "源頼朝は平氏を倒し、鎌倉（神奈川県）に武士による政権＝鎌倉幕府を開いた。1192年に征夷大将軍となり、『御恩と奉公』という主従関係で全国の武士（御家人）をまとめた。これが約700年続く武士の世のはじまり。",
  },
  {
    name: "北条時宗",
    yomi: "ほうじょう ときむね",
    era: "鎌倉時代（元寇）",
    eraShort: "元寇",
    title: "鎌倉幕府 第8代執権",
    face: "⚔️",
    intro:
      "北条時宗である。将軍を補佐する『執権』として実権を握り、海の向こうから攻め寄せる大軍を迎え撃った。国難を知らぬ者に未来は語れまい！",
    quizzes: [
      {
        q: "時宗のとき、二度にわたり日本に攻めてきた国は？",
        choices: ["元（モンゴル帝国）", "明", "清"],
        answer: 0,
        explain:
          "フビライ＝ハンが率いる『元（モンゴル帝国）』が1274年と1281年に襲来。この二度の戦いを『元寇』と呼ぶ。",
      },
      {
        q: "元軍の二度の襲来、まとめて何という？",
        choices: ["元寇", "応仁の乱", "関ヶ原の戦い"],
        answer: 0,
        explain:
          "『元寇』。文永の役・弘安の役の二度の襲来を指す。暴風雨もあって元軍は撤退したが、幕府の財政は苦しくなった。",
      },
      {
        q: "実際に戦った御家人へ十分な恩賞（領地）を与えられず、幕府が衰える原因になった。なぜ？",
        choices: [
          "防衛戦で新たに奪った土地がなかったから",
          "御家人がいなかったから",
          "戦に負けたから",
        ],
        answer: 0,
        explain:
          "元寇は『守る戦い』。勝っても新たな領地は手に入らず、恩賞を出せなかった。御家人の不満が高まり幕府滅亡の一因に。",
      },
    ],
    memo:
      "鎌倉時代後期、執権・北条時宗の時に『元寇』が起きた。元（モンゴル帝国）が1274年と1281年の二度襲来。御家人は奮戦し暴風雨にも助けられ撃退したが、防衛戦のため恩賞の土地がなく、幕府への不満が広がっていった。",
  },
  {
    name: "足利尊氏",
    yomi: "あしかが たかうじ",
    era: "室町時代",
    eraShort: "室町",
    title: "室町幕府 初代将軍（1338年〜）",
    face: "🏯",
    intro:
      "足利尊氏。鎌倉幕府を倒す側に回り、新たに京の都で幕府を開いた。時代の変わり目を知らぬのか、仮の将軍よ！",
    quizzes: [
      {
        q: "尊氏が幕府を開いた都市は？（室町幕府の名の由来の地）",
        choices: ["京都", "鎌倉", "江戸"],
        answer: 0,
        explain:
          "尊氏は京都に幕府を開いた。後に京都の『室町』に御所が置かれたことから『室町幕府』と呼ばれる。",
      },
      {
        q: "尊氏らと対立し、吉野（奈良）に別の朝廷を立てた天皇は？",
        choices: ["後醍醐天皇", "聖武天皇", "桓武天皇"],
        answer: 0,
        explain:
          "後醍醐天皇。京都（北朝）と吉野（南朝）に二つの朝廷が並び立つ『南北朝時代』が約60年続いた。",
      },
    ],
    memo:
      "足利尊氏は鎌倉幕府の打倒に加わったのち、京都に室町幕府を開いた（初代将軍）。一方で後醍醐天皇は吉野に逃れて南朝を立て、京都の北朝と対立。二つの朝廷が争う『南北朝時代』が始まった。",
  },
  {
    name: "足利義満",
    yomi: "あしかが よしみつ",
    era: "室町時代（全盛期）",
    eraShort: "金閣",
    title: "室町幕府 第3代将軍",
    face: "🌟",
    intro:
      "足利義満なり。南北朝を一つにまとめ、明との貿易で富を築いた。金色に輝くわが時代を、おぬしは語れるか？",
    quizzes: [
      {
        q: "義満が京都の北山に建てた、金ぴかの建物といえば？",
        choices: ["金閣（鹿苑寺）", "銀閣（慈照寺）", "東大寺"],
        answer: 0,
        explain:
          "『金閣（鹿苑寺）』。義満の権勢を象徴する豪華な建物で、北山文化を代表する。",
      },
      {
        q: "義満が始めた、中国の明との貿易を何という？（合い札を使った）",
        choices: ["勘合貿易（日明貿易）", "南蛮貿易", "朱印船貿易"],
        answer: 0,
        explain:
          "倭寇と区別するため『勘合』という合い札を使ったので『勘合貿易（日明貿易）』。莫大な利益を幕府にもたらした。",
      },
      {
        q: "義満が成し遂げた、二つに分かれていた朝廷の統一を何という？",
        choices: ["南北朝の統一", "大政奉還", "廃藩置県"],
        answer: 0,
        explain:
          "1392年、義満は南朝と北朝を合一させ『南北朝の統一』を実現。室町幕府の全盛期を築いた。",
      },
    ],
    memo:
      "足利義満は室町幕府の第3代将軍。1392年に南北朝を統一し、京都の北山に金閣（鹿苑寺）を建てた。明と『勘合貿易（日明貿易）』を行い大きな富を得て、室町幕府の全盛期を築いた。華やかな『北山文化』が栄えた。",
  },
  {
    name: "足利義政",
    yomi: "あしかが よしまさ",
    era: "室町時代（戦国へ）",
    eraShort: "銀閣",
    title: "室町幕府 第8代将軍",
    face: "🎋",
    intro:
      "足利義政だ。政治より文化を愛したと言われるが……わが時代に起きた大乱が、やがて戦国の世を呼ぶことになる。覚悟はよいか。",
    quizzes: [
      {
        q: "義政が京都の東山に建てた、わび・さびの建物は？",
        choices: ["銀閣（慈照寺）", "金閣（鹿苑寺）", "法隆寺"],
        answer: 0,
        explain:
          "『銀閣（慈照寺）』。落ち着いた東山文化を代表する。書院造など、今の和室の原型もこの頃に生まれた。",
      },
      {
        q: "義政のあとつぎ争いなどから京都で起きた、11年に及ぶ大乱は？",
        choices: ["応仁の乱", "壬申の乱", "島原の乱"],
        answer: 0,
        explain:
          "『応仁の乱』（1467年〜）。京都を焼け野原にし、幕府の力は地に落ちた。各地で実力者が争う『戦国時代』の幕開けとなった。",
      },
    ],
    memo:
      "足利義政は室町幕府の第8代将軍。京都の東山に銀閣（慈照寺）を建て、簡素で趣のある『東山文化』が栄えた。一方、あとつぎ争いなどから『応仁の乱』（1467年〜）が起こり、幕府は弱体化。世は実力がものを言う『戦国時代』へ突入する。",
  },
  {
    name: "徳川家康",
    yomi: "とくがわ いえやす",
    era: "江戸時代",
    eraShort: "江戸",
    title: "江戸幕府 初代将軍（1603年〜）",
    face: "🦅",
    intro:
      "徳川家康である。長い戦乱を制し、この江戸に幕府を開いた。260年の泰平の世のはじまりを、おぬしは知っておるか？",
    quizzes: [
      {
        q: "1600年、家康が天下分け目を制した戦いは？",
        choices: ["関ヶ原の戦い", "桶狭間の戦い", "長篠の戦い"],
        answer: 0,
        explain:
          "『関ヶ原の戦い』。東軍を率いた家康が勝利し、天下の実権を握った。『天下分け目の戦い』と呼ばれる。",
      },
      {
        q: "家康が幕府を開いた「江戸」は今のどこ？",
        choices: ["東京", "大阪", "名古屋"],
        answer: 0,
        explain:
          "江戸は現在の東京。家康がここに幕府を開いて以来、日本の政治の中心として大きく発展した。",
      },
      {
        q: "家康が将軍となり江戸幕府を開いたのは何年？",
        choices: ["1603年", "1192年", "1467年"],
        answer: 0,
        explain:
          "1603年。以後およそ260年続く『江戸時代（泰平の世）』が始まった。",
      },
    ],
    memo:
      "徳川家康は1600年の『関ヶ原の戦い』に勝って実権を握り、1603年に征夷大将軍となって江戸（現在の東京）に幕府を開いた。以後約260年続く江戸時代＝戦のない泰平の世がはじまる。",
  },
  {
    name: "徳川家光",
    yomi: "とくがわ いえみつ",
    era: "江戸時代（体制固め）",
    eraShort: "鎖国",
    title: "江戸幕府 第3代将軍",
    face: "🛡️",
    intro:
      "三代将軍・徳川家光だ。『生まれながらの将軍』と称された余が、幕府の支配のしくみをかっちりと固めた。その制度、言うてみよ！",
    quizzes: [
      {
        q: "大名を1年ごとに領地と江戸を往復させた、家光が定めた制度は？",
        choices: ["参勤交代", "楽市楽座", "墾田永年私財法"],
        answer: 0,
        explain:
          "『参勤交代』。大名は妻子を江戸に住まわせ、自身も江戸と領地を往復。往復費用がかさみ、大名の力をそぐ効果があった。",
      },
      {
        q: "家光のころ完成した、外国との交流を厳しく制限する政策は？",
        choices: ["鎖国", "開国", "版籍奉還"],
        answer: 0,
        explain:
          "『鎖国』。キリスト教を禁じ、貿易を長崎の出島などに限定。オランダ・中国とだけ限られた交流を続けた。",
      },
    ],
    memo:
      "徳川家光は江戸幕府の第3代将軍。大名を江戸と領地に1年交代で往復させる『参勤交代』を制度化し、大名の力を抑えた。またキリスト教を禁じて貿易を制限する『鎖国』を完成させ、幕府の支配体制を固めた。",
  },
  {
    name: "徳川綱吉",
    yomi: "とくがわ つなよし",
    era: "江戸時代（元禄）",
    eraShort: "元禄",
    title: "江戸幕府 第5代将軍",
    face: "🐕",
    intro:
      "五代将軍・徳川綱吉。学問を重んじ、命を大切にせよと説いた。……まあ、行きすぎたとも言われるがな。余の政策、分かるか？",
    quizzes: [
      {
        q: "綱吉が出した、犬をはじめ生き物を極端に保護した法令は？",
        choices: ["生類憐みの令", "刀狩令", "武家諸法度"],
        answer: 0,
        explain:
          "『生類憐みの令』。特に犬を手厚く保護したため綱吉は『犬公方』とも呼ばれた。行きすぎた面もあり、庶民は苦しんだ。",
      },
      {
        q: "綱吉の頃、上方（京都・大阪）を中心に町人が担い手となって栄えた文化は？",
        choices: ["元禄文化", "天平文化", "国風文化"],
        answer: 0,
        explain:
          "『元禄文化』。井原西鶴の小説、松尾芭蕉の俳諧、近松門左衛門の人形浄瑠璃など、活気ある町人文化が花開いた。",
      },
    ],
    memo:
      "徳川綱吉は江戸幕府の第5代将軍。極端に生き物を保護する『生類憐みの令』を出し『犬公方』と呼ばれた。一方この頃は経済が発展し、上方の町人を中心とした華やかな『元禄文化』（西鶴・芭蕉・近松ら）が栄えた。",
  },
  {
    name: "徳川吉宗",
    yomi: "とくがわ よしむね",
    era: "江戸時代（改革）",
    eraShort: "改革",
    title: "江戸幕府 第8代将軍",
    face: "🐴",
    intro:
      "八代将軍・徳川吉宗。傾いた幕府の財政を立て直すべく、自ら倹約に努め改革に挑んだ。『暴れん坊将軍』とも呼ばれる余の改革、知っておるか！",
    quizzes: [
      {
        q: "吉宗が行った、財政立て直しのための改革を何という？",
        choices: ["享保の改革", "建武の新政", "大化の改新"],
        answer: 0,
        explain:
          "『享保の改革』。倹約・新田開発・年貢の見直しなどで幕府の財政再建を進めた、江戸の三大改革の最初。",
      },
      {
        q: "吉宗が庶民の意見を聞くため、評定所に設置したものは？",
        choices: ["目安箱", "高札", "関所"],
        answer: 0,
        explain:
          "『目安箱』。庶民の投書を受け付けた。これをもとに、貧しい病人のための小石川養生所などが作られた。",
      },
    ],
    memo:
      "徳川吉宗は江戸幕府の第8代将軍。傾いた幕府財政を立て直すため『享保の改革』を行った。倹約や新田開発を進め、庶民の声を聞く『目安箱』を設置。公正な裁判の基準（公事方御定書）も整えた。江戸の三大改革の先がけ。",
  },
  {
    name: "徳川慶喜",
    yomi: "とくがわ よしのぶ",
    era: "幕末",
    eraShort: "幕末",
    title: "江戸幕府 第15代将軍（最後の将軍）",
    face: "🌅",
    intro:
      "余は徳川慶喜……江戸幕府、最後の将軍だ。時代の波はもはや幕府の手に負えぬ。最後の問い、見事答えてみせよ。これに勝てば――武士の世は、終わる。",
    quizzes: [
      {
        q: "1867年、慶喜が政権を朝廷に返したできごとを何という？",
        choices: ["大政奉還", "廃藩置県", "王政復古"],
        answer: 0,
        explain:
          "『大政奉還』。慶喜が政権を朝廷（天皇）に返した。これにより約260年の江戸幕府、そして700年近い武士の世が終わった。",
      },
      {
        q: "1853年に来航し、日本に開国をせまったアメリカの人物は？",
        choices: ["ペリー", "ザビエル", "マルコ＝ポーロ"],
        answer: 0,
        explain:
          "『ペリー』。黒船を率いて浦賀に来航し開国をせまった。これをきっかけに鎖国が終わり、幕末の動乱が始まった。",
      },
      {
        q: "大政奉還のあと、政治の実権が移った先は？",
        choices: ["天皇を中心とする新政府", "新たな将軍", "外国の王"],
        answer: 0,
        explain:
          "天皇を中心とする新政府へ。やがて『明治維新』が進み、日本は近代国家へと大きく生まれ変わっていく。",
      },
    ],
    memo:
      "徳川慶喜は江戸幕府の第15代将軍で、最後の将軍。1853年のペリー来航で開国し、幕末は大きく揺れた。1867年、慶喜は政権を朝廷に返す『大政奉還』を行い、約260年の江戸幕府――そして約700年続いた武士の世が幕を閉じた。時代は明治へ。",
  },
];

// ------------------------------------------------------------
// 状態
// ------------------------------------------------------------
let state;

function initState() {
  state = {
    bossIndex: 0,
    playerHP: PLAYER_MAX_HP,
    bossMaxHP: 0,
    bossHP: 0,
    quizQueue: [], // 出題待ちのクイズ
    defeated: 0,
  };
}

// ------------------------------------------------------------
// ユーティリティ
// ------------------------------------------------------------
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ------------------------------------------------------------
// DOM
// ------------------------------------------------------------
const screens = {
  title: document.getElementById("title-screen"),
  battle: document.getElementById("battle-screen"),
  defeat: document.getElementById("defeat-screen"),
  gameover: document.getElementById("gameover-screen"),
  clear: document.getElementById("clear-screen"),
};

const eraTimelineEl = document.getElementById("era-timeline");
const playerHpFillEl = document.getElementById("player-hp-fill");
const playerHpTextEl = document.getElementById("player-hp-text");
const bossFaceEl = document.getElementById("boss-face");
const bossEraEl = document.getElementById("boss-era");
const bossNameEl = document.getElementById("boss-name");
const bossYomiEl = document.getElementById("boss-yomi");
const bossTitleEl = document.getElementById("boss-title");
const bossHpFillEl = document.getElementById("boss-hp-fill");
const dialogSpeakerEl = document.getElementById("dialog-speaker");
const dialogTextEl = document.getElementById("dialog-text");
const choicesEl = document.getElementById("choices");
const explainCardEl = document.getElementById("explain-card");
const explainTextEl = document.getElementById("explain-text");
const nextBtn = document.getElementById("next-btn");

const defeatTitleEl = document.getElementById("defeat-title");
const memoTextEl = document.getElementById("memo-text");
const gameoverTextEl = document.getElementById("gameover-text");
const clearStatsEl = document.getElementById("clear-stats");

// ------------------------------------------------------------
// 画面切り替え
// ------------------------------------------------------------
function showScreen(key) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[key].classList.add("active");
}

// ------------------------------------------------------------
// 描画
// ------------------------------------------------------------
function renderTimeline() {
  eraTimelineEl.innerHTML = "";
  SHOGUNS.forEach((s, i) => {
    const dot = document.createElement("span");
    dot.className = "era-dot";
    if (i < state.bossIndex) dot.classList.add("done");
    if (i === state.bossIndex) dot.classList.add("current");
    dot.textContent = s.eraShort;
    eraTimelineEl.appendChild(dot);
  });
}

function renderPlayerHP() {
  const pct = Math.max(0, (state.playerHP / PLAYER_MAX_HP) * 100);
  playerHpFillEl.style.width = pct + "%";
  playerHpTextEl.textContent = `体力 ${Math.max(0, state.playerHP)} / ${PLAYER_MAX_HP}`;
}

function renderBossHP() {
  const pct = Math.max(0, (state.bossHP / state.bossMaxHP) * 100);
  bossHpFillEl.style.width = pct + "%";
}

function floatDamage(amount, isPlayer) {
  const float = document.createElement("div");
  float.className = "damage-float" + (isPlayer ? " player" : "");
  float.textContent = (isPlayer ? "-" : "-") + amount;
  const anchor = isPlayer ? playerHpFillEl : bossFaceEl;
  const rect = anchor.getBoundingClientRect();
  const appRect = document.getElementById("app").getBoundingClientRect();
  float.style.left = rect.left - appRect.left + rect.width / 2 + "px";
  float.style.top = rect.top - appRect.top + "px";
  document.getElementById("app").appendChild(float);
  setTimeout(() => float.remove(), 900);
}

// ------------------------------------------------------------
// バトル開始
// ------------------------------------------------------------
function startBoss() {
  const boss = SHOGUNS[state.bossIndex];

  // クイズの順番をシャッフルし、各クイズの選択肢もシャッフル
  state.quizQueue = shuffle(boss.quizzes).map((quiz) => {
    const correctText = quiz.choices[quiz.answer];
    const shuffledChoices = shuffle(quiz.choices);
    return {
      q: quiz.q,
      choices: shuffledChoices,
      answerIndex: shuffledChoices.indexOf(correctText),
      explain: quiz.explain,
    };
  });

  // ボスHPは「全問正解で倒せる」ように設定
  state.bossMaxHP = state.quizQueue.length * 100;
  state.bossHP = state.bossMaxHP;

  bossFaceEl.textContent = boss.face;
  bossEraEl.textContent = boss.era;
  bossNameEl.textContent = boss.name;
  bossYomiEl.textContent = boss.yomi;
  bossTitleEl.textContent = boss.title;

  renderTimeline();
  renderPlayerHP();
  renderBossHP();

  showScreen("battle");

  // 登場セリフ
  dialogSpeakerEl.textContent = boss.name;
  dialogTextEl.textContent = boss.intro;
  explainCardEl.classList.add("hidden");
  choicesEl.innerHTML = "";

  const startQuizBtn = document.createElement("button");
  startQuizBtn.className = "choice-btn";
  startQuizBtn.textContent = "▶ 勝負を受ける";
  startQuizBtn.addEventListener("click", askNext);
  choicesEl.appendChild(startQuizBtn);
}

// ------------------------------------------------------------
// 出題
// ------------------------------------------------------------
function askNext() {
  explainCardEl.classList.add("hidden");

  if (state.bossHP <= 0) {
    winBoss();
    return;
  }

  const quiz = state.quizQueue[0];
  dialogSpeakerEl.textContent = "歴史クイズ";
  dialogTextEl.textContent = quiz.q;

  choicesEl.innerHTML = "";
  quiz.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.addEventListener("click", () => handleAnswer(i, btn));
    choicesEl.appendChild(btn);
  });
}

function handleAnswer(selectedIndex, btnEl) {
  const quiz = state.quizQueue.shift();
  const buttons = Array.from(choicesEl.querySelectorAll(".choice-btn"));
  buttons.forEach((b) => (b.disabled = true));

  const correct = selectedIndex === quiz.answerIndex;

  if (correct) {
    btnEl.classList.add("correct");
    // ボスにダメージ（少しゆらぎ）
    const dmg = 100;
    state.bossHP = Math.max(0, state.bossHP - dmg);
    bossFaceEl.classList.remove("hit");
    void bossFaceEl.offsetWidth;
    bossFaceEl.classList.add("hit");
    floatDamage(dmg, false);
    renderBossHP();

    explainTextEl.textContent = "⭕ 正解！　" + quiz.explain;
  } else {
    btnEl.classList.add("wrong");
    // 正解を緑で表示
    buttons[quiz.answerIndex].classList.add("correct");
    // プレイヤーがダメージ。間違えた問題は後ろに戻す
    state.playerHP = Math.max(0, state.playerHP - WRONG_DAMAGE);
    floatDamage(WRONG_DAMAGE, true);
    renderPlayerHP();
    state.quizQueue.push(quiz);

    explainTextEl.textContent =
      "❌ ざんねん！ 正解は「" +
      quiz.choices[quiz.answerIndex] +
      "」。　" +
      quiz.explain;
  }

  // 解説と次へ
  explainCardEl.classList.remove("hidden");

  // 勝敗判定はつづけるボタンで処理。ただしゲームオーバーは即時誘導
  nextBtn.textContent =
    state.playerHP <= 0
      ? "……"
      : state.bossHP <= 0
      ? "とどめ！"
      : "つづける";

  // 念のため次へボタンを再バインド（後述の永続リスナーで処理）
}

// ------------------------------------------------------------
// 「つづける」ボタン
// ------------------------------------------------------------
nextBtn.addEventListener("click", () => {
  if (state.playerHP <= 0) {
    loseBoss();
    return;
  }
  if (state.bossHP <= 0) {
    winBoss();
    return;
  }
  askNext();
});

// ------------------------------------------------------------
// 勝利（ボス撃破）
// ------------------------------------------------------------
function winBoss() {
  const boss = SHOGUNS[state.bossIndex];
  state.defeated += 1;

  defeatTitleEl.textContent = `${boss.name} を討ち取った！`;
  memoTextEl.textContent = boss.memo;
  showScreen("defeat");
}

// ------------------------------------------------------------
// 敗北
// ------------------------------------------------------------
function loseBoss() {
  const boss = SHOGUNS[state.bossIndex];
  gameoverTextEl.textContent = `${boss.name}（${boss.era}）に敗れてしまった……。だが歴史に終わりはない。体力を立て直し、もう一度挑もう！`;
  showScreen("gameover");
}

// ------------------------------------------------------------
// 次の時代へ
// ------------------------------------------------------------
function advance() {
  state.bossIndex += 1;
  if (state.bossIndex >= SHOGUNS.length) {
    showClear();
    return;
  }
  // 体力を少し回復してあげる（最大の30%）
  state.playerHP = Math.min(
    PLAYER_MAX_HP,
    state.playerHP + Math.round(PLAYER_MAX_HP * 0.3)
  );
  startBoss();
}

// ------------------------------------------------------------
// 全クリ
// ------------------------------------------------------------
function showClear() {
  clearStatsEl.innerHTML = `倒した歴代将軍：<strong>${state.defeated}人</strong><br />残り体力：<strong>${state.playerHP} / ${PLAYER_MAX_HP}</strong>`;
  showScreen("clear");
}

// ------------------------------------------------------------
// イベント
// ------------------------------------------------------------
document.getElementById("start-btn").addEventListener("click", () => {
  initState();
  startBoss();
});

document.getElementById("advance-btn").addEventListener("click", advance);

document.getElementById("retry-btn").addEventListener("click", () => {
  // 同じ将軍に体力満タンで再挑戦
  state.playerHP = PLAYER_MAX_HP;
  startBoss();
});

document.getElementById("replay-btn").addEventListener("click", () => {
  initState();
  startBoss();
});

// 初期表示
showScreen("title");
