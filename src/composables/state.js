import { useLocalStorage } from "@vueuse/core"

export const useUserState = function () {
    return useLocalStorage("state-user", {})
}


// export function useLocalStorage(key, initialValue = null) {
//     // 获取数据
//     const getData = () => {
//       const storedValue = localStorage.getItem(key);
//       return storedValue? JSON.parse(storedValue) : initialValue;
//     };
  
//     // 设置数据
//     const setData = (newValue) => {
//       localStorage.setItem(key, JSON.stringify(newValue));
//     };
  
//     // 修改数据
//     const updateData = (updatedValue) => {
//       const currentData = getData();
//       Object.assign(currentData, updatedValue);
//       setData(currentData);
//     };
  
//     // 删除数据
//     const deleteData = (keyToDelete) => {
//       const currentData = getData();
//       delete currentData[keyToDelete];
//       setData(currentData);
//     };
  
//     return { getData, setData, updateData, deleteData };
//   }