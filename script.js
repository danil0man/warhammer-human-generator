// DATA
const fNames = 'Abbie-Amalyn-Camilla-Edith-Emmanuel-Abighild-Anhilda-Carla-Edyth-Emerlinde-Abigund-Annabella-Carlinda-Edythe-Emerlyn-Abigunda-Anna-Carlotta-Eleanor-Erica-Ada-Anthea-Cilicia-Elinor-Ermina-Adel-Arabella-Cilie-Elisinda-Erminlind-Adelind-Aver-Clora-Elsina-Ermintrude-Adeline-Bechilda-Clothilda-Ella-Esmaralda-Adelyn-Bella-Connie-Ellene-Estelle-Adelle-Bellane-Constance-Ellinde-Etheldreda-Agathe-Benedicta-Constanza-Eloise-Ethelind-Agnete-Berlinda-Cordelia-Elsa-Ethelreda-Aldreda-Berlyn-Dema-Elsbeth-Fay-Alfreda-Bertha-Demona-Elspeth-Frieda-Alicia-Berthilda-Desdemona-Elyn-Friedhilda-Allane-Bess-Dorthilda-Emagunda-Friedrun-Althea-Beth-Drachena-Emelia-Friedrica-Amalie-Broncea-Drachilda-Emme-Amalinde-Brunhilda-Edhilda-Emmalyn-Gabby-Heidi-Johanna-Leticia-Maglyn-Gabriele-Heidrw1-Josie-Letty-Magunda-Galina-Helga-Karin-Lena-Magreta-Gena-Herlinde-Katarine-Lenora-Maida-Genevieve-Herwig-Katheryn-Lisa-Marien-Genoveva-Hilda-Katharina-Lisbeth-Marietta-Gerberga-Hildegart-Katerine-Lizzie-Margaret-Gerda-Hildegund-Keterlind-Lorinda-Marget-Gerlinde-Honoria-Zeterlyn-Lorna-Margreta-Gertie-Ida-Kitty-Lucinda-Marline-Gertrud-Ingrid-Kristen-Lucretia-Marlyn-Greta-Ingrun-Kristena-Lucie-Mathilda-Gretchen-Ingrund-Kristyn-Ludmilla-Maude-Grizelda-Irmella-Kirsten-Mabel-May-Grunhilda-Irmine-Kirstyn-Madge-Meg-Gudrun-Isabella-Lavina-Magdalyn-Melicent-Gudryn-Isadora-Lavinia-Maggie-Miranda-Hanna-Isolde-Leanor-Maghilda-Moll-Hedwig-Jocelin-Leanora-Maglind-Nathilda-Ottilyn-Rosalia-Sigrid-Verena-NelJie-Perdita-Rosal-Sigunda-Wilfrieda-Nora-Pergale-Rosalinde-SolJa-Wilhelmina-Olga-Pergunda-Rosamunde-Styrine-Winifred-Ophelia-Petronella-Rosanne-Talirna-Wolfhilde-Osterhild-Philomelia-Rose-Theodora-Zemelda-Ostelle-Reikhilda-Roz-Therese-Zena-Ostia-Renata-Rozhilda-Tilea-Ottagunda-Rosabel-Salina-Ursula-Ottaline-Rosabella-Saltza-Ulrica-Ottilda-Rosale-Sigismunda-Valeria';

