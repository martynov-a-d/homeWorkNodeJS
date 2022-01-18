const fs = require("fs")
const fsPromises = require("fs/promises");
// const readStream = fs.createReadStream(ACCESS_LOG, {encoding: "utf-8"})
// let data = '127.0.0.1 - - [30/Jan/2021:11:10:15 -0300] "GET /sitemap.xml HTTP/1.1" 200 0 "-" "curl/7.47.0"'
let data = ""
const NEW_FILE = "%ip-адрес%_requests.log"
const ACCESS_LOG = "./test.log";
// Получение из файла информации и передача в data
fsPromises.readFile(ACCESS_LOG, {encoding: "utf-8"}).then(req => {return data = req}).catch(err => {console.log(err)})
// Создаем файл в который будем записывать информацию
// fs.open(NEW_FILE, "a+", (err) => {
//     // fs.appendFile(`./${NEW_FILE}`, data, {encoding: "utf-8", flag: "a"}, (err) => {
//     //     console.log(data);
//     //     if(err) {console.log(err)}
//     //     else {console.log('complite writeFile', data);}
//     // })
//     if(err) {console.log(err)}
//     else {console.log('complite fileCreate', data);}
// })

// Запись информациии в файл
fs.appendFile(`./${NEW_FILE}`, data + '\n', {encoding: "utf-8", flag: "a"}, (err) => {
    console.log(data);
    if(err) {console.log(err)}
    else {console.log('complite writeFile', data);}
})