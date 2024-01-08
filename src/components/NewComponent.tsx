
type NewComponentType = {
    students: StudentType []
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((el)=>{
                return(
                    <div>
                        <li>{el.id} {el.name} {el.age}</li>
                    </div>
                )
            })}

        </ul>

    )
}