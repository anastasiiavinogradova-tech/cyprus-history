import { Theme, Chapter, MapPoint, VideoContent } from '../types';

// Map points for Ancient Myths theme
export const ancientMythsMapPoints: MapPoint[] = [
  {
    id: 'petra-tou-romiou',
    name: {
      ru: 'Петра-ту-Ромиу',
      en: 'Petra tou Romiou',
      gr: 'Πέτρα του Ρωμιού',
    },
    coordinates: [34.6639, 32.6278],
    description: {
      ru: 'Легендарное место рождения Афродиты из морской пены',
      en: 'Legendary birthplace of Aphrodite from sea foam',
      gr: 'Θρυλικός τόπος γέννησης της Αφροδίτης από τον αφρό της θάλασσας',
    },
  },
  {
    id: 'paphos',
    name: {
      ru: 'Пафос',
      en: 'Paphos',
      gr: 'Πάφος',
    },
    coordinates: [34.7756, 32.4244],
    description: {
      ru: 'Древний город и центр культа Афродиты',
      en: 'Ancient city and center of Aphrodite worship',
      gr: 'Αρχαία πόλη και κέντρο λατρείας της Αφροδίτης',
    },
  },
  {
    id: 'diarizos-river',
    name: {
      ru: 'Река Диаризос',
      en: 'Diarizos River',
      gr: 'Ποταμός Διαρίζος',
    },
    coordinates: [34.7833, 32.4500],
    description: {
      ru: 'Место, где был ранен Адонис и где цветут красные анемоны',
      en: 'Place where Adonis was wounded and red anemones bloom',
      gr: 'Τόπος όπου τραυματίστηκε ο Άδωνις και ανθίζουν κόκκινες ανεμώνες',
    },
  },
  {
    id: 'ancient-paphos',
    name: {
      ru: 'Древний Пафос',
      en: 'Ancient Paphos',
      gr: 'Αρχαία Πάφος',
    },
    coordinates: [34.7581, 32.4094],
    description: {
      ru: 'Царство Кинираса и место древнейшего храма Афродиты',
      en: 'Kingdom of Cinyras and site of the oldest temple of Aphrodite',
      gr: 'Βασίλειο του Κινύρα και χώρος του αρχαιότερου ναού της Αφροδίτης',
    },
  },
  {
    id: 'amathus',
    name: {
      ru: 'Амафус',
      en: 'Amathus',
      gr: 'Αμαθούς',
    },
    coordinates: [34.7083, 33.1358],
    description: {
      ru: 'Древний город с культом Афродиты-Кипридской и Адониса',
      en: 'Ancient city with cult of Aphrodite Kypria and Adonis',
      gr: 'Αρχαία πόλη με λατρεία της Αφροδίτης Κυπρίας και του Άδωνι',
    },
  },
  {
    id: 'salamis',
    name: {
      ru: 'Саламин',
      en: 'Salamis',
      gr: 'Σαλαμίς',
    },
    coordinates: [35.1853, 33.9014],
    description: {
      ru: 'Древний город, основанный героем Тевкром после Троянской войны',
      en: 'Ancient city founded by hero Teucer after the Trojan War',
      gr: 'Αρχαία πόλη που ιδρύθηκε από τον ήρωα Τεύκρο μετά τον Τρωικό Πόλεμο',
    },
  },
];

