const config = {
  color: {
    text: 'rgba(30, 30, 30, 1)',
    accent: 'rgba(0, 0, 233, 1)',
    white: 'rgba(255, 255, 255, 1)',
  },
  font: {
    default: 'Roboto, sans-serif',
  },
};

export const theme = {
  button: {
    fontFamily: config.font.default,
    backgroundColor: {
      default: config.color.accent,
      hover: config.color.white,
    },
    color: {
      default: config.color.white,
      hover: config.color.accent,
    },
  },
  text: {
    fontFamily: config.font.default,
    color: config.color.text,
  },
  header: {
    fontFamily: config.font.default,
    color: config.color.text,
  },
  link: {
    fontFamily: config.font.default,
    color: config.color.accent,
  },
  methods: {
    calculateGap: (gap: number): string => {
      if (gap === 0) return '0';
      return `${2 ** (gap - 1) / 10}rem`;
    },
  },
};
