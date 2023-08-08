const STORAGE_TOKEN = "RXLCNTQEEUKVMM15Z3NQDLENEB6XNQRXMGLA5TH9";
const STORAGE_URL = "https://remote-storage.developerakademie.org/item";

/**
 * This function is used to transfer data(value) with a specified key to the server 
 * 
 * @param {string} key 
 * @param {string} value 
 * @returns {JSON}
 */
async function setItem(key, value) {
  const payload = { key, value, token: STORAGE_TOKEN };
  return fetch(STORAGE_URL, {
    method: "POST",
    body: JSON.stringify(payload),
  }).then((res) => res.json());
}

/**
 * This function gets the data (specified by a key) from the server
 * 
 * @param {string} key 
 * @returns {JSON}
 */
async function getItem(key) {
  const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      // Verbesserter code
      if (res.data) {
        return res.data.value;
      }
      throw `Could not find data with key "${key}".`;
    });
}
