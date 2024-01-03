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

# PROTECTED PAGES 1/2/2024

# Protected Index

As a signed in user, we may want to be able to see only the cat listings that we have created as well. This page will be protected so that only a logged in user can access this page.

Like we did before, we are going to start by using mock data to make sure this all works before connecting.
We should have a mockCats.js file, so let's just add a mockUsers.js file first to make sure everything works before we connect it with the backend.

```javascript
let mockUsers = [
  {
    id: 1,
    email: "test1@example.com",
  },
  {
    id: 2,
    email: "test2@example.com",
  },
  {
    id: 3,
    email: "test3@example.com",
  },
]

export default mockUsers
```

We will also now need to add a user_id to each mockCat.
Only one user will be logged into the application at a time, and during the mock stage we can hardcode the the user to be lets say mockUser[0]. For this we need state!

`const [currentUser, setCurrentUser] = useState(mockUser[0])`

We need to consider what information is needed here. We will need cats of course, but we will also want to check that our current user is the same as the one who created the cats.

When setting up our backend, we created a has_many belongs_to association, so cat belongs to user. If we look at our schema, we see that cat has a foreign key of user_id. This is helpful information that we can use to perform an evaluation of whether or not our current user's id is the same as the one on the foreign key. (currentUser.id === cat.user_id)

To set this up, let's start off in App.js and update our route. We will certainly need cats from state along with the current user.

We also will want to make it so this particular route can only be accessed if a user is signed in. For this, we will conditionally render the route.

```javascript
{
  currentUser && (
    <Route
      path="/mycats"
      element={<MyCatIndex currentUser={currentUser} cats={cats} />}
    />
  )
}
```

Now that we are passing these to MyCatIndex, we need to create the page MyCatIndex.js.

```javascript
const MyCatIndex = () => {
  return (
    <>
      <h2> My Cats </h2>
    </>
  )
}

export default MyCatIndex
```

let's check that we have access to those props.

```javascript
const MyCatIndex = ({ cats, currentUser }) => {
  console.log("cats", cats)
  console.log("currentUser", currentUser)
  return (
    <>
      <h1>My Cats</h1>
    </>
  )
}
```

Since we have access to props, now we need to sift through the cats and search for only the cats that have a user_id of currentUser.id. For this, let's use filter.

```javascript
const MyCatIndex = ({ currentUser, cats }) => {
  const myCats = cats?.filter((cat) => currentUser.id === cat.user_id)

  return (
    <>
      <h1>My Cats</h1>
    </>
  )
}

export default MyCatIndex
```

Since we are storing the array of filtered cats to a variable, we can now iterate on our filtered cats and display the content.

We want this page to look just like our index page, just with only the user's listings, so we can use the same structure we did in CatIndex and reuse the styling as well. Well that sounds like rewriting something we already did - why would we do that? Let's just add the Card structure and styling as a new Component! Due to the naming used with Reactstrap, Card is taken. So let's call it CatCard.js. and we can cut out the structure from CatIndex and put it in this new component.

```javascript
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const CatCard = ({ cat, index }) => {
  return (
    <Card
      color="light"
      style={{
        width: "18rem",
      }}
      key={index}
    >
      <img alt="cat profile" src={cat.image} />
      <CardBody>
        <CardTitle tag="h4">{cat.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {cat.age}
        </CardSubtitle>

        <NavLink to={`/catshow/${cat.id}`} className="nav-link">
          Details
        </NavLink>
      </CardBody>
    </Card>
  )
}

export default CatCard
```

```javascript
import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { NavLink } from "react-router-dom"

const MyCats = ({ currentUser, cats }) => {
  const myCats = cats?.filter((cat) => currentUser.id === cat.user_id)

  return (
    <>
      <div className="cats-body">
        <h1>My Cats</h1>
        <div className="flex-cats">
          {myCats?.map((cat, index) => {
            return <CatCard cat={cat} index={index} />
          })}
        </div>
      </div>
    </>
  )
}

export default MyCatIndex
```

