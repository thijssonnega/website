export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "wanneer-tijdelijk-leiderschap-structurele-rust-brengt",
    title: "Wanneer tijdelijk leiderschap structurele rust brengt",
    description:
      "Tijdelijke leiderschapsinzet kan juist ruimte maken voor duurzame verbetering, mits er snel richting en eigenaarschap ontstaat.",
    publishedAt: "2026-01-14",
    readTime: "5 min",
    content: [
      "In perioden van onzekerheid helpt tijdelijk leiderschap om snel duidelijkheid te creëren. Niet door harder te sturen, maar door prioriteiten scherp te maken en besluitvorming weer voorspelbaar te organiseren.",
      "Effectieve interimsturing begint met luisteren: waar stokt de operatie, waar zit bestuurlijke spanning en welke keuzes worden uitgesteld? Zodra die patronen zichtbaar zijn, ontstaat ruimte om teams te laten focussen op de juiste resultaten.",
      "Structurele rust komt pas wanneer verbeteringen overdraagbaar zijn. Dat vraagt om heldere rollen, ritme in overleg en expliciet eigenaarschap in de lijn. Juist daarin maakt tijdelijk leiderschap blijvende waarde mogelijk."
    ]
  },
  {
    slug: "van-analyse-naar-implementatie-waar-verandertrajecten-vaak-vastlopen",
    title: "Van analyse naar implementatie: waar verandertrajecten vaak vastlopen",
    description:
      "Veel trajecten falen niet op inhoud, maar op vertaling naar concreet gedrag, eigenaarschap en dagelijkse aansturing.",
    publishedAt: "2026-02-03",
    readTime: "6 min",
    content: [
      "In veel organisaties is de analyse degelijk, maar blijft de uitvoering achter. De oorzaak ligt vaak in een te grote stap tussen plan en praktijk.",
      "Een werkbare aanpak brengt strategie terug naar drie vragen: wat verandert er morgen in gedrag, wie is daarvoor verantwoordelijk en hoe meten we voortgang? Als die drie niet expliciet zijn, vertraagt elk traject.",
      "Succesvolle implementatie combineert bestuurlijke rust met operationele discipline. Kleine zichtbare resultaten geven vertrouwen, waarna teams sneller bereid zijn om nieuwe werkwijzen vast te houden."
    ]
  },
  {
    slug: "klantgerichte-processen-verbeteren-zonder-grip-te-verliezen",
    title: "Klantgerichte processen verbeteren zonder grip te verliezen",
    description:
      "Klantgericht werken hoeft niet te botsen met risicobeheersing. De sleutel is slimme segmentatie en duidelijke procesregie.",
    publishedAt: "2026-02-28",
    readTime: "5 min",
    content: [
      "Organisaties ervaren vaak een spanningsveld tussen klantvriendelijkheid en controle. In de praktijk versterken die elkaar wanneer processen helder en consistent zijn ingericht.",
      "Door klantcontact, data en operationele sturing beter te verbinden ontstaat sneller inzicht in waar knelpunten ontstaan. Dat maakt gerichte interventies mogelijk zonder extra complexiteit toe te voegen.",
      "Wie grip wil houden, moet niet alleen op KPI's sturen maar ook op kwaliteit van interactie. Juist daar ontstaat duurzame verbetering in betaalgedrag, klantbeleving en teamprestatie."
    ]
  }
];
