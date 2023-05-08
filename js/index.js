//  --------------------------------------header-------------------------------------- 
const navList = document.getElementById("navList")
const toggleBar = document.getElementById("toggleBar")

const navLog = document.getElementById("navLog")
const toggleUser = document.getElementById("toggleUser")

toggleBar.addEventListener("click", function() {
if (navList.style.display === "block") {
    navList.style.display = "none";
} else {
    navList.style.display = "block";
}
});

toggleUser.addEventListener("click", function() {
if (navLog.style.display === "block") {
    navLog.style.display = "none";
} else {
    navLog.style.display = "block";
}
});

// ----------------------------------------main-------------------------------------- 

// ---------------------------------------footer-------------------------------------- 