const http = require("http");

let token = 9;

let courses = [
    { id: 1, name: "JS Basics", months: 2, module: null },
    { id: 2, name: "JS Fundamentals", months: 4, module: null },
    { id: 3, name: "JS Advanced", months: 2, module: "JS Advanced" },
    { id: 4, name: "JS Applications", months: 2, module: "JS Advanced" },
    { id: 5, name: "JS Back-End", months: 2, module: "JS Web" },
    { id: 6, name: "ReactJS", months: 2, module: "JS Web" },
    { id: 7, name: "HTML & CSS", months: 1, module: "Front-End" },
    { id: 8, name: "Front-End Framework", months: 3, module: "Front-End" },
]

const server = http.createServer((req, res) => {

    let idPattern = /api\/courses\/(?<id>[\d]+)/;

    if (req.url === "/api/courses") {
        if (req.method === "GET") {
            res.write(JSON.stringify(courses))
        } else if (req.method === "POST") {

            let data = []
            req.on('data', chunk => {
                data.push(chunk)
            })
            req.on('end', () => {
                let decodedData = decodeURIComponent(data[0].toString());

                let patternCourse = /name=(?<name>[A-Za-z-\d\s]+)&months=(?<months>[\d]+)&module=(?<module>[A-Z]+)/;
                let newCourse = decodedData.match(patternCourse);

                let courseName = newCourse.groups.name;
                let months = newCourse.groups.months;
                let moduleName = newCourse.groups.module;

                courses.push({ id: token, name: courseName, months: months, module: moduleName });
                token++;


            })
        } else {
            res.statusCode = 400;
            res.end();

            return;
        }

    } else if (idPattern.test(req.url)) {

        
    } else {
        res.statusCode = 404;
    }


    res.end();
});

server.listen(3000);
console.log("Listening on port 3000......");



