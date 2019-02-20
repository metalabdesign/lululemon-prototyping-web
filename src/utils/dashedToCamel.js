
export const dashedToCamel = (myString) => {
  return myString.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })
};

export const dashedToCamelObject = (obj) => {
  return Object.keys(obj)
    .reduce((newObject, key) => {
      newObject[dashedToCamel(key)] = obj[key]
      return newObject;
    }, {})
}
