import { useRouter } from "next/router"
import RootLayout from "~/layouts/RootLayouts"

const Contact = () => {
    const router = useRouter()
    const { work } = router.query
    return <RootLayout>{work}</RootLayout>
}

export default Contact