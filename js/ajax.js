//  What is AJAX
//      Asynchronous JavaScript and XML
//  What is XML
/*      Extensible Markup Language
    What is the difference between XML and HTML
        XML is for storing and transporting data
        HTML is for displaying data
    What is Asynchronous vs Synchronous?
        Asynchronous, the work is independent of other processes
        Synchronous, the work depends on other processes
*/

document.getElementById("swsubmit").addEventListener("click", getSw);

function getSw() {
  console.log("it works");
  let swinfo = document.getElementById("swInfo").value;
  console.log(swinfo);

  /* 
        Step 1
            The following object allows us to make
            requests and get back ddata. In short, this
            is our data retriever.
    */

  let xhttp = new XMLHttpRequest();

  //Step 2
  xhttp.onreadystatechange = function() {
    console.log(xhttp.readyState);
    console.log(xhttp.status);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.responseText);

      /* 
            The ready state is going to tell us about the
            state of our request
                0=request not initialized
                1=Server connection established
                2=Request received
                3=processing request
                4=request finished and response is ready
            
            status codes:
                100=informational
                200=ok
                300=redirect
                400=client side error
                500=server side error

            Most API's return JSON
            What is JSON?
                JavaScript Object Notation
            What is an API?
                Application Programming Interface
            What does an API do?
                It allows applications to talk to each other
            What is the difference between JSON and XML?
                JSON is easier to read by humans
                JSON is easier to parse than XML

*/
      let sw = JSON.parse(xhttp.responseText);
      // console.log(sw)
      // console.log(typeof sw)
      // console.log(typeof xhttp.responseText)
      console.log(xhttp.getAllResponseHeaders());
      setValues(sw);
      getJoke();
    }
  };

  //Step 3
  //Create a connection
  //open(http method, url)
  //open(http method, url, asynchronous)
  xhttp.open("GET", "https://swapi.co/api/people/" + swinfo, true);
//   xhttp.setRequestHeader("Host", "hostUrl");
  //Step 4
  //To send the request
  xhttp.send();
}

function setValues(obj) {
  let swName = document.getElementById("swName");
  swName.innerHTML = obj.name;
}

function getJoke() {
  console.log("it works");
  let swinfo = document.getElementById("swInfo").value;
  console.log(swinfo);

  /* 
        Step 1
            The following object allows us to make
            requests and get back ddata. In short, this
            is our data retriever.
    */

  let xhttp = new XMLHttpRequest();

  //Step 2
  xhttp.onreadystatechange = function() {
    console.log(xhttp.readyState);
    console.log(xhttp.status);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.responseText);

      /* 
            The ready state is going to tell us about the
            state of our request
                0=request not initialized
                1=Server connection established
                2=Request received
                3=processing request
                4=request finished and response is ready
            
            status codes:
                100=informational
                200=ok
                300=redirect
                400=client side error
                500=server side error

            Most API's return JSON
            What is JSON?
                JavaScript Object Notation
            What is an API?
                Application Programming Interface
            What does an API do?
                It allows applications to talk to each other
            What is the difference between JSON and XML?
                JSON is easier to read by humans
                JSON is easier to parse than XML

*/
      let sw = JSON.parse(xhttp.responseText);
      // console.log(sw)
      // console.log(typeof sw)
      // console.log(typeof xhttp.responseText)
      setJoke(sw);
    }
  };

  //Step 3
  //Create a connection
  //open(http method, url)
  xhttp.open("GET", "http://api.icndb.com/jokes/random", true);

  //Step 4
  //To send the request
  xhttp.send();
}

function setJoke(obj) {
  let swName = document.getElementById("joke");
  swName.innerHTML = obj.value.joke;
}
