import Typography from 'typography';

const typography = new Typography({ 
    baseFontSize: '16px',
    googleFonts: [
        {
          name: 'Maven Pro',
          styles: [
            '400',
          ],
        },
        {
          name: 'Merriweather',
          styles: [
            '400',
            '400i',
            '700',
            '700i',
          ],
        },
      ],
});

export default typography;