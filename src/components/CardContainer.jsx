export default function CardContainer({label, children}) {
    return(
        <div className="my-10">
            <h2 className="font-bold text-xl">{label}</h2>
            <div className="flex">
                {children}
            </div>
        </div>
    )
}