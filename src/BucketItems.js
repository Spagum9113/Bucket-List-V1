import react from "react"

function BucketItem(props) {
    return (
        <div>
            {/* <input type="checkbox" /> */}
            <p className={props.item.completed ? "list-item-completed" : "list-item"}>
                {props.item.id}. {props.item.text}
            </p>
        </div >
    )
}

export default BucketItem