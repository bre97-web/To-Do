import { useNavigate } from "@/hooks/useNavigate";
import { useRouter } from "vue-router";

const routerList = [
    useNavigate('/home', 'Home', 'home'),
    useNavigate('/goals', 'Goals', 'flag'),
    useNavigate('/profile', 'Profile', 'person'),
    useNavigate('/dashboard', 'Dashboard', 'dashboard', false),
]

export const currentIndex = () => {
    const router = useRouter()
    const currentUrl = router.currentRoute.value.path
    for(const index in routerList) {
        if(routerList[index].url === currentUrl) {
            return index
        }
    }
    return 0
}
export const getRouterList = () => routerList
