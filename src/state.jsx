const user={
    name: "Сидор",
    lastname: "Сидоров",
    email: "ya@ya.ru",
    id: "id",
    about: "тут я говорю о себе",
    avatar: "https://th.bing.com/th/id/OIP.sz6C1lirzSN5bnOzPDoPEgAAAA?pid=ImgDet&rs=1"
}

const users={
   0: {name:"Петя", lastname:"Петров"},
   1: {name:"Вася", lastname:"Васильев"},
   2: {name:"Коля", lastname:"Николаев"},
   3: {name:"Ваня", lastname:"Иванов"},
   4: {name:"Ольга", lastname:"Тетерина"}
}
export function getUser(){
    return user;
}

export function getUsers() {
    return users;
    
}