Now let's work on testing. As we have in the past, we have to make sure that any information that is being called on in the component is also being passed to our test when we render the component. In this case, we need cats, that we can use mockCats for, and also create an object that will be currentUser for us to use.

```javascript
import React from "react"
import { render, screen } from "@testing-library/react"
import MyCats from "./MyCats"
import { BrowserRouter, useParams } from "react-router-dom"
import mockCats from "../mockCats"

describe("<MyCats />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test@test.com",
      password: "testing123",
      id: 1,
    }
    const userCats = [
      {
        name: 'Tuesday',
        age: 20,
        enjoys: 'Staring at you your soul with his giant eyes'
        image: 'https://i.pinimg.com/736x/6d/1d/a9/6d1da9f9dcecbefc73bb620bef2f1c07.jpg'
        user_id: 1,
      },
    ]
    render(
      <BrowserRouter>
        <MyCats currentUser={currentUser} myCats={userCats} />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {
    const element = screen.getByText("My Cats")
    expect(element).toBeInTheDocument()
  })
})
```

# CONNECTING WITH JWT

# Connecting Authentication with JWT

As of right now, our front-end application relies on mock data to display information. However, we want this application to be connected to a database. We explored fetch which allowed us to make requests to our API. We are once again going to utilize fetch to consume our data, however, this time we also need to gather our token when a user is signed in which will be the main focus of this lecture.

### Connecting React and Rails API

When we are dealing with user credentials we do need to make sure we are thoughtful about how that data is passed between applications. When a user first signs up, we need to send their username and password to the Rails API where it will be stored as a new instance in the database. To authenticate an existing user (login) we need to send the user's email and password to the Rails API and perform a check against existing users in the database. If the credentials match, a token will be created and passed back to the React application. This token remains valid during the current user session and will authorize the user to see certain protected pages. Once the user logs out the session token is revoked.

### Initial State Variables

First we need to update App.js to remove our mock user and set our default to no user being logged in (null). We can also update our cats array to an empty array which will later be updated in our fetch call.

**src/App.js**

```javascript
const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [cats, setCats] = useState([])

  return (
    // existing code ...
  )
}
```

### Collect Input Data

Next we need to handle the view for a user to sign up or log in. There is a really cool React hook that can help us setup our form quickly called useRef.

**useRef** is a React Hook that allows us to access elements from the DOM and persist those values between renders. With `useRef` we can create a reference to our sign up and log in forms then access the values entered in those form fields as needed by using the `current` property.

- Updating a reference doesn't trigger re-rendering, while updating the state makes the component re-render
- The reference update is synchronous (the updated reference value is available right away), while the state update is asynchronous (the state variable is updated after re-rendering).

We can grab all the input values with `formRef.current`.

**src/pages/Signup.js**

```javascript
// Don't forget your import
import { useRef } from "react"

const Signup = () => {
  // First, create a variable using useRef. We want to get the input values from the signup form so we'll name the variable 'formRef'
  const formRef = useRef()

  const handleSubmit = () => {
    console.log("Sign Up")
  }

  return (
    <div>
      {/* Next, use the property `ref` to attach the variable to the form you want to target. */}
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" />
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" />
        <br />
        Confirm Password:{" "}
        <input
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered, <a href="/login">Login</a> here.
      </div>
    </div>
  )
}
export default Signup
```

#### Packaging Form Data

Now that we have a way to access the user inputs, we need to package the data in a format `JWT` recognizes. For this we will use a JavaScript object called `FormData`.

**FormData** allows us to build and manipulate HTML form data before sending it to the Rails API. `FormData` creates objects containing form fields (keys) and their values(input).

We can pass in `formRef.current` as an argument when creating a new `FormData`, then use `Object.fromEntries` to access the values. We will do all of this in a `handleSubmit` function that is linked to the submit form button.

**src/pages/Signup.js**

```javascript
const handleSubmit = (e) => {
  // preventDefault stops the default behavior of reloading or refreshing the form so we can send the data with fetch
  e.preventDefault()
  // store the form entries in a variable
  const formData = new FormData(formRef.current)
  // create an object from the entries
  const data = Object.fromEntries(formData)
  // store user's info in format that can be used with JWT
  const userInfo = {
    user: { email: data.email, password: data.password },
  }
}
```

