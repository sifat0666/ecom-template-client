import { Product } from "./../entity/Product";
import { MyContext } from "./../types";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { triggerAsyncId } from "async_hooks";
import cloudinary from "./../utils/cloudinary";

@Resolver()
export class ProductResolver{
    @Query(()=>String)
    product(){
        return 'this.product'
    }

    @Mutation(()=>Product)
    async createProduct(
        @Arg('title') title: string,
        @Arg('body') body: string,
        @Arg('image', {nullable: true}) image: string,
        @Arg('category', {nullable: true}) category: string,
        @Arg('tag', {nullable: true}) tag: string
        // @Ctx() {em}: MyContext
    ){
        const tags = tag.split(" ");

        const uploadImageRespoce = await cloudinary.uploader.upload(image, {
            upload_preset: 'test'
        })

        const imageUrl = uploadImageRespoce.url

        


        const product = await Product.create({
            title,
            body,
            image: imageUrl,
            category,
            tags

        }).save()
        // console.log(product)
        // await em.persistAndFlush(product)        
        return product
    }
}