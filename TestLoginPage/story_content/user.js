function ExecuteScript(strId) {
  switch (strId) {
    case "5pklsmZnsH9":
      Script1();
      break;
  }
}

window.InitExecuteScripts = function () {
  var player = GetPlayer();
  var object = player.object;
  var addToTimeline = player.addToTimeline;
  var setVar = player.SetVar;
  var getVar = player.GetVar;
  window.Script1 = function () {
    // Create the input field element
    const usernameField = document.createElement("input");

    // Set attributes for the input field (optional)
    usernameField.setAttribute("type", "text"); // Set the type to text
    usernameField.setAttribute("placeholder", "Enter your Username"); // Add a placeholder
    usernameField.setAttribute("id", "Username"); // Give it a unique ID
    usernameField.setAttribute("style", "position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)");

    // Create the input field element
    const passwordField = document.createElement("input");

    // Set attributes for the input field (optional)
    passwordField.setAttribute("type", "text"); // Set the type to text
    passwordField.setAttribute("placeholder", "Enter your Password"); // Add a placeholder
    passwordField.setAttribute("id", "Password"); // Give it a unique ID
    passwordField.setAttribute("style", "position: absolute; left: 50%; top: 55%; transform: translate(-50%, 0%)");
    console.log("hello");
    //Create submit button

    const submitButton = createSubmitButton();
    function createSubmitButton() {
      const submitButton = document.createElement("button");

      submitButton.innerHTML = "Submit";
      submitButton.setAttribute("id", "submitButton");
      submitButton.setAttribute("style", "position: absolute; left: 50%; top: 60%; transform: translate(-50%, 0%); width: 150px; height: 40px");

      return submitButton;
    }

    // Create the click event listener for the button
    function submitButtonClickEventListener(submitButton) {
      submitButton.addEventListener("click", function () {
        console.log("Hello");
      });
    }

    submitButtonClickEventListener(submitButton);

    // Append the input field to the body
    document.body.appendChild(usernameField);
    document.body.appendChild(passwordField);
    document.body.appendChild(submitButton);

    console.log("elements added");
  };
};
