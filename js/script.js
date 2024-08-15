function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const usia = document.getElementById("usia").value;
  const resultTitle = document.getElementById("resulttitle");
  const resultBMI = document.getElementById("resultbmi");
  const resultText = document.getElementById("resulttext");

  if (weight > 0 && height > 0) {
    const heightm = height / 100;
    const bmi = weight / (heightm * heightm);
    let title = "";
    let text = "";

    if (bmi <= 18.5) {
      title = "Kekurangan Berat Badan";
      text = "Anda memiliki berat badan kurang";
    } else if (bmi > 18.5 && bmi <= 24.9) {
      title = "Berat Badan Normal";
      text = "Anda memiliki berat badan normal";
    } else if (bmi >= 25 && bmi < 30) {
      title = "Berat Badan Lebih";
      text = "Anda memiliki berat badan berlebih";
    } else if (bmi >= 30) {
      title = "Obesitas";
      text = "Anda memiliki obesitas";
    }

    resultTitle.innerHTML = title;
    resultBMI.innerHTML = bmi.toFixed(1);
    resultText.innerHTML = text;
  } else {
    resultTitle.innerHTML = "Error";
    resultBMI.innerHTML = "";
    resultText.innerHTML = "Masukkan input secara benar";
  }
}

function resetForm() {
  document.getElementById("weight").value = ""; // Reset input berat badan
  document.getElementById("height").value = ""; // Reset input tinggi badan
  document.getElementById("usia").value = ""; // reset input usia
  document.getElementById("resulttitle").innerHTML = ""; // Reset judul hasil
  document.getElementById("resultbmi").innerHTML = ""; // Reset nilai BMI
  document.getElementById("resulttext").innerHTML = ""; // Reset teks hasil
}
