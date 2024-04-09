# simple-helpdesk

cd helpdesk
npm install
npm start

เริ่มอธิบาย
1. ใช้ data.js ในการทำเป็นdata (เนื่องจากติดปัญหาในส่วนของ axios (error 404 ที่ผมหาทางแก้ไม่ได้) ทำให้เปลี่ยนมาใช้ javascript แทน)
2. ภาพรวม ใช้ react js tailwindcss และ daisyui ในการตกแต่ง frontend

อธิบาย flow 
1. เมื่อเข้าหน้าแรกจะมีข้อมูลที่ได้เตรียมไว้คร่าวๆ มีปุ่ม sort ซึ่งสามารถ เรียงได้ 2 แบบ คือ 1. status 2.lastest update ถัดมาในส่วนของ search (ค้นหาเฉพาะ status ) ปุ่ม Create Ticket ในส่วนของ Title (update status) ชื่อจะขีดเส้นไว้ สามารถให้ ในส่วนของ dev กดเพื่อไปปรับ status ได้
2. เมื่อกด Create Ticket จะเข้าไปหน้า addticket สามารถใส่ข้อมูล title description and contact information ได้
3. เมื่อกดปุ่ม Create จะกลับมายัง หน้าหลัก พร้อมกับสร้าง ticket โดนจะ set status เริ่มต้นเป็น pending
4. ในส่วนของ dev (ผมไม่ได้ทำแยก rols) จะสามารถปรับแก้ในส่วนของ status ได้ด้วยการกดที่ชื่อ title (จะขีดเส้นใต้ไว้) เพื่ออัพเดท status ของ ticket นั้นๆ
5. หาปรับ status เป็น Rejected จะไม่สามารถกดเข้าไปแก้ไขอีกได้


อธิบาย function
Mainpage.js
1. handleSearch = search ข้อมูลใน data.js (follow by status)
2. handleSelectChange = set option ในส่วนของการ sorting
3. const allticket = loop(map) ข้อมูลใน data.js ออกมา

Ticket.js
1. titleChange = นำค่า title มาใส่ในตัวแปร
2. descriptionChange = นำค่า description มาใส่ในตัวแปร
3. contactChange = นำค่า contact มาใส่ในตัวแปร
4. addticket = ตามชื่อทำการ add ข้อมูลตามที่ต้องการเข้าสู่ data.js


Updatepage.js
1. handleSelectChange = set option ในส่วนของการ เปลี่ยนแปลง status ของ ticket
2. updateticket = ในนี้จะทำการลบ ข้อมูลที่เคยใส่ไว้ และ add ใหม่ (โดยจะมีการ save ข้อมูลเดิมไว้แล้วใส่ไปในอันใหม่ จะมี push และ splice ใน function)
