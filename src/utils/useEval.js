/*
 * @Author: tanshaobo
 * @Date: 2023-09-09 15:04:41
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-09-09 15:10:01
 * @Description: file content
 * @FilePath: \spark-reader\src\utils\useEval.js
 */
export const useEval = (s) => {
  const Fn = Function
  return new Fn(`return ${s}`)()
}

export default useEval
