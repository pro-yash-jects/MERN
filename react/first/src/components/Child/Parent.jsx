import { Child } from "./Child"
export const Parent = ({name,theme}) => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} theme={theme} />
    </div>
  )
}