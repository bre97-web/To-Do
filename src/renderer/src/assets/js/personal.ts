import { reactive } from "vue";

interface PersonalInterface {
    name: string
}
interface InfoInterface {
    get: () => PersonalInterface
    set: ({}: PersonalInterface) => any
}

const PERSONAL = reactive<PersonalInterface>(JSON.parse(localStorage.getItem('bre97-web-todo-personal-info') as string) || {
    name: 'Click me to edit your info',
})

function Info(): InfoInterface {
    const get = ():PersonalInterface => PERSONAL
    const set = ({name}: PersonalInterface) => {
        PERSONAL.name = name
    }

    return {
        get,
        set
    }
}

export default Info