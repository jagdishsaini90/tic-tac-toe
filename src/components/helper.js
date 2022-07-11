export const CheckCombination = (values) => {
  const { one, two, three, four, five, six, seven, eight, nine } = values;

  if (
    (one === "O" && two === "O" && three === "O") ||
    (four === "O" && five === "O" && six === "O") ||
    (seven === "O" && eight === "O" && nine === "O") ||
    (one === "O" && five === "O" && nine === "O") ||
    (three === "O" && five === "O" && seven === "O") ||
    (one === "O" && four === "O" && seven === "O") ||
    (two === "O" && five === "O" && eight === "O") ||
    (three === "O" && six === "O" && nine === "O")
  )
    return 1;

  if (
    (one === "X" && two === "X" && three === "X") ||
    (four === "X" && five === "X" && six === "X") ||
    (seven === "X" && eight === "X" && nine === "X") ||
    (one === "X" && five === "X" && nine === "X") ||
    (three === "X" && five === "X" && seven === "X") ||
    (one === "X" && four === "X" && seven === "X") ||
    (two === "X" && five === "X" && eight === "X") ||
    (three === "X" && six === "X" && nine === "X")
  )
    return 2;
};