const mNames = 'Abelhard-Abelhelm-Admund-Adred-Adric-Agis-Alaric-Alberic-Albrecht-Aldebrand-Aldred-Aldric-Alfreid-Altmar-Alric-Andre-Andred-Gawin-Gerber-Gerharr-Gerlach-Gernar-Gerolf-Gilbrecht-Gisbert-Gielbrecht-Gismar-Goran-Gosbert-Goswin-Gotfried-Gothard-Gorrolf-Garwin-Madred-Magnus-Mandred-Manfred-Mathias-Max-Maximillian-Meiner-Meinhart-Meinolf-Mekel-Merkel-Nat-Nathandar-Nicodemus-Odamar-Odric-Andric-Anshelm-Anton-Arne-Arnulf-Axel-Axelbrand-Baldred-Baldric-Baldwin-Balthasar-Barnabas-Bart-Bartomir-Barto-Berno-Berrold-Gregor-Greimold-Grimwold-Griswold-Guido-Gundolf-Gundred-Gunnar-Gunter-Gunther-Gustaf-Hadred-Hagar-Hagen-Haldred-Halman-Odwin-Olbrecht-Oldred-Oldric-Ortlieb-Ortolf-Orwin-Osric-Oswin-Otfried-Otto-Orwin-Paulus-Prospero-Ragen-Ralf-Bertolf-Oietfried-Boris-Dieter-Bruno-Oietmar-Burgo-Dietmund-Calvin-Dietrich-Casimir-Dirk-Caspar-Donat-Cedred-Durnhelm-Conrad-Eber-Corvin-Eckel-Dagmar-Eckhart-Dankmar-Edgar-Dankred-Edmund-Dekmar-Edwin-Dedef-Ehrhart-Diebold-Diel-Ehrwig-Hamlyn-Hans-Harbrand-Harman-Hartmann-Haug-Heidric-Heimar-Heinman-Heinrich-Heinz-Helmut-Henlyn-Hermann-Herwin-Hieronymus-Hildebarr-Hildebrand-Hildemar-Hildemund-Hildred-Hildric-Horst-Hugo-Igor-Ingwald-Jander-Jekil-Jodokus-Johann-Jonas-Jorg-Jorn-Rambrecht-Rufus-Randulf-Ruprecht-Ranulf-Sebastian-Ranald-Semund-Reikhard-Rein-Sieger-Reiner-Siegfried-Reinhard-Siegmund-Reinolt-Sigismund-Reuban-Sigric-Rigo-Steffan-Roderic-Tankred-Rolf-Theoderic-Ruben-Tilmann-Rudel-Tomas-Rudgar-Trubald-Rudolf-Truberc-Eldred-Elmeric-Emil-Engel-Engelbert-Engelbrecht-Engelhart-Eodred-Eomund-Erdman-Erdred-Erkenbrand-Erasmus-Erich-Erman-Ernst-Erwin-Josef-Jost-Jurgen-Karl-Kaspar-Klaus-Kleber-Konrad-Konradin-Kurt-Lamprecht-Lanfried-Lanric-Lan-Leo-Leopold-Levin-Udo-Ull-Ulfred-Ulfman-Ulman-Uta-Valdred-Valdric-Vari-Viggo-Viktor-Vilmar-Volker-Volkhard-Volkrad-Volkin-Voltz-Eugen-Eustasius-Ewald-Fabian-Faustus-Felix-Ferdinand-Fleugweiner-Fasten-Franz-Frediger-Fredric-Friebald-Friedrich-Liebert-Liebrecht-Liebwin-Lienhart-Linus-Ladwig-Lothar-Lucius-Ludwig-Luitpold-Lukas-Lupold-Lupus-Luther-Lutorf-Walbrecht-Waldor-Waldred-Walther-Warmund-Werner-Wilbert-Wilfried-Wilhelm-Woldred-Wolfram-Wolfhart-Wolfgang-Wulf-Xavier';

const lNames = 'Adelhof-Delfholr-Godrgraf-Kuhn-Neumann-Schwalb-Albrecht-Drakenhof-Grunenwald-Kummel-Niederlitz-Steinerf-Allenstag-Drauwulf-Guth-Konig-Nuhr-Altmann-Durrbein-Haintz-Konigsamen-Oberholtzer-Teuber-Atzwig-Ehrhard-Herz-Lang-Ohmen-Tolzen-Bacher-Eisenhauer-Herzog-La11kdorf-Otzlowe-Trachsel-Baer-Eschlimann-Hirtzel-Liess-Reichert-Weber-Baumann-Falkenheim-Hoch-Lebengut-Reifsneider-Wechsler-Becker-Fehr-Hoefer-Lurzen-Riese-Wirtz-Behn-Fiegler-Hofscert-Machholt-Rohrig-Widmann-Betz-Fleischer-Jaeger-Meusmann-Reiss-Widmer-Beyer-Frohlich-Jochutz-Meyer-Schaffer-Veit-Bischof-Frueh-Jutzenbach-Mohr-Schaumer-Vogt-Boehm-Fuchs-Kalb-Muller-Scherer-Vogel-Breirenbach-Gaffwig-Kaltenbach-Nachtrnann-Schultz-Zumwald-Breuer-Gaertner-Kraemer-Naubhof-Schleiermacher-Dahmbach-Gebauer-Krebs-Nerzhoch-Schreiber';

