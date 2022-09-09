const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KCwfICVDsBiC/scores/';

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};

export default getData;