export const chunkDataAccordingToDataPerPage = (data, dataPerPage = 20) => {
  const quotient = Math.trunc(data.length / dataPerPage);
  const reminder = data.length % dataPerPage;
  const numberOfPages = reminder === 0 ? quotient : quotient + 1;
  const chunkedData = [];
  for (let i = 0; i < data.length; i++) {
    chunkedData.push(data.slice(i, i + dataPerPage));
    i += dataPerPage - 1;
  }

  return { numberOfPages, chunkedData };
};
