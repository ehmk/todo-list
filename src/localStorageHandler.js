export function storeObject(object) {
  localStorage.setItem(object.key, JSON.stringify(object));
}

export function getTaskObject(taskObject) {
  // Get task
}

export function getProjectObject() {
  // Get project
}

export function removeObjectFromStorage(key) {
  localStorage.removeItem(key);
}

export function generateUniqueKey(prefix) {
  let key = `${prefix}_${generateUniqueId(5)}`;
  if (isObjectInLocalStorage(key)) {
    generateUniqueId(prefix, generateUniqueId(5));
  } else {
    return key;
  }
}

function generateUniqueId(length) {
  const alphanumericChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
    result += alphanumericChars.charAt(randomIndex);
  }
  return result;
}

function isObjectInLocalStorage(key) {
  return localStorage.getItem(key) !== null;
}
