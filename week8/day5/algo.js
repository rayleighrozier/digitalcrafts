const clipping1 = "Lorem, dolor, magna";
const clipping2 = "GIVE US 1 MILLION DOLLAR";
const clipping3 = "i solved it muahahaha consectetur";
const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const findClippings = (clipping, magazine) => {
  magArray = magazine.toLowerCase().replaceAll(",", "").split(" ");
  //   console.log(magArray);
  clipArray = clipping.toLowerCase().replaceAll(",", "").split(" ");
  //   console.log(clipArray);

  for (clip of clipArray) {
    if (magArray.includes(clip)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(findClippings(clipping1, magazine));
console.log(findClippings(clipping2, magazine));
console.log(findClippings(clipping3, magazine));
