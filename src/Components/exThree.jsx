import { List } from "./Lista/lista";

export function TaskList() {

    const tasks = [
        'Fazer a lista de exercicio de react',
        'Fazer os desafios de react',
        'Fazer o projeto de react'
    ]

    return (
        <>
            <h1>Minhas Tarefas</h1>
            <List tasks={tasks}/>
        </>
    )
}