/*
npm i -g typescript

tsc hello.ts

{
    "compilerOptions": {
        "target": "ES2015",
        "watch": true
    }
}

npx create-react-app my-app --template typescript

npm install --save axios
npm install --save-dev @types/axios


Delete the node_modules folder.
Clear the npm cache by running npm cache clean --force.
Install the packages again by running npm install.
Run your application again by running npm start.

SOLID
Single responsibility principle 
Open closed principle - open for implementation and closed for modification
Liskov Substitution - 
    Interface IsSearchInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
        isLarge?: boolean
    }

Interface Segragation - 
    export interface Iproduct {
        id: string;
        title: string
    }

inteface IproductProps {
    product: IProduct
}

one component should have its own interface of the particular props it uses so that all the interface properties are not imported directly.

Dependency Inversion: One entity should depend upon abstractions not concretions. DIP
*/
