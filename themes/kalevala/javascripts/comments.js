var comments = {
  'Vaka':['(Väinämöisen epiteettinä) oikeamielinen, luja, vakava (Turunen 1979)'],
  'Wäinämöinen':['Väinämöinen : Kalevalan keskushahmo, tietäjä, runonlaulaja. Karjalan eeppisten runojen päähenkilö, jonka' +
  ' epiteettejä vaka vanha, tietäjä tai laulaja iänikuinen (vrt. inkeriläisissä runoissa V. esiintyy harvoin).' +
  ' <a class="more" >Katso lisää</a>',
  'Väinä : leveä, syvä, tyynesti virtaava joki (Turunen 1979).<br><br>' +
  'Väinämöiseen liittyviä jumala-käsityksiä: hämäläisten jumala (Mikael Agricolan jumalluettelo), suomalainen Orfeus' +
  ' (Porthan), loitsija, ilman, veden ja tuulen jumala, kanteleen luoja (Ganander), veden jumala (Setälä, Krohn).<br><br>' +
  'Väinämöinen historiallisena sankarina (Lönnrot, Gottlund, Ahlqvist, K. Krohn).<br><br>' +
  'Väinämöinen myyttisenä tietäjä-samaanina, laulajana ja loitsijana (Haavio).<br><br>' +
  '(Turunen 1979: 395−397.)<br><br>' +
  'Lönnrot itse piti aluksi Väinämöistä myyttisenä sankarina, mutta Uuden Kalevalan esipuheessa hän kallistui' +
  ' historialliseen tulkintaan ja esitti Kalevalan ja Pohjolan heimojen olleen alunperin suomalaisia heimoja.' +
  ' Ks. lisää Väinämöisestä: Siikala 1999, 2012.'],
  'Wäinölän':['Väinölä : Väinämöisen asuinpaikaksi kuviteltu paikka (Turunen 1979). <a class="more" >Näytä lisää</a>',
  'Kansanrunoissa Väinölä ei yhdisty Kalevalan käsitteeseen, vaan Lönnrot on itse muodostanut yhteyden niiden välille' +
  ' (Kaukonen 1945: 502−503; ks. myös Turunen 1979).'],
  'ahoilla':['aho : entinen kaskimaa tai puuttomaksi hakattu maa-ala'],
  'Kalevalan':['Kalevalaisten asuinpaikka, Väinämöisen, Ilmarisen ja Lemminkäisen kotiseutu (Turunen 1979).' +
  ' <a class="more" >Katso lisää</a>',
  'Lönnrot yleisti nimen Väinölän, Ilman, Utuniemen, Terhensaaren, Suomelan, Kaukoniemen, Päivölän, Vuojelan, Luotolan, Jumalisten' +
  ' yms. yhteisnimeksi, ja enimmät eepoksen tapahtumista voitiin näin sijoittaa Kalevalaan. Kansanrunoissa' +
  ' Kalevala kuitenkin esiintyy vain harvoin, ja se sai paikannimenä keskeisen aseman nimenomaan Lönnrotin henkilökohtaisen' +
  ' käsityksen perusteella. (Turunen 1979.)'],
  'kankahilla':['kangas : kuiva metsämaa'],
  'Laulelevi':['laulella :  laulaa usein, toistuvasti (Turunen 1979)'],
  'virsiänsä':['virsi : (tässä) laulu; runopukuinen kertomus, kertova runo'],
  'taitelevi':['taidella : osata, kyetä. <a class="more" >Katso lisää</a>',
  'Vrt. taitaja = taitomies, runonlaulaja, tietäjä (laulaja-sanan yhteydessä sen kanssa samaa merkitsevänä). Koska laulaja' +
  ' oli samalla tietäjä, myös taitamiseen liittyi loitsutaidon eli sanan mahtamisen merkitys. (Turunen 1979.)'],
  'Lauloi':['laulaa : (tässä) esittää loitsuja, loitsia. <a class="more" >Katso lisää</a>',
  'Vrt. laulaa-verbin tavallisempi merkitys: esittää virttä eli vanhaa runoa (Turunen 1979).'],
  'pääksytysten':['yhtä mittaa, peräkkäin, taukoamatta. <a class="more" >Katso lisää.</a>',
  'Lönnrot kommentoi Kalevalan säkeitä 7−8: "halki yöt ja päivät taukoomatta" (Lna 121).'],
  'Yhytysten':['yhdytysten : yhtä mittaa, peräkkäin'],
  'saneli':['sanella : (tässä) loitsia. <a class="more" >Katso lisää</a>',
  'Vrt. sanella-verbin toinen merkitys: laususkella, laulella (Turunen 1979).'],
  'syntyjä':['synty : syntysana, loitsu, jossa selitetään jonkin alkuperää ja luomista'],
  'syviä':['syvä : syvämielinen (Lna 38). <a class="more" >Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säettä 10: "runoja, joissa kerrottiin maailman ja sen ainetten ilmaantumisesta" (Lna 121).'],
  'inhalla iällä':['inha ikä : paha aika (ajanjakso), aikakausi. <a class="more">Katso lisää</a>',
  'inha : paha, huono, ikävä <br><br> Ks. Lönnrotin selitys: inhalla = pahalla, rietalla (Lna 38). <br><br> ikä : aikakausi, ajanjakso'],
  'yhet urohot':['yksi uros : kuka tahansa mies. <a class="more">Katso lisää</a>',
  'yksi : kuka tahansa (Jussila 2009) <br><br> uros : mies, miehinen mies'],
  'Katovalla kannikalla':['katova kannikka : katoava loppuaika, ajan loppu. <a class="more">Katso lisää</a>',
  'katova : katoava <br><br> kannikka : loppu, loppuaika'],
  'viestit':['sanat, tiedot (Lna 38)'],
  'osoannasta':['osaanta : taito, tietäminen'],
  'suvehen':['suvi : (tässä) etelä. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi säkeitä 19−20: "yltä ympäritse, kaikille suunnille" (Lna 121).'],
  'Pohjolahan':['Pohjola : Louhen asuinpaikka Kalevalassa; Kalevalassa ja kansanrunoissa yleisesti esiintyvä' +
  ' paikannimi (Turunen 1979.). <a class="more">Katso lisää</a>',
  'Vrt. Pohja, jolla sama merkitys; pohjoinen ilmansuunta käsitettynä paikaksi, joka on pimeän, kylmän ja' +
  ' kaiken pahuuden koti; paikka, jonne kivut ja taudit manataan. Kalevalassa Pohjola on Väinölän eli Kalevalan' +
  ' vastakohta, kokonaisen heimon asuinsijana, jota Louhi eli Pohjolan' +
  ' emäntä hallitsee. Sampo taotaan Pohjolaan ja ryöstetään sieltä; Pohjola on myös esimerkiksi paikka, jonne päivänvalot' +
  ' kätketään. Sekä Kalevalassa että muinaisrunoissa Pohjolasta käytetään nimityksiä, jotka kuvaavat sen luonnetta, kuten' +
  ' Pimentola, Untamola, kylmä kylä, miesten syöjä sija, urosten upottaja, pahan valta. Vaikka Kalevalan Pohjola pohjautuu' +
  ' pääpiirteissään kansanrunoihin, eepoksen Pohjola on saanut Lönnrotin työn vaikutuksesta lisäpiirteitä. Esimerkiksi' +
  ' Kalevalan kolmannessa runossa Pohjola esiintyy Lönnrotin sovittamana. (Turunen 1979: 258−259.)'],
  'Joukahainen':['(tässä) Ainon nuori veli, Väinämöisen nuori, uhmakas vastustaja. Yleensä nuori Joukahainen, mutta myös' +
  ' nuori poika lappalainen (Kalevalan 3. runo). <a class="more">Katso lisää</a>',
  'Joukahainen : avoin, rohkea nuori; röyhkeä ja turhamainen lappalainen sankari (Lönnrot 1958). <br><br>' +
  'jouka : joukea, kookas (Krohn 1927). <br><br>' +
  'Joukahainen (Joukhanen) on alunperin tarkoittanut joutsenta (Kuusi 1963: 72). Yleensä runoissa Joukamoinen, vain Vienan' +
  ' Karjalan runoissa Joukahainen. Kansanrunoissa Joukahainen esiintyy Kilpalaulanta-runon lisäksi Laivaretki-runossa' +
  ' Väinämöisen ja Ilmarisen kanssa. (Turunen 1979: 75−76.)'],
  'lappalainen':['(tässä) Lapin kansaan kuuluva, Lapin asukas. <a class="more">Katso lisää</a>',
  'Vrt. nimityksen yleisempi merkitys Kalevalassa ja runotoisinnoissa suurten noitien mainesanana (Turunen 1979). <br><br>' +
  'Lönnrot kommentoi Kalevalan säettä 22: "sana lappalainen alkuansa merkitsi lappeessa eli vieressä, rajalla asuvaa." (Lna 121.)'],
  'kummia':['kumma : (tässä) ihmeellinen, outo. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: kummia = ihmeellisiä, oudonlaisia (Lna 38).'],
  'laeltavaksi':['ladella: (tässä)  lasketella lauluja (kuvaannollisest), puhella. <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys: ladeltavaksi = ladottavaksi, taidettavaksi (Lna 38).'],
  'pantavaksi':['panna : (tässä) laulaa, hyräillä.'],
  'isolta':['iso : isä'],
  'kaehti':['kadehtia : tuntea kateutta'],
  'laulajaksi':['laulaja : laulujen taitaja, runojen esittäjä, tietäjä'],
  'emonsa':['emo : äiti'],
  'valta-vanhempansa':['valtavanhempi : arvossa pidetty vanhempi (Turunen 1979). <a class="more">Katso lisää</a>.',
  'Ks. Lönnrotin selitys: valta-vanhempansa = varsin vanhempansa (Lna 38).'],
  'käkesi':['käetä : (tässä) uhata, luvata. <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys: käkesi = kiisti; lupasi (Lna 38). Vrt. myös Lönnrotin selitys: käkesi = instunda (Lna 122).'],
  'toivotteli':['toivotella : luvata. <a class="more">Katso lisää</a>',
  'Karjalainen merkitys verbille "toivottaa" (Turunen 1979). Vrt. Lönnrotin selitys: toivotella = lasua.' +
  ' Lausin, besvärja. (Lna 122.)'],
  'voitteloille':['voittelo : kamppailu, kilpailu. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säettä 40: "kilpalaulannolle." (Lna 121). Ks. myös Lönnrotin selitys: voitteloille = kiistaan' +
  ' (Lna 38).'],
  'epäsi':['evätä : kieltää'],
  'Wäinön':['Väinö : Väinämöinen'],
  'silma':['sie : sinä (sinua)'],
  'lausitahan':['lausia : (tässä) manata'],
  'vitihin':['viti : vastasatanut, tuore lumi. <a class="more">Katso lisää</a>','Ks. Lönnrotin selitys: vitihin = nuoreen lumeen'],
  'Kourin':['koura : käsi, kämmen (käsin)'],
  'tieto':['(tässä) loitsun tunteminen, maagisen sanan hallitseminen'],
  'sitäi':['sitäkin'],
  'tasalle panna':['panna tasalle : olla jonkun veroinen (Jussila 2009)'],
  'verroille vetäitä':['vetää verroille : olla jonkun veroinen (Jussila 2009)'],
  'Puksut':['housut. <a class="more">Katso lisää</a>','Ks. Lönnrotin selitys: puksut = pöksyt; housut (Lna 38).'],
  'Kiviriipan': ['kiviriippa : ankkurikivi, paino, jota onkijat käyttivät ankkurina. <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys: kiviriipan = kivitakan, painon (Lna 38).'],
  'Kiviharkon':['kiviharkko : kivilohkare. <a class="more">Katso lisää</a>','Ks. Lönnrotin selitys: kiviharkon = kivisen lohkareen (Lna 38)'],
  'Kivikintahat':['kivikinnas : kivinen käsine'],
  'paatisen kypärän':['paatinen kypärä : kivinen suojapäähine'],
  'Säkeniä':['säen : kipinä. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säkeitä 69-70: "Niin tulinen, että oikein säkenöitsi" (Lna 121)'],
  'Korjan':['korja : ajoreki, itäsuomalainen laitareki. <a class="more">Katso lisää</a>','Ks. Lönnrotin selitys: korjan = matka-reen (Lna 38).'],
  'Kohennaikse korjahansa':['kohennaikse korjahansa : asettuu rekeensä. <a class="more">Katso lisää</a>',
  'kohentaa : refl. asettua, sovittautua; vrt. kohoeli (asettui)'],
  'virkkua':['virkku : (tässä) sukkela, vireäliikkeinen hevonen'],
  'vitsalla':['vitsa : (tässä) ruoskana käytetty koivun, lepän, pajun tai jonkin muun puun vesa'],
  'helmi-ruoskasella':['helmiruoska : helmisiimainen ruoska; vrt. helmiletku, helminen, helmisvyö, helmivyö, kariperä' +
  ' <a class="more">Katso lisää</a>','Lönnrot kommentoi Kalevalan säettä 76: "varsi oli helmillä koristeltu" (Lna 121).'],
  'vieremähän':['vierrä : (tässä) kulkea'],
  'helettämähän':['helettää : juosta kevyesti. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: helettämähän = juoksemaan keveästi (Lna 38)'],
  'suhuttelevi':['suhutella : ajaa niin, että kuuluu suhinaa (Jussila 2009, Lönnrot 1958)'],
  'Päätyi':['päätyä : (tässä) saapua, tulla'],
  'mitteliä':['mittelijä : (tässä) kulkija. <a class="more">Katso lisää</a>','Vrt. mitteliä : mittaaja (Lönnrot 1958)'],
  'vastatusten':['vastaan, vastakkain'],
  'aisa':['reen vetopuu'],
  'Rahe':['rahje : länkien vetohihna, joka yhdistää aisan ja luokin'],
  'takistui':['takistua : tarttua kiinni, vrt. takeltua'],
  'Länget':['hevosvaljaiden kaulaosa, joka koostuu kahdesta kaarevasta toisiinsa kiinnitetystä puusta'],
  'Vemmel':['vemmel : hevosvaljaiden luokki (luokka), niskan yli kulkeva kaari, jolla länget kiinnitetään aisoihin.'],
  'usisi':['usista : kihistä, suhista, kiehua sihisten. <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys: usisi = kihisi ulos (Lna 38). Ks. myös Lönnrotin kommentti Kalevalan säkeisiin' +
  ' 99-100: "Tarttuivat niin kovasti toisiinsa, että vesi vääntyi eli pursui puusta ulos" (Lna 121)'],
  'Kuit':['ku : (tässä) mitä'],
  'varattomasti':['varomattomasti'],
  'länkä-puiset':['länkäpuinen : vääräpuinen, kiveräpuinen'],
  'Vesa-puiset':['vesapuinen : nuoresta puusta valmistettu'],
  'pilastehiksi':['pilaste : pirstale, sirpale. <a class="more">Katso lisää</a>','Ks. Lönnrotin selitys: pilastehiksi = sirpaleiksi (Lna 38)'],
  'Rämäksi':['rämä : rikkinäinen. <a class="more">Katso lisää</a>','Ks. Lönnrotin selitys: rämäksi = rikki, pieniksi pirstaleiksi'],
  'retukan':['retukka :  alkeellinen reki. <a class="more">Katso lisää</a>','Ks. KKSK: yksikaplainen (parireen taka)reki; renttuut; purilaat.'],
  'Kuta':['mitä'],
  'joukkioa':['joukkio : väki, joukko'],
  'nimittelihe':['nimittellä : refl. sanoa nimensä (sanoi nimensä, esittäytyi)'],
  'Veäite':['vetäitä : väistyä, vetäytyä (väisty, vetäydy)'],
  'Vähä':['vähän'],
  'virkkoi':['virkkoa : puhua, sanoa, kertoa'],
  'Muistannalta':['muistanta : muisti, muistaminen'],
  'Saakamme':['saada : (tässä) lähteä, käydä, ryhtyä. <a class="more">Katso lisää</a>','Ks. Lönnrotin selitys: saakamme = lähtekäämme (Lna 38).'],
  'sanelemahan':['sanella : (tässä) laulella'],
  'oppimahan':['oppia : (tässä) koettaa, tutkia'],
  'taitajaksi':['taitaja :  runojen ja laulujen osaaja, runonlaulaja, tietäjä'],
  'kaikitenki':['joka tapauksessa'],
  'selvällehen':['selvälleen : selvästi'],
  'tarkoillehen':['tarkoilleen : tarkasti. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säkeitä 150-182: "J. ylenkatseellisesti ensin laskee mitättömiä' +
  ' loruja ikään kuin sanoaksensa Wselle, että neki jo olivat hänen tietonsa veroiset" (Lna 121).'],
  'Reppänä':['reppänä : sisäänlämpiävän tuvan tai saunan savuaukko, lakeinen. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: reppänä = savureikä katossa (Lna 38).'],
  'lakea':['laki : (tässä) huoneen välikatto, sisäkatto, laipio'],
  'lieska':['lieska : uuninsuun yläpuoli; uuninsuusta tuleva tulenliekki. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: lieska = liesi; tulisia. liekki. (Lna 38.)'],
  'kiukoata':['kiuas : pirtin, riihen tai saunan tulipesä (kiuasta)'],
  'viehkuroia':['viehkuroida : (tässä) pyöriä, kieriskellä'],
  'Kuola-suu':['kuolasuu : vaahtosuinen'],
  'kyrmyniska':['köyryniska, kaarevaniskainen'],
  'rapsehtivi':['rapsehtia : liikkua ääntä (rapinaa) aiheuttaen, rapista'],
  'Arvoan':['arvata : (tässä) tietää, tuntea'],
  'emähevolla':['emähepo : tammahevonen, naaraspuolinen hevonen'],
  'Takalappi':['Lapin peräosat, Lapin peräosien ihmiset (Jussila 2009)'],
  'tarvahalla':['tarvas : hirvieläin. <a class="more">Katso lisää</a>',
  'Alkumerkitys "alkuhärkä" (Turunen 1979). Vrt. Lönnrotin selitys: tarvas = härkä? (Lna 38). Ks. myös Lönnrotin'
  + ' selitys: tarvas = råbock (Lna 122) sekä Lönnrotin kommentti säkeeseen 170: "tarvas = metsäkauris?" (Lna 121).'],
  'Pisan mäellä':['Pisan mäki : Pisanmäki, tarkoittanee Nilsiän pitäjässä sijaitsevaa Pisavuorta (Turunen 1979). ' +
  ' <a class="more">Katso lisää</a>','pisa : hiisi <br><br>' + '(Turunen 1979)'],
  'Hornan kalliolla':['Hornan kallio :  samanniminen vuori sijaitsee Suuren Suvasveden rannalla Soisalossa (Turunen 1979).'
  + '<a class="more">Katso lisää</a>','horna : pahojen henkien asunpaikka, helvetti, paha henki, hiisi <br><br>' +
  '(Turunen 1979)'],
  'kovoa':['kova : (tässä) voimakas, vuolasvirtainen'],
  'ilman kannen':['ilman kansi : taivaankansi. <a class="more">Katso lisää</a>','ilma: (tässä) taivas'],
  'Hälläpyörä':['Nimi perustuu todennäköisesti eräissä kansanrunoissa esiintyvään nimeen Hällänkoski'
  + ' (Turunen 1979). Satakunnassa Huittisissa sijaitsee Hälläköski, jota on kutsuttu myös Hälläpyöräksi'
  + ' (Genetz 1895: 159; Turunen 1979).'],
  'Kaatrakoski':['Pohjois-Karjalassa sijaitsevan nykyisen Pankakosken aiempi nimi (Turunen 1979)'],
  'Wuoksen':['Vuoksi : joki, joka laskee Saimaasta Laatokkaan'],
  'Imatran':['Imatra : Vuoksen koski'],
  'naisen':['nainen : (tässä) vaimo, vaimoihminen'],
  'naisekkahan':['naisekas : (miehestä) nainut, naimisissa oleva'],
  'viherän':['viherä : vihreä; sanan arkaainen muoto, joka esiintyy vain runokielessä (Turunen 1979).'
  + ' <a class="more">Katso lisää</a>','Vrt. sanan toinen merkitys: viherä = vihelä (Lönnrot 1958: 958).'],
  'Kiiskisen':['kiiskinen : kiiski'],
  'raukeaksi':['raukea : hauras, pehmeä, taipuva'],
  'muikeaksi':['muikea : hapan, kirpeä. <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys: muikeaksi = katkeraksi (Lna 38). Vrt. myös Lönnrotin selitys: muikea = sur, bitter (Lna 122).'],
  'Varin':['vari : kuuma'],
  'katsehista':['katse : lääke, johon on taiottu tehokkaaksi loitsusanoilla, loitsuilla valmistettu lääke'
  + ' <a class="more">Katso lisää</a>','Ks. Lönnrotin selitys: katsehista = luetuista eli siunatuista lääkkeistä'
  + ' (rohdoista) (Lna 38).'],
  'loitsioista':['loitsija : tietäjä, jonka voima perustui loitsimiseen'],
  'vetosen':['vetonen : vesi. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säettä 203: "Antero Wipunen laulaa veden ilmasta eronneen" (Lna 121).'],
  'taivosesta':['taivonen : taivas'],
  'kanta':['perä, alku, alkuperä'],
  'Hongan juuri huonehia':['Hongan juureen rakennettiin ensimmäiset kodat (Niemi 1910: 10).'],
  'Paatonen':['litteä, laakea kivi; pieni kallio. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: paatonen = kiven liuska (Lna 38).'],
  'pata-rania':['patarani : huono pata'],
  'kolkot':['kolkko :  kulma, syvänne, kuoppa. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: kolkot = epätasaisuudet; kuopat (Lna 38)'],
  'Syän-veet':['sydänvesi : syvä selkävesi'],
  'laskemassa':['laskea : (tässä) asettaa paikoilleen. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säettä 222: "laittamassa t. asettamassa paikkaansa" (Lna 121).'],
  'mylleröittämässä':['mylleröittää : liikuttaa, vyöryttää. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säkeitä 223−224: "korkeat vuoret maan päälle kohottamassa" (Lna 121).'],
  'Louhet':['louhi : kallioinen ja kivikkoinen paikka, kallio. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: Louhet = kivet; kalliot (Lna 38).'],
  'saataessa':['saada : (tässä) saada aikaan, tehdä. <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys: saataessa = rakennettaissa (Lna 38).'],
  'suettaessa':['suettaa : (tässä) muodostaa, rakentaa'],
  'Ilman pieltä':['ilman pieli : mytologisten kansanuskomusten mukaan taivasta kannatteleva patsas (Turunen 1979)'],
  'pistämässä':['pistää : (tässä) asettaa paikoilleen (Jussila 2009)'],
  'Kuuhutta':['kuuhut : kuu'],
  'ojentamassa':['ojentaa : suoristaa'],
  'tähittämässä':['tähdittää : varustaa tähdillä'],
  'lavea-suinen':['laveasuinen : kerskaileva'],
  'miekan mittelöhön':['miekan mittelö : taistelu (Turunen 1979)'],
  'kalvan katselohon':['kalvan katselo : miekan tarkastus, erityisesti sen pituuden mittaaminen ennen'
  +' kaksintaisteluun ryhtymistä (Turunen 1979). <a class="more">Katso lisää</a>',
  'kalpa : miekka <br><br>' + 'katselo : mittaaminen, vertailu (Jussila 2009)'],
  'Tuuriasi':['tuura : rautainen jäänsärkemisväline; (pilapuheessa) keihäs (Turunen 1979)'],
  'katala':['kelvoton, viheliäinen (Turunen 1979). <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys: katala = vaivainen (Lna 38).'],
  'Murti':['murtaa : (suuttumuksen ilmauksessa) kääntää, vääntää (Turunen 1979)'],
  'mustoa':['musto : musta'],
  'haventa':['haven : (suuttumuksen ilmauksessa) parta, viikset; hiukset. <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys: haventa = hivusta, hiusta (Lna 38).'],
  'Ala-kärsäksi':['alakärsä : (tässä) kärsäänsä alhaalla pitävä; sika. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: alakärsäksi = kärsän maata vasten (Lna 38). Vrt. alakärsä Kalevalassa suden'
  + ' kiertosanana (38:244).'],
  'sikäli':['(tässä) sitä tietä, sen kautta'],
  'täkäli':['tätä tietä, tämän kautta (Lna 38)'],
  'Läävän':['läävä : navetta'],
  'nutistan':['nutistaa : painaa, työntää kokoon. <a class="more">Katso lisää</a>',
  'Lönnrotin sovite toisintojen sanojen nuhtaa ja noutaa tilalle (Turunen 1979).'],
  'loihe':['luoda : refl. ruveta, lyöttäytyä (rupesi, lyöttäytyi), vrt. luome, loime.'],
  'haoiksi':['hako : maassa vettynyt tai vedessä oleva puunrunko'],
  'helmiletkun':['helmiletku : helmisiimainen ruoska; vrt. helmiruoska, helminen, helmisvyö, helmivyö, kariperä'],
  'laukkipään':['laukkipää : hevonen, jolla on valkoinen täplä otsassa, piirtopää. <a class="more">Katso lisää</a>',
  'laukki : valkoinen juova hevosen tai muun eläimen otsassa'],
  'kirjavarren':['kirjavarsi : varreltaan kirjavaksi koristelu'],
  'sulitut':['sulittu : linnunsulilla varustettu. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säettä 315: "nuolet olivat varustetut 3:lla sulkarivillä pitkin'
  +' pituuttaan, jotta paremmin kannatettaisi ja kävisi etäämmä" (Lna 121).'],
  'Havukoiksi':['havukka : haukka'],
  'koukkuleuan':['koukkuleuka : käyräleukainen, väkäleukainen'],
  'kokaksi':['kokka : ylöspäin ulkoneva osa; pilvenlonka'],
  'Umpilammin':['umpilampi : lampi, josta ei lähde laskujokea tai -puroa'],
  'haljakan':['haljakka : verka, verasta tehty takki. <a class="more">Katso lisää</a>',
  'Vrt. haljakka myös väristä: vaalea (Lönnrot 1958; Jussila 2009).'],
  'ussakan':['ussakka : pitkä, villainen, kudottu turkinvyö (Turunen 1979). <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: ussakan = vyö (Lna 38).'],
  'utuisen':['utuinen : (tässä) hieno, pehmeä'],
  'suonivöistä':['suonivyö : vyötärö, vyötärön seutu'],
  'nivuslihoista':['nivusliha : kupeet, vyötärö'],
  'Jopa':['jopa − jotta : ja − samoin, sekä − että. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säkeitä 332-336: "Tähän asti matkassa oli hyvin käynyt, nyt vasta tuli tosi eteen" (Lna 121).'],
  'Jaksoitteli':['jaksoitella : irrotella'],
  'Läylemmäksi':['läyli : tukala, vaikea (tukalammaksi). <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys:  läyliä = svår, besvärlig (Lna 122).'],
  'Pyörrytä':['pyörryttää : laulaa takaisin, palauttaa entiselleen. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säkeitä 347-350: "Loihtujensa vaikutuksen taisi loihtija itse purkaa, kun' +
  ' peräytti sanansa" (Lna 121).'],
  'pälkähästä':['päläs : (tässä) ahdinko, tukala tilanne'],
  'makson':['makso : hinta, palkkio'],
  'kaarta':['kaari : jousi'],
  'riveä':['riveä : (tässä) ripeä, sukkela. <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys: jalo; ripsas (Lna 38).'],
  'seisoteltu':['seisotella : seisottaa'],
  'vaarnanen':['vaarnanen : puunaula, tappi. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: vaarnanen = naula seinällä (Lna 38). Ks. myös Lönnrotin kommentti Kalevalan' +
  ' säkeisiin 369-370: "sijoiteltu joka seinään, varottu joka naulaan" (Lna 121)' +
  ' Puunauloja pidettiin tuvan seinissä ja orsissa, ja niihin ripustettiin esimerkiksi vaatteita, aseita,' +
  ' työkaluja ja metsästysvälineitä (Turunen 1979: 363).'],
  'varottu':['varoa : (tässä) varustaa (Lna 38)'],
  'purtta':['pursi : vene, laiva'],
  'kiistassa':['kiista : kilpa, kilpailu. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säkeitä 378-379: "hyvätapaisten veneitten laatu" (Lna 121).'],
  'tempaeltu':['tempaella : vetäistä, kiskaista'],
  'lahtema':['lahden poukama, vrt. lahelma'],
  'vastasään':['vastasää : vastatuuli'],
  'jalompi':['jalo : (tässä) ripeä, nopea'],
  'raisu rahkehille':['rivakka vetämään (Niemi 1910: 12). <a class="more">Katso lisää</a>',
  'raisu : rivakka, raju, väkevä <br><br> Ks. Lönnrotin selitys: raisu = rivakka (Lna 38).'],
  'sukkajalkojasi':['sukkajalka : hevonen, jolla on vuohisten kohdalla valkoista, sukkajalkainen'],
  'soimi':['hevosen syöttöallas, seimi'],
  'solmieltu':['solmiella : solmia'],
  'tanhua':['talli, karjakatos, jossa hevosia entisaikaan pidettiin (Turunen 1979), vrt. kuja. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: tanhua = talli; hevoshuone (Lna 38).'],
  'taluttu':['talua : (tässä) taluttaa'],
  'kypärin':['kypäri : korkea päähine, lakki, vrt. kypärä'],
  'huovan':['huopa : huopahattu'],
  'soasta':['sota : aseellinen välienselvittely, jota entisaikaan käytiin myös heimojen, sukujen ja yksityisten' +
  ' ihmisten kesken (Turunen 1979) (sodasta)'],
  'ahtaeltu':['ahtaella : ahtaa, sulloa'],
  'vakkanen':['vakka, arvoesineiden kannellinen kuljetusastia, jonka laita tehtiin soikiomaiseksi tai pyöreäksi' +
  ' taivutetusta ohuesta haapalaudasta (Turunen 1979)'],
  'kuun ikuiset':['kuunikuinen : ikivanha, kuun ikäinen (Jussila 2009)'],
  'Päivän polviset':['päivänpolvinen : ikivanha, auringon ikäinen (Jussila 2009). <a class="more">Katso lisää</a>',
  'polvinen : ikäinen'],
  'aumani':['auma : viljalyhteistä tehty pyöreäpohjainen varastokeko'],
  'hieta-peltoseni':['hietapeltonen : hiekkaperäinen pelto (Jussila 2009)'],
  'Herjä':['raukka, kurja, paha (soimaussana)'],
  'armahammat':['armas : (tässä) mieluinen, suloinen. <a class="more">Katso lisää</a>',
  'Vrt. armas ihmisestä : rakas, kallis, ihana. Vrt. myös rahan armas: karhun mielittelysanoja' +
  ' (Turunen 1979; Jussila 2009), ks. lisää Nirvi 1982.'],
  'leuan':['leukaa myöten (Lna 38)'],
  'luottehesi':['luote : loitsu, taianomainen mahtisana'],
  'Aino':['Joukahaisen nuori sisar. <a class="more">Katso lisää</a>',
  'Idean Aino-nimestä Lönnrot sai vienalaisista toisinnoista, joissa sanottiin' +
  ' "annan ainoan sisareni", adjektiivista "ainoa" tuli aino (Kuusi 1963: 220; Kaukonen 1987: 181).' +
  ' Ks. Vienassa Hirttäytyneen neidon teksteissä Anni-tytön kertona on: aino neiti (SKVR I1 208, 213,' +
  ' 234, 236). Myös Lönnrotilla, joskus myös "aini tyttö". Myöhemmillä kerääjillä tarkemmin: ainuo' +
  ' neiti. Ks. runossa SKVR I1 234: "anni sikko, aino neiti". Ks. lisää Aino-runosta ja tulkinnoista' +
  ' Tarkiainen 1911; Järvinen 1993; Piela 1999; Kupiainen 2004; Hämäläinen 2012, 2014.'],
  'Lainoan':['lainata (lainaan)'],
  'Hulikkojen':['hulikka : puuastia, pytty. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: hulikkojen = pyttyjen (Lna 38).'],
  'Vaippojen':['vaippa : hartioille vartalon suojaksi kiedottu asuste, jota käyttivät pääasiassa naiset' +
  ' (Turunen 1979); peitto'],
  'viruttajaksi':['viruttaja : huuhtoja'],
  'Mesileivän':['mesileipä : hunajaleipä, hunajakakku; maustettu leipä tai kakku (Lönnrot 1958); vrt.' +
  ' sokerileipä (kauruska). <a class="more">Katso lisää</a>',
  'Karjalassa nimitystä on käytetty pitkään siirapilla maustetusta leivästä sekä sokerileivästä' +
  '(kauruska), jota kaupunkien ja kirkonkylien kauppiaat antoivat ennen kaupanpäälliseksi. Kalevalaisen' +
  ' sanonnan taustalla ovat kuitenkin todennäköisesti vanhemmat mesileipä- ja mesiruokatavat. Ortodoksisen' +
  ' kirkon piirissä vainajien muistojuhlissa käytettiin venäläisten ja karjalaisten tuntemaa hunajaruokaa,' +
  ' joka valmistettiin ryyneistä, keitettiin hunajassa ja höystettiin myöhempinä aikoina rusinoilla.' +
  ' (Turunen 1979: 207.)'],
  'ilo-kivelle':['ilokivi : kivi, jolla Väinämöinen istui soittaessaan ja laulaessaan. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säkeitä 471−472: "Wsen ilo ja laulu = into lienee kiveen ja paateenki levinnyt;' +
  ' muuten ilokivi ja laulupaasi eivät merkinne muuta kun ilonteentä- ja laulunpidäntä-paikkaa" (Lna 121).'],
  'Perin':['takaisin, takaperin'],
  'Reutoihe':['reutoa : refl. heittäytyä (heittäytyi). <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: reutoihe = nakkasi, heitti itsensä (Lna 38).'],
  'karittelevi':['karitella : ajaa rämistellen, kolistellen (Lönnrot 1958); ajaa niin että kuuluu kariseva' +
  ' ääni (Jussila 2009)'],
  'hyypynyisin':['hyypynyinen : kankea, jäykkä. <a class="more">Katso lisää</a>',
  'Johdettu verbistä hyypyä ~ hyytyä (= jähmettyä, kangistua, kohmettua) (Turunen 1979: 58; vrt. Ahlqvist 1872). <br><br>'
  + 'Vrt. Lönnrotin selitys hyypynyisen = kankein; paksuin (Lna 38) sekä hyypynyisen = stelnad (Lna 122).' +
  ' Ks. myös Lönnrotin kommentti Kalevalan säkeeseen 503: "huulet olivat jäykkiä, kankeata, ei elävän laisia,' +
  ' nauravia" (Lna 121).'],
  'Nenän suulle langennuisen':['venyneellä, pitkällä nenällä (Lna 38). <a class="more">Katso lisää</a>',
  'langennuinen : pudonnut, langennut; johtimella -inen muodostettu aktiivin toinen partisiippi verbistä' +
  ' langeta (Turunen 1979).'],
  'vaaitella':['vaaditella : tiedustella. <a class="more">Katso lisää</a>',
  'Vrt. Lönnrotin selitys: vaaitella = tahtoa, kysyä (Lna 38).'],
  'nureksit':['nureksia : valittaa, itkeä'],
  'maammo':['äiti'],
  'sopen kululle':['sopenkulu : nurkassa aikaansa kuluttava vanhus. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: sopen kululle = nurkissa asujalle (Lna 38).'],
  'Hykersi':['hykertää : hieroa yhteen'],
  'Puhki':['läpi'],
  'polveni':['polvi : (tässä) elinaika, ikä. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: polveni = ikäni (Lna 38).'],
  'Lautsoille':['lautsa : seinään kiinnitetty penkki, lautapenkki, lavitsa. <a class="more">Katso lisää</a>',
  'Ks. Lönnrotin selitys: lautsoille = lavitsoille; penkeille (Lna 38).'],
  'lavertajaksi':['lavertaja : puhuja, puhelija'],
  'kassan':['kassa : hiuspalmikko, tukka. <a class="more">Katso lisää</a>',
  'Naimattomat tytöt pitivät hiuksensa palmikolla, mutta heidän mentyään naimisiin hiukset leikattiin' +
  ' ja päät hunnutettiin (Turunen 1979). <br><br> Lönnrot kommentoi Kalevalan säkeitä' +
  ' 552-555: "jos pitäisi kaunis tukkani näin nuorella iällä naisten lakilla peitettämän" (Lna 121).'],
  'Veikon':['veikko : veli'],
  'veisto-tanterille':['veistotanner : veistopaikka'],
  'huima':['mieletön, hullu. <a class="more">Katso lisää</a>',
  'Vrt. sanan alkumerkitys ’hurja, raju, villi’ (Turunen 1979). Vrt. myös Lönnrotin' +
  ' selitys: huima = obändig (Lna 122).'],
  'viertokankahilla':['viertokangas : kaskettu metsämaa, kaskimaa']
};
