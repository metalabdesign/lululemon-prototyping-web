

export const camelToDashed = (myString) => myString.replace(/([a-z][A-Z])/g, function (g) { return g[0] + '-' + g[1].toLowerCase() });

export const camelToDashedObject = (obj) => {
  return Object.keys(obj)
    .reduce((newObject, key) => newObject[camelToDashed(key)] = obj[key]);
}