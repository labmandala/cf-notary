// Load a book from disk
function loadBook(filename, displayName) {
    let currentBook = "";
    let url = "books/" + filename;

    // reset UI (reset display to beginning state when clicking from book to book)
    document.getElementById("fileName").innerHTML = displayName;
    document.getElementById("searchstat").innerHTML = "";
    document.getElementById("keyword").value = "";

    // create a server a request to load our book
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true); // initialize request, run asynchronous event on different thread, avoid locking up UI
    xhr.send(); // initiate network traffic

    xhr.onreadystatechange = function () { // load from file complete at 4, successful http request at 200
        if (xhr.readyState == 4 && xhr.status == 200) {
            currentBook = xhr.responseText;

            // loaded file from disk & streamed back through http to website dynamically
            document.getElementById("fileContent").innerHTML = currentBook;

            var elmnt = document.getElementById("fileContent");
            elmnt.scrollTop = 0; // scrolls viewer to top of doc

        }
    };
}

