document.addEventListener("DOMContentLoaded", function () {
    const unlockBtn = document.getElementById("unlock-btn");
    const passInput = document.getElementById("pass-input");
    const passwordScreen = document.getElementById("password-screen");
    const mainContent = document.getElementById("main-content");
    const errorMsg = document.getElementById("error-msg");
    const togglePasswordBtn = document.getElementById("toggle-password");

    // الباسورد المطلوب
    const validPasswords = ["25/9/2025", "25-9-2025", "25092025", "25/09/2025"];

    // وظيفة زر العين (إظهار وإخفاء الباسورد)
    togglePasswordBtn.addEventListener("click", function () {
        if (passInput.type === "password") {
            passInput.type = "text";
            togglePasswordBtn.textContent = "🙈"; // تغيير شكل الأيقونة للإخفاء
        } else {
            passInput.type = "password";
            togglePasswordBtn.textContent = "👁️"; // إرجاع شكل العين
        }
    });

    // منطق فتح المفاجأة
    unlockBtn.addEventListener("click", function () {
        const enteredValue = passInput.value.trim();

        if (validPasswords.includes(enteredValue)) {
            passwordScreen.style.opacity = "0";
            passwordScreen.style.transition = "opacity 0.6s ease";
            
            setTimeout(() => {
                passwordScreen.style.display = "none";
                mainContent.classList.remove("hidden");
            }, 600);
        } else {
            errorMsg.style.display = "block";
            passInput.style.borderColor = "#ff3333";
            
            let lockBox = document.querySelector(".lock-box");
            lockBox.style.transform = "translateX(10px)";
            setTimeout(() => lockBox.style.transform = "translateX(-10px)", 100);
            setTimeout(() => lockBox.style.transform = "translateX(0)", 200);
        }
    });

    // الضغط على Enter من لوحة المفاتيح
    passInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            unlockBtn.click();
        }
    });
});