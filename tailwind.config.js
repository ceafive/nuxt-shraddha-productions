module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        appDarkGrey: '#1a1a1a',
        appGreen: '#00b13b',
        appGrey: '#dbdad4',
        appYellow: '#fffd13',
        appTextGray: '#878577',
        appTextMedGray: '#b2b0a1',
        appLightGray: '#bdbdbd'
      },
      fontFamily: {
        body: ['Adieu'],
        display: ['FoundersGrotesk'],
        mainheader: ['Antiga']
      },
      spacing: {
        '1/4': '25%',
        '1/2': '50%',
        '3/5': '60%',
        '4/5': '80%',
        '50vh': '50vh',
        '65vh': '65vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '-96': '-24rem',
        '120': '30rem',
        '128': '34rem'
      },
      inset: {
        '1': '10px',
        '1/2': '50%'
      },
      fontSize: {
        xxs: '.5rem',
        '7vw': '7vw',
        '8vw': '8vw',
        '9vw': '9vw',
        '10vw': '10vw',
        '11vw': '11vw',
        '12vw': '12vw',
        '13vw': '13vw',
        '14vw': '14vw',
        '15vw': '15vw',
        '16vw': '16vw',
        '17vw': '17vw',
        '18vw': '18vw',
        '19vw': '19vw',
        '20vw': '20vw'
      },
      screens: {
        xxs: '320px'
      },
      opacity: {
        '80': '.8',
        '90': '.9',
        '95': '.95'
      },
      zIndex: {
        '-1': '-1'
      },
      container: {
        center: true
      }
    }
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
};
