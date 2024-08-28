import { useLocalStorage } from "@vueuse/core"

export const useUserState = function () {
    return useLocalStorage("state-user", {})
}

export const footerIndex = function () {
    return useLocalStorage("footer-index", 1)
}

