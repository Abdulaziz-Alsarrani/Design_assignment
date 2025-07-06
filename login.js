document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const identity = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const captcha = document.getElementById("fakeRobotCheck").checked;

    if (!/^\d{10}$/.test(identity)) {
      alert("رقم الهوية يجب أن يكون مكونًا من 10 أرقام فقط.");
      return;
    }

    if (password.length < 8) {
      alert("كلمة المرور يجب أن تتكون من 8 أحرف على الأقل.");
      return;
    }

    if (!captcha) {
      alert("يرجى التأكيد أنك لست روبوت.");
      return;
    }

    // Everything is valid
    window.location.href = "home.html"; 
  });
});
