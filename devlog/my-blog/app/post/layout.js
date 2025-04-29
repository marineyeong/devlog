import React from 'react';
import PostItem from '../components/PostItem';

export default function PostLayout() {
  return (
    <ul className="flex justify-between">
      <PostItem className="size-[30%]"></PostItem>
      <PostItem className="size-[30%]"></PostItem>
      <PostItem className="size-[30%]"></PostItem>
    </ul>
  );
}