// Chapters for Ancient Myths theme
export const ancientMythsChapters: Chapter[] = [
  {
    id: 'chapter-1',
    slug: 'birth-of-aphrodite',
    title: {
      ru: 'Рождение Афродиты',
      en: 'Birth of Aphrodite',
      gr: 'Η Γέννηση της Αφροδίτης',
    },
    content: {
      ru: `Согласно древнегреческой мифологии, Афродита, богиня любви и красоты, родилась из морской пены у берегов Кипра. Когда титан Кронос сверг своего отца Урана, он бросил его в море. Из морской пены, смешанной с кровью Урана, возникла прекрасная богиня.

Волны вынесли Афродиту к скале Петра-ту-Ромиу, недалеко от Пафоса. Здесь она впервые ступила на землю, и везде, где ступала её нога, расцветали цветы. Оры, богини времён года, облачили её в божественные одежды и привели на Олимп.

Место рождения Афродиты стало священным для древних греков и римлян. Считалось, что купание в водах у Петра-ту-Ромиу дарует вечную молодость и красоту. До сих пор это место привлекает влюблённых со всего мира.

Кипр получил прозвище "Остров Афродиты", и культ богини процветал здесь более тысячи лет. Храмы в её честь были центрами паломничества античного мира.`,
      en: `According to ancient Greek mythology, Aphrodite, the goddess of love and beauty, was born from sea foam off the coast of Cyprus. When the titan Cronus overthrew his father Uranus, he cast him into the sea. From the sea foam mixed with the blood of Uranus, a beautiful goddess emerged.

The waves carried Aphrodite to the rock of Petra tou Romiou, near Paphos. Here she first stepped on land, and wherever her feet touched, flowers bloomed. The Horae, goddesses of the seasons, clothed her in divine robes and brought her to Olympus.

Aphrodite's birthplace became sacred to the ancient Greeks and Romans. It was believed that bathing in the waters at Petra tou Romiou granted eternal youth and beauty. To this day, this place attracts lovers from around the world.

Cyprus earned the nickname "Island of Aphrodite", and the goddess's cult flourished here for over a thousand years. Temples in her honor were pilgrimage centers of the ancient world.`,
      gr: `Σύμφωνα με την αρχαία ελληνική μυθολογία, η Αφροδίτη, η θεά του έρωτα και της ομορφιάς, γεννήθηκε από τον αφρό της θάλασσας στις ακτές της Κύπρου. Όταν ο τιτάνας Κρόνος ανέτρεψε τον πατέρα του Ουρανό, τον έριξε στη θάλασσα. Από τον αφρό της θάλασσας αναμεμειγμένο με το αίμα του Ουρανού, αναδύθηκε μια όμορφη θεά.

Τα κύματα μετέφεραν την Αφροδίτη στον βράχο της Πέτρας του Ρωμιού, κοντά στην Πάφο. Εδώ πάτησε για πρώτη φορά στη γη, και όπου πατούσαν τα πόδια της, άνθιζαν λουλούδια. Οι Ώρες, θεές των εποχών, την ντύθηκαν με θεϊκά ρούχα και την έφεραν στον Όλυμπο.

Ο τόπος γέννησης της Αφροδίτης έγινε ιερός για τους αρχαίους Έλληνες και Ρωμαίους. Πιστευόταν ότι το μπάνιο στα νερά της Πέτρας του Ρωμιού χάριζε αιώνια νεότητα και ομορφιά. Μέχρι σήμερα, αυτός ο τόπος ελκύει ερωτευμένους από όλο τον κόσμο.

Η Κύπρος απέκτησε το παρατσούκλι "Νησί της Αφροδίτης", και η λατρεία της θεάς άνθισε εδώ για πάνω από χίλια χρόνια. Οι ναοί προς τιμήν της ήταν κέντρα προσκυνήματος του αρχαίου κόσμου.`,
    },
    image: 'https://picsum.photos/seed/aphrodite-birth/1200/800',
    mapPointId: 'petra-tou-romiou',
  },
  {
    id: 'chapter-2',
    slug: 'sanctuary-of-aphrodite',
    title: {
      ru: 'Святилище Афродиты и сакральный город',
      en: 'Sanctuary of Aphrodite and the Sacred City',
      gr: 'Ιερό της Αφροδίτης και η Ιερή Πόλη',
    },
    content: {
      ru: `Пафос был главным центром культа Афродиты в античном мире. Святилище Афродиты в Палеа-Пафосе (Старом Пафосе) считалось одним из важнейших религиозных центров Средиземноморья. Основанное, согласно легенде, самим царём Кинирасом, святилище привлекало паломников со всех концов греко-римского мира.

Храм Афродиты не имел статуи богини в традиционном понимании. Вместо этого поклонялись священному конусообразному камню, символизирующему присутствие богини. Этот аниконический образ отражал древнейшие формы почитания божества, уходящие корнями в доэллинские времена.

Ежегодные праздники Афродисии собирали тысячи верующих. Ритуалы включали священные омовения, жертвоприношения и мистерии, подробности которых держались в строжайшей тайне. Жрецы храма обладали огромным влиянием и богатством.

Город Пафос процветал благодаря паломникам и торговле. Здесь смешивались греческие, финикийские и египетские традиции, создавая уникальную культурную атмосферу. Римские императоры оказывали храму особые почести, а сам Пафос стал столицей римского Кипра.`,
      en: `Paphos was the main center of Aphrodite's cult in the ancient world. The Sanctuary of Aphrodite in Palea Paphos (Old Paphos) was considered one of the most important religious centers of the Mediterranean. Founded, according to legend, by King Cinyras himself, the sanctuary attracted pilgrims from all corners of the Greco-Roman world.

The Temple of Aphrodite had no statue of the goddess in the traditional sense. Instead, worship was directed toward a sacred cone-shaped stone symbolizing the goddess's presence. This aniconic image reflected the most ancient forms of deity worship, rooted in pre-Hellenic times.

Annual Aphrodisia festivals gathered thousands of believers. Rituals included sacred ablutions, sacrifices, and mysteries whose details were kept in strictest secrecy. The temple priests wielded enormous influence and wealth.

The city of Paphos prospered through pilgrims and trade. Greek, Phoenician, and Egyptian traditions mixed here, creating a unique cultural atmosphere. Roman emperors paid special honors to the temple, and Paphos itself became the capital of Roman Cyprus.`,
      gr: `Η Πάφος ήταν το κύριο κέντρο της λατρείας της Αφροδίτης στον αρχαίο κόσμο. Το Ιερό της Αφροδίτης στην Παλαιά Πάφο θεωρούνταν ένα από τα σημαντικότερα θρησκευτικά κέντρα της Μεσογείου. Ιδρύθηκε, σύμφωνα με το μύθο, από τον ίδιο τον βασιλιά Κινύρα, και το ιερό προσέλκυε προσκυνητές από όλες τις γωνιές του ελληνορωμαϊκού κόσμου.

Ο Ναός της Αφροδίτης δεν είχε άγαλμα της θεάς με την παραδοσιακή έννοια. Αντίθετα, η λατρεία απευθυνόταν σε μια ιερή κωνική πέτρα που συμβόλιζε την παρουσία της θεάς. Αυτή η ανεικονική εικόνα αντανακλούσε τις αρχαιότερες μορφές λατρείας θεότητας, με ρίζες στους προελληνικούς χρόνους.

Οι ετήσιες γιορτές Αφροδίσια συγκέντρωναν χιλιάδες πιστούς. Τα τελετουργικά περιλάμβαναν ιερές λουτρώσεις, θυσίες και μυστήρια των οποίων οι λεπτομέρειες κρατούνταν σε απόλυτη μυστικότητα. Οι ιερείς του ναού είχαν τεράστια επιρροή και πλούτο.

Η πόλη της Πάφου ευημερούσε χάρη στους προσκυνητές και το εμπόριο. Ελληνικές, φοινικικές και αιγυπτιακές παραδόσεις αναμειγνύονταν εδώ, δημιουργώντας μια μοναδική πολιτιστική ατμόσφαιρα. Οι Ρωμαίοι αυτοκράτορες απέδιδαν ειδικές τιμές στον ναό, και η ίδια η Πάφος έγινε πρωτεύουσα της ρωμαϊκής Κύπρου.`,
    },
    image: 'https://picsum.photos/seed/sanctuary-paphos/1200/800',
    mapPointId: 'paphos',
  },
  {
    id: 'chapter-3',
    slug: 'adonis-myth',
    title: {
      ru: 'Адонис: любовь, смерть и возрождение',
      en: 'Adonis: Love, Death and Rebirth',
      gr: 'Άδωνις: Έρωτας, Θάνατος και Αναγέννηση',
    },
    content: {
      ru: `История Адониса и Афродиты — один из самых трогательных мифов древности. Адонис, прекрасный юноша невероятной красоты, пленил сердце самой богини любви. Согласно кипрской версии мифа, Адонис был рождён на острове и провёл здесь свои последние дни.

Афродита и Адонис проводили время в горах Троодоса, охотясь и наслаждаясь природой. Богиня предупреждала возлюбленного об опасностях охоты, но Адонис, движимый отвагой юности, не внял её предостережениям. Во время охоты дикий кабан смертельно ранил юношу.

Услышав крики Адониса, Афродита поспешила к нему, но было уже поздно. Из крови возлюбленного выросли красные анемоны — цветы, которые до сих пор каждую весну покрывают склоны кипрских гор. Слёзы богини смешались с кровью Адониса, окрасив в красный цвет реки острова.

Зевс, тронутый горем Афродиты, позволил Адонису проводить часть года в мире живых, а часть — в царстве мёртвых. Так возник миф об умирающем и воскресающем боге, символизирующий смену времён года и вечное обновление природы. Культ Адониса был особенно популярен среди женщин, которые ежегодно оплакивали его смерть и праздновали возвращение.`,
      en: `The story of Adonis and Aphrodite is one of the most touching myths of antiquity. Adonis, a beautiful youth of incredible beauty, captivated the heart of the goddess of love herself. According to the Cypriot version of the myth, Adonis was born on the island and spent his final days here.

Aphrodite and Adonis spent time in the Troodos mountains, hunting and enjoying nature. The goddess warned her beloved of the dangers of hunting, but Adonis, driven by youthful courage, did not heed her warnings. During a hunt, a wild boar fatally wounded the youth.

Hearing Adonis's cries, Aphrodite rushed to him, but it was too late. From her beloved's blood grew red anemones — flowers that still cover the slopes of Cyprus's mountains every spring. The goddess's tears mixed with Adonis's blood, staining the island's rivers red.

Zeus, moved by Aphrodite's grief, allowed Adonis to spend part of the year in the world of the living and part in the realm of the dead. Thus arose the myth of the dying and resurrecting god, symbolizing the changing seasons and eternal renewal of nature. The cult of Adonis was especially popular among women, who annually mourned his death and celebrated his return.`,
      gr: `Η ιστορία του Άδωνι και της Αφροδίτης είναι ένας από τους πιο συγκινητικούς μύθους της αρχαιότητας. Ο Άδωνις, ένας όμορφος νέος απίστευτης ομορφιάς, αιχμαλώτισε την καρδιά της ίδιας της θεάς του έρωτα. Σύμφωνα με την κυπριακή εκδοχή του μύθου, ο Άδωνις γεννήθηκε στο νησί και πέρασε τις τελευταίες του μέρες εδώ.

Η Αφροδίτη και ο Άδωνις πέρασαν χρόνο στα όρη του Τροόδους, κυνηγώντας και απολαμβάνοντας τη φύση. Η θεά προειδοποίησε τον αγαπημένο της για τους κινδύνους του κυνηγιού, αλλά ο Άδωνις, κινούμενος από νεανικό θάρρος, δεν άκουσε τις προειδοποιήσεις της. Κατά τη διάρκεια ενός κυνηγιού, ένας άγριος κάπρος τραυμάτισε θανάσιμα τον νέο.

Ακούγοντας τις κραυγές του Άδωνι, η Αφροδίτη έσπευσε κοντά του, αλλά ήταν ήδη αργά. Από το αίμα του αγαπημένου της φύτρωσαν κόκκινες ανεμώνες — λουλούδια που ακόμα καλύπτουν τις πλαγιές των βουνών της Κύπρου κάθε άνοιξη. Τα δάκρυα της θεάς αναμείχθηκαν με το αίμα του Άδωνι, βάφοντας κόκκινα τα ποτάμια του νησιού.

Ο Ζευς, συγκινημένος από τη θλίψη της Αφροδίτης, επέτρεψε στον Άδωνι να περνά μέρος του χρόνου στον κόσμο των ζωντανών και μέρος στο βασίλειο των νεκρών. Έτσι προέκυψε ο μύθος του θεού που πεθαίνει και ανασταίνεται, συμβολίζοντας την αλλαγή των εποχών και την αιώνια ανανέωση της φύσης. Η λατρεία του Άδωνι ήταν ιδιαίτερα δημοφιλής μεταξύ των γυναικών, που ετησίως θρηνούσαν το θάνατό του και γιόρταζαν την επιστροφή του.`,
    },
    image: 'https://picsum.photos/seed/adonis-myth/1200/800',
    mapPointId: 'diarizos-river',
  },
  {
    id: 'chapter-4',
    slug: 'cinyras-legend',
    title: {
      ru: 'Кинирас — царь, жрец и проклятие',
      en: 'Cinyras — King, Priest and Curse',
      gr: 'Κινύρας — Βασιλιάς, Ιερέας και Κατάρα',
    },
    content: {
      ru: `Кинирас был легендарным царём Кипра и первым жрецом Афродиты в Пафосе. Согласно мифам, он обладал несметными богатствами и был искусным музыкантом, изобретателем кифары. Его династия правила Пафосом на протяжении многих поколений, совмещая царскую и жреческую власть.

История Кинираса тесно связана с трагическим мифом о Мирре, его дочери. Мирра воспылала противоестественной страстью к собственному отцу, и от их союза родился Адонис. Когда Кинирас узнал правду, он попытался убить дочь, но боги превратили её в мирровое дерево. Из коры этого дерева родился прекрасный Адонис.

Эта история отражает древние представления о божественной природе царской власти и сложные отношения между смертными и богами. Кинирас был не только царём, но и посредником между людьми и божественным миром, хранителем священных таинств Афродиты.

Потомки Кинираса, называемые Кинирадами, продолжали служить жрецами в храме Афродиты вплоть до римских времён. Они сохраняли древние ритуалы и тайные знания, передавая их из поколения в поколение. Род Кинирадов пользовался огромным уважением и влиянием не только на Кипре, но и во всём Средиземноморье.`,
      en: `Cinyras was the legendary king of Cyprus and the first priest of Aphrodite in Paphos. According to myths, he possessed immense wealth and was a skilled musician, inventor of the cithara. His dynasty ruled Paphos for many generations, combining royal and priestly power.

The story of Cinyras is closely linked to the tragic myth of Myrrha, his daughter. Myrrha fell in unnatural passion for her own father, and from their union Adonis was born. When Cinyras learned the truth, he tried to kill his daughter, but the gods transformed her into a myrrh tree. From the bark of this tree, beautiful Adonis was born.

This story reflects ancient concepts of the divine nature of royal power and complex relationships between mortals and gods. Cinyras was not only a king but also a mediator between people and the divine world, keeper of Aphrodite's sacred mysteries.

The descendants of Cinyras, called Cinyradae, continued to serve as priests in Aphrodite's temple until Roman times. They preserved ancient rituals and secret knowledge, passing them from generation to generation. The Cinyradae lineage enjoyed enormous respect and influence not only in Cyprus but throughout the Mediterranean.`,
      gr: `Ο Κινύρας ήταν ο θρυλικός βασιλιάς της Κύπρου και ο πρώτος ιερέας της Αφροδίτης στην Πάφο. Σύμφωνα με τους μύθους, κατείχε τεράστιο πλούτο και ήταν ικανός μουσικός, εφευρέτης της κιθάρας. Η δυναστεία του κυβέρνησε την Πάφο για πολλές γενιές, συνδυάζοντας τη βασιλική και ιερατική εξουσία.

Η ιστορία του Κινύρα συνδέεται στενά με τον τραγικό μύθο της Μύρρας, της κόρης του. Η Μύρρα ερωτεύτηκε με αφύσικο πάθος τον πατέρα της, και από την ένωσή τους γεννήθηκε ο Άδωνις. Όταν ο Κινύρας έμαθε την αλήθεια, προσπάθησε να σκοτώσει την κόρη του, αλλά οι θεοί τη μεταμόρφωσαν σε δέντρο σμύρνης. Από τον φλοιό αυτού του δέντρου γεννήθηκε ο όμορφος Άδωνις.

Αυτή η ιστορία αντανακλά αρχαίες αντιλήψεις για τη θεϊκή φύση της βασιλικής εξουσίας και τις πολύπλοκες σχέσεις μεταξύ θνητών και θεών. Ο Κινύρας δεν ήταν μόνο βασιλιάς αλλά και μεσολαβητής μεταξύ ανθρώπων και θεϊκού κόσμου, φύλακας των ιερών μυστηρίων της Αφροδίτης.

Οι απόγονοι του Κινύρα, που ονομάζονταν Κινυράδες, συνέχισαν να υπηρετούν ως ιερείς στον ναό της Αφροδίτης μέχρι τους ρωμαϊκούς χρόνους. Διατήρησαν αρχαία τελετουργικά και μυστική γνώση, μεταβιβάζοντάς τα από γενιά σε γενιά. Η γενιά των Κινυραδών απολάμβανε τεράστιο σεβασμό και επιρροή όχι μόνο στην Κύπρο αλλά σε όλη τη Μεσόγειο.`,
    },
    image: 'https://picsum.photos/seed/cinyras-king/1200/800',
    mapPointId: 'ancient-paphos',
  },
  {
    id: 'chapter-5',
    slug: 'amathus-cults',
    title: {
      ru: 'Амафус — город древних культов',
      en: 'Amathus — City of Ancient Cults',
      gr: 'Αμαθούς — Πόλη Αρχαίων Λατρειών',
    },
    content: {
      ru: `Амафус был одним из древнейших городов-государств Кипра, чья история восходит к доэллинским временам. Город славился своими уникальными религиозными традициями, где почитание Афродиты сочеталось с более древними культами плодородия.

В Амафусе поклонялись Афродите-Кипридской в её особой ипостаси — бородатой богине, сочетающей мужские и женские качества. Это изображение отражало древнюю концепцию божества как источника всей жизненной силы, объединяющего противоположности. Культ этой формы Афродиты был уникален для Кипра.

Город также был центром культа Адониса. Ежегодно здесь проводились грандиозные празднества Адонии, где женщины оплакивали смерть юного бога и радовались его воскрешению. На крышах домов высаживали "сады Адониса" — быстрорастущие растения, символизирующие краткость жизни и неизбежность смерти.

Археологические находки в Амафусе свидетельствуют о богатой религиозной жизни города. Огромные каменные кратеры, святилища на акрополе и некрополь с богатыми погребениями рассказывают о процветающей цивилизации, где переплелись греческие, финикийские и местные традиции. Амафус оставался важным религиозным центром вплоть до христианской эры.`,
      en: `Amathus was one of the most ancient city-states of Cyprus, whose history dates back to pre-Hellenic times. The city was famous for its unique religious traditions, where worship of Aphrodite combined with more ancient fertility cults.

In Amathus, they worshipped Aphrodite Kypria in her special aspect — the bearded goddess, combining male and female qualities. This image reflected the ancient concept of deity as the source of all life force, uniting opposites. The cult of this form of Aphrodite was unique to Cyprus.

The city was also a center of Adonis worship. Annually, grand Adonia festivals were held here, where women mourned the death of the young god and rejoiced at his resurrection. On rooftops, "gardens of Adonis" were planted — fast-growing plants symbolizing the brevity of life and inevitability of death.

Archaeological finds in Amathus testify to the city's rich religious life. Enormous stone kraters, sanctuaries on the acropolis, and a necropolis with rich burials tell of a prospering civilization where Greek, Phoenician, and local traditions intertwined. Amathus remained an important religious center until the Christian era.`,
      gr: `Η Αμαθούς ήταν μία από τις αρχαιότερες πόλεις-κράτη της Κύπρου, της οποίας η ιστορία χρονολογείται από προελληνικούς χρόνους. Η πόλη φημιζόταν για τις μοναδικές της θρησκευτικές παραδόσεις, όπου η λατρεία της Αφροδίτης συνδυαζόταν με πιο αρχαίες λατρείες γονιμότητας.

Στην Αμαθούντα λάτρευαν την Αφροδίτη Κυπρία στην ιδιαίτερη όψη της — τη γενειοφόρο θεά, που συνδύαζε αρσενικές και θηλυκές ιδιότητες. Αυτή η εικόνα αντανακλούσε την αρχαία ιδέα της θεότητας ως πηγής όλης της ζωτικής δύναμης, ενώνοντας τα αντίθετα. Η λατρεία αυτής της μορφής της Αφροδίτης ήταν μοναδική στην Κύπρο.

Η πόλη ήταν επίσης κέντρο λατρείας του Άδωνι. Ετησίως διοργανώνονταν εδώ μεγαλοπρεπείς γιορτές Αδώνια, όπου οι γυναίκες θρηνούσαν το θάνατο του νεαρού θεού και χαίρονταν την ανάστασή του. Στις στέγες των σπιτιών φύτευαν "κήπους του Άδωνι" — γρήγορα αναπτυσσόμενα φυτά που συμβόλιζαν τη συντομία της ζωής και την αναπόφευκτη φύση του θανάτου.

Τα αρχαιολογικά ευρήματα στην Αμαθούντα μαρτυρούν την πλούσια θρησκευτική ζωή της πόλης. Τεράστιοι πέτρινοι κρατήρες, ιερά στην ακρόπολη και νεκρόπολη με πλούσιες ταφές διηγούνται για έναν ευημερούντα πολιτισμό, όπου διαπλέκονταν ελληνικές, φοινικικές και τοπικές παραδόσεις. Η Αμαθούς παρέμεινε σημαντικό θρησκευτικό κέντρο μέχρι τη χριστιανική εποχή.`,
    },
    image: 'https://picsum.photos/seed/amathus-city/1200/800',
    mapPointId: 'amathus',
  },
  {
    id: 'chapter-6',
    slug: 'heroes-and-sea',
    title: {
      ru: 'Герои и море: Кипр на пути мифических путешествий',
      en: 'Heroes and Sea: Cyprus on the Path of Mythical Journeys',
      gr: 'Ήρωες και Θάλασσα: Η Κύπρος στο Μονοπάτι των Μυθικών Ταξιδιών',
    },
    content: {
      ru: `Кипр занимал важное место в греческих эпических сказаниях и мифах о великих героях. Остров находился на перекрестке морских путей, и многие легендарные мореплаватели причаливали к его берегам.

Тевкр, сын царя Саламина Теламона и брат великого Аякса, после Троянской войны был изгнан отцом за то, что не смог защитить брата. Он прибыл на Кипр и основал город Саламин, названный в честь его родины. Тевкр стал царём и родоначальником династии, правившей городом многие столетия. Легенда гласит, что он принёс с собой культ Аякса и афинской богини Афины.

Агапенор, царь Аркадии, участвовал в Троянской войне под предводительством Агамемнона. На обратном пути его корабли попали в бурю и были выброшены на берега Кипра. Агапенор основал город Палеа-Пафос и построил знаменитый храм Афродиты. Согласно преданию, именно аркадийцы принесли на остров культ Афродиты в её греческой форме.

Другие герои, такие как Демофонт, сын Тесея, также посещали остров. Кипр становился местом, где эллинская культура смешивалась с древними местными традициями, создавая уникальный сплав мифологии и истории. Эти легенды объясняли греческие поселения на острове и служили обоснованием культурных и политических связей между Кипром и материковой Грецией.`,
      en: `Cyprus occupied an important place in Greek epic tales and myths about great heroes. The island stood at the crossroads of sea routes, and many legendary seafarers landed on its shores.

Teucer, son of King Telamon of Salamis and brother of great Ajax, was exiled by his father after the Trojan War for failing to protect his brother. He arrived in Cyprus and founded the city of Salamis, named after his homeland. Teucer became king and founder of a dynasty that ruled the city for many centuries. Legend says he brought with him the cult of Ajax and the Athenian goddess Athena.

Agapenor, king of Arcadia, participated in the Trojan War under Agamemnon's command. On his return journey, his ships were caught in a storm and cast upon Cyprus's shores. Agapenor founded the city of Palea Paphos and built the famous temple of Aphrodite. According to tradition, it was the Arcadians who brought the cult of Aphrodite in her Greek form to the island.

Other heroes, such as Demophon, son of Theseus, also visited the island. Cyprus became a place where Hellenic culture mixed with ancient local traditions, creating a unique blend of mythology and history. These legends explained Greek settlements on the island and served to justify cultural and political connections between Cyprus and mainland Greece.`,
      gr: `Η Κύπρος κατείχε σημαντική θέση στα ελληνικά επικά ποιήματα και τους μύθους για μεγάλους ήρωες. Το νησί βρισκόταν στη διασταύρωση θαλάσσιων οδών, και πολλοί θρυλικοί ναυτικοί προσέγγισαν τις ακτές του.

Ο Τεύκρος, γιος του βασιλιά της Σαλαμίνας Τελαμώνα και αδελφός του μεγάλου Αίαντα, εξορίστηκε από τον πατέρα του μετά τον Τρωικό Πόλεμο επειδή δεν κατάφερε να προστατεύσει τον αδελφό του. Έφτασε στην Κύπρο και ίδρυσε την πόλη Σαλαμίνα, που ονομάστηκε προς τιμήν της πατρίδας του. Ο Τεύκρος έγινε βασιλιάς και ιδρυτής δυναστείας που κυβέρνησε την πόλη για πολλούς αιώνες. Ο θρύλος λέει ότι έφερε μαζί του τη λατρεία του Αίαντα και της Αθηναίας θεάς Αθηνάς.

Ο Αγαπήνωρ, βασιλιάς της Αρκαδίας, συμμετείχε στον Τρωικό Πόλεμο υπό την αρχηγία του Αγαμέμνονα. Στο ταξίδι επιστροφής, τα πλοία του έπεσαν σε καταιγίδα και ρίχτηκαν στις ακτές της Κύπρου. Ο Αγαπήνωρ ίδρυσε την πόλη Παλαιά Πάφος και έκτισε το διάσημο ναό της Αφροδίτης. Σύμφωνα με την παράδοση, ήταν οι Αρκάδες που έφεραν στο νησί τη λατρεία της Αφροδίτης στην ελληνική της μορφή.

Άλλοι ήρωες, όπως ο Δημοφών, γιος του Θησέα, επίσης επισκέφτηκαν το νησί. Η Κύπρος έγινε τόπος όπου ο ελληνικός πολιτισμός αναμειγνυόταν με αρχαίες τοπικές παραδόσεις, δημιουργώντας ένα μοναδικό μείγμα μυθολογίας και ιστορίας. Αυτοί οι θρύλοι εξηγούσαν τους ελληνικούς οικισμούς στο νησί και χρησίμευαν για να δικαιολογήσουν τις πολιτιστικές και πολιτικές σχέσεις μεταξύ της Κύπρου και της ηπειρωτικής Ελλάδας.`,
    },
    image: 'https://picsum.photos/seed/heroes-sea/1200/800',
    mapPointId: 'salamis',
  },
];

