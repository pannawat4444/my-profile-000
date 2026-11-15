// ==========================================================================
// งานที่ 8: Interactive Portfolio - เพิ่มความสามารถให้เว็บไซต์ Portfolio ด้วย JavaScript
// ผู้พัฒนา: นายปาณวัฐ รักรอดจิต
// ==========================================================================

// --------------------------------------------------------------------------
// ส่วนที่ 1: ระบบข้อความต้อนรับผู้เข้าชม (Personalized Welcome)
// --------------------------------------------------------------------------
// 1.1 ใช้ prompt() รับชื่อผู้เข้าชมเว็บไซต์
// 1.2 ใช้ตัวแปรจัดเก็บชื่อผู้เข้าชม
let visitorName = prompt("กรุณากรอกชื่อของคุณเพื่อเข้าชมเว็บไซต์ Portfolio:");

// ดึง Element ที่ใช้แสดงผลข้อความต้อนรับบนหน้าเว็บไซต์
const welcomeText = document.getElementById("welcomeText");
const changeNameBtn = document.getElementById("changeNameBtn");

// 1.3 ฟังก์ชันแสดงข้อความต้อนรับบนหน้าเว็บไซต์
function displayWelcomeMessage(name) {
  if (welcomeText) {
    if (name && name.trim() !== "") {
      // แสดงข้อความต้อนรับ เช่น "ยินดีต้อนรับคุณ BALL เข้าสู่เว็บไซต์ Portfolio ของฉัน"
      welcomeText.textContent = `ยินดีต้อนรับคุณ ${name.trim()} เข้าสู่เว็บไซต์ Portfolio ของฉัน`;
    } else {
      // กรณีผู้ใช้กด Cancel หรือไม่ได้กรอกชื่อ ให้มีข้อความต้อนรับเริ่มต้น
      welcomeText.textContent = "ยินดีต้อนรับคุณผู้เยี่ยมชม เข้าสู่เว็บไซต์ Portfolio ของฉัน";
    }
  }
}

// เรียกใช้เพื่อแสดงผลบนหน้าเว็บไซต์ทันที
displayWelcomeMessage(visitorName);

// เพิ่มความสามารถให้ผู้ใช้กดปุ่มแก้ไขชื่อเพื่อทดสอบ prompt() ได้อีกครั้ง
if (changeNameBtn) {
  changeNameBtn.addEventListener("click", function () {
    let newName = prompt("กรุณากรอกชื่อของคุณใหม่:");
    if (newName !== null) {
      visitorName = newName;
      displayWelcomeMessage(visitorName);
    }
  });
}


// --------------------------------------------------------------------------
// ส่วนที่ 2: ระบบประมาณการค่าบริการพัฒนาเว็บไซต์ (Website Cost Estimator)
// --------------------------------------------------------------------------
// 2.1 กำหนดราคาค่าพัฒนาเว็บไซต์หน้าละ 500 บาท
const PRICE_PER_PAGE = 500;

// ดึง Element สำหรับปุ่มและการแสดงผลบนหน้าเว็บไซต์
const calculateCostBtn = document.getElementById("calculateCostBtn");
const pageCountResult = document.getElementById("pageCountResult");
const totalCostResult = document.getElementById("totalCostResult");
const costSummaryText = document.getElementById("costSummaryText");

// ฟังก์ชันคำนวณและแสดงผลค่าบริการ
function calculateWebsiteCost() {
  // 2.2 ใช้ prompt() รับจำนวนหน้าที่ต้องการ
  let inputPages = prompt("กรุณากรอกจำนวนหน้าที่ต้องการพัฒนาเว็บไซต์ (คิดราคาหน้าละ 500 บาท):");

  // กรณีผู้ใช้กด Cancel ไม่ต้องประมวลผลต่อ
  if (inputPages === null) {
    return;
  }

  // 2.3 ใช้ Number() แปลงข้อมูลเป็นตัวเลข
  let pageCount = Number(inputPages);

  // ตรวจสอบความถูกต้องของข้อมูล (ต้องเป็นตัวเลขที่ถูกต้องและมากกว่า 0)
  if (isNaN(pageCount) || pageCount <= 0 || !Number.isInteger(pageCount)) {
    alert("⚠️ ข้อผิดพลาด: กรุณากรอกจำนวนหน้าเป็นตัวเลขจำนวนเต็มที่มากกว่า 0 ครับ");
    return;
  }

  // 2.4 คำนวณค่าบริการทั้งหมด (จำนวนหน้า × 500)
  let totalCost = pageCount * PRICE_PER_PAGE;

  // 2.5 แสดงจำนวนหน้าและค่าบริการรวมบนหน้าเว็บไซต์
  if (pageCountResult) {
    pageCountResult.textContent = `${pageCount.toLocaleString()} หน้า`;
  }
  if (totalCostResult) {
    totalCostResult.textContent = `${totalCost.toLocaleString()} บาท`;
  }
  if (costSummaryText) {
    costSummaryText.innerHTML = `✅ <strong>สรุปรายการ:</strong> พัฒนาเว็บไซต์จำนวน <strong>${pageCount} หน้า</strong> (อัตราหน้าละ 500 บาท) ค่าบริการรวมทั้งสิ้น <span class="summary-total-highlight">${totalCost.toLocaleString()} บาท</span>`;
  }
}

// ผูกเหตุการณ์เมื่อผู้ใช้คลิกปุ่มประมาณการค่าบริการ
if (calculateCostBtn) {
  calculateCostBtn.addEventListener("click", calculateWebsiteCost);
}


// --------------------------------------------------------------------------
// รักษาการทำงานของปุ่มทักทายเดิม (Greeting Button)
// --------------------------------------------------------------------------
const greetingBtn = document.getElementById("greetingBtn");
const greetingMessage = document.getElementById("greetingMessage");

if (greetingBtn && greetingMessage) {
  greetingBtn.addEventListener("click", function () {
    greetingMessage.textContent = "สวัสดีครับ ยินดีที่ได้รู้จัก!";
  });
}
