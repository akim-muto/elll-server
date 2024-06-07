import { file } from "bun"

 const  main = () =>  {
    const value = file("./tsconfig.json")
    try {
        JSON.parse(value.toString())
      } catch (e) {
        console.log("f")
        return
      }
      console.log("t")
      return true
  }
  
  main()