const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tKCwfICVDsBiC/scores/';

const postData = async (username, score) => {
  const body = JSON.stringify({ user: username, score });
  const response = await fetch(url, {
    method: 'POST',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data.result;
};

export default postData;