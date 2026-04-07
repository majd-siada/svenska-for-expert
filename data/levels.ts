export interface LevelMeta {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  description: string;
  goals: string[];
  group: "main" | "special";
}

export const levelsMeta: LevelMeta[] = [
  {
    id: "svenska1",
    name: "Svenska 1",
    subtitle: "Everyday & Practical Swedish",
    icon: "📗",
    description:
      "Vardaglig och praktisk svenska — samtal, kultur, berättande och mer. Bygg en stark grund i daglig kommunikation.",
    goals: [
      "Föra dagliga samtal på naturlig svenska",
      "Kommunicera via telefon och e-post",
      "Förstå svensk kultur och traditioner",
      "Berätta och skriva personliga texter",
      "Hantera vardagssituationer som shopping, resor och hälsa",
    ],
    group: "main",
  },
  {
    id: "svenska2",
    name: "Svenska 2",
    subtitle: "Professional & Social Swedish",
    icon: "📘",
    description:
      "Professionell och social svenska — formellt språk, arbetsmarknad, media och samhälle. Förbered dig för yrkeslivet.",
    goals: [
      "Behärska formellt och informellt språkbruk",
      "Skriva CV och hantera jobbsituationer",
      "Analysera nyheter och media kritiskt",
      "Argumentera och debattera effektivt",
      "Förstå ekonomi, teknik och hållbarhetsfrågor",
    ],
    group: "main",
  },
  {
    id: "svenska3",
    name: "Svenska 3",
    subtitle: "Advanced & Academic Swedish",
    icon: "📙",
    description:
      "Avancerad och akademisk svenska — samhällsfrågor, filosofi, vetenskap och avancerad argumentation på universitetsnivå.",
    goals: [
      "Diskutera samhällsfrågor och politik på djupet",
      "Tillämpa kritiskt tänkande i text och tal",
      "Analysera litteratur och film på avancerad nivå",
      "Skriva kreativa och akademiska texter",
      "Bemästra avancerad debatt och retorik",
    ],
    group: "main",
  },
  {
    id: "litteratur",
    name: "Litteratur",
    subtitle: "Literature Analysis & Reading",
    icon: "📚",
    description:
      "Fördjupa dig i svensk och internationell litteratur — noveller, dikter, romaner och litteraturhistoria.",
    goals: [
      "Läsa och analysera noveller och romaner",
      "Tolka dikter med fokus på form och innehåll",
      "Förstå karaktärsutveckling och tematik",
      "Jämföra och kontrastera litterära verk",
      "Skriva egna bokrecensioner och analyser",
    ],
    group: "special",
  },
  {
    id: "retorik",
    name: "Retorik",
    subtitle: "Rhetoric & Presentation",
    icon: "🎤",
    description:
      "Bemästra talekonst — presentationsteknik, argumentation, övertalning och retoriska figurer.",
    goals: [
      "Förstå och tillämpa retoriska grundprinciper",
      "Hålla övertygande presentationer och tal",
      "Använda kroppsspråk och röst effektivt",
      "Bemästra debatteknik och motargumentation",
      "Analysera retorik i medier och politik",
    ],
    group: "special",
  },
  {
    id: "skrivande",
    name: "Skrivande",
    subtitle: "Writing & Text Production",
    icon: "✍️",
    description:
      "Utveckla din skrivförmåga — personliga texter, formella brev, argumentation, kreativt skrivande och publicering.",
    goals: [
      "Skriva personliga och berättande texter",
      "Producera formella brev och professionell korrespondens",
      "Bygga övertygande argumenterande texter",
      "Utforska kreativt skrivande och manus",
      "Redigera, förbättra och publicera egna texter",
    ],
    group: "special",
  },
];