### Login and Signup Functions

Inside our fetch for user authentication, we need to store the token created by JWT. **localStorage** allows us to store key-value pairs in the form of strings and provides methods to store, retrieve, and remove the token locally in the user's browser. The data stored remains available even after the user closes the browser or navigates away from the website.

The localStorage property comes with four basic methods:

- `localStorage.setItem(key, value)`: Stores a value in `localStorage`. The key is a unique identifier for the data, and the value is the actual data you want to store. Both the key and value must be strings.
- `localStorage.getItem(key)`: Retrieves the value associated with a given key from `localStorage`. It returns null if the key does not exist.
- `localStorage.removeItem(key)`: Removes the item associated with the specified key from `localStorage`.
- `localStorage.clear()`: Removes all items stored in `localStorage`, effectively clearing the entire storage.

**Note**: Data must be stored as strings. When dealing with data structures such as objects or arrays we will need to convert them to strings using JSON.stringify() before storing. It is also necessary to parse them back to their original format using JSON.parse() when retrieving from `localStorage`.

We can now use these methods to access our JWT in the fetch requests for sign up, log in, and log out.

**src/App.js**

```javascript
// authentication methods
const login = (userInfo) => {
  fetch(`${url}/login`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      // store the token
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))

      setCurrentUser(payload)
    })
    .catch((error) => console.log("login errors: ", error))
}

const signup = (userInfo) => {
  fetch(`${url}/signup`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      // store the token
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then((payload) => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch((error) => console.log("login errors: ", error))
}

const logout = () => {
  fetch(`${url}/logout`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"), //retrieve the token
    },
    method: "DELETE",
  })
    .then((payload) => {
      localStorage.removeItem("token") // remove the token
      localStorage.removeItem("user") // removes the user
      setCurrentUser(null)
    })
    .catch((error) => console.log("log out errors: ", error))
}
```

Now we can pass these functions into their components and call them when a user clicks sumbit

**src/App.js**

```javascript
<Header current_user={currentUser} logout={logout} />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login login={login} />} />
  <Route path="/signup" element={<Signup signup={signup}/>} />
  {/* other routes... */}
```

**src/pages/Signup.js**

```javascript
const handleSubmit = (e) => {
  {
    /* ... */
  }

  signup(userInfo)
  navigate("/")
  e.target.reset() // resets the input field
}
```

**src/components/Header.js**

```javascript
import { useNavigate } from "react-router-dom"

const navigate = useNavigate()

const handleClick = () => {
  logout()
  navigate("/")
}
```

** Hint** May need to add this to application controller:

```ruby
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
end
```

### Persist Current User

Having the initial state of `currentUser` set to `null` will cause the user to be logged out if the user manually refreshes the browser. To solve this problem we can create a function that checks if a JWT exists and set the state to the logged in user if it does. This function will live in the `useEffect` hook.

**src/App.js**

```javascript
useEffect(() => {
  const loggedInUser = localStorage.getItem("user")
  if (loggedInUser) {
    setCurrentUser(JSON.parse(loggedInUser))
  }
  readCats()
}, [])
```

Code for Login:

```javascript
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const Login = ({ login }) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password },
    }
    login(userInfo)
    navigate("/")
    e.target.reset()
  }
  return (
    <div className="auth-body">
      <h2 className="header">Login</h2>
      <form className="form-div" ref={formRef} onSubmit={handleSubmit}>
        Email:{" "}
        <input
          className="field auth-flex"
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        Password:{" "}
        <input
          className="field auth-flex"
          type="password"
          name="password"
          placeholder="password"
        />
        <br />
        <input className="actions" type="submit" value="Login" />
        <div className="links">
          Not registered yet?
          <a href="/signup">
            {" "}
            <u>Signup</u>
          </a>
        </div>
      </form>
    </div>
  )
}
export default Login
```
