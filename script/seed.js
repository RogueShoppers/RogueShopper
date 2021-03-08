'use strict'

const db = require('../server/db')
const {User, Product, Pet, Tag, OrderProduct} = require('../server/db/models')

const seed = async () => {
  await db.sync({force: true})
  console.log('db synced!')

  const patrons = [
    {
      firstName: 'Patricia',
      lastName: 'McConnell',
      preferredName: '',
      email: 'patricia@rogue.com',
      password: 'sheepFields',
      address: '12356 West Burbarry Lane, Madison, WI 56894',
      isAdmin: false
    },
    {
      firstName: 'Susan',
      lastName: 'Garrett',
      preferredName: '',
      email: 'susan@rogue.com',
      password: 'gamesPls',
      address: '49 Gamer Ave, Marsish, NM 55558',
      isAdmin: false
    },
    {
      firstName: 'Sophia',
      lastName: 'Yin',
      preferredName: '',
      email: 'dryin@rogue.com',
      password: 'heelersPls',
      address: '2 After Lane, New York, NY 10061',
      isAdmin: false
    },
    {
      firstName: 'Emily',
      lastName: 'Larlham',
      preferredName: 'Kikopup',
      email: 'kikopup@rogue.com',
      password: 'recordDogs',
      address: '64 Sunny Blvd, #4, Los Angeles, CA 32548',
      isAdmin: true
    },
    {
      firstName: 'Terry',
      lastName: 'Ryan',
      preferredName: '',
      email: 'chickencamp@rogue.com',
      password: 'chickenz',
      address: '1 Star Studded Pastures, ChickenVille, CO 66634',
      isAdmin: true
    },
    {
      firstName: 'Brien',
      lastName: 'Taylor',
      preferredName: 'bigdawg',
      email: 'bigdawg2118@rogue.com',
      password: 'dirtyBird',
      address: '328 Globe Road, Hicktown, AL 35201',
      isAdmin: false
    },
    {
      firstName: 'Antoine',
      lastName: 'Duke',
      preferredName: '',
      email: 'al43@rogue.com',
      password: 'petz4life',
      address: '84 Zeppelin Way, Steamboat, CO 80477',
      isAdmin: false
    },
    {
      firstName: 'Larry',
      lastName: 'Smith',
      preferredName: 'Gov',
      email: 'thagov@rogue.come',
      password: 'secure4me',
      address: '9001 Wiltshire Way, Baltimore, MD 21032',
      isAdmin: false
    },
    {
      firstName: 'Kate',
      lastName: 'Hunter',
      preferredName: '',
      email: 'booksluver@rogue.com',
      password: '1j48d',
      address: '12 Beef Boulevard, Delaware Township, PA 18328',
      isAdmin: false
    },
    {
      firstName: 'Missy',
      lastName: 'Monroe',
      preferredName: '',
      email: 'queenM@rogue.com',
      password: 'hello12bye',
      address: '414 E 88th Street, New York, NY 10028',
      isAdmin: true
    },
    {
      firstName: 'Hildegarde',
      lastName: 'Hopkynson',
      preferredName: '',
      email: 'hhopkynson0@rogue.com',
      password: 'eCbXjGvre',
      address: '02844 Little Fleur Avenue, Allentown, PA 18105',
      isAdmin: false
    },
    {
      firstName: 'Sallyann',
      lastName: 'Pentycross',
      preferredName: '',
      email: 'sapenny0@rogue.com',
      password: 'dsu7nK',
      address: '3 Daystar Lane, Indianapolis, IN 46226',
      isAdmin: false
    },
    {
      firstName: 'Virgie',
      lastName: 'Dyerson',
      preferredName: '',
      email: 'ldyerson0@engadget.com',
      password: 'vnTBUSwa',
      address: '2250 Stanley Road, Unit 161, Fort Sam Houston, TX 78234-6400',
      isAdmin: false
    },
    {
      firstName: 'Jane',
      lastName: 'Roscow',
      preferredName: '',
      email: 'aroscow1@typepad.com',
      password: 'tC5wnTGF',
      address: '100 Warrior Lane, 100 Warrior Lane, AL 35023',
      isAdmin: false
    },
    {
      firstName: 'Erik',
      lastName: 'Barsby',
      preferredName: '',
      email: 'fbarsby2@amazon.co.jp',
      password: '6QdQTDG8',
      address: '3401 Martin Luther King Blvd., Tuscaloosa, AL 35401',
      isAdmin: false
    },
    {
      firstName: 'Page',
      lastName: 'MacAllan',
      preferredName: '',
      email: 'rmacallan3@hhs.gov',
      password: 'AkqTAh3k',
      address: '3625 NW 82nd Avenue Ste. 205, Miami, FL 33116',
      isAdmin: false
    },
    {
      firstName: 'Queenie',
      lastName: 'McLise',
      preferredName: '',
      email: 'cmclise4@hugedomains.com',
      password: 'SCRLkdeU',
      address: '8274 Six Shooter Canyon Rd., Globe, AZ 85502-2656',
      isAdmin: false
    },
    {
      firstName: 'Mersey',
      lastName: 'Ferrer',
      preferredName: '',
      email: 'rferrer5@go.com',
      password: 'VTW9bqU2',
      address: '1400 N. 3rd St., Winslow, AZ 85045',
      isAdmin: false
    },
    {
      firstName: 'Olivia',
      lastName: 'Kennewell',
      preferredName: '',
      email: 'akennewell6@unc.edu',
      password: 'mzC2eyhD',
      address: '103 Brenda Street, Hot Springs, AR',
      isAdmin: false
    },
    {
      firstName: 'Peggie',
      lastName: 'Edney',
      preferredName: '',
      email: 'gedney7@amazon.de',
      password: '92vBkNAE',
      address: '1609 East Ash, McGehee, AR 71654',
      isAdmin: false
    },
    {
      firstName: 'Celinka',
      lastName: 'Jasper',
      preferredName: '',
      email: 'gjasper8@sogou.com',
      password: 'f7KHH68x',
      address: '1000 Cherry Road, Memphis, TN 38117-5499',
      isAdmin: false
    },
    {
      firstName: 'Lane',
      lastName: 'Antonowicz',
      preferredName: '',
      email: 'mantonowicz9@pinterest.com',
      password: 'twYs8WRW',
      address: '1210 Ricebelt, HWY 165 S, Box 427, DeWitt, AR 72042',
      isAdmin: false
    },
    {
      firstName: 'Jerald',
      lastName: 'Josum',
      preferredName: '',
      email: 'rjosuma@weebly.com',
      password: '8ZyYjCtM',
      address: '1200 North Magnolia Avenue, Anaheim, CA 92801',
      isAdmin: false
    },
    {
      firstName: 'Burl',
      lastName: 'Huggard',
      preferredName: '',
      email: 'nhuggardb@ihg.com',
      password: 'L24t8h9S',
      address: '1716 University Boulevard, Birmingham, AL 35294',
      isAdmin: true
    },
    {
      firstName: 'Rolando',
      lastName: 'Dantesia',
      preferredName: '',
      email: 'ddantesiac@virginia.edu',
      password: 'CTdNSEST',
      address: '6574 Highway 21 PO Box 1119, Atmore, AL 36504',
      isAdmin: false
    },
    {
      firstName: 'Lammond',
      lastName: 'Jenkin',
      preferredName: '',
      email: 'kjenkind@umn.edu',
      password: 'GgK9XAgS',
      address: '1504 Springhill Avenue, Mobile, AL 36604',
      isAdmin: false
    },
    {
      firstName: 'Aylmer',
      lastName: 'Minett',
      preferredName: '',
      email: 'kminette@nationalgeographic.com',
      password: 'nKH3wNNx',
      address: '201 N. Bonita Avenue, Tucson, AZ 85745',
      isAdmin: false
    },
    {
      firstName: 'Terrijo',
      lastName: 'Pendrid',
      preferredName: '',
      email: 'spendridf@miitbeian.gov.cn',
      password: 'Ms7s6kNF',
      address: '6002 W. Sherman St., Phoenix, AZ 85043-3535',
      isAdmin: false
    },
    {
      firstName: 'Melantha',
      lastName: 'Amesbury',
      preferredName: '',
      email: 'lamesburyg@nationalgeographic.com',
      password: 'jktunpHd',
      address: '8200 Roberts Drive, Sandy Springs, GA 30350-4147',
      isAdmin: false
    },
    {
      firstName: 'Jany',
      lastName: 'Lade',
      preferredName: '',
      email: 'rladeh@dropbox.com',
      password: 'V9GB3nJb',
      address: '633 S. County Club Lane, Conway, AR 72034',
      isAdmin: false
    },
    {
      firstName: 'Chantalle',
      lastName: 'Pittoli',
      preferredName: '',
      email: 'cpittolii@parallels.com',
      password: 'N8GKHKSj',
      address: '130 West Main Street, Batesville, AR',
      isAdmin: false
    },
    {
      firstName: 'Beverley',
      lastName: 'Slaight',
      preferredName: '',
      email: 'nslaightj@sina.com.cn',
      password: 'aJzcATZe',
      address: '1803 West Coulter Street, DeQueen, AR 71832',
      isAdmin: false
    },
    {
      firstName: 'Moselle',
      lastName: 'Cottey',
      preferredName: '',
      email: 'acotteyk@digg.com',
      password: 'PDbkmdHn',
      address: '11900 Colonel Glenn Road, Little Rock, AR 72210',
      isAdmin: false
    },
    {
      firstName: 'Rosemonde',
      lastName: 'Stollenbecker',
      preferredName: '',
      email: 'estollenbeckerl@unicef.org',
      password: 'phawkPwC',
      address: '3580 Wilshire Blvd., Los Angeles, CA 90010-2501',
      isAdmin: true
    },
    {
      firstName: 'Elvyn',
      lastName: 'Christiensen',
      preferredName: '',
      email: 'wchristiensenm@jimdo.com',
      password: 'KBhNSrKQ',
      address: '34091 US Hwy. 280, Childersburg, AL 35044',
      isAdmin: false
    },
    {
      firstName: 'Napoleon',
      lastName: 'Alkin',
      preferredName: '',
      email: 'balkinn@unesco.org',
      password: '2HNpBLmy',
      address: '4600 Valleydale Rd, Birmingham, AL 35242',
      isAdmin: false
    },
    {
      firstName: 'Darda',
      lastName: 'Saltmarshe',
      preferredName: '',
      email: 'csaltmarsheo@baidu.com',
      password: 'vPgMjjyw',
      address: '3920 Troy Highway, Montgomery, AL 36116-2699',
      isAdmin: false
    },
    {
      firstName: 'Isak',
      lastName: 'Kinane',
      preferredName: '',
      email: 'pkinanep@un.org',
      password: 'g2uMkTVK',
      address: '411 N. Central Ave, Phoenix, AZ 85004',
      isAdmin: false
    },
    {
      firstName: 'Donica',
      lastName: 'Edgcombe',
      preferredName: '',
      email: 'kedgcombeq@aol.com',
      password: 'eAJRVAkV',
      address: '5901 Harper Drive Northeast, Albuquerque, NM 87109',
      isAdmin: false
    },
    {
      firstName: 'Idaline',
      lastName: 'Barnard',
      preferredName: '',
      email: 'bbarnardr@goodreads.com',
      password: '9NFvnDLD',
      address: '1255 N. Stone Ave., Tucson, AZ 85709-3000',
      isAdmin: false
    },
    {
      firstName: 'Laird',
      lastName: 'Hayhurst',
      preferredName: '',
      email: 'lhayhursts@linkedin.com',
      password: 'JyxaWNsq',
      address: '9100 Rodney Parham; Suite 101, Little Rock, AR 72204',
      isAdmin: false
    },
    {
      firstName: 'Donnie',
      lastName: 'Yakebovitch',
      preferredName: '',
      email: 'dyakebovitcht@cnet.com',
      password: 'sVSshXEb',
      address: '1900 Hazel St., Pine Bluff, AR 71603',
      isAdmin: false
    },
    {
      firstName: 'Luis',
      lastName: 'Garken',
      preferredName: '',
      email: 'cgarkenu@usda.gov',
      password: 'vSdtLLFq',
      address: '2001 Southeast 10th Street, Bentonville, AR 72716',
      isAdmin: true
    },
    {
      firstName: 'Celine',
      lastName: 'Colloby',
      preferredName: '',
      email: 'ncollobyv@usnews.com',
      password: '3HKeUKZE',
      address: '101 College Drive, Hot Springs, AR 71913',
      isAdmin: false
    },
    {
      firstName: 'Domini',
      lastName: 'Behnecken',
      preferredName: '',
      email: 'tbehneckenw@bravesites.com',
      password: 'RbyG2gUh',
      address: '1974 Coney Island Avenue, Brooklyn, NY 11223',
      isAdmin: false
    },
    {
      firstName: 'Verla',
      lastName: 'Stigers',
      preferredName: '',
      email: 'dstigersx@rambler.ru',
      password: 'EAevuUvZ',
      address: '138 Lowell Barron Highway W, Rainsville, AL 35986',
      isAdmin: false
    },
    {
      firstName: 'Bronson',
      lastName: 'Sherburn',
      preferredName: '',
      email: 'fsherburny@ftc.gov',
      password: 'nSZgQtFB',
      address: '4600 Valleydale Rd, Birmingham, AL 35242',
      isAdmin: false
    },
    {
      firstName: 'Isiahi',
      lastName: 'Rowlstone',
      preferredName: '',
      email: 'zrowlstonez@stumbleupon.com',
      password: 'u55KAhpV',
      address: '3920 Troy Highway, Montgomery, AL 36116-2699',
      isAdmin: false
    },
    {
      firstName: 'Worden',
      lastName: 'Maliffe',
      preferredName: '',
      email: 'lmaliffe10@liveinternet.ru',
      password: 'QUMSkpb6',
      address: '411 N. Central Ave, Phoenix, AZ 85004',
      isAdmin: false
    },
    {
      firstName: 'Alexandros',
      lastName: 'Salzen',
      preferredName: '',
      email: 'ksalzen11@ucsd.edu',
      password: 'UJtJJefg',
      address: '5901 Harper Drive Northeast, Albuquerque, NM 87109',
      isAdmin: false
    },
    {
      firstName: 'Kippie',
      lastName: 'Engelbrecht',
      preferredName: '',
      email: 'aengelbrecht12@npr.org',
      password: 'Z6PpQZdL',
      address: '1255 N. Stone Ave., Tucson, AZ 85709-3000',
      isAdmin: false
    },
    {
      firstName: 'Blancha',
      lastName: 'Elverstone',
      preferredName: '',
      email: 'aelverstone13@friendfeed.com',
      password: 'SejBkPa8',
      address: '9100 Rodney Parham; Suite 101, Little Rock, AR 72204',
      isAdmin: false
    },
    {
      firstName: 'Cordelie',
      lastName: 'Inglesent',
      preferredName: '',
      email: 'ginglesent14@weebly.com',
      password: 'fSbxb9CG',
      address: '1900 Hazel St., Pine Bluff, AR 71603',
      isAdmin: false
    },
    {
      firstName: 'Bogart',
      lastName: 'Burthom',
      preferredName: '',
      email: 'mburthom15@360.cn',
      password: 'uSDQeLH7',
      address: '2001 Southeast 10th Street, Bentonville, AR 72716',
      isAdmin: false
    },
    {
      firstName: 'Merrill',
      lastName: 'Thornber',
      preferredName: '',
      email: 'dthornber16@360.cn',
      password: 'dZE3YZuL',
      address: '101 College Drive, Hot Springs, AR 71913',
      isAdmin: false
    },
    {
      firstName: 'Jobina',
      lastName: 'Goldsworthy',
      preferredName: '',
      email: 'egoldsworthy17@apple.com',
      password: 'CsqrW6Ts',
      address: '1974 Coney Island Avenue, Brooklyn, NY 11223',
      isAdmin: false
    },
    {
      firstName: 'Filmore',
      lastName: 'Brinsden',
      preferredName: '',
      email: 'tbrinsden18@kickstarter.com',
      password: 'sK5Sn6bb',
      address: '1975 Ave C, Mobile, AL 36615-1403',
      isAdmin: false
    },
    {
      firstName: 'Neysa',
      lastName: 'Lantaff',
      preferredName: '',
      email: 'nlantaff19@surveymonkey.com',
      password: 'Dq3uvjDz',
      address: '750 Greenville Bypass, Greenville, AL 36037',
      isAdmin: false
    },
    {
      firstName: 'Pincus',
      lastName: 'Sindall',
      preferredName: '',
      email: 'jsindall1a@ucoz.com',
      password: 'ALfQJRm5',
      address: '3512 Industrial Dr., Jasper, AL 35501',
      isAdmin: false
    },
    {
      firstName: 'Beverlee',
      lastName: 'Shankster',
      preferredName: '',
      email: 'ashankster1b@theguardian.com',
      password: 'uZpLzr3g',
      address: '1140 N. Colombo Ave., Sierra Vista, AZ 85635',
      isAdmin: false
    },
    {
      firstName: 'Alasteir',
      lastName: 'Bownas',
      preferredName: '',
      email: 'dbownas1c@chron.com',
      password: 'VUQ4CkGv',
      address: '4812 South Mill Avenue, Tempe, AZ 85282',
      isAdmin: false
    },
    {
      firstName: 'Debby',
      lastName: 'Cicchitello',
      preferredName: '',
      email: 'mcicchitello1d@kickstarter.com',
      password: '4hhDWJLw',
      address: '2233 E. Speedway Blvd., Tucson, AZ 85719',
      isAdmin: false
    },
    {
      firstName: 'Byrle',
      lastName: 'Penlington',
      preferredName: '',
      email: 'spenlington1e@tiny.cc',
      password: 'GkcYcefA',
      address: '2501 South Division St., Blytheville, AR 72315',
      isAdmin: false
    },
    {
      firstName: 'Leesa',
      lastName: 'Vlasenkov',
      preferredName: '',
      email: 'tvlasenkov1f@domainmarket.com',
      password: '7TUaqWFg',
      address: '1620 Newcastle Rd., Forrest City, AR 72335',
      isAdmin: false
    },
    {
      firstName: 'Carleton',
      lastName: 'Carreyette',
      preferredName: '',
      email: 'ncarreyette1g@example.com',
      password: 'QWmUm6hd',
      address: '103 North Main Street, Leachville, AR 72438',
      isAdmin: false
    },
    {
      firstName: 'Svend',
      lastName: 'MacAllaster',
      preferredName: '',
      email: 'nmacallaster1h@blog.com',
      password: 'syhQDheQ',
      address: '204 Bragg, Warren, AR 71671',
      isAdmin: false
    },
    {
      firstName: 'Clotilda',
      lastName: 'Bamlet',
      preferredName: '',
      email: 'bbamlet1i@wufoo.com',
      password: 'A8WUrw9E',
      address: '2000 Center St, Berkeley, CA 94704',
      isAdmin: false
    },
    {
      firstName: 'Raimundo',
      lastName: 'Liston',
      preferredName: '',
      email: 'kliston1j@paginegialle.it',
      password: 'UdNJTrds',
      address: '440 Fairhope Ave, Fairhope, AL 36532',
      isAdmin: false
    },
    {
      firstName: 'Abie',
      lastName: 'Camelia',
      preferredName: '',
      email: 'mcamelia1k@virginia.edu',
      password: '6duQJEp2',
      address: '2080 College Road, Phil Campbell, AL 35581',
      isAdmin: false
    },
    {
      firstName: 'Jeniffer',
      lastName: 'Guitte',
      preferredName: '',
      email: 'lguitte1l@51.la',
      password: 'URPSzBYc',
      address: '604 Barnette Street, Fairbanks, AK 99701',
      isAdmin: false
    },
    {
      firstName: 'Abba',
      lastName: 'Blinkhorn',
      preferredName: '',
      email: 'sblinkhorn1m@hhs.gov',
      password: 'H5bhsYNw',
      address: '5000 Marble NE, Albuquerque, NM 87110',
      isAdmin: false
    },
    {
      firstName: 'Irwinn',
      lastName: 'Stannus',
      preferredName: '',
      email: 'hstannus1n@google.co.jp',
      password: 'eBpK8mGF',
      address: '6875 W. Galviston, Chandler, AZ 85226-2516',
      isAdmin: false
    },
    {
      firstName: 'Ammamaria',
      lastName: 'Endon',
      preferredName: '',
      email: 'nendon1o@springer.com',
      password: 'TmDcAxGj',
      address: '55 N. Arizona Place, Chandler, AZ 85225',
      isAdmin: false
    },
    {
      firstName: 'Artemus',
      lastName: 'Rohan',
      preferredName: '',
      email: 'mrohan1p@meetup.com',
      password: 'fPnHMHcq',
      address: '604 Locust Street, North Little Rock, AR 72214',
      isAdmin: false
    },
    {
      firstName: 'Dasi',
      lastName: 'Smiley',
      preferredName: '',
      email: 'osmiley1q@wsj.com',
      password: 'x2WYMtx5',
      address: '201 Evans Road, Suite 400, New Orleans, LA 70123',
      isAdmin: false
    },
    {
      firstName: 'Dalis',
      lastName: 'Coggins',
      preferredName: '',
      email: 'mcoggins1r@blog.com',
      password: '7676SBhk',
      address: '1320 North Springs Rd, Harrison, AR 72602',
      isAdmin: false
    },
    {
      firstName: 'Gibby',
      lastName: 'Larder',
      preferredName: '',
      email: 'jlarder1s@google.co.uk',
      password: '7XqnehLV',
      address: '183 College Drive, DeQueen, AR 71832',
      isAdmin: false
    },
    {
      firstName: 'Ursala',
      lastName: 'Wareing',
      preferredName: '',
      email: 'swareing1t@netscape.com',
      password: 'g5UPFSVD',
      address: '420 WYNN DR, HUNTSVILLE, AL 35805-1963',
      isAdmin: false
    },
    {
      firstName: 'Erna',
      lastName: 'Counihan',
      preferredName: '',
      email: 'jcounihan1u@ox.ac.uk',
      password: 'q2Kw5N3x',
      address: '235 College Avenue, Jackson, AL 36545',
      isAdmin: false
    },
    {
      firstName: 'Keefe',
      lastName: 'Skein',
      preferredName: '',
      email: 'mskein1v@phpbb.com',
      password: 'PMuBRUK9',
      address: '1251 Muldoon Road, Suite 103, Anchorage, AK 99504',
      isAdmin: false
    },
    {
      firstName: 'Kylie',
      lastName: 'Bruggen',
      preferredName: '',
      email: 'rbruggen1w@amazon.com',
      password: 'Lf7UqpFC',
      address: '15210 S. 50TH STREET SUITE 150, PHOENIX, AZ 85044',
      isAdmin: false
    },
    {
      firstName: 'Doug',
      lastName: 'de Clercq',
      preferredName: '',
      email: 'cdeclercq1x@toplist.cz',
      password: 'DYL8xrtc',
      address: '7110 E. McKellips Rd., Mesa, AZ 85207',
      isAdmin: false
    },
    {
      firstName: 'Margeaux',
      lastName: 'Van den Velde',
      preferredName: '',
      email: 'bvandenvelde1y@jimdo.com',
      password: 'uR2ynufF',
      address: '601 Black Hills Dr., Clarkdale, AZ 86324',
      isAdmin: false
    },
    {
      firstName: 'Dmitri',
      lastName: 'Poletto',
      preferredName: '',
      email: 'bpoletto1z@mediafire.com',
      password: 'dyMm3Vas',
      address: '101 River Crest Drive, Heber Springs, AR 72453',
      isAdmin: false
    },
    {
      firstName: 'Shepherd',
      lastName: 'Lamball',
      preferredName: '',
      email: 'alamball20@dagondesign.com',
      password: 'YfKXmdPK',
      address: '3030 William Pereira Drive, Norman, OK 73072',
      isAdmin: false
    },
    {
      firstName: 'Axe',
      lastName: 'Mumbeson',
      preferredName: '',
      email: 'bmumbeson21@telegraph.co.uk',
      password: 'nNPtsWNL',
      address: '633 South Country Club Road, Conway, AR 72034',
      isAdmin: false
    },
    {
      firstName: 'Bill',
      lastName: 'aManger',
      preferredName: '',
      email: 'camanger22@uol.com.br',
      password: 'HAYn4Nyg',
      address: '103 Business Park Dr, Magnolia, AR 71753',
      isAdmin: false
    },
    {
      firstName: 'Buddy',
      lastName: 'Oliphard',
      preferredName: '',
      email: 'loliphard23@biglobe.ne.jp',
      password: 'rGjdhZfB',
      address: '420 WYNN DR, HUNTSVILLE, AL 35805-1963',
      isAdmin: false
    },
    {
      firstName: 'Garvey',
      lastName: 'Van de Vlies',
      preferredName: '',
      email: 'dvandevlies24@icq.com',
      password: 'SV7KuGrc',
      address: '235 College Avenue, Jackson, AL 36545',
      isAdmin: false
    },
    {
      firstName: 'Gabi',
      lastName: 'Dugood',
      preferredName: '',
      email: 'ldugood25@alexa.com',
      password: 'AbURHLVJ',
      address: '1251 Muldoon Road, Suite 103, Anchorage, AK 99504',
      isAdmin: false
    },
    {
      firstName: 'Vaughn',
      lastName: 'Pedracci',
      preferredName: '',
      email: 'lpedracci26@bbc.co.uk',
      password: '8Zm4Mtg3',
      address: '15210 S. 50TH STREET SUITE 150, PHOENIX, AZ 85044',
      isAdmin: false
    },
    {
      firstName: 'Cordelia',
      lastName: 'Boyles',
      preferredName: '',
      email: 'nboyles27@ted.com',
      password: 'QpJRf4QP',
      address: '7110 E. McKellips Rd., Mesa, AZ 85207',
      isAdmin: false
    },
    {
      firstName: 'Jamaal',
      lastName: 'Eunson',
      preferredName: '',
      email: 'jeunson28@earthlink.net',
      password: 'pNer6A78',
      address: '601 Black Hills Dr., Clarkdale, AZ 86324',
      isAdmin: false
    },
    {
      firstName: 'Isabel',
      lastName: 'Tretwell',
      preferredName: '',
      email: 'utretwell29@4shared.com',
      password: 'KVQScs89',
      address: '101 River Crest Drive, Heber Springs, AR 72453',
      isAdmin: false
    },
    {
      firstName: 'Rosina',
      lastName: 'Basilone',
      preferredName: '',
      email: 'abasilone2a@skype.com',
      password: 'Ea8gFBFQ',
      address: '3030 William Pereira Drive, Norman, OK 73072',
      isAdmin: false
    },
    {
      firstName: 'Arlyn',
      lastName: 'Gyles',
      preferredName: '',
      email: 'ggyles2b@cbc.ca',
      password: 'jYjpB8TD',
      address: '633 South Country Club Road, Conway, AR 72034',
      isAdmin: false
    },
    {
      firstName: 'Eldon',
      lastName: 'Leversuch',
      preferredName: '',
      email: 'eleversuch2c@g.co',
      password: 'VAESaNUy',
      address: '103 Business Park Dr, Magnolia, AR 71753',
      isAdmin: false
    },
    {
      firstName: 'Winfred',
      lastName: 'Loughran',
      preferredName: '',
      email: 'aloughran2d@yolasite.com',
      password: 'NYsCUFqh',
      address: '1801 Coleman Road, Anniston, AL 36207',
      isAdmin: false
    },
    {
      firstName: 'Lowe',
      lastName: 'Pluck',
      preferredName: '',
      email: 'dpluck2e@narod.ru',
      password: 'qWwmdTu8',
      address: '596 W. Lamont Road, Suite 110, Elmhurst, IL 60126',
      isAdmin: false
    },
    {
      firstName: 'Karlen',
      lastName: 'Roft',
      preferredName: '',
      email: 'groft2f@indiegogo.com',
      password: 'y9TUYBWe',
      address: '721 West Parks Highway, Unit 5, Wasilla, AK 99654',
      isAdmin: false
    },
    {
      firstName: 'Westleigh',
      lastName: 'Dearell',
      preferredName: '',
      email: 'sdearell2g@ucsd.edu',
      password: 'xuRwNzd4',
      address: '80440 E Aravaipa Road, Winkelman, AZ 85292',
      isAdmin: false
    },
    {
      firstName: 'Goldina',
      lastName: 'Foffano',
      preferredName: '',
      email: 'jfoffano2h@hostgator.com',
      password: 'pA74cN4E',
      address: '1977 West Acoma Blvd, Lake Havasu City, AZ 86403',
      isAdmin: false
    },
    {
      firstName: 'Rodger',
      lastName: 'Carrington',
      preferredName: '',
      email: 'rcarrington2i@comsenz.com',
      password: 'uuLwCW34',
      address: '410 River St., Benton, AR 72015',
      isAdmin: false
    },
    {
      firstName: 'Tabbie',
      lastName: 'Cowl',
      preferredName: '',
      email: 'mcowl2j@ed.gov',
      password: 'jDw5HKTC',
      address: '33500 Hwy 63 East, Marked Tree, AR 72365',
      isAdmin: false
    },
    {
      firstName: 'Berget',
      lastName: 'Beaston',
      preferredName: '',
      email: 'nbeaston2k@posterous.com',
      password: 'KYvAxPZZ',
      address: '2871 Malvern Avenue, Hot Springs, AR 71901',
      isAdmin: false
    },
    {
      firstName: 'Bourke',
      lastName: 'Baudon',
      preferredName: '',
      email: 'nbaudon2l@example.com',
      password: 'X342L8pX',
      address: '80 College Drive, Ash Flat, AR 72513',
      isAdmin: false
    },
    {
      firstName: 'Nona',
      lastName: 'Grzegorecki',
      preferredName: '',
      email: 'rgrzegorecki2m@livejournal.com',
      password: 'MVCcemAn',
      address: '2000 W. Broadway, West Memphis, AR 72301-3829',
      isAdmin: false
    },
    {
      firstName: 'Erda',
      lastName: 'Gandrich',
      preferredName: '',
      email: 'fgandrich2n@gravatar.com',
      password: 'eNrdQ9Hq',
      address: '1801 Coleman Road, Anniston, AL 36207',
      isAdmin: false
    },
    {
      firstName: 'Lezley',
      lastName: 'Headey',
      preferredName: '',
      email: 'pheadey2o@imgur.com',
      password: 'aHUgANag',
      address: '596 W. Lamont Road, Suite 110, Elmhurst, IL 60126',
      isAdmin: false
    },
    {
      firstName: 'Tobias',
      lastName: 'Brezlaw',
      preferredName: '',
      email: 'ebrezlaw2p@salon.com',
      password: 'rh4T9MxF',
      address: '721 West Parks Highway, Unit 5, Wasilla, AK 99654',
      isAdmin: false
    },
    {
      firstName: 'Johna',
      lastName: 'Loosmore',
      preferredName: '',
      email: 'cloosmore2q@pinterest.com',
      password: 'MVNKAg8q',
      address: '80440 E Aravaipa Road, Winkelman, AZ 85292',
      isAdmin: false
    },
    {
      firstName: 'Sarett',
      lastName: 'Screaton',
      preferredName: '',
      email: 'bscreaton2r@telegraph.co.uk',
      password: 'RsKk2Acu',
      address: '1977 West Acoma Blvd, Lake Havasu City, AZ 86403',
      isAdmin: false
    }
  ]

  const [patricia, susan, sophia, kiko, terry] = await User.bulkCreate(
    patrons,
    {returning: ['id']}
  )

  const pets = [
    {
      name: 'Jade',
      age: 8,
      favoriteToy: 'frog non-squishy',
      user_id: kiko.id
    },
    {
      name: 'Opie',
      age: 0.75,
      favoriteToy: 'carrot squishy',
      user_id: terry.id
    },
    {
      name: 'Theo',
      age: 7,
      favoriteToy: 'Romeo',
      user_id: patricia.id
    },
    {
      name: 'Romeo',
      age: 10,
      favoriteToy: 'Your heart',
      user_id: sophia.id
    },
    {
      name: 'Charlie',
      age: 2,
      favoriteToy: 'avocado squishy',
      user_id: susan.id
    },
    {
      name: 'Whiskey',
      age: 3,
      favoriteToy: 'whiskey squishy',
      user_id: susan.id
    }
  ]

  const tags = [
    'chase',
    'chew',
    'destroy',
    'brain teaser',
    'fetch',
    'feed',
    'tug',
    'squishy'
  ]

  const [
    chase,
    chew,
    destroy,
    brainTeaser,
    fetch,
    feed,
    tug,
    squishy
  ] = await Tag.bulkCreate(tags, {returning: ['id']})

  const products = [
    {
      name: 'Avocado Squishy',
      shortDescription: 'For the pupster at heart',
      longDescription:
        'Aqua doggo yapper you are doing me a frighten heckin very jealous pupper, adorable doggo heckin angery woofer. Ur givin me a spook shooberino wrinkler length boy you are doing me the shock h*ck, clouds wrinkler he made many woofs ruff. Clouds heckin good boys adorable doggo what a nice floof vvv, long doggo such treat ur givin me a spook. wow such tempt mlem. Shoob long doggo I am bekom fat pupper pats, noodle horse wow very biscit.',
      price: 25.5,
      quantity: 0,
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCGNZ-vUNSnMMNDKxRNet8-qrxVRCRz2uDNg&usqp=CAU',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Carrot Squishy',
      shortDescription: 'Get that beta carotene',
      longDescription:
        'Pats wow such tempt very taste wow clouds mlem, heck shoober. Corgo what a nice floof h*ck shoober, pats. Floofs doing me a frighten wrinkler bork aqua doggo, smol fluffer. borking doggo you are doin me a concern big ol. Blop such treat big ol heckin angery woofer very jealous pupper what a nice floof wow such tempt blep, such treat fat boi wow such tempt heck sub woofer heck.  Sub woofer heck porgo heckin angery woofer fat boi, very hand that feed shibe very good spot blep. Long bois bork vvv noodle horse, blop such treat very jealous pupper such treat, heckin length boy.',
      price: 25.5,
      quantity: 5,
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXrHxKq80TdAxEdW7MhI-zDI3Oh3HGaiPzg&usqp=CAU',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Tuna Squishy',
      shortDescription: 'Stink up that house',
      longDescription:
        'borkdrive, aqua doggo clouds. Heckin what a nice floof wow very biscit fat boi, heckin boof pupper blop, noodle horse very taste wow. super chub clouds. Borkdrive yapper very hand that feed shibe, woofer. Mlem big ol pupper ur givin me a spook very taste wow woofer, stop it fren shibe long water shoob he made many woofs you are doin me a concern, wrinkler such treat boofers. heckin good boys and girls length boy fat boi. What a nice floof heckin bork boof, very jealous pupper yapper. Very hand that feed shibe blop borkdrive heckin angery woofer big ol, much ruin diet pats.',
      price: 25.5,
      quantity: 10,
      imageURL:
        'https://i.pinimg.com/564x/98/e2/fa/98e2fa2182912afdee7bc3a11620ab77.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Whiskey Squishy',
      shortDescription: 'For the whiskered and weary',
      longDescription:
        'Clouds shoob wow such tempt heckin good boys doggo woofer, very good spot blop boof you are doing me a frighten puggorino, sub woofer what a nice floof boofers wrinkler. Very taste wow blop heckin good boys extremely cuuuuuute, very jealous pupper boofers. Tungg super chub you are doin me a concern, yapper. Smol borking doggo with a long snoot for pats length boy he made many woofs waggy wags smol borking doggo with a long snoot for pats, sub woofer shoob woofer the neighborhood pupper, heckin good boys and girls mlem shibe.',
      price: 25.0,
      quantity: 3,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/716iLHYIWyL._AC_SL1500_.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Coffee Squishy',
      shortDescription: 'Puppacino to the rescue',
      longDescription:
        'Fluffer shibe boof, thicc. Aqua doggo doing me a frighten big ol pupper borking doggo doge smol big ol pupper, wow very biscit sub woofer pupperino borkf. Bork heckin angery woofer boofers woofer porgo borkf h*ck, dat tungg tho fat boi heckin good boys boofers. Long bois doing me a frighten what a nice floof boofers thicc, you are doing me the shock doggo he made many woofs. Wrinkler such treat stop it fren woofer waggy wags, heckin angery woofer heckin good boys and girls. Sub woofer aqua doggo puggo clouds heck very jealous pupper wow such tempt, wrinkler noodle horse ur givin me a spook shoob. Blop long doggo much ruin diet smol shoob, much ruin diet thicc.',
      price: 30.0,
      quantity: 9,
      imageURL:
        'https://staticx.ibncollege.com/wcsstore/ExtendedSitesCatalogAssetStore/828_100_20_338768746_NI/images/LARGEIMAGE_1718974.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Rope With Squeaking Ball',
      shortDescription:
        'Get ready for some high-flying fun with the Rope with Squeaking Ball Dog Toy',
      longDescription:
        'With an extra-loud squeaker inside the rubber ball, it’s ready to turn up the noisy excitement your dog goes wild for. The built-in rope handle makes it perfect for playing games with your pooch, and for tossing fast and far for on-demand fetch. The combination of the polyester rope and thermoplastic rubber ball creates a tempting toy that’s suitable for plenty of daily supervised play. Toss it and let the games begin—it’s a great way to help keep your dog active, healthy and entertained.',
      price: 6.0,
      quantity: 0,
      imageURL:
        'https://manofmany.com/wp-content/uploads/2020/10/Chewy-frisco-rope-squeaking-ball-dog-toy.jpg',
      tags: [tug.id, chase.id]
    },
    {
      name: 'Cong Chew Toy',
      shortDescription: 'Blep ur givin me a spook most angery pupper',
      longDescription:
        'Long bois boofers doggo noodle horse doge length boy, wow very biscit long woofer very jealous pupper. Doing me a frighten big ol pupper shoob the neighborhood pupper many pats maximum borkdrive, length boy noodle horse pupperino wow very biscit. Heckin angery woofer borking doggo clouds borkdrive ur givin me a spook extremely cuuuuuute, borkdrive thicc sub woofer extremely cuuuuuute. waggy wags adorable doggo. Lotsa pats shibe waggy wags vvv pupper you are doin me a concern, bork very jealous pupper wow very biscit. Much ruin diet what a nice floof puggorino, wow such tempt.',
      price: 4.0,
      quantity: 200,
      imageURL: 'https://www.caninecompany.com/images/Product/medium/767.jpg',
      tags: [chew.id, brainTeaser.id]
    },
    {
      name: 'Yummy Stick Toy',
      shortDescription: 'Yum yum puppies love sticks',
      longDescription:
        'Snoot wow such tempt stop it fren puggorino big ol much ruin diet blep, corgo heckin good boys and girls very taste wow yapper. extremely cuuuuuute heckin. Pats bork borkdrive blop shoober smol length boy, long woofer shibe wrinkler puggorino. Much ruin diet h*ck length boy aqua doggo wow very biscit heckin, clouds pupper doggorino. Adorable doggo clouds wrinkler shoob borkdrive, aqua doggo smol borking doggo with a long snoot for pats.',
      price: 4.0,
      quantity: 200,
      imageURL:
        'https://target.scene7.com/is/image/Target/GUEST_8915ece1-554c-4fe9-ac2a-4759c563b054?wid=488&hei=488&fmt=pjpeg',
      tags: [chew.id, fetch.id]
    },
    {
      name: 'Hipster Flirt',
      shortDescription: 'Flirt pole fun',
      longDescription:
        'Multipurpose interactive toy that will give both you and your pup a workout. Build impulse control, harness prey drive, or just have fun!',
      price: 150.0,
      quantity: 75,
      imageURL:
        'https://cdn.shopify.com/s/files/1/1392/6117/products/painted-peonies-natural-dog-squeaky-toy-from-the-foggy-dog-779560_550x550.jpg?v=1597091079',
      tags: [chase.id, brainTeaser.id, tug.id]
    },
    {
      name: 'Party Panda Squishy',
      shortDescription: "Party Panda. 'Nuf said",
      longDescription:
        "Get your dog, we're having a party. This colorful stuffed toy is the perfect squish that HOLDS MORE SQUISHES! Tuck the included smol squishes into Party Panda's belly, and watch your pup have a blast as they hunt for all those squished squishes.",
      price: 45.5,
      quantity: 75,
      imageURL: 'https://images.kiwico.com/products/3010/6267.png',
      tags: [squishy.id, destroy.id, brainTeaser.id]
    },
    {
      name: 'SnuffleMuffleGus',
      shortDescription: 'Snuffle mat with a twist',
      longDescription:
        'Help your furry friend get their sniff on with this fully washable and intensely durable snuffle mat. Hide food and/or treats in the nooks and crannies created by the fabric folds, or tuck extra juicy yums into the waxed canvas pocket. Let your pup sniff and snuffle their way to happy!',
      price: 75.5,
      quantity: 200,
      imageURL:
        'https://images-na.ssl-images-amazon.com/images/I/41Hw2-h%2BjhL._AC_.jpg',
      tags: [feed.id, brainTeaser.id]
    },
    {
      name: 'Blue Bone',
      shortDescription: 'Tastiest bone in the whole world',
      longDescription:
        'Every dog plays differently and, since not all toys are created equal, it’s always best to keep a close watch on your pup in case things get ruff. Supervised play will help toys last longer and most importantly keep your pal safe. No dog toy is truly indestructible, so always remove the toy from playtime if pieces begin to break off.',
      price: 5.0,
      quantity: 200,
      imageURL:
        'https://petsittersireland.com/shop/wp-content/uploads/2017/11/Blue-Dog-Bone.jpg',
      tags: [chew.id, destroy.id]
    },
    {
      name: 'Tasty T-Rex',
      shortDescription: 'Life finds a way',
      longDescription:
        'God creates dinosaurs, God destroys dinosaurs, God creates Man, Man kills God, Man brings back dinosaurs. Dinosaurs eat Man, Woman inherits the Earth.',
      price: 25.0,
      quantity: 200,
      imageURL:
        'https://cdn.shopify.com/s/files/1/0155/7069/8288/products/toy-rope-trex-taupe_1800x1800.jpg?v=1557288368',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Triangle Tug',
      shortDescription:
        'The Triangle Tug boasts two shapes, two textures, and is perfect for tug-of-war.',
      longDescription:
        'Tennis ball dog house take it yorkshire terrier play dead dog bone, stand yorkshire terrier chihuahua Morkie milk bone peanut butter. Leave it german shephard vet bell paw squirrel leave it sit peanut butter, stand doberman pinscher fetch vet Morkie. Paw Morkie dachshund poodle great dance pit bull peanut butter. Bulldog speak come poodle bark dachshund, shake dog house pomsky german shephard greyhound Morkie. Play dead leash puppy bark squeak toy puppy, dog bowl sit paw leash speak.',
      price: 17.0,
      quantity: 200,
      imageURL:
        'https://cdn.shopify.com/s/files/1/0011/7532/2687/products/WO_VM_Studio_PDP_ToysTriangleTug_Blush_01_Web_1000x1250_crop_center.jpg?v=1611153169',
      tags: [destroy.id, tug.id]
    },
    {
      name: 'Rope Tug of War',
      shortDescription:
        'Lab dog toy come play dead leap greyhound squeak toy leave it collar squirrel, release pomeranian dachshund pomsky.',
      longDescription:
        'Paw leash stay dog toy come peanut butter squirrel. Take it catch maltese paw doberman pinscher dachshund doberman pinscher. Chihuahua dog catch pomeranian collar paw leave it. Shih tzu english mastiff sit pug growl, pug shake dog house spin leave it k9 roll over. Leap husky leash, dog house greyhound chase tail vet shake chow chow dog toy stay sit.',
      price: 10.0,
      quantity: 200,
      imageURL:
        'https://mazerwholesale.com/wp-content/uploads/2020/01/tug-of-war-rope-toy-1.jpg',
      tags: [fetch.id, tug.id]
    },
    {
      name: 'Squeaker Fetch Stick',
      shortDescription: 'Much run, love squeak, very toy.',
      longDescription:
        'Play dead heel release, pomsky chew toy chew toy boxer dog toy chase tail catch jump lap dog english mastiff. Poodle st bernard dog house pug pomeranian leap bell pomsky. Greyhound german shephard spin dog bowl growl k9 bite come poodle. Milk bone puppy lab play dead, catch bark stay shih tzu tennis ball speak great dance pit bull heel.',
      price: 25.0,
      quantity: 200,
      imageURL:
        'https://assets.petco.com/petco/image/upload/f_auto,q_auto/857122-center-1',
      tags: [fetch.id, tug.id]
    },
    {
      name: 'Cong Rocking Red Frisbee',
      shortDescription:
        'The best soft rubber disc on the market. Made with durable KONG Classic rubber, the Flyer won’t hurt a dogs teeth during fun games.',
      longDescription:
        'Growl stay english mastiff poodle chew toy heel k9 spin release. Squirrel stand Morkie pug english mastiff Morkie pit bull boxer catch. Husky tug stand st bernard puppies squirrel dog toy, great dance play dead dog bowl leash doberman pinscher squeak toy. Leave it beagle beagle chew toy sit collar, boxer sit bulldog shake greyhound. ',
      price: 12.0,
      quantity: 200,
      imageURL:
        'https://img.chewy.com/is/image/catalog/59177_MAIN._AC_SL1500_V1534451918_.jpg',
      tags: [chew.id, fetch.id]
    },
    {
      name: 'Señor Guac and Chips',
      shortDescription: 'Yo soy un perro, y quiero muchas comida de Mexico',
      longDescription:
        'Pit bull chow chow lap dog great dance chase tail growl, bite kibbles catch come. Spin tail bark kibbles, puppies shake poodle milk bone collar heel. Vet dog milk bone catch chew toy greyhound dog bowl.',
      price: 25.0,
      quantity: 200,
      imageURL:
        'https://img.chewy.com/is/image/catalog/213830_Main._AC_SL1500_V1590069366_.jpg?_ga=2.222685659.132669977.1614813524-1125916086.1614813524&_gac=1.15923908.1614899932.CjwKCAiAp4KCBhB6EiwAxRxbpMDC2lDoAOmMagT5I7ssEgNWQw6D7eLFa-Q_5Gi1v7_xumblKropwhoCvfsQAvD_BwE',
      tags: [brainTeaser.id, squishy.id]
    },
    {
      name: 'Crazy Treat Puzzle',
      shortDescription:
        'Beat boredom with this innovative treat-dispensing toy.',
      longDescription:
        'Morkie Morkie leash jump, tug lap dog tug tennis ball greyhound pomeranian peanut butter tail leave it. Squirrel leave it husky pomeranian dog bowl tail down. Husky roll over release leave it peanut butter bulldog, speak play dead bulldog leash stay play dead.',
      price: 30.0,
      quantity: 200,
      imageURL:
        'https://cdn.shopify.com/s/files/1/0271/3914/5772/products/OdinPowderBlue_294861f0-50ad-4f3c-83b3-080fc3e11e01_900x.png?v=1613592088',
      tags: [brainTeaser.id, feed.id]
    },
    {
      name: 'Bone Puzzle',
      shortDescription: 'Hungry hippos but for your dog!',
      longDescription:
        'Take it shih tzu leap pomeranian maltese, leash catch vet german shephard puppies release paw. Chow chow stay dachshund sit, squeak toy lab bring it tail spin chow chow chow chow. Release shake leave it dog bone lab speak st bernard. Pomeranian collar dog bone doberman pinscher Morkie boxer catch bell. Chase tail peanut butter leave it, dog bone chase tail dog come jump chihuahua speak jump.',
      price: 40.0,
      quantity: 200,
      imageURL:
        'https://www.rd.com/wp-content/uploads/2019/10/81fGi1uPUhL._AC_SL1500_-1-e1586371895905.jpg',
      tags: [brainTeaser.id, feed.id]
    },
    {
      name: 'Rope Knot Toy',
      shortDescription: 'Nautical dog toy for the seafaring pup',
      longDescription:
        'Bark growl doberman pinscher maltese maltese stand greyhound come. Sit pretty come come, leap growl collar k9 puppies kibbles rottweiler. Bulldog shih tzu take it heel milk bone husky paw lab pit bull, doberman pinscher collar stay spin.',
      price: 4.0,
      quantity: 200,
      imageURL:
        'https://i.pinimg.com/originals/b1/6a/4c/b16a4c2402353d19fd7c17847848f533.jpg',
      tags: [fetch.id, tug.id]
    },
    {
      name: 'Aloha Frog',
      shortDescription: 'Aloha Frog',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 44.46,
      quantity: 146,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/Aloha_Frog%20(2)-20190715175122-20190715175150-1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Aloha Gecko',
      shortDescription: 'Aloha Gecko',
      longDescription:
        'Bite yorkshire terrier chihuahua shih tzu lab bell shake. Paw beagle poodle pug beagle leap play dead. Lab down fetch pug speak leave it puppy stay.',
      price: 64.32,
      quantity: 185,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/Aloha_Gecko%20(2)-20190715175240-20190715175301-1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Aloha Turtle',
      shortDescription: 'Aloha Turtle',
      longDescription:
        'Bite yorkshire terrier chihuahua shih tzu lab bell shake. Paw beagle poodle pug beagle leap play dead. Lab down fetch pug speak leave it puppy stay.',
      price: 33.78,
      quantity: 79,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/Aloha_Turtle%20(2)-20190715175511-20190715175528-1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Ballistic Boomerang',
      shortDescription: 'Ballistic Boomerang',
      longDescription:
        'Shake bring it bark poodle leash squeak toy dog bowl english mastiff. Pomsky poodle down leap squeak toy milk bone maltese chase tail leash. Roll over st bernard collar dog toy pomeranian pug tennis ball.',
      price: 43.21,
      quantity: 133,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/LG1_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Ballistic Ears Mouse',
      shortDescription: 'Ballistic Ears Mouse',
      longDescription:
        'Shake bring it bark poodle leash squeak toy dog bowl english mastiff. Pomsky poodle down leap squeak toy milk bone maltese chase tail leash. Roll over st bernard collar dog toy pomeranian pug tennis ball.',
      price: 65.68,
      quantity: 111,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RE23_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Ballistic Ears Pig',
      shortDescription: 'Ballistic Ears Pig',
      longDescription:
        'Tail vet english mastiff dog bowl release bell collar, down jump squirrel greyhound. Leash Morkie sit pretty puppies sit stand puppies leash bite. Dog bone heel sit husky rottweiler, milk bone growl vet tug dachshund leap pug catch.',
      price: 83.23,
      quantity: 35,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RE24_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Ballistic Football',
      shortDescription: 'Ballistic Football',
      longDescription:
        'Catch bell dog bone peanut butter speak chew toy stay collar shake. Roll over rottweiler dachshund chew toy dog milk bone bite great dance bulldog. Bulldog sit great dance bite bite vet maltese puppies.',
      price: 23.52,
      quantity: 156,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/LF1_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Ballistic Tug',
      shortDescription: 'Ballistic Tug',
      longDescription:
        'Chase tail rottweiler pit bull maltese husky rottweiler dog lap dog. Squirrel stand lab dog bone catch beagle squeak toy paw chew toy. Lap dog fetch puppy bulldog chihuahua stay boxer take it roll over.',
      price: 70.05,
      quantity: 151,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/LU1_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Ballistic Woodland Bird',
      shortDescription: 'Ballistic Woodland Bird',
      longDescription:
        'Dog bone yorkshire terrier kibbles chihuahua maltese jump shih tzu. Great dance great dance stand stay chihuahua spin Morkie german shephard fetch. Tail dog house maltese pomeranian pit bull fetch puppies kibbles pomeranian.',
      price: 85.52,
      quantity: 6,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/LBH13_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Ballistic Woodland Rabbit',
      shortDescription: 'Ballistic Woodland Rabbit',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 14.34,
      quantity: 105,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/LBH12_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Ballistic Woodland Squirrel',
      shortDescription: 'Ballistic Woodland Squirrel',
      longDescription:
        'Lap dog bell roll over chase tail, rottweiler greyhound german shephard fetch catch milk bone fetch. K9 husky bite greyhound, lap dog lab jump dog bowl squeak toy spin speak dachshund. Chow chow bulldog bell bite leash husky dachshund tug.',
      price: 46.36,
      quantity: 137,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/LBH11_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Barnyard Knots Cow',
      shortDescription: 'Barnyard Knots Cow',
      longDescription:
        'Sit pomsky take it doberman pinscher pomeranian sit leash leap. Leave it chihuahua release jump paw leap, puppies Morkie paw bell dog bone. Morkie squeak toy catch tug, chew toy bulldog squirrel lab jump chase tail lap dog dog toy.',
      price: 28.03,
      quantity: 127,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/NKB13_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Belly Flops Lobster',
      shortDescription: 'Belly FlopsLobster',
      longDescription:
        'Tennis ball milk bone poodle, husky speak shih tzu dog release bark pug release. Boxer poodle dog toy kibbles bell heel pug greyhound doberman pinscher dog bowl, growl jump poodle fetch. Maltese shih tzu collar chow chow stand poodle growl tail.',
      price: 97.54,
      quantity: 193,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RBF1_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Belly Flops Octopus',
      shortDescription: 'Belly Flops Octopus',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 24.42,
      quantity: 116,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RBF2_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Belly Flops Starfish',
      shortDescription: 'Belly Flops Starfish',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 27.82,
      quantity: 121,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RBF3_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Belly Flops Stingray',
      shortDescription: 'Belly Flops Stingray',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 5.04,
      quantity: 39,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RBF4_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Bendeez Turtle',
      shortDescription: 'Bendeez Turtle',
      longDescription:
        'Shake bring it bark poodle leash squeak toy dog bowl english mastiff. Pomsky poodle down leap squeak toy milk bone maltese chase tail leash. Roll over st bernard collar dog toy pomeranian pug tennis ball.',
      price: 47.86,
      quantity: 71,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/BC34E%20(1)-20190319080453-20190319080505-1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Blue Woozles',
      shortDescription: 'Blue Woozles',
      longDescription:
        'Tail vet english mastiff dog bowl release bell collar, down jump squirrel greyhound. Leash Morkie sit pretty puppies sit stand puppies leash bite. Dog bone heel sit husky rottweiler, milk bone growl vet tug dachshund leap pug catch.',
      price: 83.2,
      quantity: 88,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RWZ21%20(1)-20190702212625-20190702215406-1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Clingerz Knots Cardinal',
      shortDescription: 'Clingerz Knots Cardinal',
      longDescription:
        'Dog bone yorkshire terrier kibbles chihuahua maltese jump shih tzu. Great dance great dance stand stay chihuahua spin Morkie german shephard fetch. Tail dog house maltese pomeranian pit bull fetch puppies kibbles pomeranian.',
      price: 54.72,
      quantity: 140,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/NKG13_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Clingerz Knots Koala',
      shortDescription: 'Clingerz Knots Koala',
      longDescription:
        'Sit pomsky take it doberman pinscher pomeranian sit leash leap. Leave it chihuahua release jump paw leap, puppies Morkie paw bell dog bone. Morkie squeak toy catch tug, chew toy bulldog squirrel lab jump chase tail lap dog dog toy.',
      price: 56.58,
      quantity: 42,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/NKG12_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Clingerz Knots Monkey',
      shortDescription: 'Clingerz Knots Monkey',
      longDescription:
        'Poodle sit pretty beagle husky speak fetch roll over. Bite bark bulldog squirrel leash chihuahua spin spin. Puppy leash kibbles stay roll over bark paw.',
      price: 94.77,
      quantity: 118,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/NKG11_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Comfort Flopzie Donkey',
      shortDescription: 'Comfort Flopzie Donkey',
      longDescription:
        'Bite yorkshire terrier chihuahua shih tzu lab bell shake. Paw beagle poodle pug beagle leap play dead. Lab down fetch pug speak leave it puppy stay.',
      price: 22.52,
      quantity: 193,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RLF11%20(1)-20181024164050-20181024164923-1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Comfort HedgeHug',
      shortDescription: 'Comfort HedgeHug',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 69.08,
      quantity: 129,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RCD11%20(1)-20190805211015-20190805211622-1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Comfort HedgeHug Puppy',
      shortDescription: 'Comfort HedgeHug Puppy',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 69.78,
      quantity: 147,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RCD25%20(1)-20190805213338-20190805213737-1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Comfort Jumbo',
      shortDescription: 'Comfort Jumbo',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 17.56,
      quantity: 55,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/Comforts_Jumbo_Duck_Purple-20190506210659-20190506210717-1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Comfort Kiddos Bear',
      shortDescription: 'Comfort Kiddos Bear',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 97.96,
      quantity: 128,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RLC31%20(1)-20190110163034-20190110163114-1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Comfort Kiddos Elephant',
      shortDescription: 'Comfort Kiddos Elephant',
      longDescription:
        'Bulldog beagle bulldog dachshund, chew toy speak doberman pinscher lab pug rottweiler spin. Tail stand play dead bite tail pomsky come. Leash great dance pomsky, play dead bark pit bull leave it beagle jump roll over.',
      price: 61.67,
      quantity: 143,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RLC13_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Comfort Kiddos Lion',
      shortDescription: 'Comfort Kiddos Lion',
      longDescription:
        'Chase tail rottweiler pit bull maltese husky rottweiler dog lap dog. Squirrel stand lab dog bone catch beagle squeak toy paw chew toy. Lap dog fetch puppy bulldog chihuahua stay boxer take it roll over.',
      price: 87.48,
      quantity: 105,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RLC14_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Comfort Kiddos Pig',
      shortDescription: 'Comfort Kiddos Pig',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 98.75,
      quantity: 23,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RLC15_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Comfort Snuggles',
      shortDescription: 'Comfort Snuggles',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 15.43,
      quantity: 65,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RCS1_1_1000x1000.jpg',
      tags: [squishy.id, destroy.id]
    },
    {
      name: 'Ballistic Tug',
      shortDescription: 'Ballistic Tug',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 19.72,
      quantity: 46,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/LU1_1_1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Beezles Ball Assorted',
      shortDescription: 'Beezles Ball Assorted',
      longDescription:
        'Bite yorkshire terrier chihuahua shih tzu lab bell shake. Paw beagle poodle pug beagle leap play dead. Lab down fetch pug speak leave it puppy stay.',
      price: 24.34,
      quantity: 121,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/BZB1%20(1)-20201014032531-20201014032555-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Beezles Bone Assorted',
      shortDescription: 'Beezles Bone Assorted',
      longDescription:
        'Bite yorkshire terrier chihuahua shih tzu lab bell shake. Paw beagle poodle pug beagle leap play dead. Lab down fetch pug speak leave it puppy stay.',
      price: 20.85,
      quantity: 115,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/BZN1%20(1)-20201014152134-20201014152147-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Beezles Stick Assorted',
      shortDescription: 'Beezles Stick Assorted',
      longDescription:
        'Shake bring it bark poodle leash squeak toy dog bowl english mastiff. Pomsky poodle down leap squeak toy milk bone maltese chase tail leash. Roll over st bernard collar dog toy pomeranian pug tennis ball.',
      price: 24.33,
      quantity: 54,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/BZS1%20(1)-20201014184236-20201014184253-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Beezles Tug Assorted',
      shortDescription: 'Beezles Tug Assorted',
      longDescription:
        'Shake bring it bark poodle leash squeak toy dog bowl english mastiff. Pomsky poodle down leap squeak toy milk bone maltese chase tail leash. Roll over st bernard collar dog toy pomeranian pug tennis ball.',
      price: 24.2,
      quantity: 95,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/BZT1%20(1)-20201014190851-20201014190921-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Clingerz Knots Cardinal',
      shortDescription: 'Clingerz Knots Cardinal',
      longDescription:
        'Tail vet english mastiff dog bowl release bell collar, down jump squirrel greyhound. Leash Morkie sit pretty puppies sit stand puppies leash bite. Dog bone heel sit husky rottweiler, milk bone growl vet tug dachshund leap pug catch.',
      price: 29.54,
      quantity: 196,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/NKG13_1_1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Clingerz Knots Koala',
      shortDescription: 'Clingerz Knots Koala',
      longDescription:
        'Catch bell dog bone peanut butter speak chew toy stay collar shake. Roll over rottweiler dachshund chew toy dog milk bone bite great dance bulldog. Bulldog sit great dance bite bite vet maltese puppies.',
      price: 8.93,
      quantity: 160,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/NKG12_1_1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Clingerz Knots Monkey',
      shortDescription: 'Clingerz Knots Monkey',
      longDescription:
        'Chase tail rottweiler pit bull maltese husky rottweiler dog lap dog. Squirrel stand lab dog bone catch beagle squeak toy paw chew toy. Lap dog fetch puppy bulldog chihuahua stay boxer take it roll over.',
      price: 8,
      quantity: 148,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/NKG11_1_1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Danglers Alligator',
      shortDescription: 'Danglers Alligator',
      longDescription:
        'Dog bone yorkshire terrier kibbles chihuahua maltese jump shih tzu. Great dance great dance stand stay chihuahua spin Morkie german shephard fetch. Tail dog house maltese pomeranian pit bull fetch puppies kibbles pomeranian.',
      price: 12.67,
      quantity: 99,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RD14_1_1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Danglers Giraffe',
      shortDescription: 'Danglers Giraffe',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 14.99,
      quantity: 31,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RD12_1_1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Dental with Rope',
      shortDescription: 'Dental with Rope',
      longDescription:
        'Lap dog bell roll over chase tail, rottweiler greyhound german shephard fetch catch milk bone fetch. K9 husky bite greyhound, lap dog lab jump dog bowl squeak toy spin speak dachshund. Chow chow bulldog bell bite leash husky dachshund tug.',
      price: 27.95,
      quantity: 21,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/DK2_1_1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Dots Daisies Bone',
      shortDescription: 'Dots Daisies Bone',
      longDescription:
        'Sit pomsky take it doberman pinscher pomeranian sit leash leap. Leave it chihuahua release jump paw leap, puppies Morkie paw bell dog bone. Morkie squeak toy catch tug, chew toy bulldog squirrel lab jump chase tail lap dog dog toy.',
      price: 8.77,
      quantity: 200,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/DTDA53%20(1)-20180906202501-20180906202548-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Dots Daisies Owl',
      shortDescription: 'Dots Daisies Owl',
      longDescription:
        'Tennis ball milk bone poodle, husky speak shih tzu dog release bark pug release. Boxer poodle dog toy kibbles bell heel pug greyhound doberman pinscher dog bowl, growl jump poodle fetch. Maltese shih tzu collar chow chow stand poodle growl tail.',
      price: 30.16,
      quantity: 67,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/DTDA52%20(1)-20180906201112-20180906201158-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Duets Tug and Squeak',
      shortDescription: 'Duets Tug and Squeak',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 30.81,
      quantity: 154,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/TD12_1_1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'FetchStix',
      shortDescription: 'FetchStix',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 9.74,
      quantity: 117,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/QSR13%20(1)-20190603182607-20190603182621-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'FetchStix with Rope',
      shortDescription: 'FetchStix with Rope',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 30.11,
      quantity: 157,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/QSR21%20(1)-20190603200439-20190603200449-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Illusions Figure Eight',
      shortDescription: 'Illusions Figure Eight',
      longDescription:
        'Shake bring it bark poodle leash squeak toy dog bowl english mastiff. Pomsky poodle down leap squeak toy milk bone maltese chase tail leash. Roll over st bernard collar dog toy pomeranian pug tennis ball.',
      price: 13.34,
      quantity: 153,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/Illusions_8-20190129171745-20190129171806-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Illusions Flower',
      shortDescription: 'Illusions Flower',
      longDescription:
        'Tail vet english mastiff dog bowl release bell collar, down jump squirrel greyhound. Leash Morkie sit pretty puppies sit stand puppies leash bite. Dog bone heel sit husky rottweiler, milk bone growl vet tug dachshund leap pug catch.',
      price: 31.62,
      quantity: 50,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PLU12%20(1)-20190228151917-20190228152053-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Jaxx Braided Tug',
      shortDescription: 'Jaxx Braided Tug',
      longDescription:
        'Dog bone yorkshire terrier kibbles chihuahua maltese jump shih tzu. Great dance great dance stand stay chihuahua spin Morkie german shephard fetch. Tail dog house maltese pomeranian pit bull fetch puppies kibbles pomeranian.',
      price: 29.33,
      quantity: 10,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PJ11%20(1)-20200107224632-20200107231847-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Jaxx Infinity Tug',
      shortDescription: 'Jaxx Infinity Tug',
      longDescription:
        'Sit pomsky take it doberman pinscher pomeranian sit leash leap. Leave it chihuahua release jump paw leap, puppies Morkie paw bell dog bone. Morkie squeak toy catch tug, chew toy bulldog squirrel lab jump chase tail lap dog dog toy.',
      price: 22.14,
      quantity: 82,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PJ12%20(1)-20200114071318-20200114071403-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Jaxx Triple Barrel',
      shortDescription: 'Jaxx Triple Barrel',
      longDescription:
        'Poodle sit pretty beagle husky speak fetch roll over. Bite bark bulldog squirrel leash chihuahua spin spin. Puppy leash kibbles stay roll over bark paw.',
      price: 24.67,
      quantity: 168,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PJ13%20(1)-20200114072833-20200114072918-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Jumbo Stretchezz Snow Leapord',
      shortDescription: 'Jumbo Stretchezz Snow Leapord',
      longDescription:
        'Bite yorkshire terrier chihuahua shih tzu lab bell shake. Paw beagle poodle pug beagle leap play dead. Lab down fetch pug speak leave it puppy stay.',
      price: 8.44,
      quantity: 199,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RSJX3_1_1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Jumbo Stretchezz Tiger',
      shortDescription: 'Jumbo Stretchezz Tiger',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 12.34,
      quantity: 122,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RSJX2_1_1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Knots Noodlez Double',
      shortDescription: 'Knots Noodlez Double',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 30.18,
      quantity: 119,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/NKN31%20(1)-20190312221136-20190312221157-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Knots Noodlez Single',
      shortDescription: 'Knots Noodlez Single',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 17.12,
      quantity: 23,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/NKN31%20(1)-20190312220057-20190312220107-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'KONG Extreme Ball w/Rope',
      shortDescription: 'KONG Extreme Ball w/Rope',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 29.69,
      quantity: 111,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/EB12%20(1)-20200409054327-20200409054338-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Occasions Birthday Balloon Blue',
      shortDescription: 'Occasions Birthday Balloon Blue',
      longDescription:
        'Bulldog beagle bulldog dachshund, chew toy speak doberman pinscher lab pug rottweiler spin. Tail stand play dead bite tail pomsky come. Leash great dance pomsky, play dead bark pit bull leave it beagle jump roll over.',
      price: 10.39,
      quantity: 75,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RCC13%20(1)-20180810213833-20180810214623-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Occasions Birthday Balloon Red',
      shortDescription: 'Occasions Birthday Balloon Red',
      longDescription:
        'Chase tail rottweiler pit bull maltese husky rottweiler dog lap dog. Squirrel stand lab dog bone catch beagle squeak toy paw chew toy. Lap dog fetch puppy bulldog chihuahua stay boxer take it roll over.',
      price: 25.06,
      quantity: 171,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RCC12%20(1)-20180810213932-20180810215232-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Ogee Stick Assorted',
      shortDescription: 'Ogee Stick Assorted',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 31.17,
      quantity: 14,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/SG1%20(1)%20Purple-20200114054915-20200114055054-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'ROGZ Crazy Scrubz',
      shortDescription: 'ROGZ Crazy Scrubz',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 26.75,
      quantity: 156,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RZSC023%20(1)-20190806210626-20190806211202-1000x1000.jpg',
      tags: [chew.id, tug.id]
    },
    {
      name: 'Goodie Ribbon',
      shortDescription: 'Goodie Ribbon',
      longDescription:
        'Catch bell dog bone peanut butter speak chew toy stay collar shake. Roll over rottweiler dachshund chew toy dog milk bone bite great dance bulldog. Bulldog sit great dance bite bite vet maltese puppies.',
      price: 31.82,
      quantity: 153,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/GoodieRibbon_OffPack-20190702213111-20190702213122-1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Gyro',
      shortDescription: 'Gyro',
      longDescription:
        'Chase tail rottweiler pit bull maltese husky rottweiler dog lap dog. Squirrel stand lab dog bone catch beagle squeak toy paw chew toy. Lap dog fetch puppy bulldog chihuahua stay boxer take it roll over.',
      price: 12.78,
      quantity: 51,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PGY1_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Hoopla Bone',
      shortDescription: 'Hoopla Bone',
      longDescription:
        'Dog bone yorkshire terrier kibbles chihuahua maltese jump shih tzu. Great dance great dance stand stay chihuahua spin Morkie german shephard fetch. Tail dog house maltese pomeranian pit bull fetch puppies kibbles pomeranian.',
      price: 27.43,
      quantity: 195,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PHP12_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Hopz Ball',
      shortDescription: 'Hopz Ball',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 8.25,
      quantity: 173,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PLB1%20(1)-20180905204256-20180905204642-1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Puppy Goodie Bone with Rope',
      shortDescription: 'Puppy Goodie Bone with Rope',
      longDescription:
        'Tail vet english mastiff dog bowl release bell collar, down jump squirrel greyhound. Leash Morkie sit pretty puppies sit stand puppies leash bite. Dog bone heel sit husky rottweiler, milk bone growl vet tug dachshund leap pug catch.',
      price: 16.11,
      quantity: 164,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/KP51%20(1)-20180829143800-20180829143857-1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Puppy Tires',
      shortDescription: 'Puppy Tires',
      longDescription:
        'Dog bone yorkshire terrier kibbles chihuahua maltese jump shih tzu. Great dance great dance stand stay chihuahua spin Morkie german shephard fetch. Tail dog house maltese pomeranian pit bull fetch puppies kibbles pomeranian.',
      price: 18.04,
      quantity: 97,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/KPT11_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Puzzlement; Beaver',
      shortDescription: 'Puzzlement; Beaver',
      longDescription:
        'Sit pomsky take it doberman pinscher pomeranian sit leash leap. Leave it chihuahua release jump paw leap, puppies Morkie paw bell dog bone. Morkie squeak toy catch tug, chew toy bulldog squirrel lab jump chase tail lap dog dog toy.',
      price: 14.8,
      quantity: 83,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RPZ11_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Quest Star Pod',
      shortDescription: 'Quest Star Pod',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 18.29,
      quantity: 11,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PE13_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Quest Wishbone',
      shortDescription: 'Quest Wishbone',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 27.62,
      quantity: 15,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PE34_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Replay',
      shortDescription: 'Replay',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 18.22,
      quantity: 155,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PRP3%20(1)-20180813164715-20180813172731-1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Small Animal',
      shortDescription: 'Small Animal',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 12.75,
      quantity: 195,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/FK3_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Spin It',
      shortDescription: 'Spin It',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 9.94,
      quantity: 179,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PTS1_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Stretchezz; Tugga Alligator',
      shortDescription: 'Stretchezz; Tugga Alligator',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 8.18,
      quantity: 8,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RSG11_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Tiltz',
      shortDescription: 'Tiltz',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 10.23,
      quantity: 35,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PTZ1_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Treat Duo',
      shortDescription: 'Treat Duo',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 21.12,
      quantity: 61,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PTU1_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Stretchezz; Tugga Alligator',
      shortDescription: 'Stretchezz; Tugga Alligator',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 20.84,
      quantity: 178,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RSG11_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Rewards Shell',
      shortDescription: 'Rewards Shell',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 28.34,
      quantity: 174,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/PEP11_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Rewards Tennis',
      shortDescription: 'Rewards Tennis',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 15.27,
      quantity: 96,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/Rewards_Tennis_Ball_treats%20(1)%20(1)-20190506192947-20190506192957-1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    },
    {
      name: 'Riptides Clam',
      shortDescription: 'Riptides Clam',
      longDescription:
        'Poodle german shephard pit bull chihuahua bite catch, play dead shake vet english mastiff dachshund greyhound rottweiler. Sit growl squeak toy bring it come poodle puppies pomeranian. Chow chow leave it poodle dog chow chow fetch pomsky.',
      price: 8.01,
      quantity: 36,
      imageURL:
        'https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/RPY11_1_1000x1000.jpg',
      tags: [chew.id, brainTeaser.id, feed.id]
    }
  ]

  const [avo, carrot, whiskey, coffee] = await Product.bulkCreate(products)
  const [whisk, jade, opie, theo, romeo] = await Pet.bulkCreate(pets)

  // const orders = [
  //   {
  //     productId: avo.id,
  //     userId: patricia.id,
  //     orderQuantity: 2
  //   },
  //   {
  //     productId: whiskey.id,
  //     userId: patricia.id,
  //     orderQuantity: 1
  //   },
  //   {
  //     productId: carrot.id,
  //     userId: kiko.id,
  //     orderQuantity: 4
  //   },
  //   {
  //     productId: coffee.id,
  //     userId: susan.id,
  //     orderQuantity: 1
  //   },

  // ]
  // const [ordersAdded] = await OrderProduct.bulkCreate(orders)

  console.log(`seeded users, products, and pets`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
