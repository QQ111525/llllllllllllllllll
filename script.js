/*声明：本网站灵感来源于某个404的网站，仅靠几张图片并利用ai书写相关代码，by作者：塞里斯*/
/* 决策风格与领导力倾向测评 —— 38 题（30 单选 + 8 多选） *，注意，38是初稿，后续已经改为40道。*/
/* ========== 1. 六个维度 ========== */
const DIMENSIONS = {
  steady:    { label: '稳健', color: '#7b1d1d' },
  pioneer:   { label: '开拓', color: '#b5651d' },
  pragmatic: { label: '务实', color: '#4c3c34' },
  synergy:   { label: '协同', color: '#2f6b4f' },
  principle: { label: '原则', color: '#3b5a8c' },
  adapt:     { label: '应变', color: '#6b4f8c' }
};

/* ========== 2. 十九类结果画像 ==========
   features：该类型的八维基准分，顺序为
   [决断力, 领导力, 理想主义, 人际亲和, 改革魄力, 务实程度, 文化修养, 危机应对]*/
   
const PROFILE_LIST = [
  {
    name: '托马斯·杰斐逊', initial: '理',
    position: '美国总统', term: '1801–1809',
    quote: '人人生而平等，造物主赋予他们若干不可剥夺的权利，其中包括生命权、自由权和追求幸福的权利。',
    tags: ['理想高远', '自由平等', '权利天赋', '建国之父'],
    report: '你是理想高远、愿景驱动的长期主义者。你理想主义极高，强调自由平等与制度愿景；作风深思熟虑、注重长远原则，高度重视公民权利与有限政府，实现了建国理念的奠基与扩张。决断力与务实推进相对克制，更重理想共识与原则坚守。',
    features: { decision: 82, leadership: 85, idealism: 90, affinity: 60, reform: 79, pragmatic: 70, culture: 82, crisis: 80 },
    portrait: 'images/jfx.jpg'
  },
  {
    name: '约翰·亚当斯', initial: '文',
    position: '美国总统', term: '1797–1801',
    quote: '我们的宪法只为有道德和宗教的人民而制定，对任何其他人来说都完全不充分。',
    tags: ['制度守护', '道德根基', '独立功臣', '稳健守成'],
    report: '你是制度守护、文化涵养的稳健守成者。你文化修养突出，强调法律与道德基础；作风严谨内敛、重视教养与缓慢变革，高度重视宪法秩序与公民美德，实现了早期国家制度的巩固。改革魄力与人际亲和相对有限，更重原则坚持与制度延续。',
    features: { decision: 49, leadership: 69, idealism: 51, affinity: 61, reform: 52, pragmatic: 49, culture: 75, crisis: 51 },
    portrait: 'images/yds.jpg'
  },
 {
    name: '列昂尼德·勃列日涅夫', initial: '人',
    position: '苏共中央总书记', term: '1964–1982',
    quote: '保障干部的稳定与社会的安宁，是党和国家繁荣的根本。',
    tags: ['集体领导', '人际调和', '稳健妥协', '冷战均势'],
    report: '你是人际亲和、擅长平衡的共赢建设者。你人际亲和极高，擅长协调内部关系与凝聚各方力量；作风稳健务实，高度重视社会稳定与干部秩序，实现了大国关系的均势与危机的平稳化解。决策与理想主义相对克制，更重集体共识与现实妥协。',
    features: { decision: 50, leadership: 63, idealism: 50, affinity: 90, reform: 57, pragmatic: 86, culture: 74, crisis: 82 },
    portrait: 'images/blnf.jpg'
  },
  {
    name: '温斯顿·丘吉尔', initial: '危',
    position: '英国首相', term: '1940–1945、1951–1955',
    quote: '我所能奉献的唯有热血、辛劳、眼泪和汗水。',
    tags: ['永不投降', '热血辛劳', '持久抗压', '后方稳定'],
    report: '你是危机应对、持久抗压的后方稳定者。你危机应对与人际亲和双高，擅长动员与坚守；作风坚韧果敢、注重持久战，高度重视国家生存与士气鼓舞，实现了最黑暗时刻的胜利。务实与文化修养扎实，更重关键时刻的领导与凝聚。',
    features: { decision: 65, leadership: 64, idealism: 52, affinity: 77, reform: 56, pragmatic: 72, culture: 64, crisis: 78 },
    portrait: 'images/qje.jpg'
  },
  {
    name: '亚历山大·汉密尔顿', initial: '务',
    position: '美国财政部长', term: '1789–1795',
    quote: '国家债务，如果不过度，将是我们的国家福祉。',
    tags: ['金融之父', '成本精算', '效率至上', '务实构建'],
    report: '你是成本精算、效率至上的务实建设者。你务实程度极高，强调金融与行政体系；作风精明果断、注重实际效益，高度重视国家信用与中央权威，实现了美国金融与政府体系的奠基。理想主义与人际亲和相对克制，更重效率与制度落地。',
    features: { decision: 45, leadership: 48, idealism: 55, affinity: 55, reform: 41, pragmatic: 86, culture: 66, crisis: 70 },
    portrait: 'images/hmed.jpg'
  },
  {
    name: '拿破仑·波拿巴', initial: '断',
    position: '法兰西皇帝', term: '1804–1814、1815',
    quote: '不可能只是在庸人字典里才有的字眼。',
    tags: ['不可能非', '一击必中', '决策果断', '法典统一'],
    report: '你是决策果断、一击必中的深远谋划者。你决策力极高，人际亲和极低；作风雷厉风行、注重速度与结果，高度重视军事与行政集权，实现了快速扩张与法典统一。理想主义与文化修养中等，更重个人决断与高效执行。',
    features: { decision: 89, leadership: 72, idealism: 50, affinity: 31, reform: 40, pragmatic: 62, culture: 51, crisis: 59 },
    portrait: 'images/bpl.jpg'
  },
  {
    name: '奥托·冯·俾斯麦', initial: '改',
    position: '德意志帝国首相', term: '1871–1890',
    quote: '政治是可能的艺术。',
    tags: ['铁血宰相', '破局指挥', '结果导向', '现实政治'],
    report: '你是破局指挥、结果导向的铁血改革者。你改革魄力极高，决策与领导力突出；作风强硬务实、注重现实政治，高度重视统一与社会稳定，实现了德国统一与现代国家建设。人际亲和相对有限，更重目标达成与权力平衡。',
    features: { decision: 80, leadership: 80, idealism: 72, affinity: 75, reform: 88, pragmatic: 77, culture: 50, crisis: 79 },
    portrait: 'images/bsm.jpg'
  },
  {
    name: '乔治·华盛顿', initial: '危',
    position: '美国总统', term: '1789–1797',
    quote: '我希望人们铭记，我是一个普通公民，而非国王。',
    tags: ['国父典范', '过渡平稳', '承上启下', '权力交接'],
    report: '你是过渡平稳、承上启下的危机管理者。你危机应对突出，领导力与决策力扎实；作风沉稳克制、注重先例与稳定，高度重视新政权巩固与权力交接，实现了共和制度的平稳起步。改革魄力相对温和，更重共识与长远稳定。',
    features: { decision: 65, leadership: 46, idealism: 56, affinity: 60, reform: 40, pragmatic: 65, culture: 50, crisis: 81 },
    portrait: 'images/hsd.jpg'
  },
  {
    name: '亚伯拉罕·林肯', initial: '危',
    position: '美国总统', term: '1861–1865',
    quote: '民有、民治、民享的政府，将不会从地球上消失。',
    tags: ['解放宣言', '定海神针', '关键时刻', '统一救国'],
    report: '你是定海神针、关键时刻的果断应对者。你危机应对极高，决策力突出；作风坚韧包容、注重原则与和解，高度重视国家统一与解放，实现了内战胜利与制度重生。人际亲和与文化修养较高，更重危机中的领导与远见。',
    features: { decision: 73, leadership: 68, idealism: 70, affinity: 70, reform: 61, pragmatic: 72, culture: 70, crisis: 88 },
    portrait: 'images/lk.jpg'
  },
  {
    name: '西奥多·罗斯福', initial: '改',
    position: '美国总统', term: '1901–1909',
    quote: '说软话，但带根大棒。',
    tags: ['大棒外交', '破冰先锋', '破旧立新', '进步改革'],
    report: '你是破冰先锋、破旧立新的强力改革者。你改革魄力极高，理想主义与领导力突出；作风精力充沛、注重进步与公正，高度重视反垄断与资源保护，实现了进步时代的转型。危机应对扎实，更重主动出击与社会公正。',
    features: { decision: 60, leadership: 48, idealism: 80, affinity: 75, reform: 91, pragmatic: 48, culture: 66, crisis: 55 },
    portrait: 'images/xad.jpg'
  },
  {
    name: '彼得大帝', initial: '改',
    position: '俄罗斯沙皇', term: '1682–1725',
    quote: '我是学生，并寻求老师。',
    tags: ['开窗欧洲', '试验改革', '小步快跑', '西化强国'],
    report: '你是试验改革、小步快跑的西化推进者。你改革魄力极高，理想主义较高；作风激进务实、注重学习与实验，高度重视现代化与军事改革，实现了俄罗斯向欧洲强国的转型。危机应对相对有限，更重持续试验与强制推进。',
    features: { decision: 41, leadership: 45, idealism: 75, affinity: 57, reform: 90, pragmatic: 71, culture: 67, crisis: 35 },
    portrait: 'images/bd.jpg'
  },
  {
    name: '本杰明·富兰克林', initial: '人',
    position: '宾夕法尼亚最高行政长官', term: '1785–1788',
    quote: '早睡早起使人健康、富有和聪明。',
    tags: ['穷理查', '通达调和', '长袖善舞', '启蒙使者'],
    report: '你是通达调和、长袖善舞的文化人际者。你人际亲和与文化修养双高；作风智慧圆融、注重实用与外交，高度重视和解与启蒙传播，实现了独立战争外交与建国共识。改革魄力中等，更重调和与长远影响。',
    features: { decision: 70, leadership: 70, idealism: 55, affinity: 90, reform: 61, pragmatic: 75, culture: 90, crisis: 75 },
    portrait: 'images/bjm.jpg'
  },
  {
    name: '尤利西斯·S·格兰特', initial: '危',
    position: '美国总统', term: '1869–1877',
    quote: '战争的艺术很简单，就是找到敌人并尽快消灭他。',
    tags: ['无条件降', '铁腕执行', '令行禁止', '战场猛将'],
    report: '你是铁腕执行、令行禁止的危机决策者。你危机应对与决策力双高；作风坚毅直接、注重结果与服从，高度重视军事胜利与重建秩序，实现了内战终结与国家重建。人际亲和与文化修养相对有限，更重执行与果断。',
    features: { decision: 79, leadership: 53, idealism: 42, affinity: 40, reform: 41, pragmatic: 45, culture: 45, crisis: 81 },
    portrait: 'images/glt.jpg'
  },
  {
    name: '道格拉斯·麦克阿瑟', initial: '危',
    position: '盟军最高司令官', term: '1945–1951',
    quote: '老兵不死，只会慢慢凋零。',
    tags: ['老兵不死', '攻坚破障', '迎难而上', '占领改革'],
    report: '你是攻坚破障、迎难而上的改革务实者。你改革魄力与务实程度双高，领导力突出；作风强势果敢、注重战略与执行，高度重视占领改革与战场胜利，实现了日本民主化与初期战局扭转。人际亲和相对有限，更重目标与权威。',
    features: { decision: 80, leadership: 85, idealism: 58, affinity: 42, reform: 92, pragmatic: 90, culture: 67, crisis: 78 },
    portrait: 'images/mkas.jpg'
  },
  {
    name: '德怀特·D·艾森豪威尔', initial: '务',
    position: '美国总统', term: '1953–1961',
    quote: '和平不能靠愿望获得，只能靠行动获得。',
    tags: ['组织大师', '稳进平衡', '稳中求进', '冷战平衡'],
    report: '你是稳进平衡、稳中求进的务实管理者。你务实程度高，领导力与危机应对扎实；作风稳健组织、注重平衡与效率，高度重视冷战稳定与基础设施建设，实现了经济繁荣与和平过渡。改革魄力相对温和，更重共识与可持续。',
    features: { decision: 40, leadership: 52, idealism: 52, affinity: 63, reform: 47, pragmatic: 81, culture: 57, crisis: 64 },
    portrait: 'images/hwe.jpg'
  },
  {
    name: '乔治·马歇尔', initial: '人',
    position: '美国国务卿', term: '1947–1949',
    quote: '我们唯一需要的是时间，以及欧洲的决心。',
    tags: ['马歇尔计划', '体恤同行', '温厚笃行', '协调共建'],
    report: '你是体恤同行、温厚笃行的协调共建者。你人际亲和高，理想主义与文化修养较高；作风谦逊稳健、注重合作与计划，高度重视欧洲复兴与集体安全，实现了马歇尔计划与冷战早期稳定。决断力中等，更重共识与长远协调。',
    features: { decision: 43, leadership: 67, idealism: 81, affinity: 85, reform: 75, pragmatic: 69, culture: 79, crisis: 72 },
    portrait: 'images/mxr.jpg'
  },
  {
    name: '查尔斯·戴高乐', initial: '领',
    position: '法国总统', term: '1959–1969',
    quote: '法国没有朋友，只有利益。',
    tags: ['自由法国', '全局统御', '统揽全局', '独立自主'],
    report: '你是全局统御、统揽全局的强力领导者。你领导力极高，决策力突出；作风独立坚定、注重国家尊严与战略自主，高度重视法兰西复兴与国际地位，实现了第五共和国的建立与现代化。人际亲和相对克制，更重远见与权威。',
    features: { decision: 82, leadership: 88, idealism: 70, affinity: 51, reform: 58, pragmatic: 68, culture: 49, crisis: 80 },
    portrait: 'images/dgl.jpg',
    boost: 2.03
  },
  {
    name: '米哈伊尔·戈尔巴乔夫', initial: '文',
    position: '苏联总统', term: '1990–1991',
    quote: '我们需要改革，我们需要开放，我们需要民主。',
    tags: ['新思维', '公开性', '改革试验', '知识分子'],
    report: '你是厚积薄发、文化观察的深度涵养者。你文化修养与人际亲和极高，具有强烈的理想主义与改革愿望；作风温和开放、注重制度沟通与思想解放，试图在传统框架中推动现代化转型。决断力与危机应对相对有限，更重思想传播与温和变革。',
    features: { decision: 36, leadership: 42, idealism: 69, affinity: 78, reform: 72, pragmatic: 71, culture: 87, crisis: 49 },
    portrait: 'images/gebcf.jpg'
  },
  {
    name: '米哈伊尔·苏斯洛夫', initial: '文',
    position: '苏共中央第二书记', term: '1965–1982',
    quote: '意识形态工作是党的工作的灵魂。',
    tags: ['灰色主教', '幕后思考', '静水深流', '正统守护'],
    report: '你是幕后思考、静水深流的意识形态守护者。你文化修养极高，理想主义较高；作风内敛坚定、注重理论与正统，高度重视马克思主义意识形态与党内纪律，实现了长期意识形态稳定与权力平衡。决断力与改革魄力相对有限，更重原则坚持与幕后影响。',
    features: { decision: 36, leadership: 30, idealism: 75, affinity: 42, reform: 52, pragmatic: 67, culture: 91, crisis: 30 },
    portrait: 'images/sllf.jpg'
  }
];

