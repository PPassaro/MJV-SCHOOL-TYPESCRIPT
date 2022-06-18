interface User {
    readonly id: number;
    name: string;
    email?: string;
}

const user: User = {
    id: 1,
    name: "Alan",
    email: ""
}

// readonly - quando o campo é unico
// ? - quando o campo é opcional
