export default function CardContainer({label, children}) {
    return(
        <div className="my-10">
            <h2 className="font-bold text-3xl">{label}</h2>
            <div className="mt-6">
                {children}
            </div>
        </div>
    )
}