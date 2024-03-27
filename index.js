function superbowlWin(record) {
  let found = record.find((recordItem) => {
    if (recordItem.year && recordItem.result === "W") {
      return recordItem;
    }
  });
  return found ? found.year : undefined;
}
