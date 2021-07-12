const paginate = (followers) => {
  const itemsPerPage = 10;

  const pages = Math.ceil(followers.length / itemsPerPage);

  //   const newFollowers = [];
  //   for (let i = 0; i < followers.length; i += itemsPerPage) {
  //     const newArr = followers.slice(i, i + itemsPerPage);
  //     newFollowers.push(newArr);
  //   }

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};

export default paginate;
