import { useRouter } from "next/router"

const Contact = () => {
    const router = useRouter()
    const { work } = router.query
    return <>{work}</>
}

export default Contact