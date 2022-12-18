import { EncryptStorage } from 'encrypt-storage'

const encryptedLocalStorage = new EncryptStorage(
  import.meta.env.VITE_LOCALSTORAGE_SECRET_KEY,
  {
    prefix:'enc',
    encAlgorithm: 'AES',
    storageType: 'localStorage'
  }
);

export {
  encryptedLocalStorage
}
