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
      {
        id: "sv1-q6",
        question: "Vad innebär 'lagom' i svensk kultur?",
        options: [
          "Att alltid ta mest",
          "Att ta lagom mycket — varken för lite eller för mycket",
          "Att vara tyst hela tiden",
          "Att alltid säga ja",
        ],
        correctIndex: 1,
        explanation:
          "'Lagom' är ett centralt svenskt begrepp som betyder 'precis rätt mängd' — balans och måttfullhet.",
      },
      {
        id: "sv1-q7",
        question: "Vilken mening använder korrekt ordföljd i en bisats?",
        options: [
          "Jag vet att han kommer inte idag.",
          "Jag vet att han inte kommer idag.",
          "Jag vet att inte han kommer idag.",
          "Jag vet att kommer han inte idag.",
        ],
        correctIndex: 1,
        explanation:
          "I svenska bisatser placeras negationen 'inte' före verbet: 'att han inte kommer'. Detta skiljer sig från huvudsatsens ordföljd.",
      },
      {
        id: "sv1-q8",
        question: "Vad är 'allemansrätten'?",
        options: [
          "En lag som förbjuder camping i naturen",
          "Rätten att rösta i svenska val",
          "Rätten att vistas i naturen, plocka bär och svamp, och tälta tillfälligt",
          "En skatt som alla måste betala",
        ],
        correctIndex: 2,
        explanation:
          "Allemansrätten ger alla rätt att vistas i naturen, plocka bär och svamp, och tälta tillfälligt — men med ansvar att inte störa eller förstöra.",
      },
      {
        id: "sv1-q9",
        question: "Vad betyder uttrycket 'det är ingen ko på isen'?",
        options: [
          "Det finns inga kor i Sverige",
          "Isen är för tunn att gå på",
          "Det är ingen fara, det är inte bråttom",
          "Det är mycket kallt ute",
        ],
        correctIndex: 2,
        explanation:
          "'Det är ingen ko på isen' är ett idiom som betyder att det inte finns någon anledning till oro — situationen är lugn.",
      },
      {
        id: "sv1-q10",
        question: "Hur tackar man artigt för maten i Sverige?",
        options: [
          "Det var gott!",
          "Tack för maten!",
          "Jag är klar.",
          "Bra mat.",
        ],
        correctIndex: 1,
        explanation:
          "'Tack för maten' är en viktig svensk etikettregel. Det anses oartigt att inte tacka den som lagat eller bjudit på maten.",
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
      {
        id: "sv2-q6",
        question: "Vad är ett 'motargument'?",
        options: [
          "Ett argument som stödjer den egna tesen",
          "Ett argument som bemöter eller ifrågasätter en annan persons ståndpunkt",
          "En sammanfattning av debatten",
          "Ett personangrepp",
        ],
        correctIndex: 1,
        explanation:
          "Ett motargument ifrågasätter eller bemöter en annan persons argument. Att kunna hantera motargument stärker den egna argumentationen.",
      },
      {
        id: "sv2-q7",
        question: "Vilken av följande meningar är korrekt formell svenska?",
        options: [
          "Vi vill typ ha mötet på tisdag.",
          "Det vore önskvärt att förlägga mötet till tisdag.",
          "Kan vi köra mötet på tisdag eller?",
          "Tisdag funkar bäst liksom.",
        ],
        correctIndex: 1,
        explanation:
          "Formellt språk kräver fullständiga meningar utan slang eller talspråk. 'Det vore önskvärt' är en lämplig formell formulering.",
      },
      {
        id: "sv2-q8",
        question: "Vad bör man undvika i ett CV?",
        options: [
          "Relevant arbetslivserfarenhet",
          "Kontaktuppgifter",
          "Irrelevanta personliga detaljer och felaktig information",
          "Utbildning och kompetenser",
        ],
        correctIndex: 2,
        explanation:
          "Ett CV ska vara relevant och sanningsenligt. Irrelevanta personliga detaljer och felaktig information skadar trovärdigheten.",
      },
      {
        id: "sv2-q9",
        question: "Vad innebär 'aktiv lyssning' i professionella sammanhang?",
        options: [
          "Att vara tyst medan andra pratar",
          "Att lyssna uppmärksamt, ställa följdfrågor och bekräfta att man förstått",
          "Att anteckna allt som sägs",
          "Att avbryta med egna åsikter",
        ],
        correctIndex: 1,
        explanation:
          "Aktiv lyssning innebär att man visar engagemang genom ögonkontakt, följdfrågor och bekräftelse — en nyckelkompetens i arbetslivet.",
      },
      {
        id: "sv2-q10",
        question: "Vad är syftet med en 'sammanfattning' i en rapport?",
        options: [
          "Att upprepa hela rapporten",
          "Att ge läsaren en kort överblick av rapportens huvudpunkter och slutsatser",
          "Att presentera ny information",
          "Att tacka läsaren",
        ],
        correctIndex: 1,
        explanation:
          "En sammanfattning ger en komprimerad överblick av rapportens syfte, metod, resultat och slutsatser så att läsaren snabbt förstår innehållet.",
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
      {
        id: "sv3-q6",
        question: "Vad är en 'abstrakt' i en vetenskaplig uppsats?",
        options: [
          "En lista över alla källor",
          "En kort sammanfattning av uppsatsens syfte, metod, resultat och slutsatser",
          "Uppsatsens inledning",
          "En bilaga med rådata",
        ],
        correctIndex: 1,
        explanation:
          "En abstrakt (sammanfattning) ger en komprimerad översikt av uppsatsens alla delar och hjälper läsaren att avgöra om texten är relevant.",
      },
      {
        id: "sv3-q7",
        question: "Vad innebär 'intersubjektivitet' inom vetenskapen?",
        options: [
          "Att bara en person kan förstå resultaten",
          "Att resultat ska kunna verifieras och förstås av andra forskare",
          "Att man använder flera språk",
          "Att man arbetar ensam",
        ],
        correctIndex: 1,
        explanation:
          "Intersubjektivitet innebär att vetenskapliga resultat ska vara transparenta och möjliga att granska och bekräfta av andra forskare.",
      },
      {
        id: "sv3-q8",
        question: "Vilket av följande är ett exempel på ett 'ad hominem'-argument?",
        options: [
          "Statistiken visar att utsläppen ökar.",
          "Du har fel eftersom du inte ens har en utbildning i ämnet.",
          "Enligt flera studier är effekten marginell.",
          "Om vi jämför med andra länder ser vi ett tydligt mönster.",
        ],
        correctIndex: 1,
        explanation:
          "Ad hominem innebär att man angriper personen istället för argumentet. Det är ett logiskt felslut som underminerar saklig debatt.",
      },
      {
        id: "sv3-q9",
        question: "Vad menas med 'diskurs' i akademiska sammanhang?",
        options: [
          "En enskild mening",
          "Ett sätt att tala om och förstå ett ämne inom en viss social eller kulturell kontext",
          "En grammatisk regel",
          "En typ av dikt",
        ],
        correctIndex: 1,
        explanation:
          "Diskurs avser det sätt vi talar om, skriver om och förstår världen inom specifika sociala och kulturella ramar.",
      },
      {
        id: "sv3-q10",
        question: "Vad är skillnaden mellan 'kvantitativ' och 'kvalitativ' metod?",
        options: [
          "Kvantitativ är bättre än kvalitativ",
          "Kvantitativ metod mäter med siffror och statistik, kvalitativ utforskar upplevelser och betydelser",
          "Kvalitativ metod använder bara enkäter",
          "Det finns ingen vetenskaplig skillnad",
        ],
        correctIndex: 1,
        explanation:
          "Kvantitativ metod samlar in mätbar data (siffror, statistik), medan kvalitativ metod utforskar mening, upplevelser och tolkningar genom exempelvis intervjuer.",
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
      {
        id: "lit-q6",
        question: "Vad är en 'liknelse' (simile)?",
        options: [
          "Ett bildligt uttryck utan jämförelseord",
          "En jämförelse med 'som' eller 'liksom', t.ex. 'stark som en björn'",
          "En motsägelse",
          "En upprepning av ljud",
        ],
        correctIndex: 1,
        explanation:
          "En liknelse är en jämförelse som använder 'som' eller 'liksom': 'Hon var snabb som vinden'. Till skillnad från metaforer markeras jämförelsen tydligt.",
      },
      {
        id: "lit-q7",
        question: "Vad innebär 'allvetande berättare'?",
        options: [
          "En berättare som bara vet vad huvudpersonen tänker",
          "En berättare som känner till alla karaktärers tankar, känslor och handlingar",
          "En berättare som är en av karaktärerna",
          "En berättare som bara beskriver det som syns utifrån",
        ],
        correctIndex: 1,
        explanation:
          "En allvetande (omniscient) berättare har tillgång till alla karaktärers inre liv och kan fritt röra sig mellan perspektiv.",
      },
      {
        id: "lit-q8",
        question: "Vilken litterär epok betonade vetenskap, förnuft och samhällskritik?",
        options: [
          "Romantiken",
          "Modernismen",
          "Upplysningen",
          "Postmodernismen",
        ],
        correctIndex: 2,
        explanation:
          "Upplysningen (ca 1700-talet) betonade förnuft, vetenskap och kritiskt tänkande. Författare som Voltaire och Rousseau ifrågasatte traditioner och makt.",
      },
      {
        id: "lit-q9",
        question: "Vad är 'symbolik' i en litterär text?",
        options: [
          "Att texten handlar om matematik",
          "Att konkreta ting eller händelser representerar abstrakta idéer eller känslor",
          "Att författaren använder många adjektiv",
          "Att texten är skriven i versform",
        ],
        correctIndex: 1,
        explanation:
          "Symbolik innebär att något konkret (t.ex. en röd ros) representerar något abstrakt (kärlek). Det ger texten djupare mening.",
      },
      {
        id: "lit-q10",
        question: "Vad kännetecknar modernistisk litteratur?",
        options: [
          "Strikt kronologisk ordning och tydlig handling",
          "Experimentellt språk, fragmentering och brott mot traditionella berättarformer",
          "Endast rimmat versmått",
          "Enbart historiska ämnen",
        ],
        correctIndex: 1,
        explanation:
          "Modernismen (tidigt 1900-tal) bröt med traditionella former genom strömmande medvetande, fragmentering och experimentellt språk.",
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
      {
        id: "ret-q6",
        question: "Vad är en 'antites'?",
        options: [
          "En upprepning av ord",
          "En motsatsställning av idéer för att skapa kontrast och effekt",
          "En fråga utan svar",
          "Ett citat från en känd person",
        ],
        correctIndex: 1,
        explanation:
          "Antites ställer motsatser mot varandra för retorisk effekt: 'Inte för att döda, utan för att rädda' — kontrasten förstärker budskapet.",
      },
      {
        id: "ret-q7",
        question: "Vad kallas det klassiska taleuppbyggnaden med fem delar?",
        options: [
          "Berättarstruktur",
          "Dispositionsmodellen: exordium, narratio, propositio, argumentatio, peroratio",
          "Trestegsmodellen",
          "Femaktsmodellen",
        ],
        correctIndex: 1,
        explanation:
          "Den klassiska retoriska dispositionen har fem delar: exordium (inledning), narratio (bakgrund), propositio (tes), argumentatio (argumentation) och peroratio (avslutning).",
      },
      {
        id: "ret-q8",
        question: "Vad är 'tretal' (trikolon) i retoriken?",
        options: [
          "Att hålla tre tal",
          "Att gruppera ord eller fraser i tre för rytm och slagkraft",
          "Att använda tre olika språk",
          "Att ha tre poänger i sitt tal",
        ],
        correctIndex: 1,
        explanation:
          "Trikolon är en retorisk figur där man grupperar tre ord, fraser eller satser: 'Jag kom, jag såg, jag segrade' — tretal skapar rytm och memorerbarhet.",
      },
      {
        id: "ret-q9",
        question: "Vad innebär 'halmgubbeargument' (straw man)?",
        options: [
          "Att använda bilder i sin argumentation",
          "Att förvränga motståndarens argument för att lättare kunna bemöta det",
          "Att använda humor i sitt tal",
          "Att bygga upp ett starkt argument",
        ],
        correctIndex: 1,
        explanation:
          "Halmgubbeargument innebär att man avsiktligt förvränger motståndarens ståndpunkt till en svagare version och sedan angriper den förvrängda versionen.",
      },
      {
        id: "ret-q10",
        question: "Vad menas med 'auctoritas' som retorisk strategi?",
        options: [
          "Att tala med hög röst",
          "Att hänvisa till erkända auktoriteter eller experter för att stärka sitt argument",
          "Att använda komplicerade ord",
          "Att berätta personliga anekdoter",
        ],
        correctIndex: 1,
        explanation:
          "Auctoritas innebär att man stärker sin argumentation genom att hänvisa till respekterade auktoriteter, experter eller trovärdiga källor.",
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
      {
        id: "skr-q6",
        question: "Vad är en 'krönika' för typ av text?",
        options: [
          "En nyhetsartikel",
          "En personlig och reflekterande text, ofta med en subjektiv röst",
          "En vetenskaplig rapport",
          "En bruksanvisning",
        ],
        correctIndex: 1,
        explanation:
          "En krönika är en personlig text där skribenten reflekterar över ett ämne med sin egen röst. Tonen kan vara humoristisk, allvarlig eller ironisk.",
      },
      {
        id: "skr-q7",
        question: "Vad innebär 'koherens' i en text?",
        options: [
          "Att texten är lång",
          "Att textens delar hänger ihop logiskt och bildar en meningsfull helhet",
          "Att texten har många skiljetecken",
          "Att varje stycke handlar om olika saker",
        ],
        correctIndex: 1,
        explanation:
          "Koherens betyder att textens idéer och stycken hänger ihop logiskt. Läsaren ska kunna följa tankekedjan utan förvirring.",
      },
      {
        id: "skr-q8",
        question: "Vilken av följande är en 'bisatsinledare'?",
        options: [
          "Men",
          "Och",
          "Eftersom",
          "Dessutom",
        ],
        correctIndex: 2,
        explanation:
          "'Eftersom' inleder en bisats och anger orsak. Bisatsinledare (subjunktioner) som 'att', 'om', 'när', 'eftersom' binder bisatsen till huvudsatsen.",
      },
      {
        id: "skr-q9",
        question: "Vad är en 'referatmarkör'?",
        options: [
          "Ett skiljetecken",
          "Ett uttryck som visar att man återger någon annans åsikt, t.ex. 'enligt' eller 'menar att'",
          "En typ av rubrik",
          "Ett fotnotstecken",
        ],
        correctIndex: 1,
        explanation:
          "Referatmarkörer som 'enligt', 'hävdar att', 'menar att' signalerar att man återger en annan persons tankar — viktigt för källhänvisning.",
      },
      {
        id: "skr-q10",
        question: "Vad bör man tänka på vid styckeindelning?",
        options: [
          "Varje mening ska vara ett eget stycke",
          "Varje stycke ska innehålla en huvudidé och stödjas av relaterade meningar",
          "Styckeindelning spelar ingen roll",
          "Alla stycken ska vara exakt lika långa",
        ],
        correctIndex: 1,
        explanation:
          "God styckeindelning innebär att varje stycke behandlar en huvudidé. Det skapar struktur och gör texten lättare att följa.",
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
