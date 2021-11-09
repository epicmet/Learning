const idGenerator = () => {
  return Math.round(Date.now() * Math.random());
};

exports.idGenerator = idGenerator;
