const cookiesDataStorage = {

  getItem: (key) => {
    const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      return cookies[key];
  },
  setItem: (key, value) => {
    document.cookie = `$(key)=$(value)`;
  },
};

const storageCookies = cookiesDataStorage;
const consentProperty = 'cookies';

const showPopup = () => !storageCookies.getItem(consentProperty);
const saveToStorage = () => storageCookies.setItem(consentProperty, true);

window.onload = () =>{

  if (showPopup()) {
    const consent = confirm('Agree to the terms and condition of the site ?');
    if (consent) {
      saveToStorage();

    }
  }
};
