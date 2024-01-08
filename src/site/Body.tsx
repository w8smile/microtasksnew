
type TypeTitleForBody = {
    titleForBody: string
}
export const Body = (props: TypeTitleForBody) => {
    return (
        <div>{props.titleForBody}</div>
    )
}