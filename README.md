## Cat Tinder Testing 12/8/23 Hotel

## Additional Resources

- [React Router Dom](https://reactrouter.com/en/main)
- [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)
- [Bootstrap](https://getbootstrap.com/)
- [React Testing Library](https://testing-library.com/docs/)
- Image - [Canva](https://www.canva.com/)
- [Unit Testing](https://medium.com/@natnael.awel/react-js-unit-testing-best-practices-and-tools-5454a01326ea)
- [ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles)
- [Overview of RTL](https://blog.logrocket.com/using-react-testing-library-debug-method/#anoverviewofreacttestinglibrary)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom#custom-matchers)

## Vocabulary

- static tests: covers grammatical errors such as typing errors, syntax structure, indentation
- unit tests: testing functionality or code of one file at a time
- integration tests: testing how all the files work together
- end to end tests: evaluating how the whole application is functioning
- Jest: javascript testing framework, test runner
- React Testing Library: (RTL) library that contains methods to help you search for Document Object Model(DOM) elements
- assertion: expect statements, makes evaluations of the DOM elements

## Workflow

- create a test file in the `__tests__` directory
- naming convention: ComponentName.test.js
- import applicable RTL methods and component
- describe, it, expect methods for the test
- run `yarn test ComponentName.test.js` to see if test is failing or passing

## RTL

- render: render the applicable component in a testing environment
- screen: object that represents the current HTML rendered on the DOM

### Queries

Queries come in various types, such as "get," "find," and "query." The distinction among them lies in whether the query throws an error when no element is found or if it returns a Promise and retries the operation.

#### Order of priority

1. Queries Accessible to Everyone:

- getByRole: query every element that is exposed in the accessibility tree. This query is often used with the name option such as getByRole('button', {name: /submit/i}).
- getByText: query non-interactive elements (like divs, spans, paragraphs, heading, text).

2. Semantic Queries:

- getByAltText: query element that has alt attribute (img, area, input, and any custom element).

3. Test IDs:

- getByTestId: last resort query because the id attribute is accessible by the user.  
  **_NOTE: All queries can be extended with `All` to search for multiple elements. `getAllByRole("button")`. This query will return an array of elements._**

### Debugging Tools

- screen.debug(): prints the html output of the current DOM in the testing suite
- screen.logTestingPlaygroundURL(): prints an url in the test suite that can be copied and pasted in the browser, displays the html output and applicable queries for the current DOM

## Test included on this lecture

### App.test.js

- landing page

### As a developer, I have test coverage on my Header component.

- does not crash upon rendering
- index link
- 3 total links
- home link

### As a developer, I have test coverage on my Footer component.

- footer heading

### As a developer, I have test coverage on my Home page.

- renders without crashing
- home body image

### As a developer, I have test coverage on my NotFound page.

- notfound heading

# PROMISES

- promise starts as pending - immediately the returned promise is "pending"
- can become fulfilled - meaning we receive a payload of data
- can become rejected - something about our fetch request was rejected

## FETCH

- tool used to make requests from FE to BE.
- it's a method that takes an arguments of a url or some kind of location, can also take information(package of data)

## useEffect() - React Hook

- runs automatically when component loads to the browser
- two parts: the action you want executed (ie. the function you want to call), the dependency value - in our case []
- empty array prevents re-executing the effect everytime you refresh