const careers = ['Apothecary', 'Engineer', 'Lawyer', 'Nun', 'Nun', 'Physician', 'Priest','Priest','Priest','Priest','Priest', 'Scholar','Scholar', 'Wizard', 'Agitator', 'Artisan', 'Artisan', 'Beggar','Beggar', 'Investigator', 'Merchant', 'Rat Catcher', 'Rat Catcher', 'Townsman','Townsman','Townsman', 'Watchman', 'Advisor', 'Artist', 'Duellist', 'Envoy', 'Noble', 'Servant','Servant','Servant', 'Spy', 'Warden', 'Bailiff', 'Hedge Witch', 'Herbalist', 'Hunter', 'Hunter', 'Miner', 'Mystic','Scout', 'Villager', 'Villager', 'Villager', 'Villager', 'Villager', 'Bounty Hunter', 'Coachman', 'Entertainer','Entertainer', 'Flagellant', 'Flagellant', 'Messenger', 'Pedlar', 'Road Warden', 'Witch Hunter', 'Boatman','Boatman', 'Huffer', 'Riverwarden','Riverwarden', 'Riverwoman', 'Riverwoman', 'Riverwoman', 'Seaman','Seaman', 'Smuggler', 'Stevedore', 'Stevedore', 'Wrecker', 'Bawd', 'Bawd', 'Charlatan', 'Fence', 'Grave Robber', 'Outlaw', 'Outlaw', 'Outlaw', 'Outlaw', 'Racketeer', 'Thief', 'Thief', 'Thief', 'Witch', 'Cavalryman', 'Cavalryman', 'Guard', 'Guard', 'Knight', 'Pit Fighter', 'Protagonist', 'Soldier','Soldier','Soldier','Soldier', 'Warrior Priest'];


// Selectors
const characteristics = document.querySelectorAll('.char');
const charName = document.querySelector('.char-name');
const pronounce = document.querySelectorAll('.pronounce');
const career = document.querySelector('.char-prof');
const age = document.querySelector('.age');
const eyes = document.querySelector('.eyes');
const hair = document.querySelector('.hair');
const height = document.querySelector('.height');

// Variables
const femaleNames = fNames.split('-').sort();
const fIndex = Math.floor(Math.random() * femaleNames.length);
const maleNames = mNames.split('-').sort();
const mIndex = Math.floor(Math.random() * maleNames.length);
const surNames = lNames.split('-').sort();
const sIndex = Math.floor(Math.random() * surNames.length);
const cIndex = Math.floor(Math.random() * careers.length);

// Dices
const d100 = Math.floor(Math.random() * 100 + 1);
const d10 = Math.floor(Math.random() * 10 + 1);
const dice2 = Math.floor(Math.random() * 10 + 1);

const eyeRoll = d10 + dice2;
const hairRoll = d10 + dice2;

// Creating Characteristics
characteristics.forEach(char => {
    const random = 20 + Math.floor(Math.random() * 20 + 1);
    if (random < 25 ) {
        char.innerHTML = random;
        char.style.color = 'red';
    } else if (random > 35) {
        char.innerHTML = random;
        char.style.color = 'green';
    } else {
        char.innerHTML = random;
    }
    
});

// Character name Generator
d100 <= 50 ? charName.innerHTML = `${femaleNames[fIndex]} ${surNames[sIndex]}` : charName.innerHTML = `${maleNames[mIndex]} ${surNames[sIndex]}`;
// Pronounce Generator
pronounce.forEach(pro => d100 <= 50 ? pro.innerHTML = 'She' : pro.innerHTML = 'He');
// Career Generator
career.innerHTML = `${careers[cIndex]}`;
// Age Generator
age.innerHTML = `${d10 + dice2 + 15}`;

//Hair Generator
hairRoll === 2 ? hair.innerHTML = 'Free Choice' 
    : hairRoll === 3 ? hair.innerHTML = 'Green'
        : hairRoll === 4 ? hair.innerHTML = 'Pale Blue'
            : hairRoll >= 5 && hairRoll <= 7 ? hair.innerHTML = 'Blue'
                : hairRoll >= 8 && hairRoll <= 11 ? hair.innerHTML = 'Pale Grey'
                    : hairRoll >= 12 && hairRoll <= 14 ? hair.innerHTML = 'Grey'
                        : hairRoll >= 15 && hairRoll <= 17 ? hair.innerHTML = 'Brown'
                            : hairRoll === 18 ? hair.innerHTML = 'Hazel'
                                : hairRoll === 19 ? hair.innerHTML = 'Dark Brown' : 'Black';


// Eyes Generator
eyeRoll === 2 ? eyes.innerHTML = 'White Blond' 
    : eyeRoll === 3 ? eyes.innerHTML = 'Golden Blond'
        : eyeRoll === 4 ? eyes.innerHTML = 'Red Blond'
            : eyeRoll >= 5 && eyeRoll <= 7 ? eyes.innerHTML = 'Golden Brown'
                : eyeRoll >= 8 && eyeRoll <= 11 ? eyes.innerHTML = 'Light Brown'
                    : eyeRoll >= 12 && eyeRoll <= 14 ? eyes.innerHTML = 'Dark Brown'
                        : eyeRoll >= 15 && eyeRoll <= 17 ? eyes.innerHTML = 'Black'
                            : eyeRoll === 18 ? eyes.innerHTML = 'Auburn'
                                : eyeRoll === 19 ? eyes.innerHTML = 'Red' : 'Grey';

// 




































