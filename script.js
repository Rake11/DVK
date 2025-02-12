
      const signupForm = document.getElementById("signup-form");
      const loginForm = document.getElementById("login-form");
      const switchToLogin = document.getElementById("switch-to-login");
      const switchToSignup = document.getElementById("switch-to-signup");

      switchToLogin.addEventListener("click", (e) => {
          e.preventDefault();
          signupForm.style.display = "none";
          loginForm.style.display = "block";
      });


      switchToSignup.addEventListener("click", (e) => {
          e.preventDefault();
          loginForm.style.display = "none";
          signupForm.style.display = "block";
      });


    // fruits.forEach(element => {
    //     let card=document.createElement("div")
    // card.id="card"
    //   card.innerHTML=`
    //   <img src='${element.image}' width="300"/>
    //   <h1>${element.name}</h1>`
    //   document.getElementById("container") .appendChild(card)
    // });


   