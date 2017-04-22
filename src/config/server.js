import config from 'lego-starter-kit/config/server';
export default config.extend({
  client: require('./client').default, // eslint-disable-line
  remoteConfig: true,
  port: process.env.PORT || 8080,
  url: process.env.URL || 'http://localhost:3000',

  db: {
    //uri: process.env.DB || 'mongodb://lsk-example1:lsk-example1-pass@publicdb.mgbeta.ru:27000/lsk-example1',
    uri: process.env.DB || 'mongodb://localhost:27017/teamwork',
  },
  jwt: {
    secret: 's3cret_123456',
  },
  auth: {
    socials: require('./socials.js'),
  },
  mailer: {
    transport: {
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'makushatnik@yandex.ru',
        pass: 'DqPDBbPBlz5A8zwb2M',
      },
    },
    options: {
      from: '"clever-team!" <makushatnik@yandex.ru>',
      subject: 'clever-team',
    },
  },
  ws: {},
  upload: {
    // @TODO: @andruxa externalPath (absolute)
    path: 'storage',
    // exteralPath: '/storage',
    allowGuest: false,
    // allowSetFilename: true,
    maxSize: '50mb',
    // prefix: 'file_',
    // postfix: '',
    // formats: ['png', 'jpg', 'jpeg', 'gif'],
    mimetypes: ['image/jpeg', 'image/jpg', 'image/gif', 'image/png'],
  },
})
.extendEnv();
