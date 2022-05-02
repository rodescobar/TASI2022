import { useParams } from 'react-router-dom'

const Produto = () => {

    var { id } = useParams()
    return (
        <div>
            Produto com id: { id }
        </div>
    )
}

export default Produto