module.exports = rawRequest => {
  const [method, path] = rawRequest.split(' ');
  console.log(path);
};
