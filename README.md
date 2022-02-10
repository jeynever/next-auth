วิธีการใช้งาน

สร้าง nextjs app $npx create-next-app@latest
ติดตั้ง $npm install next-auth

ทดสอบเรียก https://www.mecallapi.com/ User Authorization / LOGIN (JWT): api/login

Method: POST
URL: https://www.mecallapi.com/api/login
Body:

{
"username": "karn.yong@mecallapi.com",
"password": "mecallapi"
}

สร้าง pages/api/auth/[...nextauth].js

แก้ไขโครงสร้างหน้า \_app.js
แก้ไขหน้า index.js
