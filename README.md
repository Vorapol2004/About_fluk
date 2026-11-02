# Panuwit Anananusit (Fluke) - Portfolio Website
### Physics Materials & Medical Instrumentation | KMUTT (มจธ.)

เว็บไซต์ Portfolio ส่วนตัวธีม **ขาว-กรมท่า (Navy & White)** ออกแบบมาเพื่อแสดงข้อมูลประวัติการศึกษา ทักษะความเชี่ยวชาญ โครงงานวิจัย การฝึกงาน และกิจกรรมเพื่อสังคม พร้อมระบบเปิดดูรายละเอียดโปรเจกต์แบบ Interactive และปุ่มติดต่อส่งอีเมลตรงไปยัง `flukpanuwit1412@gmail.com`

---

## 🎨 จุดเด่นของโปรเจกต์ (Features)

1. **ธีมขาว-กรมท่า (Deep Navy & Crisp White)**: สไตล์วิศวกรรมและการแพทย์ ดูสะอาดตา เป็นมืออาชีพ พร้อมฟอนต์ Google Fonts (Prompt & Inter)
2. **Interactive Project Showcase**:
   - ต้นแบบ Pulse Oximeter (SpO2) ด้วยแสงสะท้อนและ Arduino
   - โครงงาน Thermistor & Op-Amp Temperature System
   - กิจกรรมบำรุงรักษาเชิงป้องกันเครื่องมือแพทย์ (Preventive Maintenance)
   - การฝึกอบรมวิชาการระดับนานาชาติ ณ มหาวิทยาลัยเทียนจิน ประเทศจีน (Vacuum & Thin Film)
   - การฝึกอบรมเครื่องมือแพทย์ ณ มหาวิทยาลัยคริสเตียน
   - สามารถคลิกดูรายละเอียดเชิงลึก (Modal Popup) และกรองหมวดหมู่ได้
3. **Portfolio & Resume View**:
   - กดปุ่ม **"ดู Portfolio บนเว็บ"** เพื่อเปิดหน้าต่างสรุปประวัติและผลงานทั้งหมดในสไตล์เอกสารแบบอินเทอร์แอคทีฟ
   - มีปุ่ม **"พิมพ์ / Save PDF"** ให้ผู้เข้าชมสามารถดาวน์โหลดหรือพิมพ์เก็บไว้ได้ทันที
4. **ช่องทางติดต่อและส่งอีเมล**:
   - ส่งตรงถึง `flukpanuwit1412@gmail.com`
   - มีแบบฟอร์มร่างอีเมล พร้อมปุ่มเปิดส่งทาง Mail Client หรือเปิด Gmail บนเว็บบราวเซอร์ทันที
   - ปุ่มคลิกคัดลอกอีเมล (`flukpanuwit1412@gmail.com`), เบอร์โทร (`095-481-1903`), LINE (`fluk141248`) และลิงก์ Instagram (`@panuwitfluk`) พร้อม Toast แจ้งเตือน
5. **พร้อม Deploy บน Vercel 100%**:
   - มีไฟล์ `vercel.json` ตั้งค่า Route สำหรับ Single Page Application ไว้อย่างถูกต้อง
   - Build Output เป็น Static HTML/CSS/JS ทำงานได้เร็วและเสถียรที่สุด

---

## 💻 การทดสอบและรันบนเครื่องของคุณ (Local Development)

```bash
# 1. ติดตั้ง dependencies (หากยังไม่ได้ติดตั้ง)
npm install

# 2. รันโหมด Development สำหรับเปิดดูบนเครื่อง
npm run dev

# 3. ทดสอบ Build ไฟล์สำหรับ Production
npm run build

# 4. ทดสอบพรีวิวผลลัพธ์ Build
npm run preview
```

---

## 🚀 วิธีการ Deploy ขึ้น Vercel (2 วิธีง่ายๆ)

### วิธีที่ 1: Deploy ผ่าน GitHub (แนะนำที่สุด - อัปเดตเว็บให้อัตโนมัติทุกครั้งที่แก้โค้ด)
1. นำโฟลเดอร์นี้ขึ้น Git Repository ของคุณ:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
2. เข้าสู่เว็บไซต์ [vercel.com](https://vercel.com) แล้วล็อกอินด้วย GitHub
3. กดปุ่ม **"Add New..."** -> **"Project"**
4. เลือก Repository ที่คุณเพิ่ง Push ขึ้นไป แล้วกด **"Import"**
5. ในหน้าตั้งค่า Vercel จะตรวจพบ Vite อัตโนมัติ:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. กด **"Deploy"** รอประมาณ 30 วินาที เว็บไซต์ของคุณจะออนไลน์ทันที พร้อมลิงก์ `.vercel.app` ฟรี!

---

### วิธีที่ 2: Deploy ผ่าน Vercel CLI (ตรงจากเครื่องคอมพิวเตอร์)
1. ติดตั้ง Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. สั่ง Deploy จากโฟลเดอร์โปรเจกต์:
   ```bash
   vercel
   ```
3. ทำตามคำแนะนำบนหน้าจอ ล็อกอินและกด Enter เพื่อยืนยันการ Deploy

---

## ✏️ การแก้ไขหรือเพิ่มข้อมูลในอนาคต

ข้อมูลทั้งหมด (ประวัติ, เบอร์โทร, โครงงาน, กิจกรรม, ทักษะ) ถูกแยกไว้ในไฟล์เดียวเพื่อให้แก้ไขได้ง่ายที่สุดที่:
👉 `src/data/portfolioData.ts`
