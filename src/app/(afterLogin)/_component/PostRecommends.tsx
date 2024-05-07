'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import getPostRecommends from '../_lib/getPostRecommends'
import Post from './Post';
import {Post as TypePost} from '@/model/Post'

export default function PostRecommends() {
  const {data} = useQuery({queryKey:['posts', 'recommends'], queryFn: getPostRecommends}) as {data:TypePost[]}
  if(data){
    return data.map((post)=>(
        <Post key={post.postId} post={post}/>
    ))
  }
}
