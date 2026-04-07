import type { Topic } from "@/lib/types";

export const litteraturTopics: Topic[] = [
  {
    id: "lit-noveller",
    title: "Läsning av noveller",
    category: "Läsning",
    lessons: [
      {
        id: "lit-noveller-1",
        title: "Novellens uppbyggnad och struktur",
        description:
          "Lär dig identifiera och analysera de grundläggande delarna i en novell: inledning, konflikt, klimax och upplösning.",
        examples: [
          {
            swedish:
              "Novellen inleds in medias res — mitt i handlingen — utan någon förklaring av bakgrunden.",
            explanation:
              "In medias res är en vanlig teknik i noveller där läsaren kastas rakt in i händelserna för att skapa spänning och nyfikenhet.",
          },
          {
            swedish:
              "Konflikten i 'Pälsen' av Hjalmar Söderberg är både yttre och inre: doktor Henck brottas med sitt samvete.",
            explanation:
              "Många noveller har en yttre handling (det som sker) och en inre konflikt (karaktärens tankar och känslor) som driver berättelsen framåt.",
          },
          {
            swedish:
              "Klimaxet nås när huvudpersonen tvingas fatta ett avgörande beslut som förändrar hela berättelsens riktning.",
            explanation:
              "Klimax är berättelsens vändpunkt och den mest spännande delen — efter det följer upplösningen.",
          },
        ],
        keyRules: [
          "En novell har alltid en tydlig konflikt som driver handlingen framåt.",
          "Tänk på berättelsens kronologi — används tillbakablickar eller förskjutningar i tid?",
          "Upplösningen i en novell behöver inte vara lycklig — den ska vara meningsfull.",
          "Lägg märke till hur inledningen sätter tonen och antyder temat.",
        ],
      },
      {
        id: "lit-noveller-2",
        title: "Berättarperspektiv i noveller",
        description:
          "Förstå skillnaden mellan olika berättarperspektiv och hur de påverkar läsarens upplevelse av texten.",
        examples: [
          {
            swedish:
              "Jag-berättaren i 'Ett halvt ark papper' av Strindberg gör att vi upplever sorgen inifrån.",
            explanation:
              "Jag-perspektivet skapar närhet och identifikation med huvudpersonen men begränsar synfältet till en enda karaktärs upplevelse.",
          },
          {
            swedish:
              "Den allvetande berättaren kan avslöja flera karaktärers tankar och ge läsaren en bredare bild av händelserna.",
            explanation:
              "Tredjepersons allvetande perspektiv ger författaren frihet att växla mellan karaktärer och avslöja information som ingen enskild figur känner till.",
          },
          {
            swedish:
              "Genom att använda en opålitlig berättare kan författaren skapa osäkerhet om vad som verkligen hänt.",
            explanation:
              "En opålitlig berättare tvingar läsaren att ifrågasätta det som berättas och leta efter ledtrådar i texten.",
          },
        ],
        keyRules: [
          "Identifiera alltid berättarperspektivet tidigt — det styr hur du tolkar hela texten.",
          "Jag-form skapar närhet; tredje person skapar distans och överblick.",
          "Opålitliga berättare kräver att du läser mellan raderna.",
          "Berättarperspektivet påverkar vilken information läsaren får — och inte får — ta del av.",
          "Fundera på varför författaren valde just det perspektivet.",
        ],
      },
      {
        id: "lit-noveller-3",
        title: "Miljö och stämning i noveller",
        description:
          "Analysera hur författare skapar stämning genom miljöbeskrivningar, ordval och tempo i berättelsen.",
        examples: [
          {
            swedish:
              "Det tunga regnet trummade mot fönsterrutan medan skuggorna kröp allt längre in i rummet.",
            explanation:
              "Vädret och ljuset används ofta som stämningsmarkörer — mörker och regn signalerar ofta oro, sorg eller fara.",
          },
          {
            swedish:
              "Söderberg beskriver Stockholms gator med en melankolisk precision som speglar karaktärernas inre tomhet.",
            explanation:
              "Miljön fungerar som en spegel för karaktärernas känslotillstånd — detta kallas pathetic fallacy eller stämningsanpassad miljö.",
          },
        ],
        keyRules: [
          "Miljöbeskrivningar är sällan bara dekoration — de förmedlar stämning och tema.",
          "Korta meningar skapar tempo och spänning, långa meningar skapar eftertanke.",
          "Färger, ljud och dofter i texten bidrar till att bygga upp en sinnesstämning.",
        ],
      },
    ],
  },
  {
    id: "lit-dikter",
    title: "Analys av dikter",
    category: "Analys",
    lessons: [
      {
        id: "lit-dikter-1",
        title: "Diktens form och struktur",
        description:
          "Lär dig analysera rim, rytm, versmått och strofindelning för att förstå hur formen stödjer innehållet.",
        examples: [
          {
            swedish:
              "Dikten följer ett korsrimmönster (ABAB) som ger texten en regelbunden och harmonisk rytm.",
            explanation:
              "Korsrim innebär att varannan rad rimmar — det skapar en känsla av ordning och balans i dikten.",
          },
          {
            swedish:
              "Edith Södergrans fria vers saknar fast rimmönster men har en stark inre rytm genom upprepningar.",
            explanation:
              "Fri vers ger poeten frihet att låta innehållet styra formen — rytmen skapas av ordval, radbrytning och upprepning snarare än av rim.",
          },
          {
            swedish:
              "Enjambementet i rad tre — där meningen fortsätter utan paus till nästa rad — skapar en känsla av rörelse och brådska.",
            explanation:
              "Enjambement bryter den förväntade pausen vid radslut och driver läsningen framåt, ofta för att förstärka en känsla eller tanke.",
          },
        ],
        keyRules: [
          "Identifiera rimmönstret: parrrim (AABB), korsrim (ABAB), omslutande rim (ABBA) eller fri vers.",
          "Radbrytningar i dikter är medvetna val — analysera varför poeten bryter raden just där.",
          "Enjambement skapar rörelse; punkt mitt i en rad (cesur) skapar paus och eftertanke.",
          "Diktens form och innehåll hänger ihop — fråga dig hur formen förstärker budskapet.",
        ],
      },
      {
        id: "lit-dikter-2",
        title: "Bildspråk och stilfigurer",
        description:
          "Utforska metaforer, liknelser, symboler och andra stilfigurer som ger dikter djup och flertydighet.",
        examples: [
          {
            swedish:
              "Karin Boye skriver: 'Ja visst gör det ont när knoppar brister.' Knopparna är en metafor för personlig utveckling.",
            explanation:
              "En metafor sätter likhetstecken mellan två saker utan att använda 'som' eller 'likt' — det ger bilden extra kraft och omedelbarhet.",
          },
          {
            swedish:
              "Personifieringen 'havet viskade sina hemligheter' ger naturen mänskliga egenskaper och skapar närhet.",
            explanation:
              "Personifiering innebär att man tillskriver icke-mänskliga ting mänskliga handlingar eller känslor, vilket gör det abstrakta konkret.",
          },
          {
            swedish:
              "Anaforen 'Jag vill…, jag vill…, jag vill…' i diktens tre sista strofer bygger upp en känsla av intensitet och längtan.",
            explanation:
              "Anafor är upprepning av samma ord eller fras i början av flera rader eller meningar — det skapar emfas och rytm.",
          },
          {
            swedish:
              "Allitterationen 'stilla sjöar speglar skogen' binder samman orden genom ljudlikhet och ger en musikalisk effekt.",
            explanation:
              "Allitteration innebär att flera ord i följd börjar med samma ljud — det förstärker rytmen och gör frasen minnesvärd.",
          },
        ],
        keyRules: [
          "Skilj mellan metafor (är) och liknelse (som/likt) — metaforen är starkare och mer direkt.",
          "Symboler kan ha både konventionell betydelse (ros = kärlek) och kontextbunden betydelse.",
          "Beskriv alltid stilfigurens effekt — inte bara att den finns.",
          "Bildspråk ger dikten flertydighet: samma bild kan tolkas på flera sätt.",
          "Upprepning i olika former (anafor, epifora, refräng) förstärker alltid något — fundera på vad.",
        ],
      },
      {
        id: "lit-dikter-3",
        title: "Tolkning och tematisk analys",
        description:
          "Öva på att formulera en sammanhängande tolkning av en dikt genom att koppla form, bildspråk och tema.",
        examples: [
          {
            swedish:
              "Dikten kan tolkas som en reflektion över livets förgänglighet — höstlöven symboliserar åldrandets ofrånkomlighet.",
            explanation:
              "En tolkning bör vara förankrad i texten: visa vilka ord, bilder och strukturer som stödjer din läsning.",
          },
          {
            swedish:
              "Det finns en spänning i dikten mellan längtan efter frihet och rädslan för det okända, vilket syns i kontrasten mellan 'öppna fält' och 'låsta dörrar'.",
            explanation:
              "Kontraster och motsatspar i dikter pekar ofta på ett centralt tema eller en inre konflikt.",
          },
        ],
        keyRules: [
          "En bra tolkning är alltid förankrad i texten — citera och hänvisa till specifika rader.",
          "Det finns sällan bara en 'rätt' tolkning — men varje tolkning måste kunna motiveras.",
          "Koppla form och innehåll: hur förstärker stilfigurerna diktens tema?",
        ],
      },
    ],
  },
  {
    id: "lit-karaktar",
    title: "Karaktärsutveckling i berättelser",
    category: "Analys",
    lessons: [
      {
        id: "lit-karaktar-1",
        title: "Direkt och indirekt karaktäristik",
        description:
          "Lär dig skilja mellan hur en författare direkt beskriver en karaktär och hur karaktären avslöjas indirekt genom handlingar, dialog och tankar.",
        examples: [
          {
            swedish:
              "Författaren skriver: 'Han var en slug och beräknande man.' Det är direkt karaktäristik.",
            explanation:
              "Vid direkt karaktäristik talar berättaren om för läsaren hur karaktären är — det är tydligt och omedelbart men lämnar lite utrymme för tolkning.",
          },
          {
            swedish:
              "Hon log mot barnen men vände sig bort och suckade tungt när de inte såg. Det är indirekt karaktäristik.",
            explanation:
              "Indirekt karaktäristik visar karaktärens egenskaper genom beteende och handlingar — läsaren drar egna slutsatser, vilket skapar djup.",
          },
          {
            swedish:
              "Karaktärens val av ord i dialogen — korta, vassa repliker — avslöjar otålighet och kontrollbehov.",
            explanation:
              "Dialogens stil säger mycket om en karaktär: formellt språk antyder distans, medan slang kan signalera närhet eller rebellion.",
          },
        ],
        keyRules: [
          "Direkt karaktäristik berättar — indirekt karaktäristik visar.",
          "Indirekt karaktäristik skapar djupare och mer trovärdiga karaktärer.",
          "Analysera alltid vad en karaktär gör, säger och tänker — inte bara vad berättaren påstår.",
          "Kontrasten mellan vad en karaktär säger och gör kan avslöja hyckleri eller inre konflikt.",
        ],
      },
      {
        id: "lit-karaktar-2",
        title: "Karaktärens utvecklingsbåge",
        description:
          "Analysera hur en karaktär förändras genom berättelsen och vad som driver den förändringen.",
        examples: [
          {
            swedish:
              "I början av romanen är Nils Holgersson självisk och grym mot djuren, men resan förändrar honom till en empatisk och omtänksam pojke.",
            explanation:
              "Nils genomgår en klassisk utvecklingsbåge: han har en brist, utsätts för prövningar och växer som person — en så kallad dynamisk karaktär.",
          },
          {
            swedish:
              "Bikaraktären herr Borg förblir lika bitter och misstänksam genom hela berättelsen — han är en statisk karaktär.",
            explanation:
              "Statiska karaktärer förändras inte. De kan fungera som kontrast till huvudpersonen eller representera en idé eller samhällstyp.",
          },
          {
            swedish:
              "Vändpunkten för huvudpersonen kommer när hon inser att hennes rädsla har hindrat henne från att leva fullt ut.",
            explanation:
              "De flesta utvecklingsbågar har en avgörande insikt eller händelse som markerar karaktärens inre förändring.",
          },
        ],
        keyRules: [
          "En dynamisk karaktär förändras; en statisk karaktär förblir densamma.",
          "Jämför karaktären i början och slutet av berättelsen — vad har förändrats och varför?",
          "Identifiera den avgörande vändpunkten som utlöser karaktärens förändring.",
          "Bikaraktärer kan spegla, kontrastera eller utmana huvudpersonens utveckling.",
          "Trovärdiga karaktärer har både styrkor och svagheter.",
        ],
      },
    ],
  },
  {
    id: "lit-tema",
    title: "Tema & budskap",
    category: "Analys",
    lessons: [
      {
        id: "lit-tema-1",
        title: "Att identifiera teman i en text",
        description:
          "Lär dig att urskilja övergripande teman i litterära texter och skilja mellan ämne, tema och budskap.",
        examples: [
          {
            swedish:
              "Ämnet i romanen är krig, men temat är hur krig förstör mänskliga relationer och bryter ner tillit.",
            explanation:
              "Ämnet är vad texten handlar om (krig), medan temat är den djupare frågan eller insikten texten utforskar.",
          },
          {
            swedish:
              "Ett återkommande tema i Astrid Lindgrens verk är barns rätt till frihet och fantasins kraft som motstånd mot vuxenvärldens begränsningar.",
            explanation:
              "Teman uttrycks sällan explicit — de framträder genom handlingen, karaktärerna och symboliken i texten.",
          },
          {
            swedish:
              "Texten har flera parallella teman: ensamhet, sökande efter identitet och konflikten mellan individ och samhälle.",
            explanation:
              "Komplexa texter har ofta flera teman som samverkar och berikar varandra — identifiera hur de hänger ihop.",
          },
        ],
        keyRules: [
          "Ämne = vad texten handlar om, tema = den underliggande idén, budskap = vad författaren vill säga.",
          "Teman uttrycks inte direkt — de framträder genom handling, karaktärer och symbolik.",
          "Formulera temat som en fras eller mening, inte ett enstaka ord: 'ensamhetens konsekvenser', inte bara 'ensamhet'.",
          "En text kan ha flera teman som överlappar och förstärker varandra.",
        ],
      },
      {
        id: "lit-tema-2",
        title: "Budskap och författarens intention",
        description:
          "Utforska hur en författares budskap kan tolkas och diskuteras, och vad som skiljer budskap från personlig åsikt.",
        examples: [
          {
            swedish:
              "Budskapet i novellen tycks vara att materiell rikedom inte leder till lycka — detta framgår genom huvudpersonens ökande tomhet trots framgång.",
            explanation:
              "Budskapet är den slutsats eller tanke som texten vill att läsaren ska ta med sig — det stöds av hur berättelsen utvecklas.",
          },
          {
            swedish:
              "Författarens avsikt och läsarens tolkning behöver inte sammanfalla — en text kan få nya betydelser i nya sammanhang.",
            explanation:
              "Inom litteraturvetenskap skiljer man ofta mellan intentionell läsning (vad författaren menade) och receptionsestetik (vad läsaren upplever).",
          },
        ],
        keyRules: [
          "Budskapet ska stödjas av texten — det är inte detsamma som din egen åsikt.",
          "Fråga: vad vill författaren att läsaren ska tänka, känna eller förstå efter läsningen?",
          "Olika läsare kan tolka samma budskap på olika sätt — det berikar texten.",
          "Var försiktig med att likställa berättarens röst med författarens åsikt.",
          "Kontexten (när, var och varför texten skrevs) kan påverka tolkningen av budskapet.",
        ],
      },
      {
        id: "lit-tema-3",
        title: "Motiv och symbolik kopplat till tema",
        description:
          "Förstå hur återkommande motiv och symboler i en text förstärker och fördjupar det övergripande temat.",
        examples: [
          {
            swedish:
              "Motivet vatten återkommer genom hela romanen — som regn, tårar och en svällande flod — och symboliserar karaktärens undertryckta känslor.",
            explanation:
              "Ett motiv är ett återkommande element (bild, föremål, situation) som bär tematisk betydelse genom sin upprepning.",
          },
          {
            swedish:
              "Spegeln i berättelsen fungerar som en symbol för självinsikt — varje gång karaktären ser sig i spegeln tvingas hon konfrontera sanningen.",
            explanation:
              "Symboler får sin betydelse genom sammanhanget — samma föremål kan symbolisera olika saker i olika texter.",
          },
        ],
        keyRules: [
          "Motiv är återkommande element — symboler bär djupare betydelse utöver sin bokstavliga mening.",
          "Koppla alltid symboler och motiv till textens övergripande tema.",
          "Sök efter mönster: vilka bilder, ord eller situationer upprepas?",
        ],
      },
    ],
  },
  {
    id: "lit-jamforelse",
    title: "Jämförelse mellan böcker",
    category: "Analys",
    lessons: [
      {
        id: "lit-jamforelse-1",
        title: "Att jämföra teman och budskap",
        description:
          "Utveckla din förmåga att jämföra hur två eller flera texter behandlar liknande teman på olika sätt.",
        examples: [
          {
            swedish:
              "Både 'Kallocain' av Karin Boye och 'Utvandrarna' av Vilhelm Moberg utforskar temat frihet — men ur helt olika perspektiv.",
            explanation:
              "En tematisk jämförelse lyfter fram likheter och skillnader i hur texter behandlar samma grundfråga, och visar att ett tema kan ha många uttryck.",
          },
          {
            swedish:
              "I 'Kallocain' hotas friheten av staten, medan den i 'Utvandrarna' begränsas av fattigdom och religiöst förtryck.",
            explanation:
              "Genom att specificera vad som hotar friheten i respektive verk fördjupas jämförelsen och undviker ytlighet.",
          },
          {
            swedish:
              "Trots att böckerna skrevs i olika epoker delar de en gemensam oro för individens plats i samhället.",
            explanation:
              "Att koppla likheter till historisk kontext visar att vissa teman är tidlösa och ständigt aktuella.",
          },
        ],
        keyRules: [
          "Jämför inte bara handlingen — jämför teman, budskap och karaktärernas utveckling.",
          "Använd strukturord som 'i likhet med', 'till skillnad från', 'å ena sidan… å andra sidan'.",
          "Fördjupa jämförelsen genom att fråga varför författarna valt olika angreppssätt.",
          "Placera verken i sina historiska sammanhang för att förstå skillnaderna.",
        ],
      },
      {
        id: "lit-jamforelse-2",
        title: "Att jämföra berättartekniker och stil",
        description:
          "Analysera hur olika författare använder berättartekniker, språk och struktur för att förmedla sina berättelser.",
        examples: [
          {
            swedish:
              "Lagerlöf använder en allvetande berättare med episkt berättande, medan Söderberg föredrar en återhållsam stil med jag-perspektiv.",
            explanation:
              "Genom att jämföra berättartekniker ser man hur formval påverkar läsupplevelsen och karaktärernas trovärdighet.",
          },
          {
            swedish:
              "Stilen i 'Doktor Glas' är avskalad och introspektiv — varje ord vägs — medan 'Gösta Berlings saga' svämmar över av poetiska skildringar.",
            explanation:
              "Stiljämförelse handlar om ordval, meningslängd, bildspråk och tempo: hur berättar författaren, inte bara vad.",
          },
        ],
        keyRules: [
          "Jämför berättarperspektiv, tempo, ordval och meningslängd systematiskt.",
          "Fråga dig hur berättartekniken påverkar läsarens upplevelse i respektive text.",
          "Visa med citat — en bra jämförelse förankras alltid i texternas språk.",
          "Stilen är aldrig slumpmässig — den är ett medvetet val som stödjer innehållet.",
        ],
      },
    ],
  },
  {
    id: "lit-historia",
    title: "Litteraturhistoria",
    category: "Litteratur",
    lessons: [
      {
        id: "lit-historia-1",
        title: "Epoköversikt: från fornnordisk till modern litteratur",
        description:
          "Få en översikt av de stora litterära epokerna i svensk litteraturhistoria och deras särdrag.",
        examples: [
          {
            swedish:
              "Under romantiken (ca 1810–1840) betonades känsla, natur och det nationella — Esaias Tegnér och Erik Gustaf Geijer är centrala namn.",
            explanation:
              "Romantiken var en reaktion mot upplysningens förnuftstro och framhävde imagination, natur och folkkultur som källor till sanning.",
          },
          {
            swedish:
              "Realismen och naturalismen (ca 1880–1900) ville skildra verkligheten utan försköning — August Strindberg och Victoria Benedictsson var banbrytande.",
            explanation:
              "Realismen strävade efter sanningsenlig skildring av samhälle och individ, ofta med social kritik, medan naturalismen betonade ärftlighetens och miljöns makt.",
          },
          {
            swedish:
              "Modernismen i Sverige (ca 1910–1950) bröt med traditionella former — Edith Södergran och Gunnar Ekelöf experimenterade med fri vers och fragmentariskt berättande.",
            explanation:
              "Modernismen utmanade etablerade normer inom språk och form och speglade en osäker, föränderlig värld efter världskrigen.",
          },
        ],
        keyRules: [
          "Varje litterär epok är både en reaktion mot och en vidareutveckling av den föregående.",
          "Lär dig de viktigaste epokerna: romantik, realism, naturalism, modernism och postmodernism.",
          "Koppla alltid epoker till deras historiska sammanhang — vad hände i samhället?",
          "Kännetecken för en epok syns i teman, stil och formval.",
          "Enskilda författare kan blanda drag från flera epoker.",
        ],
      },
      {
        id: "lit-historia-2",
        title: "Centrala verk i svensk litteratur",
        description:
          "Fördjupa dig i några av de mest betydelsefulla verken i den svenska litteraturhistorien och deras inverkan.",
        examples: [
          {
            swedish:
              "'Röda rummet' (1879) av August Strindberg räknas ofta som den moderna svenska romanens genombrott.",
            explanation:
              "Verket var banbrytande genom sin satiriska samhällskritik och sitt realistiska språk — det bröt med den romantiska traditionen.",
          },
          {
            swedish:
              "Selma Lagerlöfs 'Gösta Berlings saga' (1891) blandar realism med sagotradition och etablerade henne som en av Sveriges främsta berättare.",
            explanation:
              "Lagerlöf fick Nobelpriset 1909 som första kvinna — hennes berättarkonst förenade folkligt berättande med psykologisk djup.",
          },
          {
            swedish:
              "Vilhelm Mobergs 'Utvandrarna' (1949) skildrar den svenska emigrationen till Amerika och är ett nationalmonument i svensk litteratur.",
            explanation:
              "Mobergs epos är grundat i noggrann forskning och ger röst åt vanliga människors livsöden — det blev en symbol för demokratisk berättarkonst.",
          },
        ],
        keyRules: [
          "Centrala verk definieras av att de förändrade litteraturen eller samhällsdebatten.",
          "Förstå varför ett verk var nyskapande — vad bröt det med?",
          "Lägg märke till hur centrala verk fortfarande refereras i samtida kultur och debatt.",
          "Ett verks betydelse kan förändras över tid — nya generationer läser det i nya ljus.",
        ],
      },
      {
        id: "lit-historia-3",
        title: "Litteratur i sin samhällskontext",
        description:
          "Förstå sambandet mellan litteratur och samhälle — hur historiska händelser, politik och kultur påverkar det som skrivs.",
        examples: [
          {
            swedish:
              "Arbetarlitteraturen på 1930-talet — med författare som Ivar Lo-Johansson och Moa Martinson — växte fram ur arbetarklassens kamp för rättvisa.",
            explanation:
              "Litteraturen speglar och påverkar samhället — arbetarförfattarna gav röst åt en klass som tidigare varit osynlig i litteraturen.",
          },
          {
            swedish:
              "Under 1960- och 70-talen blev svensk litteratur mer politisk — dokumentärromanen och debattboken blev viktiga genrer.",
            explanation:
              "Samhällets politisering under denna period syntes i litteraturen genom krav på samhällsengagemang och sanning framför estetik.",
          },
        ],
        keyRules: [
          "Litteratur existerar aldrig i ett vakuum — den påverkas av och påverkar sitt samhälle.",
          "Fråga alltid: vilken tid skrevs texten i, och hur syns det?",
          "Författarens bakgrund (klass, kön, etnicitet) kan ge viktiga ledtrådar till texten.",
        ],
      },
    ],
  },
  {
    id: "lit-bokrecensioner",
    title: "Bokrecensioner",
    category: "Skrivande",
    lessons: [
      {
        id: "lit-bokrecensioner-1",
        title: "Recensionens uppbyggnad",
        description:
          "Lär dig skriva en välstrukturerad bokrecension med inledning, sammanfattning, analys och omdöme.",
        examples: [
          {
            swedish:
              "Inledningen bör fånga läsarens intresse och presentera bokens titel, författare och genre — till exempel: 'I sin senaste roman tar Sara Stridsberg oss in i en värld där verklighet och dröm flyter samman.'",
            explanation:
              "En stark inledning sätter tonen och ger läsaren grundläggande information utan att avslöja för mycket av handlingen.",
          },
          {
            swedish:
              "Sammanfattningen ska ge en kort överblick utan att avslöja slutet: 'Romanen följer en ung kvinna genom 1950-talets Stockholm när hon söker efter sin försvunna syster.'",
            explanation:
              "En bra sammanfattning lockar läsaren och ger tillräckligt med kontext utan att förstöra läsupplevelsen — undvik spoilers.",
          },
          {
            swedish:
              "Analysen lyfter bokens styrkor och svagheter: 'Språket är poetiskt och levande, men handlingen tappar tempo i mittpartiet.'",
            explanation:
              "Analysen är recensionens kärna — här visar du att du kan bedöma verket sakligt och motivera dina åsikter med exempel.",
          },
        ],
        keyRules: [
          "En recension har fyra delar: inledning, sammanfattning, analys och slutligt omdöme.",
          "Sammanfatta utan att avslöja slutet — respektera framtida läsare.",
          "Motivera alltid ditt omdöme med konkreta exempel från boken.",
          "Skilj mellan personlig smak och kvalitetsbedömning.",
          "Avsluta med en tydlig rekommendation — för vem passar boken?",
        ],
      },
      {
        id: "lit-bokrecensioner-2",
        title: "Språk och ton i recensioner",
        description:
          "Utveckla ett sakligt, engagerande och välformulerat recensionsspråk som passar för tidningar och bokbloggar.",
        examples: [
          {
            swedish:
              "Undvik vaga omdömen som 'boken var bra' — skriv istället: 'Dialogen är skarp och autentisk, och karaktärerna känns levande tack vare Ekströms öga för detaljer.'",
            explanation:
              "Konkreta formuleringar ger recensionen trovärdighet och hjälper läsaren förstå varför du tycker som du gör.",
          },
          {
            swedish:
              "Balansera positiv och negativ kritik: 'Även om personskildringen är mästerlig, störs helhetsintrycket av en alltför konstruerad intrig.'",
            explanation:
              "En nyanserad recension visar att du tar verket på allvar och kan bedöma det ur flera perspektiv.",
          },
        ],
        keyRules: [
          "Var konkret — ersätt 'bra' och 'dålig' med specifika beskrivningar.",
          "Använd en ton som passar sammanhanget: formell i dagspressen, personligare på en bokblogg.",
          "Balansera positiv och negativ kritik för att vara trovärdig.",
          "Visa att du har läst boken noggrant genom att hänvisa till specifika scener eller citat.",
        ],
      },
    ],
  },
  {
    id: "lit-forfattare",
    title: "Författarstudier",
    category: "Litteratur",
    lessons: [
      {
        id: "lit-forfattare-1",
        title: "Att studera en författares stil och teman",
        description:
          "Lär dig analysera en författares återkommande teman, stilistiska drag och utveckling genom att jämföra flera verk.",
        examples: [
          {
            swedish:
              "August Strindbergs stil förändrades drastiskt: från naturalismens detaljerade samhällsskildringar i 'Röda rummet' till expressionismens drömspel i 'Ett drömspel'.",
            explanation:
              "Att följa en författares stilistiska utveckling visar hur yttre omständigheter och inre mognad påverkar skapandet.",
          },
          {
            swedish:
              "Tove Jansson återkommer ständigt till temat ensamhet kontra gemenskap — från Muminböckerna till de vuxenlitterära novellerna i 'Rent spel'.",
            explanation:
              "Återkommande teman hos en författare kallas leitmotiv och ger en nyckel till att förstå deras konstnärliga vision.",
          },
          {
            swedish:
              "Hjalmar Söderbergs prosa kännetecknas av ironi, melankoli och en avskalad stil — varje ord räknas.",
            explanation:
              "Stilistiska särdrag som ordval, meningslängd och tonfall gör en författare igenkännbar och utgör deras litterära 'röst'.",
          },
        ],
        keyRules: [
          "Läs flera verk av samma författare för att identifiera mönster i teman och stil.",
          "Notera stilistiska kännetecken: ordval, meningsbyggnad, bildspråk, humor och ton.",
          "Koppla författarens teman till deras biografi och samtid, men likställ inte författaren med berättaren.",
          "Jämför tidiga och sena verk för att se hur författarskapet utvecklas.",
        ],
      },
      {
        id: "lit-forfattare-2",
        title: "Författare i sin samtid",
        description:
          "Förstå hur en författares liv, samhällsställning och historiska kontext påverkar deras verk.",
        examples: [
          {
            swedish:
              "Selma Lagerlöf växte upp i Värmland, och det värmländska landskapet genomsyrar hennes berättelser med lokala sägner och folktro.",
            explanation:
              "Biografisk kontext kan fördjupa förståelsen av en text, men bör inte vara den enda tolkningsnyckeln.",
          },
          {
            swedish:
              "Karin Boyes engagemang i Clarté-rörelsen och hennes resa till Sovjetunionen 1928 påverkade hennes syn på kollektivism, vilket syns i 'Kallocain'.",
            explanation:
              "Politiska erfarenheter kan lämna tydliga avtryck i litterära verk — men texten kan också överskrida författarens ursprungliga avsikt.",
          },
        ],
        keyRules: [
          "Biografisk kontext berikar tolkningen men avgör den inte.",
          "Skilj mellan författaren som privatperson och berättarrösten i texten.",
          "Undersök vilka litterära och intellektuella strömningar författaren påverkades av.",
          "Placera författaren i sin epok men var öppen för att verken kan läsas bortom sin tid.",
        ],
      },
      {
        id: "lit-forfattare-3",
        title: "Att presentera en författarstudie",
        description:
          "Öva på att strukturera och presentera en sammanhållen studie av en författares verk, stil och betydelse.",
        examples: [
          {
            swedish:
              "En författarstudie bör innehålla: kort biografi, presentation av centrala verk, analys av teman och stil, samt en bedömning av författarens betydelse.",
            explanation:
              "Strukturen ger studien tydlighet och visar att du kan överblicka ett helt författarskap, inte bara ett enskilt verk.",
          },
          {
            swedish:
              "Avsluta med att diskutera författarens relevans idag: 'Strindbergs skildringar av maktspel och kön känns fortfarande aktuella i ljuset av samtida jämställdhetsdebatter.'",
            explanation:
              "Att koppla författarskapet till nutiden visar att litteratur inte bara är historia utan levande tankar som fortsätter att beröra.",
          },
        ],
        keyRules: [
          "Strukturera studien kronologiskt eller tematiskt — inte båda samtidigt.",
          "Välj ut 2–3 centrala verk att analysera djupare snarare än att skrapa ytan på allt.",
          "Avsluta med en syntes: vad är författarens bestående bidrag till litteraturen?",
          "Använd citat från verken för att belägga dina påståenden om stil och tema.",
        ],
      },
    ],
  },
  {
    id: "lit-skonlitteratur-fakta",
    title: "Skönlitteratur vs faktatexter",
    category: "Läsning",
    lessons: [
      {
        id: "lit-skonlitteratur-fakta-1",
        title: "Skillnader mellan skönlitteratur och sakprosa",
        description:
          "Lär dig identifiera och analysera de grundläggande skillnaderna mellan fiktiva och icke-fiktiva texter i syfte, stil och struktur.",
        examples: [
          {
            swedish:
              "En roman som 'Utvandrarna' berättar en fiktiv historia baserad på verkliga händelser, medan en historiebok redovisar samma händelser med källhänvisningar och fakta.",
            explanation:
              "Skönlitteratur får använda fantasi och subjektivitet, medan sakprosa strävar efter objektivitet och verifierbarhet.",
          },
          {
            swedish:
              "I en dikt kan författaren skriva 'Solen grät över havet' — i en vetenskaplig text är solen en stjärna som inte kan gråta.",
            explanation:
              "Bildspråk hör hemma i skönlitteratur men är olämpligt i faktatexter, där precision och klarhet är viktigast.",
          },
          {
            swedish:
              "Syftet med en nyhetsartikel är att informera; syftet med en novell kan vara att beröra, provocera eller underhålla.",
            explanation:
              "Att förstå textens syfte hjälper dig läsa den på rätt sätt och ställa rätt frågor.",
          },
        ],
        keyRules: [
          "Skönlitteratur = fiktion (romaner, noveller, dikter); sakprosa = icke-fiktion (artiklar, reportage, essäer).",
          "Skönlitteratur använder bildspråk fritt; sakprosa kräver precision och källhänvisningar.",
          "Syftet styr stilen: att beröra kräver andra verktyg än att informera.",
          "Samma ämne kan behandlas i båda genrerna — men med helt olika metoder och mål.",
        ],
      },
      {
        id: "lit-skonlitteratur-fakta-2",
        title: "Gränsöverskridande texter",
        description:
          "Utforska genrer som blandar fakta och fiktion — dokumentärromaner, essäer, kreativ sakprosa och autofiktion.",
        examples: [
          {
            swedish:
              "Per Olov Enquists 'Livläkarens besök' är en dokumentärroman — den bygger på historiska händelser men fyller i luckor med fiktion.",
            explanation:
              "Dokumentärromanen befinner sig i gränslandet mellan fakta och fiktion: den utgår från verkliga händelser men tar sig konstnärliga friheter.",
          },
          {
            swedish:
              "Karl Ove Knausgårds 'Min kamp' är autofiktion — en genre där författarens eget liv skildras med romanens verktyg.",
            explanation:
              "Autofiktion utmanar gränsen mellan sanning och dikt genom att berätta 'verkliga' händelser med litterära tekniker som dramatisering och dialog.",
          },
        ],
        keyRules: [
          "Gränsöverskridande genrer utmanar den strikta uppdelningen mellan fakta och fiktion.",
          "Dokumentärromanen använder historisk forskning som grund men tillåter fiktiva element.",
          "Autofiktion kräver att läsaren reflekterar över förhållandet mellan sanning och berättande.",
          "Fråga alltid: vad vinner och vad riskerar texten genom att blanda genrerna?",
        ],
      },
    ],
  },
  {
    id: "lit-kreativ-lasning",
    title: "Kreativ läsning & tolkning",
    category: "Kreativt",
    lessons: [
      {
        id: "lit-kreativ-lasning-1",
        title: "Olika läsarter och perspektiv",
        description:
          "Utforska hur olika läsarter — feministisk, postkolonial, ekokritisk — kan öppna upp nya tolkningar av samma text.",
        examples: [
          {
            swedish:
              "En feministisk läsning av 'Fröken Julie' fokuserar på hur genusstrukturer och maktrelationer mellan könen driver dramat.",
            explanation:
              "Att läsa med ett feministiskt perspektiv innebär att uppmärksamma hur kön och genus framställs, ifrågasätts och förstärks i texten.",
          },
          {
            swedish:
              "En ekokritisk läsning av 'Nils Holgerssons underbara resa' belyser hur naturen framställs som både resurs och levande värld med egenvärde.",
            explanation:
              "Ekokritik undersöker relationen mellan människa och natur i litteraturen — hur naturen porträtteras och vilka värderingar som syns.",
          },
          {
            swedish:
              "Att läsa samma text ur olika perspektiv visar att en text aldrig har bara en mening — den berikas av varje ny läsning.",
            explanation:
              "Perspektivbyte är en kreativ och kritisk metod som fördjupar förståelsen och avslöjar dolda maktstrukturer eller antaganden.",
          },
        ],
        keyRules: [
          "En text kan alltid läsas ur flera perspektiv — varje perspektiv belyser olika aspekter.",
          "Feministisk, postkolonial och ekokritisk läsning är verktyg — inte åsikter.",
          "Fråga: vems röst hörs? Vems röst saknas? Vilka maktförhållanden syns i texten?",
          "En god tolkning bygger på texten — inte på vad du vill att texten ska säga.",
          "Perspektivläsning handlar inte om att döma äldre texter utan om att förstå dem djupare.",
        ],
      },
      {
        id: "lit-kreativ-lasning-2",
        title: "Kreativa respons- och tolkningsövningar",
        description:
          "Öva på att svara kreativt på litteratur genom omskrivning, perspektivbyte och gestaltning.",
        examples: [
          {
            swedish:
              "Skriv om en scen ur 'Doktor Glas' ur Helga Gregorius perspektiv — hur upplever hon samma händelse?",
            explanation:
              "Att byta perspektiv i en berättelse tvingar dig att förstå flera karaktärers motivation och fördjupar din läsning av originaltexten.",
          },
          {
            swedish:
              "Skriv ett brev från en karaktär till en annan — vad skulle Kristin i 'Utvandrarna' skriva till Karl Oskar innan avresan?",
            explanation:
              "Kreativa skrivövningar kopplade till litteratur stärker både läsförståelsen och det egna skrivandet genom att du måste leva dig in i texten.",
          },
          {
            swedish:
              "Gestalta en dikt genom att skapa en bild, ett collage eller en kort film som fångar diktens stämning och tema.",
            explanation:
              "Att tolka litteratur med andra uttrycksformer fördjupar förståelsen och visar att en texts betydelse kan förmedlas på många sätt.",
          },
        ],
        keyRules: [
          "Kreativa tolkningsövningar fördjupar läsningen — de ersätter inte den analytiska tolkningen.",
          "Perspektivbyte avslöjar hur berättelsen förändras beroende på vem som berättar.",
          "Kreativa responser bör vara förankrade i originaltexten — inte frikopplade fantasier.",
          "Reflektion efter övningen är viktig: vad lärde du dig om texten genom att bearbeta den kreativt?",
        ],
      },
      {
        id: "lit-kreativ-lasning-3",
        title: "Att formulera egna tolkningar",
        description:
          "Utveckla din förmåga att skriva en självständig, välargumenterad tolkning av en litterär text.",
        examples: [
          {
            swedish:
              "Min tolkning av dikten är att den handlar om sorg efter en förlorad barndom — detta stöds av bilderna 'tomma gungor' och 'tystnade skratt'.",
            explanation:
              "En stark tolkning kombinerar ett tydligt påstående med textnära belägg och förklarar hur bilderna stödjer läsningen.",
          },
          {
            swedish:
              "Jag vill argumentera för att romanen inte bara handlar om kärlek utan i grunden om makt — den som kontrollerar berättelsen kontrollerar sanningen.",
            explanation:
              "En originell tolkning utmanar den uppenbara läsningen och erbjuder ett nytt perspektiv — men den måste fortfarande stödjas av texten.",
          },
        ],
        keyRules: [
          "En tolkning är ett argument — formulera en tes och stöd den med citat och textanalys.",
          "Våga vara originell men förbli textförankrad — kreativ tolkning är inte fri association.",
          "Visa att du är medveten om alternativa tolkningar — det stärker ditt eget argument.",
          "Använd formuleringar som 'jag tolkar detta som', 'detta kan läsas som', 'en möjlig läsning är'.",
          "En bra tolkning öppnar texten för läsaren — den stänger den inte.",
        ],
      },
    ],
  },
];
