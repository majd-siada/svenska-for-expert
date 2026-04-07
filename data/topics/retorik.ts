import type { Topic } from "@/lib/types";

export const retorikTopics: Topic[] = [
  {
    id: "retorik-grundlaggande",
    title: "Grundläggande retorik",
    category: "Retorik",
    lessons: [
      {
        id: "ret-grund-1",
        title: "Retorikens tre grundpelare: ethos, pathos och logos",
        description:
          "Lär dig de tre klassiska övertygelsemedlen som utgör grunden för all retorik — trovärdighet, känsla och logik.",
        examples: [
          {
            swedish:
              "Som läkare med tjugo års erfarenhet kan jag försäkra er om att denna behandling är säker.",
            explanation:
              "Talaren använder ethos genom att hänvisa till sin yrkesroll och erfarenhet för att bygga trovärdighet.",
          },
          {
            swedish:
              "Tänk er ett barn som går hungrig till skolan varje dag — det är den verklighet vi måste förändra.",
            explanation:
              "Här används pathos genom att väcka empati och medkänsla hos lyssnaren med en konkret, känsloladdad bild.",
          },
          {
            swedish:
              "Statistiken visar att 87 procent av deltagarna förbättrade sina resultat efter programmet.",
            explanation:
              "Logos tillämpas genom att presentera konkreta siffror och fakta som stöd för argumentet.",
          },
          {
            swedish:
              "Jag har själv upplevt hur det känns att stå utan bostad, och därför vet jag att vi behöver fler hyresrätter.",
            explanation:
              "Talaren kombinerar ethos (personlig erfarenhet) med pathos (känslomässig koppling) för att stärka budskapet.",
          },
        ],
        keyRules: [
          "Ethos bygger förtroende — visa din kompetens och trovärdighet tidigt i talet.",
          "Pathos berör känslor — använd berättelser och bilder som skapar empati.",
          "Logos övertygar med förnuft — stöd dina påståenden med fakta och logiska resonemang.",
          "De starkaste talen kombinerar alla tre pelare i rätt balans.",
          "Anpassa betoningen av ethos, pathos och logos efter publiken och sammanhanget.",
        ],
      },
      {
        id: "ret-grund-2",
        title: "Retorikens fem steg: från idé till framförande",
        description:
          "Gå igenom den klassiska retorikens fem delar — inventio, dispositio, elocutio, memoria och actio — och lär dig strukturera ett tal från början till slut.",
        examples: [
          {
            swedish:
              "Först samlade jag material om klimatfrågan från aktuell forskning och personliga erfarenheter.",
            explanation:
              "Inventio — det första steget handlar om att hitta och samla argument och material till talet.",
          },
          {
            swedish:
              "Jag valde att inleda med en fråga, sedan presentera tre huvudargument och avsluta med en uppmaning.",
            explanation:
              "Dispositio — att organisera materialet i en tydlig och effektiv struktur.",
          },
          {
            swedish:
              "Genom att använda metaforer och upprepningar ville jag göra talet mer levande och minnesvärt.",
            explanation:
              "Elocutio — att formulera budskapet med språkliga stilmedel som förstärker effekten.",
          },
        ],
        keyRules: [
          "Inventio: Samla bred kunskap och starka argument innan du börjar skriva.",
          "Dispositio: Strukturera talet med en tydlig inledning, mittdel och avslutning.",
          "Elocutio: Välj ord och stilfigurer som passar ämnet, publiken och tillfället.",
          "Memoria: Öva tills du kan tala fritt utan att läsa innantill.",
          "Actio: Framför talet med rätt tonfall, tempo, kroppsspråk och ögonkontakt.",
        ],
      },
      {
        id: "ret-grund-3",
        title: "Publiken i centrum: att analysera sin målgrupp",
        description:
          "Förstå hur du anpassar ditt budskap efter publikens förkunskaper, förväntningar och attityder för maximal genomslagskraft.",
        examples: [
          {
            swedish:
              "Inför föräldramötet valde jag att undvika facktermer och istället använda vardagliga exempel.",
            explanation:
              "Talaren anpassar språknivån efter en publik som inte har specialistkunskaper.",
          },
          {
            swedish:
              "Eftersom publiken redan var skeptisk till förslaget började jag med att erkänna deras invändningar.",
            explanation:
              "Att möta motstånd genom att visa förståelse för publikens perspektiv stärker talarens trovärdighet.",
          },
          {
            swedish:
              "Jag visste att åhörarna var trötta efter en lång dag, så jag kortade ner talet och lade in humor.",
            explanation:
              "Praktisk publikanpassning — hänsyn tas till åhörarnas fysiska och mentala tillstånd.",
          },
        ],
        keyRules: [
          "Ta alltid reda på vem du talar till innan du förbereder ditt tal.",
          "Anpassa ordval, exempel och ton efter publikens kunskapsnivå.",
          "Identifiera publikens inställning — är de positiva, neutrala eller skeptiska?",
          "Använd exempel och referenser som publiken kan känna igen sig i.",
        ],
      },
    ],
  },
  {
    id: "retorik-tal-presentation",
    title: "Tal & presentationsteknik",
    category: "Presentation",
    lessons: [
      {
        id: "ret-pres-1",
        title: "Att strukturera ett tal: inledning, kropp och avslutning",
        description:
          "Lär dig bygga upp ett tal med en fängslande inledning, en välstrukturerad mittdel och en kraftfull avslutning som stannar kvar hos publiken.",
        examples: [
          {
            swedish:
              "Visste ni att en genomsnittlig svensk tillbringar fem år av sitt liv i kö? I dag ska jag tala om tålamod.",
            explanation:
              "En överraskande faktauppgift som inledning väcker nyfikenhet och fångar publikens uppmärksamhet direkt.",
          },
          {
            swedish:
              "Mitt första argument är att det skapar trygghet. Mitt andra argument handlar om ekonomi. Och det tredje berör vår framtid.",
            explanation:
              "Tydlig disposition med en trestegsstruktur ger lyssnaren en karta att följa genom talet.",
          },
          {
            swedish:
              "Så nästa gång ni står i kön, tänk på att tålamod inte bara är en dygd — det är en superkraft. Tack.",
            explanation:
              "Avslutningen knyter an till inledningen, skapar en cirkelkomposition och ger talet en stark slutpoäng.",
          },
        ],
        keyRules: [
          "Inledningen ska fånga intresse — använd frågor, citat, anekdoter eller överraskande fakta.",
          "Mittdelen bör ha 2–4 tydliga huvudpunkter som utvecklas med exempel och argument.",
          "Avslutningen sammanfattar och landar i en stark slutkläm eller uppmaning till handling.",
          "Cirkelkomposition — att återknyta till inledningen — ger en polerad känsla.",
          "Signalera övergångar tydligt så att publiken alltid vet var i talet du befinner dig.",
        ],
      },
      {
        id: "ret-pres-2",
        title: "Visuella hjälpmedel och bildspel",
        description:
          "Lär dig använda presentationsverktyg effektivt — bilder, diagram och nyckelord istället för texttunga bilder som stjäl publikens uppmärksamhet.",
        examples: [
          {
            swedish:
              "Istället för en bild full av text visade jag ett enda fotografi av en överfull klassrum och lät bilden tala.",
            explanation:
              "En stark bild utan text tvingar publiken att lyssna på talaren istället för att läsa från skärmen.",
          },
          {
            swedish:
              "Jag använde ett enkelt stapeldiagram för att visa kostnadsökningen — siffror behöver inte vara komplicerade.",
            explanation:
              "Visuella data bör vara enkla att avläsa och stödja, inte ersätta, det talade ordet.",
          },
        ],
        keyRules: [
          "Bilder ska stödja ditt budskap, inte ersätta det — tala aldrig direkt från bilderna.",
          "Använd max 6 ord per rad och max 6 rader per bild (sexregeln).",
          "Välj bilder av hög kvalitet som väcker känsla eller illustrerar poängen.",
          "Undvik animationer och ljudeffekter som distraherar från innehållet.",
        ],
      },
      {
        id: "ret-pres-3",
        title: "Nervositet och scenvana",
        description:
          "Hantera talängslan och bygg självförtroende genom förberedelse, andningsteknik och successiv exponering.",
        examples: [
          {
            swedish:
              "Innan jag gick upp på scenen tog jag tre djupa andetag och påminde mig om att publiken vill att jag ska lyckas.",
            explanation:
              "Djupandning aktiverar det parasympatiska nervsystemet och minskar stressreaktionen.",
          },
          {
            swedish:
              "De första gångerna övade jag framför spegeln, sedan inför vänner, och till sist inför hela klassen.",
            explanation:
              "Gradvis exponering bygger scenvana steg för steg och minskar rädslan successivt.",
          },
          {
            swedish:
              "Jag lärde mig att nervositet och entusiasm känns likadant i kroppen — det handlar om hur man tolkar känslan.",
            explanation:
              "Omtolkning av nervositet som positiv energi är en beprövad psykologisk strategi.",
          },
        ],
        keyRules: [
          "Förberedelse är det bästa botemedlet mot nervositet — ju bättre du kan ditt material, desto tryggare känner du dig.",
          "Använd djupandning och pauser för att återfå kontroll över rösten och tempot.",
          "Se nervositet som energi snarare än rädsla — omtolka känslan positivt.",
          "Öva inför riktiga personer i trygga sammanhang innan stora framträdanden.",
          "Fokusera på budskapet och publiken, inte på dig själv.",
        ],
      },
    ],
  },
  {
    id: "retorik-argumentation",
    title: "Argumentationsteknik",
    category: "Debatt",
    lessons: [
      {
        id: "ret-arg-1",
        title: "Olika typer av argument",
        description:
          "Lär dig skilja mellan faktaargument, värdeargument, auktoritetsargument och erfarenhetsargument — och när vart och ett är mest effektivt.",
        examples: [
          {
            swedish:
              "Forskning från Karolinska institutet visar att regelbunden motion minskar risken för depression med 30 procent.",
            explanation:
              "Ett faktaargument som grundar sig på vetenskaplig forskning och statistik från en trovärdig källa.",
          },
          {
            swedish:
              "I ett demokratiskt samhälle bör alla ha rätt till en bostad — det handlar om grundläggande mänsklig värdighet.",
            explanation:
              "Ett värdeargument som bygger på moraliska och demokratiska principer snarare än fakta.",
          },
          {
            swedish:
              "Som min mormor brukade säga: den som aldrig gör misstag lär sig aldrig något nytt.",
            explanation:
              "Ett erfarenhetsargument kryddat med ett citat som ger en personlig och folklig tyngd.",
          },
        ],
        keyRules: [
          "Faktaargument är starkast i sakfrågor — stöd dem alltid med trovärdiga källor.",
          "Värdeargument fungerar bäst när publiken delar dina grundvärderingar.",
          "Auktoritetsargument kräver att auktoriteten är relevant och erkänd inom ämnet.",
          "Blanda olika argumenttyper för att nå både hjärna och hjärta.",
          "Var tydlig med vilken typ av argument du för — blandar du fakta och värderingar utan att vara tydlig förlorar du trovärdighet.",
        ],
      },
      {
        id: "ret-arg-2",
        title: "Att bygga en argumentationskedja",
        description:
          "Lär dig skapa övertygande resonemang genom att länka tes, argument och stöd i en logisk kedja som leder till en stark slutsats.",
        examples: [
          {
            swedish:
              "Min tes är att skolmaten bör bli ekologisk. Det gynnar elevernas hälsa, det stödjer hållbart jordbruk, och det skapar medvetenhet om matval.",
            explanation:
              "En tydlig tes följs av tre stödjande argument som bildar en logisk kedja.",
          },
          {
            swedish:
              "Om vi satsar på kollektivtrafik minskar utsläppen. Minskar utsläppen förbättras luftkvaliteten. Bättre luft leder till färre sjukdomar. Alltså sparar vi pengar i sjukvården.",
            explanation:
              "En stegvis argumentationskedja där varje slutsats blir premiss för nästa steg — så kallat kedjeresonemang.",
          },
        ],
        keyRules: [
          "Formulera alltid en tydlig tes innan du börjar argumentera.",
          "Varje argument bör ha minst ett konkret stöd: exempel, statistik eller citat.",
          "Ordna argumenten med det starkaste sist för att avsluta med kraft.",
          "Kontrollera att det finns logiska kopplingar mellan alla steg i kedjan.",
        ],
      },
    ],
  },
  {
    id: "retorik-kroppssprak-rost",
    title: "Kroppsspråk & röst",
    category: "Presentation",
    lessons: [
      {
        id: "ret-kropp-1",
        title: "Kroppsspråkets betydelse i tal",
        description:
          "Utforska hur gester, hållning, ansiktsuttryck och ögonkontakt påverkar hur ditt budskap uppfattas och förstärker eller underminerar dina ord.",
        examples: [
          {
            swedish:
              "Hon stod med rak rygg, öppna handflator och såg rakt ut mot publiken — redan innan hon sa ett ord utstrålade hon trygghet.",
            explanation:
              "Öppen kroppshållning och ögonkontakt signalerar självförtroende och skapar förtroende hos åhörarna.",
          },
          {
            swedish:
              "Medan han talade om samarbete korsade han armarna och tittade ner i golvet — orden och kroppen sa helt olika saker.",
            explanation:
              "Inkongruens mellan kroppsspråk och verbalt budskap skapar förvirring och minskar talarens trovärdighet.",
          },
          {
            swedish:
              "Hon använde en bred gest med båda händerna när hon sa 'alla medborgare' — rörelsen förstärkte ordets betydelse.",
            explanation:
              "Medvetna gester som matchar innehållet gör talet mer dynamiskt och lättare att följa.",
          },
        ],
        keyRules: [
          "Kroppsspråket utgör en stor del av kommunikationen — se till att det stämmer överens med dina ord.",
          "Håll ögonkontakt med publiken genom att fördela blicken jämnt i rummet.",
          "Undvik vanor som att vicka, pilla med pennan eller titta ner i manuset.",
          "Använd gester medvetet för att förstärka nyckelpoänger.",
          "Stå stadigt med vikten jämnt fördelad — det utstrålar trygghet och auktoritet.",
        ],
      },
      {
        id: "ret-kropp-2",
        title: "Röstanvändning: tempo, volym och betoning",
        description:
          "Träna på att använda rösten som ett instrument — variera tempo, styrka och tonhöjd för att skapa engagemang och understryka ditt budskap.",
        examples: [
          {
            swedish:
              "Hon sänkte rösten till nästan en viskning och sa: 'Det här... förändrade allt.' Hela salen var tyst.",
            explanation:
              "Att sänka volymen skapar intimitet och tvingar publiken att lyssna mer uppmärksamt.",
          },
          {
            swedish:
              "Efter en lång paus sa han med stark röst: 'Nu är det dags att agera!' Kontrasten gav orden enorm kraft.",
            explanation:
              "Pauser följda av ökad volym skapar dramatisk effekt och markerar att något viktigt kommer.",
          },
          {
            swedish:
              "Hon varierade tempot — snabbt när hon beskrev kaos, långsamt och tydligt när hon presenterade lösningen.",
            explanation:
              "Tempovariation speglar innehållets karaktär och hjälper lyssnaren att känna skillnaden.",
          },
        ],
        keyRules: [
          "Variera tempot — monotont tal söver publiken, medan variation skapar dynamik.",
          "Använd pauser medvetet: före och efter viktiga poänger, och för att ge publiken tid att tänka.",
          "Sänk rösten för att skapa allvar eller intimitet, höj den för att uttrycka engagemang.",
          "Betona nyckelord genom att lägga extra tyngd på dem — det styr publikens fokus.",
        ],
      },
    ],
  },
  {
    id: "retorik-overtalning",
    title: "Övertalning & påverkan",
    category: "Retorik",
    lessons: [
      {
        id: "ret-overt-1",
        title: "Persuasiva tekniker: från antiken till idag",
        description:
          "Lär dig klassiska och moderna övertalningsstrategier som reciprocitet, socialt bevis, knapphet och konsekvens — och hur de används i tal och text.",
        examples: [
          {
            swedish:
              "Nio av tio tandläkare rekommenderar denna tandkräm — kan verkligen alla ha fel?",
            explanation:
              "Socialt bevis — vi tenderar att följa majoriteten, särskilt när auktoriteter ingår i gruppen.",
          },
          {
            swedish:
              "Erbjudandet gäller bara denna vecka — sedan höjs priset med 40 procent.",
            explanation:
              "Knapphetsprincipen — begränsad tillgång eller tid ökar det upplevda värdet och driver till handling.",
          },
          {
            swedish:
              "Du sa ju själv förra mötet att vi behöver satsa mer på innovation. Det här förslaget gör just det.",
            explanation:
              "Konsekvensprincipen — människor vill vara konsekventa med sina tidigare uttalanden och handlingar.",
          },
          {
            swedish:
              "Eftersom ni generöst delade med er av er tid förra gången vill jag nu erbjuda er en kostnadsfri uppföljning.",
            explanation:
              "Reciprocitet — vi känner oss skyldiga att ge tillbaka när vi fått något, även om det är en liten gest.",
          },
        ],
        keyRules: [
          "Socialt bevis fungerar bäst när referensgruppen liknar din publik.",
          "Knapphetsprincipen är kraftfull men bör användas ärligt — falsk knapphet skadar förtroendet.",
          "Konsekvensprincipen förutsätter att du känner till personens tidigare ståndpunkt.",
          "Reciprocitet börjar med att ge — var generös utan att ställa omedelbara krav.",
          "Etisk övertalning bygger långsiktiga relationer; manipulation förstör dem.",
        ],
      },
      {
        id: "ret-overt-2",
        title: "Berättelsens kraft: storytelling som retoriskt verktyg",
        description:
          "Utforska hur berättelser skapar identifikation, väcker känslor och gör abstrakta budskap konkreta och minnesvärda.",
        examples: [
          {
            swedish:
              "När jag var tolv år stod jag på en scen för första gången. Knäna skakade, rösten sprack — men jag klarade det. Den kvällen bestämde jag mig för att aldrig låta rädslan bestämma.",
            explanation:
              "En personlig berättelse med konkreta detaljer skapar identifikation och visar sårbarhet som stärker ethos.",
          },
          {
            swedish:
              "Tänk er Maria, ensamstående mamma med två barn, som tvingas välja mellan att betala hyran eller köpa mat. Hennes historia är inte unik — den delas av tusentals familjer.",
            explanation:
              "En fiktiv men realistisk berättelse sätter ansikte på ett abstrakt samhällsproblem och väcker pathos.",
          },
          {
            swedish:
              "Den lilla fröplantan som växte genom asfalten blev symbolen för hela deras motståndskamp.",
            explanation:
              "En metaforisk berättelse som förvandlar ett abstrakt koncept (motståndskraft) till en konkret, visuell bild.",
          },
        ],
        keyRules: [
          "En bra berättelse har en karaktär, en konflikt och en lösning eller insikt.",
          "Personliga berättelser skapar starkast koppling — våga vara sårbar och äkta.",
          "Använd konkreta detaljer: sinnesintryck, platser och namn gör berättelsen levande.",
          "Knyt alltid berättelsen till ditt huvudbudskap — den ska tjäna ett syfte, inte bara underhålla.",
        ],
      },
      {
        id: "ret-overt-3",
        title: "Framing: att rama in budskapet",
        description:
          "Lär dig hur valet av perspektiv, ordval och vinkling påverkar hur ett budskap uppfattas — utan att ändra själva sakfrågan.",
        examples: [
          {
            swedish:
              "Regeringen har investerat tio miljarder i infrastruktur för att stärka landsbygden.",
            explanation:
              "Positiv framing — ordet 'investerat' signalerar framåtblick och medveten satsning.",
          },
          {
            swedish:
              "Regeringen har slösat bort tio miljarder av skattebetalarnas pengar på motorvägar i glesbygden.",
            explanation:
              "Negativ framing — samma sak beskrivs med ord som 'slösat bort' och 'glesbygd' för att skapa motstånd.",
          },
        ],
        keyRules: [
          "Framing handlar om att välja vilka aspekter av verkligheten du lyfter fram.",
          "Ordval styr känsla — 'nedskärning' kontra 'effektivisering' beskriver samma sak men väcker olika reaktioner.",
          "Var medveten om andras framing — fråga dig alltid vad som utelämnas.",
          "Den som sätter ramen för diskussionen har ofta ett övertag i debatten.",
        ],
      },
    ],
  },
  {
    id: "retorik-debatteknik",
    title: "Debatteknik",
    category: "Debatt",
    lessons: [
      {
        id: "ret-debatt-1",
        title: "Struktur och strategi i debatt",
        description:
          "Lär dig grunderna i formell debatt: hur du förbereder dig, organiserar dina argument och bemöter motståndaren på ett effektivt och respektfullt sätt.",
        examples: [
          {
            swedish:
              "Min ståndpunkt är att kärnkraft är nödvändig för klimatomställningen. Jag kommer att presentera tre argument: pålitlighet, låga utsläpp och teknologisk utveckling.",
            explanation:
              "En tydlig tesformulering följd av en kort översikt ger lyssnaren struktur och skapar förväntning.",
          },
          {
            swedish:
              "Min motståndare hävdar att vindkraft räcker, men hen bortser helt från frågan om energilagring vid vindstilla.",
            explanation:
              "Att identifiera luckor i motståndarens argumentation är en effektiv debattstrategi.",
          },
          {
            swedish:
              "Låt mig sammanfatta: vi har visat att kärnkraft är pålitlig, klimatvänlig och under ständig teknisk förbättring. Svaret är tydligt.",
            explanation:
              "En kort sammanfattning i slutrepliken förstärker de viktigaste poängerna och lämnar ett starkt intryck.",
          },
        ],
        keyRules: [
          "Formulera en tydlig tes som du konsekvent försvarar genom hela debatten.",
          "Förbered motargument i förväg — försök förutse vad motståndaren kommer att säga.",
          "Lyssna aktivt på motståndaren och bemöt specifika påståenden, inte generaliseringar.",
          "Håll dig saklig och respektfull — personangrepp underminerar din trovärdighet.",
          "Avsluta starkt med en sammanfattning som driver hem ditt huvudbudskap.",
        ],
      },
      {
        id: "ret-debatt-2",
        title: "Vanliga debattfel och fällor",
        description:
          "Identifiera och undvik logiska felslut som halmgubbar, falska dilemman, ad hominem och cirkelresonemang i debatt och argumentation.",
        examples: [
          {
            swedish:
              "Min motståndare vill ha mer invandring — hen vill alltså ha helt öppna gränser utan kontroll.",
            explanation:
              "Halmgubbe — motståndarens ståndpunkt överdrivs eller förvrängs för att bli lättare att angripa.",
          },
          {
            swedish:
              "Antingen sänker vi skatterna eller så går landet under. Det finns inget tredje alternativ.",
            explanation:
              "Falskt dilemma — en komplex fråga reduceras till bara två alternativ och alla mellanvägar ignoreras.",
          },
          {
            swedish:
              "Vi vet att det är rätt för att alla tycker så, och alla tycker så för att det är rätt.",
            explanation:
              "Cirkelresonemang — slutsatsen används som premiss för sig själv utan oberoende stöd.",
          },
        ],
        keyRules: [
          "Lär dig känna igen halmgubbar — bemöt alltid motståndarens faktiska argument, inte en förenklad version.",
          "Undvik falska dilemman — verkligheten har nästan alltid fler än två alternativ.",
          "Ad hominem (personangrepp) handlar om personen, inte saken — det är aldrig ett giltigt argument.",
          "Kontrollera om ditt eget resonemang är cirkulärt — varje steg måste ha oberoende stöd.",
        ],
      },
    ],
  },
  {
    id: "retorik-medier",
    title: "Retorik i medier",
    category: "Media",
    lessons: [
      {
        id: "ret-media-1",
        title: "Politisk retorik och medielogik",
        description:
          "Analysera hur politiker och offentliga personer anpassar sin retorik till mediernas format — korta citat, starka bilder och upprepning av kärnbudskap.",
        examples: [
          {
            swedish:
              "Vi lovar: fler jobb, lägre skatt, tryggare Sverige. Tre ord, tre löften, en röst.",
            explanation:
              "Tredelad upprepning och korta slagkraftiga budskap är anpassade för nyhetsinslag och rubriker.",
          },
          {
            swedish:
              "Journalisten ställde en fråga om sjukvården, men politikern svarade med att tala om den starka ekonomin.",
            explanation:
              "Brobuilding (bridging) — en vanlig medieteknik där talaren styr bort från frågan till sitt eget budskap.",
          },
          {
            swedish:
              "Statsministern upprepade frasen 'vi tar ansvar' sju gånger under den tjugo minuter långa presskonferensen.",
            explanation:
              "Strategisk upprepning (anafora) planterar nyckelord i lyssnarens medvetande och skapar en tydlig association.",
          },
        ],
        keyRules: [
          "I medieretorik gäller: kort, tydligt och minnesvärt — komplexa resonemang klipps ofta bort.",
          "Förbered talande citat (soundbites) som fungerar fristående i en rubrik.",
          "Brobuilding är effektivt men genomskådas lätt — använd det sparsamt och skickligt.",
          "Var medveten om att medier väljer vinkel — förbered dig för att bli citerad ur sitt sammanhang.",
        ],
      },
      {
        id: "ret-media-2",
        title: "Retorik i sociala medier och digitala texter",
        description:
          "Lär dig hur retoriska principer tillämpas i kortare format som tweets, debattinlägg, bloggar och videor i den digitala offentligheten.",
        examples: [
          {
            swedish:
              "I sin tråd på sociala medier inledde hon med en provocerande fråga: 'Varför accepterar vi att barn går hungriga i ett av världens rikaste länder?'",
            explanation:
              "Retoriska frågor fungerar utmärkt digitalt — de väcker engagemang och uppmanar till delning.",
          },
          {
            swedish:
              "Han avslutade sitt inlägg med en tydlig uppmaning: 'Dela det här om du tycker att alla barn förtjänar en trygg uppväxt.'",
            explanation:
              "Call to action — en direkt uppmaning till handling är avgörande i digitala texter för att skapa spridning.",
          },
        ],
        keyRules: [
          "Digitala texter kräver omedelbar fångst — de första orden avgör om någon läser vidare.",
          "Anpassa längden efter plattformen: kort och slagkraftigt i flödet, djupare i bloggar.",
          "Retoriska frågor och direkta tilltal ökar engagemang i kommentarsfält.",
          "En tydlig uppmaning till handling (call to action) ökar sannolikheten för respons och delning.",
          "Tänk på att digital text ofta läses utan tonfall — var extra tydlig med din avsikt.",
        ],
      },
      {
        id: "ret-media-3",
        title: "Källkritik och retorik: att genomskåda manipulation",
        description:
          "Utveckla din förmåga att identifiera retoriska trick, propaganda och vilseledande argumentation i nyheter, reklam och debattinlägg.",
        examples: [
          {
            swedish:
              "Artikeln hänvisade till 'forskare' utan att nämna vilka, var studien publicerades eller hur den genomfördes.",
            explanation:
              "Vaga auktoritetshänvisningar är ett varningstecken — trovärdiga källor går att kontrollera.",
          },
          {
            swedish:
              "Reklamen visade en familj i solsken och sa: 'Välj trygghet — välj oss.' Inga fakta, bara känsla.",
            explanation:
              "Känslomässig manipulation utan faktastöd — pathos utan logos är ett retoriskt trick i reklam.",
          },
          {
            swedish:
              "Debattören sa: 'Alla vet att detta är sant' — men det var hans enda argument.",
            explanation:
              "Att hävda att något är självklart utan bevis är ett logiskt felslut (argumentum ad populum).",
          },
        ],
        keyRules: [
          "Kontrollera alltid vem som säger något, varför, och vilka belägg som presenteras.",
          "Var extra vaksam när någon spelar på starka känslor utan att erbjuda fakta.",
          "Vaga formuleringar som 'man vet att' och 'alla forskare säger' är varningssignaler.",
          "Sök alltid primärkällan — andrahandsrapportering kan förvränga budskapet.",
        ],
      },
    ],
  },
  {
    id: "retorik-kritik-motargument",
    title: "Kritik & motargument",
    category: "Debatt",
    lessons: [
      {
        id: "ret-kritik-1",
        title: "Att ge och ta emot konstruktiv kritik",
        description:
          "Lär dig formulera kritik som är tydlig, saklig och framåtblickande — och att ta emot kritik utan att gå i försvar.",
        examples: [
          {
            swedish:
              "Jag tycker att din argumentation är logisk, men den saknar konkreta exempel som gör den övertygande.",
            explanation:
              "Konstruktiv kritik börjar med något positivt och pekar sedan på en specifik förbättringsmöjlighet.",
          },
          {
            swedish:
              "Tack för din feedback. Jag förstår att inledningen var otydlig och ska arbeta om den.",
            explanation:
              "Att ta emot kritik genom att bekräfta, visa förståelse och ange nästa steg visar mognad.",
          },
          {
            swedish:
              "Istället för att säga 'det var dåligt' kan du pröva: 'Jag tror att det skulle bli starkare om du la till ett personligt exempel.'",
            explanation:
              "Att formulera kritik som förslag snarare än domar gör den lättare att ta till sig.",
          },
        ],
        keyRules: [
          "Fokusera på saken, inte personen — kritisera argumentet, aldrig den som framför det.",
          "Var specifik — 'det var otydligt' hjälper mindre än 'andra stycket saknar en koppling till tesen'.",
          "Erbjud alltid ett alternativ eller en väg framåt tillsammans med kritiken.",
          "När du tar emot kritik: lyssna färdigt, ställ frågor och undvik att försvara dig direkt.",
        ],
      },
      {
        id: "ret-kritik-2",
        title: "Att bemöta motargument effektivt",
        description:
          "Träna på att analysera motståndarens argument, hitta svagheter och formulera slagkraftiga svar som stärker din egen position.",
        examples: [
          {
            swedish:
              "Du säger att kostnaderna är för höga, men du har inte räknat med de långsiktiga besparingarna som förslaget ger.",
            explanation:
              "Att peka på vad motargumentet utelämnar är en effektiv strategi som vänder argumentet mot avsändaren.",
          },
          {
            swedish:
              "Ja, det stämmer att omställningen kostar pengar. Men frågan är: har vi råd att inte göra den?",
            explanation:
              "Att erkänna motståndarens poäng och sedan ställa en retorisk motfråga visar styrka och nyanserat tänkande.",
          },
          {
            swedish:
              "Det exemplet gäller en helt annan situation — vi talar om svenska förhållanden, inte amerikanska.",
            explanation:
              "Att ifrågasätta relevansen av motståndarens exempel underminerar argumentets bärkraft.",
          },
        ],
        keyRules: [
          "Lyssna noga på motargumentet innan du svarar — missförstånd försvagar din position.",
          "Erkänn starka poänger — det visar intellektuell hederlighet och stärker din trovärdighet.",
          "Sök efter dolda premisser i motståndarens argument och ifrågasätt dem.",
          "Retoriska motfrågor kan vara kraftfullare än direkta svar.",
          "Undvik att upprepa motståndarens negativa formuleringar — omformulera med dina egna ord.",
        ],
      },
    ],
  },
  {
    id: "retorik-improvisation",
    title: "Improvisation & spontant tal",
    category: "Presentation",
    lessons: [
      {
        id: "ret-impro-1",
        title: "Spontant tal och stegreifsteknik",
        description:
          "Lär dig tekniker för att tala utan förberedelse — hur du snabbt strukturerar dina tankar och håller dig lugn och sammanhängande under press.",
        examples: [
          {
            swedish:
              "När chefen plötsligt bad mig presentera projektet använde jag PREP-modellen: Poäng, Resonemang, Exempel, Poäng igen.",
            explanation:
              "PREP är en enkel struktur som ger spontana svar en tydlig början, mitt och slut.",
          },
          {
            swedish:
              "Jag köpte mig tid genom att säga: 'Det är en viktig fråga. Låt mig tänka en sekund.' Sedan samlade jag mina tankar.",
            explanation:
              "Att öppet be om en kort stund att tänka är bättre än att prata planlöst eller stamma fram ett svar.",
          },
          {
            swedish:
              "Förr–nu–framtid: Så här var det, så här är det, och så här kan det bli. En enkel ram som alltid fungerar.",
            explanation:
              "Tidslinjestrukturen (förr–nu–framtid) ger ett naturligt flöde som de flesta lyssnare kan följa.",
          },
        ],
        keyRules: [
          "Använd enkla strukturmodeller som PREP eller förr–nu–framtid för att snabbt organisera tankar.",
          "Det är helt acceptabelt att ta en kort paus innan du svarar — tystnad är bättre än utfyllnadsord.",
          "Börja med det du vet — bygg sedan vidare därifrån.",
          "Öva stegreiftal regelbundet: välj ett slumpmässigt ämne och tala i en minut.",
          "Avsluta alltid med en tydlig slutmening, även om du improviserar.",
        ],
      },
      {
        id: "ret-impro-2",
        title: "Att hantera oväntade frågor och situationer",
        description:
          "Träna på att behålla lugnet vid svåra frågor, oväntade invändningar och besvärliga situationer under presentationer och möten.",
        examples: [
          {
            swedish:
              "När en åhörare ställde en fientlig fråga svarade jag: 'Tack för frågan. Den lyfter en viktig aspekt som jag gärna utvecklar.'",
            explanation:
              "Att tacka för frågan och omformulera den positivt ger dig kontroll och tid att tänka.",
          },
          {
            swedish:
              "Jag visste inte svaret, så jag sa ärligt: 'Det har jag inte siffror på just nu, men jag återkommer med det.'",
            explanation:
              "Ärlighet vid kunskapsluckor bevarar trovärdigheten — att gissa är riskabelt.",
          },
          {
            swedish:
              "Tekniken krånglade mitt under presentationen, men jag skämtade: 'Uppenbarligen vill datorn inte att ni ska se det här diagrammet — men jag kan berätta.'",
            explanation:
              "Humor i oväntade situationer visar självförtroende och gör publiken till en medspelare.",
          },
        ],
        keyRules: [
          "Förbered dig på de svåraste frågorna i förväg — tänk igenom vad motståndare kan fråga.",
          "Omformulera fientliga frågor till neutrala innan du svarar.",
          "Var ärlig om du inte vet svaret — det stärker din trovärdighet mer än att gissa.",
          "Humor kan avväpna spända situationer, men den måste vara vänlig och inkluderande.",
        ],
      },
    ],
  },
  {
    id: "retorik-figurer-stilmedel",
    title: "Retoriska figurer & stilmedel",
    category: "Retorik",
    lessons: [
      {
        id: "ret-stil-1",
        title: "Upprepning, kontrast och trestegsregel",
        description:
          "Lär dig de mest kraftfulla retoriska stilfigurerna: anafora, antites och tretal — och hur de skapar rytm, klarhet och minnesvärdhet.",
        examples: [
          {
            swedish:
              "Vi ska kämpa på stränderna, vi ska kämpa på landningsplatserna, vi ska kämpa på fälten och på gatorna.",
            explanation:
              "Anafora — samma ord eller fras upprepas i början av varje sats, vilket skapar rytm och kraft.",
          },
          {
            swedish:
              "Det handlar inte om vad landet kan göra för dig, utan om vad du kan göra för landet.",
            explanation:
              "Antites — två motsatta idéer ställs mot varandra i en parallell struktur, vilket skapar skärpa och tydlighet.",
          },
          {
            swedish:
              "Frihet, jämlikhet, broderskap — tre ord som förändrade historien.",
            explanation:
              "Tretal (trikolon) — tre parallella element skapar en naturlig rytm som känns komplett och slagkraftig.",
          },
          {
            swedish:
              "Hon kom, hon såg, hon segrade — och ingen kunde stoppa henne.",
            explanation:
              "Trikolon kombinerat med stigande intensitet (klimax) — varje led bygger upp mot ett kraftfullt crescendo.",
          },
        ],
        keyRules: [
          "Anafora (upprepning) fungerar bäst i tre eller fler led för att skapa rytm och betoning.",
          "Antites (kontrast) tvingar lyssnaren att välja sida och tydliggör ditt budskap.",
          "Tretal (trikolon) upplevs som naturligt komplett — två känns för lite, fyra för mycket.",
          "Kombinera stilfigurerna med varandra för starkast effekt, men överanvänd inte — det blir platt.",
          "Öva på att skriva om vardagliga påståenden med retoriska figurer för att träna örat.",
        ],
      },
      {
        id: "ret-stil-2",
        title: "Metaforer, liknelser och retoriska frågor",
        description:
          "Utforska hur bildspråk och retoriska frågor gör abstrakta idéer konkreta, väcker nyfikenhet och skapar starka inre bilder hos lyssnaren.",
        examples: [
          {
            swedish:
              "Kunskap är en nyckel som öppnar dörrar vi inte ens visste fanns.",
            explanation:
              "Metafor — kunskap beskrivs som en nyckel, vilket skapar en konkret bild av ett abstrakt begrepp.",
          },
          {
            swedish:
              "Att debattera med honom var som att spela schack mot en dator — beräknande, kallt och omöjligt att vinna.",
            explanation:
              "Liknelse med 'som' — jämförelsen med ett schackparti mot en dator ger en levande och relaterbar bild.",
          },
          {
            swedish:
              "Hur länge ska vi acceptera att barn inte har tillgång till rent vatten? Hur länge ska vi vänta?",
            explanation:
              "Retoriska frågor förväntar inget svar — de väcker eftertanke och skapar engagemang hos publiken.",
          },
        ],
        keyRules: [
          "Metaforer gör abstrakt konkret — välj bilder som din publik kan relatera till.",
          "Undvik klichéer — slitna metaforer som 'ljuset i tunneln' har förlorat sin kraft.",
          "Liknelser (med 'som' eller 'likt') är tydligare än metaforer och lättare att förstå.",
          "Retoriska frågor är kraftfullast i inledningar och avslutningar.",
          "Blanda inte metaforer — 'vi måste navigera genom elden och landa på fötterna' krockar bildligt.",
        ],
      },
      {
        id: "ret-stil-3",
        title: "Ironi, hyperbol och understatement",
        description:
          "Lär dig använda ironi, överdrift och underdrift som retoriska verktyg — och förstå riskerna med varje stilmedel.",
        examples: [
          {
            swedish:
              "Vilken fantastisk idé att höja skatten mitt i en lågkonjunktur — det kommer säkert att lösa allt.",
            explanation:
              "Ironi — talaren säger motsatsen till vad hen menar. Tonen och sammanhanget avslöjar den verkliga åsikten.",
          },
          {
            swedish:
              "Jag har sagt det en miljon gånger: vi måste bli bättre på att lyssna!",
            explanation:
              "Hyperbol — en medveten överdrift som förstärker känslan och understryker frustration.",
          },
          {
            swedish:
              "Ja, det var väl en liten smula besvärligt att hela systemet kraschade mitt under lanseringen.",
            explanation:
              "Understatement (litotes) — att medvetet tona ner allvaret skapar humor och visar att talaren har perspektiv.",
          },
        ],
        keyRules: [
          "Ironi kräver rätt ton och kontext — i text utan tonfall riskerar den att missförstås.",
          "Hyperbol ska vara uppenbart överdriven — annars tolkas den som lögn eller okunnighet.",
          "Understatement fungerar bäst när alla i rummet förstår allvaret — kontrasterna skapar humor.",
          "Undvik ironi i känsliga ämnen eller mot personer som befinner sig i utsatta positioner.",
          "Dessa stilmedel är mest effektiva som kryddor, inte som huvudingrediens — använd dem sparsamt.",
        ],
      },
    ],
  },
];