// Video content for Ancient Myths theme
export const ancientMythsVideos: VideoContent[] = [
  {
    type: 'short-stories',
    title: {
      ru: 'Короткие истории: Наказания в древности',
      en: 'Short Stories: Punishments in Antiquity',
      gr: 'Σύντομες Ιστορίες: Τιμωρίες στην Αρχαιότητα',
    },
    filename: '3 Наказания Для Жены В Средневековье!.mp4',
  },
  {
    type: 'video-brief',
    title: {
      ru: 'Видео обзор: Древняя Греция за 18 минут',
      en: 'Video Brief: Ancient Greece in 18 Minutes',
      gr: 'Βίντεο Επισκόπηση: Αρχαία Ελλάδα σε 18 Λεπτά',
    },
    filename: 'Древняя Греция за 18 минут (1).mp4',
  },
  {
    type: 'deep-dive',
    title: {
      ru: 'Глубокое погружение: Боги и мифы Древней Греции',
      en: 'Deep Dive: Gods and Myths of Ancient Greece',
      gr: 'Βαθιά Κατάδυση: Θεοί και Μύθοι της Αρχαίας Ελλάδας',
    },
    filename: '🌙 ЛЕКЦИЯ ДЛЯ СНА_ Боги и мифы Древней Греции (1).mp4',
  },
];

// Complete Ancient Myths theme data
export const ancientMythsTheme: Partial<Theme> = {
  chapters: ancientMythsChapters,
  mapPoints: ancientMythsMapPoints,
};

