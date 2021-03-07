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
      quantity: 200,
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
      quantity: 200,
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
      quantity: 200,
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
      quantity: 200,
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
      quantity: 200,
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
      quantity: 200,
      imageURL:
        'https://img.chewy.com/is/image/catalog/147098_Main._AC_SL1500_V1539366433_.jpg',
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
