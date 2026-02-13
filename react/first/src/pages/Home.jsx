import {Parent} from '../components/Child/Parent'

export const Home = () => {
    let name = 'Tom'
    let theme = 'dark'
    return <>
    <style>      {`
       *{
       text-align: center;
       }
      `}
    </style>
    <h1>Home</h1>
    <Parent name={name} theme={theme} />
    </>
}