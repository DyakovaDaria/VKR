import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
//   return [
//     {
//       id: "123",
//       name: "Ольга",
//       lastName: "Иванова",
//       secondName: "Ивановна",
//       role: "teacher",
//       description: 'Стаж работы 10 лет. Образование - "Педагог-хореограф".',
//       email: "ivanovaolga@example.com",
//       phone: "123-456-7890",
//       groups: [
//         {
//           level: "начинающие",
//           dates: [{ weekDay: "вторник", time: "17:00 - 18:30" }],
//         },
//         {
//           level: "продолжающие",
//           dates: [
//             { weekDay: "среда", time: "16:30 - 17:30" },
//             { weekDay: "пятница", time: "16:30 - 17:30" },
//           ],
//         },
//       ],
//       pic: null,
//     },
//     {
//       id: "123",
//       name: "Петр",
//       lastName: "Иванов",
//       secondName: "Сергеевич",
//       role: "teacher",
//       description: 'Стаж работы 8 лет. Образование - "Педагог-хореограф".',
//       email: "ivanovp@example.com",
//       phone: "123-456-7891",
//       groups: [
//         {
//           level: "продолжающие",
//           dates: [{ weekDay: "вторник", time: "17:00 - 18:30" }],
//         },
//         {
//           level: "продолжающие",
//           dates: [
//             { weekDay: "среда", time: "16:30 - 17:30" },
//             { weekDay: "пятница", time: "16:30 - 17:30" },
//           ],
//         },
//       ],
//       pic: null,
//     },
//     {
//       id: "123",
//       name: "Ирина",
//       lastName: "Александрова",
//       secondName: "Петровна",
//       role: "student",
//       description: "",
//       email: "petrovairina@example.com",
//       phone: "123-456-7887",
//       groups: [
//         {
//           level: "начинающие",
//           dates: [{ weekDay: "вторник", time: "17:00 - 18:30" }],
//         },
//         {
//           level: "продолжающие",
//           dates: [
//             { weekDay: "среда", time: "16:30 - 17:30" },
//             { weekDay: "пятница", time: "16:30 - 17:30" },
//           ],
//         },
//       ],
//       pic: null,
//     },
//     {
//       id: "123",
//       name: "Юлия",
//       lastName: "Васильева",
//       secondName: "Васильевна",
//       role: "student",
//       description: "",
//       email: "yulvasilieva@example.com",
//       phone: "123-456-7770",
//       groups: [
//         {
//           level: "начинающие",
//           dates: [{ weekDay: "вторник", time: "17:00 - 18:30" }],
//         },
//         {
//           level: "продолжающие",
//           dates: [
//             { weekDay: "среда", time: "16:30 - 17:30" },
//             { weekDay: "пятница", time: "16:30 - 17:30" },
//           ],
//         },
//       ],
//       pic: null,
//     },
//   ];
// });

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(`http://localhost:7001/Admins/AllUsers`, {
      params: {
        page: 0,
        itemsPerPage: 9,
      },
      headers: {
        'accept': 'accept: text/plain', 
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      }
    });
    console.log('users list: ' + response.data.users);
    return ( {users: response.data.users, totalCount: response.data.totalCount});
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
});
