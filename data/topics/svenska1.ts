import type { Topic } from "@/lib/types";

export const svenska1Topics: Topic[] = [
  {
    id: "sv1-dagliga-samtal",
    title: "Dagliga samtal",
    category: "Dagligt",
    lessons: [
      {
        id: "sv1-dagliga-1",
        title: "Hälsningar och artighetsfraser",
        description:
          "Lär dig hur man hälsar, tar avsked och använder artiga uttryck i vardagliga situationer i Sverige.",
        examples: [
          {
            swedish: "Hej! Hur mår du? – Tack, bara bra! Själv då?",
            explanation:
              "Den vanligaste hälsningen i Sverige. 'Själv då?' är ett naturligt sätt att ställa motfrågan utan att upprepa hela frågan.",
          },
          {
            swedish: "Ursäkta, skulle du kunna hjälpa mig?",
            explanation:
              "Konditionalis ('skulle kunna') gör förfrågan artigare än 'kan du hjälpa mig'. Vanligt i samtal med okända personer.",
          },
          {
            swedish: "Tack så mycket för hjälpen! Det var snällt av dig.",
            explanation:
              "'Tack så mycket' är starkare än bara 'tack'. 'Det var snällt av dig' visar extra uppskattning och är typiskt svenskt.",
          },
        ],
        keyRules: [
          "Svenskar säger 'hej' både som hälsning och avsked – 'hej hej' signalerar oftast avsked.",
          "Använd 'du' i de flesta situationer – tilltal med 'ni' uppfattas som ålderdomligt eller överdrivet formellt.",
          "Konditionalis (skulle kunna, skulle vilja) gör förfrågningar artigare.",
          "'Lagom' är ett nyckelbegrepp – undvik att vara för direkt eller för indirekt.",
        ],
      },
      {
        id: "sv1-dagliga-2",
        title: "Småprat och vardagskonversation",
        description:
          "Öva på att föra vardagliga samtal om väder, arbete och helgplaner – de vanligaste samtalsämnena i Sverige.",
        examples: [
          {
            swedish:
              "Vad har du för planer i helgen? – Jag tänkte ta det lugnt, kanske gå på en promenad.",
            explanation:
              "'Tänkte' (imperfekt av 'tänka') används för lösa planer. 'Ta det lugnt' är ett vanligt uttryck som betyder att koppla av.",
          },
          {
            swedish:
              "Hur går det på jobbet? – Det är ganska stressigt just nu, men det brukar lugna ner sig snart.",
            explanation:
              "'Brukar' uttrycker vana eller något som vanligtvis händer. 'Lugna ner sig' är ett reflexivt partikelverb.",
          },
          {
            swedish: "Har du sett den nya serien på SVT? Den är jättebra!",
            explanation:
              "'Jätte-' som prefix förstärker adjektiv och är mycket vanligt i talspråk: jättebra, jättefin, jätterolig.",
          },
          {
            swedish:
              "Vi ses imorgon! – Absolut, vi hörs! Ha det bra så länge.",
            explanation:
              "'Vi hörs' betyder att man kommer att ha kontakt igen (via telefon eller meddelande). 'Ha det bra så länge' är ett vänligt avsked.",
          },
        ],
        keyRules: [
          "Svenskar inleder ofta småprat med vädret eller helgplaner – det är socialt accepterade ämnen.",
          "Prefixet 'jätte-' fungerar som förstärkare i talspråk: jättebra, jättemycket, jättefin.",
          "'Brukar' + infinitiv uttrycker vanor och återkommande handlingar.",
          "Reflexiva verb som 'lugna ner sig', 'känna sig' och 'bestämma sig' är mycket vanliga i vardagssvenska.",
          "Partikelverb (gå ut, komma hem, ta med) ändrar verbets betydelse – lär dig dem som fasta enheter.",
        ],
      },
      {
        id: "sv1-dagliga-3",
        title: "Att uttrycka åsikter och känslor",
        description:
          "Lär dig att uttrycka vad du tycker och känner på ett naturligt sätt, med nyanser som 'nog', 'väl' och 'ju'.",
        examples: [
          {
            swedish: "Jag tycker att filmen var ganska bra, men boken var bättre.",
            explanation:
              "'Tycker att' används för personliga åsikter. 'Ganska' tonar ner omdömet och är typiskt för svenska – man vill sällan låta för extrem.",
          },
          {
            swedish: "Det är väl ändå lite konstigt att de inte sa något?",
            explanation:
              "'Väl' signalerar att talaren förväntar sig medhåll. 'Ändå' förstärker förvåningen. Dessa småord ger frasen en nyansskillnad.",
          },
          {
            swedish: "Jag känner mig lite nervös inför presentationen, men det brukar gå bra.",
            explanation:
              "'Känna sig' (reflexivt) uttrycker inre känslor. 'Inför' betyder 'före' i betydelsen att man ser framåt mot något.",
          },
        ],
        keyRules: [
          "'Tycker' = åsikt, 'tänker' = kognitivt tänkande, 'tror' = antagande – blanda inte ihop dem.",
          "Modalpartiklar som 'ju', 'väl', 'nog' och 'visst' ger nyans åt påståenden och är avgörande i naturlig svenska.",
          "'Ganska', 'lite' och 'rätt' tonar ner uttryck – svenskar föredrar ofta understatement.",
        ],
      },
    ],
  },
  {
    id: "sv1-telefon-email",
    title: "Telefon & Email svenska",
    category: "Kommunikation",
    lessons: [
      {
        id: "sv1-telefon-1",
        title: "Telefonsamtal – formella och informella",
        description:
          "Lär dig standardfraser för att ringa och ta emot samtal, från vänsamtal till professionella samtal.",
        examples: [
          {
            swedish:
              "Hej, det är Anna Lindgren. Jag ringer angående mitt ärende hos er.",
            explanation:
              "'Det är [namn]' är standardsättet att presentera sig i telefon. 'Angående' är mer formellt än 'om' och passar i professionella samtal.",
          },
          {
            swedish:
              "Skulle jag kunna få prata med någon på kundtjänst? – Självklart, jag kopplar dig vidare.",
            explanation:
              "'Koppla vidare' är det naturliga uttrycket för att överföra ett samtal. 'Skulle jag kunna få' är en mycket artig förfrågningsform.",
          },
          {
            swedish:
              "Kan du be henne ringa tillbaka när hon har tid? Mitt nummer är 070-123 45 67.",
            explanation:
              "'Be henne ringa tillbaka' – verbet 'be' följs av objekt + infinitiv. Svenska telefonnummer läses ofta i grupper om tre eller två siffror.",
          },
        ],
        keyRules: [
          "Svara alltid med ditt namn i professionella samtal: 'Hej, det är [förnamn efternamn].'",
          "'Angående' och 'gällande' är formella synonymer till 'om' i skriftlig och professionell kommunikation.",
          "Partikelverben 'ringa upp', 'ringa tillbaka', 'koppla vidare' och 'lägga på' är grundläggande telefonvokabulär.",
          "'Skulle jag kunna få…' är den artigaste formen av förfrågan i svenska.",
        ],
      },
      {
        id: "sv1-telefon-2",
        title: "E-post och formella meddelanden",
        description:
          "Skriv korrekta och professionella e-postmeddelanden med rätt hälsningsfraser, struktur och avslutning.",
        examples: [
          {
            swedish:
              "Hej Maria,\nTack för ditt mejl. Jag återkommer med svar senast på fredag.\nMed vänliga hälsningar,\nErik",
            explanation:
              "'Hej [namn]' är standardhälsningen i svenska mejl, även i professionella sammanhang. 'Med vänliga hälsningar' (förkortat 'Mvh') är den vanligaste avslutningen.",
          },
          {
            swedish:
              "Jag skriver med anledning av den tjänst som utlysts på er hemsida.",
            explanation:
              "'Med anledning av' är en formell fras som motsvarar 'angående'. 'Utlysts' är supinum av 'utlysa' i passiv form, vanligt i formella texter.",
          },
          {
            swedish:
              "Vänligen bekräfta att ni har mottagit detta meddelande.",
            explanation:
              "'Vänligen' + imperativ är ett artigt sätt att göra förfrågningar i skrift. 'Mottaga' används i formell stil istället för 'få'.",
          },
        ],
        keyRules: [
          "Svenska mejl inleds med 'Hej [namn],' – aldrig med 'Kära' som i engelska (det låter romantiskt på svenska).",
          "Använd 'Mvh' (Med vänliga hälsningar) eller 'Vänliga hälsningar' som avslutning i formella mejl.",
          "S-passiv ('utlysts', 'bekräftas') och 'vänligen' höjer formalitetsnivån i skriftlig kommunikation.",
          "Håll svenska mejl korta och raka – undvik omständliga inledningar.",
        ],
      },
    ],
  },
  {
    id: "sv1-mat-recept",
    title: "Mat & recept",
    category: "Kultur",
    lessons: [
      {
        id: "sv1-mat-1",
        title: "Matlagning och receptinstruktioner",
        description:
          "Lär dig förstå och skriva recept på svenska, med fokus på imperativformer och måttenheter.",
        examples: [
          {
            swedish:
              "Skala och hacka löken fint. Fräs den i smör tills den blir mjuk och genomskinlig.",
            explanation:
              "Recept skrivs i imperativ: 'skala', 'hacka', 'fräs'. 'Fint' beskriver hur man hackar. 'Tills' anger tidpunkt då man slutar.",
          },
          {
            swedish:
              "Rör ner grädden och låt såsen sjuda i cirka 10 minuter på låg värme.",
            explanation:
              "'Rör ner' är ett partikelverb som betyder att blanda i något. 'Låt' + infinitiv ('låt såsen sjuda') är en viktig konstruktion i instruktioner.",
          },
          {
            swedish:
              "Smaka av med salt och peppar. Servera med kokt potatis och lingonsylt.",
            explanation:
              "'Smaka av' betyder att prova och justera kryddningen. Lingonsylt som tillbehör är typiskt svenskt – det serveras till kött, köttbullar och pannkakor.",
          },
        ],
        keyRules: [
          "Recept skrivs i imperativform: 'skala', 'koka', 'rör', 'stek' – lär dig imperativ av vanliga matlagningsverb.",
          "Partikelverb i matlagning: 'rör ner', 'häll upp', 'skär av', 'vänd på' – partikeln ändrar betydelsen.",
          "Svenska måttenheter: dl (deciliter), msk (matsked), tsk (tesked), krm (kryddmått).",
          "'Låt' + objekt + infinitiv används för processer: 'låt degen jäsa', 'låt såsen koka in'.",
        ],
      },
      {
        id: "sv1-mat-2",
        title: "Att beställa mat och fika",
        description:
          "Öva på att beställa på restaurang och café, förstå menyer och hantera specialkost.",
        examples: [
          {
            swedish:
              "Jag skulle vilja ha dagens lunch, tack. Vad ingår i den? – Det är laxpasta med sallad och kaffe.",
            explanation:
              "'Dagens lunch' är ett fast begrepp på svenska restauranger – en billigare lunchmeny som varierar dagligen. 'Vad ingår' frågar vad som inkluderas.",
          },
          {
            swedish:
              "Finns det något glutenfritt alternativ? Jag är tyvärr allergisk mot vete.",
            explanation:
              "'Finns det…?' är standardfrågan för att höra om tillgänglighet. 'Tyvärr' mjukar upp meddelandet om allergi och gör det mer artigt.",
          },
          {
            swedish:
              "Kan vi få notan, tack? – Vill ni dela eller betala tillsammans?",
            explanation:
              "'Notan' är det vanligaste ordet för restaurangräkningen. I Sverige är det vanligt att dela notan ('splitta') bland vänner.",
          },
          {
            swedish:
              "Jag tar en kanelbulle och en kopp kaffe med mjölk, tack.",
            explanation:
              "'Jag tar' är det vanligaste sättet att beställa på café. Kanelbullen är en svensk klassiker – fikan är en central del av svensk kultur.",
          },
        ],
        keyRules: [
          "'Dagens lunch' eller 'dagens rätt' erbjuds på vardagar och inkluderar ofta sallad, bröd och dryck.",
          "Beställ med 'Jag tar…' (informellt) eller 'Jag skulle vilja ha…' (formellt) – aldrig med 'Jag vill ha' (kan låta krävande).",
          "Fika är en social institution i Sverige – det handlar lika mycket om samvaron som om kaffet.",
          "Dricks är inte förväntat i Sverige men uppskattas för god service, vanligtvis 5–10 procent.",
        ],
      },
    ],
  },
  {
    id: "sv1-kultur-traditioner",
    title: "Kultur & traditioner",
    category: "Kultur",
    lessons: [
      {
        id: "sv1-kultur-1",
        title: "Svenska högtider och traditioner",
        description:
          "Utforska Sveriges viktigaste högtider – från midsommar till lucia – och lär dig berätta om dem.",
        examples: [
          {
            swedish:
              "Midsommar firas runt den 20–26 juni. Man dansar runt midsommarstången och äter sill, potatis och jordgubbar.",
            explanation:
              "'Firas' är s-passiv av 'fira'. 'Man' används som opersonligt subjekt, vanligt när man beskriver traditioner och allmänna seder.",
          },
          {
            swedish:
              "På julafton samlas hela familjen för att äta julbord och titta på Kalle Anka klockan tre.",
            explanation:
              "'Samlas' (deponent verb) betyder att komma ihop. Att titta på Kalle Anka (Donald Duck) klockan 15:00 på julafton är en unik svensk tradition.",
          },
          {
            swedish:
              "Den 13 december firas lucia. Barn klär ut sig i vita kläder och tågar med ljus medan de sjunger luciasången.",
            explanation:
              "'Klä ut sig' är ett reflexivt partikelverb. 'Tågar' (från 'tåga') betyder att gå i procession. Lucia symboliserar ljus under den mörkaste tiden på året.",
          },
        ],
        keyRules: [
          "S-passiv ('firas', 'äts', 'sjungs') används ofta när man beskriver traditioner och allmänna seder.",
          "'Man' som opersonligt pronomen är centralt i beskrivningar av kultur: 'Man brukar fira…', 'Man äter…'.",
          "Deponensverb (verb med s-form men aktiv betydelse) som 'samlas', 'hoppas', 'trivs' är vanliga i svenska.",
          "Svenska högtider följer ofta årstiderna – ljusfester på vintern, naturfester på sommaren.",
        ],
      },
      {
        id: "sv1-kultur-2",
        title: "Svenskt samhälle och värderingar",
        description:
          "Förstå grundläggande svenska värderingar som jämlikhet, lagom och allemansrätten.",
        examples: [
          {
            swedish:
              "Allemansrätten ger alla rätt att vistas i naturen, plocka bär och svamp samt tälta en natt – så länge man inte stör eller förstör.",
            explanation:
              "'Allemansrätten' är en unik svensk rättighet. 'Så länge' anger villkor. 'Samt' är mer formellt än 'och' och passar i förklarande text.",
          },
          {
            swedish:
              "I Sverige är det vanligt att dela lika på notan och att alla bidrar till gemensamma utgifter.",
            explanation:
              "'Dela lika' uttrycker jämlikhet – ett centralt svenskt värde. 'Bidra till' kräver prepositionen 'till' och betyder att ge sitt bidrag.",
          },
          {
            swedish:
              "Lagom är ett typiskt svenskt begrepp som betyder 'varken för mycket eller för lite' – precis lagom helt enkelt.",
            explanation:
              "'Lagom' är svåröversatt och beskriver den svenska mentaliteten av balans och måttfullhet. 'Helt enkelt' betyder 'quite simply'.",
          },
        ],
        keyRules: [
          "Allemansrätten bygger på principen 'inte störa, inte förstöra' – den gäller i hela Sverige.",
          "'Lagom' genomsyrar svensk kultur – det handlar om balans, inte medelmåttighet.",
          "Jämlikhet ('jämlikhet' eller 'jämställdhet' beroende på kontext) är en grundpelare i det svenska samhället.",
          "Formella och informella register blandas sällan i svenska – välj rätt nivå och håll dig till den.",
          "Prepositionsfraser som 'bidra till', 'bero på', 'bestå av' måste läras som fasta kombinationer.",
        ],
      },
    ],
  },
  {
    id: "sv1-berattande",
    title: "Berättande & personlig text",
    category: "Berättande",
    lessons: [
      {
        id: "sv1-berattande-1",
        title: "Att berätta en historia",
        description:
          "Lär dig att strukturera en berättelse med tydlig inledning, handling och avslutning – på naturlig svenska.",
        examples: [
          {
            swedish:
              "Det var en gång en flicka som bodde vid havet. Varje morgon gick hon ner till stranden och samlade snäckor.",
            explanation:
              "'Det var en gång' är det klassiska sättet att inleda en berättelse. Imperfekt (bodde, gick, samlade) skapar berättelsens tidsram.",
          },
          {
            swedish:
              "Plötsligt hörde hon ett ljud bakom klipporna. Hon stannade till och lyssnade noga.",
            explanation:
              "'Plötsligt' skapar spänning och markerar en vändpunkt. 'Stanna till' (partikelverb) betyder att kort pausa, till skillnad från 'stanna' som betyder att sluta röra sig.",
          },
          {
            swedish:
              "Det visade sig att det bara var en säl som vilade i solen. Hon skrattade och fortsatte sin promenad.",
            explanation:
              "'Det visade sig att' är en vanlig konstruktion för att avslöja information. 'Bara' tonar ner och skapar kontrast mot den uppbyggda spänningen.",
          },
        ],
        keyRules: [
          "Berättelser skrivs i imperfekt (preteritum): 'gick', 'sa', 'tänkte' – inte presens.",
          "Tidsadverb som 'plötsligt', 'sedan', 'till slut', 'då' strukturerar handlingen och skapar flöde.",
          "Bisatser med 'som', 'att', 'när', 'medan' ger djup och detaljer åt berättelsen.",
          "Partikelverb som 'stanna till', 'titta upp', 'vända om' gör språket levande och exakt.",
        ],
      },
      {
        id: "sv1-berattande-2",
        title: "Personliga texter och dagbok",
        description:
          "Öva på att skriva personliga reflektioner, dagboksinlägg och informella brev med autentiskt språk.",
        examples: [
          {
            swedish:
              "Idag har jag haft en riktigt bra dag. Jag vaknade tidigt, tog en lång promenad och kände mig pigg hela dagen.",
            explanation:
              "Perfekt ('har haft') i inledningen kopplar händelsen till nuet. Sedan följer en kedja av imperfektformer som berättar vad som hände.",
          },
          {
            swedish:
              "Jag har funderat mycket på framtiden på sistone. Det känns som att allt förändras så fort.",
            explanation:
              "'På sistone' betyder 'recently' och kombineras naturligt med perfekt. 'Det känns som att' uttrycker subjektiva upplevelser.",
          },
          {
            swedish:
              "Jag saknar dig så mycket! Hoppas att vi kan ses snart. Kram!",
            explanation:
              "'Sakna' betyder att längta efter någon. 'Hoppas att' följs av en bisats. 'Kram' som avslutning är vanligt i informella brev och meddelanden.",
          },
          {
            swedish:
              "Det bästa med hela resan var ändå kvällen då vi satt ute och pratade i timmar under stjärnorna.",
            explanation:
              "'Det bästa med' inleder en värdering. 'Ändå' signalerar att talaren lyfter fram något oväntat. 'Då' fungerar som relativt tidsadverb.",
          },
        ],
        keyRules: [
          "Perfekt ('har gjort') kopplar händelser till nuet, imperfekt ('gjorde') placerar dem i det förflutna – växla medvetet.",
          "'Kännas', 'verka', 'tyckas' är kopulaverb som beskriver subjektiva intryck: 'det känns konstigt'.",
          "Informella texter tillåter kortare meningar, utropstecken och talspråksuttryck som 'typ', 'liksom', 'asså'.",
          "Dagboksstil använder ofta 'idag', 'igår', 'på sistone' som tidsmarkörer.",
          "Avsluta informella brev med 'Kram', 'Puss', 'Vi hörs' – aldrig med 'Med vänliga hälsningar'.",
        ],
      },
      {
        id: "sv1-berattande-3",
        title: "Att beskriva personer och platser",
        description:
          "Utveckla förmågan att skapa levande beskrivningar av människor och miljöer med adjektiv och jämförelser.",
        examples: [
          {
            swedish:
              "Min farmor är en liten kvinna med silvervitt hår och de varmaste ögonen man kan tänka sig.",
            explanation:
              "Adjektivets superlativform ('de varmaste') med bestämd artikel skapar en stark bild. 'Man kan tänka sig' är ett idiomatiskt tillägg som förstärker.",
          },
          {
            swedish:
              "Stugan ligger vid en stilla sjö, omgiven av höga tallar. Det luktar kåda och blåbärsris.",
            explanation:
              "'Omgiven av' är perfekt particip i adjektivisk användning. Sinnliga detaljer som doft ('luktar kåda') gör beskrivningen levande.",
          },
          {
            swedish:
              "Han är roligare än de flesta men tystare än man tror. Det är som att han sparar orden till rätt tillfälle.",
            explanation:
              "Komparativformerna 'roligare' och 'tystare' används i jämförelser med 'än'. 'Det är som att' inleder en liknelse.",
          },
        ],
        keyRules: [
          "Adjektiv böjs i komparativ (-are) och superlativ (-ast): 'varm, varmare, varmast'.",
          "Oregelbundna adjektiv måste memoreras: 'bra, bättre, bäst'; 'stor, större, störst'; 'liten, mindre, minst'.",
          "Bestämd superlativ kräver artikel + adjektiv + substantiv i bestämd form: 'den vackraste sjön'.",
          "Perfekt particip som adjektiv: 'en målad vägg', 'ett stängt fönster', 'omgiven av skog'.",
        ],
      },
    ],
  },
  {
    id: "sv1-resa-transport",
    title: "Resa & transport",
    category: "Praktiskt",
    lessons: [
      {
        id: "sv1-resa-1",
        title: "Kollektivtrafik och biljetter",
        description:
          "Lär dig navigera den svenska kollektivtrafiken – buss, tåg, tunnelbana och spårvagn.",
        examples: [
          {
            swedish:
              "Ursäkta, vilken buss går till Centralen? – Du kan ta linje 55. Den går var tionde minut.",
            explanation:
              "'Vilken buss går till…' är standardfrågan för att ta reda på rätt linje. 'Var tionde minut' uttrycker frekvens med distributivt pronomen.",
          },
          {
            swedish:
              "Jag skulle vilja köpa en enkelbiljett till Göteborg. Går det att boka en plats med fönster?",
            explanation:
              "'Enkelbiljett' = enkel resa, 'tur och retur' = fram och tillbaka. 'Går det att…' är en vanlig fråga om möjlighet.",
          },
          {
            swedish:
              "Tåget till Malmö är försenat med tjugo minuter. Vi beklagar olägenheten.",
            explanation:
              "'Försenad med' anger hur lång förseningen är. 'Vi beklagar olägenheten' är en standardfras i svenska högtalarutrop.",
          },
        ],
        keyRules: [
          "'Var' + ordningstal uttrycker frekvens: 'var femte minut', 'vartannat år' (vartannat = varannan i neutrum).",
          "Prepositionen 'med' används vid transportmedel: 'åka med buss', 'resa med tåg'.",
          "'Enkelbiljett' och 'tur och retur' är grundläggande biljetttyper – lär dig även 'periodkort' och 'reskassa'.",
          "Tidtabeller läses med klockan i 24-timmarsformat: 'avgång 14:35, ankomst 17:20'.",
        ],
      },
      {
        id: "sv1-resa-2",
        title: "Att fråga om vägen och orientera sig",
        description:
          "Öva på att fråga om och ge vägbeskrivningar med prepositioner och riktningsuttryck.",
        examples: [
          {
            swedish:
              "Ursäkta, hur kommer jag till närmaste apotek? – Gå rakt fram två kvarter och sväng höger vid korsningen.",
            explanation:
              "'Hur kommer jag till…' är den naturliga frågan. Imperativ i vägbeskrivningar: 'gå', 'sväng', 'fortsätt'. 'Vid korsningen' anger platsen.",
          },
          {
            swedish:
              "Ligger biblioteket långt härifrån? – Nej, det tar ungefär fem minuter till fots.",
            explanation:
              "'Härifrån' = från den här platsen. 'Till fots' betyder att gå. 'Det tar [tid]' uttrycker hur lång tid något tar.",
          },
          {
            swedish:
              "Du kan inte missa det – det är den stora röda byggnaden mitt emot parken.",
            explanation:
              "'Du kan inte missa det' är ett vanligt tillägg i vägbeskrivningar. 'Mitt emot' betyder rakt framför på andra sidan.",
          },
        ],
        keyRules: [
          "Riktningsuttryck: 'rakt fram', 'till höger', 'till vänster', 'runt hörnet', 'mitt emot'.",
          "Prepositioner i vägbeskrivningar: 'vid' (at), 'förbi' (past), 'längs' (along), 'över' (across).",
          "'Det tar [tid]' följt av 'att' + infinitiv: 'Det tar tio minuter att gå dit.'",
          "Platsprepositionen 'i' används för städer och länder, 'på' för öar, gator och institutioner.",
        ],
      },
    ],
  },
  {
    id: "sv1-shopping",
    title: "Shopping & priser",
    category: "Praktiskt",
    lessons: [
      {
        id: "sv1-shopping-1",
        title: "Att handla i butik",
        description:
          "Lär dig nödvändiga fraser för att handla kläder, mat och vardagsvaror i svenska butiker.",
        examples: [
          {
            swedish:
              "Ursäkta, har ni den här tröjan i storlek medium? – Jag ska kolla i lagret, ett ögonblick.",
            explanation:
              "'Har ni…' är standardfrågan i butik. 'I storlek' anger storlek. 'Ett ögonblick' är en artig fras som betyder 'en kort stund'.",
          },
          {
            swedish:
              "Vad kostar den här jackan? – Den kostar 899 kronor, men den är nedsatt från 1 299.",
            explanation:
              "'Vad kostar…' är den vanligaste prisfrågan. 'Nedsatt' betyder att varan har rabatterat pris. Svenska priser anges i kronor.",
          },
          {
            swedish:
              "Kan jag prova den i provrummet? – Absolut, provrummen ligger rakt fram till höger.",
            explanation:
              "'Prova' i shopping-kontext betyder att testa kläder. 'Provrum' (neutrum) – pluralformen 'provrummen' med bestämd ändelse.",
          },
          {
            swedish:
              "Jag skulle vilja byta den här skjortan – den var tyvärr för liten. Har ni kvittot kvar?",
            explanation:
              "'Byta' = exchange, 'lämna tillbaka' = return. 'Kvitto' är beviset på köp. 'Har ni kvittot kvar?' frågas alltid vid byten.",
          },
        ],
        keyRules: [
          "Fråga pris med 'Vad kostar…?' – inte 'Hur mycket är…?' som låter onaturligt på svenska.",
          "Rabattord: 'rea' (sale), 'nedsatt' (reduced), 'erbjudande' (offer), 'kampanjpris' (promotion price).",
          "Betalning: 'betala med kort' (card), 'swisha' (mobile payment via Swish), 'kontant' (cash) – Swish är mycket vanligt i Sverige.",
          "Klädstorlekar: XS, S, M, L, XL – men prata om dem som 'extra small', 'small' etc. eller 'storlek 38, 40…'.",
        ],
      },
      {
        id: "sv1-shopping-2",
        title: "Mataffären och vardagsinköp",
        description:
          "Navigera den svenska mataffären med rätt vokabulär för avdelningar, produkter och förpackningar.",
        examples: [
          {
            swedish:
              "Mjölken står i mejeriavdelningen längst bak i butiken, bredvid ostarna.",
            explanation:
              "'Står i' används om varor som är placerade i butiken. Svenska mataffärer är uppdelade i tydliga avdelningar: mejeri, chark, frukt och grönt.",
          },
          {
            swedish:
              "Kan jag få ett kilo nötfärs och tre skivor rökt skinka från charkdisken?",
            explanation:
              "'Kan jag få' är standardformeln vid charkdisken. Vikter anges i kilo och gram. 'Skivor' är räkneord för tunna delar.",
          },
          {
            swedish:
              "Panten är två kronor per burk. Du kan panta burkarna och flaskorna i automaten vid ingången.",
            explanation:
              "'Pant' är depositavgiften på burkar och flaskor. 'Panta' (verb) betyder att lämna tillbaka förpackningen och få tillbaka panten. Systemet är unikt för Norden.",
          },
        ],
        keyRules: [
          "Förpackningsord: 'förpackning' (package), 'påse' (bag), 'burk' (can/jar), 'flaska' (bottle), 'kartong' (carton).",
          "Matavdelningar: 'mejeri', 'chark', 'frukt och grönt', 'frysavdelningen', 'brödhyllan'.",
          "Pant-systemet: burkpant (2 kr), liten flaska (1 kr), stor flaska (2 kr) – pantas i pantrummet eller automaten.",
          "Plastpåsar kostar pengar i Sverige – ta med egna kassar eller köp tygpåsar.",
        ],
      },
    ],
  },
  {
    id: "sv1-halsa",
    title: "Hälsa & sjukvård",
    category: "Praktiskt",
    lessons: [
      {
        id: "sv1-halsa-1",
        title: "Hos läkaren och på vårdcentralen",
        description:
          "Lär dig beskriva symptom, förstå läkarens frågor och navigera det svenska sjukvårdssystemet.",
        examples: [
          {
            swedish:
              "Jag har haft ont i halsen i tre dagar och har lite feber. Jag tror att jag kan ha blivit förkyld.",
            explanation:
              "'Ha ont i' + kroppsdel är standarduttrycket för smärta. 'Blivit förkyld' – supinum av 'bli' + adjektiv beskriver en tillståndsförändring.",
          },
          {
            swedish:
              "Hur ofta ska jag ta medicinen? – Ta en tablett tre gånger om dagen, efter måltid.",
            explanation:
              "'Hur ofta' frågar om frekvens. 'Tre gånger om dagen' är sättet att uttrycka dosering. 'Efter måltid' preciserar när.",
          },
          {
            swedish:
              "Jag behöver förnya mitt recept på allergimedicin. Kan jag boka en telefontid?",
            explanation:
              "'Förnya recept' = förlänga receptets giltighet. 'Telefontid' är ett vanligt alternativ till fysiskt besök på svenska vårdcentraler.",
          },
        ],
        keyRules: [
          "'Ha ont i' + bestämd form av kroppsdelen: 'ont i magen', 'ont i huvudet', 'ont i ryggen'.",
          "Symptomverb: 'hosta' (cough), 'nysa' (sneeze), 'kräkas' (vomit), 'svimma' (faint), 'blöda' (bleed).",
          "Ring 1177 Vårdguiden för sjukvårdsrådgivning – det är Sveriges nationella sjukvårdsrådgivning.",
          "Boka tid via 1177.se eller ring din vårdcentral – akutmottagningen ('akuten') är för allvarliga fall.",
          "Svenska vårdtermer: 'recept' (prescription), 'remiss' (referral), 'undersökning' (examination).",
        ],
      },
      {
        id: "sv1-halsa-2",
        title: "Välmående och egenvård",
        description:
          "Prata om hälsa, motion och välmående med vokabulär för en aktiv och hälsosam livsstil.",
        examples: [
          {
            swedish:
              "Jag försöker träna åtminstone tre gånger i veckan – mest styrketräning och ibland yoga.",
            explanation:
              "'Försöker' + infinitiv uttrycker en ambition. 'Åtminstone' = minst. 'I veckan' anger frekvens per tidsenhet.",
          },
          {
            swedish:
              "Man borde sova minst sju timmar per natt för att orka med vardagen.",
            explanation:
              "'Borde' uttrycker en rekommendation. 'Orka med' betyder att ha energi och uthållighet för något. 'Vardagen' = det dagliga livet.",
          },
          {
            swedish:
              "Jag mår mycket bättre sedan jag började gå långa promenader och äta mer grönsaker.",
            explanation:
              "'Sedan jag började' visar tidsrelation med bisats. 'Må bättre' uttrycker förbättrat välmående. Komparativformen 'bättre' är oregelbunden.",
          },
        ],
        keyRules: [
          "'Må bra/dåligt' handlar om allmänt välmående, 'ha ont' om fysisk smärta, 'känna sig' om känslotillstånd.",
          "'Orka' + infinitiv uttrycker fysisk eller mental kapacitet: 'Jag orkar inte springa längre.'",
          "'Sedan' + bisats (preteritum) visar startpunkten för en förändring: 'sedan jag flyttade hit'.",
          "Träningsord: 'styrketräning' (strength), 'kondition' (cardio), 'stretcha' (stretch), 'motionera' (exercise).",
        ],
      },
    ],
  },
  {
    id: "sv1-vader",
    title: "Väder & årstider",
    category: "Dagligt",
    lessons: [
      {
        id: "sv1-vader-1",
        title: "Att prata om vädret",
        description:
          "Lär dig beskriva väderförhållanden, temperaturer och prognoser – det vanligaste samtalsämnet i Sverige.",
        examples: [
          {
            swedish:
              "Det är mulet och blåsigt idag, men det ska klarna upp i eftermiddag enligt prognosen.",
            explanation:
              "Opersonligt 'det' som subjekt är standard i väderbeskrivningar. 'Ska' + infinitiv uttrycker prognos. 'Klarna upp' (partikelverb) = bli klarare.",
          },
          {
            swedish:
              "Det snöade hela natten och nu ligger det minst tjugo centimeter snö ute.",
            explanation:
              "'Hela natten' anger tidsomfattning. 'Det ligger snö' – opersonlig konstruktion med 'ligga' för snö som täcker marken.",
          },
          {
            swedish:
              "Vilken härlig vårdag! Det är nästan femton grader och solen skiner. Äntligen!",
            explanation:
              "'Vilken' i utrop visar entusiasm. 'Äntligen' uttrycker att något man väntat på har hänt. Temperatur mäts i Celsius i Sverige.",
          },
          {
            swedish:
              "Det verkar som att det ska bli regn imorgon – ta med paraplyet!",
            explanation:
              "'Det verkar som att' uttrycker ett antagande. 'Ta med' (imperativ av partikelverb) = ha med sig. Svenska prognoser är ofta ämne för samtal.",
          },
        ],
        keyRules: [
          "Väder uttrycks med opersonligt 'det': 'det regnar', 'det snöar', 'det blåser', 'det åskar'.",
          "Temperatur anges i Celsius: 'det är minus tio grader', 'det är plus tjugofem i skuggan'.",
          "Väderadjektiv: 'mulet' (overcast), 'klart' (clear), 'blåsigt' (windy), 'regnigt' (rainy), 'soligt' (sunny).",
          "Partikelverb: 'klarna upp' (clear up), 'blåsa bort' (blow away), 'smälta bort' (melt away).",
          "Vädret är det vanligaste ämnet för småprat i Sverige – ha alltid några väderfraser redo.",
        ],
      },
      {
        id: "sv1-vader-2",
        title: "Årstidernas Sverige",
        description:
          "Beskriv Sveriges fyra årstider och hur de påverkar vardagslivet, naturen och humöret.",
        examples: [
          {
            swedish:
              "Vintrarna i norra Sverige är långa och mörka – solen går knappt upp i december.",
            explanation:
              "'Knappt' betyder nästan inte alls. 'Gå upp' (om solen) är ett partikelverb som beskriver soluppgång. Norra Sverige har polarnatt.",
          },
          {
            swedish:
              "På våren börjar dagarna bli längre och folk trängs på uteserveringarna så fort solen tittar fram.",
            explanation:
              "'Bli längre' beskriver gradvis förändring. 'Trängas' (deponensverb) = tränga ihop sig. 'Titta fram' (om solen) = komma fram bakom molnen.",
          },
          {
            swedish:
              "Hösten är kanske den vackraste årstiden – löven skiftar i rött, gult och orange.",
            explanation:
              "'Kanske' mjukar upp påståendet. 'Skifta i' beskriver färgförändring. Hösten i Sverige kallas ofta 'guldgul' eller 'färgsprakande'.",
          },
        ],
        keyRules: [
          "Årstiderna: 'vår' (spring), 'sommar' (summer), 'höst' (autumn), 'vinter' (winter) – prepositionen 'på' används: 'på våren'.",
          "'Börja' + infinitiv uttrycker begynnande förändring: 'börja bli varmare', 'börja mörkna'.",
          "Deponensverb i naturbeskrivningar: 'trängas', 'svettas', 'andas' – s-form men aktiv betydelse.",
          "Ljuset styr svenskars livsstil – sommarens midnattssol och vinterns polarnatt påverkar humör och aktiviteter.",
        ],
      },
    ],
  },
  {
    id: "sv1-fritid",
    title: "Fritid & hobbyer",
    category: "Dagligt",
    lessons: [
      {
        id: "sv1-fritid-1",
        title: "Sport och friluftsliv",
        description:
          "Prata om sport, motion och utomhusaktiviteter – från fotboll till fjällvandring.",
        examples: [
          {
            swedish:
              "Vi brukar spela fotboll varje söndag, men på vintern byter vi till innebandy.",
            explanation:
              "'Brukar' + infinitiv beskriver en vana. 'Byta till' (partikelverb) = övergå till. 'Innebandy' är en av Sveriges mest populära sporter.",
          },
          {
            swedish:
              "I somras vandrade vi Kungsleden i fem dagar – det var fantastiskt vackert men ganska slitsamt.",
            explanation:
              "'I somras' anger föregående sommar. 'Kungsleden' är Sveriges mest kända vandringsleder. 'Slitsamt' = krävande, ansträngande.",
          },
          {
            swedish:
              "Ska vi åka och bada vid sjön? Vattnet borde vara lagom varmt nu i juli.",
            explanation:
              "'Ska vi…?' är ett informellt förslag. 'Åka och bada' – två verb kopplade med 'och' (pseudosamordning) för att beskriva en aktivitet med transport.",
          },
        ],
        keyRules: [
          "Pseudosamordning ('gå och handla', 'åka och bada', 'sitta och läsa') är mycket vanlig i svenska och beskriver syfte.",
          "'I somras', 'i vintras', 'i höstas' anger föregående årstid – 'i sommar', 'i vinter' anger kommande.",
          "Friluftsord: 'vandra' (hike), 'paddla' (kayak), 'tälta' (camp), 'elda' (make a fire), 'plocka svamp' (pick mushrooms).",
          "Sport: 'spela' för bollsporter ('spela fotboll'), 'åka' för glidfarter ('åka skidor'), 'springa' för löpning.",
        ],
      },
      {
        id: "sv1-fritid-2",
        title: "Intressen, kultur och underhållning",
        description:
          "Berätta om dina intressen och diskutera böcker, film, musik och andra kulturella upplevelser.",
        examples: [
          {
            swedish:
              "Jag är väldigt intresserad av nordisk design – jag brukar besöka designmuseer och följa svenska formgivare.",
            explanation:
              "'Intresserad av' kräver prepositionen 'av'. 'Följa' i modern svenska kan betyda att följa någon på sociala medier.",
          },
          {
            swedish:
              "Har du läst den senaste boken av Fredrik Backman? Den handlar om en man som försöker rädda ett helt samhälle.",
            explanation:
              "'Den senaste boken av' – superlativ med bestämd artikel. 'Handla om' = ha som tema. 'Försöka' + infinitiv uttrycker ett försök.",
          },
          {
            swedish:
              "Vi går på konsert ikväll – det är en svensk indiegrupp som jag har lyssnat mycket på.",
            explanation:
              "'Gå på konsert' – prepositionen 'på' vid evenemang. 'Lyssna på' kräver prepositionen 'på'. Relativ bisats med 'som' ger tilläggsinformation.",
          },
          {
            swedish:
              "Jag håller på att lära mig sticka. Det är svårare än jag trodde, men jätteavkopplande.",
            explanation:
              "'Hålla på att' + infinitiv uttrycker pågående handling. 'Lära sig' (reflexivt) = lära sig själv. 'Avkopplande' = relaxing.",
          },
        ],
        keyRules: [
          "'Hålla på att' + infinitiv uttrycker att något pågår just nu: 'Jag håller på att läsa klart boken.'",
          "Prepositionen 'på' vid aktiviteter: 'gå på bio', 'gå på teater', 'gå på konsert', 'gå på museum'.",
          "Kulturverb: 'läsa' (read), 'lyssna på' (listen to), 'titta på' (watch), 'besöka' (visit), 'uppleva' (experience).",
          "'Lära sig' är reflexivt och betyder att man lär sig själv, till skillnad från 'lära' (att lära någon annan).",
          "Svenska verb med fast preposition ('intresserad av', 'bra på', 'rädd för') måste läras som fasta kombinationer.",
        ],
      },
      {
        id: "sv1-fritid-3",
        title: "Att planera fritidsaktiviteter",
        description:
          "Öva på att föreslå, planera och bekräfta aktiviteter med vänner och familj.",
        examples: [
          {
            swedish:
              "Har du lust att hänga med på afterwork på fredag? – Absolut, vilken tid och var?",
            explanation:
              "'Ha lust att' uttrycker vilja/önskan. 'Hänga med' (informellt) = följa med, vara med. 'Afterwork' används som svenskt lånord.",
          },
          {
            swedish:
              "Vi tänkte grilla hos oss på lördag om vädret tillåter. Kan ni komma vid fyra-tiden?",
            explanation:
              "'Tänkte' uttrycker ett löst förslag. 'Om vädret tillåter' anger villkor. 'Vid fyra-tiden' = ungefär klockan fyra, mer avslappnat än exakt tid.",
          },
          {
            swedish:
              "Tyvärr kan jag inte den dagen – jag har redan bokat in något. Kan vi ta det en annan gång istället?",
            explanation:
              "'Kan inte den dagen' – kortform av 'kan inte komma'. 'Boka in' = reservera tid. 'Ta det en annan gång' = skjuta upp till annat tillfälle.",
          },
        ],
        keyRules: [
          "Informella förslag: 'Ska vi…?', 'Har du lust att…?', 'Vad sägs om att…?' – rangordnade från direkt till artig.",
          "'Tänkte' (imperfekt av 'tänka') uttrycker lösa planer och förslag: 'Vi tänkte åka till stugan.'",
          "Tidsuttryck med '-tiden' anger ungefärlig tid: 'vid tre-tiden', 'vid lunchtid', 'vid middagstid'.",
          "Att tacka nej artigt: 'Tyvärr kan jag inte…' följt av förklaring och motförslag visar respekt.",
        ],
      },
    ],
  },
];
