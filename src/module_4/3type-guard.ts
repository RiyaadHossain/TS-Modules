/* ========================= 4.3 Type Guards / Type Narrowing =========================  */

// 'Keyof' --> function
type StringOrNumber = string | number;

const addNumber1 = (
  param1: StringOrNumber,
  param2: StringOrNumber
): StringOrNumber => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }

  if (typeof param1 === "string" && typeof param2 === "string") {
    return param1 + param2;
  }

  return "Invalid input";
};

// 'in' --> object
type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

const normalUser1: NormalUserType = { name: "Normal User" };
const adminUser1: AdminUserType = { name: "Normal User", role: "admin" };

const getUser = (user: NormalUserType | AdminUserType): string => {
  if ("role" in user) {
    return user.role;
  } else {
    return user.name;
  }
};

// instancof --> class
// Student & Teacher classes are in the 'inheritance' file
const student1 = new Student("Student1", 23, "student", "11th");
const teacher1 = new Teacher("Student1", 23, "student", "professor");

// Custom checker
const checkTeacher = (person: Person): person is Teacher => {
  return person instanceof Teacher;
};

const doTask = (person: Person): string => {
  if (person instanceof Student) {
    return person.studyNow();
  }
  if (checkTeacher(person)) {
    return person.takeClass("Programming");
  }

  return "Invalid input";
};
