function submitFeedback()
  {
    let dialog = confirm("Are you sure you want to sent in feedback?");
    if (dialog === true)
    { 
      alert("Thank you for your feedback!");
    } 

    document.getElementById("reviewBox").value = "";
  }