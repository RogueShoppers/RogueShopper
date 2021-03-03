'use strict'

const db = require('../server/db')
const {User, Product, Pet, Tag} = require('../server/db/models')

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
      isAdmin: false
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
    }
  ]

  const tags = [
    'chase',
    'chew',
    'destroy',
    'brain teaser',
    'fetch',
    'tug',
    'squishy'
  ]

  const [
    chase,
    chew,
    destroy,
    brainTeaser,
    fetch,
    tug,
    squishy
  ] = await Tag.bulkCreate(tags, {returning: ['id']})

  const products = [
    {
      name: 'avocado squishy',
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
      name: 'carrot squishy',
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
      name: 'tuna squishy',
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
      name: 'whiskey squishy',
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
      name: 'coffee squishy',
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
      name: 'rope with squeaking ball',
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
      name: 'cong chew toy',
      shortDescription: 'Blep ur givin me a spook most angery pupper',
      longDescription:
        'Long bois boofers doggo noodle horse doge length boy, wow very biscit long woofer very jealous pupper. Doing me a frighten big ol pupper shoob the neighborhood pupper many pats maximum borkdrive, length boy noodle horse pupperino wow very biscit. Heckin angery woofer borking doggo clouds borkdrive ur givin me a spook extremely cuuuuuute, borkdrive thicc sub woofer extremely cuuuuuute. waggy wags adorable doggo. Lotsa pats shibe waggy wags vvv pupper you are doin me a concern, bork very jealous pupper wow very biscit. Much ruin diet what a nice floof puggorino, wow such tempt.',
      price: 4.0,
      quantity: 200,
      imageURL: 'https://www.caninecompany.com/images/Product/medium/767.jpg',
      tags: [chew.id, brainTeaser.id]
    },
    {
      name: 'yummy stick toy',
      shortDescription: 'Yum yum puppies love sticks',
      longDescription:
        'Snoot wow such tempt stop it fren puggorino big ol much ruin diet blep, corgo heckin good boys and girls very taste wow yapper. extremely cuuuuuute heckin. Pats bork borkdrive blop shoober smol length boy, long woofer shibe wrinkler puggorino. Much ruin diet h*ck length boy aqua doggo wow very biscit heckin, clouds pupper doggorino. Adorable doggo clouds wrinkler shoob borkdrive, aqua doggo smol borking doggo with a long snoot for pats.',
      price: 4.0,
      quantity: 200,
      imageURL:
        'https://target.scene7.com/is/image/Target/GUEST_8915ece1-554c-4fe9-ac2a-4759c563b054?wid=488&hei=488&fmt=pjpeg',
      tags: [chew.id, fetch.id]
    }
  ]

  const [productsAdded] = await Product.bulkCreate(products)
  const [petsAdded] = await Pet.bulkCreate(pets)

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
