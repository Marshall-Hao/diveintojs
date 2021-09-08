import marshall, {
  eva as friend,
  printUser2,
  printUser1 as ppp,
} from "./user.js"; //! if don't set script to module, browser doesnt know what import mean
//! inside {}, use as to rename
console.log(marshall, friend);
printUser2(friend);
ppp(marshall);
