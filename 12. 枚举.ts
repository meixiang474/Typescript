enum Status {
  OFFLine,
  ONLINE,
  DELETED,
}

function getResult(status: Status) {
  if (status === Status.OFFLine) {
    return 'offline';
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted';
  } else {
    return 'error';
  }
}

const result = getResult(0);
console.log(result);
