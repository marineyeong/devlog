import React from 'react';
import ProjectItem from '../components/ProjectItem';

export default function ProjectLayout() {
  return (
    <ul className="flex justify-between">
      <ProjectItem className="size-[30%]"></ProjectItem>
      <ProjectItem className="size-[30%]"></ProjectItem>
      <ProjectItem className="size-[30%]"></ProjectItem>
    </ul>
  );
}
