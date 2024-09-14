export function List({tasks}) {

    return (
        
        <ul>
            {tasks.map(task => (
                <li key={task}>{task}</li>
            ))}
        </ul>
    )
}