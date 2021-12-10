function readValue(){
    var a = []; //created an empty string for article name
    var b = []; //created an empty string for description name
    var c = []; //created an empty string for author name */
    console.log(localStorage.getItem("Article_Name"));
    console.log(localStorage.getItem("Description"));
    console.log(localStorage.getItem("Author_Name"));
    if(localStorage.getItem("Article_Name") != null){
        a = JSON.parse(localStorage.getItem("Article_Name"));
    }
    if(localStorage.getItem("Description") != null){
        b = JSON.parse(localStorage.getItem("Description"));
    }
    if(localStorage.getItem("Author_Name") != null){
        c = JSON.parse(localStorage.getItem("Author_Name"));
    }
    var name = document.getElementById("name").value;
    var descript = document.getElementById("description").value;
    var a_auth = document.getElementById("Aname").value;
    a.push(name)
    b.push(descript)
    c.push(a_auth)
    // store all values in localstorage
    window.localStorage.setItem("Article_Name", JSON.stringify(a));
    window.localStorage.setItem("Description", JSON.stringify(b));
    window.localStorage.setItem("Author_Name", JSON.stringify(c));

    alert("Successfully added Article")
    window.location.href="index.html"
    
}