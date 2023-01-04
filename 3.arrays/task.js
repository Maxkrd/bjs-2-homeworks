function compareArrays(arr1, arr2) {
  let compare = arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]);
  return compare; 
  }

function getUsersNamesInAgeRange(users, gender) {
  let result = (users.filter(user => user.gender === gender));
  if (result.length > 0) {
    result = result.reduce((r, i) => r + i.age, 0) / (result.length);
    return result;
  } else {
    return 0;
  }
}
