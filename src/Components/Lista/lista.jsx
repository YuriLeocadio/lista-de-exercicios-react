export function List({tasks}) {

    return (
        
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    )
}