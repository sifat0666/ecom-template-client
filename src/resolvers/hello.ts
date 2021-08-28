import cloudinary from "./../utils/cloudinary";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
// import cloudinary from './../utils/cloudinary'

@Resolver()
export class HelloResolver{
    @Query(()=> String)
    hello(){
        return 'hello'
    }
    @Mutation(()=> String)
    async img(@Arg('str') str: string){

        const upRes = await cloudinary.uploader.upload(str, {
            upload_preset: 'test'
        })

        console.log(upRes.url)

        // try {
        //    cloudinary.uploader.upload(str, (result) => console.log(result))
            
        // } catch (error) {
        //     console.error(error)
        // }



        return str
    }
}