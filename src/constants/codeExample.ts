export const counterExample = `import { useState } from 'react';

function Counter() {
  // [значение, функция_обновления] = useState(начальное_значение)
  const [count, setCount] = useState(0);
 
  // Когда новое состояние зависит от предыдущего,
  // то лучше использовать функциональное обновление.
  const increment = () => setCount((prevCount) => prevCount + 1)
  
  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={increment}>
        Нажми на меня
      </button>
    </div>
  );
}`;

export const stateProps = `const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

const ChildComponent = ({ count }) => {
  return <p>Счетчик: {count}</p>;
};`;

export const stateObj = `import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // создаем новый объект с обновленным свойством
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };`;

export const transferProps = `const ParentComponent = () => {
  const data = {id: 1, name: 'I am props'};
  return <ChildComponent allData={data} />;
  }`;
export const accessProps = `const ChildComponent = (props) => {
  return <div>{props.allData.name}</div>;
  }`;
export const destructuringProps = `const ChildComponent = ({allData}) => {
  return <div>{allData.name}</div>;
  }`;

export const functionalCode = `const Welcome = (props) => {\n  return <h1>Привет, {props.name}</h1>;\n};`;

export const classCode = `class Welcome extends React.Component {\n  render() {\n    return <h1>Привет, {this.props.name}</h1>;\n  }\n}`;

export const useEffectExample = `useEffect(() => {
  // Код эффекта (например, подписка на данные)
  console.log('Эффект выполнен');

  return () => {
    // Функция очистки (cleanup)
    console.log('Очистка эффекта');
  };
}, [dependency]); // Массив зависимостей`;

export const useRefExample = `import React, { useRef } from 'react';  

const InputFocus = () => {  
  // Создаем реф с помощью useRef  
  const inputRef = useRef(null);  

  const focusInput = () => {  
    // Делаем фокус на инпуте  
    if (inputRef.current) {  
      inputRef.current.focus();  
    }  
  };  

  return (  
    <div>  
      <input ref={inputRef} 
      type="text" 
      placeholder="Нажми кнопку для фокуса" />  
      <button onClick={focusInput}>
      Фокус на инпуте
      </button>  
    </div>  
  );  
};  

export default InputFocus;`;

export const fragmentExample = `// Краткая запись фрагмента\n<>\n  <ComponentA />\n  <ComponentB />\n</>`;

export const memoExample1 = `const MyComponent = React.memo((props) => {\n  return <div>{props.value}</div>;\n});`;

export const memoExample2 = `import React from 'react';

const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов с помощью 
  // compareFunction
  return (
    <div>
      {props.text}
    </div>
  );
}, (prevProps, nextProps) => {
  // compareFunction - пользовательская функция сравнения пропсов
  // Возвращает true, если пропсы должны считаться равными и 
  // компонент не должен перерисовываться
});`;

export const useCallbackCode = `const memoizedCallback = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);`;

export const contextCode = `// 1. Создаем контекст
const ThemeContext = createContext('light');

// 2. Оборачиваем дерево в Provider
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>

// 3. Используем в любом дочернем компоненте
const theme = useContext(ThemeContext);`;

export const routerCode = `import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`;

export const useParamsCode = `import { useParams } from 'react-router-dom';  

function User() {  
  const { userId } = useParams();  

  return <h2>User ID: {userId}</h2>;  
}`;

export const useNavigateCode = `import { useNavigate } from 'react-router-dom';  

function Login() {  
  const navigate = useNavigate();  

  const handleLogin = () => {  
    // Логика входа...  
    navigate('/dashboard'); // Перейти на страницу кабинета после входа  
  };  

  return <button onClick={handleLogin}>Login</button>;  
}`;

export const useLocationCode = `import { useLocation } from 'react-router-dom';  

function CurrentLocation() {  
  const location = useLocation();  

  return <div>Current location: {location.pathname}</div>;  
}`;

export const useRoutes = `import { useRoutes } from 'react-router-dom';  

function AppRoutes() {  
  const routes = [  
    { path: '/', element: <Home /> },  
    { path: '/about', element: <About /> },  
    { path: '/contact', element: <Contact /> },  
  ];  

  return useRoutes(routes);  
}`;

export const useSearchParamsCode = `import { useSearchParams } from 'react-router-dom';  

function SearchPage() {  
  // Хук для работы с параметрами поискового запроса  
  const [searchParams, setSearchParams] = useSearchParams();  

  // Извлекаем параметр 'query' из поисковых параметров  
  const query = searchParams.get('query') || '';  

  const handleSearch = (event) => {  
    event.preventDefault();  
    // Изменяем параметр 'query' в URL  
    setSearchParams({ query: event.target.searchInput.value });  
  };  

  return (  
    <div>  
      <h1>Search Page</h1>  
      <form onSubmit={handleSearch}>  
        <input  
          type="text"  
          name="searchInput"  
          defaultValue={query} // Значение по умолчанию для инпута  
        />  
        <button type="submit">Search</button>  
      </form>  
      <p>Current query: {query}</p>  
    </div>  
  );  
}`;
