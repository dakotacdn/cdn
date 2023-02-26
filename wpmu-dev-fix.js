document.querySelectorAll("tr.gf-locking").forEach(e => {
if(e.innerText.includes("Contact (draft)")) e.style.display = "none"
})
