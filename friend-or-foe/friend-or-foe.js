// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript


function friend(friends) {
  return friends.filter((item) => {
    if (item.length === 4) {
      return item;
    }
  });
}

module.exports = friend;