/* ========== 2.5 八维特征（按图示 0~100 分展示） ==========
   每个特征 = 加权融合 6 个原始维度（先用各自满分归一化到 0~1） */
const FEATURES = [
  { key: 'decision',   label: '决断力',  weights: { steady: 0.40, principle: 0.30, adapt: 0.30 } },
  // 领导力中 pioneer 权重由 0.40 下调至 0.10：改革魄力高度依赖 pioneer（0.65），
  // 原权重会使「改革魄力高」必然推高领导力，与改革型 II 的画像直接冲突，
  // 导致该类型在数学上不可达。下调后改革型 II 可进入相似类型排行。
  { key: 'leadership', label: '领导力',  weights: { pioneer: 0.10, synergy: 0.25, principle: 0.65 } },
  { key: 'idealism',   label: '理想主义',weights: { principle: 0.55, steady: 0.45 } },
  { key: 'affinity',   label: '人际亲和',weights: { synergy: 0.85, steady: 0.15 } },
  { key: 'reform',     label: '改革魄力',weights: { pioneer: 0.65, adapt: 0.35 } },
  { key: 'pragmatic',  label: '务实程度',weights: { pragmatic: 0.90, steady: 0.10 } },
  { key: 'culture',    label: '文化修养',weights: { steady: 0.50, principle: 0.30, synergy: 0.20 } },
  { key: 'crisis',     label: '危机应对',weights: { steady: 0.50, adapt: 0.50 } }
];

