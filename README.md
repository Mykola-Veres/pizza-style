# React

Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей

- Маршрутизация

для маршрутизации, необходимо дополнительно настроить компонент
`<BrowserRouter>`, передав в пропе `basename`

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```
