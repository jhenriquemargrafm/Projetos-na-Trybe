const api = require('../src/mockApi');

jest.mock('../src/mockApi');

const object = {
  gender: 'male',
  name: { title: 'Mr', first: 'Antônio', last: 'Britto' },
  location: {
    street: { number: '', name: '' },
    city: '',
    state: '',
    country: 'Brazil',
    postcode: '',
    coordinates: { latitude: '', longitude: '' },
    timezone: {
      offset: '',
      description: '',
    },
  },
  email: 'tunico@bol.com.br',
  login: {
    uuid: '',
    username: 'tunicao123',
    password: '1234567890',
    salt: '',
    md5: '',
    sha1: '',
    sha256: '',
  },
  dob: { date: '', age: '' },
  registered: { date: '', age: '' },
  phone: '',
  cell: '',
  id: { name: '', value: '' },
  picture: {
    large: '',
    medium: '',
    thumbnail: '',
  },
  nat: '',
};

describe('verifica o usuário', () => {
  api.fetchURL = jest.spyOn(api, 'fetchURL').mockResolvedValue(object);

  test('verifica se o usuário é o tunico', async () => (
    api.fetchURL()
      .then((user) => {
        expect(user.gender).toEqual('male');
        expect(user.name.first).toEqual('Antônio');
        expect(user.name.last).toEqual('Britto');
        expect(user.location.country).toEqual('Brazil');
        expect(user.email).toEqual('tunico@bol.com.br');
        expect(user.login.username).toEqual('tunicao123');
        expect(user.login.password).toEqual('1234567890');
      })
  ));
});
