export function storeObject(object) {
  console.log('Storing: ' + object.key);
  localStorage.setItem(object.key, JSON.stringify(object));
}

export function removeObjectFromStorage(key) {
  const JSONObject = localStorage.getItem(key);
  const parsedObject = JSON.parse(JSONObject);
  localStorage.removeItem(key);
  console.log('Removed: ' + parsedObject.key);
}

export function generateUniqueKey(prefix) {
  let key = `${prefix}_${generateUniqueId(5)}`;
  if (isObjectInLocalStorage(key)) {
    generateUniqueId(prefix, generateUniqueId(5));
  } else {
    return key;
  }
}

export function updateProjectTodoList(projectKey, todoKey) {
  console.log('Updating >> ' + projectKey + ' : ' + todoKey);
  const projectObject = JSON.parse(localStorage.getItem(projectKey));
  localStorage.removeItem(projectKey);
  projectObject.tasks.push(todoKey);
  storeObject(projectObject);
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
