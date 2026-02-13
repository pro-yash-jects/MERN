import { Grandchild } from "./Grandchild"
export const Child = ({name,theme}) => {
    return (
        <div>
            <h2>Child Component</h2>
            <Grandchild name={name} theme={theme} />
        </div>
    )
}