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
  ' Ks. lisää Väinämöisestä: Siikala 1999, 2012.<br><br>'],
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
  'Lönnrot kommentoi Kalevalan säettä 10: "runoja, joissa kerrottaan maailman ja sen ainetten ilmaantumisesta" (Lna 121).'],
  'inhalla iällä':['inha ikä : paha aika (ajanjakso), aikakausi. <a class="more">Katso lisää</a>',
  'inha : paha, huono, ikävä <br><br> Ks. Lönnrotin selitys: inhalla = pahalla, rietalla (Lna 38). <br><br> ikä : aikakausi, ajanjakso'],
  'yhet urohot':['yksi uros : kuka tahansa mies. <a class="more">Katso lisää</a>',
  'yksi : kuka tahansa (Jussila 2009: 508) <br><br> uros : mies, miehinen mies'],
  'Katovalla kannikalla':['katova kannikka : katoava loppuaika, ajan loppu. <a class="more">Katso lisää</a>',
  'katova : katoava <br><br> kannikka : loppu, loppuaika'],
  'viestit':['sanat, tiedot (Lna 38)'],
  'osoannasta':['osaanta : taito, tietäminen'],
  'suvehen':['suvi : (tässä) etelä. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi säkeitä 19−20: "yltä ympäritse, kaikille suunnille" (Lna 121).'],
  'Pohjolahan':['Pohjola : Kalevalassa ja kansanrunoissa yleisesti esiintyvä paikannimi (vrt. Pohja, jolla sama merkitys);' +
  ' pohjoinen ilmansuunta käsitettynä paikaksi, joka on pimeän, kylmän ja kaiken pahuuden koti; paikka, jonne kivut ja' +
  ' taudit manataan. (Turunen 1979.). <a class="more">Katso lisää</a>',
  'Kalevalassa Pohjola on Väinölän eli Kalevalan vastakohta, kokonaisen heimon asuinsijana, jota Louhi eli Pohjolan' +
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
  'Väinön':['Väinö : Väinämöinen'],
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
  'Säkeniä':['säen : kipinä'],
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
  'Vemmel':['vemmel : hevosvaljaiden luokki (luokka), niskan yli kulkeva kaari, jolla länget kiinnitetään aisoihin. <a class="more">Katso lisää</a>',
  'Lönnrot kommentoi Kalevalan säkeitä 99−100: "tarttuivat niin kovasti toisiinsa, että vesi vääntyi eli pursui' +
  ' puusta ulos" (Lna 121).'],
  'usisi':['usista : kihistä, suhista, kiehua sihisten. <a class="more">Katso lisää</a>','Vrt. Lönnrotin selitys: usisi = kihisi ulos (Lna 38)']
};
