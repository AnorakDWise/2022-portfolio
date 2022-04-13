function navSwitch() {
  var x = document.getElementById("navMenu");
  if (
    x.className ===
    "flex justify-evenly items-center h-96 w-32 bg-stone-900 rounded-r-2xl drop-shadow-defaultShadow -translate-x-16"
  ) {
    x.className =
      "flex justify-evenly items-center h-96 w-32 bg-stone-900 rounded-r-2xl drop-shadow-defaultShadow -translate-x-0";
  } else {
    x.className =
      "flex justify-evenly items-center h-96 w-32 bg-stone-900 rounded-r-2xl drop-shadow-defaultShadow -translate-x-16";
  }
}
