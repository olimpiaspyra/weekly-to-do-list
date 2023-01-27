const searchContains = (first, second) => {
  if (first.toLowerCase().includes(second.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

export default searchContains;
