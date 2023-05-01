// Installing Typescript
npm i -g typescript

// Transpiling a TypeScript file to JavaScript
tsc hello.ts

// tsconfig.json configuration
{
    "compilerOptions": {
        "target": "ES2015",
        "watch": true
    }
}

// Creating a TypeScript React app using Create React App
npx create-react-app counter --template typescript

// Installing Axios and its TypeScript definitions
npm install --save axios
npm install --save-dev @types/axios

// Deleting node_modules folder, clearing npm cache, and reinstalling packages
Delete the node_modules folder.
Clear the npm cache by running npm cache clean --force.
Install the packages again by running npm install.
Run your application again by running npm start.

// SOLID principles
Single responsibility principle
Open-closed principle (open for implementation and closed for modification)
Liskov Substitution principle
    interface IsSearchInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
        isLarge?: boolean
    }

Interface Segregation principle
    export interface IProduct {
        id: string;
        title: string
    }

    interface IProductProps {
        product: IProduct
    }

    One component should have its own interface of the particular props it uses so that all the interface properties are not imported directly.

Dependency Inversion principle
One entity should depend upon abstractions not concretions. DIP

// Custom Hooks
Custom React hooks are reusable functions that can encapsulate and abstract away some of the common and often repetitive logic in React components. Here are some scenarios where custom React hooks can be useful:

State management: If you find yourself writing the same code to manage state in multiple components, you can create a custom hook to handle that logic for you. For example, you can create a hook to manage form state or to handle API calls.

Handling side effects: If you have code that handles side effects like fetching data from an API or interacting with the browser's local storage, you can create a custom hook to handle that logic for you.

Abstracting complex logic: If you have complex logic that you need to reuse across multiple components, you can create a custom hook to encapsulate that logic and make it more reusable.

Improving readability: Custom hooks can improve the readability of your code by abstracting away complex logic and making your components more focused on rendering UI.

Here are some reasons why you should use custom React hooks:

Reusability: Custom hooks make it easy to reuse logic across different components, reducing duplication and making your code more modular.

Abstraction: Custom hooks allow you to abstract away complex logic and simplify your components, making them more readable and easier to reason about.

Composability: Custom hooks can be composed together, allowing you to build more complex hooks that handle multiple concerns.

Testability: Custom hooks make it easier to test your code by encapsulating logic and making it more modular.

Here are some reasons why you might not want to use custom React hooks:

Overuse: If you create too many custom hooks, it can make your code harder to understand and maintain.

Complexity: Custom hooks can add complexity to your codebase, especially if they are poorly designed or not well documented.

Learning curve: Creating custom hooks requires some knowledge of React hooks and can have a learning curve, especially for beginners.

Overall, custom React hooks can be a powerful tool for creating reusable, composable, and testable code. However, like any tool, they should be used judiciously and with care to avoid introducing unnecessary complexity or reducing the readability of your code.
