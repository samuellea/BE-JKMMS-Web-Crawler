const getAllHrefs = htmlString => {
  const myRegexp = /<a href="(.*?)">/g;
  const match = htmlString.match(myRegexp);
  const slicedHrefs = match.map(string => {
    return string.slice(9, string.length - 2);
  });
  return slicedHrefs;
};

getAllHrefs();

module.exports = getAllHrefs;