function computeFeatures(scores) {
  const norm = {};
  Object.keys(scores).forEach(k => {
    norm[k] = MAX_SCORES[k] ? scores[k] / MAX_SCORES[k] : 0;
  });
  const out = {};
  FEATURES.forEach(f => {
    let v = 0;
    Object.keys(f.weights).forEach(k => { v += (norm[k] || 0) * f.weights[k]; });
    out[f.key] = Math.round(v * 100);
  });
  return out;
}

/* ========== 3. 38 道题目 ==========
   分值设计：单选题每题 4 个选项，主维度 3 分 + 可选副维度 1 分；
   多选题（multi:true，共 8 道）为「四选二」，得分为所选两项分数之和的一半，
   使其与单选题保持同一量纲。
   题目来源：《题目.docx》的 15 道已全部保留（第 1~15 题），
   另按八维特征（决策力 / 领导力 / 理想主义 / 人际亲和 / 改革魄力 /
   务实程度 / 文化修养 / 危机应对）补充 23 道（第 16~38 题）。
   构成：单选 30 道 + 多选 8 道 = 38 道。                              */
const QUESTIONS = [
  /* ---------- 《题目.docx》原题 1~15 ---------- */
  { text: '面对一项理念上绝对正确、但在当前资源下显得极不划算的重大工程，你通常会作何选择？', options: [
    { text: 'A. 迎难而上，认为精神力量和长远愿景能克服眼前的物质困难', scores: { pioneer: 3, synergy: 1 } },
    { text: 'B. 立即叫停，坚持用详实的数据和投入产出比来决定下一步行动', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'C. 寻求折中方案，先小规模试点，同时尽力安抚各方情绪', scores: { adapt: 3, pragmatic: 1 } },
    { text: 'D. 严格按照既定规章制度办事，将其交由上级或集体投票决定', scores: { principle: 3, steady: 1 } }
  ]},
  { text: '当组织内一项沿用已久但严重阻碍效率的旧制度成为发展瓶颈时，你的态度是：', options: [
    { text: 'A. 以破釜沉舟的雷霆手段立刻废除，不怕得罪既得利益者（但会先稳住基本盘，避免局面失控）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'B. 极度谨慎，先进行长期的实地调研，谋定而后动', scores: { steady: 3 } },
    { text: 'C. 强调秩序与稳定，认为不能轻易动摇根基，倾向于在框架内微调', scores: { principle: 3, steady: 1 } },
    { text: 'D. 发动一场自下而上的思想探讨，用新理念激发团队主动抛弃旧制度', scores: { synergy: 3, pioneer: 1, pragmatic: 1 } }
  ]},
  { text: '面对重大决策时，你最优先考虑的是什么？', options: [
    { text: 'A. 理想与长远历史使命（同时立足现实、谋定后动）', scores: { pioneer: 3, principle: 1, steady: 1 } },
    { text: 'B. 实际条件与可操作性', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'C. 团队共识与集体平衡', scores: { synergy: 3, steady: 1, pragmatic: 1 } },
    { text: 'D. 个人决断与快速行动', scores: { adapt: 3, pioneer: 1 } }
  ]},
  { text: '在推动变革时，你的典型风格更接近哪种？', options: [
    { text: 'A. 大胆突破、敢闯敢试', scores: { pioneer: 3, synergy: 1 } },
    { text: 'B. 稳妥渐进、先试点再推广', scores: { steady: 3 } },
    { text: 'C. 理论先行、构建完整体系', scores: { principle: 3, steady: 1 } },
    { text: 'D. 以大众感受与基层反馈为导向', scores: { adapt: 3, pragmatic: 1 } }
  ]},
  { text: '突发极其严重的全局性危机，现场一片混乱，你抵达后的第一反应是：', options: [
    { text: 'A. 迅速接管最高指挥权，凭借直觉与经验立刻下达强硬指令（同时稳住核心基本盘）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'B. 第一时间深入最危险的基层一线，用感性的话语安抚受冲击的群众', scores: { synergy: 3, adapt: 1, pragmatic: 1 } },
    { text: 'C. 保持极其冷静的观察，默默计算各种止损方案的成功概率', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 迅速召集各方核心人员召开紧急会议，依靠集体智慧制定应对策略', scores: { steady: 3, synergy: 1, pragmatic: 1 } }
  ]},
  { text: '在极其有限的个人休息时间里，你最倾向于如何放松自己？', options: [
    { text: 'A. 独自阅读艰深的理论著作或历史哲学书籍，享受精神的内化', scores: { principle: 3, steady: 1 } },
    { text: 'B. 钻研各类经济报表、项目进度图，在数字的推演中获得踏实感', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'C. 广泛涉猎外语、艺术或乐器，保持开放和活跃的跨界思维（也注重沉淀与基本功）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'D. 与身边的基层工作人员拉家常，了解他们最真实的生活琐事', scores: { synergy: 3 } }
  ]},
  { text: '一位跟随你多年、忠心耿耿的下属，因为能力不足犯下大错，你会如何处理？', options: [
    { text: 'A. 铁面无私，绝不姑息，按最高标准严厉惩处以儆效尤', scores: { principle: 3, pioneer: 1 } },
    { text: 'B. 痛心疾首，但依然会为他求情，并温柔地将其调离核心岗位', scores: { synergy: 3, steady: 1, pragmatic: 1 } },
    { text: 'C. 将此视为组织体系的漏洞，借机发起一场全面的纪律整顿运动（同时稳守底线与程序）', scores: { pioneer: 3, principle: 1, steady: 1 } },
    { text: 'D. 不掺杂个人情感，完全交由专门的纪律检查部门按章办事', scores: { steady: 3, adapt: 1 } }
  ]},
  { text: '在一个结构复杂的领导团队中，你认为自己最适合扮演的角色是：', options: [
    { text: 'A. 绝对的核心大脑，负责指引最宏大的方向与战略愿景（也注重稳健落地）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'B. 务实的总工程师，将宏大愿景拆解为可落地的具体蓝图', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'C. 润滑剂与协调者，不知疲倦地化解内部矛盾，维系团队运转', scores: { synergy: 3, steady: 1, pragmatic: 1 } },
    { text: 'D. 幕后的理论智囊，提供无懈可击的逻辑推演和思想体系支撑', scores: { principle: 3 } }
  ]},
  { multi: true, text: '（多选）面对深水区的体制改革，你认为最不可或缺的要素有哪些？', options: [
    { text: 'A. 不惧毁誉、打破既得利益集团的铁腕手段', scores: { pioneer: 3, synergy: 1 } },
    { text: 'B. 充分激发基层和市场内生动力的灵活机制', scores: { adapt: 3, pragmatic: 1 } },
    { text: 'C. 具有悲悯情怀、纯粹为大众造福的崇高信念', scores: { synergy: 3 } },
    { text: 'D. 极其周密、强调整体安全底线的顶层设计', scores: { steady: 3 } }
  ]},
  { multi: true, text: '（多选）当你的核心主张在团队内部遭到强烈反对时，你倾向于采取哪些策略？', options: [
    { text: 'A. 凭借极强的个人威望与战略定力，强行排除干扰推进', scores: { pioneer: 3, synergy: 1 } },
    { text: 'B. 展现极高的情商，通过私下斡旋、谈心来软化反对意见', scores: { synergy: 3, steady: 1, pragmatic: 1 } },
    { text: 'C. 暂时搁置争议，用实际结果来证明对错', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 从宏观的理论和历史高度重新进行严密的逻辑论证，说服对方', scores: { principle: 3, steady: 1 } }
  ]},
  { multi: true, text: '（多选）在规划一个庞大的组织发展蓝图时，你最看重的几个维度是：', options: [
    { text: 'A. 规章制度的严密性、纪律性以及基础设施的稳固', scores: { steady: 3 } },
    { text: 'B. 对客观规律的敬畏以及长期的抽样数据调研', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'C. 组织行动与宏大远景、远大理想的完美契合', scores: { pioneer: 3, synergy: 1 } },
    { text: 'D. 具备开放的外部视野，以及对新事物的包容度', scores: { adapt: 3, pioneer: 1 } }
  ]},
  { multi: true, text: '（多选）在极其被动、面临生死存亡的转折关头，你认为扭转局面的关键在于：', options: [
    { text: 'A. 敢于承担历史责任，做出常人难以做出的痛苦断腕之举', scores: { pioneer: 3, synergy: 1 } },
    { text: 'B. 敏锐捕捉转瞬即逝的战机，隐忍不发，但出手必一锤定音', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'C. 展现出无私的人格感召力，哪怕鞠躬尽瘁也要凝聚所有人', scores: { synergy: 3 } },
    { text: 'D. 保持极强的战略定力，坚信自己的路线，绝不盲目退缩', scores: { steady: 3, adapt: 1 } }
  ]},
  { multi: true, text: '（多选）以下哪些描述比较符合你真实的内在性格特征？', options: [
    { text: 'A. 喜欢在喧嚣中保持极度冷静，心思缜密甚至有些孤僻内向', scores: { steady: 3 } },
    { text: 'B. 骨子里带有浪漫主义色彩，很容易被宏大的目标和激情点燃', scores: { pioneer: 3, synergy: 1 } },
    { text: 'C. 极度自律且任劳任怨，习惯于将所有重担与委屈默默扛在肩上', scores: { principle: 3, steady: 1 } },
    { text: 'D. 个性外向且充满活力，乐于展示多方面的才华以拉近人际距离', scores: { synergy: 3 } }
  ]},
  { text: '当你功成身退时，你最希望后人如何评价你的贡献？', options: [
    { text: 'A. 是一位敢于打破思想禁锢、为人坦荡无私的赤子（同时守住底线与分寸）', scores: { pioneer: 3, principle: 1, steady: 1 } },
    { text: 'B. 是一位留下了坚实物质基础、理顺了经济脉络的建设者', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'C. 是一位在惊涛骇浪中稳住基本盘、挽救了全局的关键人物', scores: { steady: 3, synergy: 1, pragmatic: 1 } },
    { text: 'D. 是一位重塑了组织精神内核、提供了深邃思想的灵魂导师', scores: { principle: 3, synergy: 1 } }
  ]},
  { rank: true, text: '（排序）请将「安全、经济、科技、民生」四个方面，按你心中的看重程度从高到低依次点击排序。', options: [
    { text: '安全', scores: { steady: 3 } },
    { text: '经济', scores: { pragmatic: 3, adapt: 1 } },
    { text: '科技', scores: { adapt: 3, pioneer: 1 } },
    { text: '民生', scores: { synergy: 3 } }
  ]},

  /* ---------- 按八维特征补充的 23 道（16~38） ---------- */
  /* 决策力 */
  { text: '关键决策所需的信息只收集到六成，此时你会？', options: [
    { text: 'A. 继续收集，信息不足不轻易拍板', scores: { steady: 3 } },
    { text: 'B. 凭经验先定大方向，细节边走边补（但会先稳住基本盘）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'C. 用现有数据做最优推断，先算出期望收益再定', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 召集相关方碰一下，把不同判断摆到台面上', scores: { synergy: 3, adapt: 1, pragmatic: 1 } }
  ]},
  { text: '一个已执行三个月的决策被证明方向有误，你会？', options: [
    { text: 'A. 立刻叫停止损，哪怕前期投入全部作废', scores: { adapt: 3, pragmatic: 1 } },
    { text: 'B. 先复盘错在哪，调整路径但保留原有目标', scores: { steady: 3, adapt: 1 } },
    { text: 'C. 坚定推进，很多事需要更长时间才能见效（同时稳住团队基本盘）', scores: { pioneer: 3, steady: 1, synergy: 1 } },
    { text: 'D. 与团队坦诚沟通，共同决定是转向还是坚持', scores: { synergy: 3, adapt: 1, pragmatic: 1 } }
  ]},
  { text: '做判断时，你最倚重的是？', options: [
    { text: 'A. 长期形成的原则与底线', scores: { principle: 3, steady: 1 } },
    { text: 'B. 对局势的直觉与临场判断（也依托经验稳住阵脚）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'C. 可量化的收益与风险', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 团队多数人的意见', scores: { synergy: 3, steady: 1, pragmatic: 1 } }
  ]},
  /* 领导力 */
  { text: '你更倾向于用哪种方式带动团队？', options: [
    { text: 'A. 亲自冲在前面，用行动做示范（同时稳住全局）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'B. 把目标和边界讲清楚，过程充分授权', scores: { principle: 3, steady: 1 } },
    { text: 'C. 盯住关键指标，用结果倒逼执行', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 关注每个人的状态，让团队自己转起来', scores: { synergy: 3 } }
  ]},
  { text: '你认为领导者最核心的权威来源是什么？', options: [
    { text: 'A. 关键时刻敢拍板、敢担责（也先稳住基本盘再出手）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'B. 说到做到、始终如一的原则性', scores: { principle: 3, steady: 1 } },
    { text: 'C. 能把事情做成、让大家拿到结果的实力', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 被人真心信任与拥护的人格凝聚力', scores: { synergy: 3 } }
  ]},
  { text: '培养接班人时，你最看重的是？', options: [
    { text: 'A. 能否扛住压力、独立做决定（同时稳守原则底线）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'B. 是否认同并坚守组织的核心原则', scores: { principle: 3, steady: 1 } },
    { text: 'C. 解决实际问题的能力强不强', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 能不能把人凝聚在自己身边', scores: { synergy: 3 } }
  ]},
  /* 理想主义 */
  { text: '当理想目标与现实条件严重冲突时，你通常会？', options: [
    { text: 'A. 坚持理想，创造条件也要做下去', scores: { pioneer: 3, synergy: 1 } },
    { text: 'B. 守住核心底线，同时接受阶段性妥协', scores: { steady: 3, adapt: 1 } },
    { text: 'C. 先算清代价，能承受才继续', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 与大家商量，重新校准一个共识目标', scores: { adapt: 3, pragmatic: 1 } }
  ]},
  { text: '一项工作短期看不到任何回报，但对长远很重要，你会？', options: [
    { text: 'A. 认定了就坚持投入，不计较一时得失', scores: { principle: 3, steady: 1 } },
    { text: 'B. 先做起来，用阶段性成果去争取资源（但会先稳住基本盘）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'C. 严格控制在可承受范围内，小步投入', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 讲清长远意义，说服团队一起投入', scores: { synergy: 3 } }
  ]},
  { text: '你如何看待「妥协」？', options: [
    { text: 'A. 原则问题上绝不妥协', scores: { principle: 3, pioneer: 1 } },
    { text: 'B. 妥协是为了走更远的路，值得', scores: { steady: 3 } },
    { text: 'C. 是否妥协取决于代价能否算得过来', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 妥协是维持关系与共识的必要成本', scores: { synergy: 3, steady: 1, pragmatic: 1 } }
  ]},
  /* 人际亲和 */
  { text: '团队中两个人发生激烈冲突，你会？', options: [
    { text: 'A. 先把事态压下去，再各打五十大板', scores: { steady: 3, adapt: 1 } },
    { text: 'B. 分别了解情况，再促成双方当面说开', scores: { synergy: 3 } },
    { text: 'C. 只看谁对事情更有利，不太顾及情绪', scores: { pragmatic: 3, pioneer: 1 } },
    { text: 'D. 明确是非，按规则处理不留情面', scores: { principle: 3, steady: 1 } }
  ]},
  { text: '你理想中的团队氛围是？', options: [
    { text: 'A. 彼此信任、能说真话', scores: { synergy: 3, steady: 1, pragmatic: 1 } },
    { text: 'B. 目标一致、士气高昂（同时守住稳健底线）', scores: { pioneer: 3, principle: 1, steady: 1 } },
    { text: 'C. 各司其职、少内耗', scores: { pragmatic: 3, steady: 1 } },
    { text: 'D. 有规矩、讲分寸', scores: { principle: 3, steady: 1 } }
  ]},
  { text: '面对一个能力很强但很难相处的人，你会？', options: [
    { text: 'A. 只要能出结果，性格可以包容', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'B. 花时间沟通磨合，尽量用好他', scores: { synergy: 3, steady: 1, pragmatic: 1 } },
    { text: 'C. 团队和谐更重要，宁可不用', scores: { steady: 3, synergy: 1, pragmatic: 1 } },
    { text: 'D. 立好规矩，越界就按制度办', scores: { principle: 3, pioneer: 1 } }
  ]},
  /* 改革魄力 */
  { text: '你如何看待「打破常规」？', options: [
    { text: 'A. 常规就是用来打破的，不破不立（但打破前先吃透常规、稳住阵脚）', scores: { pioneer: 3, adapt: 1, steady: 1 } },
    { text: 'B. 先吃透常规，再谈改变', scores: { steady: 3, adapt: 1 } },
    { text: 'C. 看收益，能明显变好才值得打破', scores: { pragmatic: 3, adapt: 1 } },
    { text: 'D. 改动要让大家能接受，否则推不动', scores: { synergy: 3, steady: 1, pragmatic: 1 } }
  ]},
  { text: '改革推进到一半，阻力超出预期，你会？', options: [
    { text: 'A. 加大力度，越是阻力越说明改对了（同时稳住基本盘）', scores: { pioneer: 3, principle: 1, steady: 1 } },
    { text: 'B. 暂缓节奏，先化解阻力再推进', scores: { steady: 3, synergy: 1, pragmatic: 1 } },
    { text: 'C. 收缩范围，先保住能成的部分', scores: { adapt: 3, pragmatic: 1 } },
    { text: 'D. 换个切入角度，绕开正面阻力', scores: { adapt: 3, pragmatic: 1 } }
  ]},
  { multi: true, text: '（多选）推动一场组织变革时，你认为最需要同时具备哪些条件？', options: [
    { text: 'A. 顶层有清晰可行的整体方案', scores: { steady: 3 } },
    { text: 'B. 有敢于碰硬、承担骂名的执行者', scores: { pioneer: 3, synergy: 1 } },
    { text: 'C. 基层愿意参与，并从中得到实际好处', scores: { synergy: 3 } },
    { text: 'D. 留出试错空间，能随时调整打法', scores: { adapt: 3 } }
  ]},
  /* 务实程度 */
  { text: '资源有限时，你分配资源的首要依据是？', options: [
    { text: 'A. 投入产出比最高的地方', scores: { pragmatic: 3, steady: 1 } },
    { text: 'B. 对长远战略最关键的地方', scores: { pioneer: 3, principle: 1 } },
    { text: 'C. 最能凝聚团队共识的地方', scores: { synergy: 3, steady: 1, pragmatic: 1 } },
    { text: 'D. 风险最小、最稳妥的地方', scores: { steady: 3, adapt: 1 } }
  ]},
  { text: '评价一项工作，你更看重的是？', options: [
    { text: 'A. 是否拿到了可衡量的结果', scores: { pragmatic: 3, steady: 1 } },
    { text: 'B. 是否守住了流程与规范', scores: { principle: 3, steady: 1 } },
    { text: 'C. 团队是否在过程中获得了成长', scores: { synergy: 3, adapt: 1, pragmatic: 1 } },
    { text: 'D. 是否打开了新局面', scores: { pioneer: 3, synergy: 1 } }
  ]},
  { text: '数据结论与你的直觉相左时，你通常？', options: [
    { text: 'A. 相信数据，直觉只作参考', scores: { pragmatic: 3, steady: 1 } },
    { text: 'B. 相信直觉，数据常滞后于现实', scores: { pioneer: 3, adapt: 1 } },
    { text: 'C. 先核查数据是否可靠，再作决定', scores: { principle: 3, pragmatic: 1 } },
    { text: 'D. 听听他人的判断，综合着看', scores: { synergy: 3 } }
  ]},
  /* 文化修养 */
  { text: '你更倾向于通过什么方式提升自己？', options: [
    { text: 'A. 系统读书、沉下心钻研经典', scores: { principle: 3, steady: 1 } },
    { text: 'B. 在实践中摸索、边做边总结', scores: { adapt: 3, pragmatic: 1 } },
    { text: 'C. 与不同领域的人交流碰撞', scores: { synergy: 3, pioneer: 1, pragmatic: 1 } },
    { text: 'D. 关注新趋势、尝试新事物', scores: { adapt: 3, pioneer: 1 } }
  ]},
  { text: '你如何看待传统经验的价值？', options: [
    { text: 'A. 传统里有经得起时间检验的智慧', scores: { steady: 3, adapt: 1 } },
    { text: 'B. 参考价值有限，环境早已不同', scores: { adapt: 3, pioneer: 1 } },
    { text: 'C. 有用就用，不纠结新旧', scores: { adapt: 3, pragmatic: 1 } },
    { text: 'D. 传统是团队的共同记忆，有凝聚作用', scores: { synergy: 3, steady: 1, pioneer: 1 } }
  ]},
  { text: '在审美与表达上，你更欣赏哪一种？', options: [
    { text: 'A. 厚重、克制、有分寸', scores: { steady: 3, adapt: 1 } },
    { text: 'B. 锐利、有新意、敢突破', scores: { pioneer: 3, adapt: 1 } },
    { text: 'C. 简洁、直接、解决问题', scores: { pragmatic: 3, steady: 1 } },
    { text: 'D. 温和、妥帖、让人舒服', scores: { synergy: 3, steady: 1, pioneer: 1 } }
  ]},
  /* 危机应对 */
  { text: '危机爆发之前，你通常会？', options: [
    { text: 'A. 提前做预案，把最坏的情况想清楚', scores: { steady: 3, pragmatic: 1 } },
    { text: 'B. 保持敏感，随时准备调整', scores: { adapt: 3, pioneer: 1 } },
    { text: 'C. 相信临场应变，不做过多预设', scores: { adapt: 3, pioneer: 1 } },
    { text: 'D. 依靠团队，提前明确各自分工', scores: { synergy: 3, steady: 1 } }
  ]},
  { multi: true, text: '（多选）从一场重大危机中走出来，你认为最关键的支撑是什么？', options: [
    { text: 'A. 稳定的组织基本盘与秩序', scores: { steady: 3 } },
    { text: 'B. 快速调整、灵活应变的机制', scores: { adapt: 3, pioneer: 1 } },
    { text: 'C. 上下一心、彼此信任的凝聚力', scores: { synergy: 3, steady: 1 } },
    { text: 'D. 清醒的判断与果断的止损', scores: { adapt: 3, pragmatic: 1 } }
  ]},
  /* 针对「稳健 / 开拓 / 协同」三类特征表达不足而补充的两道 */
  { text: '面对一件注定漫长、短期难见成效的事，你最主要的内在支撑是？', options: [
    { text: 'A. 认定方向后长期坚守的定力', scores: { steady: 3 } },
    { text: 'B. 敢走没人走过的路的闯劲', scores: { pioneer: 3, synergy: 1 } },
    { text: 'C. 每一步都能看到的实际收益', scores: { pragmatic: 3, steady: 1 } },
    { text: 'D. 有一群人愿意陪你走下去', scores: { synergy: 3, adapt: 1 } }
  ]},
  { multi: true, text: '（多选）评价一段共同奋斗的岁月，你最在意的是哪两点？', options: [
    { text: 'A. 基础打得牢不牢', scores: { steady: 3 } },
    { text: 'B. 人心聚不聚', scores: { synergy: 3 } },
    { text: 'C. 规矩立得正不正', scores: { principle: 3, steady: 1 } },
    { text: 'D. 变通够不够快', scores: { adapt: 3, pioneer: 1 } }
  ]}
];

/* 多选题统一按「四选二」处理：得分为所选两项分数之和的一半，
   使其与单选题保持同一量纲，避免多选者天然拿到更高总分。 */
const MULTI_MAX = 2;
const isMulti = (q) => q.multi === true;

/* 排序题：四个选项全排序，第 1~4 名分别记 4/3/2/1 分，
   最后除以 4 归一化，使最高名次与单选题的主分档位相当。 */
const isRank = (q) => q.rank === true;
const RANK_WEIGHTS = [4, 3, 2, 1];
const RANK_NORM = 4;

const MAX_SCORES = (function () {
  const out = {};
  Object.keys(DIMENSIONS).forEach(k => (out[k] = 0));
  QUESTIONS.forEach(q => {
    if (isRank(q)) {
      // 排序题：该维度得分越高的选项排得越靠前，贡献越大
      Object.keys(DIMENSIONS).forEach(k => {
        const vals = q.options.map(o => o.scores[k] || 0).sort((a, b) => b - a);
        out[k] += vals.reduce((s, v, i) => s + v * RANK_WEIGHTS[i], 0) / RANK_NORM;
      });
      return;
    }
    const take = isMulti(q) ? MULTI_MAX : 1;
    Object.keys(DIMENSIONS).forEach(k => {
      // 取该维度得分最高的 take 个选项，求和后归一化
      const vals = q.options.map(o => o.scores[k] || 0).sort((a, b) => b - a);
      out[k] += vals.slice(0, take).reduce((s, v) => s + v, 0) / take;
    });
  });
  return out;
})();

/* ========== 3.5 八维校准与类型匹配 ==========
   为什么要校准：computeFeatures 出来的原始值是「证据占比」量纲
   （无偏好作答约 25 分，纯策略上限 41~91），而文档给的基准分是
   0~100 的绝对强度量纲（19 类均值约 65、上限 88~92）。两者量纲不同，
   直接算欧氏距离会把所有人都推向低分类型。

   所以先做逐特征的两点线性校准：
     无偏好作答的期望值(TYPICAL)  ->  该特征在 19 类基准分中的均值
     纯策略可达上限(RAWMAX)       ->  该特征在 19 类基准分中的最大值
   再比对「形状」：用去均值后的余弦相似度，避免被绝对水平带偏。
   这两个端点都由题目结构自动推导，改动题目后无需手工调整。 */
const FEATURE_BASE = (function () {
  const dimKeys = Object.keys(DIMENSIONS);

  // 端点一：无偏好（等概率随机）作答时期望的原始分
  //   单选：每选项被选中概率 1/4
  //   多选：四选二共 C(4,2)=6 种组合，每选项被选中概率 3/6 = 1/2
  const expected = {};
  dimKeys.forEach(k => (expected[k] = 0));
  QUESTIONS.forEach(q => {
    if (isRank(q)) {
      // 随机排序时，每个选项的名次期望 = (4+3+2+1)/4 = 2.5
      const avg = RANK_WEIGHTS.reduce((a, b) => a + b, 0) / q.options.length;
      dimKeys.forEach(k => {
        let sum = 0;
        q.options.forEach(o => (sum += o.scores[k] || 0));
        expected[k] += (sum * avg) / RANK_NORM;
      });
      return;
    }
    const take = isMulti(q) ? MULTI_MAX : 1;
    const p = take / q.options.length;          // 单个选项被选中的概率
    dimKeys.forEach(k => {
      let sum = 0;
      q.options.forEach(o => (sum += o.scores[k] || 0));
      expected[k] += (sum * p) / take;          // 乘概率后按选中数归一化
    });
  });
  const typical = computeFeatures(expected);

  // 端点二：六种「纯策略」作答（每题都选目标维度得分最高的选项）下的上限
  //   多选题取该维度得分最高的 2 项，再按 2 归一化
  const rawMax = {};
  FEATURES.forEach(f => (rawMax[f.key] = 0));
  dimKeys.forEach(d => {
    const scores = {};
    dimKeys.forEach(k => (scores[k] = 0));
    QUESTIONS.forEach(q => {
      if (isRank(q)) {
        // 纯策略：把目标维度得分最高的选项排在最前，依次往下
        const order = q.options
          .map((o, i) => ({ i: i, v: o.scores[d] || 0 }))
          .sort((a, b) => b.v - a.v);
        const add = {};
        dimKeys.forEach(k => (add[k] = 0));
        order.forEach((t, r) => {
          const s = q.options[t.i].scores;
          Object.keys(s).forEach(k => (add[k] += s[k] * RANK_WEIGHTS[r]));
        });
        dimKeys.forEach(k => (scores[k] += add[k] / RANK_NORM));
        return;
      }
      const take = isMulti(q) ? MULTI_MAX : 1;
      const order = q.options
        .map((o, i) => ({ i: i, v: o.scores[d] || 0 }))
        .sort((a, b) => b.v - a.v);
      const add = {};
      dimKeys.forEach(k => (add[k] = 0));
      order.slice(0, take).forEach(t => {
        const s = q.options[t.i].scores;
        Object.keys(s).forEach(k => (add[k] += s[k]));
      });
      dimKeys.forEach(k => (scores[k] += add[k] / take));
    });
    const f = computeFeatures(scores);
    FEATURES.forEach(x => { if (f[x.key] > rawMax[x.key]) rawMax[x.key] = f[x.key]; });
  });

  // 目标端点：该特征在 19 类基准分中的均值与最大值
  const base = {};
  FEATURES.forEach(f => {
    const col = PROFILE_LIST.map(p => p.features[f.key]);
    base[f.key] = {
      typical: typical[f.key],
      rawMax: rawMax[f.key],
      mean: col.reduce((a, b) => a + b, 0) / col.length,
      max: Math.max.apply(null, col)
    };
  });
  return base;
})();

/* 把原始分映射到与基准分同一量纲的 0~100 */
function calibrateFeatures(raw) {
  const out = {};
  FEATURES.forEach(f => {
    const b = FEATURE_BASE[f.key];
    const span = b.rawMax - b.typical || 1;
    const v = b.mean + ((raw[f.key] - b.typical) * (b.max - b.mean)) / span;
    out[f.key] = Math.max(0, Math.min(100, Math.round(v)));
  });
  return out;
}

/* 形状相似度：先各自减去自身均值，再做余弦相似度，取值 -1 ~ 1 */
function shapeSimilarity(a, b) {
  const keys = FEATURES.map(f => f.key);
  const ma = keys.reduce((s, k) => s + a[k], 0) / keys.length;
  const mb = keys.reduce((s, k) => s + b[k], 0) / keys.length;
  let dot = 0, na = 0, nb = 0;
  keys.forEach(k => {
    const x = a[k] - ma, y = b[k] - mb;
    dot += x * y; na += x * x; nb += y * y;
  });
  if (na < 1e-6 || nb < 1e-6) return 0;   // 完全平直的向量无形状可言
  return dot / Math.sqrt(na * nb);
}

/* ========== 4. 状态与逻辑 ========== */
const TOTAL = QUESTIONS.length;
let currentIndex = 0;
// 每题记录选中的下标数组：单选存 1 个，多选存 MULTI_MAX 个
let answers = new Array(TOTAL).fill(0).map(() => []);

const $ = (id) => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  const multi = isMulti(q);
  const rank = isRank(q);
  const picked = answers[currentIndex];

  $('question-number').textContent = `第 ${currentIndex + 1} 题 / 共 ${TOTAL} 题`;
  $('question-progress-text').textContent = `${Math.round((currentIndex / TOTAL) * 100)}%`;
  $('progress-fill').style.width = `${((currentIndex + 1) / TOTAL) * 100}%`;
  $('question-text').textContent = q.text;

  const box = $('options-container');
  box.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    const at = picked.indexOf(i);
    const on = at >= 0;
    btn.className = 'option-btn' + (on ? ' selected' : '') +
                    (multi ? ' multi' : '') + (rank ? ' rank' : '');
    if (rank) {
      const badge = document.createElement('span');
      badge.className = 'rank-num' + (on ? ' on' : '');
      badge.textContent = on ? String(at + 1) : '';
      btn.appendChild(badge);
      const label = document.createElement('span');
      label.textContent = opt.text;
      btn.appendChild(label);
    } else {
      btn.textContent = opt.text;
    }
    btn.addEventListener('click', () => selectOption(i));
    box.appendChild(btn);
  });

  // 多选题 / 排序题：显示进度，并改为「排满后点下一题」
  const hint = $('multi-hint');
  const nextBtn = $('next-btn');
  const footHint = $('footer-hint');
  if (rank) {
    const total = q.options.length;
    hint.textContent = `排序题 · 已排 ${picked.length} / ${total} 项`;
    hint.style.display = 'block';
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = picked.length !== total;
    footHint.textContent = '按看重程度从高到低依次点击；再次点击可取消';
  } else if (multi) {
    hint.textContent = `多选题 · 已选 ${picked.length} / ${MULTI_MAX} 项`;
    hint.style.display = 'block';
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = picked.length !== MULTI_MAX;
    footHint.textContent = `选满 ${MULTI_MAX} 项后进入下一题`;
  } else {
    hint.textContent = '';
    hint.style.display = 'none';
    nextBtn.style.display = 'none';
    footHint.textContent = '选择后立即进入下一题';
  }

  $('prev-btn').disabled = currentIndex === 0;
}

function selectOption(i) {
  const q = QUESTIONS[currentIndex];
  const picked = answers[currentIndex];

  if (isRank(q)) {
    const at = picked.indexOf(i);
    if (at >= 0) picked.splice(at, 1);        // 再次点击取消，其后名次自动前移
    else picked.push(i);                      // 按点击顺序追加名次
    renderQuestion();                         // 排序题停在原地等确认
    return;
  }

  if (isMulti(q)) {
    const at = picked.indexOf(i);
    if (at >= 0) {
      picked.splice(at, 1);                     // 再次点击取消
    } else if (picked.length < MULTI_MAX) {
      picked.push(i);                           // 未满则加入
    } else {
      picked.shift(); picked.push(i);           // 已满则替换最早的选择
    }
    renderQuestion();                           // 多选题停在原地等确认
    return;
  }

  answers[currentIndex] = [i];                  // 单选：选完即进入下一题
  goNext();
}

function goNext() {
  if (currentIndex < TOTAL - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    renderResult();
  }
}

function tally() {
  const scores = {};
  Object.keys(DIMENSIONS).forEach(k => (scores[k] = 0));

  answers.forEach((picked, qIndex) => {
    if (!picked || !picked.length) return;
    const q = QUESTIONS[qIndex];

    // 先累加本题，再整体归一化，避免误伤其他题的累计值
    const add = {};
    Object.keys(DIMENSIONS).forEach(k => (add[k] = 0));

    if (isRank(q)) {
      // picked 为排序后的下标序列，第 1 名在最前，权重 4/3/2/1
      picked.forEach((idx, r) => {
        const s = q.options[idx].scores;
        Object.keys(s).forEach(k => { if (add[k] !== undefined) add[k] += s[k] * RANK_WEIGHTS[r]; });
      });
      Object.keys(add).forEach(k => (scores[k] += add[k] / RANK_NORM));
      return;
    }

    picked.forEach(idx => {
      const s = q.options[idx].scores;
      Object.keys(s).forEach(k => { if (add[k] !== undefined) add[k] += s[k]; });
    });

    const div = isMulti(q) ? MULTI_MAX : 1;   // 四选二取平均，与单选题同量纲
    Object.keys(add).forEach(k => (scores[k] += add[k] / div));
  });
  return scores;
}

function renderResult() {
  const scores = tally();
  // 用户八维得分，已校准到与基准分同一量纲
  const userFeatures = calibrateFeatures(computeFeatures(scores));

  // 与 19 类基准分比形状，取最贴近的一类
  // boost 为可选隐藏参数（仅领导型 I 设置）：放大其相似度以校正结构性重叠，
  // 仅用于排序，不影响匹配度展示与八维对比（匹配度用未放大的 rawSim 计算）。
  const ranked = PROFILE_LIST
    .map(p => {
      const raw = shapeSimilarity(userFeatures, p.features);
      return { profile: p, sim: raw * (p.boost || 1), rawSim: raw };
    })
    .sort((a, b) => b.sim - a.sim);

  const best = ranked[0];
  const profile = best.profile;
  const matchRate = Math.max(45, Math.min(96, Math.round(50 + (best.rawSim - 0.25) * 68)));

  // 顶部档案照 + 主导类型（若该类型配置了 portrait 图片则显示图片，否则显示首字）
  const avatarEl = $('profile-avatar');
  if (profile.portrait) {
    avatarEl.innerHTML = `<img class="portrait-img-el" src="${profile.portrait}" alt="${profile.name}">`;
  } else {
    avatarEl.textContent = profile.initial;
  }
 
$('profile-name').textContent = profile.name;

// 【修改这行】：强制读取排行榜第一名 (rankingData[0]) 的百分比数字
//  $('profile-match-rate').textContent = `匹配度 ${matchRate}%`; （说明，该段是修改前，用于备份）//
$('profile-match-rate').textContent = `匹配度 ${matchRate}%`; 
$('profile-position').textContent = profile.position;
$('profile-term').textContent = profile.term;
$('profile-quote').textContent = profile.quote;
$('personality-report').textContent = profile.report;
  // 四字性格标签
  const tagBox = $('profile-tags');
  tagBox.innerHTML = '';
  profile.tags.forEach(t => {
    const s = document.createElement('span');
    s.textContent = t;
    tagBox.appendChild(s);
  });

  // 八维特征对比：红色进度条 = 该类型特征分数；黑色刻度 + 右侧数字 = 你的得分
  const bars = $('dimension-bars');
  bars.innerHTML = '';
  FEATURES.forEach(f => {
    const typeScore = profile.features[f.key];
    const mine = userFeatures[f.key];
    const row = document.createElement('div');
    row.className = 'dim-bar-row';
    row.innerHTML =
      `<span class="dim-bar-label">${f.label}</span>` +
      `<span class="dim-bar-track">` +
        `<span class="dim-bar-fill"></span>` +
        `<span class="dim-bar-mid"></span>` +
      `</span>` +
      `<span class="dim-bar-value">${mine}</span>`;
    row.title = `${f.label}：${profile.name} ${typeScore} 分，你的得分 ${mine}`;
    bars.appendChild(row);
    requestAnimationFrame(() => {
      row.querySelector('.dim-bar-fill').style.width = typeScore + '%';
      // 黑色刻度标记你的得分位置，按设备像素对齐保证各维度粗细完全一致
      const tick = row.querySelector('.dim-bar-mid');
      const track = row.querySelector('.dim-bar-track');
      const w = track.clientWidth;
      const dpr = window.devicePixelRatio || 1;
      if (w > 0) {
        const tickDev = Math.round(2 * dpr);                    // 刻度宽度（设备像素，取整）
        const centerDev = Math.round((mine / 100) * w * dpr);   // 刻度中心（设备像素，取整）
        const leftDev = Math.round(centerDev - tickDev / 2);
        tick.style.width = (tickDev / dpr) + 'px';
        tick.style.left = (leftDev / dpr) + 'px';
      } else {
        tick.style.left = mine + '%';
      }
    });
  });

  // 图例显示具体类型名，如「危机型 V特征」
  $('legend-type-label').textContent = `${profile.name}特征`;

// 1. 确保 ranked 数组存在
if (!ranked || ranked.length === 0) return;

// 2. 取出第一名人物的 profile 数据
const topProfile = ranked[0].profile;

// 3. 统一计算第一名的匹配百分比（使用 ranked[0].sim）
const topRate = Math.max(45, Math.min(96, Math.round(50 + (ranked[0].sim - 0.25) * 68)));

// 4. 渲染顶部主人物信息
$('profile-name').textContent = topProfile.name;
$('profile-match-rate').textContent = `匹配度 ${topRate}%`;
$('profile-position').textContent = topProfile.position;
$('profile-term').textContent = topProfile.term;
$('profile-quote').textContent = topProfile.quote;
$('personality-report').textContent = topProfile.report;

 // 相似类型排行（前五）
  const list = $('ranking-list');
  list.innerHTML = '';
  ranked.slice(0, 5).forEach((r, i) => {
    const rate = Math.max(45, Math.min(96, Math.round(50 + (r.sim - 0.25) * 68)));
    const item = document.createElement('div');
    item.className = 'ranking-item';
    const portrait = r.profile.portrait;
    const portraitHtml = portrait
      ? `<img src="${portrait}" alt="" class="rank-portrait-img">`
      : `<span class="rank-portrait-fallback">${r.profile.initial}</span>`;
    item.innerHTML =
      `<span class="rank-badge">${i + 1}</span>` +
      `<span class="rank-portrait">${portraitHtml}</span>` +
      `<span class="ranking-info">` +
        `<span class="rank-name">${r.profile.name}` +
          `<span class="rank-desc">${r.profile.position}</span>` +
        `</span>` +
        `<span class="rank-rate">${rate}%</span>` +
      `</span>`;
    list.appendChild(item);
  });

  showScreen('result-screen');

}

function restart() {
  currentIndex = 0;
  answers = new Array(TOTAL).fill(0).map(() => []);
  renderQuestion();
  showScreen('start-screen');
}

/* ========== 5. 绑定事件 ========== */
$('start-btn').addEventListener('click', () => {
  renderQuestion();
  showScreen('question-screen');
});

$('prev-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

// 多选题 / 排序题的「下一题」确认按钮
$('next-btn').addEventListener('click', () => {
  const q = QUESTIONS[currentIndex];
  const need = isRank(q) ? q.options.length : MULTI_MAX;
  if (answers[currentIndex].length === need) goNext();
});

$('restart-btn').addEventListener('click', restart);

// 开发环境下的自检
console.log(`[测评] 已加载 ${QUESTIONS.length} 题（单选 ${QUESTIONS.filter(q => !isMulti(q) && !isRank(q)).length} / ` +
            `多选 ${QUESTIONS.filter(isMulti).length} / 排序 ${QUESTIONS.filter(isRank).length}），维度 ${Object.keys(DIMENSIONS).length} 个，` +
            `八维特征 ${FEATURES.length} 个，结果类型 ${PROFILE_LIST.length} 类`);
console.log('[测评] 八维校准端点', FEATURE_BASE);

