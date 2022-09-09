const list = document.getElementById('context');

const dataUi = (element) => {
  list.innerHTML += `
                    <div class="items">
                        <p>${element.user}</p>
                        <p>:</p>
                        <p>${element.score}</p>
                    </div>`;
};

export default dataUi;