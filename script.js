let submitbtn = document.getElementById("sub-btn");
let copybtn = document.getElementById("copy-btn");
submitbtn.addEventListener("click", collect);
async function collect() {
  const longUrl = document.getElementById("longurl").value;
  let content = document.getElementsByClassName("content");
  const apiURL = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
    longUrl
  )}`;
  try {
    await fetch(apiURL)
      .then((res) => res.text())
      .then((tiny) => {
        if (!content[0].value == "") {
          content[0].value = tiny;
        } else {
          alert(`Please Enter Link First....`);
        }
      });
  } catch (error) {}
}

copybtn.addEventListener("click", () => {
  let content = document.getElementsByClassName("content");

  if (!content[0].value == "") {
    alert(`Link Copied...${content[0].value}`);
  } else {
    alert(`Please Enter Link First....`);
  }
});
