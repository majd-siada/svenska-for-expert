import type { Quiz } from "@/lib/types";

export const quizzes: Quiz[] = [
  {
    id: "sv1-vardaglig",
    title: "Vardaglig svenska",
    description: "Testa dina kunskaper om dagliga samtal, kultur och praktiska situationer.",
    level: "svenska1",
    category: "Dagligt",
    questions: [
      {
        id: "sv1-q1",
        question: "Vilket av följande uttryck passar bäst i ett informellt samtal mellan vänner?",
        options: [
          "Jag undrar om ni har möjlighet att assistera mig.",
          "Kan du hjälpa mig med det här?",
          "Härmed anhåller jag om er hjälp.",
          "Jag vill framföra en förfrågan om assistans.",
        ],
        correctIndex: 1,
        explanation:
          "I vardagliga samtal mellan vänner använder vi enkelt, direkt språk. 'Kan du hjälpa mig?' är naturligt och avslappnat.",
      },
      {
        id: "sv1-q2",
        question: "Vad är rätt sätt att avsluta ett formellt telefonsamtal?",
        options: [
          "Hejdå, vi hörs!",
          "Tack för samtalet, ha en bra dag.",
          "Okej, bye!",
          "Ja, vi ses väl.",
        ],
        correctIndex: 1,
        explanation:
          "I formella telefonsamtal avslutar man artigt med tack och en önskning som 'ha en bra dag'.",
      },
      {
        id: "sv1-q3",
        question: "Vilken svensk tradition firas den 13 december?",
        options: ["Midsommar", "Lucia", "Valborgsmässoafton", "Kräftskiva"],
        correctIndex: 1,
        explanation:
          "Lucia firas den 13 december med luciatåg, ljus och sång. Det är en av Sveriges mest älskade traditioner.",
      },
      {
        id: "sv1-q4",
        question: "Vad betyder uttrycket 'att fika'?",
        options: [
          "Att laga mat",
          "Att ta en paus med kaffe och något att äta",
          "Att handla mat",
          "Att äta middag",
        ],
        correctIndex: 1,
        explanation:
          "Fika är en central del av svensk kultur och innebär att ta en paus, ofta med kaffe och en bulle eller kaka.",
      },
      {
        id: "sv1-q5",
        question: "Hur säger man 'I would like to book a ticket' på svenska?",
        options: [
          "Jag vill köpa en bok.",
          "Jag skulle vilja boka en biljett.",
          "Jag behöver en bokning.",
          "Kan jag få en tidning?",
        ],
        correctIndex: 1,
        explanation:
          "'Jag skulle vilja boka en biljett' är den korrekta och artiga formen för att boka en biljett.",
      },
    ],
  },
  {
    id: "sv2-professionell",
    title: "Professionell svenska",
    description: "Testa dina kunskaper om formellt språk, arbetsmarknad och argumentation.",
    level: "svenska2",
    category: "Professionellt",
    questions: [
      {
        id: "sv2-q1",
        question: "Vilken hälsningsfras är mest lämplig i ett formellt mejl?",
        options: [
          "Hej!",
          "Tjena!",
          "Bästa mottagare,",
          "Yo!",
        ],
        correctIndex: 2,
        explanation:
          "'Bästa mottagare' är en formell hälsningsfras som används när man inte vet mottagarens namn.",
      },
      {
        id: "sv2-q2",
        question: "Vad bör ett personligt brev till en arbetsgivare innehålla?",
        options: [
          "Bara dina kontaktuppgifter",
          "En beskrivning av din motivation, kompetens och varför du passar tjänsten",
          "En kopia av ditt CV i textform",
          "En lista på dina hobbyer",
        ],
        correctIndex: 1,
        explanation:
          "Ett personligt brev ska visa din motivation, relevanta kompetenser och varför just du passar för tjänsten.",
      },
      {
        id: "sv2-q3",
        question: "Vad är en 'tes' i en argumentation?",
        options: [
          "Ett bevis",
          "Ett påstående som man argumenterar för eller emot",
          "En fråga",
          "En sammanfattning",
        ],
        correctIndex: 1,
        explanation:
          "En tes är det centrala påståendet i en argumentation — den ståndpunkt man vill övertyga andra om.",
      },
      {
        id: "sv2-q4",
        question: "Vilket av följande är ett sakargument?",
        options: [
          "Alla tycker att detta är fel.",
          "Enligt SCB har arbetslösheten minskat med 3% sedan förra året.",
          "Det känns inte rätt.",
          "Min kompis sa att det inte fungerar.",
        ],
        correctIndex: 1,
        explanation:
          "Sakargument baseras på fakta, statistik eller forskning — inte på känslor eller andrahandsinformation.",
      },
      {
        id: "sv2-q5",
        question: "Vad innebär 'källkritik'?",
        options: [
          "Att citera så många källor som möjligt",
          "Att kritisera alla källor",
          "Att granska och bedöma en källas trovärdighet och tillförlitlighet",
          "Att bara använda böcker som källor",
        ],
        correctIndex: 2,
        explanation:
          "Källkritik handlar om att bedöma en källas trovärdighet genom att granska avsändare, aktualitet, syfte och oberoende.",
      },
    ],
  },
  {
    id: "sv3-akademisk",
    title: "Akademisk svenska",
    description: "Testa dina kunskaper om akademiskt skrivande, kritiskt tänkande och avancerad argumentation.",
    level: "svenska3",
    category: "Akademiskt",
    questions: [
      {
        id: "sv3-q1",
        question: "Vad kännetecknar ett vetenskapligt språk?",
        options: [
          "Det är personligt och subjektivt",
          "Det är objektivt, precist och undviker vardagliga uttryck",
          "Det använder många utropstecken",
          "Det ska vara poetiskt och bildligt",
        ],
        correctIndex: 1,
        explanation:
          "Vetenskapligt språk är objektivt, precist och sakligt. Man undviker subjektiva uttryck och vardagsspråk.",
      },
      {
        id: "sv3-q2",
        question: "Vad är ett 'logiskt felslut'?",
        options: [
          "Ett matematiskt fel",
          "Ett resonemang som verkar övertygande men innehåller ett felaktigt logiskt steg",
          "En grammatisk felaktighet",
          "En missuppfattning av en text",
        ],
        correctIndex: 1,
        explanation:
          "Logiska felslut (fallacies) är resonemang som kan låta övertygande men som brister i logisk giltighet.",
      },
      {
        id: "sv3-q3",
        question: "Vad innebär 'hedging' i akademiskt skrivande?",
        options: [
          "Att vara helt säker på sina påståenden",
          "Att använda starka ord för att övertyga",
          "Att uttrycka osäkerhet eller försiktighet med formuleringar som 'tycks', 'kan tänkas'",
          "Att citera andra forskare",
        ],
        correctIndex: 2,
        explanation:
          "Hedging innebär att man uttrycker sig med försiktighet i vetenskapliga texter, t.ex. 'resultaten tyder på' istället för 'resultaten visar'.",
      },
      {
        id: "sv3-q4",
        question: "Vilken retorisk strategi bygger på talarens trovärdighet?",
        options: ["Pathos", "Logos", "Ethos", "Kairos"],
        correctIndex: 2,
        explanation:
          "Ethos handlar om talarens trovärdighet och auktoritet — att publiken litar på den som talar.",
      },
      {
        id: "sv3-q5",
        question: "Vad är skillnaden mellan en debattartikel och en krönika?",
        options: [
          "Det finns ingen skillnad",
          "En debattartikel argumenterar för en ståndpunkt medan en krönika är mer personlig och reflekterande",
          "En krönika är alltid längre",
          "En debattartikel skrivs alltid av politiker",
        ],
        correctIndex: 1,
        explanation:
          "En debattartikel har en tydlig tes och argumentation, medan en krönika är mer personlig och reflekterande.",
      },
    ],
  },
  {
    id: "lit-analys",
    title: "Litteraturanalys",
    description: "Testa dina kunskaper om litteratur, novellanalys och poetisk tolkning.",
    level: "litteratur",
    category: "Analys",
    questions: [
      {
        id: "lit-q1",
        question: "Vad innebär 'berättarperspektiv' i en novell?",
        options: [
          "Hur lång novellen är",
          "Från vilken synvinkel berättelsen framställs",
          "Vilken tid novellen utspelar sig i",
          "Hur många karaktärer som finns",
        ],
        correctIndex: 1,
        explanation:
          "Berättarperspektivet avgör genom vems ögon vi upplever berättelsen — första person (jag), tredje person (han/hon), eller allvetande.",
      },
      {
        id: "lit-q2",
        question: "Vad är en 'metafor'?",
        options: [
          "En jämförelse med 'som'",
          "Ett bildligt uttryck där något beskrivs som om det vore något annat",
          "En upprepning av ord",
          "En överdrift",
        ],
        correctIndex: 1,
        explanation:
          "En metafor beskriver något som om det vore något annat utan att använda 'som' eller 'liksom'. T.ex. 'livet är en resa'.",
      },
      {
        id: "lit-q3",
        question: "Vilken litterär epok kännetecknas av fokus på känsla, natur och det övernaturliga?",
        options: ["Upplysningen", "Romantiken", "Realismen", "Modernismen"],
        correctIndex: 1,
        explanation:
          "Romantiken (ca 1800–1850) betonade känsla, fantasi, natur och det övernaturliga som motvikt till upplysningens rationalism.",
      },
      {
        id: "lit-q4",
        question: "Vad betyder 'tema' i en litterär text?",
        options: [
          "Huvudpersonen",
          "Det underliggande ämnet eller den centrala idén i texten",
          "Handlingen i kronologisk ordning",
          "Författarens biografi",
        ],
        correctIndex: 1,
        explanation:
          "Temat är den underliggande idén eller frågan som texten utforskar — t.ex. kärlek, ensamhet, rättvisa.",
      },
      {
        id: "lit-q5",
        question: "Vad skiljer skönlitteratur från facklitteratur?",
        options: [
          "Skönlitteratur är alltid längre",
          "Skönlitteratur är fiktiv och konstnärlig medan facklitteratur är saklig och informerande",
          "Facklitteratur innehåller aldrig bilder",
          "Det finns ingen skillnad",
        ],
        correctIndex: 1,
        explanation:
          "Skönlitteratur (romaner, noveller, dikter) är fiktiv och konstnärlig, medan facklitteratur (läroböcker, uppslagsverk) syftar till att informera sakligt.",
      },
    ],
  },
  {
    id: "ret-teknik",
    title: "Retorisk teknik",
    description: "Testa dina kunskaper om retorik, argumentation och presentationsteknik.",
    level: "retorik",
    category: "Retorik",
    questions: [
      {
        id: "ret-q1",
        question: "Vilka är retorikens tre grundpelare?",
        options: [
          "Inledning, mittdel, avslutning",
          "Ethos, pathos, logos",
          "Argument, motargument, slutsats",
          "Tal, skrift, bild",
        ],
        correctIndex: 1,
        explanation:
          "Ethos (trovärdighet), pathos (känsla) och logos (logik) är retorikens tre grundpelare sedan Aristoteles.",
      },
      {
        id: "ret-q2",
        question: "Vad är en 'anafor'?",
        options: [
          "En överdrift",
          "En fråga utan svar",
          "Upprepning av samma ord i början av flera meningar",
          "En jämförelse",
        ],
        correctIndex: 2,
        explanation:
          "Anafor är en retorisk figur där samma ord eller fras upprepas i början av flera efter varandra följande meningar eller satser.",
      },
      {
        id: "ret-q3",
        question: "Vad kallas en fråga som ställs utan att man förväntar sig svar?",
        options: [
          "En slutsats",
          "En retorisk fråga",
          "En tes",
          "En hypotes",
        ],
        correctIndex: 1,
        explanation:
          "En retorisk fråga ställs för effektens skull — svaret är underförstått och syftar till att engagera och övertyga.",
      },
      {
        id: "ret-q4",
        question: "Vilken av dessa är ett exempel på 'pathos'?",
        options: [
          "Enligt forskning visar 85% att...",
          "Som professor i ämnet kan jag intyga att...",
          "Tänk på alla barn som går hungriga varje kväll!",
          "Om A leder till B, och B till C, så leder A till C.",
        ],
        correctIndex: 2,
        explanation:
          "Pathos appellerar till lyssnarens känslor genom berättelser, bilder och starka ord som väcker medkänsla.",
      },
      {
        id: "ret-q5",
        question: "Vad innebär 'kairos' i retoriken?",
        options: [
          "Att tala högt och tydligt",
          "Att välja rätt tidpunkt och sammanhang för sitt budskap",
          "Att använda logiska argument",
          "Att citera kända personer",
        ],
        correctIndex: 1,
        explanation:
          "Kairos handlar om tajming — att anpassa sitt budskap till rätt ögonblick och sammanhang för maximal effekt.",
      },
    ],
  },
  {
    id: "skr-produktion",
    title: "Textproduktion",
    description: "Testa dina kunskaper om skrivande, texttyper och språklig variation.",
    level: "skrivande",
    category: "Skrivande",
    questions: [
      {
        id: "skr-q1",
        question: "Vilken ordning ska styckena i en argumenterande text ha?",
        options: [
          "Slutsats, argument, inledning",
          "Inledning med tes, argument med stöd, avslutning med slutsats",
          "Argument, argument, argument",
          "Fråga, svar, fråga, svar",
        ],
        correctIndex: 1,
        explanation:
          "En argumenterande text följer strukturen: inledning med tes, argument med stöd och exempel, och avslutning med slutsats.",
      },
      {
        id: "skr-q2",
        question: "Vad är skillnaden mellan 'formellt' och 'informellt' språk?",
        options: [
          "Formellt språk har fler ord",
          "Formellt språk följer konventioner och undviker slang, medan informellt är vardagligt och avslappnat",
          "Informellt språk är alltid skrivet",
          "Det finns ingen riktig skillnad",
        ],
        correctIndex: 1,
        explanation:
          "Formellt språk är strukturerat, artigt och följer skriftliga konventioner. Informellt språk är vardagligt och kan innehålla slang.",
      },
      {
        id: "skr-q3",
        question: "Vad innebär 'show, don't tell' i kreativt skrivande?",
        options: [
          "Att använda bilder istället för text",
          "Att visa karaktärers känslor genom handlingar och detaljer istället för att direkt berätta dem",
          "Att aldrig använda adjektiv",
          "Att skriva så kort som möjligt",
        ],
        correctIndex: 1,
        explanation:
          "'Show, don't tell' innebär att man visar känslan genom handling, dialog och sinnesintryck istället för att direkt skriva 'han var ledsen'.",
      },
      {
        id: "skr-q4",
        question: "Hur avslutar man ett formellt brev på svenska?",
        options: [
          "Puss och kram!",
          "Hej!",
          "Med vänliga hälsningar,",
          "Ha det bra!",
        ],
        correctIndex: 2,
        explanation:
          "'Med vänliga hälsningar' är den vanligaste avslutningsfrasen i formella brev och mejl på svenska.",
      },
      {
        id: "skr-q5",
        question: "Vad är syftet med 'kamratrespons' (peer review)?",
        options: [
          "Att betygsätta varandras texter",
          "Att ge konstruktiv feedback för att hjälpa varandra förbättra sina texter",
          "Att kopiera varandras idéer",
          "Att hitta stavfel",
        ],
        correctIndex: 1,
        explanation:
          "Kamratrespons innebär att ge varandra konstruktiv feedback på texters innehåll, struktur och språk för ömsesidig förbättring.",
      },
    ],
  },
];

export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find((q) => q.id === id);
}

export function getQuizzesByLevel(level: string): Quiz[] {
  return quizzes.filter((q) => q.level === level);
}
