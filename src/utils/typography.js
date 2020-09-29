import Typography from 'typography'

const typography = new Typography({

  includeNormalize: true,

  baseFontSize: "15px",
  baseLineHeight: 1.666,

  scaleRatio: 3,

  googleFonts: [
    {
      name: 'Work Sans',
      styles: ['400', '600'],
    },
    {
      name: 'Kumnh Sans',
      styles: ['400', '400i', '700&display=swap'],
    },
  ],

  headerFontFamily: ["Work Sans", "sans-serif"],
  headerColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 400,

  bodyFontFamily: ["Kumnh Sans", "sans-serif"],
  bodyColor: 'hsla(0,0%,0%,0.8)',
  bodyWeight: 400,
  boldWeight: 700,

  blockMarginBottom: '1.5rem'
})

export default typography