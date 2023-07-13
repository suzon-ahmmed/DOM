const inputEl = document.querySelector("#input");
const infoEl = document.querySelector("#info-text");
const meaningContainerEl = document.querySelector(".meaning-container");
const wordTitleEl = document.querySelector("#word-title");
const wordMeaningEl = document.querySelector("#word-meaning");
const audioEl = document.querySelector(".meaning-container audio");

async function fatchAPI(word) {
  try {
    infoEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    infoEl.innerText = `Searching the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    infoEl.style.display = "none";
    meaningContainerEl.style.display = "block";
    if (result?.title) {
      wordTitleEl.innerText = word;
      wordMeaningEl.innerText = "N/A";
      audioEl.style.display = "none";
    } else {
      wordTitleEl.innerText = result[0].word;
      wordMeaningEl.innerText =
        result[0]?.meanings[0]?.definitions[0]?.definition;
      {
        result[0]?.phonetics[0]?.audio
          ? ((audioEl.style.display = "block"),
            (audioEl.src = result[0]?.phonetics[0]?.audio))
          : (audioEl.style.display = "none");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fatchAPI(e.target.value);
  }
});
