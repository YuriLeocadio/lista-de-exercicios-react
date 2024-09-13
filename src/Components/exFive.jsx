export function PerfilUsuario({name, age, image}) {
    return (
        <>
            <h3>{name}</h3>
            <p>{age}</p>
            <img src={image} />
        </>
    )
}