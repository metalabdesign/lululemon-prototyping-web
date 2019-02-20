
export const himifier = (gender) => {
  switch (gender) {
    case 'male':
      return "him";
    case 'female':
      return 'her';
    default:
      return 'them'
  }
}

export const hisifier = (gender) => {
  switch (gender) {
    case 'male':
      return "his";
    case 'female':
      return 'her';
    default:
      return 'their'
  } 
}
