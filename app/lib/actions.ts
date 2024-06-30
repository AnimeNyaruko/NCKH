'use server'

import { sql } from "@vercel/postgres";
import { z } from "zod";

export default async function fetchBookLinks({Grade,Subject}:{Grade:number,Subject:string}){
    
}