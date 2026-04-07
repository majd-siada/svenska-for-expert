import type { Topic } from "@/lib/types";

export const svenska2Topics: Topic[] = [
  {
    id: "sv2-formell",
    title: "Formell & informell svenska",
    category: "Professionellt",
    lessons: [
      {
        id: "sv2-formell-1",
        title: "Du eller ni? – Tilltal i olika situationer",
        description:
          "Lär dig skilja mellan informellt och formellt tilltal och när varje form passar bäst i svensk kultur.",
        examples: [
          {
            swedish: "Hej! Kan du skicka rapporten till mig?",
            explanation:
              "Informellt tilltal med 'du' – vanligt mellan kollegor som känner varandra.",
          },
          {
            swedish:
              "God morgon. Skulle ni kunna vidarebefordra dokumentet till undertecknad?",
            explanation:
              "Mycket formellt tilltal med 'ni' och 'undertecknad' – används i officiella sammanhang eller mot äldre personer man inte känner.",
          },
          {
            swedish: "Ursäkta, skulle du kunna hjälpa mig med det här?",
            explanation:
              "Artigt men informellt – 'skulle du kunna' gör frågan mjukare utan att vara överdrivet formell.",
          },
        ],
        keyRules: [
          "I Sverige är 'du' standard i de flesta situationer, även på arbetsplatsen.",
          "'Ni' kan uppfattas som ålderdomligt eller distanserat – använd det med försiktighet.",
          "Formellt språk handlar mer om ordval och meningsbyggnad än om tilltalspronomen.",
          "I skriftlig kommunikation med myndigheter och okända personer, använd ett neutralt och artigt språk.",
        ],
      },
      {
        id: "sv2-formell-2",
        title: "Formella och informella mejl",
        description:
          "Öva på att skriva mejl i olika tonlägen – från avslappnade kollegameddelanden till formella affärsmejl.",
        examples: [
          {
            swedish:
              "Hej Anna! Tack för igår, det var jättekul. Vi hörs snart! /Erik",
            explanation:
              "Informellt mejl till en vän eller nära kollega. Kort, personligt och med snedstreck före namnet.",
          },
          {
            swedish:
              "Bästa mottagare, Jag skriver med anledning av er annons gällande tjänsten som projektledare. Med vänliga hälsningar, Erik Johansson",
            explanation:
              "Formellt mejl till en okänd mottagare. Korrekt hälsningsfras, tydligt syfte och fullständigt namn.",
          },
          {
            swedish:
              "Hej Karin, Jag ville bara följa upp vårt möte från förra veckan. Har du hunnit titta på förslaget? Vänliga hälsningar, Erik",
            explanation:
              "Semi-formellt mejl till en kollega. Artigt men inte stelt – balanserar professionalism och vänskaplighet.",
          },
        ],
        keyRules: [
          "Börja formella mejl med 'Bästa' eller 'Till' och informella med 'Hej' eller 'Tjena'.",
          "Avsluta formellt med 'Med vänliga hälsningar' och informellt med 'Hälsningar', 'Mvh' eller bara '/Namn'.",
          "Undvik förkortningar och slang i formella mejl.",
          "Anpassa alltid tonen efter mottagaren och sammanhanget.",
          "I svenska mejl är det vanligt att gå rakt på sak – undvik onödigt långa inledningar.",
        ],
      },
      {
        id: "sv2-formell-3",
        title: "Artighetsfraser och språkliga register",
        description:
          "Utforska olika språkliga register och lär dig använda artighetsfraser som passar i rätt sammanhang.",
        examples: [
          {
            swedish: "Jag undrar om det vore möjligt att boka ett möte nästa vecka?",
            explanation:
              "Konjunktivformen 'vore' gör frågan extra artig och formell – vanligt i professionella sammanhang.",
          },
          {
            swedish: "Får jag be om ursäkt för den sena återkopplingen.",
            explanation:
              "Formell ursäkt som ofta används i skriftlig kommunikation med kunder eller affärspartners.",
          },
          {
            swedish: "Tack så hemskt mycket, det var jättesnällt av dig!",
            explanation:
              "Informellt och varmt tack – 'hemskt mycket' är ett vardagligt förstärkningsord som visar uppskattning.",
          },
        ],
        keyRules: [
          "Konjunktiv ('vore', 'kunde') gör meningar artiga utan att låta stela.",
          "Undvik överdriven artighet i vardagliga situationer – det kan uppfattas som ironiskt.",
          "Lär dig skilja mellan tre register: vardagligt, semi-formellt och formellt.",
          "Artighetsfraser som 'Tack på förhand' och 'Jag uppskattar er tid' fungerar bra i professionella mejl.",
        ],
      },
    ],
  },
  {
    id: "sv2-jobb",
    title: "Jobb & CV svenska",
    category: "Professionellt",
    lessons: [
      {
        id: "sv2-jobb-1",
        title: "Att skriva ett svenskt CV",
        description:
          "Lär dig strukturen och språket som förväntas i ett svenskt CV – från personuppgifter till referenser.",
        examples: [
          {
            swedish:
              "Arbetslivserfarenhet: Kundtjänstmedarbetare, Telia, 2022–2024. Ansvarade för inkommande kundärenden via telefon och mejl.",
            explanation:
              "Typisk CV-post med titel, företag, tidsperiod och kort beskrivning av arbetsuppgifter i preteritum.",
          },
          {
            swedish:
              "Utbildning: Kandidatexamen i företagsekonomi, Stockholms universitet, 2021.",
            explanation:
              "Utbildningssektion med examen, ämne, lärosäte och examensår – alltid i omvänd kronologisk ordning.",
          },
          {
            swedish:
              "Övriga kompetenser: Flytande svenska och engelska. Goda kunskaper i Excel, PowerPoint och CRM-system.",
            explanation:
              "Kompetenssektion med språkkunskaper och tekniska färdigheter – håll det kort och relevant.",
          },
        ],
        keyRules: [
          "Svenska CV:n är vanligtvis 1–2 sidor långa – var koncis och fokusera på det relevanta.",
          "Använd aktiva verb som 'ansvarade', 'utvecklade', 'ledde' och 'genomförde' för att beskriva arbetsuppgifter.",
          "Ange alltid tidsperioder med år och undvik luckor – förklara eventuella uppehåll.",
          "Det är vanligt att inkludera 'Övrigt' med körkort, ideellt engagemang eller relevanta intressen.",
          "Referenser anges med 'Lämnas på begäran' eller med namn och kontaktuppgifter.",
        ],
      },
      {
        id: "sv2-jobb-2",
        title: "Personligt brev och jobbansökan",
        description:
          "Skriv ett övertygande personligt brev som kompletterar ditt CV och visar din motivation.",
        examples: [
          {
            swedish:
              "Jag söker tjänsten som marknadsassistent eftersom jag brinner för kommunikation och har relevant erfarenhet från min praktik på Volvo.",
            explanation:
              "Stark inledning som direkt nämner tjänsten, motivation och relevant bakgrund.",
          },
          {
            swedish:
              "Under min tid på universitetet utvecklade jag min förmåga att arbeta i team och hantera stressiga deadlines.",
            explanation:
              "Konkret exempel som visar kompetenser – bättre än att bara lista egenskaper.",
          },
          {
            swedish:
              "Jag ser fram emot möjligheten att bidra till ert team och skulle gärna berätta mer vid en intervju.",
            explanation:
              "Professionell avslutning som visar entusiasm och öppnar för nästa steg.",
          },
          {
            swedish:
              "Med min bakgrund inom projektledning och mitt intresse för hållbar utveckling tror jag att jag kan tillföra mycket till er organisation.",
            explanation:
              "Kopplar personliga styrkor till företagets verksamhet – visar att man gjort research.",
          },
        ],
        keyRules: [
          "Det personliga brevet ska komplettera CV:t – upprepa inte samma information.",
          "Visa att du känner till företaget och förklara varför just du passar för tjänsten.",
          "Håll brevet till max en sida och strukturera det med inledning, huvuddel och avslutning.",
          "Använd 'jag'-form men balansera med fokus på vad du kan bidra med till arbetsgivaren.",
          "Avsluta alltid med en mening som öppnar för vidare kontakt.",
        ],
      },
      {
        id: "sv2-jobb-3",
        title: "Anställningsintervjun på svenska",
        description:
          "Förbered dig för en jobbintervju på svenska med vanliga frågor, svar och strategier.",
        examples: [
          {
            swedish:
              "Berätta lite om dig själv. – Jag heter Maria och har jobbat inom IT i fem år. Just nu söker jag nya utmaningar inom projektledning.",
            explanation:
              "Klassisk öppningsfråga – svaret är kort, professionellt och framåtblickande.",
          },
          {
            swedish:
              "Vad är dina styrkor? – Jag är lösningsorienterad och trivs med att arbeta i team under press.",
            explanation:
              "Konkret svar med relevanta egenskaper – undvik klyschor som 'perfektionist'.",
          },
          {
            swedish:
              "Var ser du dig själv om fem år? – Jag hoppas ha utvecklats till en ledande roll inom ert företag.",
            explanation:
              "Visar ambition och lojalitet mot företaget – positivt i en intervjusituation.",
          },
        ],
        keyRules: [
          "Förbered svar på vanliga frågor som 'Berätta om dig själv', 'Varför vill du jobba här?' och 'Vad är dina svagheter?'.",
          "Använd STAR-metoden: Situation, Task, Action, Result – för att ge strukturerade svar.",
          "Var ärlig men strategisk – fokusera på relevanta erfarenheter och kompetenser.",
          "Ställ egna frågor till arbetsgivaren – det visar intresse och engagemang.",
        ],
      },
    ],
  },
  {
    id: "sv2-nyheter",
    title: "Nyheter & media",
    category: "Media",
    lessons: [
      {
        id: "sv2-nyheter-1",
        title: "Att läsa och förstå nyhetsartiklar",
        description:
          "Utveckla strategier för att läsa svenska nyheter effektivt och förstå journalistiskt språk.",
        examples: [
          {
            swedish:
              "Regeringen aviserar nya satsningar på förnybar energi i höstbudgeten.",
            explanation:
              "'Aviserar' (tillkännager) och 'satsningar' (investeringar) är typiska nyhetsord som sällan används i vardagligt tal.",
          },
          {
            swedish:
              "Enligt uppgifter till SVT planerar kommunen att skära ned på äldreomsorgen.",
            explanation:
              "'Enligt uppgifter till' signalerar att informationen inte är officiellt bekräftad – vanligt i undersökande journalistik.",
          },
          {
            swedish:
              "Den misstänkte häktades i sin frånvaro av Stockholms tingsrätt.",
            explanation:
              "Juridiskt nyhetssspråk – 'häktades i sin frånvaro' och 'tingsrätt' är termer som ofta förekommer i kriminalrapportering.",
          },
        ],
        keyRules: [
          "Nyhetsrubriker utelämnar ofta hjälpverb – 'Regeringen satsar' istället för 'Regeringen kommer att satsa'.",
          "Lär dig vanliga nyhetsverb: avisera, fastslå, avslöja, dementera, konstatera.",
          "Källhänvisningar som 'enligt', 'uppger' och 'rapporterar' visar varifrån informationen kommer.",
          "Läs nyheter från flera källor (SVT, DN, SR) för att förstå olika perspektiv och stilar.",
        ],
      },
      {
        id: "sv2-nyheter-2",
        title: "Källkritik och medieanalys",
        description:
          "Lär dig att granska information kritiskt och identifiera trovärdiga respektive opålitliga källor.",
        examples: [
          {
            swedish:
              "En anonym källa hävdar att företaget döljer miljöskandalen – men inga dokument har presenterats.",
            explanation:
              "Anonyma källor utan stödjande bevis bör behandlas med försiktighet – fråga alltid efter dokumentation.",
          },
          {
            swedish:
              "Studien visar att 80 % av svenskarna stödjer förslaget, men urvalet bestod bara av 200 personer.",
            explanation:
              "Litet urval kan ge missvisande resultat – källkritik handlar om att granska metoderna bakom påståenden.",
          },
          {
            swedish:
              "Klickbetesrubriken 'Du kommer inte tro vad som hände!' är ett tecken på opålitligt innehåll.",
            explanation:
              "Sensationella rubriker utan substans är ofta ett varningstecken – seriös journalistik är saklig.",
          },
        ],
        keyRules: [
          "Använd TANK-modellen: Trovärdighet, Aktualitet, Neutralitet, Källhänvisning.",
          "Kontrollera alltid vem som står bakom informationen och vilket syfte de kan ha.",
          "Var extra kritisk mot information som sprids på sociala medier utan verifierade källor.",
          "Jämför alltid med andra oberoende källor innan du drar slutsatser.",
          "Skilj mellan nyhetsrapportering (fakta), ledare (åsikter) och krönikor (personliga reflektioner).",
        ],
      },
    ],
  },
  {
    id: "sv2-projekt",
    title: "Projekt & grupparbete",
    category: "Professionellt",
    lessons: [
      {
        id: "sv2-projekt-1",
        title: "Att planera och genomföra grupprojekt",
        description:
          "Lär dig kommunicera effektivt i grupparbeten – från planering till presentation av resultat.",
        examples: [
          {
            swedish:
              "Ska vi börja med att fördela uppgifterna? Jag kan ta hand om researchen om alla är överens.",
            explanation:
              "Konstruktivt förslag i grupparbete – visar initiativ och frågar om gruppens samtycke.",
          },
          {
            swedish:
              "Vi behöver sätta en deadline för varje delmoment så att vi hinner bli klara i tid.",
            explanation:
              "'Delmoment' (delmål) och 'deadline' – projektspråk som hjälper gruppen att strukturera arbetet.",
          },
          {
            swedish:
              "Jag har sammanställt en tidsplan i ett delat dokument – kan ni kolla igenom det och ge feedback?",
            explanation:
              "Proaktivt ledarskap i grupp – delar material och bjuder in till återkoppling.",
          },
        ],
        keyRules: [
          "Fördela roller och ansvar tidigt – det minskar konflikter och missförstånd.",
          "Använd delade dokument och digitala verktyg för att alla ska ha tillgång till samma information.",
          "Kommunicera regelbundet om framsteg och utmaningar – tystnad skapar osäkerhet.",
          "Var konstruktiv i din kritik – säg 'Jag föreslår att vi...' istället för 'Det här fungerar inte'.",
        ],
      },
      {
        id: "sv2-projekt-2",
        title: "Möten och diskussioner",
        description:
          "Öva på att delta aktivt i möten – lär dig uttrycka åsikter, sammanfatta och fatta beslut.",
        examples: [
          {
            swedish:
              "Jag håller med om det du säger, men jag tror att vi också borde överväga alternativet.",
            explanation:
              "Diplomatiskt sätt att delvis hålla med men ändå föra fram ett eget perspektiv.",
          },
          {
            swedish:
              "Kan vi sammanfatta vad vi har kommit överens om innan vi avslutar mötet?",
            explanation:
              "Bra mötesteknik – att sammanfatta säkerställer att alla är på samma sida.",
          },
          {
            swedish:
              "Jag föreslår att vi bordlägger den frågan till nästa möte så att vi hinner förbereda oss.",
            explanation:
              "'Bordlägga' betyder att skjuta upp en fråga till ett senare tillfälle – vanligt i formella möten.",
          },
          {
            swedish:
              "Vill du utveckla det resonemanget lite? Jag är inte säker på att jag förstår din poäng.",
            explanation:
              "Artigt sätt att be om förtydligande utan att ifrågasätta personen.",
          },
        ],
        keyRules: [
          "Lyssna aktivt och visa det genom att nicka, ställa frågor och sammanfatta.",
          "Använd 'Jag tycker att...' och 'Min uppfattning är...' för att uttrycka åsikter tydligt.",
          "Undvik att avbryta – vänta på din tur eller säg 'Ursäkta, kan jag inflika något?'.",
          "Avsluta alltid möten med en sammanfattning av beslut och nästa steg.",
          "Lär dig mötesord: dagordning, protokoll, bordlägga, yrka, reservera sig.",
        ],
      },
      {
        id: "sv2-projekt-3",
        title: "Presentationsteknik på svenska",
        description:
          "Strukturera och håll en professionell presentation på svenska med tydligt språk och engagerande stil.",
        examples: [
          {
            swedish:
              "Idag ska jag prata om tre saker: bakgrunden till projektet, våra resultat och vägen framåt.",
            explanation:
              "Tydlig inledning som ger publiken en överblick – skapar förväntning och struktur.",
          },
          {
            swedish:
              "Som ni kan se på diagrammet har försäljningen ökat med 15 procent sedan förra kvartalet.",
            explanation:
              "Hänvisning till visuellt material med konkreta siffror – gör presentationen trovärdig.",
          },
          {
            swedish:
              "Sammanfattningsvis vill jag betona att vår strategi har gett resultat, och jag ser fram emot era frågor.",
            explanation:
              "Professionell avslutning som sammanfattar och öppnar för dialog.",
          },
        ],
        keyRules: [
          "Följ strukturen: inledning (fånga intresse), huvuddel (max 3 punkter) och avslutning (sammanfattning).",
          "Använd signalord som 'för det första', 'dessutom', 'avslutningsvis' för att vägleda lyssnaren.",
          "Tala långsamt och tydligt – pauser ger publiken tid att bearbeta informationen.",
          "Ögonkontakt och öppet kroppsspråk gör presentationen mer engagerande.",
        ],
      },
    ],
  },
  {
    id: "sv2-argumentation",
    title: "Argumentation & debatt",
    category: "Debatt",
    lessons: [
      {
        id: "sv2-argumentation-1",
        title: "Grunderna i argumentation",
        description:
          "Lär dig bygga starka argument med tes, argument och stöd – grunden för övertygande kommunikation.",
        examples: [
          {
            swedish:
              "Jag anser att distansarbete bör bli en permanent möjlighet, eftersom forskning visar att produktiviteten ökar.",
            explanation:
              "Tes ('distansarbete bör bli permanent') + argument ('produktiviteten ökar') + stöd ('forskning visar').",
          },
          {
            swedish:
              "Å ena sidan sparar man tid på pendling, å andra sidan kan den sociala isoleringen påverka välmåendet.",
            explanation:
              "'Å ena sidan... å andra sidan' – balanserad argumentation som erkänner motargument.",
          },
          {
            swedish:
              "Det finns flera skäl till att vi bör investera i kollektivtrafiken. Framför allt minskar det utsläppen.",
            explanation:
              "'Framför allt' lyfter det starkaste argumentet – effektiv prioritering i argumentation.",
          },
        ],
        keyRules: [
          "En stark argumentation består av tes (påstående), argument (skäl) och stöd (bevis).",
          "Använd bindeord som 'eftersom', 'därför att', 'följaktligen' för att koppla ihop argument.",
          "Erkänn motargument – det stärker din trovärdighet istället för att försvaga den.",
          "Undvik personangrepp (ad hominem) – angrip argumentet, inte personen.",
          "Avsluta med en sammanfattning av din starkaste poäng.",
        ],
      },
      {
        id: "sv2-argumentation-2",
        title: "Debatteknik och motargumentation",
        description:
          "Fördjupa dina debattfärdigheter med tekniker för att bemöta motargument och stärka din position.",
        examples: [
          {
            swedish:
              "Du hävdar att kärnkraft är för dyrt, men om vi räknar in de långsiktiga klimatkostnaderna blir bilden annorlunda.",
            explanation:
              "Omramning av motargumentet – visar att perspektivet spelar roll för slutsatsen.",
          },
          {
            swedish:
              "Det argumentet bygger på ett antagande som inte stöds av data. Låt oss titta på vad statistiken faktiskt visar.",
            explanation:
              "Ifrågasätter premissen i motpartens argument – effektiv debatteknik.",
          },
          {
            swedish:
              "Jag förstår din oro, men jag tror att fördelarna överväger nackdelarna i det här fallet.",
            explanation:
              "Validerar motpartens känsla samtidigt som man håller fast vid sin ståndpunkt.",
          },
        ],
        keyRules: [
          "Lyssna noga på motpartens argument innan du svarar – att bemöta rätt argument visar respekt.",
          "Använd 'Ja, men...' eller 'Det stämmer att... dock...' för att delvis erkänna och sedan kontra.",
          "Begär alltid bevis för påståenden – 'Vilken källa bygger du det på?'.",
          "Håll dig lugn och saklig – den som tappar humöret förlorar ofta debatten.",
          "Avsluta med att sammanfatta dina starkaste poänger tydligt.",
        ],
      },
    ],
  },
  {
    id: "sv2-utbildning",
    title: "Utbildning & studieteknik",
    category: "Akademiskt",
    lessons: [
      {
        id: "sv2-utbildning-1",
        title: "Det svenska utbildningssystemet",
        description:
          "Förstå hur det svenska skolsystemet är uppbyggt – från grundskola till universitet och vuxenutbildning.",
        examples: [
          {
            swedish:
              "I Sverige är grundskolan obligatorisk och omfattar nio år, från förskoleklass till årskurs 9.",
            explanation:
              "Grundläggande fakta om svensk skola – 'obligatorisk' betyder att alla barn måste gå.",
          },
          {
            swedish:
              "Efter gymnasiet kan man söka till högskola eller universitet via antagning.se.",
            explanation:
              "Antagning.se är den centrala plattformen för högskoleantagning i Sverige.",
          },
          {
            swedish:
              "Komvux erbjuder vuxenutbildning för den som vill komplettera sina betyg eller byta karriär.",
            explanation:
              "Komvux (kommunal vuxenutbildning) ger vuxna möjlighet att studera på grundskole- eller gymnasienivå.",
          },
        ],
        keyRules: [
          "Svensk utbildning är indelad i grundskola (9 år), gymnasium (3 år) och högskola/universitet.",
          "CSN (Centrala studiestödsnämnden) erbjuder studiemedel bestående av bidrag och lån.",
          "Högskolepoäng (hp) mäter studiernas omfattning – heltidsstudier ger 30 hp per termin.",
          "Betyg i Sverige sätts med skalan A–F, där A är högst och F är underkänt.",
        ],
      },
      {
        id: "sv2-utbildning-2",
        title: "Effektiva studietekniker",
        description:
          "Lär dig beprövade studietekniker och akademiska vanor som hjälper dig lyckas i dina studier.",
        examples: [
          {
            swedish:
              "Jag brukar använda Pomodoro-tekniken – 25 minuter fokuserat arbete följt av 5 minuters paus.",
            explanation:
              "Pomodoro-tekniken hjälper till att bibehålla koncentrationen genom regelbundna pauser.",
          },
          {
            swedish:
              "Att skriva sammanfattningar med egna ord är effektivare än att bara stryka under text.",
            explanation:
              "Aktiv bearbetning av material förbättrar inlärningen jämfört med passiv läsning.",
          },
          {
            swedish:
              "Före tentan gör jag alltid en studieplan där jag fördelar ämnena jämnt över de tillgängliga dagarna.",
            explanation:
              "Planering och spridning av studietiden motverkar stress och förbättrar långtidsminnet.",
          },
        ],
        keyRules: [
          "Sprid ut studierna över tid istället för att plugga allt kvällen före – det kallas 'distributed practice'.",
          "Testa dig själv regelbundet – aktiv återhämtning (retrieval practice) stärker minnet.",
          "Skapa en studieplan med tydliga mål för varje pass – det minskar prokrastinering.",
          "Kombinera olika metoder: läsa, skriva, diskutera och lära ut till andra.",
          "Ta hand om din hälsa – sömn, motion och kost påverkar din inlärningsförmåga direkt.",
        ],
      },
      {
        id: "sv2-utbildning-3",
        title: "Akademiskt skrivande – en introduktion",
        description:
          "Bekanta dig med grunderna i akademiskt skrivande på svenska – struktur, stil och källhantering.",
        examples: [
          {
            swedish:
              "Syftet med denna uppsats är att undersöka hur sociala medier påverkar ungdomars självbild.",
            explanation:
              "Typisk syftesformulering i en akademisk text – tydlig, specifik och objektiv.",
          },
          {
            swedish:
              "Enligt Svensson (2023) finns det ett tydligt samband mellan skärmtid och sömnkvalitet.",
            explanation:
              "Källhänvisning i löpande text enligt Harvard-systemet – vanligt i svenska universitet.",
          },
          {
            swedish:
              "Sammanfattningsvis visar resultaten att hypotesen delvis stöds av insamlad data.",
            explanation:
              "Försiktig formulering ('delvis stöds') – akademiskt skrivande undviker absoluta påståenden.",
          },
        ],
        keyRules: [
          "Akademiska texter har en tydlig struktur: inledning, syfte, metod, resultat och diskussion.",
          "Använd opersonligt språk – 'det kan konstateras att' istället för 'jag tycker att'.",
          "Alla påståenden måste stödjas av källor – ange alltid varifrån informationen kommer.",
          "Undvik talspråk, förkortningar och känslouttryck i akademiska texter.",
          "Referera alltid enligt angiven referensstil – Harvard och APA är vanligast i Sverige.",
        ],
      },
    ],
  },
  {
    id: "sv2-ekonomi",
    title: "Ekonomi & budget",
    category: "Samhälle",
    lessons: [
      {
        id: "sv2-ekonomi-1",
        title: "Privatekonomi och budgetering",
        description:
          "Lär dig prata om och hantera din privatekonomi på svenska – från lön och skatt till sparande.",
        examples: [
          {
            swedish:
              "Min bruttolön är 35 000 kronor i månaden, men efter skatt får jag ut ungefär 27 000.",
            explanation:
              "'Bruttolön' är lön före skatt och 'nettolön' är det man faktiskt får ut – en viktig skillnad.",
          },
          {
            swedish:
              "Jag försöker lägga undan minst 10 procent av lönen varje månad till mitt sparkonto.",
            explanation:
              "'Lägga undan' betyder att spara – en vanlig ekonomisk strategi.",
          },
          {
            swedish:
              "Hyran, maten och abonnemangen är mina största fasta utgifter varje månad.",
            explanation:
              "'Fasta utgifter' är kostnader som återkommer regelbundet – viktigt att identifiera för en budget.",
          },
        ],
        keyRules: [
          "Skilj mellan fasta utgifter (hyra, försäkringar) och rörliga utgifter (mat, nöjen).",
          "I Sverige dras skatt automatiskt från lönen via arbetsgivaren – det kallas preliminärskatt.",
          "Deklarationen ska lämnas in till Skatteverket senast den 2 maj varje år.",
          "En budget hjälper dig att se vart pengarna tar vägen och hitta besparingsmöjligheter.",
          "Vanliga ekonomitermer: ränta, amortering, avkastning, inflation, disponibel inkomst.",
        ],
      },
      {
        id: "sv2-ekonomi-2",
        title: "Samhällsekonomi och välfärd",
        description:
          "Förstå grunderna i Sveriges ekonomiska system och välfärdsmodell.",
        examples: [
          {
            swedish:
              "Den svenska välfärdsmodellen finansieras genom skatter och ger alla tillgång till sjukvård och utbildning.",
            explanation:
              "Välfärdsmodellen är kärnan i det svenska samhället – skattefinansierade offentliga tjänster.",
          },
          {
            swedish:
              "BNP, bruttonationalprodukten, är ett mått på ett lands totala ekonomiska produktion under ett år.",
            explanation:
              "BNP är en vanlig term i samhällsdebatt och nyhetsrapportering om ekonomi.",
          },
          {
            swedish:
              "Arbetslösheten i Sverige ligger på ungefär 7 procent, men varierar stort mellan olika grupper.",
            explanation:
              "Statistiska påståenden om arbetsmarknaden kräver nyansering – siffror varierar efter ålder, region och bakgrund.",
          },
        ],
        keyRules: [
          "Sverige har en blandekonomisk modell med både privat företagande och offentlig sektor.",
          "Skattetrycket i Sverige är bland de högsta i världen men finansierar omfattande välfärdstjänster.",
          "Viktiga institutioner: Riksbanken (ränta), Skatteverket (skatt), Försäkringskassan (socialförsäkring).",
          "Förstå skillnaden mellan kommunalskatt, regionskatt och statlig inkomstskatt.",
        ],
      },
    ],
  },
  {
    id: "sv2-teknik",
    title: "Teknik & digitala verktyg",
    category: "Samhälle",
    lessons: [
      {
        id: "sv2-teknik-1",
        title: "Digital vardag i Sverige",
        description:
          "Utforska hur digitala tjänster och verktyg används i det svenska vardagslivet – från BankID till Swish.",
        examples: [
          {
            swedish:
              "Jag loggar in på alla myndigheter med BankID – det fungerar som en digital identitetshandling.",
            explanation:
              "BankID är Sveriges mest använda e-legitimation och krävs för allt från bankärenden till att deklarera.",
          },
          {
            swedish:
              "Kan du swisha mig 150 kronor för middagen? Mitt nummer är 073-123 45 67.",
            explanation:
              "'Swisha' har blivit ett vardagligt verb – Swish är Sveriges dominerande mobilbetalningstjänst.",
          },
          {
            swedish:
              "Jag bokar vårdbesök via 1177.se och hämtar ut recept digitalt på apoteket.",
            explanation:
              "1177 Vårdguiden är den digitala plattformen för sjukvård i Sverige – ett viktigt verktyg att kunna använda.",
          },
        ],
        keyRules: [
          "BankID, Swish och 1177 är tre digitala tjänster som nästan alla i Sverige använder dagligen.",
          "Personnumret är nyckeln till de flesta digitala tjänster i Sverige – skydda det noga.",
          "Sverige är ett av världens mest digitaliserade länder – kontanter används sällan.",
          "Lär dig orden: inloggning, tvåfaktorsautentisering, e-legitimation, digitalt kvitto, molntjänst.",
        ],
      },
      {
        id: "sv2-teknik-2",
        title: "Teknik i arbetslivet",
        description:
          "Lär dig teknisk vokabulär och fraser som används i svenska arbetslivet och digitala arbetsmiljöer.",
        examples: [
          {
            swedish:
              "Vi har alla våra projekt i Trello och kommunicerar via Teams – kan du ladda ner appen?",
            explanation:
              "Vanlig arbetsplatskonversation om digitala verktyg – verben 'ladda ner' och 'logga in' är centrala.",
          },
          {
            swedish:
              "Systemet kraschade igen – kan du skicka en felanmälan till IT-supporten?",
            explanation:
              "'Krascha' (sluta fungera) och 'felanmälan' (felrapport) – vanliga termer vid tekniska problem.",
          },
          {
            swedish:
              "Vi behöver uppgradera vår programvara och säkerhetskopiera alla filer innan vi byter server.",
            explanation:
              "'Uppgradera', 'säkerhetskopiera' (backup) och 'byta server' – teknisk vokabulär för IT-beslut.",
          },
        ],
        keyRules: [
          "Svenska tekniska termer har ofta engelska lånord – 'mejl', 'server', 'app' – men svenska alternativ finns.",
          "Vanliga verb: ladda ner, ladda upp, logga in, logga ut, uppdatera, installera, avinstallera.",
          "Vid tekniska problem, beskriv problemet tydligt: vad du gjorde, vad som hände och felmeddelandet.",
          "Cybersäkerhet är allt viktigare – lär dig ord som lösenord, brandvägg, phishing och dataintrång.",
          "Förkortningar som IT, AI, VPN och CRM är vanliga i svenska arbetslivet.",
        ],
      },
    ],
  },
  {
    id: "sv2-miljo",
    title: "Miljö & hållbarhet",
    category: "Samhälle",
    lessons: [
      {
        id: "sv2-miljo-1",
        title: "Klimat och miljöfrågor",
        description:
          "Diskutera klimatförändringar och miljöproblem på svenska med rätt vokabulär och argument.",
        examples: [
          {
            swedish:
              "Växthuseffekten förstärks av utsläpp av koldioxid och metan från fossila bränslen.",
            explanation:
              "Centrala miljötermer: 'växthuseffekten', 'utsläpp', 'koldioxid', 'metan' och 'fossila bränslen'.",
          },
          {
            swedish:
              "Sverige har som mål att bli klimatneutralt senast 2045 genom att minska utsläppen drastiskt.",
            explanation:
              "'Klimatneutralt' innebär att nettoutsläppen av växthusgaser ska vara noll.",
          },
          {
            swedish:
              "Den biologiska mångfalden hotas av avskogning, föroreningar och överexploatering av naturresurser.",
            explanation:
              "'Biologisk mångfald' (biodiversitet) och dess hot – ett viktigt ämne i miljödebatten.",
          },
        ],
        keyRules: [
          "Lär dig skilja mellan klimat (långsiktiga mönster) och väder (dagliga förhållanden).",
          "Viktiga miljötermer: hållbar utveckling, förnybar energi, koldioxidavtryck, cirkulär ekonomi.",
          "Sverige har en allemansrätt som ger fri tillgång till naturen – men med ansvar att inte skada den.",
          "FN:s globala mål (Agenda 2030) är en vanlig referens i svenska miljödiskussioner.",
        ],
      },
      {
        id: "sv2-miljo-2",
        title: "Hållbar livsstil och konsumtion",
        description:
          "Utforska hur man kan prata om hållbara val i vardagen – från återvinning till medveten konsumtion.",
        examples: [
          {
            swedish:
              "Vi sorterar vårt avfall i matavfall, plast, papper, glas och metall vid återvinningsstationen.",
            explanation:
              "Avfallssortering är en viktig del av svenska vardagen – lär dig namnen på de olika fraktionerna.",
          },
          {
            swedish:
              "Jag försöker köpa secondhand-kläder istället för nyproducerade – det sparar både pengar och resurser.",
            explanation:
              "Secondhand och cirkulär konsumtion är populärt i Sverige – appar som Tradera och Blocket är vanliga.",
          },
          {
            swedish:
              "Att välja ekologiska och närproducerade livsmedel är ett sätt att minska sitt klimatavtryck.",
            explanation:
              "'Ekologisk' (organisk) och 'närproducerad' (lokalt producerad) – vanliga val i svenska matbutiker.",
          },
          {
            swedish:
              "Kommunen erbjuder gratis energirådgivning för den som vill minska sin elförbrukning hemma.",
            explanation:
              "Många kommuner i Sverige har tjänster som hjälper invånare att bli mer energieffektiva.",
          },
        ],
        keyRules: [
          "Sverige har ett av världens bästa återvinningssystem – lär dig sortera rätt.",
          "Pantsystemet för burkar och flaskor ger pengar tillbaka och minskar avfall.",
          "Vanliga hållbarhetsord: återbruk, återvinna, utsläppsrätt, fossilfri, klimatsmart.",
          "Konsumentmakt handlar om att göra medvetna val – fråga var produkten kommer ifrån och hur den tillverkats.",
          "Flygskam, köpskam och klimatångest är svenska nyord som speglar samhällets miljömedvetenhet.",
        ],
      },
      {
        id: "sv2-miljo-3",
        title: "Miljöpolitik och samhällsdebatt",
        description:
          "Delta i diskussioner om miljöpolitik och lär dig argumentera för och emot olika miljöåtgärder.",
        examples: [
          {
            swedish:
              "Förespråkare för kärnkraft menar att den är nödvändig för att klara klimatomställningen.",
            explanation:
              "'Förespråkare' (de som stödjer) och 'klimatomställning' (transition till hållbar energi) – vanligt i svensk debatt.",
          },
          {
            swedish:
              "Kritiker hävdar att vindkraftverk förstör landskapet och hotar fågellivet.",
            explanation:
              "Motargument mot vindkraft – miljödebatten har ofta flera sidor med legitima perspektiv.",
          },
          {
            swedish:
              "Koldioxidskatten har gjort Sverige till ett föregångsland inom klimatpolitik.",
            explanation:
              "Koldioxidskatten infördes 1991 och har varit ett viktigt styrmedel för att minska utsläppen.",
          },
        ],
        keyRules: [
          "Svensk miljöpolitik präglas av konsensus men det finns starka åsiktsskillnader mellan partierna.",
          "Lär dig politiska termer: proposition, remiss, miljöbalk, utsläppstak, subvention.",
          "Skilj mellan lokala (avfallshantering), nationella (klimatmål) och globala (Parisavtalet) miljöfrågor.",
          "En bra miljöargumentation balanserar ekologiska, ekonomiska och sociala perspektiv.",
        ],
      },
    ],
  },
  {
    id: "sv2-relationer",
    title: "Sociala relationer & nätverk",
    category: "Samhälle",
    lessons: [
      {
        id: "sv2-relationer-1",
        title: "Att bygga sociala nätverk i Sverige",
        description:
          "Förstå svensk social kultur och lär dig strategier för att knyta kontakter och bygga relationer.",
        examples: [
          {
            swedish:
              "Vill du hänga med och fika efter jobbet? Det brukar vara ett bra sätt att lära känna kollegorna.",
            explanation:
              "Fika är central i svensk social kultur – det är ofta det första steget till att bygga relationer.",
          },
          {
            swedish:
              "Jag gick med i en förening för att träffa nya människor – i Sverige är föreningslivet stort.",
            explanation:
              "Föreningslivet (idrottsklubbar, studiecirklar, ideella organisationer) är en vanlig ingång till sociala nätverk.",
          },
          {
            swedish:
              "LinkedIn är viktigt i Sverige – se till att ha en uppdaterad profil om du vill nätverka professionellt.",
            explanation:
              "Professionellt nätverkande online kompletterar personliga kontakter i svensk arbetskultur.",
          },
        ],
        keyRules: [
          "Svenskar kan uppfattas som reserverade till en början – ge det tid och ta initiativ till fika.",
          "Föreningar, studiecirklar och frivilligarbete är utmärkta sätt att möta nya människor.",
          "Professionellt nätverkande handlar om ömsesidig nytta – erbjud hjälp, inte bara be om den.",
          "Respektera personligt utrymme och undvik alltför personliga frågor vid första mötet.",
          "Lagom är nyckelordet – var vänlig och intresserad utan att vara påträngande.",
        ],
      },
      {
        id: "sv2-relationer-2",
        title: "Konflikthantering och svåra samtal",
        description:
          "Lär dig hantera konflikter och föra svåra samtal på svenska – med respekt och tydlighet.",
        examples: [
          {
            swedish:
              "Jag uppskattar vår relation, men jag behöver prata om något som stör mig.",
            explanation:
              "Inleder ett svårt samtal med något positivt och uttrycker sedan behovet tydligt – minskar försvarsreaktioner.",
          },
          {
            swedish:
              "Jag känner mig frustrerad när mötena alltid drar ut på tiden. Kan vi hitta en lösning tillsammans?",
            explanation:
              "Jag-budskap ('Jag känner...') följt av en konkret situation och ett förslag – konstruktivt och icke-anklagande.",
          },
          {
            swedish:
              "Jag förstår att du ser det annorlunda, och jag respekterar det. Låt oss försöka hitta en kompromiss.",
            explanation:
              "Bekräftar den andras perspektiv och öppnar för samarbete – grundläggande i svensk konfliktkultur.",
          },
        ],
        keyRules: [
          "Använd jag-budskap ('Jag känner...') istället för du-budskap ('Du gör alltid...') för att undvika anklagelser.",
          "I svensk kultur värderas kompromiss och konsensus – försök hitta lösningar som alla kan acceptera.",
          "Välj rätt tid och plats för svåra samtal – undvik offentliga konfrontationer.",
          "Lyssna aktivt och bekräfta den andras känslor innan du presenterar din egen sida.",
          "Om konflikten eskalerar, ta en paus och återkom när båda parter har lugnat ner sig.",
        ],
      },
      {
        id: "sv2-relationer-3",
        title: "Kulturella koder och sociala normer",
        description:
          "Navigera svenska sociala normer – från lagom-kulturen till jantelagen och allt däremellan.",
        examples: [
          {
            swedish:
              "I Sverige tar man av sig skorna när man går in i någons hem – det är en oskriven regel.",
            explanation:
              "Oskrivna regler som att ta av skorna visar respekt och är viktiga att känna till som nykomling.",
          },
          {
            swedish:
              "Att dela notan jämnt på restaurangen är standard – om inte någon specifikt bjuder.",
            explanation:
              "'Dela notan' (split the bill) är normen i Sverige – ingen förväntas bjuda om det inte tydligt uttalas.",
          },
          {
            swedish:
              "Jantelagen säger att man inte ska tro att man är bättre än andra – det påverkar hur svenskar kommunicerar.",
            explanation:
              "Jantelagen är en social kod som premierar ödmjukhet och jämlikhet – att skryta ses som negativt.",
          },
          {
            swedish:
              "Punktlighet är viktigt i Sverige – att komma fem minuter sent till ett möte anses respektlöst.",
            explanation:
              "Tidskultur i Sverige är strikt – avtalade tider respekteras och förseningar kommuniceras i förväg.",
          },
        ],
        keyRules: [
          "Lagom ('inte för mycket, inte för lite') genomsyrar svensk kultur – balans och måttlighet värderas.",
          "Jantelagen påverkar kommunikation – undvik att skryta och visa istället resultat genom handling.",
          "Personlig integritet respekteras – fråga inte om lön, religion eller politik vid första mötet.",
          "Kö-kulturen är helig i Sverige – att tränga sig i kön ses som extremt oartigt.",
          "Tack är det vanligaste ordet i Sverige – använd det ofta och i många sammanhang.",
        ],
      },
    ],
  },
];
