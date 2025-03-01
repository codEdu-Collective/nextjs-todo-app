const formatDate = (isoString) => {
  return new Date(isoString).toLocaleString('en-US');
};

export default formatDate;
