export type Service = {
  slug: string;
  title: string;
  summary: string;
  situations: string[];
  solutions: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "interim-management",
    title: "Interim management",
    summary:
      "Tijdelijke senior sturing wanneer continuïteit, tempo en bestuurlijke rust direct nodig zijn.",
    situations: [
      "Leiderschapsvacature of tijdelijke uitval",
      "Herinrichting van teams en verantwoordelijkheden",
      "Zware veranderdruk in een operationele omgeving"
    ],
    solutions: [
      "Snel overzicht en besluitkracht organiseren",
      "Heldere governance, ritme en KPI-sturing aanbrengen",
      "MT en operatie verbinden rond gezamenlijke prioriteiten"
    ],
    outcomes: [
      "Meer rust en voorspelbaarheid in de uitvoering",
      "Aanspreekbare teams met duidelijk eigenaarschap",
      "Sneller herstel van prestatie en vertrouwen"
    ]
  },
  {
    slug: "strategisch-operationeel-advies",
    title: "Strategisch en operationeel managementadvies",
    summary:
      "Advies dat verder gaat dan analyse: richting geven én vertalen naar werkbare keuzes voor de operatie.",
    situations: [
      "Onvoldoende samenhang tussen strategie en uitvoering",
      "Complexe vraagstukken met meerdere stakeholders",
      "Behoefte aan onafhankelijke sparring op directieniveau"
    ],
    solutions: [
      "Heldere diagnose met concrete prioriteiten",
      "Bestuurlijke besluitvorming ondersteunen",
      "Roadmap met realistische implementatiestappen"
    ],
    outcomes: [
      "Meer focus op wat werkelijk impact maakt",
      "Snellere besluitvorming met draagvlak",
      "Sterkere samenwerking tussen beleid en uitvoering"
    ]
  },
  {
    slug: "implementatiebegeleiding",
    title: "Implementatiebegeleiding",
    summary:
      "Verandering laten landen in gedrag, processen en resultaat — met oog voor mens én prestatie.",
    situations: [
      "Veranderprogramma blijft hangen in plannen",
      "Nieuwe werkwijzen worden niet structureel toegepast",
      "Te weinig eigenaarschap in teams"
    ],
    solutions: [
      "Programmatische aanpak met duidelijke mijlpalen",
      "Teamcoaching en praktisch verandermanagement",
      "Doelgerichte voortgangsmonitoring"
    ],
    outcomes: [
      "Hogere adoptie van nieuwe werkwijzen",
      "Meetbare voortgang op kritieke thema's",
      "Duurzame verankering in de lijnorganisatie"
    ]
  },
  {
    slug: "procesoptimalisatie",
    title: "Procesoptimalisatie en performanceverbetering",
    summary:
      "Slimmere processen, minder verspilling en hogere kwaliteit in klant- en betaalketens.",
    situations: [
      "Hoge werkdruk en oplopende doorlooptijden",
      "Fouten, herstelwerk en inefficiëntie",
      "Onvoldoende stuurinformatie"
    ],
    solutions: [
      "Procesanalyse en bottleneck-reductie",
      "Heldere KPI's en prestatie-overleggen",
      "Verbetercycli met multidisciplinaire teams"
    ],
    outcomes: [
      "Kortere doorlooptijd en betere voorspelbaarheid",
      "Lagere kosten door efficiëntere uitvoering",
      "Hogere klanttevredenheid en kwaliteitsniveau"
    ]
  },
  {
    slug: "credit-management-collections-recovery",
    title: "Credit management, collections & recovery",
    summary:
      "Specialistische expertise voor organisaties die grip willen op betaalgedrag, risico en klantrelatie.",
    situations: [
      "Stijgende achterstanden en incassodruk",
      "Balans zoeken tussen resultaat en klantbehoud",
      "Verbetering nodig in ketensamenwerking"
    ],
    solutions: [
      "Strategie voor preventie, vroegsignalering en opvolging",
      "Inrichting van mensgerichte klantcommunicatie",
      "Aanscherpen van governance met partners en leveranciers"
    ],
    outcomes: [
      "Verbeterde cashflow en lager risicoprofiel",
      "Professionelere klantinteractie in lastige situaties",
      "Betere ketenprestaties met duidelijke regie"
    ]
  },
  {
    slug: "outsourcing-ketensamenwerking",
    title: "Outsourcing en ketensamenwerking",
    summary:
      "De regie houden bij uitbesteding en samenwerking in de keten, met scherpe afspraken en meetbare prestaties.",
    situations: [
      "Onvoldoende grip op externe partners",
      "Onduidelijke verantwoordelijkheden in de keten",
      "Prestaties blijven achter bij verwachting"
    ],
    solutions: [
      "Governance- en contractafspraken aanscherpen",
      "Servicemodel en escalatiepaden verbeteren",
      "Rapportages en gezamenlijke verbeterstructuren inrichten"
    ],
    outcomes: [
      "Meer transparantie en bestuurlijke controle",
      "Betere samenwerking met partners",
      "Hogere voorspelbaarheid van service en resultaat"
    ]
  }
];
