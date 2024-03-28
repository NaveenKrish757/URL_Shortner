let submitbtn = document.getElementById("sub-btn");
let copybtn = document.getElementById("copy-btn");
submitbtn.addEventListener("click", collect);

async function collect() {
  const longUrl = document.getElementById("longurl").value;

  const valid = isValidHttpUrl(longUrl);

  function isValidHttpUrl(string) {
    try {
      const newUrl = new URL(string);
      return newUrl.protocol === "http:" || newUrl.protocol === "https:";
    } catch (err) {
      return false;
    }
  }

  let content = document.getElementsByClassName("content");
  const apiURL = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
    longUrl
  )}`;
  if (valid) {
    await fetch(apiURL)
      .then((res) => res.text())
      .then((tiny) => {
        content[0].value = tiny;
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while shortening URL");
      });
  } else {
    alert("Please Enter Valid URL....");
    return;
  }
}
copybtn.addEventListener("click", () => {
  let content = document.getElementsByClassName("content");

  if (!content[0].value == "") {
    alert(`Link Copied...${content[0].value}`);
  } else {
    alert(`Please Enter Link First....`);
  }
});
