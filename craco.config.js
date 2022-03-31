const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@router': path.resolve(__dirname, 'src/router/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};
