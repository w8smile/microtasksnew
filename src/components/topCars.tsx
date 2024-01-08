type TopCarsListType = {
    topCars: TopCarsType []
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const TopCarsList = (props: TopCarsListType) => {
    return (
        <>
            {props.topCars.map((el, index)=>{
                const CarsNumbers = index +1;
                return(
                    <ul>
                        <li>{CarsNumbers} {el.manufacturer} {el.model}</li>
                    </ul>
                )
            })}
        </>
    )
}