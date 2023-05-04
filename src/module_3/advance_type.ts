/* ========================= 3.9 Conditional Type =========================  */
type a = number;
type b = a extends number ? number : null; // Nested
type c = a extends number ? (b extends null ? boolean : number) : null; // Multi-nested

type Cricket = { bat: string; ball: string };
type CheckProperty<T, K> = K extends keyof T ? true : false; // keyof T = "bat" | "ball"
type checkBall = CheckProperty<Cricket, "ball">;

type ProgrammingLan = "JavaScript" | "Python" | "C++" | "Java";
type removePL<T, K> = T extends K ? never : T;
type removeJava = removePL<ProgrammingLan, "Java">;


/* ========================= 3.10 Mapped Type =========================  */
