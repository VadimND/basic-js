const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name; 
  let newArr = [];

  if (Array.isArray(members)) {
    for(let i = 0; i < members.length; i++) {      
      if (typeof members[i] === 'string') {
        members[i] = members[i].trim();
        newArr.push((members[i][0]).toUpperCase());        
      }
    }
  } else {
    name = false;
  }
  name = newArr.sort().join('');
  return name;
};
