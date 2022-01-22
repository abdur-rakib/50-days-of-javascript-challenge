function getMiddle(s) {
    const length = s.length;
    if (length % 2 === 0) return s[length / 2 - 1] + s[length / 2];
    return s[Math.ceil(length / 2) - 1];
  }