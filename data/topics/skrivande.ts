import type { Topic } from "@/lib/types";

export const skrivandeTopics: Topic[] = [
  {
    id: "skr-personligt",
    title: "Personligt skrivande",
    category: "Kreativt",
    lessons: [
      {
        id: "skr-personligt-1",
        title: "Dagboksskrivande",
        description:
          "Lär dig att uttrycka tankar, känslor och upplevelser i dagboksform. Dagboken är ett utmärkt verktyg för att utveckla ett personligt och reflekterande skriftspråk.",
        examples: [
          {
            swedish:
              "Idag kändes allt hopplöst. Mötet på jobbet gick inte alls som jag hade tänkt mig, och efteråt satt jag kvar vid skrivbordet med en klump i magen.",
            explanation:
              "Dagboken tillåter subjektiva uttryck och känslobeskrivningar. Ordet 'klump i magen' är ett idiomatiskt uttryck som förstärker den emotionella tonen.",
          },
          {
            swedish:
              "Det märkliga är att jag trots allt kände mig lättad när jag väl hade sagt det jag tyckte. Kanske behöver jag öva på att vara ärlig oftare.",
            explanation:
              "Reflektion genom självanalys är typiskt för dagboksskrivande. Användning av 'kanske' och 'behöver öva' visar inre dialog och osäkerhet.",
          },
          {
            swedish:
              "Solen sken genom fönstret och jag tänkte: varför sitter jag inne? Så jag tog cykeln och åkte ner till sjön. Bästa beslutet på länge.",
            explanation:
              "Korta, spontana meningar skapar en känsla av omedelbarhet. Fragmentet 'Bästa beslutet på länge' bryter medvetet mot fullständig meningsbyggnad för effekt.",
          },
        ],
        keyRules: [
          "Skriv i jag-form och var ärlig med dina känslor — dagboken är din privata yta.",
          "Blanda beskrivningar av händelser med reflektioner och tankar.",
          "Våga använda talspråk och ofullständiga meningar för att skapa autenticitet.",
          "Använd sinnesintryck (syn, hörsel, lukt) för att göra texten levande.",
        ],
      },
      {
        id: "skr-personligt-2",
        title: "Personliga brev och meddelanden",
        description:
          "Skriv personliga brev och meddelanden som känns genuina och varma. Lär dig skillnaden mellan informellt och halvformellt tonfall i personlig korrespondens.",
        examples: [
          {
            swedish:
              "Kära mormor, tack för det fina kortet du skickade! Det värmde verkligen att höra från dig. Här hemma är allt bra — barnen växer som ogräs och längtar efter att hälsa på dig i sommar.",
            explanation:
              "Personliga brev till äldre släktingar blandar värme med respekt. Uttrycket 'växer som ogräs' är en vanlig liknelse som skapar en lättsam ton.",
          },
          {
            swedish:
              "Hej Lisa! Jag har tänkt på dig hela veckan. Hur gick det med intervjun? Hör av dig när du har tid — vi kan ta en fika och prata ordentligt.",
            explanation:
              "Informella meddelanden till vänner är raka och spontana. 'Ta en fika' är en typiskt svensk formulering som signalerar avslappnat umgänge.",
          },
          {
            swedish:
              "Jag vill bara säga att det du gjorde igår betydde mycket för mig. Ibland glömmer man bort hur viktigt det är att ha någon som lyssnar.",
            explanation:
              "Tacksamhetsmeddelanden kräver balans mellan ärlighet och lagom emotionell intensitet. 'Ibland glömmer man' generaliserar känslan och gör den mer relaterbar.",
          },
        ],
        keyRules: [
          "Anpassa tonen efter mottagaren — mer respektfull till äldre, mer avslappnad till jämnåriga.",
          "Inled med något personligt eller en referens till senaste kontakten.",
          "Avsluta med en öppning för fortsatt kontakt, till exempel en fråga eller ett förslag.",
          "Undvik klichéer — skriv med din egen röst för att skapa äkthet.",
        ],
      },
      {
        id: "skr-personligt-3",
        title: "Reflekterande essäer",
        description:
          "Skriv personliga essäer där du utforskar en tanke eller erfarenhet på djupet. Den reflekterande essän kombinerar berättande med analys och är en viktig genre för avancerat skrivande.",
        examples: [
          {
            swedish:
              "Att flytta till ett nytt land handlar inte bara om att lära sig ett språk eller hitta ett jobb. Det handlar om att omförhandla sin identitet, bit för bit.",
            explanation:
              "En stark inledning som lyfter temat från det konkreta till det abstrakta. Metaforen 'bit för bit' förstärker processens långsamhet.",
          },
          {
            swedish:
              "Jag minns hur jag stod i kön på ICA och inte kunde namnet på persilja. Det var en liten sak, men i det ögonblicket kände jag mig som ett barn igen — beroende av andras hjälp.",
            explanation:
              "En konkret anekdot ger texten trovärdighet och känslomässig resonans. Jämförelsen 'som ett barn' understryker känslan av hjälplöshet.",
          },
        ],
        keyRules: [
          "Börja med en personlig upplevelse och vidga perspektivet till något allmänmänskligt.",
          "Växla mellan berättande partier och reflekterande passager.",
          "Använd konkreta detaljer för att förankra abstrakta resonemang.",
          "Avsluta med en insikt eller en öppen fråga som lämnar läsaren med något att tänka på.",
          "Undvik att dra alltför definitiva slutsatser — den reflekterande essän lever i nyanser.",
        ],
      },
    ],
  },
  {
    id: "skr-berattande",
    title: "Berättande texter",
    category: "Kreativt",
    lessons: [
      {
        id: "skr-berattande-1",
        title: "Novellens grundläggande struktur",
        description:
          "Lär dig att bygga upp en novell med tydlig struktur: inledning, upptrappning, klimax och upplösning. Förstå hur varje del bidrar till helheten.",
        examples: [
          {
            swedish:
              "Klockan var halv fem på morgonen när telefonen ringde. Anna visste genast att det var dåliga nyheter — ingen ringer så tidigt med goda.",
            explanation:
              "En effektiv öppning som skapar spänning genom tid och föraning. Berättarens antagande ('ingen ringer så tidigt med goda') drar in läsaren i handlingen.",
          },
          {
            swedish:
              "Han stod framför dörren i tio minuter innan han vågade knacka. Innanför hördes musik — samma låt som de hade lyssnat på den där sommarkvällen för tre år sedan.",
            explanation:
              "Scenen bygger spänning genom fördröjning och nostalgi. Musiken fungerar som en brygga mellan nutid och förflutet, vilket skapar emotionellt djup.",
          },
          {
            swedish:
              "Hon la tillbaka brevet i lådan utan att läsa klart. Vissa sanningar var lättare att bära när de förblev osagda.",
            explanation:
              "En avslutning som lämnar läsaren med en känsla av oavslutad handling. Den sista meningen fungerar som ett tematiskt uttalande om sanning och tystnad.",
          },
        ],
        keyRules: [
          "Börja in medias res — mitt i handlingen — för att fånga läsarens uppmärksamhet direkt.",
          "Begränsa antalet karaktärer i novellen; fokusera på en central konflikt.",
          "Använd 'visa, inte berätta' — låt handlingar och detaljer avslöja känslor.",
          "Avslutningen behöver inte lösa allt — en öppen slutsats kan vara mer kraftfull.",
        ],
      },
      {
        id: "skr-berattande-2",
        title: "Dialog och karaktärsskildring",
        description:
          "Lär dig att skriva övertygande dialog som avslöjar karaktärers personlighet och driver handlingen framåt. Utforska tekniker för att ge varje figur en unik röst.",
        examples: [
          {
            swedish:
              "\"Du behöver inte förklara\", sa hon och vände sig bort. \"Jo\", svarade han tyst. \"Det behöver jag visst.\"",
            explanation:
              "Kort dialog med kroppsspråk ('vände sig bort') som förstärker den emotionella spänningen. De korta replikerna skapar tydlig dynamik mellan karaktärerna.",
          },
          {
            swedish:
              "\"Har du ätit?\" Det var mormors sätt att säga 'jag har saknat dig'. Hon frågade aldrig rakt ut, men köket doftade alltid av nybakat när jag kom.",
            explanation:
              "Indirekt karaktärsskildring genom vanor och undertext. Berättarens tolkning av mormors fråga avslöjar deras relation utan explicit beskrivning.",
          },
          {
            swedish:
              "\"Jamen asså, det var typ helt sjukt\", sa Lina och slog ut med armarna. Martin suckade. \"Kan du vara lite mer specifik?\"",
            explanation:
              "Kontrasten mellan Linas talspråkliga stil och Martins formella ton definierar karaktärerna. Dialekten avslöjar ålder, bakgrund och personlighet.",
          },
        ],
        keyRules: [
          "Varje karaktär bör ha en distinkt röst — ordval, meningslängd och tonfall ska skilja sig åt.",
          "Använd dialogtaggar sparsamt; variera med handlingsbeskrivningar istället för 'sa han/hon'.",
          "Låt dialogen göra dubbelt arbete — den ska både avslöja karaktär och driva handlingen framåt.",
          "Undvik onaturligt lång dialog som egentligen är dold exposition.",
          "Läs dialogen högt för att kontrollera att den låter trovärdig.",
        ],
      },
      {
        id: "skr-berattande-3",
        title: "Miljö- och stämningsskapande",
        description:
          "Utforska hur miljöbeskrivningar skapar stämning och förstärker berättelsens tema. Lär dig att använda sinnesintryck strategiskt.",
        examples: [
          {
            swedish:
              "Regnet hade hållit på i tre dagar. Gatorna glänste som oljiga speglar och luften luktade av våt asfalt och förmultnande löv. Ingenstans att gå, ingenstans att gömma sig.",
            explanation:
              "Miljön speglar en känsla av instängdhet. Sinnesintrycken (syn, lukt) samverkar med de upprepade 'ingenstans' för att skapa en klaustrofobisk atmosfär.",
          },
          {
            swedish:
              "Stugan låg inklämd mellan tallarna som om skogen försökte svälja den. Fönstren var igenvuxna av murgröna, och inifrån hördes bara tickandet från en klocka som gått fel.",
            explanation:
              "Personifieringen av skogen ('försökte svälja') och den feljusterade klockan antyder förfall och tidens gång. Miljön förebådar att något är annorlunda.",
          },
        ],
        keyRules: [
          "Låt miljön spegla karaktärernas inre tillstånd — en teknik som kallas 'pathetic fallacy'.",
          "Använd alla sinnen, inte bara synen — ljud, doft och känsel skapar djup.",
          "Undvik långa beskrivande passager utan koppling till handling eller känsla.",
          "Välj specifika detaljer framför generella beskrivningar: 'ett ensamt kafé vid hamnen' snarare än 'en plats i staden'.",
        ],
      },
    ],
  },
  {
    id: "skr-formella-brev",
    title: "Formella brev & e-mail",
    category: "Professionellt",
    lessons: [
      {
        id: "skr-formella-1",
        title: "Formella brevets struktur och tonfall",
        description:
          "Lär dig konventionerna för formella brev i Sverige: hälsningsfraser, avslutningar, rätt tonfall och korrekt layout. Förstå skillnaden mellan byråkratiskt och professionellt språk.",
        examples: [
          {
            swedish:
              "Till ansvarig handläggare,\n\nJag skriver med anledning av ert beslut daterat 2025-03-15 gällande min ansökan om bygglov (dnr 2025-0342). Jag vill härmed överklaga beslutet och ber om en omprövning.",
            explanation:
              "Formellt brev till myndighet med tydlig referens till ärendenummer och datum. Formuleringen 'Jag skriver med anledning av' är standardfras i formell korrespondens.",
          },
          {
            swedish:
              "Tack för ert svar. Jag förstår att handläggningstiden kan variera, men jag skulle uppskatta en ungefärlig tidsuppskattning så att jag kan planera därefter. Vänligen kontakta mig på nedanstående uppgifter.",
            explanation:
              "Artigt men bestämt tonfall. 'Jag skulle uppskatta' är mjukare än 'jag kräver' och visar respekt utan att ge upp sin ståndpunkt.",
          },
          {
            swedish:
              "Med vänliga hälsningar,\nAnna Lindström\nTel: 070-123 45 67\nE-post: anna.lindstrom@exempel.se",
            explanation:
              "Standardavslutning i formella brev. 'Med vänliga hälsningar' är den vanligaste formella avslutningen i svenskt yrkesliv.",
          },
        ],
        keyRules: [
          "Använd 'Med vänliga hälsningar' som standardavslutning; 'Vänligen' eller 'Högaktningsfullt' för extra formella sammanhang.",
          "Ange alltid ärendenummer, datum och referens när du skriver till myndigheter.",
          "Håll tonen saklig och artig — undvik emotionella uttryck även vid klagomål.",
          "Strukturera brevet: anledning, bakgrund, önskan/begäran, avslutning.",
          "Använd aktiv form ('Jag begär') snarare än passiv ('Det begärs härmed') för tydlighet.",
        ],
      },
      {
        id: "skr-formella-2",
        title: "Professionella e-postmeddelanden",
        description:
          "Skriv tydliga, effektiva e-postmeddelanden i arbetslivet. Lär dig att anpassa tonen efter mottagare och syfte, och förstå de oskrivna reglerna i svensk e-postkultur.",
        examples: [
          {
            swedish:
              "Ämne: Uppföljning — möte om projektplan 12 april\n\nHej Karin,\n\nTack för ett bra möte igår. Bifogat hittar du de uppdaterade tidsplanerna som vi diskuterade. Kan du återkomma med synpunkter senast fredag?",
            explanation:
              "Ämnesraden är specifik och informativ. Tonen är vänlig men effektiv med en tydlig handlingsuppmaning ('Kan du återkomma senast fredag?').",
          },
          {
            swedish:
              "Hej alla,\n\nVi behöver skjuta upp torsdagens workshop till nästa vecka på grund av sjukdom. Nytt datum blir torsdag 24 april kl. 10:00. Meddela om det inte fungerar.\n\nMvh, Erik",
            explanation:
              "Kort och koncist gruppmeddelande. 'Mvh' (med vänlig hälsning) är en vedertagen förkortning i informella arbetsmail. Essentiell information först.",
          },
        ],
        keyRules: [
          "Skriv en specifik ämnesrad — den ska sammanfatta e-postens syfte i en rad.",
          "I svensk arbetskultur är 'Hej + förnamn' standard; 'Bäste/Bästa' används sällan utom i mycket formella sammanhang.",
          "Håll e-posten kort: en huvudsaklig poäng per meddelande.",
          "Avsluta med en tydlig förväntning — vad vill du att mottagaren ska göra, och när?",
        ],
      },
    ],
  },
  {
    id: "skr-argumenterande",
    title: "Argumenterande texter",
    category: "Debatt",
    lessons: [
      {
        id: "skr-argumenterande-1",
        title: "Att bygga ett övertygande argument",
        description:
          "Lär dig att strukturera argumenterande texter med tes, argument, motargument och slutsats. Förstå hur logik, retorik och ethos samverkar i svensk debattradition.",
        examples: [
          {
            swedish:
              "Det råder ingen tvekan om att distansarbete har kommit för att stanna. Men frågan är inte om vi ska arbeta hemifrån, utan hur vi gör det utan att förlora den sociala sammanhållning som fysiska arbetsplatser erbjuder.",
            explanation:
              "Inledningen erkänner motståndarsidans position ('distansarbete har kommit för att stanna') innan den preciserar sin egen tes. Detta skapar trovärdighet och nyanserar debatten.",
          },
          {
            swedish:
              "Enligt en studie från Stockholms universitet (2024) rapporterar 67 % av distansarbetare ökad produktivitet. Samtidigt visar samma studie att känslan av ensamhet har fördubblats sedan 2020.",
            explanation:
              "Källhänvisning stärker argumentet. Att presentera båda sidor av statistiken visar intellektuell hederlighet och gör texten mer trovärdig.",
          },
          {
            swedish:
              "Kritiker menar att obligatorisk kontorsnärvaro inskränker anställdas frihet. Det är ett viktigt perspektiv, men det bortser från att arbetsplatsens syfte inte bara är individuell produktivitet — det handlar också om organisationskultur och gemensamt lärande.",
            explanation:
              "Motargumentet bemöts respektfullt ('Det är ett viktigt perspektiv') innan det vänds. Tekniken kallas 'koncession' och är central i akademisk argumentation.",
          },
        ],
        keyRules: [
          "Formulera en tydlig tes tidigt i texten — läsaren ska veta vad du vill argumentera för.",
          "Använd minst ett motargument och bemöt det sakligt; att ignorera motståndarsidan försvagar din position.",
          "Stöd dina argument med fakta, exempel eller auktoritetsreferenser.",
          "Avsluta med en slutsats som kopplar tillbaka till tesen och summerar de starkaste argumenten.",
          "Undvik generaliseringar som 'alla tycker' eller 'det är uppenbart att' — de underminerar trovärdigheten.",
        ],
      },
      {
        id: "skr-argumenterande-2",
        title: "Debattartikeln som genre",
        description:
          "Skriv debattartiklar anpassade för svenska medier. Lär dig genrens konventioner: ett tydligt ställningstagande, slagkraftig rubrik och en stark avslutning med handlingsuppmaning.",
        examples: [
          {
            swedish:
              "Rubrik: Sluta prata om integration — börja agera\n\nVarje valår återkommer samma löften om integration. Men efter decennier av utredningar och handlingsplaner är det dags att fråga sig: vad har egentligen förändrats?",
            explanation:
              "Rubriken använder ett imperativ ('Sluta', 'börja') som skapar kraft och omedelbarhet. Inledningen ifrågasätter status quo med en retorisk fråga.",
          },
          {
            swedish:
              "Vi kräver därför att regeringen inför tre konkreta åtgärder: obligatorisk språkpraktik inom sex månader, mentorprogram på varje arbetsplats med fler än femtio anställda, och en nationell utvärdering av befintliga insatser senast 2027.",
            explanation:
              "Avslutningen presenterar specifika krav i punktform. Konkretionen ('sex månader', 'femtio anställda', 'senast 2027') gör kraven mätbara och trovärdiga.",
          },
        ],
        keyRules: [
          "Rubriken ska väcka intresse och signalera ståndpunkt — den är din viktigaste mening.",
          "Inled med något som bryter förväntan: en provocerande fråga, en överraskande statistik eller ett personligt vittnesbörd.",
          "Skriv i 'vi'-form om du representerar en grupp, i 'jag'-form om du skriver som privatperson.",
          "Avsluta med en tydlig handlingsuppmaning — vad vill du att läsaren eller beslutsfattare ska göra?",
        ],
      },
      {
        id: "skr-argumenterande-3",
        title: "Retoriska verktyg i skrift",
        description:
          "Fördjupa dig i retoriska grepp som stärker din skriftliga argumentation: anafor, antites, retoriska frågor och tretal.",
        examples: [
          {
            swedish:
              "Vi kan inte vänta längre. Vi kan inte blunda längre. Vi kan inte låta politikerna bestämma vår framtid utan att ställa dem till svars.",
            explanation:
              "Anafor — upprepningen av 'Vi kan inte' — skapar rytm och emotionell kraft. Tretalet (tre påståenden) ger en känsla av fullständighet och övertygelse.",
          },
          {
            swedish:
              "Frågan är inte om klimatkrisen är verklig. Frågan är om vi har modet att göra det som krävs.",
            explanation:
              "En retorisk omformulering som flyttar fokus från fakta till handling. Antitesen ('inte om... utan om') tvingar läsaren att ompröva sin position.",
          },
          {
            swedish:
              "Det är billigare att förebygga än att bota. Det är klokare att investera i utbildning idag än att betala för sociala problem imorgon.",
            explanation:
              "Parallellism (identisk meningsstruktur) kombinerat med antites (förebygga/bota, idag/imorgon) skapar ett övertygande retoriskt mönster.",
          },
        ],
        keyRules: [
          "Använd anafor (upprepning av inledande ord) för att bygga rytm och betoning.",
          "Retoriska frågor fungerar bäst när svaret är underförstått — överanvänd dem inte.",
          "Tretal (tre parallella påståenden) upplevs som mer övertygande än två eller fyra.",
          "Kombinera logos (fakta), ethos (trovärdighet) och pathos (känsla) för maximal effekt.",
        ],
      },
    ],
  },
  {
    id: "skr-analytiska",
    title: "Analytiska texter",
    category: "Akademiskt",
    lessons: [
      {
        id: "skr-analytiska-1",
        title: "Akademisk analys och uppsatsstruktur",
        description:
          "Lär dig att skriva analytiska texter med akademisk stringens. Förstå strukturen: inledning med frågeställning, teoriavsnitt, analys, resultat och slutsats.",
        examples: [
          {
            swedish:
              "Syftet med denna uppsats är att undersöka hur sociala medier påverkar ungdomars självbild, med särskilt fokus på Instagram och TikTok. Studien bygger på en kvalitativ analys av tio semistrukturerade intervjuer med gymnasieelever i Stockholmsområdet.",
            explanation:
              "Akademisk inledning med tydligt syfte, avgränsning och metodbeskrivning. Formuleringen 'med särskilt fokus på' visar hur forskaren avgränsar sitt ämne.",
          },
          {
            swedish:
              "Resultaten visar att majoriteten av informanterna upplever en diskrepans mellan sin 'digitala' och sin 'verkliga' identitet. Detta kan tolkas utifrån Goffmans teori om frontstage och backstage, där den digitala presentationen fungerar som en medvetet konstruerad fasad.",
            explanation:
              "Analysen kopplar empiriska resultat till etablerad teori. Referensen till Goffman visar hur akademisk text alltid relaterar nya fynd till befintlig kunskap.",
          },
        ],
        keyRules: [
          "Formulera en tydlig frågeställning som styr hela texten — allt du skriver ska relatera till den.",
          "Använd opersonligt språk ('resultaten visar', 'det framgår') snarare än 'jag tycker'.",
          "Referera alltid till tidigare forskning för att placera din analys i ett större sammanhang.",
          "Skilj tydligt mellan dina egna tolkningar och det som fakta eller data visar.",
          "Avsluta med en diskussion som lyfter fram begränsningar och föreslår vidare forskning.",
        ],
      },
      {
        id: "skr-analytiska-2",
        title: "Källhantering och referensteknik",
        description:
          "Förstå hur du refererar korrekt i akademiska texter, undviker plagiat och integrerar andras forskning i ditt eget resonemang.",
        examples: [
          {
            swedish:
              "Enligt Svensson (2023) har den digitala klyftan i Sverige minskat avsevärt under det senaste decenniet, men kvarstår bland äldre medborgare i glesbygden (s. 45).",
            explanation:
              "Harvardsystemet: författarnamn, årtal och sidnummer i löpande text. 'Enligt' signalerar att det är en återgivning av annans forskning.",
          },
          {
            swedish:
              "Tidigare forskning har visat att tvåspråkiga barn utvecklar starkare metakognitiva förmågor (Bialystok, 2017; García & Wei, 2021). Dessa resultat stöder antagandet att flerspråkighet är en kognitiv fördel snarare än en belastning.",
            explanation:
              "Flera källor samlas i samma parentes för att visa att påståendet har brett vetenskapligt stöd. Den efterföljande meningen visar författarens egen tolkning.",
          },
          {
            swedish:
              "Som Nussbaum uttrycker det: 'Utbildningens syfte är inte att producera nyttiga medborgare, utan att skapa människor som kan tänka kritiskt och leva med medkänsla' (2010, s. 12).",
            explanation:
              "Direkt citat med exakt sidangivelse. Kolon och citattecken markerar att det är ordagrant återgivet. Direkta citat bör användas sparsamt och motiveras.",
          },
        ],
        keyRules: [
          "Använd konsekvent ett referenssystem (Harvard, APA eller Oxford) genom hela texten.",
          "Parafrasera hellre än citera — det visar att du förstått materialet, inte bara kopierat det.",
          "Ange alltid källa när du återger fakta, statistik eller andras åsikter.",
          "Direkta citat ska vara korta och motiverade — citera bara när formuleringen i sig är viktig.",
          "Skapa en komplett referenslista i slutet som matchar alla referenser i texten.",
        ],
      },
      {
        id: "skr-analytiska-3",
        title: "Kritiskt resonemang i text",
        description:
          "Utveckla förmågan att resonera kritiskt i skriftlig form. Lär dig att identifiera antaganden, bedöma bevisens styrka och formulera välgrundade slutsatser.",
        examples: [
          {
            swedish:
              "Regeringens rapport hävdar att sysselsättningen har ökat med 3 % sedan reformens genomförande. Dock redovisas inte hur stor del av ökningen som beror på tillfälliga anställningar, vilket gör det svårt att bedöma reformens faktiska effekt på arbetsmarknadens stabilitet.",
            explanation:
              "Kritisk granskning av statistik genom att ifrågasätta vad som inte redovisas. Orden 'dock' och 'vilket gör det svårt' visar på analytiskt förhållningssätt.",
          },
          {
            swedish:
              "Det finns ett underliggande antagande i debatten att ekonomisk tillväxt per automatik leder till ökat välbefinnande. Men forskning om lycka och livskvalitet visar en mer komplex bild: efter en viss inkomstnivå avtar sambandet markant.",
            explanation:
              "Texten identifierar ett implicit antagande och problematiserar det med hjälp av forskning. 'Mer komplex bild' signalerar nyansering snarare än fullständig förkastning.",
          },
        ],
        keyRules: [
          "Ifrågasätt alltid underliggande antaganden i de påståenden du analyserar.",
          "Skilj mellan korrelation och kausalitet — att två saker samvarierar bevisar inte orsakssamband.",
          "Erkänn begränsningar i din egen analys; det stärker snarare än försvagar din trovärdighet.",
          "Använd signalord som 'dock', 'emellertid', 'å andra sidan' för att visa kritisk distans.",
        ],
      },
    ],
  },
  {
    id: "skr-kreativt",
    title: "Kreativt skrivande",
    category: "Kreativt",
    lessons: [
      {
        id: "skr-kreativt-1",
        title: "Bildspråk och metaforer",
        description:
          "Utforska bildspråkets kraft i kreativt skrivande. Lär dig att använda metaforer, liknelser och symbolik för att skapa djup och originalitet i dina texter.",
        examples: [
          {
            swedish:
              "Tiden var en tjuv som stal minuter ur hennes dagar — så tyst att hon aldrig märkte det förrän kvällen kom och händerna var tomma.",
            explanation:
              "Personifiering av tiden som en tjuv, utbyggd genom hela meningen. 'Tomma händer' symboliserar brist på åstadkommet och förstärker metaforen.",
          },
          {
            swedish:
              "Hans röst var som grus i en glasburk — hård, skrapig och omöjlig att ignorera.",
            explanation:
              "En liknelse med 'som' som kombinerar ljud (grus) med kärl (glasburk). De tre adjektiven ('hård, skrapig, omöjlig') bygger upp bilden stegvis.",
          },
          {
            swedish:
              "Staden andades ut när regnet till slut kom. Trottoarerna glänsande, taken doftade av jord, och barnen sprang ut som om de släpptes fria ur ett bur.",
            explanation:
              "Personifieringen av staden ('andades ut') skapar en känsla av kollektiv lättnad. Liknelsen med buren förstärker kontrasten mellan instängdhet och frihet.",
          },
        ],
        keyRules: [
          "Undvik döda metaforer ('ett hav av möjligheter') — sök originalitet genom egna bilder.",
          "En bra metafor överraskar och belyser — den får läsaren att se det bekanta på nytt sätt.",
          "Blanda inte metaforer: om tiden är en tjuv kan den inte samtidigt vara en flod.",
          "Använd konkreta sinnesintryck som grund för abstrakt bildspråk.",
          "Liknelser ('som', 'liksom') är tydligare; metaforer ('är', utan jämförelseord) är starkare men kräver mer precision.",
        ],
      },
      {
        id: "skr-kreativt-2",
        title: "Poetiskt prosa och rytm",
        description:
          "Lär dig att skriva prosa med poetisk medvetenhet. Utforska hur ordval, meningslängd och upprepning skapar rytm och musikalitet i text.",
        examples: [
          {
            swedish:
              "Hon gick. Steg för steg. Nerför backen, förbi kyrkan, längs stigen där körsbärsträden tappat sina blad. Hon gick tills fötterna värkte och tankarna tystnade.",
            explanation:
              "Korta meningar och upprepningen av 'hon gick' skapar en meditativ rytm. Prepositionsfraserna ('nerför', 'förbi', 'längs') bygger en visuell resa.",
          },
          {
            swedish:
              "Natten lade sig som ett tungt täcke över byn. Hundarna teg. Grillorna sjöng. Och någonstans i mörkret brann ett ensamt ljus — ett fönster som vägrade somna.",
            explanation:
              "Kontrasten mellan korta satser ('Hundarna teg. Grillorna sjöng.') och den längre avslutningen skapar dynamik. Personifieringen av fönstret ('vägrade somna') ger bilden liv.",
          },
        ],
        keyRules: [
          "Variera meningslängden medvetet — korta meningar skapar tempo, långa skapar flöde.",
          "Upprepning av ord eller strukturer skapar rytm, men ska användas medvetet och sparsamt.",
          "Läs din text högt — örat upptäcker sådant ögat missar.",
          "Undvik adjektivstaplingar; välj ett precist ord framför tre ungefärliga.",
        ],
      },
    ],
  },
  {
    id: "skr-manus",
    title: "Manus & scenarier",
    category: "Kreativt",
    lessons: [
      {
        id: "skr-manus-1",
        title: "Manus för film och teater",
        description:
          "Lär dig grunderna i manusformat: scenanvisningar, dialogstruktur och berättartempo. Förstå hur manus skiljer sig från prosa och hur du skriver för att bli spelad.",
        examples: [
          {
            swedish:
              "INT. KÖKSBORD — MORGON\n\nELSA (42) sitter vid köksbordet i morgonrock. Bredvid henne ligger en oöppnad tidning. Hon stirrar ut genom fönstret.\n\nELSA\n(tyst, nästan för sig själv)\nDet var inte meningen att det skulle bli så här.",
            explanation:
              "Standardformat för filmmanus: platsangivelse (INT./EXT.), karaktärspresentation med ålder, scenanvisning i kursiv och dialog centrerad. Parentetisk anvisning ger regi åt skådespelaren.",
          },
          {
            swedish:
              "KARL kommer in. Han stannar i dörröppningen. Ser tidningen. Ser Elsa.\n\nKARL\nHar du inte öppnat den?\n\nELSA\n(utan att vända sig om)\nHar du?\n\nPaus. Karl sätter sig. De tittar inte på varandra.",
            explanation:
              "Dialogen bygger spänning genom det osagda. 'Paus' och 'De tittar inte på varandra' är scenanvisningar som kommunicerar lika mycket som orden.",
          },
        ],
        keyRules: [
          "Skriv i presens — manus utspelar sig alltid i nuet.",
          "Scenanvisningar ska vara kortfattade och visuella: beskriv det vi ser och hör, inte tankar.",
          "Varje scen ska ha en tydlig funktion — driva handlingen framåt eller avslöja karaktär.",
          "Undvik 'on the nose'-dialog där karaktärer säger exakt vad de menar; undertext är kraftfullare.",
          "Använd VERSALER första gången en karaktär introduceras.",
        ],
      },
      {
        id: "skr-manus-2",
        title: "Scenarier och rollspelstexter",
        description:
          "Skriv scenarier för presentationer, rollspel och pedagogiska övningar. Lär dig att skapa realistiska situationer med tydliga roller och mål.",
        examples: [
          {
            swedish:
              "Scenario: Missnöjd kund\n\nRoll A (kund): Du köpte en jacka för 1 200 kr för tre veckor sedan. Nu har dragkedjan gått sönder. Du har inget kvitto men har betalat med kort. Du vill ha pengarna tillbaka.\n\nRoll B (butiksanställd): Returnpolicyn kräver kvitto och retur inom 14 dagar. Du vill hjälpa men kan inte bryta mot reglerna utan chefens godkännande.",
            explanation:
              "Scenariot ger varje roll tydlig motivation och begränsning, vilket skapar naturlig konflikt. Specifika detaljer (pris, tid, betalningssätt) gör situationen konkret.",
          },
          {
            swedish:
              "Scenario: Lönesamtal\n\nKontext: Du har arbetat på företaget i två år utan löneökning. Dina arbetsuppgifter har utökats väsentligt sedan du började.\n\nMål: Argumentera för en löneökning på minst 3 000 kr/månad. Var beredd att motivera med konkreta exempel.",
            explanation:
              "Pedagogiskt scenario med kontextbeskrivning, tydligt mål och instruktion om förberedelse. Formatet passar utmärkt för språkövningar i arbetslivssvenska.",
          },
        ],
        keyRules: [
          "Ge varje roll en tydlig bakgrund, motivation och mål — konflikten uppstår naturligt.",
          "Inkludera kontextbeskrivning så att deltagarna förstår situationen direkt.",
          "Undvik att skriva exakta repliker — scenariot ska ge utrymme för improvisation.",
          "Balansera rollerna så att ingen har ett tydligt 'rätt svar' — det skapar bättre diskussion.",
        ],
      },
    ],
  },
  {
    id: "skr-textredigering",
    title: "Textredigering & förbättring",
    category: "Skrivande",
    lessons: [
      {
        id: "skr-textredigering-1",
        title: "Att redigera sin egen text",
        description:
          "Lär dig att systematiskt förbättra dina texter genom redigering. Förstå skillnaden mellan makro- och mikroredigering och utveckla ett kritiskt öga för ditt eget skrivande.",
        examples: [
          {
            swedish:
              "Före: Det var en väldigt intressant och viktig fråga som berörde många olika aspekter av det komplexa ämnet.\nEfter: Frågan berörde flera aspekter av ämnet.",
            explanation:
              "Redigeringen tar bort utfyllnadsord ('väldigt', 'intressant och viktig'), tomma förstärkare och onödig upprepning. Resultatet är tydligare och mer kraftfullt.",
          },
          {
            swedish:
              "Före: Man kan konstatera att det finns anledning att anta att situationen eventuellt kan komma att förändras.\nEfter: Situationen kommer sannolikt att förändras.",
            explanation:
              "Originalet innehåller fyra osäkerhetsmarkörer och en passiv konstruktion. Redigeringen eliminerar 'hedge-ord' och formulerar påståendet direkt.",
          },
          {
            swedish:
              "Före: Hon gick till affären. Hon köpte mjölk. Hon gick hem igen.\nEfter: Hon svängde förbi affären, köpte mjölk och gick hem.",
            explanation:
              "Tre korta monotona meningar slås samman till en sammansatt mening med bättre flyt. 'Svängde förbi' ersätter 'gick till' och tillför en nyans av vardaglighet.",
          },
        ],
        keyRules: [
          "Redigera i omgångar: först struktur och innehåll (makro), sedan språk och stil (mikro).",
          "Låt texten vila minst en dag innan du redigerar — du ser mer med fräscha ögon.",
          "Läs texten högt för att upptäcka onaturliga formuleringar och hackig rytm.",
          "Ta bort allt som inte tillför mening — 'kill your darlings' gäller även för enskilda ord.",
          "Fråga dig för varje stycke: behöver läsaren den här informationen just här?",
        ],
      },
      {
        id: "skr-textredigering-2",
        title: "Vanliga språkfel och hur du undviker dem",
        description:
          "Identifiera och korrigera vanliga skrivfel i svenska: särskrivningar, syftningsfel, tempusbrott och ordföljdsproblem.",
        examples: [
          {
            swedish:
              "Fel: 'Fritids aktiviteter' (särskrivning)\nRätt: 'Fritidsaktiviteter'\n\nFel: 'Grön saks soppa'\nRätt: 'Grönsakssoppa'",
            explanation:
              "Särskrivning är ett av de vanligaste felen i modern svenska. Sammansatta ord skrivs ihop: substantiv + substantiv = ett ord.",
          },
          {
            swedish:
              "Fel: 'Lisa berättade för Karin att hon var gravid.' (Vem är gravid — Lisa eller Karin?)\nRätt: 'Lisa berättade för Karin att Karin var gravid.' eller bättre: 'Lisa berättade för Karin den goda nyheten: Karin väntade barn.'",
            explanation:
              "Syftningsfel med pronomenet 'hon' gör meningen tvetydig. Lösningen är att upprepa namnet eller omformulera för att klargöra syftningen.",
          },
          {
            swedish:
              "Fel: 'Igår gick jag till stan och köper en bok.' (tempusbrott)\nRätt: 'Igår gick jag till stan och köpte en bok.'",
            explanation:
              "Tempusbrott uppstår när man blandar preteritum ('gick') och presens ('köper') i samma tidslinje. Håll konsekvent tempus inom samma händelsekedja.",
          },
        ],
        keyRules: [
          "Kontrollera sammansatta ord — svenska skriver ihop dem: 'fotbollsplan', inte 'fotbolls plan'.",
          "Granska alla pronomen (han, hon, den, det) och säkerställ att syftningen är otvetydig.",
          "Håll konsekvent tempus inom samma textavsnitt om inte tempusväxling är motiverad.",
          "Kontrollera ordföljden efter bisatsinledare: 'Om jag inte hade kommit' (inte 'Om jag hade inte kommit').",
          "Använd stavningskontroll men lita inte blint på den — den missar syftningsfel och stilproblem.",
        ],
      },
      {
        id: "skr-textredigering-3",
        title: "Ge och ta emot textfeedback",
        description:
          "Utveckla förmågan att ge konstruktiv feedback på andras texter och att använda feedback för att förbättra ditt eget skrivande.",
        examples: [
          {
            swedish:
              "Feedbackexempel: 'Din inledning fångar min uppmärksamhet direkt — anekdoten med hunden är levande och originell. I andra stycket tappar jag dock tråden: kopplingen mellan anekdoten och din huvudtes är inte tydlig. Kan du lägga till en övergångsmening?'",
            explanation:
              "Konstruktiv feedback börjar med det positiva, identifierar problemet specifikt och föreslår en konkret lösning. Formuleringen 'jag tappar tråden' fokuserar på läsarens upplevelse snarare än skribentens fel.",
          },
          {
            swedish:
              "Dålig feedback: 'Texten är bra men lite tråkig.'\nBra feedback: 'Texten har en stark argumentation, men meningsbyggnaden är enformig — de flesta meningar börjar med subjekt + verb. Prova att variera med bisatser eller prepositionsfraser i inledningen.'",
            explanation:
              "Vag feedback ('lite tråkig') ger skribenten inget att arbeta med. Specifik feedback identifierar mönstret (enformig meningsbyggnad) och föreslår konkreta verktyg.",
          },
        ],
        keyRules: [
          "Börja alltid med något positivt — det öppnar mottagligheten för förbättringsförslag.",
          "Var specifik: peka på exakta ställen i texten, inte bara generella intryck.",
          "Formulera kritik som läsarupplevelse ('jag förstår inte kopplingen') snarare än omdöme ('det här är dåligt').",
          "Föreslå lösningar, inte bara problem — det gör feedbacken handlingsbar.",
          "Som mottagare: undvik att försvara texten reflexmässigt; lyssna först, bedöm sedan.",
        ],
      },
    ],
  },
  {
    id: "skr-stil",
    title: "Stil & språkvariation",
    category: "Skrivande",
    lessons: [
      {
        id: "skr-stil-1",
        title: "Register och stilnivåer",
        description:
          "Förstå och behärska olika stilnivåer i svenska: från vardagligt talspråk till formell skrift. Lär dig att anpassa ditt språk efter situation, mottagare och syfte.",
        examples: [
          {
            swedish:
              "Vardagligt: 'Kolla, vi måste snacka om det här.'\nNeutralt: 'Vi behöver prata om den här frågan.'\nFormellt: 'Undertecknad önskar framföra synpunkter i det aktuella ärendet.'",
            explanation:
              "Samma budskap i tre stilnivåer. Vardagligt register använder 'kolla' och 'snacka'; neutralt använder standardsvenska; formellt använder byråkratiskt språk med 'undertecknad' och 'framföra synpunkter'.",
          },
          {
            swedish:
              "Stil A (berättande): 'Regnet föll som glaspärlor mot fönsterrutan och Anna drog filten tätare om sig.'\nStil B (rapporterande): 'Nederbörden uppgick till 15 mm under natten och temperaturen sjönk till 3 grader.'",
            explanation:
              "Samma väderförhållande beskrivet i berättande respektive rapporterande stil. Berättarstilen använder metafor och subjektiv upplevelse; rapportstilen använder mätbara fakta.",
          },
        ],
        keyRules: [
          "Identifiera situationens krav innan du börjar skriva — vem läser, var publiceras, vad är syftet?",
          "Undvik stilkrockar: blanda inte vardagligt talspråk med formella uttryck i samma text.",
          "Formellt ≠ krångligt: sträva efter klarhet oavsett stilnivå.",
          "Övning: skriv om samma budskap i tre stilnivåer för att utveckla din flexibilitet.",
        ],
      },
      {
        id: "skr-stil-2",
        title: "Ton och röst i skrift",
        description:
          "Utveckla en medveten skriftlig röst. Lär dig att skapa och behålla en konsekvent ton som stärker ditt budskap, vare sig det är humoristiskt, sakligt eller engagerat.",
        examples: [
          {
            swedish:
              "Humoristisk ton: 'Att laga mat i ett studentkök är en konst som kräver mod, improvisation och en hälsosam respektlöshet inför bäst-före-datum.'",
            explanation:
              "Humorn skapas genom överdrift ('konst som kräver mod') och det oväntade ('respektlöshet inför bäst-före-datum'). Ordvalen ('mod', 'konst') höjer det triviala till något storslagent.",
          },
          {
            swedish:
              "Engagerad ton: 'Vi har inte råd att vänta. Varje dag utan åtgärd är en dag då fler barn faller mellan stolarna i ett system som borde skydda dem.'",
            explanation:
              "Känslan av brådska skapas genom korta satser och idiomatiska uttryck ('faller mellan stolarna'). 'Borde skydda dem' antyder systemets misslyckande utan att explicit anklaga.",
          },
          {
            swedish:
              "Saklig ton: 'Undersökningen omfattade 2 500 respondenter i åldrarna 18–65 år. Data samlades in genom en digital enkät under perioden januari–mars 2025.'",
            explanation:
              "Saklig ton uppnås genom passiva konstruktioner ('samlades in'), exakta siffror och avsaknad av värdeord. Tonen signalerar objektivitet och vetenskaplig trovärdighet.",
          },
        ],
        keyRules: [
          "Din 'röst' är summan av ordval, meningslängd, rytm och attityd till ämnet.",
          "Var konsekvent — en humoristisk text som plötsligt blir allvarlig förvirrar läsaren.",
          "Tonfall skapas genom ordval: 'konstatera' vs. 'märka' vs. 'lägga märke till' ger helt olika känsla.",
          "Läs författare du beundrar och analysera deras tonfall — vad gör de som du kan lära dig?",
          "Experimentera med olika röster i övningstexter innan du hittar din naturliga skriftliga stil.",
        ],
      },
      {
        id: "skr-stil-3",
        title: "Ordval och precision",
        description:
          "Fördjupa dig i ordvalets konst. Lär dig att välja det exakta ordet som förmedlar rätt nyans, undvika klyschor och bygga ett rikt ordförråd för skriftligt uttryck.",
        examples: [
          {
            swedish:
              "Oprecist: 'Det var en bra bok.'\nPrecist: 'Romanen var gripande, välkomponerad och svår att lägga ifrån sig.'\nÖverprecist: 'Romanen utgjorde en exceptionellt magistral litterär prestation av enastående magnitud.'",
            explanation:
              "Det första alternativet säger ingenting; det andra ger tre specifika kvaliteter; det tredje överdriver med pompösa ord som förlorar sin kraft. Precision handlar om rätt nivå.",
          },
          {
            swedish:
              "'Sa' kan ersättas med: viskade, muttrade, utbrast, konstaterade, medgav, hävdade, invände, föreslog — varje ord förändrar hela scenens dynamik.",
            explanation:
              "Synonymval är inte dekoration utan meningsskapande. 'Medgav' antyder motvillighet, 'hävdade' antyder envishet, 'invände' antyder oenighet — ordet bär sin egen berättelse.",
          },
        ],
        keyRules: [
          "Undvik klyschor som 'i denna dag och ålder' eller 'när allt kommer omkring' — de signalerar tankemässig lathet.",
          "Välj specifika verb framför svaga verb + adverb: 'störtade' istället för 'sprang snabbt'.",
          "Använd en tesaurus som verktyg, inte som krycka — det rätta ordet ska passa i sammanhanget, inte bara låta fint.",
          "Läs brett för att bygga ett passivt ordförråd som gradvis blir aktivt i ditt skrivande.",
        ],
      },
    ],
  },
  {
    id: "skr-publicering",
    title: "Publicering & delning",
    category: "Skrivande",
    lessons: [
      {
        id: "skr-publicering-1",
        title: "Att skriva för webben och sociala medier",
        description:
          "Anpassa ditt skrivande för digitala plattformar. Lär dig att skriva för skärmläsning, använda rubriker strategiskt och fånga läsarens uppmärksamhet i ett informationsöverflöd.",
        examples: [
          {
            swedish:
              "Bloggtext: 'Tre saker jag lärde mig av att bo utan smartphone i en månad'\n\n1. Jag sov bättre. Inte lite bättre — dramatiskt bättre.\n2. Jag hade fler riktiga samtal. Inte fler samtal totalt, men fler som betydde något.\n3. Jag var fruktansvärt uttråkad ibland. Och det visade sig vara precis vad jag behövde.'",
            explanation:
              "Listformat med numrerade punkter fungerar utmärkt på webben. Varje punkt har en kort huvudtes följd av en utvecklande kommentar. Kontrasten i punkt 3 ('fruktansvärt uttråkad' + 'precis vad jag behövde') skapar engagemang.",
          },
          {
            swedish:
              "LinkedIn-inlägg: 'Jag fick sparken förra året. Det bästa som hänt mig.\n\nInte för att jobbet var dåligt — det var det inte. Men jag hade fastnat. Varje dag samma möten, samma luncher, samma känsla av att vara på rätt plats men i fel riktning.'",
            explanation:
              "Personlig berättelse med en provocerande öppning skapar uppmärksamhet. Korta stycken och radbrytningar är anpassade för mobilskärm. Den paradoxala inledningen ('Bästa som hänt mig') tvingar läsaren att fortsätta.",
          },
        ],
        keyRules: [
          "Skriv korta stycken (2–3 meningar) — långa textblock avskräcker skärmläsare.",
          "Placera det viktigaste först — de flesta läser bara de första raderna.",
          "Använd rubriker och underrubriker som navigationshjälp; varje rubrik ska kunna stå för sig.",
          "Anpassa längd och ton efter plattformen: LinkedIn kräver professionalism, Instagram kräver visuellt tänkande, bloggen tillåter djup.",
          "Avsluta med en fråga eller uppmaning ('call to action') för att bjuda in till interaktion.",
        ],
      },
      {
        id: "skr-publicering-2",
        title: "Korrekturläsning och sista finslipningen",
        description:
          "Lär dig att korrekturläsa effektivt innan publicering. Förstå skillnaden mellan korrektur och redigering, och utveckla en checklista för den sista genomgången.",
        examples: [
          {
            swedish:
              "Korrekturlista:\n✓ Stavning och grammatik (inklusive sammansatta ord)\n✓ Konsekvent formatering (rubriker, punktlistor, citattecken)\n✓ Alla namn, datum och siffror dubbelkollade\n✓ Länkar fungerar och leder till rätt sida\n✓ Texten läst högt en gång från början till slut",
            explanation:
              "En systematisk checklista säkerställer att inget missas. De mest förbisedda felen (namn, datum, länkar) lyfts fram specifikt.",
          },
          {
            swedish:
              "Vanligt förbisett fel: 'Vi vill gärna bjuda in er till vårt seminarium den 15 mars kl. 14.00. Anmälan senast den 15 mars.'\nProblemet: anmälningsdeadline är samma dag som evenemanget. Sannolikt ska det stå 'senast den 8 mars'.",
            explanation:
              "Korrekturläsning handlar inte bara om stavfel utan om logiska fel. Datum, siffror och tidsangivelser kräver särskild uppmärksamhet.",
          },
        ],
        keyRules: [
          "Korrekturläs aldrig direkt efter att du skrivit klart — ta minst en paus på några timmar.",
          "Läs texten baklänges (mening för mening) för att bryta invanda läsmönster och upptäcka stavfel.",
          "Kontrollera alla egennamn, datum och siffror mot originalkällan.",
          "Skriv ut texten om möjligt — man ser fler fel på papper än på skärm.",
          "Låt någon annan läsa texten före publicering; en ny blick fångar det du blivit blind för.",
        ],
      },
      {
        id: "skr-publicering-3",
        title: "Upphovsrätt och etik i skrivande",
        description:
          "Förstå grundläggande upphovsrätt, citaträtt och etiska principer som gäller vid publicering av texter. Lär dig att använda andras material korrekt och skydda ditt eget.",
        examples: [
          {
            swedish:
              "Korrekt citering: 'Som Astrid Lindgren skrev i Bröderna Lejonhjärta: \"Det finns saker man måste göra, annars är man ingen människa utan bara en liten lort.\" (Lindgren, 1973, s. 98)'",
            explanation:
              "Citatet är korrekt markerat med citattecken, tillskrivs författaren och har fullständig referens. Citaträtten tillåter korta citat i diskuterande syfte.",
          },
          {
            swedish:
              "Plagiat: 'Att kopiera en hel artikel och byta ut enstaka ord räknas som plagiat, även om du anger källan. Att skriva om texten med egna ord och ange ursprungskällan är däremot korrekt parafrasering.'",
            explanation:
              "Gränsen mellan plagiat och parafrasering handlar om graden av omarbetning. Att 'byta ut enstaka ord' (synonym-byte) räcker inte — texten måste omstruktureras helt.",
          },
        ],
        keyRules: [
          "Ange alltid källa när du använder andras idéer, formuleringar eller fakta.",
          "Citaträtten gäller korta utdrag i analyserande syfte — inte långa textblock utan tillstånd.",
          "Bilder och illustrationer har samma upphovsrättsskydd som text; använd aldrig bilder utan att kontrollera licensen.",
          "Dubbelkolla fakta innan du publicerar — att sprida felaktigheter skadar både din trovärdighet och dina läsare.",
          "Respektera personers integritet: anonymisera personer i personliga berättelser om du inte har deras samtycke.",
        ],
      },
    ],
  },
];
