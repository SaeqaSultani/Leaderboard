
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KtKCwfICVDsBiC/scores/';


const postData = async (username,score) => {
    const body = JSON.stringify({ user: username, score: score });
    console.log(body);
    const response = await fetch(url, {
      method: 'POST',
      body: body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data.result;
  };

  export default postData;