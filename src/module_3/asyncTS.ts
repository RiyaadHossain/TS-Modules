/* ========================= 3.8 Generics =========================  */
interface IData {
  data: string;
}

const getPromise = (): Promise<IData> => {
  return new Promise<IData>((resolve, reject) => {
    const data: IData = { data: "Data" };
    if (data) resolve(data);
    else reject("Rejected");
  });
};

const promiseResult = getPromise();

// Practical use case___________
interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getToDo = async (): Promise<IToDo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data: IToDo = await res.json();
  return data;
};

const callTheFunc = async () => {
  const toDoResult = await getToDo();
  return toDoResult
};

// callTheFunc();
