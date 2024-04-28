import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  // const response = await fetch('https://api.example.com/users');
  // if (!response.ok) {
  //   throw new Error('Failed to fetch users');
  // }
  // return response.json();
  return [
    {
      id: "123",
      name: "Ольга",
      lastName: "Иванова",
      secondName: "Ивановна",
      role: "teacher",
      description: 'Стаж работы 10 лет. Образование - "Педагог-хореограф".',
      email: "ivanovaolga@example.com",
      phone: "123-456-7890",
      groups: [
        {
          level: "начинающие",
          dates: [{ weekDay: "вторник", time: "17:00 - 18:30" }],
        },
        {
          level: "продолжающие",
          dates: [
            { weekDay: "среда", time: "16:30 - 17:30" },
            { weekDay: "пятница", time: "16:30 - 17:30" },
          ],
        },
      ],
      pic: null,
    },
    {
      id: "123",
      name: "Петр",
      lastName: "Иванов",
      secondName: "Сергеевич",
      role: "teacher",
      description: 'Стаж работы 8 лет. Образование - "Педагог-хореограф".',
      email: "ivanovp@example.com",
      phone: "123-456-7891",
      groups: [
        {
          level: "продолжающие",
          dates: [{ weekDay: "вторник", time: "17:00 - 18:30" }],
        },
        {
          level: "продолжающие",
          dates: [
            { weekDay: "среда", time: "16:30 - 17:30" },
            { weekDay: "пятница", time: "16:30 - 17:30" },
          ],
        },
      ],
      pic: null,
    },
    {
      id: "123",
      name: "Ирина",
      lastName: "Александрова",
      secondName: "Петровна",
      role: "student",
      description: "",
      email: "petrovairina@example.com",
      phone: "123-456-7887",
      groups: [
        {
          level: "начинающие",
          dates: [{ weekDay: "вторник", time: "17:00 - 18:30" }],
        },
        {
          level: "продолжающие",
          dates: [
            { weekDay: "среда", time: "16:30 - 17:30" },
            { weekDay: "пятница", time: "16:30 - 17:30" },
          ],
        },
      ],
      pic: null,
    },
    {
      id: "123",
      name: "Юлия",
      lastName: "Васильева",
      secondName: "Васильевна",
      role: "student",
      description: "",
      email: "yulvasilieva@example.com",
      phone: "123-456-7770",
      groups: [
        {
          level: "начинающие",
          dates: [{ weekDay: "вторник", time: "17:00 - 18:30" }],
        },
        {
          level: "продолжающие",
          dates: [
            { weekDay: "среда", time: "16:30 - 17:30" },
            { weekDay: "пятница", time: "16:30 - 17:30" },
          ],
        },
      ],
      pic: null,
    },
  ];
});
