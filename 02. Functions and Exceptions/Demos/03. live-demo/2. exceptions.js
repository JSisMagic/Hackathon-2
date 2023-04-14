function main() {
  console.log("Main function starting ...");

  executeSomeWebRequest();

  console.log("Finish main function!");
}

function executeSomeWebRequest() {
  console.log("Executing some web request ...");

  sendRequest(0, "dog", "http://google.com");

  console.log("Finish executing web request!");
}

function sendRequest(hasNetwork, data, webAddress) {
  console.log("Sending request ...");

  if (hasNetwork > 0) {
    console.log("Sending request to " + webAddress + " with data: " + data);
  }
  // let's have an exceptional situaltion - A1 has no internet!

  console.log("Finish sending!");

}

main();
