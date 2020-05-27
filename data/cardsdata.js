import { v4 as uuidv4 } from 'uuid';

export const videocards = [
  {
    id: uuidv4(),
    slotMainheader: `<h1>SHRADDHA</h1>
                    <h1>PRODUCTIONS</h1>
                    `,
    slotSubheader: ` <h1>
                        Watch Our <br />
                        Creative <br />
                        Collaborations
                      </h1>
                  `,
    video: () => require(`@/assets/videos/TheCarnivalCollection.mp4`)
  },
  {
    id: uuidv4(),
    mainheader: 'A CANVAS <br /> FOR <br /> CULTURAL HUES',
    mainheaderColor: 'hover:text-appYellow',
    subheader: 'Bandhani/Diva/Grace/Navika/Baroque',
    video: () => require(`@/assets/videos/AmerFort.mp4`)
  },
  {
    id: uuidv4(),
    mainheader: 'SPECIAL ART VIDEO',
    video: () => require(`@/assets/videos/ASpecialArt.mp4`)
  }
];

export const collectioncards = [
  {
    id: uuidv4(),
    animationName: 'zoom-in',
    mainheader: 'bandhini',
    subtext:
      'A fierce warrior, <br/>  A bold and colorful stance, <br/> Capturing expressiveness, <br/> Working with folds <br/> and smoothened creases, <br/> Keeping her strong approach steady, <br/> In the face of adversity',
    backgroundPosition: '70%'
  },
  {
    id: uuidv4(),
    animationName: 'flip-up',
    mainheader: 'diva',
    subtext:
      'Sharp cuts, <br/>  deep eyes, <br/>  Each angle caught on film, <br/>  With colors in abundance, <br/> Showcasing beauty within',
    backgroundPosition: '20%'
  },
  {
    id: uuidv4(),
    animationName: 'flip-down',
    mainheader: 'grace',
    subtext:
      'Warmth and Subtlety, <br/>  The beauty in Stillness, <br/>  The awe in Simplicity, <br/> Highlighting revere <br/> in craftsmanship',
    backgroundPosition: '70%'
  },
  {
    id: uuidv4(),
    animationName: 'flip-left',
    mainheader: 'navika',
    subtext:
      'The royalty of Cloth, <br/>  The versatility of Fabrics, <br/>  The intricacy of Threads, <br/>  Stillness of Art, <br/>  Providing dream like Visuals',
    backgroundPosition: '30%'
  },
  {
    id: uuidv4(),
    animationName: 'flip-right',
    mainheader: 'baroque',
    subtext:
      'The look in her eyes, <br/>  The bounce in her step, <br/>  All captured with a ‘simple’ click of a button, <br/> Which takes hours to set',
    backgroundPosition: '60%'
  }
];

export const infocards = [
  {
    id: uuidv4(),

    animationName: 'zoom-in',
    mainheader:
      'STORIES<span class="absolute font-body text-appYellow text-xxs md:text-lg xl:text-2xl pl-1 pt-1 md:pt-3 xl:pt-5">BEYOND <br/> BORDERS</span>',
    mainheaderColor: 'hover:text-appYellow',
    routeLink: '/gaaba',
    image: () => require(`@/assets/images/gaaba.jpg`)
  },
  {
    id: uuidv4(),

    animationName: 'fade',
    mainheader: 'ANCIENT CRAFTSMANSHIP <br/> WITH A TWIST',
    subheader: 'A SEQUENCE OF STATEMENTS',
    mainheaderColor: 'text-appYellow hover:text-white',
    routeLink: '/campaign',
    video: () => require('@/assets/videos/Morocco.mp4')
  },
  {
    id: uuidv4(),

    animationName: 'fade-down',
    mainheader: 'OUR CAPTURED MOMENTS <br/> AND INSPIRING STORIES',
    mainheaderColor: 'hover:text-appYellow',
    routeLink: '/press-media',
    image: () => require(`@/assets/images/press-media.jpg`)
  },
  {
    id: uuidv4(),
    animationName: 'zoom-out',
    mainheader: 'WE ARE SHRADDHA <br/> WE SPEAK THROUGH FRAMES',
    mainheaderColor: 'text-appYellow hover:text-white',
    routeLink: '/about',
    image: () => require(`@/assets/images/about.jpg`)
  }
];
