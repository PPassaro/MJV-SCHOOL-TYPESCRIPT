const sum1 = (x: number, y: number) => x + y;

const multiply1 = (x: number, y: number) => x * y;

const division1 = (x: number, y: number) => x / y;

const subtraction1 = (x: number, y: number) => x - y;

// outra forma

type ArithmeticFunction = (x: number, y: number) => number;

const sum2: ArithmeticFunction = (x, y) => x + y;

const multiply2: ArithmeticFunction = (x, y) => x * y;

const division2: ArithmeticFunction = (x, y) => x / y;

const subtraction2: ArithmeticFunction = (x, y) => x - y;