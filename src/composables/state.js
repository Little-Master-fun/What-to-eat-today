import { useLocalStorage } from "@vueuse/core"

export const useUserState = function () {
    return useLocalStorage("state-user", {})
}