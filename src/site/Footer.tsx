
type TypeTitleForFooter = {
    titleForFooter: string
}

export const Footer = (props: TypeTitleForFooter) => {
    return (
        <div>{props.titleForFooter}</div>
    )
}